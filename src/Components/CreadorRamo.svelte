<script lang="ts">
    import ramosCreados from '../Model/ramoscreados'
    import type {Ramo} from '../Types/tipos';
    import { asignarId } from '../Utils/calculoNota';

    
    function crearRamo(){
        let newRamo : Ramo = {
            id: asignarId(ramosCreados),
            notas: [],
            unidades: [],
            nombre: "nuevo ramo",
            notaFinal: 0,
            origin: "manual"
        }

        ramosCreados.push(newRamo)
        
        let newIdx = ramosCreados.length - 1
        

        window.location.href = '/ramo/?index=' + newIdx
    }

</script>


<button on:click={crearRamo}>
      Crear Ramo
</button>