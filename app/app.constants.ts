import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiServer: string = "http://localhost:5000/";
    public ApiUrl: string = "api/";
    public ServerWithApiUrl: string = this.ApiServer + this.ApiUrl;
}