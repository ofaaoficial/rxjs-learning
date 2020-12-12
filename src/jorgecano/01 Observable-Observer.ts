import {Observable, Observer} from 'rxjs';


const myObserver: Observer<any> = {
    next(x: number) {
        if (isNaN(x)) {
            console.log(x + 10);
        } else {
            console.log('No es un numero')
        }
    },
    error(err) {
        console.log('Error papa', err);
    },
    complete() {
        console.log('Trabajo terminado')
    }
}

const myObservable = new Observable(subscriber => {
    subscriber.next('observable 1');
    subscriber.next('observable 2');
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.error('error');
});

const myObservable2 = new Observable(subscriber => {
    subscriber.complete();
});

myObservable.subscribe(myObserver);
myObservable2.subscribe(myObserver);
