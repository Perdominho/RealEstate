
const fs = require('fs');


function renderPropertyDetails(property) {
    let html = '<!DOCTYPE html><html><head><style>';
    
    const headerStyles = fs.readFileSync('./public/assets/css/style.css', 'utf8');
    const spotlight = fs.readFileSync('./public/assets/css/spotlight.min.css', 'utf8');
    html += headerStyles;
    html += spotlight;
    html += '</style></head><body>';
    html += `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet">
    `;
    // Header
    html += `

        <header class="header" data-header>

        <div class="overlay" data-overlay></div>

        <div class="header-top">
            <div class="container">

            <ul class="header-top-list">

                <li>
                <a href="mailto:info@homeverse.com" class="header-top-link">
                    <ion-icon name="mail-outline"></ion-icon>

                    <span>info@homeverse.com</span>
                </a>
                </li>

                <li>
                <a href="#" class="header-top-link">
                    <ion-icon name="location-outline"></ion-icon>

                    <address>15/A, Nest Tower, NYC</address>
                </a>
                </li>

            </ul>

            <div class="wrapper">
                <ul class="header-top-social-list">

                <li>
                    <a href="#" class="header-top-social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" class="header-top-social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" class="header-top-social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
               

                </ul>

                <button class="header-top-btn">Vender mi casa</button>
            </div>

            </div>
        </div>

        <div class="header-bottom">
            <div class="container">

            <a href="/" class="logo">
                <img src="../../assets/images/logo.png" alt="Homeverse logo">
            </a>

            <nav class="navbar" data-navbar>

                <div class="navbar-top">

                <a href="/" class="logo">
                    <img src="../assets/images/logo.png" alt="Homeverse logo">
                </a>

                <button class="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                </div>

                <div class="navbar-bottom">
                <ul class="navbar-list">

                    <li>
                    <a href="/" class="navbar-link" data-nav-link>Inicio</a>
                    </li>

                    <li>
                    <a href="#about" class="navbar-link" data-nav-link>Sobre nosotros</a>
                    </li>

                    <li>
                    <a href="#service" class="navbar-link" data-nav-link>Servicios</a>
                    </li>

                    <li>
                    <a href="/Propiedades" class="navbar-link" data-nav-link>Propiedades</a>
                    </li>
                   
                    <li>
                    <a href="#contact" class="navbar-link" data-nav-link>Contacto</a>
                    </li>

                </ul>
                </div>

            </nav>

            <div class="header-bottom-actions">

                <button class="header-bottom-actions-btn" aria-label="Search">
                <ion-icon name="search-outline"></ion-icon>

                <span>Search</span>
                </button>

                <button class="header-bottom-actions-btn" aria-label="Profile">
                <ion-icon name="person-outline"></ion-icon>

                <span>Profile</span>
                </button>

                <button class="header-bottom-actions-btn" aria-label="Cart">
                <ion-icon name="cart-outline"></ion-icon>

                <span>Cart</span>
                </button>

                <button class="header-bottom-actions-btn" data-nav-open-btn aria-label="Open Menu">
                <ion-icon name="menu-outline"></ion-icon>

                <span>Menu</span>
                </button>

            </div>

            </div>
        </div>

        </header>
    `;
    
    // Renderizar la información de la propiedad
    html += `
        <div class="property-details">
        <div class="side-by-side">
        <p class="paragraph">${property.tipo}</p>
        <p class="paragraph">${property.venta}</p>
      </div>
      <h1 style="margin: 0% 0% 0% 9%;">${property.title}</h1>
      <div class="contenedor">
      <button class="banner-actions-btn1">
      <ion-icon name="location" role="img" class="md hydrated" aria-label="location"></ion-icon>

      <address>${property.location}</address>
    </button>
    <div class="card-price"><strong>${Number(property.price).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}€</strong></div>
 
    </div>
       
        <div class="grid-container">


    <div class="left-column">
    <a href="${property.imagelink1}" class="spotlight">
      <img class="grid-item" src="${property.imagelink1}" alt="${property.title}"></a>

         </div>

    <div class="right-column">
    <a href="${property.imagelink2}" class="spotlight">
      <img class="grid-item" src="${property.imagelink2}" alt="${property.title}"></a>
      <a href="${property.imagelink3}" class="spotlight">
      <img class="grid-item" src="${property.imagelink3}" alt="${property.title}"></a>
      <a href="${property.imagelink4}" class="spotlight">
      <img class="grid-item" src="${property.imagelink4}" alt="${property.title}"></a>
      <a href="${property.imagelink4}" class="spotlight">
      <img class="grid-item" src="${property.imagelink4}" alt="${property.title}"></a>
      
     </div>
  </div>

         
    
                 
          
        </div>
    
<div class="grid-container2">
  <div class="grid-item">

     <div class="descripcion"> 
     
     <p class="section-subtitle">Descripcion</p>
     <p>${property.description}</p>
           
</div>
<iframe src="${property.maps}" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  </div>
       <div class="grid-item">Columna 2</div>
</div>
            
        
    `;
    
    html += '<script src="../../assets/js/spotlight.min.js"></script>';
    html += '<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>';
    html +=  '<script src="../../assets/js/script.js"></script>';
    html += '</body></html>';
    return html;
}


module.exports = { renderPropertyDetails };