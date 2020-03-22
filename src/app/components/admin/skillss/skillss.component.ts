import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill';
import { SkillService } from 'src/app/components/admin/services/skill.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-skillss',
  templateUrl: './skillss.component.html',
  styleUrls: ['./skillss.component.css']
})
export class SkillssComponent implements OnInit {

  skills: Skill[];
  proyect: Skill = {
    id: '',
    category: '',
    name: '',
    image: null,
    fileRef: '',
  };
  idSelected: string;
  image: any;

  @ViewChild('skillForm', { static: false }) proyectForm: NgForm;
  @ViewChild('btnCloseAddS', { static: false }) btnCloseAddS: ElementRef;

  constructor(private skillService: SkillService,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.skillService.getSkills().subscribe(
      ski => {
        this.skills = ski;
      });
    console.log(this.skills);
  }

  // Seleccionar skill

  onEdit(skill: Skill) {
    this.idSelected = skill.id;
  }

  // Agregar Skill

  addProyect(value: Skill) {
    // Agregar el nuevo proyecto
    if (value != null) {
      this.skillService.preAddAndUpdateSkill(value, this.image);
      this.flashMessages.show('Skill Agregado', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      this.proyectForm.resetForm();
      this.btnCloseAddS.nativeElement.click();
    }
  }

  // Agregar Imagen

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

}
