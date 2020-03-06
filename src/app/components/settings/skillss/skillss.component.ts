import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-skillss',
  templateUrl: './skillss.component.html',
  styleUrls: ['./skillss.component.css']
})
export class SkillssComponent implements OnInit {

  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  // Agregar Skill

  onSubmit(skillsForm: NgForm) {
    this.skillService.addSkill(skillsForm.value);
  }

  // Resetear formulario

  resetForm(skillsForm: NgForm) {
    if (skillsForm != null) {
      skillsForm.reset();
      this.skillService.skillSelected = new Skill();
    }
  }

}
