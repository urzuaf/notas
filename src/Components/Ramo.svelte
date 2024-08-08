<script lang="ts">
    import type { Ramo, Unidad, Nota } from "../Types/tipos";
    import ramoP from '../Model/test'
    import Unidades from "./Unidades.svelte";
  import Notas from "./Notas.svelte";
  import { CalculoRamo } from "../Utils/calculoNota";

  let ramo = ramoP

  function addUnidad(){
    let nuevaNota: Nota = {
      nota: 0,
      aprobativa: false,
      nombre: "nuevaNota",
      porcentaje: 0,
      puntaje: 0,
    };

    let nuevaUnidad: Unidad = {
        aprobativa: false,
        notas: [nuevaNota],
        porcentaje: 0,
        nombre: "nuevaUnidad", 
        notaUnidad: 0,
        puntaje: 0

    }
    ramo.unidades = [...ramo.unidades, nuevaUnidad]
  }

  function updateRamo(){
        let auxRamo : Ramo = ramo
        auxRamo = CalculoRamo(ramo)
        ramo = auxRamo
  }


</script>

<div class="">
    <div class="flex justify-between px-2 w-1/2 border">
        <h1 class="text-2xl font-bold p-2">{ramo.nombre}</h1>
        <button class="bg-blue-700 font-medium rounded p-1 px-2 text-white" on:click={addUnidad}>Nueva Unidad</button>
    </div>
    <p class="py-2 pl-4">Nota actual: {ramo.notaFinal}</p>
    {#each ramo.unidades as unidad}
        <div class="mb-2">
            <Unidades unidad={unidad} update={updateRamo} />
        </div>
    {/each}
    <!-- {#each ramo.notas as nota}
       <Notas nota={nota} toplevel={true} /> 
    {/each} -->
</div>