<script lang="ts">
    import FormInput from "./FormInput.svelte";
    import type {CardFormValues} from "../types/CardFormValues";

    export let cardFormValues: CardFormValues;
</script>

<div>
    <FormInput label="Cardholder name" bind:value={cardFormValues.name} placeholder="e.g. John Smith" />
    <FormInput label="Card number" bind:value={cardFormValues.number} placeholder="e.g. 1234 5678 9123 4567" />

    <div>
        <FormInput
            label="Exp. Date (MM/YY)"
            doubleInput
            bind:value={cardFormValues.month}
            placeholder="MM"
            bind:secondValue={cardFormValues.year}
            secondPlaceholder="YY"
        />
        <FormInput label="CVC" bind:value={cardFormValues.cvc} placeholder="e.g. 123" />
    </div>
</div>
