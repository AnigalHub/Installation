<template>
    <div id="Services">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="./../../public/services1.jpg" alt="строительно-монтажные_работы">
                    <img src="./../../public/services2.jpg" alt="провода_с_электричеством">
                </b-col>
                <b-col>
                    <h2>Мы предоставляем услуги</h2>
                    <ul>
                        <li v-for="(service, index) in Services" :key="index" class="text">{{service.text}}</li>
                    </ul>
                    <b-button>
                        <a>Узнать цены на виды работ</a><div class="shadow"></div></b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Services",
        data(){
            return{
                Services:[
                    {text:"Проектирование",},
                    {text:"Согласование проекта",},
                    {text:"Выполнение строительно-монтажных работ",},
                    {text:"Сдача объекта технадзору заказчика и контролирующим органам",},
                    {text:"Подготовка исполнительной документации",},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>