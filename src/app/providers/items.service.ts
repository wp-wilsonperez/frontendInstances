import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {
    days:any;
    tasa:any;
    deducible:any;

    constructor() { }
    getDays(){
        return this.days;
    }
    getTasa(){
        return this.tasa;
    }
    getDeducible(){
       return  this.deducible;
    }
    setDays(days){
        this.days = days
    }
    setTasa(tasa){
        this.tasa = tasa
    }
    setDeducible(deducible){
        this.deducible = deducible
    }

}