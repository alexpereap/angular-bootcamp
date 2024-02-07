import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats = [
    { value: 22, label: '# of users'},
    { value: 500, label: 'revenew'},
    { value: 50, label: 'satisfcation score'}
  ];
}
