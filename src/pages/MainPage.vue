<template>
<div class="Movie">
    <img class="title" src="..\assets\pic\테가박스1.jpg">
    <div>
        <div>
            <div class='box1'>
                <p class="theater">1관</p>
                <img class="jpg" src="..\assets\pic\클레멘타인.jpg">
                <div class='btn'>
                    <p class="cost">1인 : 10,000원</p>
                    <router-link to="/about" tag="button" class="tk1">09:00</router-link>
                    <router-link to="/about" tag="button" class="tk1">15:00</router-link>
                    <router-link to="/about" tag="button" class="tk1">21:00</router-link>
                </div>
            </div>
            <div class='box1'>
                <p class="theater">2관</p>
                <img class="jpg" src="..\assets\pic\영웅.jpg">
                <div class='btn'>
                    <p class="cost">1인 : 8,000원</p>
                    <router-link to="/about" tag="button" class="tk1">08:30</router-link>
                    <router-link to="/about" tag="button" class="tk1">13:30</router-link>
                    <router-link to="/about" tag="button" class="tk1">18:30</router-link>

                </div>
            </div>
            <div class='box1'>
                <p class="theater">3관</p>
                <img class="jpg" src="..\assets\pic\성냥팔이소녀의재림.jpg">
                <div class='btn'>
                    <p class="cost">1인 : 9,000원</p>
                    <router-link to="/about" tag="button" class="tk1">10:00</router-link>
                    <router-link to="/about" tag="button" class="tk1">14:00</router-link>
                    <router-link to="/about" tag="button" class="tk1">18:00</router-link>
                    <router-link to="/about" tag="button" class="tk1">22:00</router-link>
                </div>
            </div>
     </div>
     </div>
</div>
</template>
<script>
export default({
    name: 'MainPage',
    methods: {
        onClickNumBtn () {
            console.log('clickEvent')
        },
        onClickConfirmBtn () {
            console.log('confirm btn')
        }
    }
})
</script>


<style>

.title{
    margin: auto;
    width: 250px;
}
.p1{ 
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 40px;
    font-weight: bolder;
    color: white;
    border: black;
    background-color: rgb(177, 42, 177);
}

.Movie{
    background-color: black;
    display : grid;
    position: relative;
    width: 100%;
    height: 100vh;

}
.con{
    position: relative;
    color: black;
    border-radius: 1em;
    padding: 6px 8px 6px 8px;
    cursor: pointer;
    bottom: 2rem;
    float: right;
}

.theater{
    font-size: 30px;
    color: white;
    font-family : 'this_is_font_name';
}

.cost{
    font-size: 20px;
    color: white;
    font-family: 'Bazzi';
}

.tk1{
    position: relative;
    color: black;
    border-radius: 1em;
    display: inline-block;
    padding: 6px 8px 6px 8px;
    cursor: pointer;
    margin-bottom: 10px;
    font-family: 'SDSamliphopangche_Outline';
    font-size: 17px;
}

.jpg{
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    border : 3px solid white;
    width: 250px;
    height: 400px;
    border-radius: 1em;
    vertical-align: middle;
}
.box1 {
    display: inline-block;
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
@font-face {
    font-family: 'SDSamliphopangche_Outline';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
