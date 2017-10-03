import { SelectService } from './../../../providers/select.service';
import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { config } from '../../../../config/project-config';

@Component({
    selector: 'item-annex-car',
    templateUrl: 'itemAnnexCar.html'
})

export class ItemAnnexCar implements OnInit {
    public itemAnnexCarForm:FormGroup;
    public polizaAnnexId:number;
    public cars:any;
    public carUses:any;

    constructor(public fb:FormBuilder,public http:Http,public local:UserSessionService,public selectService:SelectService) {
        this.itemAnnexCarForm = this.fb.group({
            idPolicyAnnex:[''],
            idCar:[''],
            tasa:[''],
            carUse:[''],
            carValue:[''],
            amparoPatrimonial:[''],
            rc:[''],
            others:['']
        })
        this.selectService.loadCars().then((result)=>{
            this.cars = result;
        });
        this.selectService.loadCarUse().then((result)=>{
            this.carUses = result;
        })
        
     }


    saveItemAnnexCar(){
        console.log(this.itemAnnexCarForm.value);
        
        this.itemAnnexCarForm.controls['idPolicyAnnex'].setValue(this.polizaAnnexId);
        this.http.post(config.url+'itemAnnexCar/add?access_token='+this.local.getUser().token,this.itemAnnexCarForm.value).map((result)=>{  
            return result.json()
        }).subscribe(res=>{
             if(res.msg == "OK"){
                   // this.loadItemAnnexCar(this.polizaAnnexId);
                   // this.messageCar = "Elemento Auto Guardado"
                    this.itemAnnexCarForm.reset();
            }else{
                 // this.error = true;
                //this.message = "No tiene privilegios de guardar elementos autos"
               
            }
            console.log(res);
          // this.loadItemAnnexCar(this.polizaAnnexId);
            
        })
    }

    ngOnInit() { }
}