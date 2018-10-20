import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/observable';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptor');
        const copiedRequest = req.clone({params: new HttpParams().set('auth', this.authService.getToken())});
        return next.handle(copiedRequest);
    }
}