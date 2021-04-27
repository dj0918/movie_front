<template>
    <table class="title">
        <tr>
            <td colspan="3"><img class="name" src="..\assets\pic\테가박스.jpg"></td>
        </tr>
        <tr>
            <td colspan="3" class="open">개봉 영화</td>
        </tr>
        <tr>
            <td><img class="jpg" src="..\assets\pic\클레멘타인.jpg"></td>
            <td><img class="jpg" src="..\assets\pic\영웅.jpg"></td>
            <td><img class="jpg" src="..\assets\pic\성냥팔이소녀의재림.jpg"></td>
        </tr>
        <tr>
            <td colspan="3">
                <router-link to="/main" tag="button" class="tk">예매하기</router-link>
                <router-link to="/ticketing" tag="button" class="tk">예매확인</router-link>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    
}
</script>

<style>
.title{
    background-color: white;
}
.name{
    width: 250px;
}
.open{
    font-family: 'Bazzi';
    font-size: 35px;
}
.tk{
    position: relative;
    color: black;
    border-radius: 1em;
    display: inline-block;
    padding: 6px 8px 6px 8px;
    cursor: pointer;
    font-family : 'this_is_font_name';
    font-size: 17px;
}

.jpg{
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    display: inline-block;
    border : 3px solid white;
    width: 250px;
    height: 400px;
    border-radius: 1em;
}
@font-face {
    font-family: 'this_is_font_name'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    
     font-weight: normal; 
     font-style: normal;  
}
@font-face {
    font-family: 'Bazzi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>