import { ProfessionalModel } from 'src/app/shared/professional.model';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SellerSetUpService } from '../seller-set-up.service';

@Injectable({providedIn: 'root'})
export class ProfessionalResolverService implements Resolve<ProfessionalModel>{
    constructor(private sellerSetUpService : SellerSetUpService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.sellerSetUpService.fetchProfessionalInfo();
    }
}
