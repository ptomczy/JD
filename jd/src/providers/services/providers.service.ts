import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8081';

@Injectable()
export class ProvidersService {
    constructor(private http: HttpClient){
    }

    getInfo(){
        this.http.get(url);
        return null;
    }

}