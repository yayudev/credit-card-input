<script lang="ts">
    import FormInput from "./FormInput.svelte";
    import type { CardFormValues } from "../types/CardFormValues";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let cardFormValues: CardFormValues;
    export let isValid: boolean = false;
    export let backsideActive: boolean = false;

    $: submit = (event: Event) => {
        event.preventDefault();

        console.log("SEE, NOTHING HAPPENED :)");

        dispatch("submitted", { values: cardFormValues });
    };
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
                size={3}
                placeholder="e.g. 123"
                bind:value={cardFormValues.cvc}
                on:focus={() => (backsideActive = true)}
                on:blur={() => (backsideActive = false)}
            />
        </div>

        <div class="form-input-row">
            <button
                class="form-submit-button"
                type="submit"
                disabled={!isValid}
            >
                {#if isValid}
                    Nice! But this button does nothing :)
                {:else}
                    You need to fill all fields
                {/if}
            </button>
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

        &:disabled {
            cursor: not-allowed;
            background: var(--cvc-bar);
        }
    }

    @media screen and (max-width: 980px) {
        .form-input-container {
            margin: 0 auto;
            width: 100%;
        }

        .form-input-form {
            width: 100%;
            max-height: initial;
            max-width: initial;
            padding: 7% 10%;
        }
    }

    @media screen and (max-width: 640px) {
        .form-input-container {
            margin: 0 auto;
            width: 100%;
        }

        .form-input-form {
            padding: 10% 2%;
            gap: 40px 10px;
        }
    }
</style>
