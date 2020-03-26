import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material Design Bootstrap
import { MdbModule } from './mdb.module';
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/main/home/home.component';
import { AboutComponent } from './components/pages/main/about/about.component';
import { SkillsComponent } from './components/pages/main/skills/skills.component';
import { ProjectsComponent } from './components/pages/main/projects/projects.component';
import { ContactComponent } from './components/pages/main/contact/contact.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { NoEncontradoComponent } from './components/pages/main/no-encontrado/no-encontrado.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { AdminModule } from './components/admin/admin.module';


// Services
import { ProjectService } from './components/admin/services/project.service';
import { ExperienceService } from './components/admin/services/experience.service';
import { SkillService } from './components/admin/services/skill.service';
import { TrainingService } from './components/admin/services/training.service';

// Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
// mdb

import { CarouselModule } from 'angular-bootstrap-md';
import { NavbarModule} from 'angular-bootstrap-md';
import { WavesModule} from 'angular-bootstrap-md';
import { ButtonsModule} from 'angular-bootstrap-md';
import { CardsModule} from 'angular-bootstrap-md';
import { IconsModule} from 'angular-bootstrap-md';
import { ModalModule} from 'angular-bootstrap-md';
import { InputsModule} from 'angular-bootstrap-md';
import { InputUtilitiesModule } from 'angular-bootstrap-md';
import { CheckboxModule} from 'angular-bootstrap-md';
import { LoginService } from './shared/services/login.service';


// Translate
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NoEncontradoComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-cristian'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MdbModule,
    ReactiveFormsModule,
    HttpClientModule,
    WavesModule.forRoot(),
    ButtonsModule.forRoot(),
    CardsModule.forRoot(),
    CarouselModule.forRoot(),
    IconsModule,
    ModalModule.forRoot(),
    InputsModule,
    InputUtilitiesModule,
    NavbarModule,
    CheckboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ProjectService,
    ExperienceService,
    AngularFireStorageModule,
    SkillService,
    LoginService,
    TrainingService,
    { provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
