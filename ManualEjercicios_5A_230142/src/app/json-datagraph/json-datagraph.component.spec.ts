import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDatagraphComponent } from './json-datagraph.component';

describe('JsonDatagraphComponent', () => {
  let component: JsonDatagraphComponent;
  let fixture: ComponentFixture<JsonDatagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonDatagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonDatagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
