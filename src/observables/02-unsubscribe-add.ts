import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente', value),
    error: error => console.log('Error', error),
    complete: () => console.log('Completado')
};

// Tener en cuenta para no tener fugas de memoria.
const intervalo$ = new Observable<number>(subscriber => {
    let count = 0;
    const interval = setInterval(() => {
        subscriber.next(count++);
        console.log('Intervalo');
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    // Sin esto no se elimina el intervalo
    return () => {
        clearInterval(interval);
        console.log('Finalizado')
    }
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add(subs2)
    .add(subs3);

setTimeout(() => {
    subs.unsubscribe();
}, 3000);
