//INFUSIONES BOTONES
const listaInfusiones = document.getElementById('listaInfusiones')
const botonTesPuros = document.getElementById('botonTesPuros')
const botonTesHierbas = document.getElementById('botonHierbas')
const botonFlorales = document.getElementById('botonFlorales')
const botonSaborizados = document.getElementById('botonSaborizados')

botonTesPuros.addEventListener('click', () => {

    listaInfusiones.innerHTML = `
    <h3 class="list">Listado de tés puros:</h3>
    <div class="venta">
    <div>
        <img src="../Images/TeNegro.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ NEGRO</h1>
        <p class="info">Descubre la exquisita esencia del té negro: una infusión robusta y reconfortante con notas intensas de malta y cacao. Su aroma envolvente y su sabor equilibrado te transportarán a un mundo de placer sensorial. Disfruta de su color ámbar oscuro y benefíciate de sus propiedades antioxidantes y energizantes. ¡Una experiencia única en cada taza!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
    </div>
    
    <div class="venta">
    <div>
        <img src="../Images/TeRojo.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ ROJO</h1>
        <p class="info">Sumérgete en el cautivador universo del té rojo: una infusión cautivadora con un carácter terroso y suave sabor a madera. Su color rojo intenso y su aroma terroso te envolverán en una experiencia única. Descubre sus propiedades depurativas y digestivas, y déjate seducir por su equilibrio perfecto entre sabor y beneficios para la salud. ¡El deleite en cada sorbo!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeVerde.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ VERDE</h1>
        <p class="info">Embárcate en un viaje revitalizante con el té verde: una infusión fresca y vigorizante con notas herbales y un toque sutilmente dulce. Su color verde brillante y su aroma delicado te transportarán a un oasis de calma. Disfruta de sus propiedades antioxidantes y desintoxicantes, y déjate cautivar por su sabor refrescante y revitalizante. ¡Un verdadero elixir de bienestar en cada taza!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeEarlGrey.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">EARL GREY</h1>
        <p class="info">Descubre la elegancia del té Earl Grey: una infusión sofisticada con el equilibrio perfecto entre el intenso aroma cítrico de la bergamota y el sabor suave y seductor del té negro. Su color ámbar dorado y su aroma cautivador te transportarán a un mundo de refinamiento. Disfruta de su carácter distintivo y déjate envolver por su irresistible encanto en cada sorbo. ¡Una experiencia de lujo para los amantes del té!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>`
})

botonTesHierbas.addEventListener('click', () => {

    listaInfusiones.innerHTML = `
    <h3 class="list">Listado de tés de hierbas:</h3>
    <div class="venta">
    <div>
        <img src="../Images/TeCedron.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ CEDRÓN</h1>
        <p class="info">Descubre la serenidad del té de cedrón: una infusión herbal y reconfortante que combina la frescura del limón con la suavidad del cedrón. Su aroma cítrico y su sabor relajante te transportarán a un oasis de calma. Disfruta de su color dorado y deja que su frescura natural te envuelva en cada sorbo. ¡Una experiencia herbal que te revitalizará!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeBurrito.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ BURRITO</h1>
        <p class="info">Lánzate a una aventura de sabores con el té de burrito: una infusión exótica y fascinante que combina hierbas aromáticas con un toque de especias cautivadoras. Su aroma embriagador y su sabor único te transportarán a tierras lejanas. Disfruta de su color dorado y déjate seducir por esta experiencia vibrante en cada sorbo. ¡Una explosión de sabores para los exploradores del té!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeTilo.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ TILO</h1>
        <p class="info">Sumérgete en la tranquilidad del té de tilo: una infusión relajante y reconfortante que combina la suavidad floral del tilo con propiedades calmantes. Su aroma suave y su sabor delicado te llevarán a un estado de serenidad. Disfruta de su color dorado pálido y déjate envolver por esta experiencia relajante en cada sorbo. ¡Un remanso de paz en tu taza!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeBoldo.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ BOLDO</h1>
        <p class="info">Descubre el poder revitalizante del té de boldo: una infusión herbal con propiedades digestivas y desintoxicantes. Su aroma terroso y su sabor distintivo te envolverán en una experiencia única. Disfruta de su color amarillo dorado y benefíciate de sus propiedades medicinales. ¡Una opción ideal para promover la salud y el bienestar en cada taza!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>`
})

botonFlorales.addEventListener('click', () => {

    listaInfusiones.innerHTML = `
    <h3 class="list">Listado de tés florales:</h3>
    <div class="venta">
    <div>
        <img src="../Images/TePetalosRosas.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ PETALOS DE ROSAS</h1>
        <p class="info">Embárcate en una experiencia floral y delicada con el té de pétalos de rosas: una infusión encantadora que combina la suavidad del té con la fragancia exquisita de los pétalos de rosas. Su aroma floral y su sabor suave te transportarán a un jardín de ensueño. Disfruta de su color rosado suave y déjate cautivar por esta experiencia romántica en cada sorbo. ¡Un deleite para los amantes de las flores!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeLavanda.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ LAVANDA</h1>
        <p class="info">Sumérgete en la serenidad del té de lavanda: una infusión aromática y relajante que combina la delicadeza floral de la lavanda con las propiedades calmantes del té. Su aroma suave y su sabor reconfortante te llevarán a un estado de tranquilidad. Disfruta de su color ligeramente púrpura y déjate envolver por esta experiencia relajante en cada sorbo. ¡Un oasis de paz en tu taza!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeJazmin.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ JAZMÍN</h1>
        <p class="info">Embárcate en un viaje sensorial con el té de jazmín: una infusión exquisita que combina la sutileza del té verde con la fragancia embriagadora de las flores de jazmín. Su aroma floral y su sabor suave te transportarán a un jardín perfumado. Disfruta de su color dorado brillante y déjate cautivar por esta experiencia aromática en cada sorbo. ¡Una indulgencia floral para deleitar tus sentidos!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeManzanilla.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ MANZANILLA</h1>
        <p class="info">Sumérgete en la tranquilidad del té de manzanilla: una infusión suave y reconfortante que combina la delicadeza de las flores de manzanilla con propiedades calmantes. Su aroma suave y su sabor reconfortante te llevarán a un estado de relajación. Disfruta de su color dorado claro y déjate envolver por esta experiencia serena en cada sorbo. ¡Un remedio natural para encontrar la calma y el bienestar!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>`
})

botonSaborizados.addEventListener('click', () => {

    listaInfusiones.innerHTML = `
    <h3 class="list">Listado de tés saborizados:</h3>
    <div class="venta">
    <div>
        <img src="../Images/TeFrutosdelBosque.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ FRUTOS DEL BOSQUE</h1>
        <p class="info">Adéntrate en la exuberancia del té de frutos del bosque: una mezcla cautivadora de sabores que combina té negro o verde con una selección de moras, grosellas y cerezas. Su aroma tentador y su sabor dulce y ligeramente ácido te transportarán a un bosque lleno de frutas maduras. Disfruta de su color rojizo y déjate seducir por esta experiencia frutal y refrescante en cada sorbo. ¡Una explosión de sabores naturales en tu taza!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TePeach.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ PEACH</h1>
        <p class="info">Deléitate con la dulce tentación del té de durazno: una infusión frutal y refrescante que combina la suavidad del té verde con la jugosidad y aroma del durazno maduro. Su color dorado y su aroma cautivador te transportarán a un jardín de sabores. Disfruta de su sabor dulce y afrutado, y déjate seducir por esta deliciosa experiencia en cada sorbo. ¡Un paraíso de durazno en tu taza!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeChocolate.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ CHOCOLATE</h1>
        <p class="info">Sumérgete en la indulgencia del té de chocolate: una infusión tentadora que combina la riqueza del cacao con la suavidad del té negro. Su aroma embriagador y su sabor decadente te transportarán a un mundo de placer. Disfruta de su color oscuro y profundo, y déjate envolver por esta experiencia única en cada sorbo. ¡Un capricho chocolatoso que deleitará tus sentidos!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>

<div class="venta">
    <div>
        <img src="../Images/TeRaspberry.jpg" alt="">
    </div>
    <div class="datos">
        <h1 class="nombre">TÉ RASPBERRY</h1>
        <p class="info">Descubre la deliciosa esencia del té de frambuesa: una infusión vibrante y afrutada que combina la dulzura de las frambuesas con la suavidad del té negro. Su aroma jugoso y su sabor refrescante te llevarán a un paraíso de sabores. Disfruta de su color rubí y deja que su dulzura natural te envuelva en cada sorbo. ¡Una experiencia frutal que deleitará tu paladar!</p>
        <h2 class="precio">$1800</h2>
        <div class="boton"><button>COMPRAR</button></div>
    </div>
</div>`
})