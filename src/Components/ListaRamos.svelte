<script lang="ts">
  import RamoC from "../Components/Ramo.svelte";
  import CreadorRamo from "./CreadorRamo.svelte";
  import { List } from "../Model/ramos_store";

  let ramos = $List;
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <h2 class="font-bold text-xl">Tus Ramos</h2>
    <CreadorRamo />
  </div>
  <ul class="flex flex-col gap-2 ">
    {#each ramos as ramo, index}
    <a class="" href="/ramo?index={index}">
      <li
        class="border rounded p-2 shadow-sm w-full bg-slate-200 hover:bg-slate-300 cursor-pointer transition-all max-w-sm "
      >
          {ramo.nombre}
        </li>
      </a>
    {/each}
  </ul>
</div>
