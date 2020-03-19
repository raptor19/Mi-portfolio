import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Project } from 'src/app/models/project';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyects: Project[];
  proyect: Project = {
    id: '',
    title: '',
    urlGit: '',
    urlWeb: '',
    image: null,
    fileRef: '',
    description: '',
    technologies: '',
  };
  idSelected: string;
  image: any;

  @ViewChild('proyectForm', { static: false }) proyectForm: NgForm;
  @ViewChild('btnCloseAddP', { static: false }) btnCloseAddP: ElementRef;

  constructor(private projectService: ProjectService,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      pro => {
        this.proyects = pro;
      });
  }

  // Seleccionar proyecto

  onEdit(proyect: Project) {
    this.idSelected = proyect.id;
  }

  // Agregar Proyecto

  addProyect(value: Project) {
      // Agregar el nuevo proyecto
      if (value != null) {
        this.projectService.preAddAndUpdatePost(value, this.image);
        this.flashMessages.show('Proyecto Agregado', {
          cssClass: 'alert-danger',
          timeout: 4000
        });
        this.proyectForm.resetForm();
        this.btnCloseAddP.nativeElement.click();
      }
  }

  // Agregar Imagen

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

}
