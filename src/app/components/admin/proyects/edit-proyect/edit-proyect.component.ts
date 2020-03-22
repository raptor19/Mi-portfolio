import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { ProjectService } from '../../services/project.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {

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
  id: string;
  image: any;
  imageOriginal: any;
  @Input() pro: Project;

  constructor(private projectService: ProjectService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.projectService.getProject(this.id).subscribe(pro => {
      this.proyect = pro;
    });
    this.imageOriginal = this.proyect.image;
  }

  // Modificar proyecto

  save(value: Project) {
    if ((this.image === this.imageOriginal) || (this.image === null) ) {
      this.proyect.image = this.imageOriginal;
      this.projectService.modifyProject(value);
    } else {
      this.projectService.modifyProject(value, this.image);
      this.router.navigate(['/proyects']);
    }
  }

  // Eliminar proyecto

  delete() {
    if (confirm('¿Seguro que desea elminar el proyecto?')) {
      this.projectService.deleteProject(this.proyect);
      this.flashMessages.show('Proyecto eliminado!', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/proyects']);
    }
  }

   // Agregar Imagen

   handleImage(event: any): void {
    this.image = event.target.files[0];
  }

}
