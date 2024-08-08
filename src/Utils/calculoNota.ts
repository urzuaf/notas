import type {Nota, Ramo, Unidad} from "../Types/tipos";

export function calculoNota( nota : Nota ) : number {
    
    let notaTotal = nota.nota * nota.porcentaje / 100
    return notaTotal

}

export function SumarNotas( notas : Nota[]) : number{
    let sumAux = 0
    notas.forEach((nota)=>{
        sumAux += calculoNota(nota)
    })
    return sumAux
}

export function CalculoUnidad( unidad: Unidad ): Unidad{

    unidad.notaUnidad = SumarNotas(unidad.notas)
    unidad.notaUnidad = parseFloat(unidad.notaUnidad.toFixed(4))
    unidad.puntaje = unidad.notaUnidad * unidad.porcentaje / 100
    unidad.puntaje = parseFloat(unidad.puntaje.toFixed(4))

    return unidad
}

export function CalculoRamo ( ramo: Ramo): Ramo {
    let aux = 0
    ramo.unidades.forEach((unidad) =>{
        if(unidad.puntaje){
            aux += unidad.puntaje
        }
    })
    aux = parseFloat(aux.toFixed(4))
    ramo.notaFinal = aux
    return ramo
}

export function calcularCuantoFalta(notas: Nota[]) : Nota[]{




    return []
}