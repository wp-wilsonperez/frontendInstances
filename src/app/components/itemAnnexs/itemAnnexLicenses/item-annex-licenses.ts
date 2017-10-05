import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'item-annex-rc',
    templateUrl: 'item-annex-rc.html'
})

export class ItemAnnexRc implements OnInit {
    public itemAnnexRcForm:FormGroup;
    constructor(public fb:FormBuilder) {
        this.itemAnnexRcForm = fb.group({
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