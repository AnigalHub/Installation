<template>
    <div id="Directions">
        <b-container>
            <h2>Основные направления работы компании</h2>
            <b-row>
                <b-col v-for="(directions, index) in Directions" :key="index">
                    <img :src="directions.src" :alt="directions.alt">
                    <ul>
                        <li v-for="item in directions.values" :key="directions.index">{{item.text}}</li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Directions",
        data(){
            return{
                Directions:[
                    {
                        src:'./directions1.jpg',
                        alt:'ГОиЧС',
                        values:[
                            {text:"Оповещения населения (ГОиЧС)",},
                            {text:"Оповещения и управления эвакуацией (СОУЭ)",},
                            {text:"Пожарные сигнализации (СПС, АПС)",},
                            {text:"Проводное радиовещание (РСО, РАСЦО)",},
                        ]
                    },
                    {
                        src:'./directions2.jpg',
                        alt:'охранные_комплексы',
                        values:[
                            {text:"Каналы связи (оптические, электрические, беспроводные)",},
                            {text:"Видеонаблюдения (СОТ, Безопасный регион, Безопасный город)",},
                            {text:"Дератизационные системы (ОЗДС)",},
                            {text:"Охранные комплексы и различный мониторинг",},
                        ]
                    },
                    {
                        src:'./directions3.jpg',
                        alt:'контроль_учета',
                        values: [
                            {text:"Контроль учета электроэнергии (АСКУЭ)",},
                            {text:"Контроль и управления доступом (СКУД)",},
                            {text:"Управления и диспетчеризация инженерных систем (АСУД)",},
                            {text:"Электрические сети и установки (Бытовые и промышленные до 220КВ)",},
                        ]
                    }

                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>