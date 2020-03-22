import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// Material Design Bootstrap
import { MdbModule } from './mdb.module';
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { NoEncontradoComponent } from './components/pages/no-encontrado/no-encontrado.component';
import { AdminComponent } from './components/admin/admin.component';
import { ExperiencesComponent } from './components/admin/experiences/experiences.component';
import { ProyectsComponent } from './components/admin/proyects/proyects.component';
import { TrainingsComponent } from './components/admin/trainings/trainings.component';
import { SkillssComponent } from './components/admin/skillss/skillss.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EditExperienceComponent } from './components/admin/experiences/edit-experience/edit-experience.component';
import { EditTrainingComponent } from './components/admin/trainings/edit-training/edit-training.component';
import { EditProyectComponent } from './components/admin/proyects/edit-proyect/edit-proyect.component';
import { EditSkillComponent } from './components/admin/skillss/edit-skill/edit-skill.component';

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
import { CheckboxModule} from 'angular-bootstrap-md';

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
    AdminComponent,
    ExperiencesComponent,
    ProyectsComponent,
    TrainingsComponent,
    SkillssComponent,
    LoginComponent,
    EditExperienceComponent,
    EditTrainingComponent,
    EditProyectComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-cristian'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
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
    NavbarModule,
    CheckboxModule,
    FlashMessagesModule.forRoot(),
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
    TrainingService,
    { provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
