// Ejemplo de productos dinámicos
const productos = [
    {
        id: 1,
        titulo: "Toyota Hilux 2017",
        precio: "$100",
        categoria: "Dakar",
        imagen: "/assets/img/IMG-20250605-WA0277.jpg",
        precio: "$100",
        stock: 10,
    },
    {
        id: 2,
        titulo: "Yamaha Raptor YMF700R 2016",
        precio: "$200",
        categoria: "Dakar",
        imagen: "/assets/img/IMG-20250605-WA0278.jpg",
        precio: "$200",
        stock: 5,
    },
    {
        id: 3,
        titulo: "Mini All4 Racing 2016",
        categoria: "Dakar",
        imagen: "/assets/img/IMG-20250605-WA0279.jpg",
        precio: "$300",
        stock: 8,
    },
    {
        id: 4,
        titulo: "Foton Sauvana 2016",
        categoria: "Dakar",
        imagen: "/assets/img/IMG-20250605-WA0280.jpg",
        precio: "$400",
        stock: 12,
    },
    {
        id: 5,
        titulo: "Ford Ranger 2016",
        precio: "$500",
        categoria: "Dakar",
        imagen: "/assets/img/IMG-20250605-WA0281.jpg",
        precio: "$500",
        stock: 6,
    },
    {
        id: 6,
        titulo: "Iveco Powerstar 2017",
        precio: "$600",
        categoria: "Dakar",
        imagen: "/assets/img/IMG-20250605-WA0282.jpg",
        precio: "$600",
        stock: 15,
    },
    {
        id: 7,
        titulo: "Iveco Powerstar 2016",
        precio: "$700",
        precioPromocional: "$650",
        categoria: "Dakar",
        imagen: "/assets/img/IMG-20250605-WA0284.jpg",
        precio: "$700",
        stock: 9,
    },
    {
        id: 8,
        titulo: "Peugeot 2008 DKR+ 2016",
        precio: "$800",
        categoria: "Dakar",
        imagen: "/assets/img/IMG-20250605-WA0285.jpg",
        precio: "$800",
        stock: 20,
    },
    {
        id: 9,
        titulo: "Colección Señor de los Anillos",
        precio: "$900",
        categoria: "Señor de los Anillos",
        imagen: "/assets/img/IMG-20250605-WA0283.jpg",
        precio: "$900",
        stock: 7,
    },
];

// Contenedor de productos
const productosContainer = document.getElementById("productos");

// Renderiza productos según la categoría seleccionada
function renderizarProductos(productosFiltrados) {
    productosContainer.innerHTML = "";
    productosFiltrados.forEach((producto) => {
        const tarjeta = document.createElement("div");
        tarjeta.className =
            "bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col justify-between";

        tarjeta.innerHTML = `
            <div class="flex flex-col items-center w-full h-full">
            <!-- Imagen -->
            <div class="w-full flex justify-center mb-4">
            <img src="${producto.imagen}" alt="Producto ${producto.id}" class="w-60 h-44 object-cover rounded-xl cursor-pointer producto-imagen-modal" data-imagen="${producto.imagen}" />
            </div>

            <!-- Título y Precio -->
            <div class="w-full flex flex-col items-center mb-3">
            <span class="text-lg font-semibold text-white mb-1">
            ${producto.titulo ? producto.titulo : `Producto ${producto.id}`}
            </span>
            <div class="flex items-center gap-2">
            ${
                producto.precioPromocional
                ? `<span class="text-gray-400 line-through text-base">${producto.precio}</span>
                <span class="text-yellow-400 text-xl font-bold">${producto.precioPromocional}</span>`
                : `<span class="text-yellow-400 text-xl font-bold">${producto.precio}</span>`
            }
            </div>
            </div>

            <!-- Stock y categoría -->
            <div class="flex justify-between w-full text-sm text-gray-300 mb-3">
            <span>Stock: ${producto.stock}</span>
            <span>Categoría: ${producto.categoria}</span>
            </div>

            <!-- Cantidad + Add to Cart -->
            <div class="flex flex-wrap justify-center items-center gap-2 w-full mb-2">
            <div class="flex h-10">
            <button type="button" class="px-3 py-1 bg-yellow-400 text-gray-900 rounded-l hover:bg-yellow-500 transition h-full" data-action="decrement">-</button>
            <input 
                type="number"
                value="1"
                min="1"
                max="${producto.stock}"
                class="w-14 text-center bg-gray-700 text-white border-t-2 border-b-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-full"
                data-stock="${producto.stock}">
            <button type="button" class="px-3 py-1 bg-yellow-400 text-gray-900 rounded-r hover:bg-yellow-500 transition h-full" data-action="increment">+</button>
            </div>

            <button type="button" class="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition font-semibold h-10 flex items-center">
            Agregar al carrito
            </button>
            </div>

            <!-- Botón Comprar -->
            <button type="button" class="w-full px-4 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition text-xl font-bold mt-2">
            COMPRAR
            </button>
            </div>
        `;

        // Modal de imagen (solo se agrega una vez al DOM)
        if (!document.getElementById('modal-imagen-producto')) {
            const modal = document.createElement('div');
            modal.id = 'modal-imagen-producto';
            modal.style.display = 'none';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.background = 'rgba(0,0,0,0.8)';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '9999';
            modal.innerHTML = `
            <div style="position:relative;max-width:90vw;max-height:90vh;display:flex;align-items:center;justify-content:center;">
                <img id="modal-img-grande" src="" alt="Imagen grande" style="max-width:90vw;max-height:80vh;border-radius:1rem;box-shadow:0 0 30px #000;">
                <button id="cerrar-modal-imagen" style="position:absolute;top:10px;right:10px;background:#fff;color:#222;border:none;border-radius:50%;width:40px;height:40px;font-size:1.5rem;cursor:pointer;">&times;</button>
            </div>
            `;
            document.body.appendChild(modal);

            // Cerrar modal al hacer click en el fondo o en el botón
            modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.id === 'cerrar-modal-imagen') {
                modal.style.display = 'none';
            }
            });
        }

        // Evento para mostrar la imagen en el modal
        const img = tarjeta.querySelector('.producto-imagen-modal');
        img.addEventListener('click', () => {
            const modal = document.getElementById('modal-imagen-producto');
            const modalImg = document.getElementById('modal-img-grande');
            modalImg.src = img.dataset.imagen;
            modal.style.display = 'flex';
        });

        productosContainer.appendChild(tarjeta);

        // Lógica de cantidad
        const inputCantidad = tarjeta.querySelector('input[type="number"]');
        const btnDecrement = tarjeta.querySelector('button[data-action="decrement"]');
        const btnIncrement = tarjeta.querySelector('button[data-action="increment"]');

        btnDecrement.addEventListener("click", () => {
            const valor = parseInt(inputCantidad.value, 10);
            if (valor > 1) inputCantidad.value = valor - 1;
        });

        btnIncrement.addEventListener("click", () => {
            const valor = parseInt(inputCantidad.value, 10);
            const max = parseInt(inputCantidad.max, 10);
            if (valor < max) inputCantidad.value = valor + 1;
        });
    });
}

// Filtra productos por categoría
function filtrarCategoria(categoria) {
    if (categoria === "todos") {
        renderizarProductos(productos);
    } else {
        // Normaliza la categoría para comparar (puedes ajustar según tus datos)
        const productosFiltrados = productos.filter(
            (p) => p.categoria.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "") === categoria
        );
        renderizarProductos(productosFiltrados);
    }
}

// Renderiza todos al inicio
renderizarProductos(productos);

// Haz la función global para los botones inline
window.filtrarCategoria = filtrarCategoria;

//funcion para agregar al carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
        // Aquí puedes implementar la lógica para agregar el producto al carrito
        console.log(`Producto agregado al carrito: ${producto.titulo}`);
    } else {
        console.error("Producto no encontrado");
    }
}


// Carrito de compras
let carrito = [];

// Renderiza el carrito dentro del contenedor con id "cart-items"
function renderizarCarrito() {
    const cartItems = document.getElementById("cart-items");
    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (carrito.length === 0) {
        cartItems.innerHTML = "<p class='text-gray-400 text-center'>El carrito está vacío.</p>";
        document.getElementById("cart-total").textContent = "$0";
        return;
    }

    let total = 0;
    carrito.forEach((item, idx) => {
        const subtotal = item.cantidad * item.precioNum;
        total += subtotal;

        const itemDiv = document.createElement("div");
        itemDiv.className = "flex items-center justify-between py-2 border-b border-gray-700";
        itemDiv.innerHTML = `
            <div class="flex-1">
                <span class="font-semibold text-white">${item.titulo}</span>
                <div class="text-sm text-gray-400">Precio: $${item.precioNum}</div>
            </div>
            <div class="flex items-center gap-2">
                <button class="px-2 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500" data-action="decrement" data-idx="${idx}">-</button>
                <span class="w-6 text-center text-white">${item.cantidad}</span>
                <button class="px-2 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500" data-action="increment" data-idx="${idx}">+</button>
            </div>
            <div class="w-20 text-right text-yellow-400 font-bold">$${subtotal}</div>
            <button class="ml-2 text-red-500 hover:text-red-700" data-action="eliminar" data-idx="${idx}">&times;</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    document.getElementById("cart-total").textContent = `$${total}`;

    // Eventos para incrementar, decrementar y eliminar
    cartItems.querySelectorAll("button[data-action]").forEach(btn => {
        const idx = parseInt(btn.dataset.idx, 10);
        if (btn.dataset.action === "increment") {
            btn.onclick = () => {
                if (carrito[idx].cantidad < carrito[idx].stock) {
                    carrito[idx].cantidad++;
                    renderizarCarrito();
                }
            };
        } else if (btn.dataset.action === "decrement") {
            btn.onclick = () => {
                if (carrito[idx].cantidad > 1) {
                    carrito[idx].cantidad--;
                    renderizarCarrito();
                }
            };
        } else if (btn.dataset.action === "eliminar") {
            btn.onclick = () => {
                carrito.splice(idx, 1);
                renderizarCarrito();
            };
        }
    });
}

// Modifica agregarAlCarrito para agregar productos al carrito
function agregarAlCarrito(productoId, cantidad = 1) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const precioNum = parseFloat((producto.precioPromocional || producto.precio).replace("$", ""));
    const idx = carrito.findIndex(item => item.id === productoId);
    if (idx !== -1) {
        // Ya está en el carrito
        if (carrito[idx].cantidad + cantidad <= producto.stock) {
            carrito[idx].cantidad += cantidad;
        } else {
            carrito[idx].cantidad = producto.stock;
        }
    } else {
        carrito.push({
            id: producto.id,
            titulo: producto.titulo,
            precioNum,
            cantidad: Math.min(cantidad, producto.stock),
            stock: producto.stock
        });
    }
    renderizarCarrito();
}

// Evento para el botón "Agregar al carrito"
document.addEventListener("click", function(e) {
    if (e.target && e.target.textContent.trim() === "Agregar al carrito") {
        const tarjeta = e.target.closest("div.bg-gray-800");
        if (!tarjeta) return;
        const titulo = tarjeta.querySelector("span.text-lg")?.textContent.trim();
        const producto = productos.find(p => p.titulo === titulo);
        if (!producto) return;
        const inputCantidad = tarjeta.querySelector('input[type="number"]');
        const cantidad = parseInt(inputCantidad.value, 10) || 1;
        agregarAlCarrito(producto.id, cantidad);

        // Modal pequeño de confirmación
        let modal = document.getElementById("modal-agregado-carrito");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "modal-agregado-carrito";
            modal.style.position = "fixed";
            modal.style.bottom = "32px";
            modal.style.right = "32px";
            modal.style.background = "#222";
            modal.style.color = "#fff";
            modal.style.padding = "20px 32px";
            modal.style.borderRadius = "1rem";
            modal.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
            modal.style.fontSize = "1.1rem";
            modal.style.display = "flex";
            modal.style.alignItems = "center";
            modal.style.gap = "16px";
            modal.style.zIndex = "11000";
            modal.style.opacity = "0";
            modal.style.transition = "opacity 0.3s";
            document.body.appendChild(modal);
        }
        modal.innerHTML = `
            <span style="font-size:1.5rem; color:#facc15;">&#10003;</span>
            <span>
                <b>${producto.titulo}</b> agregado al carrito (${cantidad})
            </span>
        `;
        modal.style.opacity = "1";
        modal.style.pointerEvents = "auto";

        // Ocultar después de 1.7 segundos
        clearTimeout(modal._timeout);
        modal._timeout = setTimeout(() => {
            modal.style.opacity = "0";
            modal.style.pointerEvents = "none";
        }, 1700);
    }
});

// Modal del carrito tipo sidebar desplegable
function crearModalCarrito() {
    if (document.getElementById("modal-carrito")) return;
    const modal = document.createElement("div");
    modal.id = "modal-carrito";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.right = "0";
    modal.style.height = "100vh";
    modal.style.width = "400px";
    modal.style.maxWidth = "90vw";
    modal.style.background = "#222";
    modal.style.boxShadow = "-4px 0 30px #000";
    modal.style.zIndex = "10000";
    modal.style.transform = "translateX(100%)";
    modal.style.transition = "transform 0.4s cubic-bezier(.4,0,.2,1)";
    modal.style.display = "flex"; // Cambiado a flex para mostrar correctamente

    // Ajusta la altura y el top para que no se solape con el header (asumiendo header de 80px)
    const headerHeight = 95;
    modal.innerHTML = `
        <div style="
            height:calc(100vh - ${headerHeight}px);
            display:flex;
            flex-direction:column;
            position:relative;
            width:100%;
            padding: 24px 20px 20px 20px;
            box-sizing: border-box;
        ">
            <button id="cerrar-modal-carrito" style="
                position:absolute;
                top:18px;
                right:18px;
                background:#fff;
                color:#222;
                border:none;
                border-radius:50%;
                width:36px;
                height:36px;
                font-size:1.3rem;
                cursor:pointer;
                z-index:2;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            ">&times;</button>
            <h2 class="text-xl font-bold text-yellow-400 mb-4 text-center" style="
                margin-top:1.5rem;
                margin-bottom:1.5rem;
                font-size:1.35rem;
                letter-spacing:0.5px;
            ">Carrito de Compras</h2>
            <div id="cart-items" class="mb-4 flex-1 overflow-y-auto" style="
                max-height:calc(100vh - ${headerHeight + 220}px);
                margin-bottom: 1.5rem;
                padding-right: 4px;
            "></div>
            <div class="flex justify-between items-center mb-4 px-2" style="
                margin-bottom: 1.2rem;
            ">
                <span class="text-white font-semibold" style="font-size:1.1rem;">Total:</span>
                <span id="cart-total" class="text-yellow-400 text-lg font-bold" style="font-size:1.25rem;">$0</span>
            </div>
            <button id="finalizar-compra" class="w-full px-4 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition font-bold text-lg" style="
                margin-top:auto;
                font-size:1.13rem;
                min-height:52px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.10);
                letter-spacing:0.5px;
            ">Finalizar Compra</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.top = `${headerHeight}px`;
    modal.style.height = `calc(100vh - ${headerHeight}px)`;
    // Cerrar modal
    modal.querySelector("#cerrar-modal-carrito").onclick = () => {
        modal.style.transform = "translateX(100%)";
        modal.classList.remove("abierto");
    };

    // Evento finalizar compra
    modal.querySelector("#finalizar-compra").onclick = () => {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        alert("¡Gracias por tu compra!");
        carrito = [];
        renderizarCarrito();
        modal.style.transform = "translateX(100%)";
        modal.classList.remove("abierto");
    };

    // Mostrar el modal si ya estaba abierto (por si el usuario recarga)
    if (modal.classList.contains("abierto")) {
        modal.style.transform = "translateX(0)";
    }
}

// Mostrar modal del carrito (sidebar)
function mostrarModalCarrito() {
    const modal = document.getElementById("modal-carrito");
    if (modal) {
        modal.style.transform = "translateX(0)";
        modal.classList.add("abierto");
        renderizarCarrito();
    }
}

// Botón para abrir el modal del carrito (debes tener un botón con id="btn-carrito" en tu HTML)
const btnCarrito = document.getElementById("btn-carrito");
if (btnCarrito) {
    btnCarrito.onclick = mostrarModalCarrito;
}

// Inicializa el modal y el carrito vacío
crearModalCarrito();
renderizarCarrito();
