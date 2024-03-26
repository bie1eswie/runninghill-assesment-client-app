import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-sentence-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>user-sentence-list works!</p>`,
  styleUrl: './user-sentence-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSentenceListComponent { }
