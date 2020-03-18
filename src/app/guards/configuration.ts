import { CanActivate, Router } from '@angular/router';
import { ConfigurationService } from '../services/configuration.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfiguracionGuard implements CanActivate {
    constructor(private router: Router,
                private configurationService: ConfigurationService) { }

    canActivate(): Observable<boolean> {
        return this.configurationService.getConfiguracion().pipe(
            map(configuracion => {
                if (configuracion.permitirLogin) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        );
    }
}