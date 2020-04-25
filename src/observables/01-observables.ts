import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente'),
    error: error => console.log('Error'),
    complete: () => console.log('Complete')
};

// Estandar
// const obs$ = Observable.create();
const obs$ = new Observable<string>(
    subscriber => {
        subscriber.next('Hola');
        subscriber.next('Mundo')
        const a = undefined;
        a.nombre = 'Oscar';
        subscriber.complete();
    }
);

obs$.subscribe(observer);
