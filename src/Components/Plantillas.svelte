<script lang="ts">
    import type { Ramo } from "../Types/tipos";
    import Templates from '../Model/templates'

    let ramos : Ramo[] = Templates

</script>

<div>
    Plantillas  
    <ul class="flex flex-col gap-2">
        {#each ramos as ramo, index }
            <li class="border rounded shadow-sm w-fit p-2 bg-slate-200 hover:bg-slate-300 cursor-pointer transition-all">
                <a href="/ramo?template={index}" > 
                    {ramo.nombre}
                </a>
            </li>    
        {/each}
    </ul>
</div>