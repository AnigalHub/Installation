<template>
    <div id="Contacts">
        <b-container>
            <h2>Свяжитесь с нами!</h2>
            <p>Мы проконсультируем вас по нашим услугам, подберем мастеров, согласуем удобное для вас время для проведения работ, и ответим на любой ваш вопрос.</p>
            <div class="flex-container">
                <div v-for="(contact, index) in Contacts" class="contacts" :key="index">
                    <a :href="contact.href" :target="contact.target">
                        <component :is="contact.svg"/>
                        <p><b>{{contact.name}}</b><br/>{{contact.description}}</p>
                    </a>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import CallSvg from "./svg/contacts/CallSvg";
    import MailSvg from "./svg/contacts/MailSvg";
    import LocationSvg from "./svg/contacts/LocationSvg";
    import information from '../../public/documents/information.json';
    import ClockSvg from "@/components/svg/contacts/ClockSvg";
    export default {
        name: "Contacts",
        data() {
            return {
                Contacts: [
                    {
                        name:'Телефон',
                        description:information.phone,
                        svg:CallSvg,
                        href:'tel:' + information.phone,
                        target:'_self',
                    },
                    {
                        name:'Почта',
                        description:information.mail,
                        svg:MailSvg,
                        href:'mailto:' + information.mail,
                        target:'_self',
                    },
                    {
                        name:'Часы работы',
                        description:information.clock,
                        svg:ClockSvg,
                    },
                    {
                        name:'Адрес',
                        description:information.address,
                        svg:LocationSvg,
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>