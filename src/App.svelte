<script lang="ts">
    import CardForm from "./lib/CardForm.svelte";
    import type { CardFormValues } from "./types/CardFormValues";
    import CardFront from "./lib/CardFront.svelte";
    import CardBack from "./lib/CardBack.svelte";
    import {validateCCNumber, validateCVC, validateExpiryDate, validateName} from "./validators/cc-validators";
    import type {Validation} from "./types/validation";

    let backsideActive: boolean = true;
    let cardValues: CardFormValues = {
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: "",
    };

    let validations: Record<keyof Omit<CardFormValues, "year" | "month"> | "date", Validation> ;
    $: validations ={
        name: validateName(cardValues.name),
        number: validateCCNumber(cardValues.number),
        date: validateExpiryDate(cardValues.month, cardValues.year),
        cvc: validateCVC(cardValues.cvc),
    };

    $: isValid =
        validations.name.valid
        && validations.number.valid
        && validations.cvc.valid
        && validations.date.valid;
</script>

<div class="content">
    <div class="side-background"></div>

    <main class="card-content">
        <CardFront active={!backsideActive} {cardValues} />
        <CardBack active={backsideActive} {isValid} cvc={cardValues.cvc} />

        <CardForm
            {isValid}
            bind:cardFormValues={cardValues}
            bind:backsideActive
        />
    </main>
</div>

<style lang="scss">
    .content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-template-areas:
            "side side content content content";
    }

    .side-background {
        background: var(--bg-gradient);
        background-color: black;
    }

    .card-content {
        position: relative;
    }

    @media screen and (max-width: 980px) {
        .content {
            display: flex;
            flex-direction: column;
        }

        .side-background {
            min-height: 300px;
            height: 30vw;
        }
    }

    @media screen and (max-width: 640px) {
        .side-background {
            min-height: 200px;
        }

        .card-content {
            padding-top: 1rem;
        }
    }

    .content {
        width: 100vw;
        overflow-x: hidden;
    }
</style>
