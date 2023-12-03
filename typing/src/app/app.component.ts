import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence({ min: 3, max: 5 });
  showSuccess = false;

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.showSuccess = target.value == this.randomText;
  }
}
