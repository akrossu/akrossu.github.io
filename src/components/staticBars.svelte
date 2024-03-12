<script lang="ts">
    export let color1:string;
    export let color2:string;
    export let color3:string;
</script>

<div>
    <!-- Top Left Bars -->
    <div class="w-[15px] md:w-[30px] h-[12%] md:h-[23.3%] max-h-[150px] {color1} absolute top-0 left-0 rounded-br-[10px]"></div>
    <div class="w-[15px] md:w-[30px] h-[10%] md:h-[18.7%] max-h-[120px] {color2} absolute top-0 left-[15px] md:left-[30px] rounded-br-[10px]"></div>
    <div class="w-[15px] md:w-[30px] h-[8%] md:h-[14%] max-h-[90px] {color3} absolute top-0 left-[30px] md:left-[60px] rounded-br-[10px]"></div>
    <!-- Bottom Bars -->
    <div class="flex-shrink-0 bottom-0 md:static">
        <div class="min-w-full {color3} h-[15px] md:h-[30px] md:absolute bottom-[30px] md:bottom-[60px]"></div>
        <div class="min-w-full {color2} h-[15px] md:h-[30px] md:absolute bottom-[15px] md:bottom-[30px]"></div>
        <div class="min-w-full {color1} h-[15px] md:h-[30px] md:absolute bottom-0"></div>
        <!-- Bottom Right Bars -->
        <div class="w-[15px] md:w-[30px] h-[16%] md:h-[32%] max-h-[370px] {color1} md:absolute bottom-0 right-0 rounded-tl-[10px]"></div>
        <div class="w-[15px] md:w-[30px] h-[12%] md:h-1/4 max-h-[310px] {color2} md:absolute bottom-[15px] md:bottom-[30px] right-[15px] md:right-[30px] rounded-tl-[10px]"></div>
        <div class="w-[15px] md:w-[30px] h-[8%] md:h-[17.3333%] max-h-[250px] {color3} md:absolute bottom-[30px] md:bottom-[60px] right-[30px] md:right-[60px] rounded-tl-[10px]"></div>
    </div>
</div>