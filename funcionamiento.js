document.getElementById('tab1').addEventListener('click', function() {
    switchTab('section1', 'tab1');
});
document.getElementById('tab2').addEventListener('click', function() {
    switchTab('section2', 'tab2');
});

function switchTab(sectionId, tabId) {
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.add('hidden');
    document.getElementById('section1').classList.remove('hidden');
    document.getElementById('section2').classList.remove('hidden');
    document.getElementById(sectionId).classList.remove('hidden');

    document.getElementById('tab1').classList.remove('active');
    document.getElementById('tab2').classList.remove('active');
    document.getElementById(tabId).classList.add('active');
}

function calcularHabilidades() {
    const fuerza = parseInt(document.getElementById('fuerza').value) || 0;
    const agilidad = parseInt(document.getElementById('agilidad').value) || 0;
    const inteligencia = parseInt(document.getElementById('inteligencia').value) || 0;
    const carisma = parseInt(document.getElementById('carisma').value) || 0;

    const lucha = fuerza + 2;
    const esquivar = agilidad + 2;
    const resolverAcertijos = inteligencia + 2;
    const persuadir = carisma + 2;

    document.getElementById('resultados').innerHTML = `
        <p>Lucha: ${lucha}</p>
        <p>Esquivar: ${esquivar}</p>
        <p>Resolver Acertijos: ${resolverAcertijos}</p>
        <p>Persuadir: ${persuadir}</p>
    `;
}

function mostrarPoderes() {
    const clase = document.getElementById('clase').value;
    const nivel = parseInt(document.getElementById('nivel').value) || 0;
    const carrousel = document.getElementById('carrousel');
    
    // Esta lógica debería ser reemplazada por la lógica real para obtener los poderes del héroe basado en la clase y el nivel
    carrousel.innerHTML = `
        <div class="carrousel-item">${clase} Poder 1 (Nivel ${nivel})</div>
        <div class="carrousel-item">${clase} Poder 2 (Nivel ${nivel})</div>
        <div class="carrousel-item">${clase} Poder 3 (Nivel ${nivel})</div>
    `;
}