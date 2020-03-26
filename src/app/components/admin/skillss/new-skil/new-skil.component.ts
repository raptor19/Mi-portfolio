import { Component, OnInit, ViewChild } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill';
import { SkillService } from '../../services/skill.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-skil',
  templateUrl: './new-skil.component.html',
  styleUrls: ['./new-skil.component.css']
})
export class NewSkilComponent implements OnInit {
image: any;
@ViewChild('skillForm', { static: false }) skillForm: NgForm;
  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  // Agregar Skill

  addSkill(value: Skill) {
    // Agregar el nuevo proyecto
    if (value != null) {
      this.skillService.preAddAndUpdateSkill(value, this.image);
      this.skillForm.resetForm();
    }
  }

  // Agregar Imagen

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

}
