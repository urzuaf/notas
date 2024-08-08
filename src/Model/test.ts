import type { Ramo, Nota, Unidad } from "../Types/tipos";

let nota1: Nota = {
    porcentaje: 30,
    nota: 5,
    aprobativa: true,
    nombre: 'Nota1'
}
let nota2: Nota = {
    porcentaje: 30,
    nota: 5,
    aprobativa: true,
    nombre: 'Nota2'
}
let nota3: Nota = {
    porcentaje: 30,
    nota: 5,
    aprobativa: true,
    nombre: 'Nota3'
}
let nota4: Nota = {
    porcentaje: 30,
    nota: 5,
    aprobativa: true,
    nombre: 'Nota4'
}
let nota5: Nota = {
    porcentaje: 30,
    nota: 5,
    aprobativa: true,
    nombre: 'Nota5'
}

let unidad1: Unidad = {
    notas: [nota1],
    aprobativa: true,
    nombre: 'Unidad1',
    porcentaje: 50,
    notaUnidad: 0,
    puntaje: 0
}

let unidad2: Unidad = {
    notas: [nota2, nota3, nota4],
    aprobativa: false,
    nombre: 'Unidad2',
    porcentaje: 50,
    notaUnidad: 0,
    puntaje: 0
}

let ramoP : Ramo = {
    unidades: [unidad1, unidad2],
    notas: [nota5],
    nombre: 'Ramo 1',
    notaFinal: 0
}

export default ramoP