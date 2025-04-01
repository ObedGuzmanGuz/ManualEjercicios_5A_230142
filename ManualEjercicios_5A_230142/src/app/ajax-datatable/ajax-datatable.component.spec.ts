import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxDatatableComponent } from './ajax-datatable.component';

describe('AjaxDatatableComponent', () => {
  let component: AjaxDatatableComponent;
  let fixture: ComponentFixture<AjaxDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjaxDatatableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjaxDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
