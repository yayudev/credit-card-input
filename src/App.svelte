<script lang="ts">
    import CardForm from "./lib/CardForm.svelte";
    import type { CardFormValues } from "./types/CardFormValues";
    import CardFront from "./lib/CardFront.svelte";
    import CardBack from "./lib/CardBack.svelte";

    let backsideActive: boolean = true;
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
