<script lang="ts">
    export let color1:string;
    export let color2:string;
    export let color3:string;
</script>

<div>
    <!-- Bottom Bars -->
    <div class="min-w-full {color1} h-[30px] absolute bottom-0"></div>
    <div class="min-w-full {color2} h-[30px] absolute bottom-[30px]"></div>
    <div class="min-w-full {color3} h-[30px] absolute bottom-[60px]"></div>
    <!-- Bottom Right Bars -->
    <div class="w-[30px] h-[370px] {color1} absolute bottom-0 right-0 rounded-tl-[10px]"></div>
    <div class="w-[30px] h-[310px] {color2} absolute bottom-[30px] right-[30px] rounded-tl-[10px]"></div>
    <div class="w-[30px] h-[250px] {color3} absolute bottom-[60px] right-[60px] rounded-tl-[10px]"></div>
    <!-- Top Left Bars -->
    <div class="w-[30px] h-[150px] {color1} absolute top-0 left-0 rounded-br-[10px]"></div>
    <div class="w-[30px] h-[120px] {color2} absolute top-0 left-[30px] rounded-br-[10px]"></div>
    <div class="w-[30px] h-[90px] {color3} absolute top-0 left-[60px] rounded-br-[10px]"></div>
</div>