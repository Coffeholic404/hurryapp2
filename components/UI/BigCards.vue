<script setup>
import { Icon } from "@iconify/vue";
import { CircleProgressBar } from 'circle-progress.vue';

</script>

<template>
    <div class="big-card-wrapper px-[30px]" id="statistics">
        <div class="container-wrapper">
            <div class="big-card bg-white w-full p-5 font-roboto rounded-[15px] flex flex-col">
                <div class="big-card-text">
                    <!-- <div>
                        <div class=" mb-4">
                            <p class=" text-text font-bold text-[.895rem]">Built by Developers</p>
                            <p class=" text-text-gr-700 font-bold text-lg">Purity UI Dashboard</p>
                        </div>
                        <p class=" text-text text-sm">
                            From colors, cards, typography to complex elements, you will find the full documentation.
                        </p>
                    </div>
                    <div class="read text-text-gr-700 my-[24px]">
                        <p class=" flex items-center gap-2 font-bold">Read more <span>
                                <Icon icon="ion:arrow-forward" />
                            </span></p>
                    </div> -->
                </div>
                <div class="chakra bg-teall min-h-[250px] rounded-[15px] grid place-items-center mt-4">
                    <!-- <img src="/assets/svg/logo-white.svg" alt=""> -->
<!-- 
                    <svg width="200" height="200" viewBox="0 0 250 250" class="circular-progress"
                        style="--progress: 20">
                        <circle class="bg">

                        </circle>
                        <circle class="fg">

                        </circle>
                    </svg> -->
                    <CircleProgressBar :value="7" :max="100"> 7 </CircleProgressBar>

                </div>
            </div>
            <div class="bg-white p-[20px] w-full  rounded-[15px] font-roboto">
                <!-- <div class="img-card w-full min-h-[200px]">
                    <div class="img-card__containt ">
                        <div>
                            <h3 class=" text-white font-bold text-[20px]">Working with the rockets</h3>
                            <p class=" text-white ">Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the
                                opportunity first.</p>
                        </div>
                        <div class="text-white my-[24px]">
                            <p class=" flex items-center gap-2 font-bold">Read more <span>
                                    <Icon icon="ion:arrow-forward" />
                                </span></p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .big-card {
    outline: 1px solid red;
} */

.img-card {
    padding: 0px;
    background-image: url("/assets/people-image.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 15px;

    .img-card__containt {
        background: linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%);
        width: 100%;
        position: absolute;
        height: 100%;
        border-radius: inherit;
        padding: 1.5rem 1.2rem 0.3rem;
    }
}

.big-card-wrapper {
    container-name: bigCard;
    container-type: inline-size;
}

@container bigCard (min-width: 960px) {
    .container-wrapper {
        display: grid;
        gap: 14px;
        grid-template-rows: 1fr;
        grid-template-columns: 1.8fr 1.2fr;

        .big-card {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            /* align-items: center; */

            padding-block: 10px;

            .big-card-text {
                max-width: 50%;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-between;
            }

            .chakra {
                width: 45%;

            }
        }

        .img-card {
            min-height: 250px;

            .img-card__containt {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }
}

.circular-progress {
    --size: 250px;
    --half-size: calc(var(--size) / 2);
    --stroke-width: 20px;
    --radius: calc((var(--size) - var(--stroke-width)) / 2);
    --circumference: calc(var(--radius) * pi * 2);
    --dash: calc((var(--progress) * var(--circumference)) / 100);
}

.circular-progress circle {
    cx: var(--half-size);
    cy: var(--half-size);
    r: var(--radius);
    stroke-width: var(--stroke-width);
    fill: none;
    stroke-linecap: round;
}

.circular-progress circle.bg {
    stroke: #ddd;
}

.circular-progress circle.fg {
    transform: rotate(-90deg);
    transform-origin: var(--half-size) var(--half-size);
    stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
    transition: stroke-dasharray 0.3s linear 0s;
    stroke: #5394fd;
}
</style>