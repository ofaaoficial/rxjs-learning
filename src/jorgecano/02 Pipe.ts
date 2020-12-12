import {Observable, Observer} from 'rxjs';
import {filter, map} from "rxjs/operators";
import {isNumeric} from "rxjs/internal-compatibility";


const myObserver: Observer<any> = {
    next(x: number) {
        if (isNumeric(x)) {
            console.log(x + 10);
        } else {
            console.log('No es un numero')
        }
    },
    error(err) {
        console.error('[Error] => ', err);
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
    subscriber.error('error from observable');
});

const addTenPipe = myObservable
    .pipe(
        filter((x: any) => isNumeric(x)),
        map((x: any) => x + 10)
    );

addTenPipe.subscribe(myObserver)
