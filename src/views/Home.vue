<template>
    <b-container fluid class="home" >
        <b-row class="btn-wrapper">
            <b-col sm="12" class="text-center" align-self="center" align-h="center">
                <div style="cursor:pointer;" class="task mb-3">TURN ON THE LIGHT</div>
                <b-form-checkbox style="color: red; cursor:pointer" size="lg" v-model="checked"  name="check-button" switch>
                </b-form-checkbox>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
      return {
        checked: false
      }
    },
    watch:{
        checked:{
            immediate: true,
            handler(val){
                if (val== true){
                    setTimeout(()=>{
                        this.$router.push('/hbd')    
                    },1000)
                    
                }
                
            }
        }
    },
  }
</script>

<style scoped>
    .home{
        height: 100%;
        width: 100%;
    }
    .btn-wrapper{
        background: #000000;
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .task{
        color: #FFFFFF;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
    }
</style>