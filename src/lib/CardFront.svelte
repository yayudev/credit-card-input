<script lang="ts">
    import ccLogo from "../assets/cc-logo.svg";
    import type { CardFormValues } from "../types/CardFormValues";

    export let cardValues: CardFormValues;
    export let active: boolean = true;

    $: formatedNumber = cardValues?.number
        .padEnd(16, "_")
        .replace(/(.{4})/g, "$1 ");

    $: month = cardValues?.month.padEnd(2, "-");
    $: year = cardValues?.year.padEnd(2, "-");
    $: cardName = cardValues?.name.toUpperCase() || "YOUR NAME HERE";
</script>

<div class="card-front" class:active>
    <img class="card-front-logo" height="80" width="120" src={ccLogo} alt="Credit card logo" />

    <span class="card-front-number">{formatedNumber}</span>
    <span class="card-front-name" > {cardName}</span>
    <span class="card-front-date">{month}/{year}</span
    >
</div>

<style lang="scss">
    .card-front {
        top: calc(50% - 250px);
        left: -300px;
        position: absolute;
        background: var(--bg-gradient);
        background-color: white;
        width: 450px;
        height: 250px;
        border-radius: 10px;
        box-shadow: var(--card-box-shadow);

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
            "e e e e"
            "e e e e"
            "number number number number"
            "name name name date";
        align-items: flex-end;
        padding: 2rem;
        color: white;
        backface-visibility: hidden;
        transform: rotateY(180deg) translate(-100px, 150px) scale(1.5);
        will-change: transform;

        transition: transform 500ms ease-in-out;

        &.active {
            transform: rotateY(0deg);
        }
    }

    @media screen and (max-width: 1200px) {
        .card-front {
            top: calc(50% - 250px);
            left: calc(-55vw + 250px);
            transform: rotateY(180deg)
            translate(-100px, 125px)
            scale(1.25);
        }
    }

    @media screen and (max-width: 1100px) {
        .card-front {
            top: calc(50% - 250px);
            left: calc(-100% + 250px);
        }
    }

    .card-front-logo {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .card-front-name {
        grid-area: name;
        overflow: hidden;
        white-space: nowrap;
        font-size: 1.2rem;
        text-overflow: ellipsis;
    }

    .card-front-date {
        grid-area: date;
        justify-self: end;
        font-size: 1.5rem;
    }

    .card-front-number {
        grid-area: number;
        font-size: 2.1rem;
        text-align: center;
    }
</style>
