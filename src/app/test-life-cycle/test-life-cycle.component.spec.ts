import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLifeCycleComponent } from './test-life-cycle.component';

describe('TestLifeCycleComponent', () => {
  let component: TestLifeCycleComponent;
  let fixture: ComponentFixture<TestLifeCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLifeCycleComponent]
    });
    fixture = TestBed.createComponent(TestLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
