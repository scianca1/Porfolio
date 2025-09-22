import { Component } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { environment } from '@app/environments/environment';

@Component({
  selector: 'app-social-medias',
  imports: [SocialMediaComponent],
  templateUrl: './social-medias.component.html',
  styleUrl: './social-medias.component.scss'
})
export class SocialMediasComponent {
 linkwpp= environment.contactWpp;
 linklinkedin= environment.linkLinkedin;
 linkGuthub= environment.linkGithub;
}
