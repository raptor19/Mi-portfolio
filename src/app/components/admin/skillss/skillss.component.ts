import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill';
import { SkillService } from 'src/app/components/admin/services/skill.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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
              private flashMessages: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
    // cargar skills de la bd
    this.skillService.getSkills().subscribe(
      ski => {
        this.skills = ski;
      });
    console.log(this.skills);
  }

  // Eliminar Skill

  deleteSkill(skill: Skill) {
    if (confirm('¿Seguro que desea elminar el skill?')) {
      this.skillService.deleteSkill(skill);
      this.flashMessages.show('Skill eliminado!', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/proyects']);
    }
  }

  // Seleccionar skill

  onEdit(skill: Skill) {
    this.idSelected = skill.id;
  }
}
