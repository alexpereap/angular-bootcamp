import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence({ min: 3, max: 5 });
  randomTextObj : Array<any> = [];
  showSuccess = false;

  constructor() {
    for (let letter in this.randomText.split("")) {
      this.randomTextObj.push(
        {
          'letter': this.randomText[letter],
          'class': 'txt-black'
        }
      )
    }
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const inputValue = target.value;

    if (inputValue.length <= this.randomText.length) {
      for (let key in inputValue.split('')) {

        this.randomTextObj[key].class = inputValue[key] == this.randomTextObj[key].letter
          ? this.randomTextObj[key].class = 'txt-green'
          : this.randomTextObj[key].class = 'txt-red';
      }

      for (let i = inputValue.length; i < this.randomText.length; i++ ){
        this.randomTextObj[i].class = 'txt-black';
      }
    }

    this.showSuccess = target.value == this.randomText;
  }
}
