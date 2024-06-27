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

    document.getElementById('total_lucha').textContent = lucha + modFuerza;
    document.getElementById('total_levantar_peso').textContent = levantarPeso + modFuerza;
    document.getElementById('total_esquivar').textContent = esquivar + modAgilidad;
    document.getElementById('total_sigilo').textContent = sigilo + modAgilidad;
    document.getElementById('total_resolver_acertijos').textContent = resolverAcertijos + modInteligencia;
    document.getElementById('total_percepcion').textContent = percepcion + modInteligencia;
    document.getElementById('total_persuasion').textContent = persuasion + modCarisma;
    document.getElementById('total_engano').textContent = engano + modCarisma;
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

// Añadir eventos 'input' para actualizar en vivo
document.getElementById('fuerza').addEventListener('input', actualizarModificadores);
document.getElementById('agilidad').addEventListener('input', actualizarModificadores);
document.getElementById('inteligencia').addEventListener('input', actualizarModificadores);
document.getElementById('carisma').addEventListener('input', actualizarModificadores);

document.getElementById('lucha').addEventListener('input', actualizarHabilidades);
document.getElementById('levantar_peso').addEventListener('input', actualizarHabilidades);
document.getElementById('esquivar').addEventListener('input', actualizarHabilidades);
document.getElementById('sigilo').addEventListener('input', actualizarHabilidades);
document.getElementById('resolver_acertijos').addEventListener('input', actualizarHabilidades);
document.getElementById('percepcion').addEventListener('input', actualizarHabilidades);
document.getElementById('persuasion').addEventListener('input', actualizarHabilidades);
document.getElementById('engano').addEventListener('input', actualizarHabilidades);

// Inicializar los modificadores y habilidades al cargar la página
actualizarModificadores();

const poderesArquero = [
    { nivel: 1, poder: "Domar", descripcion: "Permite domar un animal salvaje. Tira un D20. Si el resultado es mayor a 15, doma al animal. Después del nivel 7, solo necesitas un resultado de 10 o más. A partir de nivel 10, puedes domar criaturas mágicas menores. A partir de nivel 15, puedes domar criaturas mágicas mayores." },
    { nivel: 1, poder: "Tiro Preciso", descripcion: "Asegura que el próximo tiro golpeará al objetivo. Tu próximo tiro no puede fallar. A partir de nivel 10, el tiro también ignora cualquier bonificación de armadura. A partir de nivel 15, añade un daño extra igual a tu modificador de Agilidad." },
    { nivel: 2, poder: "Ojo Crítico", descripcion: "Aumenta las posibilidades de hacer un golpe crítico. Tira un D20. Si el resultado es mayor a 15, el golpe hace el doble de daño. A partir de nivel 10, el golpe crítico hace el triple de daño. A partir de nivel 15, el golpe crítico también causa un efecto de sangrado que hace 1d6 de daño por turno durante 3 turnos." },
    { nivel: 3, poder: "Flecha de Luz", descripcion: "Lanza una flecha imbuida con luz sagrada. Tira un D12 y añade el resultado como daño extra al ataque. A partir de nivel 10, la flecha también ciega al enemigo por 1 turno. A partir de nivel 15, la flecha explota, causando daño a todos los enemigos cercanos (tira un D6 de daño adicional a los enemigos cercanos)." },
    { nivel: 4, poder: "Trampas de Oso", descripcion: "Coloca trampas de oso para inmovilizar y dañar a los enemigos. Tira un D4. El resultado determina el daño y la duración de la inmovilización del enemigo. A partir de nivel 10, la trampa causa daño adicional (tira un D6). A partir de nivel 15, la trampa también envenena al enemigo, haciendo 1d6 de daño por turno durante 3 turnos." },
    { nivel: 5, poder: "Flecha de Trueno", descripcion: "Lanza una flecha que explota al impactar, causando daño adicional y aturdiendo a los enemigos cercanos. Tira un D8. El resultado se suma al daño del ataque y los enemigos cercanos deben tirar un D20. Si no superan un 10, quedan aturdidos por 1 turno. A partir de nivel 10, la explosión causa daño a todos los enemigos en un área mayor (tira un D10). A partir de nivel 15, los enemigos fallidos quedan aturdidos por 2 turnos." },
    { nivel: 6, poder: "Tiro Doble", descripcion: "Permite disparar dos veces en el mismo turno. El próximo ataque puede golpear dos veces. A partir de nivel 10, cada tiro tiene una bonificación de +2 al daño. A partir de nivel 15, puedes realizar un tercer tiro si ambos ataques iniciales golpean." },
    { nivel: 7, poder: "Esconderse en la Luz", descripcion: "Genera una luz cegadora que permite al arquero escapar del combate. La luz ciega a los enemigos, permitiendo huir del combate. A partir de nivel 10, la luz también causa 1d6 de daño a todos los enemigos cercanos. A partir de nivel 15, la luz también cura al arquero por 1d8 puntos de salud." },
];

const poderesCruzado = [
    { nivel: 1, poder: "Embestida", descripcion: "Embiste contra un enemigo. Tira un D6. Si el resultado es 6, el enemigo queda aturdido por 1 turno. A partir de nivel 10, aturde por 2 turnos si es 5 o 6. A partir de nivel 15, añade 1d6 de daño." },
    { nivel: 1, poder: "Piel de Roble", descripcion: "Aumenta el valor de Lucha en +2 por 3 turnos. A partir de nivel 10, el aumento es de +3. A partir de nivel 15, dura 5 turnos." },
    { nivel: 2, poder: "Golpe Devastador", descripcion: "Lanza un golpe con todas tus fuerzas. Tira un D6. Quedas agotado por 1 turno. A partir de nivel 6, tira un D12 y no causa agotamiento. A partir de nivel 12, el daño se duplica (2xD12)." },
    { nivel: 3, poder: "Grito de Guerra", descripcion: "Aumenta tu Agilidad en +2, pero los enemigos enfocan sus ataques en ti. A partir de nivel 10, también aumenta la Fuerza en +2. A partir de nivel 15, los aliados cercanos también reciben +1 a la Agilidad." },
    { nivel: 4, poder: "Amenaza de Muerte", descripcion: "Haz una tirada de persuasión con un D12. Si es mayor a 10, la Fuerza del enemigo cae en -4. A partir de nivel 10, la tirada se hace con un D20. A partir de nivel 15, la Fuerza del enemigo cae en -6." },
    { nivel: 5, poder: "Sangre Santa", descripcion: "Cura al grupo por la cantidad de vida que has perdido. A partir de nivel 10, cura 1d6 de vida adicional. A partir de nivel 15, cura 1d8 de vida adicional." },
    { nivel: 6, poder: "Arrojar el Arma", descripcion: "Arrojas tu arma, haciendo 10 veces el daño del arma. Tira un D8; si el resultado es 7 o más, el arma se rompe. A partir de nivel 10, el daño es 12 veces el daño del arma. A partir de nivel 15, tira un D12 en lugar de un D8." },
    { nivel: 7, poder: "Sacrificio", descripcion: "Sacrifica X puntos de vida; esa cantidad se suma a Fuerza y Agilidad por el resto del combate. A partir de nivel 15, otorga resistencia al daño (reduce el daño recibido en 25%)." },
];
const poderesPaladin = [
    { nivel: 1, poder: "Golpe Celestial", descripcion: "Añade a tu ataque luz divina haciendo +3 de daño, este daño golpea aunque el ataque falle. A partir de nivel 10, añade +5 de daño. A partir de nivel 15, añade +7 de daño y ciega al enemigo por 1 turno si el ataque golpea." },
    { nivel: 1, poder: "Luz Protectora", descripcion: "Cubre de luz a un aliado añadiendo +2 de evasión por 3 turnos. A partir de nivel 10, añade +3 de evasión. A partir de nivel 15, dura 5 turnos." },
    { nivel: 2, poder: "Aura de Protección", descripcion: "Cubre al grupo dándole +2 de evasión por 3 turnos. A partir de nivel 10, añade +3 de evasión. A partir de nivel 15, dura 5 turnos." },
    { nivel: 3, poder: "Sanación Divina", descripcion: "Cura un 10% de tu vida. A partir de nivel 10, cura un 15%. A partir de nivel 15, cura un 20%." },
    { nivel: 4, poder: "Juicio Divino", descripcion: "Reduce el próximo ataque del enemigo un 50%. A partir de nivel 10, también reduce la precisión del próximo ataque del enemigo en un 50%. A partir de nivel 15, el próximo ataque del enemigo se reduce en un 75%." },
    { nivel: 5, poder: "Escudo Sagrado", descripcion: "Te cubre del próximo ataque del enemigo. A partir de nivel 10, también refleja el 50% del daño bloqueado al atacante. A partir de nivel 15, refleja el 100% del daño bloqueado al atacante." },
    { nivel: 6, poder: "Salto de Fe", descripcion: "Con un gran salto caes sobre los enemigos haciendo D6 de daño. A partir de nivel 10, tira un D8. A partir de nivel 15, tira un D10." },
    { nivel: 7, poder: "Sangre Sagrada", descripcion: "Al morir, vuelve a la vida con 50% de la vida total. A partir de nivel 10, vuelve con el 75% de la vida. A partir de nivel 15, vuelve con el 100% y cura a los aliados cercanos por 25% de su vida." },
];
const poderesPicaro = [
    { nivel: 1, poder: "Ataque Rápido", descripcion: "Realiza varios ataques rápidos. Ataca D4 veces, cada ataque hace D4 de daño. A partir de nivel 10, ataca D6 veces con D6 de daño. A partir de nivel 15, ataca D8 veces con D8 de daño." },
    { nivel: 1, poder: "Sigiloso", descripcion: "Aumenta tu capacidad de esquivar. Aumenta Esquivar en D4 por 3 turnos. A partir de nivel 10, aumenta en D6. A partir de nivel 15, dura 5 turnos." },
    { nivel: 2, poder: "Adelantado", descripcion: "Roba la recompensa del enemigo. Tira un D8. Si es 7 o más, roba el oro del enemigo. A partir de nivel 10, éxito con 6-8. A partir de nivel 15, roba un objeto además del oro." },
    { nivel: 3, poder: "Abrojos", descripcion: "Lanza pinchos al piso, causando daño continuo. Hace D4 de daño por D4 turnos. A partir de nivel 10, cada pincho hace D6 de daño. A partir de nivel 15, también reduce la velocidad del enemigo." },
    { nivel: 4, poder: "Daga de Doble Filo", descripcion: "Ataque con daga inflige daño etéreo. Hace D12 de daño etéreo que no se puede esquivar. A partir de nivel 10, hace 2D12 de daño. A partir de nivel 15, inflige sangrado, causando 1D6 de daño por turno durante 3 turnos." },
    { nivel: 5, poder: "Escape Rápido", descripcion: "Permite escapar del combate instantáneamente. A partir de nivel 10, cura 1D8 de salud al escapar. A partir de nivel 15, puede escapar con un aliado." },
    { nivel: 6, poder: "Ataque Furtivo", descripcion: "Ataque devastador desde las sombras. El próximo ataque hace daño x5. A partir de nivel 10, hace daño x6. A partir de nivel 15, el ataque ignora cualquier defensa del enemigo." },
    { nivel: 7, poder: "Desarme", descripcion: "Desarma al enemigo, reduciendo su capacidad de ataque. Tira un D8. Si es 7 o más, reduce el ataque del enemigo en -5 por 3 turnos. A partir de nivel 10, éxito con 6-8 y reducción de -7. A partir de nivel 15, dura 5 turnos." },
];

const poderesSacerdote = [
    { nivel: 1, poder: "Curación Menor", descripcion: "Cura el 20% de la vida faltante de un aliado. A partir de nivel 10, cura el 30%. A partir de nivel 15, cura el 40%." },
    { nivel: 1, poder: "Palabra Sagrada", descripcion: "Bendice al grupo, mejorando la LUCHA en +3 por el resto del combate. A partir de nivel 10, mejora la AGILIDAD en +2." },
    { nivel: 2, poder: "Luz Renovadora", descripcion: "Cura el 10% de la vida total de todo el grupo. A partir de nivel 10, cura el 15%. A partir de nivel 15, cura el 20%." },
    { nivel: 3, poder: "Protección Divina", descripcion: "Protege a todo el grupo del próximo ataque enemigo. A partir de nivel 10, refleja el 25% del daño bloqueado. A partir de nivel 15, refleja el 50%." },
    { nivel: 4, poder: "Purificación", descripcion: "Tira un D20. Si es 15 o más, purifica el área o un enemigo. A partir de nivel 10, éxito con 12 o más. A partir de nivel 15, éxito con 10 o más y elimina todos los debuffs." },
    { nivel: 5, poder: "Renovación", descripcion: "Limpia al equipo de todos los debuffs. A partir de nivel 10, otorga inmunidad a nuevos debuffs por 1 turno. A partir de nivel 15, la inmunidad dura 2 turnos." },
    { nivel: 6, poder: "Resurrección", descripcion: "Devuelve la vida a un aliado caído con el 50% de su vida total. A partir de nivel 10, con el 75%. A partir de nivel 15, con el 100%." },
    { nivel: 7, poder: "Luz Divina", descripcion: "Tira un D20. Si es 10 o más, cura completamente a todo el grupo. A partir de nivel 10, cura completamente y elimina todos los debuffs. A partir de nivel 15, otorga +2 a todos los atributos durante 3 turnos." },
];const poderesSalmista = [
    { nivel: 1, poder: "Canto Inspirador", descripcion: "Añade +2 a la Lucha de todo el grupo por 3 turnos. A partir de nivel 10, añade +1 a la Agilidad. A partir de nivel 15, dura 5 turnos." },
    { nivel: 1, poder: "Melodía Curativa", descripcion: "Cura el 15% de la vida total de un aliado. A partir de nivel 10, cura el 20%. A partir de nivel 15, cura el 25%." },
    { nivel: 2, poder: "Ritmo de Protección", descripcion: "Añade +2 a la AGI del grupo por 3 turnos. A partir de nivel 10, añade +3 a la AGI. A partir de nivel 15, dura 5 turnos." },
    { nivel: 3, poder: "Armonía Energizante", descripcion: "Restaura 10% de la energía de todos los miembros del grupo. A partir de nivel 10, restaura 15%. A partir de nivel 15, restaura 20%." },
    { nivel: 4, poder: "Himno del Valor", descripcion: "Aumenta la Fuerza en +3 por 3 turnos. A partir de nivel 10, también aumenta la AGI en +2. A partir de nivel 15, dura 5 turnos." },
    { nivel: 5, poder: "Canción de Esperanza", descripcion: "Elimina todos los debuffs del grupo. A partir de nivel 10, otorga inmunidad a nuevos debuffs por 1 turno. A partir de nivel 15, la inmunidad dura 2 turnos." },
    { nivel: 6, poder: "Solo Heroico", descripcion: "El próximo ataque de cada miembro del grupo hace el doble de daño. A partir de nivel 10, hace el triple de daño. A partir de nivel 15, el ataque ignora cualquier defensa del enemigo." },
    { nivel: 7, poder: "Resonancia Divina", descripcion: "Cura completamente a todo el grupo. A partir de nivel 10, elimina todos los debuffs. A partir de nivel 15, otorga +2 a todos los atributos durante 3 turnos." },
];


document.getElementById('clase').addEventListener('change', mostrarPoderes);
document.getElementById('nivel').addEventListener('input', mostrarPoderes);

function mostrarPoderes() {
    const clase = document.getElementById('clase').value;
    const nivel = parseInt(document.getElementById('nivel').value) || 0;
    const carrousel = document.getElementById('carrousel');

    let poderes = [];

    if (clase === 'arquero') {
        poderes = poderesArquero.filter(poder => poder.nivel <= nivel);
    } else if (clase === 'cruzado') {
        poderes = poderesCruzado.filter(poder => poder.nivel <= nivel);
    }else if (clase === 'paladin') {
        poderes = poderesPaladin.filter(poder => poder.nivel <= nivel);
    }else if (clase === 'picaro') {
        poderes = poderesPicaro.filter(poder => poder.nivel <= nivel);
    }else if (clase === 'sacerdote') {
        poderes = poderesSacerdote.filter(poder => poder.nivel <= nivel);
    }else if (clase === 'salmista') {
        poderes = poderesSalmista.filter(poder => poder.nivel <= nivel);
    }

    carrousel.innerHTML = poderes.map(p => `
        <div class="carrousel-item">
            <h3>${p.poder} (Nivel ${p.nivel})</h3>
            <p>${p.descripcion}</p>
        </div>
    `).join('');
}

// Inicializar los modificadores y habilidades al cargar la página
actualizarModificadores();

