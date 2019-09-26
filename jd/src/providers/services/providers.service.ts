import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:3000/dupa/';

@Injectable()
export class ProvidersService {
    constructor(private httpClient: HttpClient){
    }

    getInfo(){
        let inf = this.httpClient.get(url + 'romek/' + 'Moj_Parametr');
        return inf;
    }

    getSth(){
        let sth = this.httpClient.get(url + 'getThree');
        return sth;
    }

    postInfo(){
        let inf = this.httpClient.post(url + 'pst', {"sth": "Marcinek"}).subscribe(
            (val) => {
                console.log("Piękny zwrot o wyniku: ", val);
            },
            response => {
                console.log("Response jest błędem:", response);
            },
            () => {
                console.log("Wszystko zakończone");
            }
        );
        return inf;
    }

}