import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'seller-set-up', loadChildren: () => import('./seller-set-up/seller-set-up.module').then(m => m.SellerModule)},
  {path: 'seller-board', loadChildren: () => import('./seller-board/seller-board.module').then(m => m.SellerBoardModule)},
  {path: 'user-profile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule)},
  {path: 'gig-creation', loadChildren: () => import('./gig-creation/gig-creation.module').then(m => m.GigCreationModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
