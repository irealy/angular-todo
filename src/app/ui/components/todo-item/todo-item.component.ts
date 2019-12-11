import {
  Component,
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
export class TodoItemComponent {
  @Input() heading: string;
  @Input() checked = false;
  @Input() id: number;

  @Output() handleUpdate = new EventEmitter<object>();
  @Output() handleDelete = new EventEmitter<number>();
  @Output() handleUpdateHeading = new EventEmitter<object>();

  @ViewChild('editField', { static: false }) editField: ElementRef;

  edit = false;

  constructor(private detectChange: ChangeDetectorRef) {}

  get classes(): object {
    return {
      'is-edit': this.edit
    };
  }

  onHeadingChange(value: string): void {
    this.heading = value;
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
    this.updateHeadingData();
  }

  onEsc(): void {
    if (this.edit) {
      this.updateHeadingData();
    }
  }

  updateHeadingData(): void {
    this.edit = false;
    this.handleUpdateHeading.emit({
      heading: this.heading,
      id: this.id
    });
  }
}
