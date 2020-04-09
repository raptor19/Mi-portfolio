import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logForm: FormGroup;
  email: string;
  password: string;
  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  @ViewChild('hamburguer', { static: false }) hamburguer: any;

  constructor(private router: Router,
              private flashMessages: FlashMessagesService,
              private loginService: LoginService,
              ) { }

  ngOnInit() {
    this.logForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  openHamburguerButton() {
    this.hamburguer.toggleClass('open');
  }

  get input() { return this.logForm.get('email'); }


  // Metodo que llama al servicio login pasando el email y el password ingresado

  login() {
    this.loginService.login(this.email, this.password)
    .then( res => {
      this.router.navigate(['admin']);
    })
    .catch(error => {
      this.flashMessages.show(error.message, {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    });
    this.loginForm.resetForm();
  }
}
