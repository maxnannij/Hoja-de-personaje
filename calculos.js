let equipamiento = [];

function agregarEquipamiento() {
    const nombreEquipamiento = document.getElementById('nombreEquipamiento').value;
    const atributoEquipamiento = document.getElementById('atributoEquipamiento').value;
    const valorEquipamiento = parseInt(document.getElementById('valorEquipamiento').value) || 0;
    
    if (nombreEquipamiento && atributoEquipamiento && valorEquipamiento) {
        const item = { nombre: nombreEquipamiento, atributo: atributoEquipamiento, valor: valorEquipamiento };
        equipamiento.push(item);
        actualizarListaEquipamiento();
        actualizarHabilidades();
        
        document.getElementById('nombreEquipamiento').value = '';
        document.getElementById('atributoEquipamiento').value = 'fuerza';
        document.getElementById('valorEquipamiento').value = '';
    } else {
        alert('Por favor, ingresa el nombre, el atributo y el valor del equipamiento.');
    }
}

function eliminarEquipamiento(index) {
    equipamiento.splice(index, 1);
    actualizarListaEquipamiento();
    actualizarHabilidades();
}

function actualizarListaEquipamiento() {
    const listaEquipamiento = document.getElementById('listaEquipamiento');
    listaEquipamiento.innerHTML = '';
    equipamiento.forEach((item, index) => {
        const nuevoEquipamiento = document.createElement('li');
        nuevoEquipamiento.innerHTML = `${item.nombre} - ${item.atributo} +${item.valor} <button onclick="eliminarEquipamiento(${index})">Eliminar</button>`;
        listaEquipamiento.appendChild(nuevoEquipamiento);
    });
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

    const equipoLucha = parseInt(document.getElementById('equipo_lucha').value) || 0;
    const equipoLevantarPeso = parseInt(document.getElementById('equipo_levantar_peso').value) || 0;
    const equipoEsquivar = parseInt(document.getElementById('equipo_esquivar').value) || 0;
    const equipoSigilo = parseInt(document.getElementById('equipo_sigilo').value) || 0;
    const equipoResolverAcertijos = parseInt(document.getElementById('equipo_resolver_acertijos').value) || 0;
    const equipoPercepcion = parseInt(document.getElementById('equipo_percepcion').value) || 0;
    const equipoPersuasion = parseInt(document.getElementById('equipo_persuasion').value) || 0;
    const equipoEngano = parseInt(document.getElementById('equipo_engano').value) || 0;

    const lucha = parseInt(document.getElementById('lucha').value) || 0;
    const levantarPeso = parseInt(document.getElementById('levantar_peso').value) || 0;
    const esquivar = parseInt(document.getElementById('esquivar').value) || 0;
    const sigilo = parseInt(document.getElementById('sigilo').value) || 0;
    const resolverAcertijos = parseInt(document.getElementById('resolver_acertijos').value) || 0;
    const percepcion = parseInt(document.getElementById('percepcion').value) || 0;
    const persuasion = parseInt(document.getElementById('persuasion').value) || 0;
    const engano = parseInt(document.getElementById('engano').value) || 0;

    document.getElementById('mod_lucha').textContent = modFuerza;
    document.getElementById('mod_levantar_peso').textContent = modFuerza;
    document.getElementById('mod_esquivar').textContent = modAgilidad;
    document.getElementById('mod_sigilo').textContent = modAgilidad;
    document.getElementById('mod_resolver_acertijos').textContent = modInteligencia;
    document.getElementById('mod_percepcion').textContent = modInteligencia;
    document.getElementById('mod_persuasion').textContent = modCarisma;
    document.getElementById('mod_engano').textContent = modCarisma;

    document.getElementById('total_lucha').textContent = lucha + modFuerza + equipoLucha;
    document.getElementById('total_levantar_peso').textContent = levantarPeso + modFuerza + equipoLevantarPeso;
    document.getElementById('total_esquivar').textContent = esquivar + modAgilidad + equipoEsquivar;
    document.getElementById('total_sigilo').textContent = sigilo + modAgilidad + equipoSigilo;
    document.getElementById('total_resolver_acertijos').textContent = resolverAcertijos + modInteligencia + equipoResolverAcertijos;
    document.getElementById('total_percepcion').textContent = percepcion + modInteligencia + equipoPercepcion;
    document.getElementById('total_persuasion').textContent = persuasion + modCarisma + equipoPersuasion;
    document.getElementById('total_engano').textContent = engano + modCarisma + equipoEngano;
}

// Añadir eventos 'input' para actualizar en vivo
document.getElementById("fuerza").addEventListener("input", actualizarModificadores);
document.getElementById("agilidad").addEventListener("input", actualizarModificadores);
document.getElementById("inteligencia").addEventListener("input", actualizarModificadores);
document.getElementById("carisma").addEventListener("input", actualizarModificadores);

document.getElementById("lucha").addEventListener("input", actualizarHabilidades);
document.getElementById("levantar_peso").addEventListener("input", actualizarHabilidades);
document.getElementById("esquivar").addEventListener("input", actualizarHabilidades);
document.getElementById("sigilo").addEventListener("input", actualizarHabilidades);
document.getElementById("resolver_acertijos").addEventListener("input", actualizarHabilidades);
document.getElementById("percepcion").addEventListener("input", actualizarHabilidades);
document.getElementById("persuasion").addEventListener("input", actualizarHabilidades);
document.getElementById("engano").addEventListener("input", actualizarHabilidades);

document.getElementById("equipo_lucha").addEventListener("input", actualizarHabilidades);
document.getElementById("equipo_levantar_peso").addEventListener("input", actualizarHabilidades);
document.getElementById("equipo_esquivar").addEventListener("input", actualizarHabilidades);
document.getElementById("equipo_sigilo").addEventListener("input", actualizarHabilidades);
document.getElementById("equipo_resolver_acertijos").addEventListener("input", actualizarHabilidades);
document.getElementById("equipo_percepcion").addEventListener("input", actualizarHabilidades);
document.getElementById("equipo_persuasion").addEventListener("input", actualizarHabilidades);
document.getElementById("equipo_engano").addEventListener("input", actualizarHabilidades);

// Inicializar los modificadores y habilidades al cargar la página
actualizarModificadores();
