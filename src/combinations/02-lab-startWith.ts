import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";

const loadingDiv = document.createElement('div');

loadingDiv.classList.add('loading');

loadingDiv.innerHTML = 'Cargado...';

const body = document.querySelector('body');

// Stream
ajax('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true)
    )
    .subscribe(
        response => {
            if(response === true) {
                body.append(loadingDiv);
            }else {
                document.querySelector('.loading').remove();
            }
            console.log(response);
        }
    );

