import { AseguradorasListComponent } from './../list/aseguradoras-list.component';
import { config } from '../../../../config/project-config';
import { Http } from '@angular/http';
import { Component, ViewEncapsulation, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { UserSessionService } from './../../../providers/session.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'az-multiple-image-uploader',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './multiple-image-uploader.component.html',
  styleUrls: ['./multiple-image-uploader.component.scss']
})
export class MultipleImageUploaderComponent { 
    public images: string[] = [];
    public logo:any;
    public input:any;
    public logoImg:any;
    public secImgs:any = [];
    public resImg:any;
    public logoEdit= '';
    public img1= '';
    public img2= '';
    public img3= '';
    config = config;

    @Output() change =new EventEmitter();
  
    constructor( public changeDetectorRef: ChangeDetectorRef,public http:Http,public local:UserSessionService) {
    
    }    
    
    fileChange(input){
        this.input = input.files;
        this.readFiles(input.files);

    }
    
    readFile(file, reader, callback){
        reader.onload = () => {
            callback(reader.result);
        }
        reader.readAsDataURL(file);
    }
    
    readFiles(files, index=0){
        let reader = new FileReader();
        
        if (index in files){
            this.readFile(files[index], reader, (result) =>{
                if(this.images.length >= 3){
                    
                }else{
                
              
                
                if(this.logo == undefined){
                      console.log(this.input[0]);
                      this.logo = result;
                     this.makeFileRequest(config.url+'account/addaccountImg?access_token='+this.local.getUser().token,this.input[0]).map(res=>{
                         return res;
                     }).subscribe(result=>{
                         this.logoImg = result;
                         console.log(this.logoImg);
                         this.change.emit(['logo',this.logoImg.accountImg]);
                         
                         
                     })
                  /*  this.http.post(config.url+'account/addaccountImg?access_token='+this.local.getUser().token,files[index]).toPromise().then(result=>{
                        console.log(result);
                        
                    })*/
                    
                }else{

                this.makeFileRequest(config.url+'account/addaccountImg?access_token='+this.local.getUser().token,this.input[0]).map(result=>{
                    return result;
                }).subscribe(res=>{
                    console.log(res);
                    this.resImg = res;
                    this.secImgs.push(this.resImg.accountImg);
                    
                    if(this.secImgs.length == 2){
                     
                        this.change.emit(['img2',this.secImgs[1]]);
                    }else if(this.secImgs.length == 1){
                        this.change.emit(['img1',this.secImgs[0]]);
                    }else if(this.secImgs.length == 3){
                        this.change.emit(['img3',this.secImgs[2]]);
                }
                    
                    console.log(this.secImgs);
                    
                    
                })
                
                this.images.push(result);

                this.readFiles(files, index+1);

                }
                
                

                }
               
            });
        }else{
            this.changeDetectorRef.detectChanges();
        }
    }

    makeFileRequest(url: string, file: any) {
    return Observable.fromPromise(new Promise((resolve, reject) => {
        let formData: any = new FormData()
        let xhr = new XMLHttpRequest()
   
            formData.append("accountImg", file, file.name)
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject(xhr.response)
                }
            }
        }
        xhr.open("POST", url, true)
        xhr.send(formData)
    }));
}

    removeImage(index):void{
        this.images.splice(index, 1);

    }

  

}
