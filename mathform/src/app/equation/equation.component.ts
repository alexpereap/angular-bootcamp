import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

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
      (form: AbstractControl) => {
        const { a, b, answer } = form.value;
        if (a + b === parseInt(answer)) {
          return null;
        }

        return { addition: true } // eror about custom error "addition"
    }
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
