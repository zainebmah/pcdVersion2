import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AffichePage } from './affiche.page';

describe('AffichePage', () => {
  let component: AffichePage;
  let fixture: ComponentFixture<AffichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AffichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
