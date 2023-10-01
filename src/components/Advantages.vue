<template>
    <div id="Advantages">
        <b-container>
            <b-row>
                <b-col>
                    <h2>Почему выбирают нас ?</h2>
                    <ul class="ul">
                        <li v-for="(advantage, index) in Advantages" :key="index"class="text">{{advantage.text}}</li>
                    </ul>
                </b-col>
                <b-col cols="6">
                    <img src="./../../public/employees2.jpg" alt="смета_проекта">
                    <img src="./../../public/employees.jpg" alt="работа_с_электричеством">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Advantages",
        data(){
            return{
                Advantages:[
                    {text:"Безупречная репутация",},
                    {text:"Лучший технадзор на рынке",},
                    {text:"Выполнение всех работ точно в срок",},
                    {text:"Личная сдача результата работы контролирующим органам",},
                    {text:'Все выполняемые работы и оказывающие услуги лицензированы',}
                ],
            }
        },
    }
</script>

<style scoped lang="scss">

</style>