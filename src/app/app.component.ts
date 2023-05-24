import { Component, ViewChild ,AfterViewInit, ViewChildren} from '@angular/core';
import { MyAppComponent } from './my-app/my-app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
 
  title = 'newAngularProject';
  name:string='My Angular Project'
  data=[
    {id:1,name:'Uma',age:25,email:'uma@gmail.com'},
    {id:2,name:'Maha',age:22,email:'maha@gmail.com'},
    {id:3,name:'Saravana',age:22,email:'saravana@gmail.com'},
    {id:4,name:'Marudhu',age:22,email:'maruthu@gmail.com'},
    {id:5,name:'Muthuram',age:21,email:'muthu@gmail.com'},
    ];
    fromChildData:string='';
    message:string='Message from child'
    @ViewChild(MyAppComponent) myChild:any;
    // fromChild:string='';
   


    fromChild(e:string){
      this.fromChildData=e
    }
    ngAfterViewInit(): void {
      // throw new Error('Method not implemented.');
      this.message=this.myChild.myAppName
    }
    
   
}
