import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KriteriaBobotUserComponent } from './kriteria-bobot-user.component';

describe('KriteriaBobotUserComponent', () => {
  let component: KriteriaBobotUserComponent;
  let fixture: ComponentFixture<KriteriaBobotUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KriteriaBobotUserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KriteriaBobotUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
