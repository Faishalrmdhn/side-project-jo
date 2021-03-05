<template>
    <b-container fluid class="home" >
        <b-row class="img-wrapper text-center">
            <b-col sm="12" class="px-0">
                <div class="wrap"></div>
                <img class="i" src="../assets/foto/1.png" alt="">
                <img class="ii" src="../assets/foto/2.png" alt="">
                <img class="iii" src="../assets/foto/3.png" alt="">
                <img class="iv" src="../assets/foto/4.png" alt="">
                <img class="v" src="../assets/foto/5.png" alt="">
                <img class="vi" src="../assets/foto/6.png" alt="">
                <img class="vii" src="../assets/foto/7.png" alt="">
                <img class="viii" src="../assets/foto/8.png" alt="">
                <img class="ix" src="../assets/foto/9.png" alt="">
                <img class="x" src="../assets/foto/10.png" alt="">
                <img class="xi" src="../assets/foto/11.png" alt="">
                <img class="xii" src="../assets/foto/12.png" alt="">
                <img class="xiii" src="../assets/foto/13.png" alt="">
                <img class="xiv" src="../assets/foto/14.png" alt="">
                <div class="bck_sound">
                    <audio controls autoplay>
                        <source src="../assets/audio/backsound.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <div class="greet" v-show="message">
                    Happy <br> 
                    Birthday <br> 
                    Claudia
                    <b-row>
                        <b-col  cols="8"> 
                        <b-button @click="audio" variant="danger" size="sm" style="font-size: 13px" pill>Wish for you</b-button>
                        </b-col>
                    </b-row>
                </div>
                <div v-show="audioJo" class="audio">
                    <audio controls >
                        <source src="../assets/audio/audioJo.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </b-col>
        </b-row>   
        <div class="flying_balloon"></div>  
    </b-container>
</template>
<script>
export default {
    data(){
        return{
            audioJo: false,
            message: true
        }
    },
    methods:{
        audio(){
            this.audioJo = true
            this.message = false

        },
        // initBalloon(){
        //     const bdayBallons = (function(){
        // const density = 7; // concurrent balloon count
        // const balloons = []; 
        // const colors = ['yellow', 'green', 'blue', 'red'];

        // const stringElement = document.createElement("div");
        // stringElement.classList.add("string");

        // for (let i = 0; i < density; i++) {
        //     const element = document.createElement("div");
        //     element.classList.add("balloon");
        //     element.classList.add(randomColor());

        //     element.append(stringElement.cloneNode());
        //     document.body.append(element);
            
        //     setTimeout(() => {
        //         releaseBalloon(element);
        //     }, (i * 2000) + random(500, 1000));
        // }


        // function randomColor() {
        //     return colors[ random(0, colors.length) ];
        // }

        // function random (min, max){
        //     return Math.floor(Math.random() * (max-min)) + min;
        // }

        // function releaseBalloon(balloon) {
        //     const delay = random(100, 1000);
        //     const x = random(-99, -30); // random x value to fly
        //     const y = random(-99, -30); // random y value to fly

        //     const sequence = [{
        //         offset: 0,
        //         transform: `rotateZ(45deg) translate(0, 0)`
        //     }];


        //     // random fly direction
        //     if(random(0,2) === 0) {
        //         // first fly up to top left

        //         // left distance to keep balloon in view
        //         balloon.style.left = `${-1*x}vw`;

        //         sequence.push({
        //             offset: x/-200,
        //             transform: `rotateZ(45deg) translate(${x}vw, 0)`
        //         });
        //         sequence.push({
        //             offset: (x+y)/-200,
        //             transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`
        //         });
        //         sequence.push({
        //             offset: (-100+y)/-200,
        //             transform: `rotateZ(45deg) translate(-100vw, ${y}vh)`
        //         });
        //     } else {
        //         // fist fly up to right top

        //         sequence.push({
        //             offset: y/-200,
        //             transform: `rotateZ(45deg) translate(0, ${y}vh)`
        //         });
        //         sequence.push({
        //             offset: (x+y)/-200,
        //             transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`
        //         });
        //         sequence.push({
        //             offset: (-100+x)/-200,
        //             transform: `rotateZ(45deg) translate(${x}vw, -100vh)`
        //         });
        //     }

        //     // last move is common
        //     sequence.push({
        //         offset: 1,
        //         transform: `rotateZ(45deg) translate(-100vw, -100vh)`
        //     });

        //     const balloonAnimation = balloon.animate(sequence, {
        //         duration: 15000,
        //         delay: delay
        //     });


        //     balloonAnimation.onfinish = () => { releaseBalloon(balloon) }
        // }
        //     });
        // }
    }
}
</script>
<style scoped>
    .home{
        height: auto;
        width: auto;
    }
    .audio{
        text-align: center;
        position: absolute;
        top: 50%;
        z-index: 6;
        width: 100%;
        padding: 0px 5px;
    }

    audio{
        width: 90%;
    }

    .bck_sound{
        width: 10%;
        z-index:-1;
    }
    .greet{
        text-align: left;
        position: absolute;
        top: 150px;
        margin-left: 10vmax;
        
        /* padding: ; */
        /* left: 0px; */
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        z-index: 6;
        line-height: 50px;
    }
    .wrap{
        margin: 0px;
        padding: 0px;
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        opacity: 0.6;
        z-index: 5;
    }

    .toggle{
        z-index: 9;
    }
    .img-wrapper{
        /* background-color: tomato; */
        position: absolute;
        width:  100%;
        height: 100%;
        max-width: 254px;
        /* z-index: 3000 */
    }
    .img-wrapper .i {
        position: absolute;
        z-index: 1;
        top: 0px;
        left: 0px;
        width: 25%;
    }
    .img-wrapper .ii {
        /* display: none; */
        position: absolute;
        z-index: 1;
        bottom: 110px;
        left: 66px;
        height: 25%;
    }
    .img-wrapper .iii {
        position: absolute;
        right: 60px;
        top: 200px;
        height: 25%;
        z-index: 3;
    }
    .img-wrapper .iv {
        position: absolute;
        left: 10px;
        top: 130px;
        height: 20%;
    }
    .img-wrapper .v {
        position: absolute;
        top: 20px;
        left: 70px;
        width: 25% ;
    }
    .img-wrapper .vi {
        /* display: none; */
        height: 25%;
        position: absolute;
        top: 100px;
        right: 50px;
        z-index: 2;
    }
    .img-wrapper .vii {
        position: absolute;
        right: 0px;
        top: 25px;
        height: 25%;
        z-index: 1
    }
    .img-wrapper .viii {
        position: absolute;
        right: 0px;
        top: 190px;
        height: 25%;
        z-index: 1;
    }
    .img-wrapper .ix {
        position: absolute;
        bottom: 0px;
        right: 0px;
        height: 25%;
    }
    .img-wrapper .x {
        position: absolute;
        width: 33%;
        bottom: 0px;
        left: 5px;
    }
    .img-wrapper .xi {
        position: absolute;
        bottom: 0px;
        height: 25%;
        right: 80px;
        z-index: 1;
    }
    .img-wrapper .xii {
        position: absolute;
        top: 0px;
        left: 130px;
        height: 15%;
        z-index: 1;
    }
    .img-wrapper .xiii {
        position: absolute;
        bottom: 150px;
        left: 0px;
        height: 30%;
    }
    .img-wrapper .xiv {
        position: absolute;
        bottom: 100px;
        right: 0px;
        height: 25%;
        z-index: 1;
    }
    .balloon {
    --balloonDimension: 15vmax; /* 15% of min(viewport width, height) */
    width: var(--balloonDimension);
    height: var(--balloonDimension);
    border-radius: 100% 100% 15% 100%;
    margin: 0 0 0 25px;
    transform: rotateZ(45deg);
    position: fixed;
    bottom: calc(-1 * var(--balloonDimension));
    left: 0;
    background-color: aqua;
}
.flying_balloon::before {
    content: "";
    width: 10%;
    height: 25%;
    background: radial-gradient(circle, rgba(255,255,255,.7) 0%, rgba(255,255,255,.1) 100%);
    position: absolute;
    left: 15%;
    top: 45%;
    border-radius: 100%;
}
.flying_balloon::after {
    content: "";
    width: 13%;
    height: 5%;
    background-color: inherit;
    position: absolute;
    left: 90%;
    top: 94%;
    border-radius: 22%;
    transform: rotateZ(-45deg);
}
.flying_balloon .string {
    position: absolute;
    background-color: #990;
    width: 2px;
    height: calc(var(--balloonDimension) * .6);
    transform-origin: top center;
    transform: rotateZ(-45deg);
    top: calc(var(--balloonDimension) - 6px);
    left: calc(var(--balloonDimension) - 8px);
}
.yellow{
    background-color: rgba(150, 150, 0, .45);
}
.green{
    background-color: rgba(0, 150, 0, .45);
}
.blue{
    background-color: rgba(0, 0, 150, .45);
}
.red{
    background-color: rgba(150, 0, 0, .45);
}
</style>