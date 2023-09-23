<template>
    <div id="About">
        <b-container>
            <b-row>
                <b-col cols="6">
                    <img src="./../../public/about1.png" alt="about1">
                    <img src="./../../public/about2.png" alt="about2">
                </b-col>
                <b-col>
                    <p>Компания <span>{{short_name_company}} </span> специализируется на строительно-монтажных и
                        пусконаладочных работах систем.</p>
                    <p>На сегодняшний день в компании работает свыше 2000 квалифицированных сотрудников разных специализаций.</p>
                    <Employees/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import information from '../../public/documents/information.json';
    import Employees from "@/components/Employees";

    export default {
        name: 'About',
        components: {Employees},
        data(){
            return{
                short_name_company: information.short_name_company,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>