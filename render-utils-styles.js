// render-utils-styles.js

function getCommonStyles() {
    return `
        body {
            
            background-color: #f4f4f4;
            margin: 20px;
        }
    `;
}

function getPropertyStyles() {
    return `
        .property {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #fff;
        } , 
        /* Agregar más estilos según sea necesario */
    `;
}

function getPropertyDetailsStyles() {
    return `
        .property-details {
            border: 1px solid #ccc;
            padding: 20px;
            background-color: #fff;
        }
        /* Agregar más estilos según sea necesario */
    `;
}

module.exports = { getCommonStyles, getPropertyStyles, getPropertyDetailsStyles };
