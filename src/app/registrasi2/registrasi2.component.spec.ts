import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Registrasi2Component } from './registrasi2.component';

describe('Registrasi2Component', () => {
  let component: Registrasi2Component;
  let fixture: ComponentFixture<Registrasi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrasi2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Registrasi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
