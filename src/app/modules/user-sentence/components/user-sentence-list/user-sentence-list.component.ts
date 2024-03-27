import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { InfiniteScrollStateDirective } from '../../../../directives/InfiniteScrollState.directive';
import { UserSentence } from '../../../../models/user-sentence/user-sentence';
import { AbstractServiceUserSentence } from '../../../../services/user-sentence/user-sentence.service.abstract';

@Component({
  selector: 'app-user-sentence-list',
  standalone: true,
  imports: [
    CommonModule,
    NgFor
  ],
  templateUrl: './user-sentence-list.component.html',
  styleUrl: './user-sentence-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSentenceListComponent implements OnInit {

  itemsUserSentence: any[] = [];
  currentPage = 1
  showLoadButton = true;
  constructor(private userSentenceService:AbstractServiceUserSentence){

  }
  ngOnInit(): void {
    this.getUserSentences();
  }
  getUserSentences(){
      this.userSentenceService.GetUserSentences(this.currentPage).subscribe(result=>{
        this.itemsUserSentence = this.itemsUserSentence.concat(result.items);
        this.showLoadButton = result.hasNextPage;
        console.log(this.itemsUserSentence);
        console.log(result);
      })
  }
  loadNextPage(){
    this.currentPage++;
    this.getUserSentences();
  }
}
