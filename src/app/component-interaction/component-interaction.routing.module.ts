import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VersionComponent} from './version/version.component';
import {VoterParentComponent} from './voter/voter-parent.component';
import {CenterComponent} from './center/center.component';
import {MissionControlComponent} from './mission/missioncontrol.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CenterComponent,
    children: [
      {path: 'version', component: VersionComponent},
      {path: 'voter', component: VoterParentComponent},
      {path: 'mission', component: MissionControlComponent},
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentInteractionRoutingModule {
}
