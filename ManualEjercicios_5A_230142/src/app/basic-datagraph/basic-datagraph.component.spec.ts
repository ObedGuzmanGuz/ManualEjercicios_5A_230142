import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatagraphComponent } from './basic-datagraph.component';

describe('BasicDatagraphComponent', () => {
  let component: BasicDatagraphComponent;
  let fixture: ComponentFixture<BasicDatagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDatagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDatagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
