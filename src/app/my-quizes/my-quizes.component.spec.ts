import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuizesComponent } from './my-quizes.component';

describe('MyQuizesComponent', () => {
  let component: MyQuizesComponent;
  let fixture: ComponentFixture<MyQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
