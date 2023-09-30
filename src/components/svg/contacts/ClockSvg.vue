<template>
    <svg version="1.1" id="Clock" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <g>
			<defs>
				<rect id="clock_5" width="24" height="24"/>
			</defs>
            <clipPath id="ClockSvg_1">
				<use xlink:href="#clock_5"  style="overflow:visible;"/>
			</clipPath>
            <g style="clip-path:url(#ClockSvg_1);">
				<linearGradient id="ClockSvg_2" gradientUnits="userSpaceOnUse" x1="0" y1="12" x2="24" y2="12">
					<stop  offset="0" style="stop-color:#CCCCCC"/>
                	<stop  offset="1" style="stop-color:#0794B8"/>
				</linearGradient>
                <path style="fill:url(#ClockSvg_2);" d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z"/>
                <linearGradient id="ClockSvg_3" gradientUnits="userSpaceOnUse" x1="11" y1="8.5" x2="13" y2="8.5">
					<stop  offset="0" style="stop-color:#CCCCCC"/>
                    <stop  offset="1" style="stop-color:#0794B8"/>
				</linearGradient>
                <path style="fill:url(#ClockSvg_3);" d="M12,13c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1s1,0.4,1,1v7C13,12.6,12.6,13,12,13z"/>
                <linearGradient id="ClockSvg_4" gradientUnits="userSpaceOnUse" x1="11" y1="14" x2="17" y2="14">
					<stop  offset="0" style="stop-color:#CCCCCC"/>
                    <stop  offset="1" style="stop-color:#0794B8"/>
				</linearGradient>
                <path style="fill:url(#ClockSvg_4);" d="M16,17c-0.3,0-0.5-0.1-0.7-0.3l-4-4c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4C16.5,16.9,16.3,17,16,17z"/>
			</g>
		</g>
	</svg>
</template>

<script>
    export default {
        name: "ClockSvg"
    }
</script>

<style scoped lang="scss">
    #Clock{
		.st0{clip-path:url(#SVGID_00000024724399013146534370000000479532198430911917_);}
		.st1{fill:url(#SVGID_00000031887179767700618560000016187468782035726480_);}
		.st2{fill:url(#SVGID_00000075859217951619281290000001553627454238243235_);}
		.st3{fill:url(#SVGID_00000057118747239892492620000007876564596800133520_);}
    }
</style>