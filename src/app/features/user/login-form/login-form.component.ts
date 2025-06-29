import { Component } from '@angular/core';
import { DynamicFormsComponent, FormConfig } from '../../../shared/components/dynamic-forms/dynamic-forms.component';
import { USER_LOGIN_FORM_CONFIG } from '../../../shared/components/dynamic-forms/form.config';

@Component({
    selector: 'app-login-form',
    imports: [DynamicFormsComponent],
    template: ` <app-dynamic-form [config]="userConfig" (formSubmit)="handleLogin($event)" /> `,
    styles: ``,
})
export class LoginFormComponent {
    handleLogin(event: Record<string, unknown>) {
        throw new Error('Method not implemented.');
    }
    readonly userConfig: FormConfig = USER_LOGIN_FORM_CONFIG;
}
