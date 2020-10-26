import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanduanComponent } from './panduan.component';

describe('PanduanComponent', () => {
  let component: PanduanComponent;
  let fixture: ComponentFixture<PanduanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanduanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
