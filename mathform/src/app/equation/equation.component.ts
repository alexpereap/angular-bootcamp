import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent {
  mathForm = new FormGroup({
    a: new FormControl(this.randonNumber()),
    b: new FormControl(this.randonNumber()),
    answer: new FormControl('')
  }, [
      MathValidators.addition
  ])

  get a() {
    return this.mathForm.value.a
  }

  get b() {
    return this.mathForm.value.b
  }

  private randonNumber() {
    return Math.floor(Math.random() * 10)
  }
}
