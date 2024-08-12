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

<button on:click={crearRamo} class="hover:scale-110 transition-all" title="Crear Ramo">
    <img src="/add.svg" alt="Crear Ramo" width="25">
</button>