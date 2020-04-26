import {ajax} from "rxjs/ajax";


const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'x-token': 'olixd'
});

obs$.subscribe(console.log);
