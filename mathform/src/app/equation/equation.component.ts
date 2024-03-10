import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, filter } from 'rxjs/operators';
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
    MathValidators.addition('answer', 'a', 'b')
  ])

  get a() {
    return this.mathForm.value.a
  }

  get b() {
    return this.mathForm.value.b
  }

  ngOnInit() {
    this.mathForm.statusChanges
    .pipe(
      filter(value => value === 'VALID'),
      delay(100)
    )
    .subscribe((value) => {
      this.mathForm.setValue({
        a: this.randonNumber(),
        b: this.randonNumber(),
        answer: '',
      })
    })
  }

  private randonNumber() {
    return Math.floor(Math.random() * 10)
  }
}
