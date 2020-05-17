import { PersonalModel } from 'src/app/shared/personal.model';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SellerSetUpService } from '../seller-set-up.service';

@Injectable({providedIn: 'root'})
export class PersonalResolverService implements Resolve<PersonalModel>{
    constructor(private sellerSetUpService : SellerSetUpService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.sellerSetUpService.fetchPersonalInfo();
    }
}
