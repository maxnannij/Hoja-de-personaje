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

function mostrarPoderes() {
    const clase = document.getElementById('clase').value;
    const nivel = parseInt(document.getElementById('nivel').value) || 0;
    const carrousel = document.getElementById('carrousel');

    let poderes = [];

    if (clase === 'arquero') {
        poderes = poderesArquero.filter(poder => poder.nivel <= nivel);
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
