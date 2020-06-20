import { signupData } from './signupData.interface';
import { AppManagerService } from './../shared/app-manager.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseApp } from 'angularfire2';

export interface AuthResponseData {
    displayName: string;
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}
@Injectable({ providedIn: "root" })
export class AuthService {
    user = new BehaviorSubject<User>(null);
    rememberToggle: boolean = false;
    rememberUser: boolean = false;
    currentUserEmail: string;
    currentUserPass: string;
    private tokenExpirationTimer: any;
    constructor(private http: HttpClient, private router: Router, private appManagerService: AppManagerService, private firebase: FirebaseApp) { }
    private handleError(errorRes: HttpErrorResponse) {
        console.log(errorRes);
        let errorMessage = 'An unknown  error occured!';
        if (!errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'Эмэйл хаяг аль хэдийн бүртгэгдсэн байна. Энэ хаягаараа нэвтэрнүү.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Уучлаарай, таны нууц үг буруу байна. Нууц үгээ дахин шалгана уу.';
                break;
            case 'INVALID_EMAIL':
                errorMessage = 'Уучлаарай, таны эмэйл хаяг буруу байна. Эмэйл хаягаа дахин шалгана уу.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Эмэйл хаяг бүртгэлд байхгүй байна. Шинэ хаяг бүртгүүлэн үү.';
                break;
        }
        return throwError(errorMessage);
    }
    private handleAuthentication(email: string, token: string, userId: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
        this.refreshToken(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
    signup(userName: string, email: string, password: string) {
        this.firebase.auth().signInWithEmailAndPassword(email, password);
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
            {
                email: email,
                password: password,
                displayName: userName,
                returnSecureToken: true
            })
            .pipe(
                catchError(this.handleError),
                tap(resData => {
                    this.handleAuthentication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);
                }));
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        };
        console.log('LOGOUT');
    }
    refreshToken(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            // Sign in the user again in firebase
            alert('signoff ' + this.currentUserEmail);
            alert('signoff ' + this.currentUserPass);
            this.firebase.auth().signInWithEmailAndPassword(this.currentUserEmail, this.currentUserPass);
            this.firebase.auth().currentUser.getIdToken(true)
                .then(function (idToken) {
                    console.log(idToken);
                }).catch(function (error) {
                    console.log(error);
                });
            // refresh token 5seconds before expiration
        }, expirationDuration - 5000);
    }
    login(email: string, password: string) {
        /* rememberToggle is connected to namaig sana checkbox in login section and will always be true when
        checked and false when not. rememberUser is used to store and check if user had clciked namaig sana
        checkbox before clicking login. */
        this.currentUserEmail = email;
        this.currentUserPass = password;
        this.rememberUser = this.rememberToggle;
        this.rememberToggle = false;
        localStorage.setItem('userRemember', JSON.stringify(this.rememberUser));
        console.log(localStorage);
        this.firebase.auth().signInWithEmailAndPassword(this.currentUserEmail, this.currentUserPass);
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(
                catchError(this.handleError),
                tap(resData => {
                    this.handleAuthentication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);
                }));
    }
    rememberer() {
        this.rememberUser = JSON.parse(localStorage.getItem('userRemember'));
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        );
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.refreshToken(expirationDuration);
        }
    }
    saveSignupData(data) {
        //Creates a unique folder using the name
        console.log(data);
        this.http.post(`${environment.cors}${environment.databaseURL}signupData.json`, data).subscribe(res => { console.log(res); });
    }
    getUserNames() {
        return this.http.get<signupData>(`${environment.cors}${environment.databaseURL}signupData.json`)
            .pipe(map(res => {
                const namesArr = [];
                console.log(res);
                for (const key in res) {
                    if (res.hasOwnProperty(key)) {
                        namesArr.push(res[key].userName);
                    }
                }
                console.log(namesArr);
                return namesArr;
            }));
    }
    getUserJoinDate(userName: string) {
        return this.http.get<signupData>(`${environment.cors}${environment.databaseURL}signupData.json`)
            .pipe(map(res => {
                const dataArr = [];
                const namesArr = [];
                console.log(res);
                for (const key in res) {
                    if (res.hasOwnProperty(key)) {
                        dataArr.push(res[key]);
                        namesArr.push(res[key].userName);
                    }
                }
                const currentUserIndex = namesArr.indexOf(userName);
                const joinDate: string = dataArr[currentUserIndex].joinDate;
                console.log(dataArr);
                console.log(joinDate);
                return joinDate;
            }));
    }

    setUserName(name) {
        this.appManagerService.userName.next(name);
        localStorage.setItem('userName', name);
    }
    getEmailAndPass(userName: string) {
        //Getting stored email and pass to later use to signInWithEmailAndPassword in firebase
        return this.http.get<signupData>(`${environment.cors}${environment.databaseURL}signupData.json`)
            .pipe(map(res => {
                const dataArr = [];
                const namesArr = [];
                console.log(res);
                for (const key in res) {
                    if (res.hasOwnProperty(key)) {
                        dataArr.push(res[key]);
                        namesArr.push(res[key].userName);
                    }
                }
                const currentUserIndex = namesArr.indexOf(userName);               

                const emailAndPassword = {
                    email: dataArr[currentUserIndex].email,
                    password: dataArr[currentUserIndex].password
                }
                return emailAndPassword;;
            }))
    }
}