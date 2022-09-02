<script lang="ts">
    export let label: string = "";
    export let onlyNumbers: boolean = false;
    export let value: string = "";
    export let size: number = undefined;
    export let placeholder: string = "";
    export let secondValue: string;
    export let secondPlaceholder: string;

    $: includeDoubleInput = secondValue !== undefined;
    $: allowedPattern = onlyNumbers ? "[0-9]*" : undefined;
</script>

<label class="form-input-label">{label}</label>

<div class="form-input-inputs-container">
    <input
        type="text"
        class="form-input-field"
        {placeholder}
        pattern={allowedPattern}
        minlength={size}
        maxlength={size}
        bind:value
    />

    {#if includeDoubleInput}
        <input
            type="text"
            class="form-input-field"
            pattern={allowedPattern}
            minlength={size}
            maxlength={size}
            placeholder={secondPlaceholder}
            bind:value={secondValue}
        />
    {/if}
</div>

<style lang="scss">
    .form-input-label {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.8rem;
        letter-spacing: 0.15rem;
    }

    .form-input-inputs-container {
        width: 100%;
        display: flex;
        gap: 10px;
    }

    .form-input-field {
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        border-radius: 5px;
        border: 1px solid var(--input-border-color);
        outline: none;
    }
</style>
