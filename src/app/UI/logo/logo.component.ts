import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'default' | 'white' = 'default';

  sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  iconSize = {
    sm: 18,
    md: 22,
    lg: 28,
  };
  colorClasses = {
    default: 'text-foreground',
    white: 'text-white',
  };
}
