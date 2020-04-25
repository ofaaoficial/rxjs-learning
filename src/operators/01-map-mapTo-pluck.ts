import {fromEvent} from "rxjs";
import {map, mapTo, pluck} from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe(code => console.log('code', code));
keyupPluck$.subscribe(pluck => console.log('pluck', pluck));
keyupMapTo$.subscribe(mapTo => console.log('mapTo', mapTo));

