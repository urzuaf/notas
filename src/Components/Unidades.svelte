<script lang="ts">
  import type { Unidad, Nota } from "../Types/tipos";
  import { CalculoUnidad } from "../Utils/calculoNota";
  import Notas from "./Notas.svelte";

  export let unidad: Unidad;
  export let update: any

  function addNota() {
    let nuevaNota: Nota = {
      nota: 0,
      aprobativa: false,
      nombre: "nuevaNota",
      porcentaje: 0,
      puntaje: 0,
    };
    unidad.notas = [...unidad.notas, nuevaNota];
  }

  function updateUnidad(){

    let auxUnidad: Unidad = unidad
    auxUnidad = CalculoUnidad(unidad)

    unidad = auxUnidad
    update()
  }

</script>

<div class=" w-fit rounded">
  <div
    class="bg-slate-600 rounded-t-md px-4 py-2 flex justify-between text-white"
  >
    <p class="">
      <input
        class="w-32 bg-inherit text-center"
        type="text"
        bind:value={unidad.nombre}
      />
      <input
        class="w-8 bg-inherit text-center"
        type="number"
        bind:value={unidad.porcentaje}
      />
      % 
      
    </p>
    <button class="font-bold text-lg text-white" on:click={addNota}>+</button>
  </div>
  <table class="bg-slate-200 pb-1   ">
    <thead class="pb-2">
      <tr>
        <th>Nombre</th>
        <th>Nota</th>
        <th>Porcentaje</th>
        <th>Aprobativa</th>
        <th>Puntaje</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
      {#each unidad.notas as nota}
        <tr>
          <Notas {nota} update={updateUnidad} />
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="bg-slate-600 p-1  rounded-b-md text-white flex justify-around">
    <p class="">Nota unidad: {unidad.notaUnidad} </p>
    <p>Puntaje unidad: {unidad.puntaje}</p>
  </div>
</div>

<style>
  th {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  table {
    border-collapse: unset;
  }
  input {
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    border: 2px solid transparent;
  }
  input:hover {
    border: 2px solid rgb(43, 179, 179);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
</style>
