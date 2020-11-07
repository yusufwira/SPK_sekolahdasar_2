import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanduanLokasiComponent } from './panduan-lokasi.component';

describe('PanduanLokasiComponent', () => {
  let component: PanduanLokasiComponent;
  let fixture: ComponentFixture<PanduanLokasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanduanLokasiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanduanLokasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
