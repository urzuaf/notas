<script lang="ts">
    import RamoC from '../Components/Ramo.svelte'
    import {List} from "../Model/ramos_store"

    let ramos = $List

</script>

<div>
<h2>Lista de Ramos</h2>
<ul class="flex flex-col gap-2">
        {#each ramos as ramo, index }
            <li class="border rounded shadow-sm w-fit p-2 bg-slate-200 hover:bg-slate-300 cursor-pointer transition-all">
                <a href="/ramo?index={index}" > 
                    {ramo.nombre}
                </a>
            </li>    
        {/each}
    </ul>
</div>