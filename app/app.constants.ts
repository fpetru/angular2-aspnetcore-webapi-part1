import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:53617/";
    public ApiUrl: string = "api/notes";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
