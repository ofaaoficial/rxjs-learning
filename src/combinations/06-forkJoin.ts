import { take, delay } from 'rxjs/operators';
import { interval, of, forkJoin } from 'rxjs';

const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c','d').pipe(delay(3500));

const obs$ = forkJoin(numeros$, intervalo$, letras$)
    .subscribe(response => {
        console.log('numeros:', response[0])
        console.log('numeros:', response[1])
        console.log('numeros:', response[2])
    });

    const obs2$ = forkJoin({num: numeros$, int: intervalo$, let: letras$})
    .subscribe(console.log);

