import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { GererPage } from './gerer.page';

describe('GererPage', () => {
  let component: GererPage;
  let fixture: ComponentFixture<GererPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GererPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
