import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByrang'
})
export class SortByPipe implements PipeTransform {
    transform(array: Array<any>): Array<string> {
        array.sort((a: any, b: any) => {
            if (a.rang < b.rang) {
                return -1;
            } else if (a.rang > b.rang) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}
