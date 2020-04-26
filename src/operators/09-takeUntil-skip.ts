import {fromEvent, interval} from "rxjs";
import {takeUntil, skip} from "rxjs/operators";

const counter$ = interval(1000);
const clickEvent$ = fromEvent(document, 'click').pipe(
    skip(1)
);

counter$.pipe(
    takeUntil(clickEvent$)
)
    .subscribe({
        next: value => console.log('next: ', value),
        complete: () => console.log('complete')
    });
