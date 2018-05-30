import {Component} from '@angular/core';
@Component({
    selector: 'app-blur',
    template: `
      <input #box
        (keyup.enter)="update(box.value)"
        (blur)="update(box.value)">
  
      <p>{{value}}</p>
    `
  })
  export class BlurComponent {
    value = '';
    update(value: string) { this.value = value; }
  }