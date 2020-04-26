import {from} from "rxjs";
import {distinctUntilKeyChanged} from "rxjs/operators";


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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(console.log);
