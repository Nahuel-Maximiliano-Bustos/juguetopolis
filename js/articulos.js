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

