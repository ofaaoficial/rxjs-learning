# ReactiveX
Combinación del patron `observer`, patron `iterator` y `programación funcional`.
* Observer - Define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.
* Iterator - Define una interfaz que declara los métodos necesarios para acceder secuencialmente a un grupo de objetos de una colección.
* Programación funcional -  Conjunto de funciones que tengan un objetivo específico. Sin efectos secundarios, sin mutar la data.

Observer - Notifica cambiso.
Iterator - Poder ejecutar operaciones secuenciales.
Programación - Tener funciones con tareas específicas que no muten la información.


## Extensiones reactivas - Para que?
Serie de API's con un flujo de `observables`, sirve para tener información en tiempo real.
Basado en `eventos` mediante el uso de `secuencias de observables`.
El `observable` es el nucleo de todo, cuenta con satelites `observer`, `subjects`, `s

## Cuando usar Rx?
* Manejar eventos en la interfaz de usuario.
* Notificar sobre cambios en un objeto.
* Comunicación por sockets.
* Cuando necesitamos trabajar con flujos de información (Steams).

## Piezas fundamentales
### Observables
* Fuente de información.
* Puede emitir multiples valores, solo uno o ninguno.
* Puede emitir errores.
* Puede infinitos, finitos. (Complementarse).
* Puede ser síncrono o asíncrono.

### Subscribers
* Se subscriben a un observable, es decir, están pendientes que realiza.
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


## Patron observable
* Dependencia de `uno` a `muchos` entre `distintos objetos`.
* Reciben datos cuando el `notifica` a los `suscritos` es un `patron de comportamiento`.
* `Secuencia` de `datos` o `eventos`.


## Stream de datos
Todo es un stream, significa que `la continuidad del tiempo fue interrupida creando una secuencia de eventos, resultado en esta una realidad alternativa.`
Es todo el historial de eventos y cambios.
