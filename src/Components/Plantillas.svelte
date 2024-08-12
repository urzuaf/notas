<script lang="ts">
    import type { Ramo } from "../Types/tipos";
    import Templates from '../Model/templates'

    let ramos : Ramo[] = Templates

</script>

<div class="flex flex-col gap-4">

    <h2 class="font-bold text-xl">Plantillas</h2>
    
    <ul class="flex flex-col gap-2">
        {#each ramos as ramo, index }
        <a href="/ramo?template={index}" > 
            <li class="border rounded shadow-sm w-full p-2 bg-slate-200 hover:bg-slate-300 cursor-pointer transition-all max-w-sm">
                    {ramo.nombre}
                </li>    
            </a>
        {/each}
    </ul>
</div>