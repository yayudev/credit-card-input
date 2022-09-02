<script lang="ts">
    import CardForm from "./lib/CardForm.svelte";
    import type { CardFormValues } from "./types/CardFormValues";
    import CardFront from "./lib/CardFront.svelte";
    import CardBack from "./lib/CardBack.svelte";

    let backsideActive: boolean = false;
    let cardValues: CardFormValues = {
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: "",
    };

    // TODO: implement validations
    $: isValid =
        cardValues?.name &&
        cardValues?.number.length === 16 &&
        cardValues?.year.length === 2 &&
        cardValues?.month.length === 2 &&
        cardValues?.cvc.length === 3;
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

<style>
    .content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 2fr 3fr;
    }

    .side-background {
        background: var(--bg-gradient);
        background-color: black;
    }

    .card-content {
        position: relative;
    }
</style>
