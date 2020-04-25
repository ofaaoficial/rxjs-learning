import {interval} from "rxjs";
import {reduce, take, tap} from "rxjs/operators";

const number = [1, 2, 3, 4, 5,];

const totalReducer = (acomulador: number, actual: number) => acomulador + actual;
const total = number.reduce(totalReducer, 0);
// console.log(total);

interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});
