## Agente 1 — Arquitecto del catálogo

| Atributo | Detalle |
|----------|---------|
| Herramienta | Claude Sonnet 4.6 (claude.ai) |
| Rol asignado | Diseñador de la estructura de datos y lógica de filtrado |
| Etapa del proyecto | Desarrollo del código fuente (app.js) |
| Modo de uso | Conversación iterativa con prompts específicos |

### Funciones desempeñadas

**1. Diseñar la estructura de datos del catálogo**

El código base no tenía ningún dato definido. El agente propuso
representar cada zapato como un objeto JavaScript con propiedades
claras (id, nombre, categoria, color, precio, descripcion,
imagen, calificacion, nuevo), y agruparlos en un arreglo llamado
zapatos. Explicó por qué un arreglo de objetos es mejor que
una tabla HTML estática: permite filtrar, ordenar y renderizar
dinámicamente sin tocar el HTML.

**2. Implementar la lógica de filtrado combinado**

El agente implementó la función renderizar() usando .filter()
con tres condiciones encadenadas por &&. Explicó el truco del
!categoria para que un filtro vacío no descarte nada, y por qué
se debe llamar .toLowerCase() antes de comparar texto para que
la búsqueda no distinga mayúsculas de minúsculas.

**3. Implementar el ordenamiento dinámico**

El agente agregó el selector de orden (recomendado, precio
ascendente, precio descendente) usando .sort() con funciones
comparadoras. Explicó la lógica de (a, b) => a.precio - b.precio:
si el resultado es negativo, a va antes; si es positivo, b va antes.

**4. Implementar el carrito de compras en memoria**

El agente diseñó el carrito como un arreglo let carrito que vive
en memoria mientras la página está abierta. Cada producto agregado
recibe un uid generado con Date.now() para poder eliminarlo
individualmente sin confundir productos del mismo modelo.
El total se calcula con .reduce().

**5. Implementar el sistema de eventos**

El agente conectó todos los controles (buscador, selects, botones)
con addEventListener, explicando por qué se usa input en el
buscador (se dispara en cada tecla) y change en los selects
(se dispara al confirmar la selección).

**6. Comentarios explicativos en el código**

El agente reescribió todos los comentarios del archivo app.js
para que fueran comprensibles para un estudiante de primeros
semestres, explicando el propósito de cada bloque sin asumir
conocimiento previo de JavaScript.

---

## Agente 2 — Diseñador de interfaz visual

| Atributo | Detalle |
|----------|---------|
| Herramienta | Claude Sonnet 4.6 (claude.ai) |
| Rol asignado | Implementador del diseño visual profesional (styles.css + index.html) |
| Etapa del proyecto | Diseño y maquetado de la interfaz |
| Modo de uso | Prompt de especificación completa y revisión del resultado |

### Funciones desempeñadas

**1. Diseñar el sistema de variables CSS**

El agente propuso centralizar todos los colores, sombras y radios
en variables CSS dentro de :root. Explicó que si se quiere
cambiar el color principal de toda la página, basta con editar
una sola línea en lugar de buscar y reemplazar en cientos de
lugares.

**2. Diseñar el hero con imagen real de fondo**

El agente construyó la sección hero usando una foto real de
Unsplash como fondo, con un div de superposición que aplica un
gradiente oscuro para que el texto sea legible sobre la imagen.
Usó object-fit: cover para que la imagen cubra todo el espacio
sin deformarse.

**3. Implementar la navbar sticky con efecto vidrio**

El agente diseñó la barra de navegación con position: sticky
para que se quede fija al hacer scroll, y aplicó
backdrop-filter: blur(12px) para crear el efecto de vidrio
esmerilado que se ve en aplicaciones modernas. Explicó que este
efecto solo funciona si el fondo de la navbar es semitransparente.

**4. Diseñar las tarjetas de producto con hover**

El agente diseñó cada tarjeta con dos estados: reposo y hover.
Al pasar el mouse, la tarjeta sube con translateY(-6px) y el
botón de carrito aparece desde abajo con una animación de
opacidad y desplazamiento. Esto le da al usuario una señal
visual clara de que la tarjeta es interactiva.

**5. Implementar el modal y el panel lateral del carrito**

El agente construyó dos componentes overlay: el modal de detalle
(centrado, con animación de escala) y el panel del carrito
(desliza desde la derecha con translateX). Ambos bloquean el
scroll del fondo con overflow: hidden y se cierran al hacer
clic en el backdrop o presionar Escape.

**6. Hacer el diseño completamente responsivo**

El agente aplicó tres breakpoints con @media:
a 1024px colapsa la grilla de categorías a 2 columnas,
a 768px oculta los links de la navbar y reduce el hero,
a 640px pone todos los filtros en columna para celular.

---

## Agente 3 — Explicador pedagógico

| Atributo | Detalle |
|----------|---------|
| Herramienta | Claude Sonnet 4.6 (claude.ai) |
| Rol asignado | Tutor conceptual para entender el código construido |
| Etapa del proyecto | Comprensión del código y preparación para la presentación |
| Modo de uso | Preguntas directas sobre conceptos con ejemplos del propio proyecto |

### Funciones desempeñadas

**1. Explicar el DOM y por qué el script va al final del body**

El agente explicó que el navegador lee el HTML de arriba hacia
abajo, y si el script está en el head, intenta buscar elementos
que todavía no existen. Al ponerlo al final del body, el HTML ya
está completamente cargado cuando JavaScript empieza a ejecutarse.

**2. Explicar .filter(), .forEach() y .reduce()**

El agente usó los datos reales del catálogo (Runner Pro,
Oxford Classic, etc.) como ejemplos concretos en lugar de
letras abstractas, para que los métodos de arreglos tuvieran
sentido en el contexto del proyecto.

**3. Explicar por qué se usan imágenes de Unsplash con URL**

El agente explicó la diferencia entre imágenes locales (que habría
que subir al repositorio) e imágenes por URL (que se cargan desde
un servidor externo). Mostró cómo usar el parámetro w=600 y q=75
en las URLs de Unsplash para pedir imágenes más pequeñas y rápidas
de cargar.

**4. Explicar el patrón mostrar y ocultar con clases CSS**

El agente explicó el patrón central de la app: un elemento existe
siempre en el HTML pero tiene la clase oculto (que aplica
display: none). Para mostrarlo se quita esa clase con
classList.remove; para ocultarlo se vuelve a agregar con
classList.add. Este patrón se repite en el modal, el carrito
y el aviso de sin resultados.

**5. Explicar position: sticky y position: fixed**

El agente aclaró la diferencia: sticky mantiene el elemento
dentro del flujo del documento (empuja el contenido), mientras
que fixed lo saca del flujo y lo superpone sobre todo lo demás.
La navbar usa sticky; el modal y el carrito usan fixed.

**6. Generar frases para la presentación**

A pedido, el agente produjo respuestas cortas y directas para
las preguntas más frecuentes de una presentación técnica:
por qué usaron JavaScript puro y no un framework, cómo funciona
el filtrado, y qué pasa si el usuario no tiene internet y las
imágenes no cargan.

---

## Reflexión del equipo

Dividir el trabajo de IA en tres agentes con roles distintos
fue más efectivo que hacer todo en una sola conversación.
El Agente 1 se enfocó en que el código funcionara correctamente.
El Agente 2 se enfocó en que se viera bien. El Agente 3 se
enfocó en que el equipo entendiera lo que había construido.

La parte más importante del proceso no fue recibir el código,
sino las explicaciones que acompañaron cada respuesta. Sin
entender por qué funciona cada parte, no habría sido posible
presentarlo ni responder preguntas sobre él.

---

*Documento generado como parte del proyecto educativo
El Paso Zapatería — Ingeniería de Software, 2025.*
