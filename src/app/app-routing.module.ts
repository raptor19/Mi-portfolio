import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoEncontradoComponent } from './components/pages/main/no-encontrado/no-encontrado.component';
import { MainComponent } from './components/pages/main/main.component';



const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main' , component: MainComponent },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(
          m => m.AdminModule)
  },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
