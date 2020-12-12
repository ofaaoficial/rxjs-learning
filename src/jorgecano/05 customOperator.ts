import {of, pipe} from "rxjs";
import {filter, map, scan} from "rxjs/operators";

const fakeData = [
    {
        username: 'ofaa',
        name: 'oscar',
        age: 16
    },
    {
        username: 'ofaa2',
        name: 'felipe',
        age: 18
    },
    {
        username: 'ofaa3',
        name: 'guerrero',
        age: 21
    },
];

// Operator
const adult = () =>
    pipe(
        filter(({age}: any) => age >= 18)
    )

const source = of(...fakeData)
    .pipe(
        adult(),
        map(({name}) => ({
            name
        }))
    );

source.subscribe(console.log)
