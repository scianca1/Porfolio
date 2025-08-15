import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  clicked= output<void>();
  loading= input<boolean>(false);
  disabled= input<boolean>(false);
  type= input<'secundary'|''>('');
  size= input<'small'|'medium'|'large'>('medium');
  onClick() {
    if(!this.loading() && !this.disabled()){
      this.clicked.emit();
    }
  }
}
