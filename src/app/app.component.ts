import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbstractServiceWordGroup } from './services/word-group/word-group.service.abstract';
import { WordGroup } from './models/word-group/word-group';
import { WordItemListComponent } from './modules/word-item/components/word-item-list/word-item-list.component';
import { WordType } from './enums/word-types.enum';
import { NgIf } from '@angular/common';
import { UserSentenceListComponent } from './modules/user-sentence/components/user-sentence-list/user-sentence-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
              WordItemListComponent,
              NgIf,
              UserSentenceListComponent]
})
export class AppComponent implements OnInit {

  title = 'runninghill-assesment-client-app';
  showWordList = true;
  showSentenceList = false;
  wordGroupList: WordGroup[]= []
  selectedWordType: WordType = WordType.Noun;
  @ViewChild(WordItemListComponent) wordItemListing!: WordItemListComponent;

  constructor(private wordGroupService: AbstractServiceWordGroup){
  }
  ngOnInit(): void {
    this.getAllWordGroups();
  }

  getAllWordGroups(){
    this.wordGroupService.GetAllWordGroups().subscribe(result=>{
      this.wordGroupList = result;
    })
  }
  wordGroupSelected(item: WordGroup){
    this.selectedWordType = item.wordType;
    this.wordItemListing.wordType = item.wordType;
    this.wordItemListing.getWordItems();
  }
  toggleComponents(){
    this.showSentenceList = !this.showSentenceList;
    this.showWordList = !this.showWordList;
  }
}
