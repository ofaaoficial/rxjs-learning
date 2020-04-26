import {ajax} from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

ajax.post(url, {
    id: 1,
    nombre: 'oscar'
}, {
    'token-xd': 'abssds',
}).subscribe(console.log);


ajax.get(url, {
    'token2-xd': 'abssds',
}).subscribe(console.log);

ajax.put(url, {name: 'update'}, {
    'token2-xd': 'abssds',
}).subscribe(console.log);

ajax({
    url,
    method: 'post',
    body: {
        name: 'oscar'
    }
}).subscribe(console.log);
