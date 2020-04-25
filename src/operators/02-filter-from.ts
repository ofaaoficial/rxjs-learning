import {from, of, range} from 'rxjs';
import {filter} from "rxjs/operators";

// range(1, 10).pipe(
//     filter(value => value % 2 === 0)
// ).subscribe(console.log);

range(1, 10).pipe(
    filter((value, index) => {
        console.log('index', index);
        return value % 2 === 0;
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes).pipe(
    filter(value => value.tipo === 'heroe')
).subscribe(console.log);


