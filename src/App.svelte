<script lang="ts">
import CardForm from "./lib/CardForm.svelte";
import type {CardFormValues} from "./types/CardFormValues";

let cardValues: CardFormValues = {
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
};
</script>

<div class="content">
    <div class="side-background"></div>


    <main class="card-content">
        <section>
            Card details
            {JSON.stringify(cardValues)}
        </section>

        <section>
            <CardForm bind:cardFormValues={cardValues} />
        </section>
    </main>
</div>

<style>
    .content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 5fr 8fr;
    }

    .side-background {
        background: var(--bg-gradient);
    }

    .card-content {
    }
</style>