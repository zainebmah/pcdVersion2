import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonumentsPage } from './monuments.page';

describe('MonumentsPage', () => {
  let component: MonumentsPage;
  let fixture: ComponentFixture<MonumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
