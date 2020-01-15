import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioCristian';
  langs: string[] = [];
  es = 'es';
  en = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
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
