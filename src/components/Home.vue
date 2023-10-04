<template>
    <div id="Home">
        <div>
            <b-container>
                <h1>«{{short_name_company}}»</h1>
                <p>Комплексные услуги по проектированию и строительству многоквартирных домов и иных объектов недвижимости на территории РФ.</p>
                <button><a href="#Services">Каталог услуг<div class="shadow"></div></a></button>
            </b-container>
        </div>
    </div>
</template>

<script>
    import information from "../../public/documents/information.json";

    export default {
        name: "Home",
        data(){
            return{
                short_name_company: information.short_name_company,
            }
        }
    }
</script>

<style scoped>

</style>