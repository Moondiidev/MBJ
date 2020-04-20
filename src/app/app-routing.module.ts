import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'seller-set-up', loadChildren: () => import('./seller-set-up/seller-set-up.module').then(m => m.SellerModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
