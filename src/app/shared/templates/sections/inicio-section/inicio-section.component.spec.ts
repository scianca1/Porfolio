import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSectionComponent } from './inicio-section.component';

describe('InicioSectionComponent', () => {
  let component: InicioSectionComponent;
  let fixture: ComponentFixture<InicioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
