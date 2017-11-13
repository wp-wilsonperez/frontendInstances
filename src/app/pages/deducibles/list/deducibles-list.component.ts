import { messages } from './../../../../config/project-config';
import { SelectService } from './../../../providers/select.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';



@Component({
    selector:'deducibles-list',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './deducibles-list.component.html',
    styleUrls:['./deducibles-list.component.scss']
})

export class DeduciblesListComponent{
        
        public deducibles:any;
        public deductibleId:any;
        public deductibleForm:FormGroup;
        ramos:any;
        aseguradoras:any;
        messages = messages;

        constructor(public http:Http,public local:UserSessionService, public formBuilder:FormBuilder,public select:SelectService){

            this.deductibleForm = this.formBuilder.group({
                idInsurance:['',Validators.compose([Validators.required])],
                idRamo: ['',Validators.compose([Validators.required])],
                name:['',Validators.compose([Validators.required])],
                description:['',Validators.compose([Validators.required])]
            })

            this.loadDeducibles();
            this.select.loadInsurances().then(result=>{
                this.aseguradoras = result
            });
            this.select.loadRamos().then(result=>{
                this.ramos= result
            })
            
            
        }
        loadDeducibles(){
            this.http.get(config.url+'deductible/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.deducibles = result.deductibles;
                    console.log(this.deducibles);
                    
                    
            })
        }
        idAssign(id){
            this.deductibleId = id;
            console.log(this.deductibleId);
            
         }
         deducibleDetail(deductible){
            
                this.deductibleId = deductible._id;
                console.log(this.deductibleId);
                console.log(deductible);
                
                this.deductibleForm.setValue({idInsurance:deductible.idInsurance,
                idRamo: deductible.idRamo,
                name:deductible.name,
                description:deductible.description});
                
                
                
            }
            deleteDeducible(){
                
                        this.http.delete(config.url+`deductible/delete/${this.deductibleId}?access_token=`+this.local.getUser().token,this.deductibleForm.value).map((result)=>{
                                return result.json()
                            }).subscribe(res=>{
                                if(res.msg == "OK"){
                                        this.loadDeducibles();
                                   
                                }else{
                                   
                                }
                                
                            })
                
                    }
                    editarDeductible(){
                        
                        this.http.post(config.url+`deductible/edit/${this.deductibleId}?access_token=`+this.local.getUser().token,this.deductibleForm.value).map((result)=>{
                            return result.json()
                        }).subscribe(res=>{
                            if(res.msg == "OK"){
                                this.loadDeducibles()
                                  
                            }else{
                               
                            }
                            
                        })
                  
                    
                    
                    
                }

                deleteDeductible(){
                    this.http.delete(config.url+'deductible/delete/'+this.deductibleId+'?access_token='+this.local.getUser().token).toPromise().then(result=>{
                        
                                   let apiResult = result.json();
                                   console.log(apiResult);
                                   
                                   if(apiResult.msg == "OK"){
                                      this.loadDeducibles();
                                       
                                       
                        
                                   }else{
                                      
                                    
                        
                                   }
                                   
                               })
                }

            
}