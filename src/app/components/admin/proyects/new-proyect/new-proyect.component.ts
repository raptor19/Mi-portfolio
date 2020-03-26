import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../../../shared/models/project';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {
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
image: any;
@ViewChild('proyectForm', { static: false }) proyectForm: NgForm;
@ViewChild('btnCloseAddP', { static: false }) btnCloseAddP: ElementRef;
@ViewChild('btnC', { static: false }) btnC: ElementRef;

constructor(private projectService: ProjectService) { }

ngOnInit() {
}

// Agregar Proyecto

  addNewProject(value: Project) {
    this.projectService.preAddAndUpdateProject(value, this.image);
    this.proyectForm.resetForm();
    this.btnC.nativeElement.click();
  }

// Agregar Imagen

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

}
