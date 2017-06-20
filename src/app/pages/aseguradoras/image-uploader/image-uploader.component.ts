import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'az-image-uploader',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
    public image:any;
    public file:any;
  
    fileChange(input){
        console.log(input.files[0]);
        
        const reader = new FileReader();
        if (input.files.length) {
            const file = input.files[0];
            this.file = input.files[0];
            reader.onload = () => {
                this.image = reader.result;
            }
            reader.readAsDataURL(file);           
        }
    }

    removeImage():void{
        this.image = '';
    }

}

