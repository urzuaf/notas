<script lang="ts">
    import { onMount } from "svelte";
    import type {Ramo} from "../Types/tipos";
    import RamoC from "./Ramo.svelte";
    import Templates from "../Model/templates";
    import {List} from '../Model/ramos_store'

    let ramosCreados = $List

    let ramo: Ramo = {
        unidades: [],
        notas: [], 
        nombre: "Nuevo Ramo",
        notaFinal: 0
    }

    onMount(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        let aux : number = 0

        if(urlParams.has('template')){
            if(urlParams.get("template")!=null){
                // Con el || 0 aseguramos que parseInt siempre reciba un string y evitamos el error de ts
                aux = parseInt(urlParams.get("template")|| "0")
            }
            ramo = Templates[aux]
            // Agregamos el return para evitar que alguien manualmente ponga template e index como query
            return
        }
        

        else if(urlParams.has('index')){
            if(urlParams.get("index")!=null){
                // Con el || 0 aseguramos que parseInt siempre reciba un string y evitamos el error de ts
                aux = parseInt(urlParams.get("index")|| "0")
            }
            if(ramosCreados[aux]){
                ramo = ramosCreados[aux]
            }
            return
        }

    })

</script>

<div>
    <RamoC ramo={ramo} />
</div>