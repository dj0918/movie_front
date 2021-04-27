<template>
    <div class="seat">
        <img class="title" src="..\assets\pic\테가박스.jpg">
        <p>좌석 선택</p>
        <div class="screen-wrapper">
            <p class="screen">Screen</p>
        </div>
        <table class="check">
      <tr v-for='row in rows' :key='row'>
        <td v-for='column in columns' :key='column'>
           <button class="btn"> {{String.fromCharCode(row + 64)}}-{{column}} </button>
        </td>
      </tr>
    </table>            
        <div>
        <router-link to="/" tag="button" class="tk3">확인</router-link>
        <router-link to="/about" tag="button" class="tk3">취소</router-link>
</div>
</div>
</template>

<script>
export default ({
  data () {
    return {
      rows: 12,
      columns: 13
    }
  },
  })
</script>

<style>
.seat{
    background-color: white;
    font-family: 'Bazzi';
    font-size: 30px;
}
.screen{
    border: 1px solid black;
}
.screen-wrapper {
    width: fit-content;
    margin: 0 auto;
}
.tk3{
    margin-top: 20px;
    position: relative;
    color: black;
    background-color: white;
    border-radius: 1em;
    cursor: pointer;
    font-family: 'SDSamliphopangche_Outline';
    font-size: 25px;
}
.check{
    margin: 0 auto;
}
.btn{
    border-radius: 1em;
    font-family: 'Bazzi';
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
</style>