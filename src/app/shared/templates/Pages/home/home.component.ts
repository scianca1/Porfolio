import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { InicioSectionComponent } from '../../sections/inicio-section/inicio-section.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,InicioSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
