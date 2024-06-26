document.getElementById('tab1').addEventListener('click', function() {
    switchTab('section1', 'tab1');
});
document.getElementById('tab2').addEventListener('click', function() {
    switchTab('section2', 'tab2');
});

function switchTab(sectionId, tabId) {
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');

    document.getElementById('tab1').classList.remove('active');
    document.getElementById('tab2').classList.remove('active');
    document.getElementById(tabId).classList.add('active');
}

function calcularModificador(valor) {
    return Math.max(Math.floor((valor - 10) / 2), 0);
}

function actualizarModificadores() {
    const fuerza = parseInt(document.getElementById('fuerza').value) || 0;
    const agilidad = parseInt(document.getElementById('agilidad').value) || 0;
    const inteligencia = parseInt(document.getElementById('inteligencia').value) || 0;
    const carisma = parseInt(document.getElementById('carisma').value) || 0;

    document.getElementById('mod_fuerza').textContent = calcularModificador(fuerza);
    document.getElementById('mod_agilidad').textContent = calcularModificador(agilidad);
    document.getElementById('mod_inteligencia').textContent = calcularModificador(inteligencia);
    document.getElementById('mod_carisma').textContent = calcularModificador(carisma);

    actualizarHabilidades();
}

function actualizarHabilidades() {
    const modFuerza = parseInt(document.getElementById('mod_fuerza').textContent) || 0;
    const modAgilidad = parseInt(document.getElementById('mod_agilidad').textContent) || 0;
    const modInteligencia = parseInt(document.getElementById('mod_inteligencia').textContent) || 0;
    const modCarisma = parseInt(document.getElementById('mod_carisma').textContent) || 0;

    document.getElementById('mod_lucha').textContent = modFuerza;
    document.getElementById('mod_levantar_peso').textContent = modFuerza;
    document.getElementById('mod_esquivar').textContent = modAgilidad;
    document.getElementById('mod_sigilo').textContent = modAgilidad;
    document.getElementById('mod_resolver_acertijos').textContent = modInteligencia;
    document.getElementById('mod_percepcion').textContent = modInteligencia;
    document.getElementById('mod_persuasion').textContent = modCarisma;
    document.getElementById('mod_engano').textContent = modCarisma;
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

// Inicializar los modificadores y habilidades al cargar la página
actualizarModificadores();
