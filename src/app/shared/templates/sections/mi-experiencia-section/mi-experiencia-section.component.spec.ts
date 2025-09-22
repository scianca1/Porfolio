import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiExperienciaSectionComponent } from './mi-experiencia-section.component';

describe('MiExperienciaSectionComponent', () => {
  let component: MiExperienciaSectionComponent;
  let fixture: ComponentFixture<MiExperienciaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiExperienciaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiExperienciaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
