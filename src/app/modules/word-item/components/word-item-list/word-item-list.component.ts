import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {DndDropEvent, EffectAllowed} from 'ngx-drag-drop';
import {DndModule} from 'ngx-drag-drop';
import { WordItem } from '../../../../models/word-item/word-item';
import { AbstractServiceWordItem } from '../../../../services/word-item/word-item.service.abstract';
import { WordType } from '../../../../enums/word-types.enum';
import { Observable } from 'rxjs';
import { WordGroup } from '../../../../models/word-group/word-group';
import { UserSentence } from '../../../../models/user-sentence/user-sentence';
import { AbstractServiceUserSentence } from '../../../../services/user-sentence/user-sentence.service.abstract';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-word-item-list',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    DndModule
  ],
  templateUrl: './word-item-list.component.html',
  styleUrl: './word-item-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordItemListComponent implements OnInit  {

  all: EffectAllowed = "all";
  draggable = {
    effectAllowed: this.all,
    disable: false,
    handle: true
  };

  private sub: any;
  wordGroup!: Observable<WordGroup>
  wordList: WordItem[]=[];
  @Input() wordType!: WordType

  sentenceText: string = "";
  message!: string;
  constructor(private wordItemService: AbstractServiceWordItem,
              private ref: ChangeDetectorRef,
              private sentenceService: AbstractServiceUserSentence,
              private toastr: ToastrService){

  }

  getWordItems(){
   this.sub = this.wordItemService.GetWordItems(this.wordType).subscribe(result=>{
      this.wordList = result.items;
      this.wordType = result.wordType;
      this.ref.detectChanges();
    })
  }

  ngOnInit(): void {
    this.getWordItems();
  }
  onDragStart(event: DragEvent) {

    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {
   this.sentenceText = this.sentenceText + event.data.word + " ";
    console.log("dropped", JSON.stringify(event, null, 2));
  }
  save(){
    let sentence: UserSentence = new UserSentence(this.sentenceText);
    this.sentenceService.CreateUserSentence(sentence).subscribe(result=>{
      if(result){
        this.toastr.success("Text saved successfully");
      }
    })
  }
}
