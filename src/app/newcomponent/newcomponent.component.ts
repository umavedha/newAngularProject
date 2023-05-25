import { Component } from '@angular/core';
// import { StudentList} from '../studentlist'
import { ServiceService } from '../service.service';
interface Iusers{
  id:number;
  name:string;
  age:number;
  email:string
}

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.scss']
})
export class NewcomponentComponent {
  // userData=[
  //   {id:1,name:'Uma',age:25,email:'uma@gmail.com'},
  //   {id:2,name:'Maha',age:22,email:'maha@gmail.com'},
  //   {id:3,name:'Saravana',age:22,email:'saravana@gmail.com'},
  //   {id:4,name:'Marudhu',age:22,email:'maruthu@gmail.com'},
  //   {id:5,name:'Muthuram',age:21,email:'muthu@gmail.com'},
  //   ];
// s=new StudentList()

// constructor(public s:StudentList){
// }
  studentList:any;
  constructor(public service:ServiceService){}
  ngOnInit(): void {
    console.log('inside onInit');
    this.getAllDetails()
  }
  getAllDetails(){
   this.studentList= this.service.getAllStudent()
  }
}
