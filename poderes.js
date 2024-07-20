const poderesArquero = [
    { nivel: 1, poder: "Domar", descripcion: "Permite domar un animal salvaje. Tira un D20. Si el resultado es mayor a 15, doma al animal. Después del nivel 7, solo necesitas un resultado de 10 o más. A partir de nivel 10, puedes domar criaturas mágicas menores. A partir de nivel 15, puedes domar criaturas mágicas mayores." },
    { nivel: 1, poder: "Tiro Preciso", descripcion: "Asegura que el próximo tiro golpeará al objetivo. Tu próximo tiro no puede fallar. A partir de nivel 10, el tiro también ignora cualquier bonificación de armadura. A partir de nivel 15, añade un daño extra igual a tu modificador de Agilidad." },
    { nivel: 2, poder: "Ojo Crítico", descripcion: "Aumenta las posibilidades de hacer un golpe crítico. Tira un D20. Si el resultado es mayor a 15, el golpe hace el doble de daño. A partir de nivel 10, el golpe crítico hace el triple de daño. A partir de nivel 15, el golpe crítico también causa un efecto de sangrado que hace 1d6 de daño por turno durante 3 turnos." },
    { nivel: 3, poder: "Flecha de Luz", descripcion: "Lanza una flecha imbuida con luz sagrada. Tira un D12 y añade el resultado como daño extra al ataque. A partir de nivel 10, la flecha también ciega al enemigo por 1 turno. A partir de nivel 15, la flecha explota, causando daño a todos los enemigos cercanos (tira un D6 de daño adicional a los enemigos cercanos)." },
    { nivel: 4, poder: "Trampas de Oso", descripcion: "Coloca trampas de oso para inmovilizar y dañar a los enemigos. Tira un D4. El resultado determina el daño y la duración de la inmovilización del enemigo. A partir de nivel 10, la trampa causa daño adicional (tira un D6). A partir de nivel 15, la trampa también envenena al enemigo, haciendo 1d6 de daño por turno durante 3 turnos." },
    { nivel: 5, poder: "Flecha de Trueno", descripcion: "Lanza una flecha que explota al impactar, causando daño adicional y aturdiendo a los enemigos cercanos. Tira un D8. El resultado se suma al daño del ataque y los enemigos cercanos deben tirar un D20. Si no superan un 10, quedan aturdidos por 1 turno. A partir de nivel 10, la explosión causa daño a todos los enemigos en un área mayor (tira un D10). A partir de nivel 15, los enemigos fallidos quedan aturdidos por 2 turnos." },
    { nivel: 6, poder: "Tiro Doble", descripcion: "Permite disparar dos veces en el mismo turno. El próximo ataque puede golpear dos veces. A partir de nivel 10, cada tiro tiene una bonificación de +2 al daño. A partir de nivel 15, puedes realizar un tercer tiro si ambos ataques iniciales golpean." },
    { nivel: 7, poder: "Esconderse en la Luz", descripcion: "Genera una luz cegadora que permite al arquero escapar del combate. La luz ciega a los enemigos, permitiendo huir del combate. A partir de nivel 10, la luz también causa 1d6 de daño a todos los enemigos cercanos. A partir de nivel 15, la luz también cura al arquero por 1d8 puntos de salud." },
    { nivel: 8, poder: "Flecha de Hielo", descripcion: "Dispara una flecha que congela al enemigo. Hace 1d10 de daño y reduce la velocidad del enemigo en un 50% durante 2 turnos. A partir de nivel 10, también causa 1d6 de daño por turno debido a la congelación. A partir de nivel 15, la flecha puede congelar completamente al enemigo por 1 turno si el tiro es crítico." },
    { nivel: 9, poder: "Marca del Cazador", descripcion: "Marca a un enemigo, aumentando el daño que recibe de tus ataques en un 25% durante 3 turnos. A partir de nivel 10, la marca dura 5 turnos. A partir de nivel 15, la marca también reduce la CA del enemigo en 2." },
    { nivel: 10, poder: "Flecha de Fuego", descripcion: "Dispara una flecha en llamas que hace 2d6 de daño y causa 1d6 de daño por fuego por turno durante 3 turnos. A partir de nivel 15, la flecha puede incendiar a enemigos cercanos haciendo 1d4 de daño por fuego por turno durante 2 turnos." },
    { nivel: 11, poder: "Disparo Multidireccional", descripcion: "Dispara hasta 3 flechas en diferentes direcciones, cada una haciendo 1d8 de daño. A partir de nivel 15, cada flecha puede hacer 2d8 de daño." },
    { nivel: 12, poder: "Camuflaje", descripcion: "El arquero se vuelve invisible durante 1 turno, aumentando su capacidad de esquivar en un 50%. A partir de nivel 15, también cura al arquero en 1d6 puntos de salud al volverse visible." },
    { nivel: 13, poder: "Flecha de Sombra", descripcion: "Dispara una flecha imbuida con energía oscura que hace 2d8 de daño y reduce la fuerza del enemigo en 2 durante 3 turnos. A partir de nivel 15, la flecha también causa ceguera durante 1 turno." },
    { nivel: 14, poder: "Tiro Frenético", descripcion: "Dispara una serie de flechas rápidas, haciendo un total de 4d6 de daño. A partir de nivel 15, el daño total aumenta a 5d6." },
    { nivel: 15, poder: "Flecha Explosiva", descripcion: "Dispara una flecha que explota al impactar, causando 3d6 de daño en un área de 10 pies. Los enemigos en el área deben hacer una tirada de salvación de Destreza (DC 15) o recibir el daño completo. A partir de nivel 15, la explosión también causa 1d6 de daño por turno durante 3 turnos." }
];

const poderesCruzado = [
    { nivel: 1, poder: "Embestida", descripcion: "Embiste contra un enemigo. Tira un D6. Si el resultado es 6, el enemigo queda aturdido por 1 turno. A partir de nivel 10, aturde por 2 turnos si es 5 o 6. A partir de nivel 15, añade 1d6 de daño." },
    { nivel: 1, poder: "Piel de Roble", descripcion: "Aumenta el valor de Lucha en +2 por 3 turnos. A partir de nivel 10, el aumento es de +3. A partir de nivel 15, dura 5 turnos." },
    { nivel: 2, poder: "Golpe Devastador", descripcion: "Lanza un golpe con todas tus fuerzas, haciendo D6 de daño. Quedas agotado por 1 turno. A partir de nivel 6, tira un D12 y no causa agotamiento. A partir de nivel 12, el daño se duplica (2xD12)." },
    { nivel: 3, poder: "Grito de Guerra", descripcion: "Aumenta tu Agilidad en +2, pero los enemigos enfocan sus ataques en ti. A partir de nivel 10, también aumenta la Fuerza en +2. A partir de nivel 15, los aliados cercanos también reciben +1 a la Agilidad." },
    { nivel: 4, poder: "Amenaza de Muerte", descripcion: "Haz una tirada de persuasión con un D12. Si es mayor a 10, la Fuerza del enemigo cae en -4. A partir de nivel 10, la tirada se hace con un D20. A partir de nivel 15, la Fuerza del enemigo cae en -6." },
    { nivel: 5, poder: "Sangre Santa", descripcion: "Cura al grupo por la cantidad de vida que has perdido. A partir de nivel 10, cura 1d6 de vida adicional. A partir de nivel 15, cura 1d8 de vida adicional." },
    { nivel: 6, poder: "Arrojar el Arma", descripcion: "Arrojas tu arma, haciendo 10 veces el daño del arma. Tira un D8; si el resultado es 7 o más, el arma se rompe. A partir de nivel 10, el daño es 12 veces el daño del arma. A partir de nivel 15, tira un D12 en lugar de un D8." },
    { nivel: 7, poder: "Sacrificio", descripcion: "Sacrifica X puntos de vida; esa cantidad se suma a Fuerza y Agilidad por el resto del combate. A partir de nivel 15, otorga resistencia al daño (reduce el daño recibido en 25%)." },
    { nivel: 8, poder: "Llamado del Honor", descripcion: "Aumenta el valor de Lucha de todos los aliados cercanos en +2 por 3 turnos. A partir de nivel 10, añade también +2 a la CA. A partir de nivel 15, dura 5 turnos." },
    { nivel: 9, poder: "Frenesí", descripcion: "Entra en un estado de frenesí, aumentando el daño de todos tus ataques en un 50% durante 2 turnos. A partir de nivel 10, dura 3 turnos. A partir de nivel 15, también aumenta tu velocidad en un 25%." },
    { nivel: 10, poder: "Carga Devastadora", descripcion: "Realiza una carga poderosa hacia el enemigo, haciendo 3d8 de daño y aturdiendo al objetivo por 1 turno. A partir de nivel 15, añade un empuje de 10 pies al enemigo." },
    { nivel: 11, poder: "Corazón de Hierro", descripcion: "Aumenta tu PS máximo en 50 durante 3 turnos. A partir de nivel 15, también regenera 10 PS por turno." },
    { nivel: 12, poder: "Grito de Venganza", descripcion: "Aumenta tu daño en un 25% por cada aliado caído en combate durante 3 turnos. A partir de nivel 15, también aumenta tu CA en 2 por cada aliado caído." },
    { nivel: 13, poder: "Muro de Acero", descripcion: "Te conviertes en una fortaleza impenetrable, reduciendo todo el daño recibido en un 50% durante 2 turnos. A partir de nivel 15, también reflejas un 25% del daño bloqueado de vuelta al atacante." },
    { nivel: 14, poder: "Furia Incontrolable", descripcion: "Aumenta tu Fuerza en 10 y reduces tu CA en 5 durante 2 turnos. A partir de nivel 15, también aumentas tu Agilidad en 5." },
    { nivel: 15, poder: "Castigo Divino", descripcion: "Lanza un golpe final que hace 4d10 de daño. Si el enemigo es derrotado con este golpe, recuperas 50 PS. A partir de nivel 15, el golpe también tiene una probabilidad del 50% de aturdir a todos los enemigos cercanos durante 1 turno." }
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
    { nivel: 8, poder: "Martillo de la Justicia", descripcion: "Lanza un martillo sagrado que hace 2d8 de daño y aturde al enemigo por 1 turno. A partir de nivel 10, el daño aumenta a 3d8. A partir de nivel 15, el martillo también inflige ceguera durante 1 turno." },
    { nivel: 9, poder: "Guardia Divina", descripcion: "Aumenta tu CA en 5 durante 2 turnos. A partir de nivel 10, también reduce el daño mágico recibido en un 25%. A partir de nivel 15, la duración aumenta a 4 turnos." },
    { nivel: 10, poder: "Círculo de Protección", descripcion: "Crea un círculo sagrado que protege a todos los aliados dentro de él, reduciendo el daño recibido en un 50% durante 3 turnos. A partir de nivel 15, también cura 1d8 PS por turno." },
    { nivel: 11, poder: "Veredicto Final", descripcion: "Hace un juicio sagrado sobre un enemigo, reduciendo su CA en 3 y su Fuerza en 2 durante 2 turnos. A partir de nivel 15, también reduce la Agilidad del enemigo en 2." },
    { nivel: 12, poder: "Ira Divina", descripcion: "Aumenta tu Fuerza en 10 y añade 2d6 de daño sagrado a todos tus ataques durante 3 turnos. A partir de nivel 15, también aumenta tu velocidad en un 25%." },
    { nivel: 13, poder: "Escudo de la Fe", descripcion: "Aumenta tu CA en 10 durante 1 turno. A partir de nivel 15, también refleja el 25% del daño bloqueado de vuelta al atacante." },
    { nivel: 14, poder: "Espada Sagrada", descripcion: "Imbuye tu arma con energía divina, haciendo 3d10 de daño adicional durante 2 turnos. A partir de nivel 15, también tiene una probabilidad del 50% de cegar al enemigo por 1 turno." },
    { nivel: 15, poder: "Resplandor Divino", descripcion: "Libera una ola de energía sagrada que hace 4d10 de daño a todos los enemigos en un radio de 20 pies. Los enemigos deben hacer una tirada de salvación de Constitución (DC 18) o quedar cegados por 1 turno. A partir de nivel 15, la ola también cura a todos los aliados en el radio por 2d8 PS." }
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
    { nivel: 8, poder: "Golpe de la Justicia", descripcion: "Un ataque que imbuye tu arma con energía sagrada. Hace 2d8 de daño adicional. A partir de nivel 10, hace 3d8 de daño adicional. A partir de nivel 15, también reduce la CA del enemigo en 2." },
    { nivel: 9, poder: "Reflejos Divinos", descripcion: "Aumenta tu capacidad de esquivar en +4 durante 3 turnos. A partir de nivel 10, también aumenta tu velocidad en un 20%. A partir de nivel 15, la duración aumenta a 5 turnos." },
    { nivel: 10, poder: "Purificación", descripcion: "Limpia todos los debuffs de un aliado. A partir de nivel 15, también cura 2d8 de PS." },
    { nivel: 11, poder: "Cuchilla Relámpago", descripcion: "Lanza una cuchilla cargada con energía eléctrica que hace 3d6 de daño y aturde al enemigo por 1 turno. A partir de nivel 15, el daño aumenta a 4d6." },
    { nivel: 12, poder: "Velocidad Sobrehumana", descripcion: "Aumenta tu velocidad en un 50% durante 2 turnos. A partir de nivel 15, también aumenta tu CA en 2." },
    { nivel: 13, poder: "Protección Celestial", descripcion: "Crea una barrera sagrada que reduce todo el daño recibido en un 25% durante 3 turnos. A partir de nivel 15, también refleja un 10% del daño bloqueado al atacante." },
    { nivel: 14, poder: "Daga de la Luz", descripcion: "Imbuye tu arma con luz sagrada, haciendo 2d10 de daño adicional durante 2 turnos. A partir de nivel 15, también tiene una probabilidad del 50% de cegar al enemigo por 1 turno." },
    { nivel: 15, poder: "Vendaval Divino", descripcion: "Lanza una serie de ataques rápidos imbuido con energía divina, haciendo 5d8 de daño total. Los enemigos deben hacer una tirada de salvación de Destreza (DC 18) o quedar aturdidos por 1 turno. A partir de nivel 15, los ataques también reducen la fuerza del enemigo en 2 durante 2 turnos." }
];

const poderesSacerdote = [
    { nivel: 1, poder: "Curación Menor", descripcion: "Cura el 20% de la vida faltante de un aliado. A partir de nivel 10, cura el 30%. A partir de nivel 15, cura el 40%." },
    { nivel: 1, poder: "Palabra Sagrada", descripcion: "Bendice al grupo, mejorando la LUCHA en +3 por el resto del combate. A partir de nivel 10, mejora la AGILIDAD en +2." },
    { nivel: 2, poder: "Luz Renovadora", descripcion: "Cura el 10% de la vida total de todo el grupo. A partir de nivel 10, cura el 15%. A partir de nivel 15, cura el 20%." },
    { nivel: 3, poder: "Protección Divina", descripcion: "Protege a todo el grupo del próximo ataque enemigo. A partir de nivel 10, refleja el 25% del daño bloqueado. A partir de nivel 15, refleja el 50%." },
    { nivel: 4, poder: "Santificación", descripcion: "Dios mismo te deja usar su luz, si se usa sobre un aliado cura D6, si se usa contra un enemigo hace D6 de daño, si la naturaleza del enemigo es diabólica el daño es doble. A partir de nivel 10 se utiliza un D12. A partir de nivel 15 tira milagro si es +15 en enemigo se rinde." },
    { nivel: 5, poder: "Renovación", descripcion: "Limpia al equipo de todos los debuffs. A partir de nivel 10, otorga inmunidad a nuevos debuffs por 1 turno. A partir de nivel 15, la inmunidad dura 2 turnos." },
    { nivel: 6, poder: "Resurrección", descripcion: "Devuelve la vida a un aliado caído con el 50% de su vida total. A partir de nivel 10, con el 75%. A partir de nivel 15, con el 100%." },
    { nivel: 7, poder: "Luz Divina", descripcion: "Tira un D20. Si es 10 o más, cura completamente a todo el grupo. A partir de nivel 10, cura completamente y elimina todos los debuffs. A partir de nivel 15, otorga +2 a todos los atributos durante 3 turnos." },
    { nivel: 8, poder: "Llama Sagrada", descripcion: "Lanza una llama sagrada que hace 2d6 de daño al enemigo. Si el enemigo es malvado, el daño aumenta a 3d6. A partir de nivel 10, el daño aumenta a 3d6 y 4d6 respectivamente. A partir de nivel 15, también quema al enemigo haciendo 1d6 de daño por turno durante 2 turnos." },
    { nivel: 9, poder: "Escudo de Fe", descripcion: "Aumenta la CA de un aliado en 5 durante 3 turnos. A partir de nivel 10, también reduce el daño mágico recibido en un 25%. A partir de nivel 15, la duración aumenta a 5 turnos." },
    { nivel: 10, poder: "Martillo Divino", descripcion: "Invoca un martillo de energía divina que hace 3d8 de daño al enemigo. Si el enemigo es malvado, también queda aturdido por 1 turno. A partir de nivel 15, el daño aumenta a 4d8 y la probabilidad de aturdir aumenta a 50%." },
    { nivel: 11, poder: "Purga", descripcion: "Elimina todos los efectos positivos del enemigo. A partir de nivel 10, también reduce la CA del enemigo en 2 durante 2 turnos. A partir de nivel 15, también reduce la Fuerza del enemigo en 2." },
    { nivel: 12, poder: "Círculo de Curación", descripcion: "Cura 2d8 de PS a todos los aliados en un radio de 10 pies. A partir de nivel 10, cura 3d8. A partir de nivel 15, cura 4d8." },
    { nivel: 13, poder: "Juicio de la Luz", descripcion: "Lanza un rayo de luz sagrada que hace 3d10 de daño al enemigo. Si el enemigo es malvado, el daño aumenta a 4d10. A partir de nivel 15, el rayo también reduce la CA del enemigo en 2 durante 2 turnos." },
    { nivel: 14, poder: "Barrera de Luz", descripcion: "Crea una barrera de luz que reduce todo el daño recibido en un 50% durante 3 turnos. A partir de nivel 10, la duración aumenta a 4 turnos. A partir de nivel 15, también refleja un 25% del daño bloqueado al atacante." },
    { nivel: 15, poder: "Luz Purificadora", descripcion: "Libera una onda de energía sagrada que hace 4d10 de daño a todos los enemigos en un radio de 20 pies y cura 2d8 de PS a todos los aliados en el radio. Los enemigos deben hacer una tirada de salvación de Constitución (DC 18) o quedar cegados por 1 turno. A partir de nivel 15, la onda también elimina todos los debuffs de los aliados." }
];

const poderesSalmista = [
    { nivel: 1, poder: "Canto Inspirador", descripcion: "Añade +2 a la Lucha de todo el grupo por 3 turnos. A partir de nivel 10, añade +1 a la Agilidad. A partir de nivel 15, dura 5 turnos." },
    { nivel: 1, poder: "Melodía Curativa", descripcion: "Cura el 15% de la vida total de un aliado. A partir de nivel 10, cura el 20%. A partir de nivel 15, cura el 25%." },
    { nivel: 2, poder: "Ritmo de Protección", descripcion: "Añade +2 a la AGI del grupo por 3 turnos. A partir de nivel 10, añade +3 a la AGI. A partir de nivel 15, dura 5 turnos." },
    { nivel: 3, poder: "Armonía Energizante", descripcion: "Restaura 10% de la energía de todos los miembros del grupo. A partir de nivel 10, restaura 15%. A partir de nivel 15, restaura 20%." },
    { nivel: 4, poder: "Sonidos Chirriantes", descripcion: "Diriges una oleada de tus peores notas hacia el enemigo haciendo D6 de daño, no se puede esquivar. A partir de nivel 10 usa un D20 y a partir de nivel 15 puede aturdir con un +15." },
    { nivel: 5, poder: "Canción de Esperanza", descripcion: "Elimina todos los debuffs del grupo. A partir de nivel 10, otorga inmunidad a nuevos debuffs por 1 turno. A partir de nivel 15, la inmunidad dura 2 turnos." },
    { nivel: 6, poder: "Solo Heroico", descripcion: "El próximo ataque de cada miembro del grupo hace el doble de daño. A partir de nivel 10, hace el triple de daño. A partir de nivel 15, el ataque ignora cualquier defensa del enemigo." },
    { nivel: 7, poder: "Resonancia Divina", descripcion: "Cura completamente a todo el grupo. A partir de nivel 10, elimina todos los debuffs. A partir de nivel 15, otorga +2 a todos los atributos durante 3 turnos." },
    { nivel: 8, poder: "Estruendo de la Batalla", descripcion: "Un poderoso acorde que hace 2d8 de daño a todos los enemigos en un radio de 10 pies. A partir de nivel 10, el daño aumenta a 3d8. A partir de nivel 15, también reduce la AGI de los enemigos en 2 durante 2 turnos." },
    { nivel: 9, poder: "Himno de Fortaleza", descripcion: "Aumenta la CA de todo el grupo en 2 durante 3 turnos. A partir de nivel 10, también aumenta la resistencia mágica en un 25%. A partir de nivel 15, la duración aumenta a 5 turnos." },
    { nivel: 10, poder: "Melodía de la Mente", descripcion: "Restaura 2d6 de energía a todos los aliados en un radio de 10 pies. A partir de nivel 15, la restauración aumenta a 3d6." },
    { nivel: 11, poder: "Canto de Venganza", descripcion: "Añade 2d6 de daño adicional a los ataques de todos los aliados durante 2 turnos. A partir de nivel 15, también aumenta la velocidad de los aliados en un 25%." },
    { nivel: 12, poder: "Arpegio Curativo", descripcion: "Cura 3d8 de PS a todos los aliados en un radio de 15 pies. A partir de nivel 15, la curación aumenta a 4d8." },
    { nivel: 13, poder: "Sinfonía de Destrucción", descripcion: "Hace 4d6 de daño a todos los enemigos en un radio de 20 pies. A partir de nivel 15, el daño aumenta a 5d6 y también reduce la CA de los enemigos en 2 durante 2 turnos." },
    { nivel: 14, poder: "Canto de la Pureza", descripcion: "Elimina todos los efectos negativos de un aliado y lo cura en 2d8 PS. A partir de nivel 15, también otorga inmunidad a efectos negativos durante 1 turno." },
    { nivel: 15, poder: "Oración de la Victoria", descripcion: "Aumenta todos los atributos del grupo en 3 durante 3 turnos. A partir de nivel 15, también otorga una curación de 1d10 PS por turno." }
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


