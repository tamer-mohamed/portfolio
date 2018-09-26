<template>
    <!-- <svg :class="$style.logoContaier" :width="width" :height="height" viewBox="0 0 91 71" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Tamer Mohamed</title>
    <defs></defs>
    <g ref="arrows" id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
            <path d="M61.4070096,70.4774933 L90.8581128,19.567912 C91.2613445,18.8712365 90.757043,18 89.9511032,18 L31.0488968,18 C30.242957,18 29.7386555,18.8712365 30.1418872,19.567912 L59.5929904,70.4774933 C59.9962222,71.1741689 61.0037778,71.1741689 61.4070096,70.4774933" id="Fill-5" fill="#4374AF"></path>
            <path d="M59.9512457,0 L1.04868478,0 C0.242740141,0 -0.261040719,0.871234309 0.14166976,1.56790817 L29.5929502,52.4773639 C29.7945673,52.8259622 30.1470044,53 30.4999652,53 C30.852926,53 31.2053632,52.8259622 31.4069802,52.4773639 L40.5268801,36.7130925 L30.7670424,19.8418779 C30.3632845,19.1452041 30.8675891,18.2739698 31.6735337,18.2739698 L51.1937328,18.2739698 L60.8582607,1.56790817 C61.2609712,0.871234309 60.757714,0 59.9512457,0" id="Fill-7" fill="#16416E"></path>
            <path d="M51,18 L31.070971,18 C30.24759,18 29.7332442,18.8977608 30.1449347,19.6156463 L40.1094492,37 L51,18" id="Fill-9" fill="#0B2454"></path>
        </g>
    </g>
</svg> -->



<svg :class="$style.logoContaier" :width="width" :height="height" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
    <desc>Tamer Mohamed</desc>
    <defs></defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Logo">
            <path d="M60.772328,11.7366281 C61.4190357,10.520653 56.611071,9 55.3176557,9 L33.6823443,9 C32.388929,9 28.5809643,10.520653 29.227672,11.7366281 L43.0453277,42.2210886 C43.6920353,43.4370637 45.3079647,43.4370637 45.9546723,42.2210886 L60.772328,11.7366281 Z" id="Fill-48" fill="#2E69A6"></path>
            <path d="M46.043894,61.2467439 C45.5330688,62.1710961 44.25383,62.1710961 43.7430047,61.2467439 L0,2.19283943 L0,73 L91,73 L91,0 L46.043894,61.2467439 Z" id="Fill-49" fill="#16416E"></path>
        </g>
    </g>
</svg>


</template>

<script lang="ts">
import { Script } from 'vm';


  export default {
    name: 'TMLogo',
    props:['shrink'],
    computed:{
        width(){
            return this.shrink ? '50px' : '100px';
        },
        viewBox(){
            return this.shrink ? '0 0 100 93': '0 0 93 70';
        },
        height(){
            return this.shrink ? '50px' : '70px';
        }
    },
  }
</script>


<style lang="scss" module>
.logoContaier {
  transition: 0.3s all ease-in-out;
}
</style>
