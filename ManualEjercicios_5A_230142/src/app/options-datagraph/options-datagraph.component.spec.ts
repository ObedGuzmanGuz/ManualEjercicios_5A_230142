import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDatagraphComponent } from './options-datagraph.component';

describe('OptionsDatagraphComponent', () => {
  let component: OptionsDatagraphComponent;
  let fixture: ComponentFixture<OptionsDatagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsDatagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsDatagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
