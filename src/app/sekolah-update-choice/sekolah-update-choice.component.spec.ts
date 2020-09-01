import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SekolahUpdateChoiceComponent } from './sekolah-update-choice.component';

describe('SekolahUpdateChoiceComponent', () => {
  let component: SekolahUpdateChoiceComponent;
  let fixture: ComponentFixture<SekolahUpdateChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekolahUpdateChoiceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SekolahUpdateChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
