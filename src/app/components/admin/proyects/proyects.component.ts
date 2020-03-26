import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';

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
  @ViewChild('btnCloseModal', { static: false }) btnCloseModal: ElementRef;
  @ViewChild('btnAddProject', { static: false }) btnAddProject: ElementRef;
  @ViewChild('modal', { static: false }) modal: ElementRef;

  constructor(private projectService: ProjectService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      pro => {
        this.proyects = pro;
      });
    // cargo los botones en el servicio
    this.projectService.btnCloseModal = this.btnCloseModal;
    this.projectService.btnAddProject = this.btnAddProject;
  }

  // Eliminar proyecto

  deleteProject(project: Project) {
    if (confirm('¿Seguro que desea elminar el proyecto?')) {
      this.projectService.deleteProject(project);
      this.flashMessages.show('Proyecto eliminado!', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/proyects']);
    }
  }

  // Editar proyecto

  editProject(project: Project) {

  }

  onOpen(event: any) {
    console.log(event);
  }
  onClose(event: any) {
    console.log(event);
  }

}
