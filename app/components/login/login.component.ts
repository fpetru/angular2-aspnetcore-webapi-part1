import { Component } from '@angular/core';
import { LoginService } from "../../services/user/loginService";
import { UserLoginModel } from "../../models/user/userLoginModel";
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { ResponseStatus } from "../../models/common/responseStatus";

@Component({
    selector: 'login',
    templateUrl: 'html/login.component.html'
})

export class LoginComponent {
    authError: boolean;
    unknownError: boolean;
    loginForm: FormGroup;

    constructor(private loginService: LoginService,
        fb: FormBuilder) {

        let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;

        this.loginForm = fb.group({
            userName: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
            password: ['', Validators.required],
            keepMeLoggedIn: false
        });
    }

    onSubmit() {

        if (!this.loginForm.valid) {
            Object.keys(this.loginForm.controls).forEach(key => {
                this.loginForm.controls[key].markAsTouched();
            });
            return;
        }

        var values: any = this.loginForm.value;
        this.loginService.login(new UserLoginModel(values.userName, values.password, values.keepMeLoggedIn))
            .subscribe((data: ResponseStatus) => {
                if (data.success) {
                    document.location.href = "/";
                } else {
                    this.authError = true;
                }
            },
            error => this.unknownError = true);
    }
}

