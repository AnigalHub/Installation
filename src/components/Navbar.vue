<template>
    <b-navbar id="Nav" class="navbar-expand-xl sticky-top" toggleable>
        <b-container>
            <b-navbar-brand href="#Home" @click="scrollToId">
                <component :is="svg"/><span class="description_name">{{name_company}}</span>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" class="justify-content-end" is-nav v-model="isExpanded">
                <b-navbar-nav>
                    <b-nav-item @click="scrollToId" href="#About">О нас</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Directions">Направления</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Advantages">Преимущества</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Licenses">Лицензии</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Services">Услуги</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Contacts">Контакты</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    import Favicon from "./svg/favicon";
    import information from "../../public/documents/information.json";

    export default {
        name: "navbar",

        data(){
            return{
                name_company: information.name_company,
                isExpanded: false,
                svg:Favicon,
            }
        },
        methods:{
            scrollToTop(){
                window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
            },
            scrollToId(event){
                let offsetY = 20;
                if(this.isExpanded){
                    let nav = document.getElementById(("Nav"));
                    let bounds =  nav.getBoundingClientRect();
                    offsetY = bounds.height;
                }
                let element = document.getElementById(event.target.hash.replace("#", ""));
                window.scrollTo({top: element.offsetTop - offsetY, left: 0, behavior: 'smooth'});
                event.preventDefault();
            }
        }
    }
</script>

<style scoped lang="scss">
    /*текст при раскрытом меню в мобильном варианте*/
    .navbar-light .navbar-toggler{
        color: #3798c5;
    }
    /*меню*/
    .navbar-nav{
        margin-bottom: 0 !important;
    }
    /*блок под логотип(картинка, название компании, что за компания(производственная))*/
    .navbar-brand{
        padding-top: 0.2rem !important;
        padding-bottom: 0.2rem !important;
    }
    /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
    .navbar{
        background: #040B11 !important;
        background-size:cover;
        border-bottom: 5px #8792a5 !important;
        padding: 5px 10%;
        /*пункты списка*/
        li{margin-bottom: 0 !important;}
        /*svg*/
        svg{
            width: 40px;
        }
    }
    /*все кнопки в меню*/
    .nav-link{
        color: rgb(112 112 112) !important;
        padding-right: .9rem !important;
        padding-left: .9rem !important;
        font-family: 'Tenor Sans', sans-serif;
        font-size: 1.3rem ;
        /*при наведении*/
        &:hover{
            color: white !important;
        }
    }
    /*надпись "производственная компания" в логотипе*/
    .description_name{
        font-family: 'Tenor Sans', sans-serif;
        color: #8792a5;
        padding-top: 30px;
    }
    @media screen and (min-width: 992px) and (max-width: 1400px){
        /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
        .navbar{
            padding: 5px 5%;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 992px){
        /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
        .navbar{
            padding: 5px 2%;
        }
    }
    /*АДАПТИВНОСТЬ*/
    @media screen and (max-width: 768px){
        /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
        .navbar{
            padding: 5px 0;
            /*svg*/
            svg{
                width: 30px;
            }
        }
        /*все кнопки в меню*/
        .nav-link{
            font-size: 1.15rem;
            padding: 0.35rem 1rem !important;
        }
    }
    @media screen and (max-width: 500px){
        /*все кнопки в меню*/
        .nav-link{
            font-size: 1rem !important;
            padding: 0.35rem 1rem !important;
        }
    }
    @media screen and (max-width: 300px){
        /*svg*/
        .navbar svg{
            width: 20px;
        }
        /*надпись "производственная компания" в логотипе*/
        .description_name{
            font-size: 1rem !important;
        }
    }
</style>