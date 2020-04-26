import {ajax, AjaxError} from "rxjs/ajax";
import {of} from "rxjs";
import {catchError} from "rxjs/operators";


const url = 'https://httpbin.orasdg/delay/1';
const manejaError = (err: AjaxError) => {
    console.log('error: ', err.message);
    return of({
        ok: false,
        users: []
    })
};

const obs1$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs1$.pipe(catchError(manejaError)).subscribe(console.log);
obs2$.subscribe({
    next: value => console.log('next: ', value),
    error: err => console.warn('error', err),
    complete: () => console.log('complete')
});


