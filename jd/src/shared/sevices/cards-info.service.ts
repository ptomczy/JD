import { Injectable } from "@angular/core";
import * as CI from 'src/assets/sample-data/cards_info.json';

const cardsInfo: any = CI;

@Injectable()
export class CardsInfoService {

    get cardsInfFull(){
        return cardsInfo.default;
    }

}