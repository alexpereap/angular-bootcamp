// const { fromEvent } = Rx;
// const { map, pluck } = RxOperators;
import { map, pluck } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const input = document.createElement('input');
const container = document.querySelector('.container');
container.appendChild(input);

const observable = fromEvent(input, 'input')
	.pipe(
    pluck('target', 'value'),
    map(value => parseInt(value)),
    map(value => {
      if (isNaN(value)) {
        throw new Error('Enter a number!')
      }
      return value
    })
  )

observable.subscribe({
  next (value) {
    console.log(`Your value is ${value}`)
  },
  error(err) {
    console.error('Error: ', err.message)
  }
})

// this is specific to this tool
observable;