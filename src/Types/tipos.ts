export type Nota = {
    porcentaje : number,
    nota: number,
    aprobativa: boolean,
    nombre?: string
    puntaje?:number
}

export type Unidad = {
    notas: Nota[]
    aprobativa: boolean,
    porcentaje: number,
    nombre?: string,
    puntaje?: number,
    notaUnidad?: number

}

export type Ramo = {
    unidades: Unidad[],
    notas: Nota[]
    nombre?: string
    notaFinal?:number
}