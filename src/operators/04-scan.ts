import {from} from "rxjs";
import {map, reduce, scan} from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcc = (acc, cur) => acc + cur;

// Reduce
from(numeros)
    .pipe(
        reduce(totalAcc, 0),
    )
    .subscribe(console.log);

// Scan
from(numeros)
    .pipe(
        scan(totalAcc, 0),
    )
    .subscribe(console.log);

// Redux
interface Usuario {
    id?: string;
    nombre?: string;
    autenticado?: boolean;
}

const usuario: Usuario[] = [
    {id: '1', nombre: 'Oscar', autenticado: false},
    {id: '1', nombre: 'Felipe', autenticado: true},
    {id: '1', nombre: 'Amado', autenticado: false},
];

const state$ = from(usuario).pipe(
    scan<Usuario>((acc, cur) => {
        return {
            ...acc, ...cur
        }
    }, {nombre: 'xdxd'})
);


const id$ = state$.pipe(
    map(state => state.nombre)
);

id$.subscribe(console.log);
