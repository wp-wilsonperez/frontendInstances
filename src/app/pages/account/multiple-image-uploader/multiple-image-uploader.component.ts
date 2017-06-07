import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'az-multiple-image-uploader',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './multiple-image-uploader.component.html',
  styleUrls: ['./multiple-image-uploader.component.scss']
})
export class MultipleImageUploaderComponent { 
    public images: string[] = [];
    public logo:any;
  
    constructor( private changeDetectorRef: ChangeDetectorRef ) {
    }    
    
    fileChange(input){
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
                    this.logo = result;
                }else{
                
                this.images.push(result);
                this.readFiles(files, index+1);

                }
                
                

                }
               
            });
        }else{
            this.changeDetectorRef.detectChanges();
        }
    }

    removeImage(index):void{
        this.images.splice(index, 1);
    }

}
