import { Component } from '@angular/core';
import { SocialMediasComponent } from '@app/shared/components/social-medias/social-medias.component';
import { ButtonComponent } from "@app/shared/components/button/button.component";

@Component({
  selector: 'app-inicio-section',
  imports: [SocialMediasComponent, ButtonComponent],
  templateUrl: './inicio-section.component.html',
  styleUrl: './inicio-section.component.scss'
})
export class InicioSectionComponent {

}
