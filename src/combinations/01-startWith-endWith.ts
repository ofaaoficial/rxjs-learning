
import { startWith, endWith } from "rxjs/operators";
import { of } from "rxjs";


const numeros$ = of(1,2,3,4).pipe(
    startWith('a','b','c'),
    endWith('x','y','z')
)

numeros$.subscribe(console.log)