import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxDatagraphComponent } from './ajax-datagraph.component';

describe('AjaxDatagraphComponent', () => {
  let component: AjaxDatagraphComponent;
  let fixture: ComponentFixture<AjaxDatagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjaxDatagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjaxDatagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
