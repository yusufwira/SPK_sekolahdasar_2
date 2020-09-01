import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SekolahUpdateEkstraComponent } from './sekolah-update-ekstra.component';

describe('SekolahUpdateEkstraComponent', () => {
  let component: SekolahUpdateEkstraComponent;
  let fixture: ComponentFixture<SekolahUpdateEkstraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekolahUpdateEkstraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SekolahUpdateEkstraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
