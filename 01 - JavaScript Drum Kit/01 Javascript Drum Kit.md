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
</div>
.......
.......
<audio data-key = "65" src = "sounds/clap.wav"></audio>`



## Eventos JS

Un evento es cualquier cosa que pase en el sistema, en este caso en la pantalla de nuestro navegador. Es el propio sistema quien se encarga de producir una señal cuando un evento ocurre.

Así que simplemente tenemos que estar "escuchando" para saber cuándo ocurre un evento .

`<script>
    window.addEventListener('keydown', function(e){
        console.log(e);
    });
</script>`