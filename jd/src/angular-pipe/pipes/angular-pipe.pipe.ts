import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'bubasPipe'
})
export class BubasPipe implements PipeTransform {
    transform(arg: number, type: string, addVal?: any) {
        let result;

        switch(type){
            case 'number': {
                result = arg * addVal;
                break;
            }
            case 'JSONObject': {
                result = arg;
                break;
            }
            default: {
                result =  '';
            }
        }

        return result;
    }
}
