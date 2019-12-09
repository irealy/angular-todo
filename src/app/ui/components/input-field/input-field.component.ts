import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent implements OnInit {
  @Input() type = 'text';
  @Input() placeholder = 'What needs to be done?';
  @Input() state: 'default' | 'focus' | 'error' = 'default';

  @Output() addNewTask: EventEmitter<string> = new EventEmitter<string>();

  value = '';

  constructor() { }

  ngOnInit() {
  }

  get classes(): object {
    return {
      'is-active': this.state === 'focus',
      'is-error': this.state === 'error'
    };
  }

  onEnter(): void {
    this.addNewTask.emit(this.value);
    this.value = '';
  }

  onFocus(): void {
    this.state = 'focus';
  }

  onBlur(): void {
    this.state = 'default';
  }
}
