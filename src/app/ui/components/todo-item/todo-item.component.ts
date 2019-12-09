import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() heading: string;
  @Input() checked = false;
  @Input() id: number;

  @Output() handleUpdate: EventEmitter<object> = new EventEmitter<object>();
  @Output() handleDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() handleUpdateHeading: EventEmitter<object> = new EventEmitter<object>();

  @ViewChild('editField', { static: false }) editField: ElementRef;

  edit = false;

  constructor(private detectChange: ChangeDetectorRef) {}

  ngOnInit() {}

  get classes(): object {
    return {
      'is-edit': this.edit
    };
  }

  onChecked(): void {
    this.checked = !this.checked;
    this.handleUpdate.emit({
      checked: this.checked,
      id: this.id
    });
  }

  onDelete(): void {
    this.handleDelete.emit(this.id);
  }

  onDbClick(): void {
    if (!this.edit) {
      this.edit = true;
      this.detectChange.detectChanges();
      this.editField.nativeElement.focus();
    }
  }

  onEdit(): void {
    this.updateHeadingData();
  }

  onBlur(): void {
    this.updateHeadingData()
  }

  onEsc(): void {
    if (this.edit) {
      this.updateHeadingData()
    }
  }

  updateHeadingData() {
    this.edit = false;
    this.handleUpdateHeading.emit({
      heading: this.heading,
      id: this.id
    });
  }
}
