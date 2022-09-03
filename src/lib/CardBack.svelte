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
            If you like this, make sure to drop a star on
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
        font-size: 1.3rem;
        text-align: end;
    }

    .cc-disclaimer {
        font-size: 0.75rem;
        padding: 0 2.5rem;
        text-align: center;
        color: var(--disclaimer-text);

        p {
            margin: 0;
        }
    }

    @media screen and (max-width: 1200px) {
        .card-back {
            top: calc(50% - 250px);
            left: calc(-55vw + 350px);
            transform: rotateY(180deg);
        }

        .card-back.active {
            transform: rotateY(0deg)
            translate(-100px, 125px)
            scale(1.25);
        }
    }

    @media screen and (max-width: 1100px) {
        .card-back {
            top: calc(50vw - 400px);
            left: calc(-100% + 250px);
        }

        .card-back.active {
            transform: rotateY(0deg)
            translate(-50px, 50px)
            scale(1.2);
        }
    }

    @media screen and (max-width: 980px) {
        .card-back {
            width: 350px;
            height: 200px;
            top: -175px;
            left: calc(50% - 350px / 2);
            transform: rotateY(180deg);

            &.active { transform: rotateY(0deg); }
        }
    }

    @media screen and (max-width: 640px) {
        .card-back {
            width: 350px;
            height: 200px;
            top: -175px;
            left: calc(50% - 350px / 2);
            transform: rotateY(180deg);

            &.active { transform: rotateY(0deg); }
        }

        .magnetic-bar {
            height: 45px;
            margin-top: 20px;

        }

        .cvc-bar {
            font-size: 1rem;
            padding: .25rem 1rem;
        }

        .cc-disclaimer {
            padding: 0 1rem;
            font-size: .6rem;
        }
    }
</style>
