import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  colors: Record<'primary' | 'secondary', string> = {
    primary: 'bg-black hover:bg-gray-900 hover:text-white text-white',
    secondary: 'bg-white text-black hover:bg-gray-100 hover:shadow-sm hover:border-t hover:border-b hover:border-gray-200 border-t border-b border-gray-200 border-1 transition-all duration-200',
  };
  onClick(): void {
    this.clicked.emit();
  }
}
