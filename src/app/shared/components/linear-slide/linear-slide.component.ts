import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'linear-slide',
  templateUrl: './linear-slide.component.html',
  styleUrl: './linear-slide.component.scss',
  standalone: true,
})
export class LinearSlideComponent {
  @Input() tooltip: string;
  @Input() id: number | string;
  @Input() checked: boolean;
  @Output() change: EventEmitter<Event> = new EventEmitter<Event>();
}
