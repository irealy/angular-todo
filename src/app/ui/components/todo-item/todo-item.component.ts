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
  value = '';

  constructor(private detectChange: ChangeDetectorRef) {
  }

  get classes(): object {
    return {
      'is-edit': this.edit
    };
  }

  onHeadingChange(value: string): void {
    this.value = value;
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
    this.value = this.heading;
    if (!this.edit) {
      this.edit = true;
      this.detectChange.detectChanges();
      this.editField.nativeElement.focus();
    }
  }

  onEdit(): void {
    this.updateHeadingData(this.value);
  }

  onBlur(): void {
    this.updateHeadingData(this.heading);
  }

  onEsc(): void {
    this.updateHeadingData(this.heading);
  }

  updateHeadingData(heading: string): void {
    this.edit = false;
    this.handleUpdateHeading.emit({
      heading,
      id: this.id
    });
  }
}
