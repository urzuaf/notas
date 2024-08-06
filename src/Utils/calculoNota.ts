import type {Nota} from "../Types/nota";

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

export function calcularCuantoFalta(notas: Nota[]) : Nota[]{




    return []
}