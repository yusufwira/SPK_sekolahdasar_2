import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EktrakurikulerAdminComponent } from './ektrakurikuler-admin.component';

describe('EktrakurikulerAdminComponent', () => {
  let component: EktrakurikulerAdminComponent;
  let fixture: ComponentFixture<EktrakurikulerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EktrakurikulerAdminComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EktrakurikulerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
