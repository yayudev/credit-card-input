<script lang="ts">
    export let label: string = "";
    export let onlyNumbers: boolean = false;
    export let value: string = "";
    export let placeholder: string = "";
    export let secondValue: string;
    export let secondPlaceholder: string;

    $: includeDoubleInput = secondValue !== undefined;
    $: allowedPattern = onlyNumbers ? "0-9" : "";
</script>


<div>
    <label>{label}</label>
    <div>
        <input type="text" bind:value={value} placeholder={placeholder}  pattern={allowedPattern} />

        {#if includeDoubleInput}
            <input type="text" bind:value={secondValue} placeholder={secondPlaceholder}  pattern={allowedPattern} />
        {/if}
    </div>
</div>
