import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.term = target.value;
  }
}
