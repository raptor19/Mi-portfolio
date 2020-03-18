import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CarouselModule,
         NavbarModule, WavesModule, ButtonsModule, CardsModule,
         IconsModule, ModalModule, InputsModule, CheckboxModule} from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { ExampleComponent } from './components/example/example.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ExperiencesComponent } from './components/settings/experiences/experiences.component';
import { ProyectsComponent } from './components/settings/proyects/proyects.component';
import { TrainingsComponent } from './components/settings/trainings/trainings.component';
import { SkillssComponent } from './components/settings/skillss/skillss.component';
import { LoginComponent } from './components/login/login.component';
// Services
import { ProjectService } from './services/project.service';
import { ExperienceService } from './services/experience.service';
import { SkillService } from './services/skill.service';

// Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { TrainingService } from './services/training.service';
import { EditExperienceComponent } from './components/settings/experiences/edit-experience/edit-experience.component';
import { EditTrainingComponent } from './components/settings/trainings/edit-training/edit-training.component';
import { EditProyectComponent } from './components/settings/proyects/edit-proyect/edit-proyect.component';
import { EditSkillComponent } from './components/settings/skillss/edit-skill/edit-skill.component';



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
    ExampleComponent,
    SettingsComponent,
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
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    WavesModule.forRoot(),
    ButtonsModule.forRoot(),
    CardsModule.forRoot(),
    CarouselModule.forRoot(),
    IconsModule,
    ModalModule.forRoot(),
    InputsModule,
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
    SkillService,
    TrainingService,
    { provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
