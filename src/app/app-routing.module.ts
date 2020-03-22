import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesComponent } from './components/admin/experiences/experiences.component';
import { TrainingsComponent } from './components/admin/trainings/trainings.component';
import { ProyectsComponent } from './components/admin/proyects/proyects.component';
import { SkillssComponent } from './components/admin/skillss/skillss.component';
import { EditExperienceComponent } from './components/admin/experiences/edit-experience/edit-experience.component';
import { EditProyectComponent } from './components/admin/proyects/edit-proyect/edit-proyect.component';
import { EditSkillComponent } from './components/admin/skillss/edit-skill/edit-skill.component';
import { EditTrainingComponent } from './components/admin/trainings/edit-training/edit-training.component';


const routes: Routes = [
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'experience/edit/:id', component: EditExperienceComponent},
  {path: 'proyect/edit/:id', component: EditProyectComponent},
  {path: 'skill/edit/:id', component: EditSkillComponent},
  {path: 'training/edit/:id', component: EditTrainingComponent},
  {path: 'proyects', component: ProyectsComponent},
  {path: 'skillss', component: SkillssComponent},
  {path: 'trainings', component: TrainingsComponent},
  {path: '**', component: ExperiencesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
