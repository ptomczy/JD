import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'bubasPipe'
})
export class BubasPipe implements PipeTransform {
    transform(arg: any, type: string, addVal?: any) {
        let result;

        switch(type){
            case 'number': {
                result = arg * addVal;
                break;
            }
            case 'krypto': {
                console.log(arg.split(""));
                result = 'No działa, kurwa!';
                break;
            }
            default: {
                result =  '';
            }
        }

        return result;
    }
}
