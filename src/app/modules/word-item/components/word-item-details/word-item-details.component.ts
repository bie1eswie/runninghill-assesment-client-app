import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-word-item-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './word-item-details.component.html',
  styleUrl: './word-item-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordItemDetailsComponent { }
