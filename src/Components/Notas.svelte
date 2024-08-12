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

<td>
  <input class="w-fit bg-inherit text-center" bind:value={nota.nombre} />
</td>
<td>
  <input
    class="bg-inherit text-center"
    type="number"
    min="1"
    max="7"
    step="0.1"
    bind:value={nota.nota}
    on:change={calcularPuntaje}
  />
</td>
<td>
  <input

    class="bg-inherit text-center"
    type="number"
    min="0"
    max="100"
    bind:value={nota.porcentaje}
    on:change={calcularPuntaje}
  />
</td>
<td>
  <input
    class=" outline-1"
    type="checkbox"
    bind:checked={nota.aprobativa}
    on:change={calcularPuntaje}
  />
</td>
<td>
  {#if nota.puntaje}
    <p>{nota.puntaje}</p>
  {/if}
</td>
<td>
  <button on:click={remove}>
    <img src="/trash.svg" alt="borrar" title="borrar nota" width="18">
  </button>
</td>


<style>
  td{
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }
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
