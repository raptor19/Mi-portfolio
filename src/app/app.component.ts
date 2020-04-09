import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolioCristian';
  langs: string[] = [];
  es = 'es';
  en = 'en';

  constructor(private translate: TranslateService,
              private spinner: NgxSpinnerService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  // Traducir sitio a es
  changeEs() {
    this.translate.use(this.es);
  }
  // Traducir el sitio a en
  changeEn() {
    this.translate.use(this.en);
  }
}
