import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { HomepageComponentComponent } from './containers/homepage-component/homepage-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import {
  MatDatepickerModule, MatInputModule, MatNativeDateModule,
  MatIconModule, MatStepperModule
} from '@angular/material';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BackendserviceService} from "./backendservice.service";
import { PartySpaceListComponent } from './party-space-list/party-space-list.component';

const appRountes: Routes = [
  {path: '', pathMatch: 'full', component: HomepageComponentComponent},
  {path: 'partySpace-List', component: PartySpaceListComponent},
  {path: '**', component: HomepageComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponentComponent,
    HeaderComponent,
    FooterComponent,
    QuestionBoxComponent,
    PartySpaceListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRountes),
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [BackendserviceService],
  bootstrap: [AppComponent]
})



export class AppModule {
}
