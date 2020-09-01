import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpkComponent } from './spk.component';

describe('SpkComponent', () => {
  let component: SpkComponent;
  let fixture: ComponentFixture<SpkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpkComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
