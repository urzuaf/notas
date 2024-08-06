<script lang="ts">
    import type { Nota } from "../Types/nota";
    import { calculoNota } from "../Utils/calculoNota";

    let notaFinal = 0;
    let nota: number = 0,
        porcentaje: number = 30;
    let aprobativa : boolean = false

    function calcularNota() {
        if (nota <= 0 || porcentaje < 0) return;

        let nuevaNota: Nota = {
            nota,
            porcentaje,
            aprobativa
        };
        console.log(nuevaNota)
        notaFinal = calculoNota(nuevaNota);
    }
</script>

<table>
    <thead>
        <tr>
            <th>Nota</th>
            <th>Porcentaje</th>
            <th>Aprobativa</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <input
                    type="number"
                    min="1"
                    max="7"
                    bind:value={nota}
                    on:change={calcularNota}
                />
            </td>
            <td>
                <input
                    type="number"
                    min="0"
                    max="100"
                    bind:value={porcentaje}
                    on:change={calcularNota}
                />
            </td>
            <td>
                <input type="checkbox" 
                    bind:checked={aprobativa}
                    on:change={calcularNota}/>
            </td>
        </tr>
    </tbody>
</table>
<p>Nota final {notaFinal}</p>
