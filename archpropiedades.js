
const fs = require('fs');
const footerModule = require('./footer');
const headerModule = require('./header');

function renderHTMLWithStyles(propertyListings) {
    let html = '<!DOCTYPE html><html><head><style>';
    
     // Agregar estilos CSS aquí
    const headerStyles = fs.readFileSync('./public/assets/css/style.css', 'utf8');
    const spotlight = fs.readFileSync('./public/assets/css/spotlight.min.css', 'utf8');
    html += headerStyles;
    html += spotlight;

    html += `
    .property-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Establece exactamente 3 columnas */
        gap: 20px;
        max-width: 90%; /* Ajusta el valor según tus necesidades */
        margin: 0 auto;  /* Centra el grid en el contenedor padre */
      }
      
      .property {
        border: 1px solid #ddd;
        padding : 0px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      
      .property img {
        width: 100%;
        height: 290px; /* Establecer la altura deseada */
        object-fit: cover; /* Ajusta la imagen para cubrir el contenedor */
        border-bottom: 1px solid #ddd;
      }
      
      .property h3 {
        margin: 10px 0 15px;
        font-size: 1.2em;
      }rt
      
      .property p {
        margin: 5px 0;
      }
      
      @media screen and (max-width: 767px) {
        .property-grid {
          grid-template-columns: 1fr;
        }
      }
      
      
        // Agregar más estilos según sea necesario
    `;
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
    
     // Crear un contenedor para las propiedades
     html += `${header()}`;
    html += '<div id="propertyContainer" class="property-grid">';


    // Iterar sobre las propiedades y agregarlas al contenedor con enlaces a páginas detalladas
    propertyListings.forEach(property => {
        html += `
        <div class="property-card">

        <figure class="card-banner">

          <a href="/Propiedades/inmueble/${property.propertyid}">
            <img src="${property.imagelink1}" alt="${property.title}" class="w-100">
          </a>

          <div class="card-badge ${property.venta === 'Venta' ? 'green' : property.venta === 'Alquiler' ? 'orange' : ''}">
  ${property.venta}
</div>

          <div class="banner-actions">

            <button class="banner-actions-btn">
              <ion-icon name="location" role="img" class="md hydrated" aria-label="location"></ion-icon>

              <address>${property.location}, ${property.city}</address>
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
            <strong>${Number(property.price).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}€</strong>${property.venta === 'Alquiler' ? '/Mes' : ''}

            </div>
       
          <h3 class="h3 card-title">
            <a href="/Propiedades/inmueble/${property.propertyid}">${property.title}</a>
          </h3>

          <p class="card-text">
          ${property.description}
          </p>

          <ul class="card-list">

            <li class="card-item">
              <strong>${property.bedrooms}</strong>

              <ion-icon name="bed-outline" role="img" class="md hydrated" aria-label="bed outline"></ion-icon>

              <span>Bedrooms</span>
            </li>

            <li class="card-item">
              <strong>${property.bathrooms}</strong>

              <ion-icon name="man-outline" role="img" class="md hydrated" aria-label="man outline"></ion-icon>

              <span>Bathrooms</span>
            </li>

            <li class="card-item">
              <strong>${property.area} m²</strong>

              

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
        `;
    });
    
    
    html += '<script src="../assets/js/spotlight.min.js"></script>';
    html += '<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>';
    html +=  '<script src="./assets/js/script.js"></script>';
    html += '</div></body></html>';
    html += `${footer()}`;
    
    return html;
}

function header() {
  return `
      ${headerModule.generateHeader()}
      <script src="../../assets/js/spotlight.min.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script src="../../assets/js/script.js"></script>
  </body></html>`;
}

function footer() {
  return `
      ${footerModule.generateFooter()}
      <script src="../../assets/js/spotlight.min.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script src="../../assets/js/script.js"></script>
  </body></html>`;
}

module.exports = { renderHTMLWithStyles};