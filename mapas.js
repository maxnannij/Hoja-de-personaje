let mapContainer = document.getElementById('map-container');
let mapContent = document.getElementById('map-content');
let map = document.getElementById('map');
let resetButton = document.getElementById('reset-button');
let loadMapButton = document.getElementById('load-map-button');
let scale = 1;
let originX = 0;
let originY = 0;
let initialDistance = 0;
let scaleStart = 1;
let panX = 0;
let panY = 0;
let isPanning = false;
let startX = 0;
let startY = 0;
let longPressTimeout;

const mapCodes = {
    'felicitaciones': 'Tribulacionllegada.jpg',
    'prueba': 'prueba.jpg',
    // Agrega más códigos y rutas a mapas según sea necesario
};

function handleTouchStart(event) {
    if (event.touches.length === 2) {
        const [touch1, touch2] = event.touches;
        originX = (touch1.clientX + touch2.clientX) / 2;
        originY = (touch1.clientY + touch2.clientY) / 2;
        scaleStart = scale;
        initialDistance = Math.hypot(
            touch1.clientX - touch2.clientX,
            touch1.clientY - touch2.clientY
        );
    } else if (event.touches.length === 1) {
        isPanning = true;
        startX = event.touches[0].clientX - panX;
        startY = event.touches[0].clientY - panY;
    }
}

function handleTouchMove(event) {
    if (event.touches.length === 2) {
        const [touch1, touch2] = event.touches;
        const currentDistance = Math.hypot(
            touch1.clientX - touch2.clientX,
            touch1.clientY - touch2.clientY
        );
        const newScale = (currentDistance / initialDistance) * scaleStart;
        setScale(newScale);
    } else if (event.touches.length === 1 && isPanning) {
        panX = event.touches[0].clientX - startX;
        panY = event.touches[0].clientY - startY;
        setPan(panX, panY);
    }
}

function handleTouchEnd(event) {
    if (event.touches.length < 2) {
        isPanning = false;
    }
}

function setScale(newScale) {
    scale = Math.min(Math.max(newScale, 1), 4); // Limitar el nivel de zoom
    updateTransform();
}

function setPan(x, y) {
    panX = x;
    panY = y;
    updateTransform();
}

function updateTransform() {
    const transform = `scale(${scale}) translate(${panX / scale}px, ${panY / scale}px)`;
    mapContent.style.transform = transform;
}

function loadMap() {
    const code = document.getElementById('map-code').value;
    if (mapCodes[code]) {
        map.src = mapCodes[code];
    } else {
        alert('Código de mapa no válido');
    }
}

mapContainer.addEventListener('touchstart', handleTouchStart);
mapContainer.addEventListener('touchmove', handleTouchMove);
mapContainer.addEventListener('touchend', handleTouchEnd);

resetButton.addEventListener('click', () => {
    scale = 1;
    panX = 0;
    panY = 0;
    updateTransform();
});

loadMapButton.addEventListener('click', loadMap);

// Inicializar la cuadrícula
function createGrid() {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);
    }
}
