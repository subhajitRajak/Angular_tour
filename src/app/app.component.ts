import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { DragulaService } from 'ng2-dragula/ng2-dragula'; 
import { HeroesComponent } from '../app/heroes/heroes.component';
// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
//import { DataService } from "../data.service";
// import {Message} from '../../../components/common/api';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import swal from 'sweetalert2'


@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
//   template: `
//   Message: {{message}}
//   <app-heroes></app-heroes>
// `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(HeroesComponent) child;
  public editorValue: string = ''; //ck-editor
  title = 'Page Slammer R&D';//title
  fileToUpload : any = null;//file-upload
  // removeButton : {} ={removeButtons :'Save,Source,Templates,Undo,Cut,Find,SelectAll,Scayt,Form,Checkbox,Radio,Textarea,Select,Strike,Subscript,Superscript,CopyFormatting,Outdent,Blockquote,JustifyLeft,JustifyCenter,CreateDiv,Indent,BidiRtl,JustifyRight,JustifyBlock,Anchor,Language,BidiLtr,Link,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,TextColor,Maximize,About,ShowBlocks,Format,Font,FontSize,NewPage,RemoveFormat,BulletedList,NumberedList,Italic,Underline,Button,ImageButton,HiddenField'};//for ckeditor 
  removeButton : {} ={removeButtons :''};//for ckeditor 
  url : any = "";//image viewer
  visible=true;//toggel
  toggleUl(){
    this.visible=!this.visible;
    swal("Message", 'Toggle.', "success");
  }
  
//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
//  }
//  public filePreviewPath: SafeUrl;
//   msgs: Message[];
    
//   uploadedFiles: any[] = [];

//   onUpload(event) {
//       for(let file of event.files) {
//           this.uploadedFiles.push(file);
//       }
      
//       this.msgs = [];
//       this.msgs.push({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
// }
  // options : any = {
  //   removeOnSpill : true
  // } 
  /********DRAG AND DROP*************/
  constructor(private dragulaService : DragulaService ){
    dragulaService.setOptions('bag-task1',{
      copy : true
    });
    // this.uploader.onAfterAddingFile = (fileItem) => {
    //   this.filePreviewPath  = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    // }
  }
  message:string;
  ngAfterViewInit() {
    this.message = this.child.message
    
  }
  handleFileInput(files: FileList) {
    console.log(files);

    var type = files[0].type;
    var name = files[0].name;
    if(type!='')
    {
        var size = ~~(files[0].size/1024);
        var image_type_arr = name.split('.');
        var image_type = image_type_arr[(image_type_arr.length-1)];
        image_type =  image_type.toLowerCase();
        if ( (image_type ==='jpg' || image_type ==='jpeg' || image_type ==='png') )
        {
          this.fileToUpload = files[0];
        }
        else
        {
            this.fileToUpload = '';
             swal("Error", 'Please upload valid file.', "error");
        }
    }
    else
    {
        this.fileToUpload = '';
         swal("Error", 'Please upload valid file.', "error");
    }  
    
   }


   readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url= event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    this.handleFileInput(event.target.files);
    
  }

  
}
