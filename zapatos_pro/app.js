// =============================================
// DATOS DEL CATALOGO
// Cada objeto representa un zapato con todos
// sus atributos. Las imagenes son de Unsplash.
// =============================================
const zapatos = [
  { id:1,  nombre:"Runner Pro",       categoria:"Deportivo", color:"Negro", precio:1299, descripcion:"Ligero y amortiguado para tu rutina diaria. Suela de goma de alta durabilidad.",               imagen:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=75",    calificacion:4.8, nuevo:true  },
  { id:2,  nombre:"Sprint Air",       categoria:"Deportivo", color:"Blanco",precio:1399, descripcion:"Respiracion y comodidad en cada paso. Ideal para entrenar con estilo y rendimiento.",           imagen:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=75",  calificacion:4.7, nuevo:false },
  { id:3,  nombre:"Trail Flex",       categoria:"Deportivo", color:"Gris",  precio:1199, descripcion:"Soporte extra para terrenos irregulares. Perfecto para senderismo y aventura.",                 imagen:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=75",  calificacion:4.6, nuevo:false },
  { id:4,  nombre:"Energy Max",       categoria:"Deportivo", color:"Azul",  precio:1499, descripcion:"Diseno moderno con tecnologia de amortiguacion avanzada para maratones.",                      imagen:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=75",  calificacion:4.9, nuevo:true  },
  { id:5,  nombre:"City Casual",      categoria:"Casual",    color:"Blanco",precio:999,  descripcion:"Minimalismo urbano. Combina con cualquier outfit del dia a dia.",                              imagen:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=75",  calificacion:4.5, nuevo:false },
  { id:6,  nombre:"Minimal Step",     categoria:"Casual",    color:"Negro", precio:1099, descripcion:"Versatilidad y diseno limpio. Pasa del trabajo al fin de semana sin esfuerzo.",               imagen:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=75",    calificacion:4.6, nuevo:false },
  { id:7,  nombre:"Loft Street",      categoria:"Casual",    color:"Cafe",  precio:959,  descripcion:"Cuero suave y suela confortable. El acompanante perfecto para tus paseos.",                   imagen:"https://images.unsplash.com/photo-1478186000828-f21db88c2d7d?w=600&q=75",  calificacion:4.4, nuevo:false },
  { id:8,  nombre:"Weekend Easy",     categoria:"Casual",    color:"Gris",  precio:899,  descripcion:"Ligero, fresco y perfecto para el fin de semana. Sin pretensiones, pura comodidad.",          imagen:"https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?w=600&q=75",  calificacion:4.3, nuevo:false },
  { id:9,  nombre:"Oxford Classic",   categoria:"Formal",    color:"Cafe",  precio:1499, descripcion:"Elegancia atemporal. Cuero genuino cosido a mano, ideal para reuniones importantes.",         imagen:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=75",  calificacion:4.9, nuevo:false },
  { id:10, nombre:"Executive Shine",  categoria:"Formal",    color:"Negro", precio:1699, descripcion:"El calzado del profesional exigente. Acabado espejo y plantilla de cuero genuino.",           imagen:"https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=75",  calificacion:4.8, nuevo:true  },
  { id:11, nombre:"Prestige Court",   categoria:"Formal",    color:"Negro", precio:1599, descripcion:"Estilo sobrio, comodo y profesional. De la oficina a la cena sin cambiar.",                   imagen:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=75",    calificacion:4.7, nuevo:false },
  { id:12, nombre:"Atlas Formal",     categoria:"Formal",    color:"Gris",  precio:1549, descripcion:"Un toque moderno para cualquier ocasion importante. Diseno italiano clasico.",                 imagen:"https://images.unsplash.com/photo-1631984564919-1f6c8f8c4e71?w=600&q=75",  calificacion:4.6, nuevo:false },
  { id:13, nombre:"Verano Breezy",    categoria:"Sandalia",  color:"Azul",  precio:899,  descripcion:"Fresca y comoda para los dias calidos. Correas ajustables y suela antideslizante.",          imagen:"https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=75",  calificacion:4.5, nuevo:false },
  { id:14, nombre:"Playa Sol",        categoria:"Sandalia",  color:"Blanco",precio:849,  descripcion:"Ideal para salidas al sol, playa y dias relajados. Ligera como el aire.",                    imagen:"https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=600&q=75",  calificacion:4.4, nuevo:false },
  { id:15, nombre:"Ibiza Open",       categoria:"Sandalia",  color:"Negro", precio:929,  descripcion:"Diseno abierto con detalle metalico. De la terraza al restaurante con el mismo par.",        imagen:"https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&q=75",  calificacion:4.6, nuevo:true  },
  { id:16, nombre:"Terra Summer",     categoria:"Sandalia",  color:"Cafe",  precio:879,  descripcion:"Cuero vegano suave con acabados naturales. Comodidad que respeta el medio ambiente.",         imagen:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=75",    calificacion:4.3, nuevo:false },
];

// colores hex para el punto de color en cada tarjeta
const coloresHex = { Negro:"#1a1a1a", Blanco:"#f5f5f5", Cafe:"#7b5c3e", Gris:"#9ca3af", Azul:"#2563eb" };

// arreglo que guarda los productos en el carrito
let carrito = [];

// referencias a elementos del HTML
const elCatalogo        = document.getElementById("catalogo");
const elBuscador        = document.getElementById("buscador");
const elFiltroCategoria = document.getElementById("filtro-categoria");
const elFiltroColor     = document.getElementById("filtro-color");
const elOrden           = document.getElementById("orden");
const elBtnLimpiar      = document.getElementById("btn-limpiar");
const elContador        = document.getElementById("contador");
const elSinResultados   = document.getElementById("sin-resultados");
const elFiltrosActivos  = document.getElementById("filtros-activos");
const elModal           = document.getElementById("modal");
const elModalContenido  = document.getElementById("modal-contenido");
const elModalCerrar     = document.getElementById("modal-cerrar");
const elPanelCarrito    = document.getElementById("panel-carrito");
const elCarritoCount    = document.getElementById("carrito-count");
const elCarritoItems    = document.getElementById("carrito-items");
const elCarritoTotal    = document.getElementById("carrito-total");
const elToast           = document.getElementById("toast");
const elToastMsg        = document.getElementById("toast-msg");

// convierte un numero a formato de moneda
function formatearPrecio(v) {
  return new Intl.NumberFormat("es-MX", { style:"currency", currency:"MXN" }).format(v);
}

// convierte una calificacion numerica en simbolos de estrella
function estrellas(cal) {
  const llenas = Math.round(cal);
  return "★".repeat(llenas) + "☆".repeat(5 - llenas);
}

// genera el HTML de una tarjeta de producto y agrega sus eventos
function crearTarjeta(z) {
  const art = document.createElement("article");
  art.className  = "zapato-card";
  art.dataset.id = z.id;

  art.innerHTML = `
    <div class="zapato-card__imagen">
      <img src="${z.imagen}" alt="${z.nombre}" loading="lazy"
        onerror="this.src='https://placehold.co/600x400/f3f4f6/9ca3af?text=${encodeURIComponent(z.nombre)}'"/>
      <span class="zapato-card__badge-cat">${z.categoria}</span>
      <button class="zapato-card__accion" data-id="${z.id}" aria-label="Agregar al carrito">+ Carrito</button>
    </div>
    <div class="zapato-card__info">
      <div class="zapato-card__color">
        <span class="color-dot" style="background:${coloresHex[z.color]};"></span>
        <span class="zapato-card__color-label">${z.color}</span>
        ${z.nuevo ? '<span style="margin-left:auto;font-size:.7rem;font-weight:700;color:var(--acento)">NUEVO</span>' : ""}
      </div>
      <h2 class="zapato-card__nombre">${z.nombre}</h2>
      <p class="zapato-card__descripcion">${z.descripcion}</p>
      <div class="zapato-card__pie">
        <span class="zapato-card__precio">${formatearPrecio(z.precio)}</span>
        <span class="zapato-card__estrellas" title="${z.calificacion} de 5">${estrellas(z.calificacion)}</span>
      </div>
    </div>
  `;

  // clic en la tarjeta abre el modal (excepto si fue en el boton de carrito)
  art.addEventListener("click", (e) => {
    if (e.target.closest(".zapato-card__accion")) return;
    abrirModal(z);
  });

  // clic en el boton de carrito agrega el producto
  art.querySelector(".zapato-card__accion").addEventListener("click", (e) => {
    e.stopPropagation();
    agregarAlCarrito(z);
  });

  return art;
}

// filtra y dibuja las tarjetas segun los controles activos
function renderizar() {
  const texto     = elBuscador.value.toLowerCase().trim();
  const categoria = elFiltroCategoria.value;
  const color     = elFiltroColor.value;
  const orden     = elOrden.value;

  let filtrados = zapatos.filter((z) => {
    const okTexto     = z.nombre.toLowerCase().includes(texto) || z.descripcion.toLowerCase().includes(texto);
    const okCategoria = !categoria || z.categoria === categoria;
    const okColor     = !color     || z.color     === color;
    return okTexto && okCategoria && okColor;
  });

  if (orden === "precioAsc")  filtrados.sort((a,b) => a.precio - b.precio);
  if (orden === "precioDesc") filtrados.sort((a,b) => b.precio - a.precio);

  elContador.textContent = `${filtrados.length} producto${filtrados.length !== 1 ? "s" : ""} encontrado${filtrados.length !== 1 ? "s" : ""}`;
  actualizarChips(texto, categoria, color);

  if (filtrados.length === 0) {
    elCatalogo.innerHTML = "";
    elSinResultados.classList.remove("oculto");
  } else {
    elSinResultados.classList.add("oculto");
    elCatalogo.innerHTML = "";
    filtrados.forEach((z, i) => {
      const t = crearTarjeta(z);
      t.style.animationDelay = `${i * 0.05}s`;
      elCatalogo.appendChild(t);
    });
  }
}

// muestra chips con los filtros activos actualmente
function actualizarChips(texto, categoria, color) {
  elFiltrosActivos.innerHTML = "";
  if (texto)     elFiltrosActivos.innerHTML += `<span class="chip-filtro">🔍 "${texto}"</span>`;
  if (categoria) elFiltrosActivos.innerHTML += `<span class="chip-filtro">📂 ${categoria}</span>`;
  if (color)     elFiltrosActivos.innerHTML += `<span class="chip-filtro">🎨 ${color}</span>`;
}

// resetea todos los filtros y muestra el catalogo completo
function limpiarFiltros() {
  elBuscador.value        = "";
  elFiltroCategoria.value = "";
  elFiltroColor.value     = "";
  elOrden.value           = "recomendado";
  renderizar();
  document.getElementById("catalogo-section").scrollIntoView({ behavior:"smooth" });
}

// activa el filtro de categoria y hace scroll al catalogo
function filtrarPorCategoria(cat) {
  elFiltroCategoria.value = cat;
  renderizar();
  document.getElementById("catalogo-section").scrollIntoView({ behavior:"smooth" });
}

// abre el modal con el detalle completo del zapato
function abrirModal(z) {
  elModalContenido.innerHTML = `
    <div class="modal__grid">
      <img class="modal__img" src="${z.imagen}" alt="${z.nombre}"
        onerror="this.src='https://placehold.co/600x400/f3f4f6/9ca3af?text=${encodeURIComponent(z.nombre)}'"/>
      <div class="modal__detalles">
        <p class="modal__categoria">${z.categoria} · ${z.color}</p>
        <h2 class="modal__nombre">${z.nombre}</h2>
        <p class="modal__descripcion">${z.descripcion}</p>
        <span class="modal__chip">${estrellas(z.calificacion)} ${z.calificacion} / 5</span>
        <p class="modal__precio">${formatearPrecio(z.precio)}</p>
        <button class="modal__btn-carrito"
          onclick="agregarAlCarrito(zapatos.find(x=>x.id===${z.id})); cerrarModal();">
          Agregar al carrito
        </button>
      </div>
    </div>
  `;
  elModal.classList.remove("oculto");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  elModal.classList.add("oculto");
  document.body.style.overflow = "";
}

// agrega un zapato al arreglo del carrito y actualiza la UI
function agregarAlCarrito(z) {
  carrito.push({ ...z, uid: Date.now() });
  actualizarCarrito();
  mostrarToast(`${z.nombre} agregado al carrito`);
}

// elimina un item del carrito por su uid unico
function eliminarDelCarrito(uid) {
  carrito = carrito.filter((item) => item.uid !== uid);
  actualizarCarrito();
}

// redibuja el panel del carrito y actualiza el contador del icono
function actualizarCarrito() {
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  elCarritoCount.textContent = carrito.length;
  carrito.length > 0 ? elCarritoCount.classList.add("visible") : elCarritoCount.classList.remove("visible");
  elCarritoTotal.textContent = formatearPrecio(total);

  if (carrito.length === 0) {
    elCarritoItems.innerHTML = `
      <div class="carrito-vacio">
        <div class="carrito-vacio__icono">🛍️</div>
        <p>Tu carrito está vacío</p>
      </div>`;
    return;
  }

  elCarritoItems.innerHTML = carrito.map((item) => `
    <div class="carrito-item">
      <img src="${item.imagen}" alt="${item.nombre}"
        onerror="this.src='https://placehold.co/64x64/f3f4f6/9ca3af?text=Img'"/>
      <div class="carrito-item__info">
        <p class="carrito-item__nombre">${item.nombre}</p>
        <p class="carrito-item__precio">${formatearPrecio(item.precio)}</p>
      </div>
      <button class="carrito-item__eliminar"
        onclick="eliminarDelCarrito(${item.uid})" aria-label="Eliminar">✕</button>
    </div>
  `).join("");
}

// muestra un mensaje breve en la parte inferior y lo oculta despues de 2.5s
let toastTimer = null;
function mostrarToast(mensaje) {
  elToastMsg.textContent = mensaje;
  elToast.classList.remove("oculto");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elToast.classList.add("oculto"), 2500);
}

// --- eventos de filtros ---
elBuscador.addEventListener("input",         renderizar);
elFiltroCategoria.addEventListener("change", renderizar);
elFiltroColor.addEventListener("change",     renderizar);
elOrden.addEventListener("change",           renderizar);
elBtnLimpiar.addEventListener("click",       limpiarFiltros);

// --- eventos del modal ---
elModalCerrar.addEventListener("click", cerrarModal);
document.getElementById("modal-backdrop").addEventListener("click", cerrarModal);

// --- eventos del carrito ---
document.getElementById("btn-carrito").addEventListener("click", () => {
  elPanelCarrito.classList.remove("oculto");
  document.body.style.overflow = "hidden";
});
function cerrarCarrito() {
  elPanelCarrito.classList.add("oculto");
  document.body.style.overflow = "";
}
document.getElementById("cerrar-carrito").addEventListener("click",  cerrarCarrito);
document.getElementById("carrito-backdrop").addEventListener("click", cerrarCarrito);

// cerrar modal o carrito con la tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { cerrarModal(); cerrarCarrito(); }
});

// clic en tarjetas de categoria activa ese filtro
document.querySelectorAll(".categoria-card").forEach((card) => {
  card.addEventListener("click", () => filtrarPorCategoria(card.dataset.cat));
});

// carga inicial al abrir la pagina
renderizar();
actualizarCarrito();
