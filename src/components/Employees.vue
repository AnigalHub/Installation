<template>
    <div id="Employees">
        <b-container>
            <div class="flex-container">
                <div class="text employee" v-for="(employee, index) in Employees" :key="index">
                    <component :is="employee.svg"/>
                    <p><span>{{employee.name}}</span><br/>{{employee.text}}</p>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import EducationSvg from "@/components/svg/employees/EducationSvg";
    import AttestationSvg from "@/components/svg/employees/AttestationSvg";
    import SlavsSvg from "@/components/svg/employees/SlavsSvg";

    export default {
        name: "Employees",
        data() {
            return {
                Employees:[
                    {svg:EducationSvg,name:"Работники с высшим образованием",text:"У нас работают сотрудники только с высшим образованием."},
                    {svg:AttestationSvg, name:"Аттестация каждые полгода",text:"Каждые полгода все сотрудники проходят подготовку и аттестацию в учебном центре."},
                    {svg:SlavsSvg, name:"Только славяне",text:"В компании работают только славяне. Каждый из них дорожит своей репутацией и имеет профессиональную подготовку."},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>