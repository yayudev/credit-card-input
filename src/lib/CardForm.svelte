<script lang="ts">
    import FormInput from "./FormInput.svelte";
    import type { CardFormValues } from "../types/CardFormValues";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let cardFormValues: CardFormValues;

    function submit(event: Event) {
        event.preventDefault();

        dispatch("submitted", {
            values: cardFormValues,
        });
    }
</script>

<div class="form-input-container">
    <form class="form-input-form" on:submit={submit}>
        <div class="form-input-row">
            <FormInput
                label="Cardholder name"
                placeholder="e.g. John Smith"
                bind:value={cardFormValues.name}
            />
        </div>

        <div class="form-input-row">
            <FormInput
                class="form-input--number"
                label="Card number"
                onlyNumbers
                size={16}
                placeholder="e.g. 1234 5678 9123 4567"
                bind:value={cardFormValues.number}
            />
        </div>

        <div class="form-input-row">
            <FormInput
                label="Exp. Date (MM/YY)"
                doubleInput
                onlyNumbers
                size={2}
                placeholder="MM"
                secondPlaceholder="YY"
                bind:value={cardFormValues.month}
                bind:secondValue={cardFormValues.year}
            />
        </div>

        <div class="form-input-row">
            <FormInput
                label="CVC"
                onlyNumbers
                placeholder="e.g. 123"
                bind:value={cardFormValues.cvc}
            />
        </div>

        <div class="form-input-row">
            <button class="form-submit-button" type="submit">Confirm</button>
        </div>
    </form>
</div>

<style lang="scss">
    .form-input-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 90%;
        margin-left: 10%;
        align-items: center;
        justify-content: center;
    }

    .form-input-form {
        max-height: 400px;
        max-width: 400px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 30px 20px;
        grid-template-areas:
            "name name"
            "number number"
            "date cvc"
            "button button";
    }

    .form-input-row {
        &:nth-child(1) {
            grid-area: name;
        }

        &:nth-child(2) {
            grid-area: number;
        }

        &:nth-child(3) {
            grid-area: date;
        }

        &:nth-child(4) {
            grid-area: cvc;
        }

        &:nth-child(5) {
            grid-area: button;
        }
    }

    .form-submit-button {
        width: 100%;
        background: var(--confirm-button-color);
        padding: 1rem;
        color: white;
        border: none;
        font-size: 1.2rem;
        border-radius: 0.3rem;
        cursor: pointer;
    }
</style>
