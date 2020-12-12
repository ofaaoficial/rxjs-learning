import {of} from "rxjs";
import {delay, filter, map, scan, tap} from "rxjs/operators";

const source = of('word')
    .pipe(
        map(x => `Hello ${x}`), //of().subscribe()
        tap(ev => console.log(ev + 'tap')), //map().subscribe()
        delay(5000), //tap().subscribe()
        scan((acc, one) => acc + one, "scan"), //delay().subscribe()
        filter(x => x.includes("Hello")) //scan().subscribe
    );


source
    .subscribe(console.log);
