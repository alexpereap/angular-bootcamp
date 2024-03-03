const { Observable } = Rx;

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  
  subscriber.complete();
  
  subscriber.error(new Error('some error'));
  
})


// One way to write it

/*observable.subscribe({
  next(value) {
    console.log('got a value', value)
  },
  complete() {
    console.log('Observable is complete, dont exper any more values')
  },
  error() {
    console.error('BAD THING', err.message)
  }
})*/

// Another way to write it

observable.subscribe(
  (value) => console.log('Next value:', value),
  (err) => console.error('Bad thing!', err.message),
  () => console.log('Complete!')
)

observable;