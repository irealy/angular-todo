import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent {
  @Input() type = 'text';
  @Input() placeholder = 'What needs to be done?';
  @Input() state: 'default' | 'active' | 'error' = 'default';

  @Output() addNewTask = new EventEmitter<string>();

  value = '';

  get classes(): object {
    return {
      [`is-${this.state}`]: !!this.state
    };
  }

  onChange(value: string): void {
    this.value = value;
  }

  onEnter(): void {
    this.addNewTask.emit(this.value);
    this.value = '';
  }

  onFocus(): void {
    this.state = 'active';
  }

  onBlur(): void {
    this.state = 'default';
  }
}
