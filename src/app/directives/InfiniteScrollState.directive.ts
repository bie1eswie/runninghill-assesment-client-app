import { Directive, EventEmitter, Input, Output, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";

@Directive({
  selector: "[appInfiniteScrollState]",
  exportAs: "appInfiniteScrollState",
  standalone: true,
})
export class InfiniteScrollStateDirective<T = unknown> implements OnInit, OnDestroy {
  @Input() loadFn!: (page: number) => Observable<T[]>;
  @Input() page: number = 0;
  @Input() items: T[] = [];
  @Output() itemsChange = new EventEmitter<T[]>();
  @Output() loadingError = new EventEmitter<Error>();
  @Output() loadingChange = new EventEmitter<boolean>();
  @Output() loadingComplete = new EventEmitter<void>();
  @Output() pageChange = new EventEmitter<number>();

  private componentDestroyed$ = new Subject<void>();
  private isLoading = false;

  ngOnInit(): void {
    this.loadNextPage();
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  loadNextPage(): void {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.loadingChange.emit(this.isLoading);

    this.loadFn(this.page)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (items) => this.handleNewItems(items),
        error: (error) => this.handleError(error),
        complete: () => this.handleLoadComplete(),
      });
  }

  private handleNewItems(items: T[]): void {
    this.items = [...this.items, ...items];
    this.itemsChange.emit(this.items);
    this.page++;
    this.pageChange.emit(this.page);
  }

  private handleError(error: Error): void {
    this.loadingError.emit(error);
    this.isLoading = false;
    this.loadingChange.emit(this.isLoading);
  }

  private handleLoadComplete(): void {
    this.isLoading = false;
    this.loadingChange.emit(this.isLoading);
    this.loadingComplete.emit();
  }

  reset(): void {
    this.page = 0;
    this.items = [];
    this.itemsChange.emit(this.items);
    this.pageChange.emit(this.page);
  }
}
