import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  validatingForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormSubscriptionName: new FormControl('', Validators.required),
      modalFormSubscriptionEmail: new FormControl('', Validators.email)
    });
  }

  get modalFormSubscriptionName() {
    return this.validatingForm.get('modalFormSubscriptionName');
  }

  get modalFormSubscriptionEmail() {
    return this.validatingForm.get('modalFormSubscriptionEmail');
  }

}
