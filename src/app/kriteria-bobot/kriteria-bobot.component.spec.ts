import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KriteriaBobotComponent } from './kriteria-bobot.component';

describe('KriteriaBobotComponent', () => {
  let component: KriteriaBobotComponent;
  let fixture: ComponentFixture<KriteriaBobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KriteriaBobotComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KriteriaBobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
