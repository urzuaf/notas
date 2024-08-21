<script lang="ts">
  import type { Unidad, Nota } from "../Types/tipos";
  import { CalculoUnidad } from "../Utils/calculoNota";
  import Notas from "./Notas.svelte";

  export let unidad: Unidad;
  export let update: any;
  export let removeN: any;
  export let unidadIndex: number;
  export let removeU: any;

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

  function updateUnidad() {
    let auxUnidad: Unidad = unidad;
    auxUnidad = CalculoUnidad(unidad);

    unidad = auxUnidad;
    update();
  }

  function borrarNotaU(index: number) {
    removeN(unidadIndex, index);
  }

  function borrarUnidad() {
    removeU(unidadIndex);
  }

  function toggleAprobativa() {
    unidad.aprobativa = !unidad.aprobativa;
    update();
  }

  // Hacer aprovativa con un boton 
</script>

<div class="lg:w-4/6 md:w-5/6 overflow-hidden mx-auto rounded p-2">
  <div
    class="bg-slate-600 rounded-t-md px-4 py-2 flex justify-between text-white"
  >
    <p class="">
      <input
        class="max-w-20 bg-inherit text-center"
        type="text"
        bind:value={unidad.nombre}
      />
      <input
        class="max-w-8 bg-inherit text-center"
        type="number"
        bind:value={unidad.porcentaje}
        on:change={updateUnidad}
      />
      %
    </p>
    <div class="controls">
      <button title="Nueva nota" class="font-bold text-lg text-white" on:click={addNota}>
        <img src="/add.svg" alt="borrar"  width="20" />
      </button>
      <button title="eliminar unidad" on:click={removeU} class="text-white">
        <img src="/trash.svg" alt="borrar"  width="20" />
      </button>
      <button title="Aprobativa" class="font-bold text-lg text-white" on:click={toggleAprobativa}>
        <img src="/ablue.svg" alt="borrar"  width="20" />
      </button>
    </div>
  </div>
  <div class="bg-slate-200 pb-1 ">
    <!-- <div class="pb-2">
      <div class="flex justify-around ">
        <div>Nombre</div>
        <div>Nota</div>
        <div>Porcentaje</div>
        <div>Opciones</div>
      </div>
    </div> -->
    <div> 
      {#each unidad.notas as nota, idx}
        <div class="">
          <Notas
            {nota}
            update={updateUnidad}
            notaIndex={idx}
            removeN={borrarNotaU}
          />
        </div>
      {/each}
    </div>
  </div>
  <div class="bg-slate-600 p-1 rounded-b-md text-white flex justify-around shadow-md shadow-slate-5x|00">
    <p class="">Nota: {unidad.notaUnidad}</p>
    <p>Puntaje: {unidad.puntaje}</p>
  </div>
</div>

<style>
  .controls{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button{
    transition: all .1s ease-in-out;
    padding: .2rem;
  }
  button:hover{
    transform: scale(1.01);
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
