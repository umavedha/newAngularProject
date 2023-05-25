import { Component,OnInit,OnChanges, SimpleChanges,AfterViewInit,
   AfterViewChecked, AfterContentInit, AfterContentChecked,OnDestroy, Input ,Output, EventEmitter} from '@angular/core';

interface Iusers{
  id:number;
  name:string;
  age:number;
  email:string
}
@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss']
})
export class MyAppComponent implements OnInit,OnChanges,AfterViewInit,
AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{

  @Input() public property: any;
  @Input()
  public userData: Iusers[] = [];
  @Output() public send=new EventEmitter()
  // @Input("property") public myName: any; alias for variable


  myAppName:string='Tesla';
  isDisabled:boolean=true;
  show:boolean=false;
  arr:Array<number>=[1,2,3]
  str:string[]=['uma','maha','saravana']
  name:string='';
  
  
  constructor(){
    console.log('inside constructor');
    
  }
  ngOnInit(): void {
    console.log('inside onInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside on changes',changes);
    
  }
  ngAfterViewInit(): void {
    console.log('inside after view init');
  }
  ngAfterViewChecked(): void {
    console.log('inside after view checked');
  }
  ngAfterContentInit(): void {
     console.log('inside after content init');
  }
  ngAfterContentChecked(): void {
     console.log('inside after content checked');
  }
  ngOnDestroy(): void {
     console.log('inside on destroy');
  }

  onClick(e:any){
    this.isDisabled=!this.isDisabled
    this.str.push('marudhu')
    
  }
  sendToParent(){
    this.send.emit('I am from child')
  }

}
