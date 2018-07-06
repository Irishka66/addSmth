import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerForDynamicComponent } from './container-for-dynamic.component';

describe('ContainerForDynamicComponent', () => {
  let component: ContainerForDynamicComponent;
  let fixture: ComponentFixture<ContainerForDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerForDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerForDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
