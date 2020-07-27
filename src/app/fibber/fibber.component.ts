import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { repeat, delay } from 'rxjs/operators';

@Component({
  selector: 'app-fibber',
  templateUrl: './fibber.component.html',
  styleUrls: ['./fibber.component.scss'],
})
export class FibberComponent implements OnInit {
  public numbersToCalculate = 20;
  constructor() {}

  ngOnInit(): void {}

  get calculateFibs(): Array<number> {
    const fibs = [];
    const fibonacciGenerator = this.fib();

    for (let i = 1; i < this.numbersToCalculate; i++) {
      const nextFibNumber = fibonacciGenerator.next().value;
      fibs.push(nextFibNumber);
    }

    return fibs;
  }

  *fib(): IterableIterator<number> {
    let a = 1;
    let b = 1;
    let current = 1;
    yield 1;
    while (true) {
      current = b;
      yield current;
      b = a + b;
      a = current;
    }
  }
}
