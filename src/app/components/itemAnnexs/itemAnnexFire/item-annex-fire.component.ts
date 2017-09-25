import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    templateUrl: 'name.component.html'
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