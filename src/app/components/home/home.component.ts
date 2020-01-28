import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, query, state, stagger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('homeAnimation', [
      transition(':enter', [
        query('.mainContent', [
          style({ opacity: 0, transform: 'translateY(-100px)'}),
          stagger( -30, [
            animate('500ms cubic-bezier(0.35, 0,0.25,1)', style({ opacity: 1, transform: 'none'}))
          ])
        ])
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
