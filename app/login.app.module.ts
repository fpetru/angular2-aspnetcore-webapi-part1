
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, JsonpModule } from '@angular/http';

/* components */
import { LoginComponent } from './components/login/login.component';
import { LoginService} from "./services/user/loginService";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, ReactiveFormsModule],
    declarations: [LoginComponent],
    providers: [LoginService],
    bootstrap: [LoginComponent]
})

export class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
