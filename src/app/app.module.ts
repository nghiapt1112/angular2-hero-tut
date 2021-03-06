import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroesModule} from './heroes/heroes.module';
import {HeroSearchComponent} from './heroes/hero-search/hero-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeroSearchComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    HeroesModule,
    AdminModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
