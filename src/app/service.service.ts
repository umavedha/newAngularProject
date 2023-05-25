import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getAllStudent(){
    return  [
      {id:1,name:'Uma',age:25,email:'uma@gmail.com'},
      {id:2,name:'Maha',age:22,email:'maha@gmail.com'},
      {id:3,name:'Saravana',age:22,email:'saravana@gmail.com'},
      {id:4,name:'Marudhu',age:22,email:'maruthu@gmail.com'},
      {id:5,name:'Muthuram',age:21,email:'muthu@gmail.com'},
      ];
  }
}
