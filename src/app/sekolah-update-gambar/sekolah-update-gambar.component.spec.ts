import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SekolahUpdateGambarComponent } from './sekolah-update-gambar.component';

describe('SekolahUpdateGambarComponent', () => {
  let component: SekolahUpdateGambarComponent;
  let fixture: ComponentFixture<SekolahUpdateGambarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekolahUpdateGambarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SekolahUpdateGambarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
