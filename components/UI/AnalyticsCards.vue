<script setup>
import { aswar_data } from '~/constants/aswarData';

const Sdata = aswar_data;
</script>
<template>
    <div class="card-wrapper w-full font-roboto" id="status" >
        <div class="container font-roboto grid place-items-center mt-2 px-[30px] w-full">

            <div class="card w-full  p-6  rounded-2xl bg-white flex justify-between mb-4">
                <!-- <div>
                    <p class=" font-bold text-text text-sm">Today's Moneys</p>
                    <p class=" text-text-active font-bold">$53,000 <sub
                            class=" text-teall font-semibold text-base">+55%</sub></p>
                </div> -->
                <div class=" flex items-center gap-4">
                    <div class="bg-teall w-full max-w-fit p-2 rounded-lg">
                        <div class=" h-full flex justify-center items-center text-white font-bold tracking-wider">
                            <p class="">{{ Sdata[0].tempC }} ℃</p>
                        </div>
                    </div>
                    <div class=" font-semibold tracking-tight">
                        <p>Temperature</p>
                    </div>
                </div>
            </div>

            <div class="card w-full  p-6  rounded-2xl bg-white flex justify-between mb-4">
                <!-- <div>
                    <p class=" font-bold text-text text-sm">Today's Moneys</p>
                    <p class=" text-text-active font-bold">$53,000 <sub
                            class=" text-teall font-semibold text-base">+55%</sub></p>
                </div> -->
                <div class=" flex items-center gap-4">
                    <div class="bg-teall w-full max-w-fit p-2 rounded-lg">
                        <div class=" h-full flex justify-center items-center text-white font-bold tracking-wider">
                            <p class="">{{ Sdata[0].humi }}</p>
                        </div>
                    </div>
                    <div class=" font-semibold tracking-tight">
                        <p>Humidity</p>
                    </div>
                </div>
            </div>

            <div class="card w-full  p-6  rounded-2xl bg-white flex justify-between mb-4">
                <!-- <div>
                    <p class=" font-bold text-text text-sm">Today's Moneys</p>
                    <p class=" text-text-active font-bold">$53,000 <sub
                            class=" text-teall font-semibold text-base">+55%</sub></p>
                </div> -->
                <div class=" flex items-center gap-4">
                    <div class="bg-teall w-full max-w-fit p-2 rounded-lg">
                        <div class=" h-full flex justify-center items-center text-white font-bold tracking-wider">
                            <p class="">{{ Sdata[0].sensor_value }}</p>
                        </div>
                    </div>
                    <div class=" font-semibold tracking-tight">
                        <p>Sensor value</p>
                    </div>
                </div>
            </div>

            <div class="card w-full  p-6  rounded-2xl bg-white flex justify-between mb-4">
                <!-- <div>
                    <p class=" font-bold text-text text-sm">Today's Moneys</p>
                    <p class=" text-text-active font-bold">$53,000 <sub
                            class=" text-teall font-semibold text-base">+55%</sub></p>
                </div> -->
                <div class=" flex items-center gap-4">
                    <div class="bg-teall w-full max-w-fit p-2 rounded-lg">
                        <div class=" h-full flex justify-center items-center text-white font-bold tracking-wider">
                            <p class="">{{ Sdata[0].tempC }} ℃</p>
                        </div>
                    </div>
                    <div class=" font-semibold tracking-tight">
                        <p>Temperature</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
.card {
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px;
}

.card-wrapper {
    container-type: inline-size;
    container-name: cards;
}

@container cards (min-width:700px)  {
    .container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0px, 1fr));
        gap: 1rem;
        padding-inline:20px;
        width: 100%;

        /* display: flex;
        flex: 1 0 50%;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        border: 1px dotted pink;
        justify-content: center;
        margin-inline: auto;
        .card {
            width: 45%;
        } */
         .card {
            padding: 25px;
         }
    }
}

@container cards (min-width:1160px) { 
    .container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, minmax(0px, 1fr));

        padding-inline: 25px;
    }
}
</style>