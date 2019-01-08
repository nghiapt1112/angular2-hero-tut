import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VersionComponent} from './component-interaction/version/version.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {AuthGuard} from './auth/auth.guard';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';



const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [AuthGuard]},
  {path: 'crisis-center', loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule', data: {preload: true}},
  {path: 'component-interaction', loadChildren: './component-interaction/component-interaction.module#ComponentInteractionModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false, // true for log all debuging infor of route
      preloadingStrategy: SelectivePreloadingStrategyService // load immediately right after some modules loaded.
      // The PreloadAllModules strategy does not load feature areas protected by a CanLoad guard
      // canLoad phai return true thi thang PreLoad nay ms dc phep hoat dong.
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
