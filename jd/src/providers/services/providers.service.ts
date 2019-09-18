import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:3000/dupa/';

@Injectable()
export class ProvidersService {
    constructor(private httpClient: HttpClient){
    }

    getInfo(){
        let inf = this.httpClient.get(url + 'romek/' + 'cośTamJakoParametr');
        return inf;
    }

    postInfo(){
        let inf = this.httpClient.post(url + 'pst/', {"val": "From outside"}).subscribe(
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