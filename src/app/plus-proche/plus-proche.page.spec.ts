import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlusProchePage } from './plus-proche.page';

describe('PlusProchePage', () => {
  let component: PlusProchePage;
  let fixture: ComponentFixture<PlusProchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusProchePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlusProchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
