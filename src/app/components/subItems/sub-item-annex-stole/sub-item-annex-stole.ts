import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sub-item-annex-profit',
    templateUrl: 'sub-item-annex-profit.html'
})

export class SubItemAnnexProfit implements OnInit {
    public itemExtraForm:FormGroup;
    constructor(public formBuilder:FormBuilder) {
        this.itemExtraForm = this.formBuilder.group({
            
                idItemAnnexCar:[],
                extraDetails:[],
                extraValue:[],
                extraTasa:[],
                exclusionDate:[],
                inclusionDate:[]

            });
     }

    ngOnInit() { }
}