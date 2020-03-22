import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill';
import { SkillService } from 'src/app/components/admin/services/skill.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skills: Skill[];
  skill: Skill = {
    id: '',
    category: '',
    name: '',
    image: null,
    fileRef: '',
  };
  id: string;
  image: any;
  imageOriginal: any;
  constructor(private skillService: SkillService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.skillService.getSkill(this.id).subscribe(ski => {
      this.skill = ski;
    });
    this.imageOriginal = this.skill.image;
  }

  // Modificar skill

  save(value: Skill) {
    if ((this.image === this.imageOriginal) || (this.image === null)) {
      this.skill.image = this.imageOriginal;
      this.skillService.modifySkill(value);
    } else {
      this.skillService.modifySkill(value, this.image);
      this.router.navigate(['/skillss']);
    }
  }

  // Eliminar skill

  delete() {
    if (confirm('¿Seguro que desea elminar la skill?')) {
      this.skillService.deleteSkill(this.skill);
      this.flashMessages.show('Skill eliminada!', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/skillss']);
    }
  }

  // Agregar Imagen

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }


}
