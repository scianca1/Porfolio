import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-sections',
  imports: [],
  templateUrl: './header-sections.component.html',
  styleUrl: './header-sections.component.scss'
})
export class HeaderSectionsComponent {
primerPalabra=input<string>('');
segundaPalabra=input<string>('');
}
