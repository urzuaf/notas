<script lang="ts">
    import type {Ramo} from '../Types/tipos' 
    import {List} from '../Model/ramos_store'

    let ramosCreados : any = $List

function crearRamo(){
    let newRamo : Ramo = {
            notas: [],
            unidades: [],
            nombre: "nuevo ramo",
            notaFinal: 0,
        }
        
        ramosCreados.push(newRamo)
        
        let newIdx = ramosCreados.length - 1
        

        window.location.href = '/ramo/?index=' + newIdx
    }

</script>

<button on:click={crearRamo} class="border rounded shadow-sm w-fit p-2 bg-slate-200 hover:bg-slate-300 cursor-pointer transition-all">
    Crear Ramo
</button>