import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // Inicializamos AOS
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true
    });
  })
  .catch((err) => console.error(err));