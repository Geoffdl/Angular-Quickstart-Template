import { Component } from '@angular/core';
import { LoginFormComponent } from '../../features/user/login-form/login-form.component';

@Component({
    selector: 'app-login',
    imports: [LoginFormComponent],
    template: ` <app-login-form> </app-login-form> `,
    styles: ``,
})
export class LoginComponent {}
