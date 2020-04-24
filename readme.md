#ReactiveX
Combinacion del patron `observer`, patron `iterator` y `programación funcional`.
* Observer - Define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.
* Iterator - Define una interfaz que declara los métodos necesarios para acceder secuencialmente a un grupo de objetos de una colección.
* Programación funcional -  Conjunto de funciones que tengan un objetivo específico. Sin efectos secundarios, sin mutar la data.

Observer - Notifica cambiso.
Iterator - Poder ejecutar operaciones secuenciales.
Programación - Tener funciones con tareas específicas que no muten la información.


## Extenciones reactivas - Para que?
Sirve para tener información en tiempo real.

## Cuando usar Rx?
* Manejar eventos en la interfaz de usuario.
* Notificar sobre cambios en un objeto.
* Comunicación por sockets.
* Cuando necesitamos trabajar con flujos de información (Steams).

## Piezas fundamentales
### Observables
* Fuente de información.
* Puede emitir multiples valores, sólo uno o ninguno.
* Puede emitir errores.
* Puede infinitos, finitos. (Complementarse).
* Puede ser síncrono o asíncrono.

### Subscribers
* Se subscriben a un observable, es decir, estan pendientes de que realiza el  observable.
* Consumen/ observan data del observable.
* Pueden recibir los errores y eventos del observable.
* Desconocen todo lo que se encuentre detrás del observable.

### Operators
* Usados para transformar observables (map, group, scan...).
* Usados para filtrar observables (filter, skip, debounce...)
* Usados para combinar observables.
* Usados para crear nuevos observables.

## Beneficios
* Evitar el "Callback hell".
* Trabajar de forma simple tareas sincrónicas y asíncronicas.
* Uso de operadores para reducir y simplificar el trabajo.
* Es fácil transformar los flujos (stream) de información
* Código más limpio y fácil de leer.
* Fácil de implementar.
* Fácil anexar procedimientos sin alterar el producto final.

