<template>
    <div class="p_num">
        <img class="title" src="..\assets\pic\테가박스.jpg">
        <p class="num">휴대폰번호</p>
        <input v-model="message" placeholder="01012345678" class="text">
        <div>
        <button class='tk2' @click='moveToSeat'>확인</button>
        <button class='tk2' @click='moveToMain'>취소</button>
    </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: ''
        }
    },
    methods: {
        moveToSeat () {
            if (this.message < 11) {
                alert('전화번호를 입력해주세요.')
                return
            }
            this.$router.push('/about/Seat')
        },
        moveToMain () {
            this.$router.push('/main')
        }
    }
}
</script>


<style>
.p_num{
    background-color: white;
    font-family: 'Bazzi';
    font-size: 30px;
}


.text{
    margin-bottom: 10px;
    font-family: 'twayair';
    font-size: 20px;
}

.tk2{
    position: relative;
    color: black;
    border-radius: 1em;
    cursor: pointer;
    font-family: 'SDSamliphopangche_Outline';
    font-size: 20px;
}
@font-face {
    font-family: 'Bazzi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'SDSamliphopangche_Outline';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'twayair';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twayair.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>