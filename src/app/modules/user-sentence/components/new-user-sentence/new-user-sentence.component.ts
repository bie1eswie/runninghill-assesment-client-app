import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-user-sentence',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>new-user-sentence works!</p>`,
  styleUrl: './new-user-sentence.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewUserSentenceComponent { }
