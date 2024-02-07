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

  items = [
    { image: '/assets/images/couch.jpeg', title: 'Couch', description: 'This is fantastic couch to seat on' },
    { image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'This is a great dresser to put stuff in' },
  ]
}
