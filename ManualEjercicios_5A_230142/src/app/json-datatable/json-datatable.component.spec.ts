import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDatatableComponent } from './json-datatable.component';

describe('JsonDatatableComponent', () => {
  let component: JsonDatatableComponent;
  let fixture: ComponentFixture<JsonDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonDatatableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
