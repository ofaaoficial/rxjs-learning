import {from, of} from "rxjs";
import {distinct} from "rxjs/operators";

const numeros$ = of<number | string>(1, 2, 3, 4, 5, 6, 2, 3, 4, 5, '1');

numeros$
    .pipe(distinct())
    .subscribe(console.log);


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Oscar'
    },
    {
        nombre: 'Oscar'
    },
    {
        nombre: 'Oscar'
    },
    {
        nombre: 'Oscar'
    },
    {
        nombre: 'Oscar'
    },
    {
        nombre: 'Xd'
    },
    {
        nombre: 'Xd'
    },
    {
        nombre: 'Xd'
    },
    {
        nombre: 'Xd'
    },
    {
        nombre: 'Xd'
    },
    {
        nombre: 'xd'
    }
];


from(personajes)
    .pipe(
        distinct(({nombre}) => nombre)
    )
    .subscribe(console.log);
