import {ajax, AjaxError} from "rxjs/ajax";
import {catchError, pluck} from "rxjs/operators";
import {of} from "rxjs";

const url = 'http://api.github.com/ussers?per_page=5';

const fetchPromesa = fetch(url);

const manjaErrores = (response: Response) => {
    if (!response.ok) throw new Error(response.statusText);

    return response;
};

// fetchPromesa
//     .then(manjaErrores)
//     .then(res => res.json())
//     .then(console.log)
//     .catch(console.warn);


ajax(url).pipe(
    // map(({response}) => response),
    pluck('response'),
    catchError((err: AjaxError) => {
        console.warn('error', err.message);
        // return throwError('hola')
        return of([]);
    })
)
    .subscribe(console.log);
