import type { Ramo, Unidad, Nota } from "../Types/tipos";

const Templates: Ramo[] = [
    {
        nombre: "Ingeniera economica y evaluación de proyectos",
        notaFinal: 0,
        notas: [],
        unidades: [
            {
                nombre: "Unidad I",
                aprobativa: false, notas: [
                    { nombre: "Control lectura 1", aprobativa: false, nota: 0, porcentaje: 14, puntaje: 0 },
                    { nombre: "Control lectura 2", aprobativa: false, nota: 0, porcentaje: 14, puntaje: 0 },
                    { nombre: "Prueba Final", aprobativa: false, nota: 0, porcentaje: 21, puntaje: 0 },

                ], porcentaje: 100, notaUnidad: 0, puntaje: 0
            },
            {
                nombre: "Unidad II",
                aprobativa: false, notas: [
                    { nombre: "Taller evaluado", aprobativa: false, nota: 0, porcentaje: 35, puntaje: 0 },

                ], porcentaje: 100, notaUnidad: 0, puntaje: 0
            },
            {
                nombre: "Unidad III",
                aprobativa: true, notas: [
                    { nombre: "Proyecto Grupal", aprobativa: false, nota: 0, porcentaje: 30, puntaje: 0 },

                ], porcentaje: 100, notaUnidad: 0, puntaje: 0
            }
        ]
    },
    {
        nombre: "Inteligencia Artificial",
        notaFinal: 0,
        notas: [],
        unidades: [
            {
                nombre: "Unidad I",
                aprobativa: false, notas: [
                    { nombre: "Prueba", aprobativa: false, nota: 0, porcentaje: 60, puntaje: 0 },
                    { nombre: "Laboratorios", aprobativa: false, nota: 0, porcentaje: 40, puntaje: 0 },

                ], porcentaje: 40, notaUnidad: 0, puntaje: 0
            },
            {
                nombre: "Unidad II",
                aprobativa: false, notas: [
                    { nombre: "Prueba", aprobativa: false, nota: 0, porcentaje: 60, puntaje: 0 },
                    { nombre: "Laboratorios", aprobativa: false, nota: 0, porcentaje: 40, puntaje: 0 },

                ], porcentaje: 40, notaUnidad: 0, puntaje: 0
            },
            
            {
                nombre: "Unidad III",
                aprobativa: false, notas: [
                    { nombre: "Proyecto", aprobativa: false, nota: 0, porcentaje: 100, puntaje: 0 },

                ], porcentaje: 20, notaUnidad: 0, puntaje: 0
            }
        ]
    }
]

export default Templates 
