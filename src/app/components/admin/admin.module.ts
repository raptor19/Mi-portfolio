import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewProyectComponent } from './proyects/new-proyect/new-proyect.component';
import { ProyectsComponent } from '../admin/proyects/proyects.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EditTrainingComponent } from './trainings/edit-training/edit-training.component';
import { EditSkillComponent } from './skillss/edit-skill/edit-skill.component';
import { EditProyectComponent } from './proyects/edit-proyect/edit-proyect.component';
import { EditExperienceComponent } from './experiences/edit-experience/edit-experience.component';
import { SkillssComponent } from './skillss/skillss.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { IconsModule, ModalModule, ButtonsModule, WavesModule} from 'angular-bootstrap-md';
import { AdminRoutingModule } from './admin-routing.module';
import { NewSkilComponent } from './skillss/new-skil/new-skil.component';
import { AdminComponent } from '../admin/admin.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    IconsModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    WavesModule.forRoot(),
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    NewProyectComponent,
    EditProyectComponent,
    ProyectsComponent,
    TrainingsComponent,
    EditTrainingComponent,
    SkillssComponent,
    EditSkillComponent,
    ExperiencesComponent,
    EditExperienceComponent,
    NewSkilComponent,

  ]

})
export class AdminModule { }
