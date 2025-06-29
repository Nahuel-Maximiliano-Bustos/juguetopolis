// Ejemplo de productos dinámicos
const productos = [
    // Productos de Dakar
    {id: 1, titulo: "Toyota Hilux 2017", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250605-WA0277.jpg", stock: 10, },
    {id: 2, titulo: "Yamaha Raptor YMF700R 2016", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250605-WA0278.jpg", stock: 5, },
    {id: 3, titulo: "Mini All4 Racing 2016", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250605-WA0279.jpg", stock: 8, },
    {id: 4, titulo: "Foton Sauvana 2016", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250605-WA0280.jpg", stock: 12, },
    {id: 5, titulo: "Ford Ranger 2016", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250605-WA0281.jpg", stock: 6},
    {id: 6, titulo: "Iveco Powerstar 2017", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250605-WA0282.jpg", stock: 15},
    {id: 7, titulo: "Iveco Powerstar 2016", precio: "$30000", precioPromocional: "", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250605-WA0284.jpg", stock: 9},
    {id: 8, titulo: "Peugeot 2008 DKR+ 2016", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250605-WA0285.jpg", stock: 20},
    {id: 9, titulo: "Smg red bull 2014", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250616-WA0154.jpg", stock: 20},
    {id: 10, titulo: "Renault Daster 2016", precio: "$30000", categoria: "Dakar", imagen: "/assets/img/dakar/IMG-20250616-WA0156.jpg", stock: 20},
    //{id: 11, titulo: "", precio: "$900", categoria: "Dakar", imagen: "/assets/img/", precio: "", stock: 20},
    // Productos de Batman
    {id: 12, titulo: "Batimóvil clasico de la serie de tv", precio: "$35000", categoria: "Batimovil", imagen: "/assets/img/batimovil/IMG-20250616-WA0164.jpg", stock:10 },
    {id: 13, titulo: "Batimóvil de Batman Forever", precio: "$35000", categoria: "Batimovil", imagen: "/assets/img/batimovil/IMG-20250616-WA0165.jpg", stock:10 },
    {id: 14, titulo: "Batimóvil", precio: "$35000", categoria: "Batimovil", imagen: "/assets/img/batimovil/IMG-20250616-WA0166.jpg", stock:10 },
    {id: 15, titulo: "Batimóvil del caballero de la noche (camuflado)", precio: "$35000", categoria: "Batimovil", imagen: "/assets/img/batimovil/IMG-20250616-WA0167.jpg", stock:10 },
    {id: 16, titulo: "Batimóvil del caballero de la noche", precio: "$35000", categoria: "Batimovil", imagen: "/assets/img/batimovil/IMG-20250616-WA0168.jpg", stock:10 },
    {id: 17, titulo: "Batimóvil de la liga de la justicia", precio: "$35000", categoria: "Batimovil", imagen: "/assets/img/batimovil/IMG-20250616-WA0169.jpg", stock:10 },
    {id: 18, titulo: "Batimóvil Arkham knight", precio: "$35000", categoria: "Batimovil", imagen: "/assets/img/batimovil/IMG-20250616-WA0170.jpg", stock:10 },
    // Productos de Señor de los Anillos
    {id: 19, titulo: "Gandalf", precio: "$15000", categoria: "Señor de los anillos", imagen: "/assets/img/señor de los anillos/IMG-20250616-WA0155.jpg", stock:11 },
    {id: 21, titulo: "Aragom", precio: "$15000", categoria: "Señor de los anillos", imagen: "/assets/img/señor de los anillos/IMG-20250616-WA0157.jpg", stock:11 },
    {id: 22, titulo: "Shagrat", precio: "$15000", categoria: "Señor de los anillos", imagen: "/assets/img/señor de los anillos/IMG-20250616-WA0158.jpg", stock:11 },
    {id: 23, titulo: "Éomer", precio: "$15000", categoria: "Señor de los anillos", imagen: "/assets/img/señor de los anillos/IMG-20250616-WA0159.jpg", stock:11 },
    {id: 24, titulo: "Legolas", precio: "$15000", categoria: "Señor de los anillos", imagen: "/assets/img/señor de los anillos/IMG-20250616-WA0160.jpg", stock:11 },
    {id: 25, titulo: "Uruk Hai", precio: "$15000", categoria: "Señor de los anillos", imagen: "/assets/img/señor de los anillos/IMG-20250616-WA0161.jpg", stock:11 },
    //{id: 26, titulo: "", precio: "$900", categoria: "Señor de los anillos", imagen: "/assets/img/señor de los anillos/IMG-20250616-WA0162.jpg", stock:11 },
    {id: 27, titulo: "Arquero Orco", precio: "$15000", categoria: "Señor de los anillos", imagen: "/assets/img/señor de los anillos/IMG-20250616-WA0163.jpg", stock:11 },
    // Productos de Rapido y Furioso
    {id: 28, titulo: "Ford GT", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0171.jpg", stock:20 },
    {id: 29, titulo: "Dodge Challenger SRT8 de Letty", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0172.jpg", stock:20 },
    {id: 30, titulo: "Toyota Supra de Slap Jack", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0173.jpg", stock:20 },
    {id: 31, titulo: "Nissan Skyline GT-R de Leon", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0174.jpg", stock:20 },
    {id: 32, titulo: "Nissan GT-R R35 de Brian", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0175.jpg", stock:20 },
    {id: 33, titulo: "Mazda RX-7 de Dominic", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0176.jpg", stock:20 },
    {id: 34, titulo: "Acura Integra de Mía", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0177.jpg", stock:20 },
    {id: 35, titulo: "Ford F-150 Lightning de Brian", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0178.jpg", stock:20 },
    {id: 36, titulo: "Doge Charger R/T de Dominic", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0179.jpg", stock:20 },
    {id: 37, titulo: "Honda S2000 de Suki", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0180.jpg", stock:20 },
    {id: 38, titulo: "Subaru WRX 5TI de Señor Don Nadie", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0181.jpg", stock:20 },
    {id: 39, titulo: "Chevy Corvette de Letty", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0182.jpg", stock:20 },
    {id: 40, titulo: "Nissan GT-T R35 Azul de Brian", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0183.jpg", stock:20 },
    {id: 41, titulo: "Toyota Supra de Brian", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0184.jpg", stock:20 },
    {id: 42, titulo: "Chevy Fleetline de Dominic", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0185.jpg", stock:20 },
    {id: 43, titulo: "Hypersport de Lykan", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0186.jpg", stock:20 },
    {id: 44, titulo: "Ford Mustang de Roman", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0187.jpg", stock:20 },
    {id: 45, titulo: "Chevy Monte Carlo de Sean", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0188.jpg", stock:20 },
    {id: 46, titulo: "Honda S2000 de Johnny", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0189.jpg", stock:20 },
    {id: 47, titulo: "Nissan Skyline GT-R de Brian", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0190.jpg", stock:20 },
    {id: 48, titulo: "Volkswagen Jetta de Jesse", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0191.jpg", stock:20 },
    {id: 49, titulo: "Nissan Skyline 2000 GT-R de Brian", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0192.jpg", stock:20 },
    {id: 50, titulo: "Chevy Vhevelle 55 de Dominic", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0193.jpg", stock:20 },
    {id: 51, titulo: "Chevy Impala de Dominic", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0194.jpg", stock:20 },
    {id: 52, titulo: "Buggy de Ataque de Deckard", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0195.jpg", stock:20 },
    {id: 53, titulo: "Subaru Impreza WRX STI", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0196.jpg", stock:20 },
    {id: 54, titulo: "Ford Escort de Brian", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0197.jpg", stock:20 },
    {id: 55, titulo: "Dodge Charger Daytona de Dominic", precio: "$40000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0198.jpg", stock:20 },
    {id: 56, titulo: "Mitsubishi Lancer Evolution VII de Brian", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0199.jpg", stock:20 },
    {id: 57, titulo: "Dodge charger R/T de Dominic", precio: "$70000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0200.jpg", stock:20 },
    {id: 58, titulo: "Chevy Chevelle SS de Dominic", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0201.jpg", stock:20 },
    {id: 59, titulo: "Ford Mustang de Sean", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0202.jpg", stock:20 },
    {id: 60, titulo: "Playmouth GTX de Dominic", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0203.jpg", stock:20 },
    {id: 61, titulo: "Rally Fighter de Letty", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0204.jpg", stock:20 },
    {id: 62, titulo: "Chevy Camaro 1973", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0205.jpg", stock:20 },
    {id: 63, titulo: "Toyoto Supra de Brian", precio: "$70000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0206.jpg", stock:20 },
    {id: 64, titulo: "Chevy Camaro de Roman", precio: "$35000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0207.jpg", stock:20 },
    {id: 65, titulo: "Nissan Skyline GT-R R34 de Brian", precio: "$70000", categoria: "Rápido y furioso", imagen: "/assets/img/rapidos y furioso/IMG-20250616-WA0208.jpg", stock:20 },
    //Fangio
    {id: 66, titulo: "Lancia D50 1956", precio: "$25000", categoria: "Fangio", imagen: "/assets/img/fangio/IMG-20250616-WA0233.jpg", stock:8 },
    {id: 67, titulo: "Mercedes-Benz W196 1954", precio: "$25000", categoria: "Fangio", imagen: "/assets/img/fangio/IMG-20250616-WA0234.jpg", stock:8 },
    {id: 68, titulo: "Lancia D24 Pimimfarina 1953", precio: "$25000", categoria: "Fangio", imagen: "/assets/img/fangio/IMG-20250616-WA0235.jpg", stock:8 },
    {id: 69, titulo: "Mercedes-Benz 300 SLR 1955", precio: "$25000", categoria: "Fangio", imagen: "/assets/img/fangio/IMG-20250616-WA0236.jpg", stock:8 },
    //Ford f100
    {id: 70, titulo: "Ford F100 modelo 1953", precio: "$15000", categoria: "Ford F100", imagen: "/assets/img/ford f100/IMG-20250616-WA0229.jpg", stock: 12},
    {id: 71, titulo: "Ford F100 modelo 1953", precio: "$15000", categoria: "Ford F100", imagen: "/assets/img/ford f100/IMG-20250616-WA0230.jpg", stock: 12},
    {id: 72, titulo: "Ford F100 modelo 1961", precio: "$15000", categoria: "Ford F100", imagen: "/assets/img/ford f100/IMG-20250616-WA0231.jpg", stock: 12},
    {id: 73, titulo: "Ford F100 modelo 1961", precio: "$15000", categoria: "Ford F100", imagen: "/assets/img/ford f100/IMG-20250616-WA0232.jpg", stock: 12},
    //James Bond
    {id: 74, titulo: "Aston Martin V8 Vantage - The living Daylights", precio: "$25000", categoria: "James Bond", imagen: "/assets/img/jamesbond/IMG-20250616-WA0209.jpg", stock: 12},
    {id: 75, titulo: "Mustang Mach 1 - Diamonds are forever", precio: "$25000", categoria: "James Bond", imagen: "/assets/img/jamesbond/IMG-20250616-WA0210.jpg", stock: 12},
    {id: 76, titulo: "BMW Z8 - The world is not enough", precio: "$25000", categoria: "James Bond", imagen: "/assets/img/jamesbond/IMG-20250616-WA0212.jpg", stock: 12},
    {id: 77, titulo: "Sunbeam Alpine - DR NO", precio: "$25000", categoria: "James Bond", imagen: "/assets/img/jamesbond/IMG-20250616-WA0213.jpg", stock: 12},
    {id: 78, titulo: "Lotus Esprit - The spy who loved me", precio: "$25000", categoria: "James Bond", imagen: "/assets/img/jamesbond/IMG-20250616-WA0214.jpg", stock: 12},
    {id: 79, titulo: "Aston Martin DBS - On her majesty's secret service", precio: "$25000", categoria: "James Bond", imagen: "/assets/img/jamesbond/IMG-20250616-WA0215.jpg", stock: 12},
    // Transformers
    {id: 80, titulo: "Piezas de Bumblebee", precio: "$10000", categoria: "Transformers", imagen: "/assets/img/transformers/IMG-20250616-WA0225.jpg", stock: 15},
    {id: 81, titulo: "Piezas de Bumblebee", precio: "$10000", categoria: "Transformers", imagen: "/assets/img/transformers/IMG-20250616-WA0226.jpg", stock: 15},
    {id: 82, titulo: "Piezas de Bumblebee", precio: "$10000", categoria: "Transformers", imagen: "/assets/img/transformers/IMG-20250616-WA0227.jpg", stock: 15},
    {id: 83, titulo: "Piezas de Bumblebee", precio: "$10000", categoria: "Transformers", imagen: "/assets/img/transformers/IMG-20250616-WA0228.jpg", stock: 15},
    // Autos americanos
    {id: 84, titulo: "Piezas de Clásicos Americanos - producto descontinuado", precio: "$16000", categoria: "Autos americanos", imagen: "/assets/img/clasicos americanos/IMG-20250616-WA0216.jpg", stock: 20},
    {id: 85, titulo: "Piezas de Clásicos Americanos - producto descontinuado", precio: "$16000", categoria: "Autos americanos", imagen: "/assets/img/clasicos americanos/IMG-20250616-WA0217.jpg", stock: 20},
    {id: 86, titulo: "Piezas de Clásicos Americanos - producto descontinuado", precio: "$16000", categoria: "Autos americanos", imagen: "/assets/img/clasicos americanos/IMG-20250616-WA0218.jpg", stock: 20},
    {id: 87, titulo: "Piezas de Clásicos Americanos - producto descontinuado", precio: "$16000", categoria: "Autos americanos", imagen: "/assets/img/clasicos americanos/IMG-20250616-WA0219.jpg", stock: 20},
    {id: 88, titulo: "Piezas de Clásicos Americanos - producto descontinuado", precio: "$16000", categoria: "Autos americanos", imagen: "/assets/img/clasicos americanos/IMG-20250616-WA0220.jpg", stock: 20},
    {id: 89, titulo: "Piezas de Clásicos Americanos - producto descontinuado", precio: "$16000", categoria: "Autos americanos", imagen: "/assets/img/clasicos americanos/IMG-20250616-WA0221.jpg", stock: 20},
    {id: 90, titulo: "Piezas de Clásicos Americanos - producto descontinuado", precio: "$16000", categoria: "Autos americanos", imagen: "/assets/img/clasicos americanos/IMG-20250616-WA0222.jpg", stock: 20},
    {id: 91, titulo: "Piezas de Clásicos Americanos - producto descontinuado", precio: "$16000", categoria: "Autos americanos", imagen: "/assets/img/clasicos americanos/IMG-20250616-WA0223.jpg", stock: 20},
    // Autos argentinos
    {id: 92, titulo: "Dodge 1500 Rural (1978)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0268.jpg", stock: 1},
    {id: 93, titulo: "IKA jeep (1956)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0269.jpg", stock: 1},
    {id: 94, titulo: "Peugeot 403 (1960)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0270.jpg", stock: 1},
    {id: 95, titulo: "Mercedes Benz 220D Rural (1972)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0271.jpg", stock: 1},
    {id: 96, titulo: "Volkswagen 1500 (1982)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0272.jpg", stock: 1},
    {id: 97, titulo: "Fiat 1500 Cupé (1966)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0273.jpg", stock: 1},
    {id: 98, titulo: "Bambi Sporty (1962)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0274.jpg", stock: 1},
    {id: 99, titulo: "IKA Kaiser Carabela (1958)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0275.jpg", stock: 1},
    {id: 100, titulo: "IKA Bergantin (1960)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0276.jpg", stock: 1},
    {id: 101, titulo: "Fiat 800 Spider (1966)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0277.jpg", stock: 1},
    {id: 102, titulo: "Teram Puntero (1958)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0278.jpg", stock: 1},
    {id: 103, titulo: "De Carlo 600 (1960)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0279.jpg", stock: 1},
    {id: 104, titulo: "De Carlo 700 (1970)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0280.jpg", stock: 1},
    {id: 105, titulo: "Torino Tiwle (1974)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0281.jpg", stock: 1},
    {id: 106, titulo: "Messerschmitt KR200 (1957)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0282.jpg", stock: 1},
    {id: 107, titulo: "Peugeot 404 Rural (1963)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0283.jpg", stock: 1},
    {id: 108, titulo: "Varela Andino GT (1969)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0284.jpg", stock: 1},
    {id: 109, titulo: "IAME Justicialista Convertible (1953)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0285.jpg", stock: 1},
    {id: 110, titulo: "IAME Justicialista Grand Sport (1953)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0286.jpg", stock: 1},
    {id: 111, titulo: "Citroën CX Palla (1979)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0287.jpg", stock: 1},
    {id: 112, titulo: "Auto Union 1000S (1962)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0288.jpg", stock: 1},
    {id: 113, titulo: "Mercedes Benz 280 SL (1979)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0289.jpg", stock: 1},
    {id: 114, titulo: "IAMA Joseso (1959)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0290.jpg", stock: 1},
    {id: 115, titulo: "Isard T 400 (1963)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0291.jpg", stock: 1},
    {id: 116, titulo: "Crespi Tulia GT (1974)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0292.jpg", stock: 1},
    {id: 117, titulo: "Honda Civic LX (1993)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0293.jpg", stock: 1},
    {id: 118, titulo: "Borgward Isabella (1961)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0294.jpg", stock: 1},
    {id: 119, titulo: "Volkswagen Gol GL 1.8 (1993)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0295.jpg", stock: 1},
    {id: 120, titulo: "Peugeot 206 XS (1999)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0296.jpg", stock: 1},
    {id: 121, titulo: "Citroen 3CV Especial (1972)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0297.jpg", stock: 1},
    {id: 122, titulo: "Citroën 2CV (1960)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0298.jpg", stock: 1},
    {id: 123, titulo: "IES 3CV América (1986)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0299.jpg", stock: 1},
    {id: 124, titulo: "DKW Fissore (1964)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0300.jpg", stock: 1},
    {id: 125, titulo: "Fiat 133L (1977)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0301.jpg", stock: 1},
    {id: 126, titulo: "Fiat 1600 Sport (1970)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0302.jpg", stock: 1},
    {id: 127, titulo: "Suzuki Vitara JLX (1995)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0303.jpg", stock: 1},
    {id: 128, titulo: "Ford Falcon Rural Deluxe (1970)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0304.jpg", stock: 1},
    {id: 129, titulo: "Fiat 1500 (1963)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0305.jpg", stock: 1},
    {id: 130, titulo: "Ford Taunus GXL (1974)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0306.jpg", stock: 1},
    {id: 131, titulo: "Chevrolet 400 4 Puertas (1962)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0307.jpg", stock: 1},
    {id: 132, titulo: "Volkswagen T2 b (1982)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0308.jpg", stock: 1},
    {id: 133, titulo: "Fiat 600 S (1977)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0309.jpg", stock: 1},
    {id: 134, titulo: "Fiat Regatta (1985)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0310.jpg", stock: 1},
    {id: 135, titulo: "Renault 9 RL (1994)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0311.jpg", stock: 1},
    {id: 136, titulo: "Isard Royal T-700 (1960)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0312.jpg", stock: 1},
    {id: 137, titulo: "Fiat 147 CL5 (1983)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0313.jpg", stock: 1},
    {id: 138, titulo: "Ford Escort GL (1988)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0314.jpg", stock: 1},
    {id: 139, titulo: "Fiat 600 D (1962)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0315.jpg", stock: 1},
    {id: 140, titulo: "Renault 4L (1968)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0316.jpg", stock: 1},
    {id: 141, titulo: "BMW 320 (1979)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0317.jpg", stock: 1},
    {id: 142, titulo: "Renault 6 (1969)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0318.jpg", stock: 1},
    {id: 143, titulo: "Fiat 128 Europa (1978)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0319.jpg", stock: 1},
    {id: 144, titulo: "Fiat 125 (1972)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0320.jpg", stock: 1},
    {id: 145, titulo: "Volkswagen 1300L (1980)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0321.jpg", stock: 1},
    {id: 146, titulo: "Renault 12 Break (1973)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0322.jpg", stock: 1},
    {id: 147, titulo: "Volkswagen Gacel GL (1983)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0323.jpg", stock: 1},
    {id: 148, titulo: "Renault 12 TS (1976)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0324.jpg", stock: 1},
    {id: 149, titulo: "Peugeot 504 (1969)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0325.jpg", stock: 1},
    {id: 150, titulo: "Renault 5 GTL (1981)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0326.jpg", stock: 1},
    {id: 151, titulo: "Peugeot 505 SRI (1992)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0327.jpg", stock: 1},
    {id: 152, titulo: "Morris 1659 Fordor (1965)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0328.jpg", stock: 1},
    {id: 153, titulo: "Peugeot 404 (1968)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0329.jpg", stock: 1},
    {id: 154, titulo: "Fiat 1500 Multicarga (1965)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0330.jpg", stock: 1},
    {id: 155, titulo: "Ford F-100 (1959)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0331.jpg", stock: 1},
    {id: 156, titulo: "Chevrolet C-10 Brava (1974)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0332.jpg", stock: 1},
    {id: 157, titulo: "Fiat 125 Multicarga (1973)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0333.jpg", stock: 1},
    {id: 158, titulo: "Mercedes Benz 170D Pick-Up (1954)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0334.jpg", stock: 1},
    {id: 159, titulo: "IKA Baqueano 1000 (1959)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0335.jpg", stock: 1},
    {id: 160, titulo: "IKA Estanciera (1965)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0336.jpg", stock: 1},
    {id: 161, titulo: "Toyota Hilux SR5 (1997)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0337.jpg", stock: 1},
    {id: 162, titulo: "Renault 12 Alpine (1978)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0338.jpg", stock: 1},
    {id: 163, titulo: "Ford Sierra XR4 (1984)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0339.jpg", stock: 1},
    {id: 164, titulo: "Peugeot 504 TN (1977)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0340.jpg", stock: 1},
    {id: 165, titulo: "IAME Rastrojero (1952)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0341.jpg", stock: 1},
    {id: 167, titulo: "Ford F100 Pick-Up (1972)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0342.jpg", stock: 1},
    {id: 168, titulo: "Renault 18 GTX II (1987)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0343.jpg", stock: 1},
    {id: 169, titulo: "Fiat 128 Europa IAVA TV1300 (1978)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0344.jpg", stock: 1},
    {id: 170, titulo: "Renault Fuego GTX 2.0 (1984)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0345.jpg", stock: 1},
    {id: 171, titulo: "Chevrolet C-10 (1961)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0346.jpg", stock: 1},
    {id: 172, titulo: "Chrysler Valian V200 (1961)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0347.jpg", stock: 1},
    {id: 173, titulo: "Chrysler Valiant IV (1967)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0348.jpg", stock: 1},
    {id: 174, titulo: "Ford Escort 1.8 XR3 (1992)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0349.jpg", stock: 1},
    {id: 175, titulo: "Fiat IAVA 128TV (1971)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0350.jpg", stock: 1},
    {id: 176, titulo: "IKA Renault Torino S (1970)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0351.jpg", stock: 1},
    {id: 178, titulo: "IKA Torino 380 W 2 Puertas (1967)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0352.jpg", stock: 1},
    {id: 179, titulo: "Dodge GTX V8 (1973)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0353.jpg", stock: 1},
    {id: 180, titulo: "Dodge Coronado (1973)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0354.jpg", stock: 1},
    {id: 181, titulo: "Rambler Classic Deluxe (1963)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0355.jpg", stock: 1},
    {id: 182, titulo: "Ford Falcon 4 Puertas (1962)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0356.jpg", stock: 1},
    {id: 183, titulo: "Torino Grand Routier GR (1979)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0357.jpg", stock: 1},
    {id: 184, titulo: "Fiat IAVA 128 TV 1300 (1974)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0358.jpg", stock: 1},
    {id: 185, titulo: "Peugeot 404 Pick-UP (1979)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0359.jpg", stock: 1},
    {id: 186, titulo: "Dodge Polara RT (1974)", precio: "", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0360.jpg", stock: 1},
    {id: 187, titulo: "IKA Gladiator (1965)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0361.jpg", stock: 1},
    {id: 188, titulo: "Chevrolet Corsa GLS", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0362.jpg", stock: 1},
    {id: 189, titulo: "Fiat Duna S (1988)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0363.jpg", stock: 1},
    {id: 190, titulo: "Ford Ranchero (1973)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0364.jpg", stock: 1},
    {id: 191, titulo: "Dodge D100 (1975)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0365.jpg", stock: 1},
    {id: 192, titulo: "Citroën AMI 8 (1978)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0366.jpg", stock: 1},
    {id: 193, titulo: "Renault Dauphine (1965)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0367.jpg", stock: 1},
    {id: 194, titulo: "Dodge 1500 (1971)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0368.jpg", stock: 1},
    {id: 195, titulo: "Siam Di Tella 1500 (1960)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0369.jpg", stock: 1},
    {id: 196, titulo: "Opel K 180 (1974)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0370.jpg", stock: 1},
    {id: 197, titulo: "Bambi Microcupé (1962)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0371.jpg", stock: 1},
    {id: 198, titulo: "Fiat 800 (1966)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0372.jpg", stock: 1},
    {id: 199, titulo: "NSU PRINZ 30 (1959)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0373.jpg", stock: 1},
    {id: 200, titulo: "Auto Union 1000 s (1960)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0374.jpg", stock: 1},
    {id: 201, titulo: "SIAM Argenta (1963)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0375.jpg", stock: 1},
    {id: 202, titulo: "Citroën Mehari (1971)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0376.jpg", stock: 1},
    {id: 203, titulo: "IAME Justicialista Pick-Up (1952)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0377.jpg", stock: 1},
    {id: 204, titulo: "Citroën 3CV AK (1970)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0378.jpg", stock: 1},
    {id: 205, titulo: "Suzuki Swift (1992)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0379.jpg", stock: 1},
    {id: 206, titulo: "Chevrolet C-10 (1965)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0380.jpg", stock: 1},
    {id: 207, titulo: "Dodge 1500 GT100 (1977)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0381.jpg", stock: 1},
    {id: 208, titulo: "Chevrolet C-10 (1970)", precio: "$40000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0382.jpg", stock: 1},
    {id: 209, titulo: "Citroën 3CV M28 (1978)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0383.jpg", stock: 1},
    {id: 210, titulo: "Peugeot T4B (1967)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0384.jpg", stock: 1},
    {id: 211, titulo: "Volvo 224 GL (1979)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0385.jpg", stock: 1},
    {id: 212, titulo: "BMW 320 (1979)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0386.jpg", stock: 1},
    {id: 213, titulo: "Mercedes Benz 280 SE (1979)", precio: "$25000", categoria: "Autos Argentinos", imagen: "/assets/img/Autos argentinos/IMG-20250626-WA0387.jpg", stock: 1},
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

// --- Persistencia del carrito en localStorage ---
// Cargar carrito desde localStorage al iniciar
function cargarCarritoDesdeStorage() {
    const guardado = localStorage.getItem("carrito");
    if (guardado) {
        try {
            carrito = JSON.parse(guardado);
        } catch {
            carrito = [];
        }
    }
}

// Guardar carrito en localStorage cada vez que cambia
function guardarCarritoEnStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Sobrescribe renderizarCarrito para guardar en storage
const renderizarCarritoOriginal = renderizarCarrito;
renderizarCarrito = function() {
    renderizarCarritoOriginal();
    guardarCarritoEnStorage();
};

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
    modal.style.display = "flex";

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

    // Eliminar alert y limpiar solo el carrito al finalizar compra (el modal real lo maneja el otro código)
    modal.querySelector("#finalizar-compra").onclick = () => {
        if (carrito.length === 0) {
            // No alert, solo no hace nada
            return;
        }
        // El modal de finalizar compra se abre por el otro código
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

// Inicializa el modal y el carrito desde storage
cargarCarritoDesdeStorage();
crearModalCarrito();
renderizarCarrito();

// Evento para finalizar compra
document.getElementById("finalizar-compra").addEventListener("click", () => {
    const modalFinalizar = document.createElement("div");
    modalFinalizar.id = "modal-finalizar-compra";
    modalFinalizar.style.position = "fixed";
    modalFinalizar.style.top = "50%";
    modalFinalizar.style.left = "50%";
    modalFinalizar.style.transform = "translate(-50%, -50%)";
    modalFinalizar.style.background = "#222";
    modalFinalizar.style.color = "#fff";
    modalFinalizar.style.padding = "20px 30px";
    modalFinalizar.style.borderRadius = "10px";
    modalFinalizar.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
    modalFinalizar.style.zIndex = "12000";
    modalFinalizar.innerHTML = `
        <h2 class="text-xl font-bold mb-4">Finalizar Compra</h2>
        <form id="form-finalizar">
            <div class="mb-4">
                <label for="nombre" class="block mb-2">Nombre:</label>
                <input type="text" id="nombre" class="w-full p-2 bg-gray-700 text-white rounded" required>
            </div>
            <div class="mb-4">
                <label for="telefono" class="block mb-2">Teléfono:</label>
                <input type="tel" id="telefono" class="w-full p-2 bg-gray-700 text-white rounded" required>
            </div>
            <div class="mb-4">
                <label for="medio-pago" class="block mb-2">Medio de Pago:</label>
                <select id="medio-pago" class="w-full p-2 bg-gray-700 text-white rounded">
                    <option value="efectivo">Efectivo</option>
                    <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                    <option value="transferencia">Transferencia Bancaria</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="envio-provincia" class="block mb-2">¿A dónde enviamos?</label>
                <select id="envio-provincia" class="w-full p-2 bg-gray-700 text-white rounded" required>
                    <option value="cordoba">Dentro de Córdoba</option>
                    <option value="otra-provincia">Fuera de la provincia</option>
                </select>
            </div>
            <div class="mb-4" id="direccion-envio-container">
                <label for="direccion-envio" class="block mb-2">Dirección de envío:</label>
                <input type="text" id="direccion-envio" class="w-full p-2 bg-gray-700 text-white rounded" required>
            </div>
            <div class="mb-4" id="provincia-envio-container" style="display: none;">
                <label for="provincia-envio" class="block mb-2">Provincia de destino:</label>
                <input type="text" id="provincia-envio" class="w-full p-2 bg-gray-700 text-white rounded">
            </div>
            <button type="submit" class="w-full px-4 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition font-bold">Enviar Pedido</button>
        </form>
        <button id="cerrar-modal-finalizar" class="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Cerrar</button>
    `;
    document.body.appendChild(modalFinalizar);
    modalFinalizar.style.display = "flex";
    modalFinalizar.style.flexDirection = "column";
    modalFinalizar.style.alignItems = "center";
    modalFinalizar.style.gap = "16px";
    modalFinalizar.style.maxWidth = "400px";
    modalFinalizar.style.width = "100%";
    modalFinalizar.style.maxHeight = "90vh";
    modalFinalizar.style.overflowY = "auto";
    modalFinalizar.style.padding = "20px 30px";
    modalFinalizar.style.boxSizing = "border-box";
    modalFinalizar.style.fontSize = "1rem";
    modalFinalizar.style.lineHeight = "1.5";
    modalFinalizar.style.textAlign = "center";
    modalFinalizar.style.zIndex = "12000";
    modalFinalizar.style.opacity = "0";
    modalFinalizar.style.transition = "opacity 0.3s ease-in-out";
    setTimeout(() => {
        modalFinalizar.style.opacity = "1";
    }, 10);

    // Mostrar campo de provincia solo si es fuera de Córdoba
    const envioProvincia = modalFinalizar.querySelector("#envio-provincia");
    const direccionEnvioContainer = modalFinalizar.querySelector("#direccion-envio-container");
    const provinciaEnvioContainer = modalFinalizar.querySelector("#provincia-envio-container");
    const provinciaEnvioInput = modalFinalizar.querySelector("#provincia-envio");

    envioProvincia.addEventListener("change", () => {
        if (envioProvincia.value === "otra-provincia") {
            provinciaEnvioContainer.style.display = "block";
            provinciaEnvioInput.required = true;
        } else {
            provinciaEnvioContainer.style.display = "none";
            provinciaEnvioInput.required = false;
        }
    });

    // Evento para cerrar el modal
    document.getElementById("cerrar-modal-finalizar").addEventListener("click", () => {
        modalFinalizar.style.opacity = "0";
        setTimeout(() => {
            modalFinalizar.remove();
        }, 300);
    });

    // Evento para enviar el formulario
    document.getElementById("form-finalizar").addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const medioPago = document.getElementById("medio-pago").value;
        const envioSeleccion = document.getElementById("envio-provincia").value;
        const direccionEnvio = document.getElementById("direccion-envio").value;
        const provinciaEnvio = document.getElementById("provincia-envio").value;

        let envioTexto = envioSeleccion === "cordoba"
            ? "Envío dentro de Córdoba"
            : `Envío fuera de la provincia (${provinciaEnvio})`;

        // Construir resumen del carrito
        let resumenCarrito = "";
        let total = 0;
        carrito.forEach(item => {
            resumenCarrito += `- ${item.titulo} x${item.cantidad} ($${item.precioNum * item.cantidad})\n`;
            total += item.precioNum * item.cantidad;
        });

        // Mensaje para WhatsApp
        let mensaje = `¡Hola! Quiero realizar una compra:\n\n` +
            `*Nombre:* ${nombre}\n` +
            `*Teléfono:* ${telefono}\n` +
            `*Medio de pago:* ${medioPago}\n` +
            `*Dirección de envío:* ${direccionEnvio}\n` +
            `*Destino:* ${envioTexto}\n\n` +
            `*Detalle del pedido:*\n${resumenCarrito}\n` +
            `*Total:* $${total}`;

        // Número de WhatsApp de la empresa (formato internacional sin + ni espacios)
        const numeroEmpresa = "5493518615872";
        const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");

        // Limpia el carrito y cierra el modal
        carrito = [];
        renderizarCarrito();
        modalFinalizar.style.opacity = "0";
        setTimeout(() => {
            modalFinalizar.remove();
            alert("¡Gracias por tu compra! Serás contactado por WhatsApp.");
        }, 300);
    });

    // Cerrar el modal al hacer clic fuera
    modalFinalizar.addEventListener("click", (e) => {
        if (e.target === modalFinalizar) {
            modalFinalizar.style.opacity = "0";
            setTimeout(() => {
                modalFinalizar.remove();
            }, 300);
        }
    });

    // Cerrar el modal con Escape
    document.addEventListener("keydown", function escListener(e) {
        if (e.key === "Escape") {
            modalFinalizar.style.opacity = "0";
            setTimeout(() => {
                modalFinalizar.remove();
            }, 300);
            document.removeEventListener("keydown", escListener);
        }
    });
});

// Evento para el botón "COMPRAR"
document.addEventListener("click", function(e) {
    if (e.target && e.target.textContent.trim() === "COMPRAR") {
        const tarjeta = e.target.closest("div.bg-gray-800");
        if (!tarjeta) return;

        const titulo = tarjeta.querySelector("span.text-lg")?.textContent.trim();
        const producto = productos.find(p => p.titulo === titulo);
        if (!producto) return;

        // Crear modal de confirmación
        let modalConfirmacion = document.createElement("div");
        modalConfirmacion.id = "modal-confirmacion-compra-unica";
        modalConfirmacion.style.position = "fixed";
        modalConfirmacion.style.top = "50%";
        modalConfirmacion.style.left = "50%";
        modalConfirmacion.style.transform = "translate(-50%, -50%)";
        modalConfirmacion.style.background = "#222";
        modalConfirmacion.style.color = "#fff";
        modalConfirmacion.style.padding = "20px 30px";
        modalConfirmacion.style.borderRadius = "10px";
        modalConfirmacion.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
        modalConfirmacion.style.zIndex = "13000";
        modalConfirmacion.style.display = "flex";
        modalConfirmacion.style.flexDirection = "column";
        modalConfirmacion.style.alignItems = "center";
        modalConfirmacion.style.gap = "16px";
        modalConfirmacion.style.maxWidth = "400px";
        modalConfirmacion.style.width = "100%";
        modalConfirmacion.style.fontSize = "1rem";

        modalConfirmacion.innerHTML = `
            <p class="text-lg text-center">¿Deseás comprar <strong>${producto.titulo}</strong> ahora mismo?</p>
            <div class="flex gap-4 mt-4">
                <button id="btn-compra-solo" class="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 font-semibold">Sí, solo este</button>
                <button id="btn-compra-agregar" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">No, agregar al carrito</button>
            </div>
        `;
        document.body.appendChild(modalConfirmacion);

        // Evento: "Sí, solo este"
        document.getElementById("btn-compra-solo").onclick = () => {
            carrito = []; // Vaciar el carrito por si había algo
            agregarAlCarrito(producto.id, 1); // Agrega solo este producto
            document.getElementById("modal-confirmacion-compra-unica")?.remove();
            document.getElementById("finalizar-compra")?.click(); // Dispara el proceso de finalizar
        };

        // Evento: "No, agregar al carrito"
        document.getElementById("btn-compra-agregar").onclick = () => {
            agregarAlCarrito(producto.id, 1);
            document.getElementById("modal-confirmacion-compra-unica")?.remove();

            // Modal informativo (mismo estilo que el de "Agregar al carrito")
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
                    <b>${producto.titulo}</b> fue agregado al carrito
                </span>
            `;
            modal.style.opacity = "1";
            modal.style.pointerEvents = "auto";

            clearTimeout(modal._timeout);
            modal._timeout = setTimeout(() => {
                modal.style.opacity = "0";
                modal.style.pointerEvents = "none";
            }, 1700);
        };
    }
});
