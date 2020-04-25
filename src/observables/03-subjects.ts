import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente', value),
    error: error => console.log('Error', error),
    complete: () => console.log('Completado')
};

const intervalo$ = new Observable<number>(
    subscriber => {
        const intervalRamdon = setInterval(() => {
            subscriber.next(Math.round(Math.random() * 100));
        }, 1000);

        // Se ejecuta con el unsubscribe.
        return () => {
            clearInterval(intervalRamdon);
            console.log('End interval')
        }
    }
);

/**
 * 1 Casteo múltiple sirve para retonar la misma información a todos lo lugares subscritos.
 * 2 Es un observer.
 * 3 Next, error, complete.
 */
const subject$ = new Subject();
const subSubject = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next('hola');
    subject$.complete();
    subSubject.unsubscribe();
}, 3500);
