import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'trimString'
})

export class TrimStringPipe implements PipeTransform{

    transform(value:any, numberOfChar:number): string {
     if(value.length > numberOfChar){
        return value.substr(0,numberOfChar)+'...'
     }
     return value
    }
}