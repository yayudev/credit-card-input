<script lang="ts">
    export let cvc: string = "";
    export let isValid: boolean = false;
    export let active: boolean = false;
</script>

<div class="card-back" class:active>
    <div class="magnetic-bar"></div>
    <p class="cvc-bar">{cvc.padEnd(3, "0")}</p>
    <div class="cc-disclaimer">
        <p>
            If you like it, make sure to drop a star on
            <a
                href="https://github.com/yayudev/credit-card-input"
                target="_blank">github</a
            >.
        </p>
        {#if isValid}
            <p>If you don't, I'll steal your CC now that I have it >:(</p>
        {/if}
    </div>
</div>

<style lang="scss">
    .card-back {
        top: calc(50% - 250px);
        left: -300px;
        position: absolute;
        background: var(--card-back-color);
        width: 450px;
        height: 250px;
        border-radius: 10px;
        color: white;
        box-shadow: var(--card-box-shadow);
        backface-visibility: hidden;
        transform: rotateY(180deg);
        will-change: transform;
        transition: transform 500ms ease-in-out;

        &.active {
            transform: rotateY(0deg) translate(-100px, 150px) scale(1.5);
        }
    }

    @media screen and (max-width: 1200px) {
        .card-back.active {
            transform: rotateY(0deg)
                translate(-100px, 125px)
                scale(1.25);

        }
    }


    .magnetic-bar {
        width: 100%;
        margin-top: 20px;
        height: 60px;
        background: var(--magnetic-bar);
    }

    .cvc-bar {
        width: 80%;
        background: var(--cvc-bar);
        border-radius: 10px;
        padding: 0.5rem 1rem;
        margin: 0.75rem auto;
        font-size: 1.2rem;
        text-align: end;
    }

    .cc-disclaimer {
        font-size: 0.8rem;
        padding: 0 4rem;
        text-align: center;
        color: var(--disclaimer-text);

        p {
            margin: 0;
        }
    }
</style>
