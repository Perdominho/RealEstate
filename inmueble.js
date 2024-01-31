
const fs = require('fs');



function renderPropertyDetails({ property, similarProperties }) {
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
                    <a href="../../#about" class="navbar-link" data-nav-link>Sobre nosotros</a>
                    </li>

                    <li>
                    <a href="../../#service" class="navbar-link" data-nav-link>Servicios</a>
                    </li>

                    <li>
                    <a href="/Propiedades" class="navbar-link" data-nav-link>Propiedades</a>
                    </li>
                   
                    <li>
                    <a href="../../#contact" class="navbar-link" data-nav-link>Contacto</a>
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

  <!-- Slider para propiedades similares -->
  <section class="property" id="property">
  <div class="container">
    <p class="section-subtitle">Properties</p>
    <h2 class="h2 section-title">Propiedades similares</h2>
    <ul class="property-list has-scrollbar">
      ${similarProperties.map(similarProperty => `
        <li>
          <div class="property-card">
            <div class="property-card">

        <figure class="card-banner">

          <a href="/Propiedades/inmueble/${similarProperty.propertyid}">
            <img src="${similarProperty.imagelink1}" alt="${similarProperty.title}" class="w-100">
          </a>

          <div class="card-badge ${similarProperty.venta === 'Venta' ? 'green' : similarProperty.venta === 'Alquiler' ? 'orange' : ''}">
  ${similarProperty.venta}
</div>

          <div class="banner-actions">

            <button class="banner-actions-btn">
              <ion-icon name="location" role="img" class="md hydrated" aria-label="location"></ion-icon>

              <address>${similarProperty.location}, ${similarProperty.city}</address>
            </button>

            <button class="banner-actions-btn">
              <ion-icon name="camera" role="img" class="md hydrated" aria-label="camera"></ion-icon>

              <span>4</span>
            </button>

            <button class="banner-actions-btn">
              <ion-icon name="film" role="img" class="md hydrated" aria-label="film"></ion-icon>

              <span>2</span>
            </button>

          </div>

        </figure>

        <div class="card-content">

          <div class="card-price">
            <strong>${Number(similarProperty.price).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}€</strong>${similarProperty.venta === 'Alquiler' ? '/Mes' : ''}

            </div>
       
          <h3 class="h3 card-title">
            <a href="/Propiedades/inmueble/${similarProperty.propertyid}">${similarProperty.title}</a>
          </h3>

          
          </p>

          <ul class="card-list">

            <li class="card-item">
              <strong>${similarProperty.bedrooms}</strong>

              <ion-icon name="bed-outline" role="img" class="md hydrated" aria-label="bed outline"></ion-icon>

              <span>Bedrooms</span>
            </li>

            <li class="card-item">
              <strong>${similarProperty.bathrooms}</strong>

              <ion-icon name="man-outline" role="img" class="md hydrated" aria-label="man outline"></ion-icon>

              <span>Bathrooms</span>
            </li>

            <li class="card-item">
              <strong>${similarProperty.area} m²</strong>

              

              <span>Area</span>
            </li>

          </ul>

        </div>

        <div class="card-footer">

          <div class="card-author">

            <figure class="author-avatar">
              <img src="./assets/images/author.jpg" alt="William Seklo" class="w-100">
            </figure>

            <div>
              <p class="author-name">
                <a href="#">German Kramer</a>
              </p>

              <p class="author-title">Estate Agents</p>
            </div>

          </div>

          <div class="card-footer-actions">
          

            <button class="card-footer-actions-btn">
              <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline"></ion-icon>
            </button>

            <button class="card-footer-actions-btn">
              <ion-icon name="add-circle-outline" role="img" class="md hydrated" aria-label="add circle outline"></ion-icon>
            </button>

          </div>

        </div>

      </div>
          </div>
        </li>
      `).join('')}
    </ul>
  </div>
</section>
</div>
</div>
        
        
    `;
     
    html += '<script src="../../assets/js/spotlight.min.js"></script>';
    html += '<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>';
    html +=  '<script src="../../assets/js/script.js"></script>';
    html += '</body></html>';
    return html;
}


module.exports = { renderPropertyDetails };