import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { InicioSectionComponent } from '@app/shared/templates/sections/inicio-section/inicio-section.component';
import { MiExperienciaSectionComponent } from '@app/shared/templates/sections/mi-experiencia-section/mi-experiencia-section.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,InicioSectionComponent,MiExperienciaSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
