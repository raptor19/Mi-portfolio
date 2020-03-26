import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectsComponent } from './proyects/proyects.component';
import { SkillssComponent } from './skillss/skillss.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EditExperienceComponent } from './experiences/edit-experience/edit-experience.component';
import { EditTrainingComponent } from './trainings/edit-training/edit-training.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../../shared/guards/auth.guard';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'experiences', component: ExperiencesComponent },
          { path: 'experience/edit/:id', component: EditExperienceComponent },
          { path: 'training/edit/:id', component: EditTrainingComponent },
          { path: 'proyects', component: ProyectsComponent },
          { path: 'skillss', component: SkillssComponent },
          { path: 'trainings', component: TrainingsComponent },
          { path: '', component: ExperiencesComponent },
        ]
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
