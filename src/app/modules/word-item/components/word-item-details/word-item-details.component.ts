import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-word-item-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>word-item-details works!</p>`,
  styleUrl: './word-item-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordItemDetailsComponent { }
