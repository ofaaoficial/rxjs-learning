import {fromEvent} from "rxjs";
import {first, map} from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        map(({clientY, clientX}) => ({
            clientY,
            clientX
        })),
        first(val => val.clientY >= 200)
    )
    .subscribe({
        next: val => console.log('next: ', val),
        complete: () => console.log('complete')
    });
