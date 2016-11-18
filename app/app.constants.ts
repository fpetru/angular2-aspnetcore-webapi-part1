import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiServer: string = "http://localhost:6001/";
    public ApiUrl: string = "api/notes";
    public ServerWithApiUrl: string = this.ApiServer + this.ApiUrl;
}