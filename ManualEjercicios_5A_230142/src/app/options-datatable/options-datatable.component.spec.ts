import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDatatableComponent } from './options-datatable.component';

describe('OptionsDatatableComponent', () => {
  let component: OptionsDatatableComponent;
  let fixture: ComponentFixture<OptionsDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsDatatableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
