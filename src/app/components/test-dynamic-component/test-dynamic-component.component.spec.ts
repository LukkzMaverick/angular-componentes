import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDynamicComponentComponent } from './test-dynamic-component.component';

describe('TestDynamicComponentComponent', () => {
  let component: TestDynamicComponentComponent;
  let fixture: ComponentFixture<TestDynamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDynamicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
