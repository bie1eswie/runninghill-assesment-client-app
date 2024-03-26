import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-word-item-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>word-item-list works!</p>`,
  styleUrl: './word-item-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordItemListComponent { }
