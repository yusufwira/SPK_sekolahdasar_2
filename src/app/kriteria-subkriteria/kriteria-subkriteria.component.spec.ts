import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KriteriaSubkriteriaComponent } from './kriteria-subkriteria.component';

describe('KriteriaSubkriteriaComponent', () => {
  let component: KriteriaSubkriteriaComponent;
  let fixture: ComponentFixture<KriteriaSubkriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KriteriaSubkriteriaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KriteriaSubkriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
