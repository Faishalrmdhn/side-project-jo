<template>
    <b-container fluid class="home" >
        <b-row class="img-wrapper">
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
            </b-col>
        </b-row>     
    </b-container>
</template>
<script>
export default {
    data(){
        return{
            foto:[
                
            ]
        }
    }
}
</script>
<style scoped>
    .home{
        height: 100%;
        width: 100%;
    }
    .wrap{
        margin: 0px;
        padding: 0px;
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        opacity: 0.35;
        z-index: 5;
    }
    .img-wrapper{
        /* background-color: tomato; */
        position: absolute;
        width:  100%;
        height: 100%;
        z-index: 3000
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
</style>