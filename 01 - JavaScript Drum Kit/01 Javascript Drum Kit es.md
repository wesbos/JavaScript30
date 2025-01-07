# 01 JavaScript Drum Kit

Crear, en CSS, 2 o más estilos para los diferentes estados de un mismo elemento. Después con JS podemos modificar, añadir, eliminar, la clase asociada a cada estado del elemento.

En este ejercicio, tenemos diferentes elementos ***div*** con la clase ***key***

 `class = "key"`

, que se utiliza para dar estilo a cada uno de los "pads" que podemos pulsar.

Pero cuando pulsamos la tecla correspondiente, se añade la clase ***playing*** para crear el efecto y hacer la animación.

Cada tecla tiene un código único que podemos comprobar en la web <https://www.toptal.com/developers/keycode> 

## Atributos de datos

Los atributos de datos son un tipo de atributos personalizados que permiten almacenar información dentro de en un elemento HTML.

Se utilizan como cualquier otro [atributo de HTML](https://developer.mozilla.org/es/docs/Web/HTML/Attributes) y tienen como requisito empezar por ***data-***

`data-key = "65"`

[Uso de los atributos de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes)

De esta manera, en este ejercicio asociamos cada tecla a un sonido específico.

`<div data-key = "65" class = "key">
    <kbd>A</kbd>
    <span class = "sound">clap</span>

<div>
.....
.....
<audio data-key = "65" src = "sounds/clap.wav"></audio>
`

## Eventos JS

Un evento es cualquier cosa que ocurra en el sistema, en este caso en la pantalla de nuestro navegador. Es el propio sistema quien se encarga de producir una señal cuando se produce un evento.

Así que simplemente tenemos que estar "escuchando" para saber cuándo ocurre un evento .

`<script>
    window.addEventListener('keydown', function(e){
        console.log(e);
    });
</script>`

![Event](.\img\01 JS Drum Kit img_01.png)

## Query Selector

Ahora que tenemos el ***keycode*** que nos da el evento, podemos ver a qué tecla corresponde y qué sonido tiene asociado.

`console.log(e.keyCode);`

Para ello hacemos una búsqueda dentro de los elementos ***audio*** de nuestra página.

`const audio = document.querySelector("audio[data-key="${e.keyCode}"]");`

Haciendo `console.log(audio);` , al pusar la tecla **A**, nos devuelve
 `<audio data-key="65" src="sounds/clap.wav"></audio>`

## Reproducir el sonido

Si la constante audio no ha obtenido ningún valor salimos de la función y no se ejecuta nada más.

`if (!audio) return;`

y ejecutando `audio.play();`, justo después, ya podemos escuchar el sonido asociado a cada tecla.

Para que podamos mantener pulsada una tecla y suene repetidamente el sonido, reiniciamos el sonido cada vez.
`audio.currentTime = "0";`

## Animación

Teníamos, en CSS, una clase para cuando la tecla había sido activada `playing`, así que para crear la animación tenemos que añadir esa clase al `div`que corresponda a la tecla pulsada.

`key.classList.add("playing");`

Después de la animación tenemos que retirar de nuevo esa clase.



Vamos a ver cuándo termina la animación.

Para ello, escuchamos 

`const keys = document.querySelectorAll(".key");`

Ahora, en `keys` tenemos cada una de las teclas, con todos sus atributos, incluido si ha sido activada o no. *clase "playing"*



De esta manera controlamos cuándo termina la transición (si es que ha tenido lugar) en cada una de las teclas.

[Arrow Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

`keys.forEach(key => key.addEventListener("transitionend", removeTransition));`



La animación tiene diferentes partes:

    `.playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }`

Transforma la escala, modifica el color del borde y la sombra de la caja.

Lo que nos interesa es la transformación, así que necesitamos detectar cuándo termina.

`if (e.propertyName != "transform") return;
 this.classList.remove("playing");`