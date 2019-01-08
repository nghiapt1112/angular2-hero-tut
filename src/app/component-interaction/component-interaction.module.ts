import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../in-memory-data.service';
import {VersionComponent} from './version/version.component';
import {VersionChildComponent} from './version/version-child.component';
import {ComponentInteractionRoutingModule} from './component-interaction.routing.module';
import {VoterChildComponent} from './voter/voter-child.component';
import {VoterParentComponent} from './voter/voter-parent.component';
import {CenterComponent} from './center/center.component';
import {MissionControlComponent} from './mission/missioncontrol.component';
import {AstronautComponent} from './mission/astronaut.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    ComponentInteractionRoutingModule
  ],
  declarations: [
    CenterComponent,
    VersionComponent,
    VersionChildComponent,
    VoterChildComponent,
    VoterParentComponent,
    MissionControlComponent,
    AstronautComponent
  ]
})
export class ComponentInteractionModule {
}
