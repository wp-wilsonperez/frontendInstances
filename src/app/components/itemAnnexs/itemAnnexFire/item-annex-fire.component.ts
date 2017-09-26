import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'item-annex-fire',
    templateUrl: 'item-annex-fire.component.html'
})

export class ItemAnnexFire implements OnInit {
    public itemAnnexFireForm:FormGroup;
    constructor(public fb:FormBuilder) { 
            this.itemAnnexFireForm = fb.group({
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