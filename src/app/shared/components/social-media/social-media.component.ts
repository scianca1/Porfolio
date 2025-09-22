import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
 href= input.required<string>();
 urlIcon= input.required<string>();
   border= input<boolean>(true);
}
