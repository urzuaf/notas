<script lang="ts">
    import type { Ramo, Unidad, Nota } from "../Types/tipos";
    //import ramoP from '../Model/test'
    import Unidades from "./Unidades.svelte";
  //import Notas from "./Notas.svelte";
  import { CalculoRamo } from "../Utils/calculoNota";

  //let ramo = ramoP

  export let ramo:Ramo

  let editarNombre : boolean = false
  let estado: string = ''


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
        //Como es posible que se agreguen las notas tanto como 1 o 10, consideramos ambos casos
        if(ramo.notaFinal){
          if(ramo.notaFinal < 10){
            ramo.notaFinal < 3.95 ? estado = 'text-red-800': estado = 'text-green-800'
          }
          else{
            ramo.notaFinal < 39.5 ? estado = 'text-red-800': estado = 'text-green-800'
          }
        } 
  }

   function handleEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // Aquí puedes llamar a la función que desees
      editarNombre = !editarNombre
    }
  }

</script>

<div class="w-full ">
    <div class="px-2 flex flex-col gap-2 w-full ">
      <div class="flex w-full ">
        {#if !editarNombre}
        <h1 class="text-2xl font-bold w-fit p-1">{ramo.nombre}</h1>
        <button on:click={() => editarNombre = !editarNombre}>
          <img src="/edit.svg" alt="editar" width="30" class="px-1" />
        </button>
        {:else}
        <input autofocus type="text" class="text-2xl font-bold w-fit outline outline-1 rounded shadow-md p-1" bind:value={ramo.nombre} on:keydown={handleEnter} />
        <button on:click={() => editarNombre = !editarNombre} >
          <img src="/tick.svg" alt="editar" width="30" class="px-1" />
        </button>
        {/if}
      </div>
        <div>
          <button class="bg-blue-700 font-medium rounded p-1 px-2 text-white" on:click={addUnidad}>Nueva Unidad</button>
          <button class="bg-green-700 font-medium rounded p-1 px-2 text-white">Guardar Ramo</button>
        </div>
    </div>
    <p class="py-4 pl-4 text-lg">Nota actual: <span class="font-bold {estado}">{ramo.notaFinal}</span></p>
    {#each ramo.unidades as unidad}
        <div class="mb-2">
            <Unidades unidad={unidad} update={updateRamo} />
        </div>
    {/each}
    <!-- {#each ramo.notas as nota}
       <Notas nota={nota} toplevel={true} /> 
    {/each} -->
</div>