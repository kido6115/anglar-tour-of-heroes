import {Component} from '@angular/core';
@Component({
    selector: 'app-enter',
    template: `
      <input #box (keyup.enter)="onEnter(box.value)">
      <p>{{value}}</p>
    `
  })
  export class EnterComponent {
    value = '';
    onEnter(value: string) { this.value = value; }
  }