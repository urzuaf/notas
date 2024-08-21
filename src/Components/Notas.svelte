<script lang="ts">
  import { onMount } from "svelte";
  import type { Nota } from "../Types/tipos";
  import { calculoNota } from "../Utils/calculoNota";

  export let nota: Nota;
  export let update : any;
  export let removeN: any;
  export let notaIndex : number

  onMount(() => {
    calcularPuntaje();
  });

  function calcularPuntaje() {
    if (nota.nota <= 0 || nota.porcentaje < 0) {
      nota.puntaje = 0;
      return;
    }
    if(nota.nota > 10){
      nota.nota = nota.nota / 10
    }
  
    nota.puntaje = calculoNota(nota);
    update()
  }

  function remove(){
    removeN(notaIndex)
  }

</script>

<div class="flex justify-around p-1 items-center">

  <div>
    <input class="max-w-24 bg-inherit" bind:value={nota.nombre} />
  </div>
  <div>
    <input
      class="max-w-12 bg-inherit"
      type="number"
      min="1"
      max="7"
      step="0.1"
      bind:value={nota.nota}
      on:change={calcularPuntaje}
    />
  </div>
  <div>
    <input
  
      class="max-w-12 bg-inherit"
      type="number"
      min="0"
      max="100"
      bind:value={nota.porcentaje}
      on:change={calcularPuntaje}
    />
  </div>
  <div>
    <button on:click={remove}>
      <img src="/trash.svg" alt="borrar" title="borrar nota" width="18">
    </button>
    <!-- Agregar el hacer aprovativa aqui -->
  </div>
</div>


<style>
  input{
    border-radius: 5px;
    transition: all .3s ease-in-out;
    border: 2px solid transparent;
  }
  input:hover{
    border: 2px solid rgb(43, 179, 179);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  }
</style>
