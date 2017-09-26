import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'item-annex-profit',
    templateUrl: 'item-annex-profit.html'
})

export class ItemAnnexProfit implements OnInit {
    public itemAnnexProfitForm:FormGroup;
    constructor(public fb:FormBuilder) {
        this.itemAnnexProfitForm = fb.group({
            idPolicyAnnex:[],
            numberItem:[],// (esto sera auto incrementable)
            totalValueItem:[],
            totalValuePrimaItem:[],
            detailsItem:[],
            observationsItem:[],
            validDays:[],
            exclusionDate:[],
            inclusionDate:[],
            modificationDate:[],

        });


        }

    ngOnInit() { }
}