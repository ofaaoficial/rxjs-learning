import {of} from 'rxjs';

// Trabaja de manera sincrona
// const obs$ = of([1,2], {a:1, b:2}, function () {}, true, Promise.resolve());
const obs$ = of([1,2], {a:1, b:2}, function () {}, true, Promise.resolve());
obs$.subscribe(next => console.log('next', next),
    null,
    () => console.log('Terminamos'));
