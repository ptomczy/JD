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
                let shiftStep = addVal;
                ;
                result = this.codeForChar(arg, shiftStep);
                break;
            }
            default: {
                result =  '';
            }
        }

        return result;
    }

    codeForChar(chr: string, stp: number) {
        
        let rangeForBigLetters: {low: number, high: number} = {low: 69, high: 90};
        let rangeForSmallLetters: {low: number, high: number} = {low: 97, high: 122};
        
        let tmpCodedResult: Array<string> = [];
        let codedResult: string = '';

        let setOfChars: Array<string> = chr.split("");
        setOfChars.forEach(m => {
            let letterCode = m.charCodeAt(0);
            let newPosition: number = null;

            if(letterCode >= rangeForBigLetters.low && letterCode <= rangeForBigLetters.high) {
                newPosition = this.getNewPosition(letterCode, stp, rangeForBigLetters.low, rangeForBigLetters.high);
            } else if (letterCode >= rangeForSmallLetters.low && letterCode >= rangeForBigLetters.high) {
                newPosition = this.getNewPosition(letterCode, stp, rangeForSmallLetters.low, rangeForSmallLetters.high);
            } else {
                newPosition = 37; //symbol procentu
            };

            tmpCodedResult.push(String.fromCharCode(newPosition));
        });

        codedResult = tmpCodedResult.join("");
        return codedResult;
    }

    getNewPosition(lc: number, stp: number, low: number, high: number){
        let maxRange = high - low;
        let diff = high - lc;
        let stpAnalyzed: number = 0;
        if(stp > maxRange) {
            stpAnalyzed = stp % maxRange;
        } else {
            stpAnalyzed = stp;
        }
        let res: number = 0;
        
        if(stpAnalyzed <= diff) {
            res = lc + stpAnalyzed;
        } else {
            res = low + stpAnalyzed - diff;
        }

        return res;
    }

}
