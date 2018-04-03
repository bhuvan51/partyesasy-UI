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

const appRountes: Routes = [
  {path: '', pathMatch: 'full', component: HomepageComponentComponent},
  {path: '**', component: HomepageComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponentComponent,
    HeaderComponent,
    FooterComponent,
    QuestionBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRountes),
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatStepperModule
  ],
  exports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {
}
