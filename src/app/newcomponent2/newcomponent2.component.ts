import { Component,OnInit } from '@angular/core';
import { StudentList} from '../studentlist'
import { ServiceService } from '../service.service';


interface Iusers{
  id:number;
  name:string;
  age:number;
  email:string
}

@Component({
  selector: 'app-newcomponent2',
  templateUrl: './newcomponent2.component.html',
  styleUrls: ['./newcomponent2.component.scss']
})
export class Newcomponent2Component implements OnInit {
  // userData=[
  //   {id:1,name:'Uma',age:25,email:'uma@gmail.com'},
  //   {id:2,name:'Maha',age:22,email:'maha@gmail.com'},
  //   {id:3,name:'Saravana',age:22,email:'saravana@gmail.com'},
  //   {id:4,name:'Marudhu',age:22,email:'maruthu@gmail.com'},
  //   {id:5,name:'Muthuram',age:21,email:'muthu@gmail.com'},
  //   ];
  // s=new StudentList()
  studentNameList:any;
  constructor(public service:ServiceService){}
  ngOnInit(): void {
    console.log('inside onInit');
    this.getAllStudentName()
  }
  getAllStudentName(){
   this.studentNameList= this.service.getAllStudent()
  }

}
