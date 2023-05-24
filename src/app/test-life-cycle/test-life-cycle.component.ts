import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
   OnChanges, OnDestroy, OnInit, SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-test-life-cycle',
  templateUrl: './test-life-cycle.component.html',
  styleUrls: ['./test-life-cycle.component.scss']
})
export class TestLifeCycleComponent implements OnInit,OnChanges,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy ,DoCheck{
  
  constructor(){}

//  to capture input output
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside on changes',changes);
    
  }
  // to load data majorly used ngonit
  ngOnInit(): void {
    console.log('inside onInit');
  }
  ngDoCheck(){
    console.log('inside do check');
  }
  // child to parent data sharing
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
  // destructor-nullify object and reclaim the memory
  ngOnDestroy(): void {
     console.log('inside on destroy');
  }

}
