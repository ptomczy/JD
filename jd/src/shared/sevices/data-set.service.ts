import { Injectable } from "@angular/core";
import * as dataJson from '../../../src/assets/sample-data/data-json-1.json';

const sourceData: any = dataJson;

@Injectable()
export class DataSetService {

    getfiendsOfElement(el: number){
        let data = sourceData;
        return data.default[el].friends;
    }

    get fullData() {
        return sourceData.default;
    }
}