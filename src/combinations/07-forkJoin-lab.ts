import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { forkJoin, of } from "rxjs";


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'ofaaoficial';


forkJoin({
    usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repositorios: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
})
.pipe(catchError(err => of(err.message)))
.subscribe(console.log)