import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesComponent } from './components/settings/experiences/experiences.component';
import { TrainingsComponent } from './components/settings/trainings/trainings.component';
import { ProyectsComponent } from './components/settings/proyects/proyects.component';
import { SkillssComponent } from './components/settings/skillss/skillss.component';


const routes: Routes = [
  {path: 'experiences', component: ExperiencesComponent},
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
