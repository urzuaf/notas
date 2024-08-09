<script lang="ts">
  import { onMount } from "svelte";
  import type { Nota } from "../Types/tipos";
  import { calculoNota } from "../Utils/calculoNota";

  export let nota: Nota;
  export let update : any;

  onMount(() => {
    calcularPuntaje();
  });

  function calcularPuntaje() {
    update()
    if (nota.nota <= 0 || nota.porcentaje < 0) {
      nota.puntaje = 0;
      return;
    }
    nota.puntaje = calculoNota(nota);
  }
</script>

<td>
  <input class="w-fit bg-inherit text-center" bind:value={nota.nombre} />
</td>
<td>
  <input
    class="w-16 bg-inherit text-center"
    type="number"
    min="1"
    max="7"
    bind:value={nota.nota}
    on:change={calcularPuntaje}
  />
</td>
<td>
  <input

    class="w-16 bg-inherit text-center"
    type="number"
    min="0"
    max="100"
    bind:value={nota.porcentaje}
    on:change={calcularPuntaje}
  />
</td>
<td>
  <input
    class="w-16 outline-1"
    type="checkbox"
    bind:checked={nota.aprobativa}
  />
</td>
<td>
  {#if nota.puntaje}
    <p>{nota.puntaje}</p>
  {/if}
</td>
<td>
  <button>x</button>
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
