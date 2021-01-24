import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KriteriaSubkriteriaUserComponent } from './kriteria-subkriteria-user.component';

describe('KriteriaSubkriteriaUserComponent', () => {
  let component: KriteriaSubkriteriaUserComponent;
  let fixture: ComponentFixture<KriteriaSubkriteriaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KriteriaSubkriteriaUserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KriteriaSubkriteriaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
