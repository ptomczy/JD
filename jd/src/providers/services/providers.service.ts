import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8081/komp';

@Injectable()
export class ProvidersService {
    constructor(private httpClient: HttpClient){
    }

    getInfo(){
        let inf = this.httpClient.get(url);
        return inf;
    }

}