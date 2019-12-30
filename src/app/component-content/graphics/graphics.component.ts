import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { Graphics } from 'src/app/models/components/graphics.model';
import { HttpClient, HttpEventType } from '@angular/common/http';

interface course {
  value:any;
  body: string;
  displayTitle: string;
  graphics_url: string;
  instruction: string;
  title: string;
}

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  uploadedFiles:any[]=[];
  userImage:string;
  formImage:string;
  imageResponse:any;
  
  name: any;
  reader: FileReader;

  get graphics() :   Graphics[] {
    return this.layoutService.graphics;
  
  }
 
  public message: string;
  text1: string ;


  constructor( private layoutService: LayoutService) { }

//   uploadImage($event) {
    
    
//     this.reader = new FileReader();
//     this.name = $event.target.files[0].name;
//     this.reader.addEventListener("load", function () {
//         if (this.result && localStorage) {
//           console.log( typeof this.result);
          
//             localStorage.setItem('name', JSON.stringify(this.result));
//         } else {
//             alert();
//         }
//     });
//     this.reader.readAsDataURL($event.target.files[0]);
   
// }

  ngOnInit() {
  }
 
  public async onUpload(event) {
    var files = event.files;
    await files.forEach(file => {
      this.uploadedFiles.push(file);
    });
    if (this.uploadedFiles.length !== 0) {
      await this.uploadedFiles.forEach((eachFile) => {
        this.upload(eachFile)
        .then(uploadFile => {
           console.log(uploadFile)
        }).catch(err => {
          console.log(err);
        });
      });
    }
  }
  /**
   * @param {FILE} file
   * @returns Promise
   * @desc Upload File to Storage Cloud
  */
  public upload(file): Promise<any> {
    return new Promise(( resolve, reject) => {
      const self = this;
      /** Create an instance of File Reader */
      const reader = new FileReader();
      /** Read file as base64 data url */
      reader.readAsDataURL(file);
      reader.onload = () => {
        /**
         *  @reference https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
         * Get Base 64 image from reader
         */
        const imageobj = reader.result;
        // Create request Object
        const uploadObj = {
          file: imageobj,
          name: file.name,
          size: file.size
        };
        /** Call upload service to save object */
        self.layoutService.uploadFileToStorage(uploadObj)
        .subscribe(resp => {
          console.log(resp);
          if (resp.status === 200) {
            self.imageResponse = resp;
            this.previewUrl= resp.data.url;
            self.userImage = resp.data.url;
            resolve({
              status: 200,
              url: resp.data.url
            });
          } else {
            reject(resp.data.message);
          }
        }, error => {
          console.log(error);
          reject(error);
        });
      };
      reader.onerror =  (error) => {
        console.log('Error: ', error);
      };
    });
  }


  SubmitItem(graphicsCompForm:course) {

    console.log(typeof graphicsCompForm.value);
    console.log(graphicsCompForm.value);
    graphicsCompForm.value.graphics_url = this.imageResponse.data.url;
    this.layoutService.addGraphics(graphicsCompForm.value);

  //  console.log(JSON.stringify(graphicsCompForm.value));
  //  localStorage.setItem("GraphicsComponentItem",JSON.stringify(graphicsCompForm.value));
  }


  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}
 

}
