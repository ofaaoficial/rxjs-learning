import {Observable, Subject} from "rxjs";

const API_URL = 'https://rickandmortyapi.com/api/character/1';


const sub$ = new Subject();



sub$.subscribe((data) => {
    console.log('[1] data', data)
})

sub$.subscribe((data) => {
    console.log('[2] data', data)
})

sub$.next(5);
sub$.next(2);
sub$.next(5);
sub$.next(2);
sub$.next(5);
sub$.next(2);
sub$.next(5);
sub$.next(2);



// const ob$ = new Observable((subscriber) => {
//     subscriber.next(1);
//     subscriber.next(2);
// });
//
// ob$.next()
//
// ob$.subscribe(response => {
//     console.log('response', response)
// })
