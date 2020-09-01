import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EkstrakurikulerCreateComponent } from './ekstrakurikuler-create.component';

describe('EkstrakurikulerCreateComponent', () => {
  let component: EkstrakurikulerCreateComponent;
  let fixture: ComponentFixture<EkstrakurikulerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkstrakurikulerCreateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EkstrakurikulerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
