import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private flashMessagesService: FlashMessagesService) {

   }

  ngOnInit() {
  }

  enviado() {
    this.flashMessagesService.show('Mensaje Enviado!', { cssClass: 'alert-success', timeout: 1000 });
  }

}
