import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    templateUrl: 'name.component.html'
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