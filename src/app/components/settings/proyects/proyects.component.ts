import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { NgForm, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  // Agregar Proyecto

  onSubmit(proyectForm: NgForm) {
    this.projectService.addProject(proyectForm.value);
  }

  // Resetear formulario

  resetForm(proyectForm: NgForm) {
    if (proyectForm != null) {
      proyectForm.reset();
      this.projectService.projectSelected = new Project();
    }
  }




}
