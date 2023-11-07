<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <About/>
    <Directions/>
    <Advantages/>
    <Licenses/>
    <Services/>
    <Contacts/>
  </div>
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";
import Directions from "@/components/Directions";
import Advantages from "@/components/Advantages";
import Licenses from "@/components/Licenses";
import Employees from "@/components/Employees";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar,
    Contacts,
    Services,
    Employees,
    Licenses,
    Advantages,
    Directions,
    About,
    Home,
  }
}
</script>
<style>
  .modal-open {
    overflow: hidden;
  }
  /*футер модального окна*/
  .modal-footer {display: none !important;}
  /*заголовок модального окна*/
  .modal-header{
    padding: 0 0.5rem !important;
  }
  /*тело модального окна*/
  .modal-body{
    padding: 0;
  }
  /*кнопки в модальном окне*/
  .modal button{
    background: transparent !important;
  }
  @media screen and (max-width: 500px) {
    /*"крестик" - кнопка закрытия модального окна*/
    .modal-header .close {
      padding: 0.5rem 0.5rem !important;
    }
  }
</style>
<style lang="scss">
  body{
    background: #040B11 !important;
  }
  #app{
    background: #040B11 !important;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }
  /*ссылки*/
  a{
    text-decoration: none !important;
  }
  /*контейнер, который включает в себя повтор блоков*/
  .flex-container{
    display: flex;
    flex-wrap: wrap;
  }
  /*контейнер на блоки посередине экрана*/
  .container{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  /*картинки на всем сайте*/
  img{
    width: 100%;
    height: auto;
  }
  /*параграф, пункты списка, ссылки*/
  p, li, a{
    color: rgba(255, 255, 255, 0.65) !important;
  }
  /*заголовки*/
  h1{
    padding: 12% 0 1.5%;
    font-size: 3.25rem !important;
    line-height: 3.8rem;
    text-transform: uppercase;
    text-align: center;
    color: rgba(255, 255, 255, 0.75) !important;
    font-family: 'Tenor Sans', sans-serif;
  }
  h2{
    font-family: 'Source Serif 4', serif;
    font-size: 1.9rem !important;
    padding-bottom: 20px;
    color: #088eaf !important;
  }
  /*параграф, пункты списка, таблицы*/
  p, li, table{
    font-family: 'Source Serif 4', serif;
    font-size: 1.2rem;
    line-height:1.9rem;
  }
  /*компоненты - Главная, Услуги (кнопки)*/
  #Home button, #Services button{
    font-size: 1.2rem !important;
    line-height: 2.3rem;
    font-weight: 500;
    border-radius: 0;
    padding: .5% 1.2% 1.2%;
    transform: skew(-15deg);
    background: rgba(8, 142, 175, 0.7);
    color: rgba(255, 255, 255, 0.75);
    border: none;
    height: 55px;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    &:hover{
      border: 1px solid rgba(255, 255, 255, 0.75);
      .shadow{
        display: none;
      }
    }
  }
  /*обводка кнопок*/
  .shadow{
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.75);
    top: -15%;
    left: 6.7%;
    transform: skew(-2deg);
    height: 55px;
  }
  /*компонент - Главная*/
  #Home{
    padding-bottom: 5%;
    background: url("../public/bg.png") no-repeat;
    background-size: 100% 100%;
    /*параграф*/
    p{
      width: 55%;
      font-size: 1.35rem;
      margin: 0 auto;
      text-align: center;
      color: rgba(255, 255, 255, 0.75) !important;
    }
    /*кнопоки*/
    button{
      margin: 4% 20% 3% 40%;
      width: 230px;
    }
    /*обводка кнопок*/
    .shadow{
      width: 230px;
    }
  }
  /*компонент - О нас*/
  #About{
    padding: 4% 0 3%;
    /*выделение важного*/
    span{
      color: #088eaf;
      font-size: 1.25rem;
      font-weight: 600;
    }
    /*картинки*/
    img{
      width: 300px;
      padding: 3% 3.5%;
      /*первая картинка*/
      &:first-child{
        margin-top: -8%;
      }
      /*последняя картинка*/
      &:last-child{
        padding-top: 14%;
      }
    }
  }
  /*компонент - Сотрудники*/
  #Employees{
    /*контейнер*/
    .container{
      padding: 0 !important;
    }
    /*заголовки*/
    h2{
      text-align: center;
    }
    /*картинки*/
    img{
      padding-top: 2%;
    }
    /*контейнер, который включает в себя повтор блоков*/
    .flex-container{
      padding-top: 1.5%;
    }
    /*блоки под информацию о сотрудниках*/
    .employee{
      width: 100%;
      /*выделение главного*/
      span{
        color: #088eaf;
        font-size: 1.25rem;
        font-weight: 600;
      }
      /*svg*/
      svg{
        float: left;
        width: 45px;
        margin: 1.8%;
      }
    }
  }
  /*компонент - Направления*/
  #Directions{
    padding: 2.5% 0;
    background: rgba(7, 139, 172, 0.04);
    /*заголовки*/
    h2{
      text-align: center;
    }
    /*картинки*/
    img{
      border: 3px solid #040B11;
      margin-bottom: 4%;
    }
    /*бутстрап сетка*/
    .col{
      padding-top: 1%;
      transform: skew(-2.5deg);
      margin: 1.3%;
      border: 1px solid rgba(8, 142, 175, 0.56);
    }
  }
  /*компонент - Преимущества*/
  #Advantages{
    padding: 2.5% 0 4%;
    /*заголовки*/
    h2{
      margin-top: 8%;
    }
    /*картинки*/
    img{
      width: 51.5%;
      float: left;
      margin-top: 3%;
      padding: 3% 3%;
      /*первая картинка*/
      &:first-child{
        margin-top: 7%;
        margin-left: -5%;
      }
      /*последняя картинка*/
      &:last-child{
        margin-top: -2%;
        margin-left: 2%;
      }
    }
    /*бутстрап сетка*/
    .col-5{
      padding: 0 !important;
    }
    /*бутстрап сетка*/
    .col{
      padding-left: 2.5%;
    }
    /*пункты списка*/
    li{
      font-size: 1.25rem;
      line-height:2.65rem;
    }
  }
  /*компонент - Лицензии*/
  #Licenses{
    padding: 2% 0 2%;
    background: rgba(7, 139, 172, 0.04);
    /*заголовки*/
    h2{
      text-align: center;
    }
    /*выделение главного - при наведении*/
    td span:hover{
      color: #088eaf !important;
      cursor: pointer !important;
    }
    /*отступы в таблице*/
    .table > :not(caption) > * > *, span{
      background: transparent !important;
      color: rgba(255, 255, 255, 0.68) !important;
    }
    /*таблица*/
    table{
      /*строки таблицы*/
      tr{
        border-bottom: .26px solid rgba(8, 142, 175, 0.66) !important;
      }
      /*столбцы таблицы*/
      td{
        padding: 1% 0;
      }
      /*первый столбец таблицы*/
      tr td:first-child{
        width: 61%;
      }
      /*svg*/
      svg{
        width: 23px;
        float: left;
      }
    }
    /*выделение главного*/
    span{
      float: left;
      padding: 0 10px;
    }
    /*svg*/
    svg{
      width: 100%;
      padding: 0;
    }
  }
  /*компонент - Услуги*/
  #Services{
    padding: 5% 0 2.5%;
    /*картинки*/
    img{
      width: 85%;
      height: 42%;
      /*первая картинка*/
      &:first-child{
        margin-bottom: 6%;
      }
      /*последняя картинка*/
      &:last-child{
        margin-left: 15%;
      }
    }
    /*кнопки*/
    button{
      margin-top: 3.5%;
      padding-bottom: 2.5%;
      padding-top: 1%;
    }
    /*обводка кнопок, кнопки*/
    .shadow, button{
      width: 300px;
    }
    /*пункты списка*/
    li{
      font-size: 1.25rem;
      line-height:2.7rem;
    }
    /*бутстрап сетка*/
    .col{
      padding-left: 5%;
    }
  }
  /*компонент - Контакты*/
  #Contacts{
    background: rgba(7, 139, 172, 0.04);
    padding: 2% 0;
    /*блоки под информацию о контактах*/
    .contacts{
      width: 48%;
      margin: 5px;
    }
    /*жирный шрифт*/
    b{
      color: #088eaf;
    }
    /*svg*/
    svg{
      margin-right: 1%;
      padding: 10px;
      width: 60px;
      float: left !important;
    }
  }

  /*АДАПТИВНОСТЬ*/
  @media screen and (max-width: 500px){
    /*заголовки*/
    h1{
      padding: 10% 0 1.5%;
      font-size: 2rem !important;
      line-height: 3rem;
    }
    h2{
      font-size: 1.2rem !important;
      padding-bottom: 10px;
    }
    /*параграф, пункты списка, таблицы*/
    p, li, table{
      font-size: .9rem !important;
      line-height: 1.15rem;
    }
    /*список*/
    ul{
      margin-bottom: 0 !important;
    }
    /*параграф*/
    p{
      margin-bottom: .5rem !important;
    }
    /*компоненты - Главная, Услуги (кнопки)*/
    #Home button, #Services button{
      font-size: .9rem !important;
      padding-top: 0 !important;
    }
    /*компоненты - Главная, Услуги (обводка кнопок, кнопки)*/
    #Home .shadow, #Home button, #Services .shadow, #Services button{
      height: 35px;
    }
    /*компонент - Главная*/
    #Home{
      padding-top: 5%;
      padding-bottom: 10%;
      /*параграф*/
      p{
        width: 95%;
      }
      /*кнопки*/
      button{
        margin: 4% 20% 3% 24%;
      }
      /*обводка кнопок, кнопки*/
      .shadow, button{
        width: 150px;
      }
    }
    /*компонент - О нас*/
    #About{
      /*бутстрап сетка*/
      .row{
        flex-direction: column-reverse;
      }
      /*бутстрап сетка*/
      .col-6{
        width: 100%;
        /*блок*/
        div{
          padding-top: 7%;
          padding-left: 3%;
        }
      }
      /*картинки*/
      img{
        width: 46%;
        padding: 4% 4.5% 2%;
        /*первая картинка*/
        &:first-child{
          margin-top: 0;
        }
        /*последняя картинка*/
        &:last-child{
          padding-top: 4%;
        }
      }
    }
    /*компонент - Направления*/
    #Directions{
      /*бутстрап сетка*/
      .row{
        flex-direction: column;
        margin: 0 1%;
      }
      /*бутстрап сетка*/
      .col{
        padding: 10px;
      }
      /*картинки*/
      img{
        float: left;
        width: 100%;
        height: 145px !important;
        margin-top: 2%;
        margin-bottom: 2%;
      }
      /*список*/
      ul{
        margin-left: -5%;
      }
    }
    /*компонент - Сотрудники*/
    #Employees{
      /*блоки под информацию о сотрудниках*/
      .employee{
        height: 80px;
        /*svg*/
        svg{
          margin: 1.5% 1.5% 6%;
          width: 35px;
        }
        /*выделение главного*/
        span{
          font-size: 1rem;
          letter-spacing: -.2px;
        }
      }
    }
    /*компоненты - Преимущества*/
    #Advantages{
      /*бутстрап сетка*/
      .row{
        flex-direction: column;
      }
      /*заголовки*/
      h2{
        margin-top: 0;
      }
      /*бутстрап сетка*/
      .col-6{
        width: 100%;
        padding-top: 3%;
      }
      /*картинки*/
      img{
        width: 45%;
        padding-bottom: 0;
        /*первая картинка*/
        &:first-child{
          margin-top: 2%;
          margin-left: 3%;
        }
      }
    }
    /*компонент - Лицензии*/
    #Licenses{
      /*отступы в таблице*/
      .table > :not(caption) > * > *{
        padding: 0.35rem 0.35rem !important;
      }
      /*первый столбец таблицы*/
      table tr td:first-child{
        width: 100%;
      }
      /*svg в таблице*/
      table svg{
        margin-left: 0;
      }
      /*выделения важного в таблице*/
      table span{
        display: none;
      }
      /*бутстрап сетка*/
      .row{
        flex-direction: column-reverse;
      }
      /*бутстрап сетка*/
      .col-5{
        width: 100%;
      }
      /*svg*/
      svg{
        width: 50%;
        margin-left: 25%;
        margin-top: 0;
      }
    }
    /*компонент - Услуги*/
    #Services{
      padding: 2% 0 2%;
      /*бутстрап сетка*/
      .row{
        flex-direction: column-reverse;
      }
      /*картинки*/
      img{
        width: 45%;
        /*последняя картинка*/
        &:last-child{
          margin-left: 3%;
        }
      }
      /*бутстрап сетка*/
      .col-5{
        width: 100%;
        padding-left: 6%;
        margin-top: 4%;
      }
      /*кнопки*/
      .btn{
        margin-left: 3%;
      }
      /*обводка кнопок, кнопки*/
      button, .shadow{
        width: 225px;
      }
    }
    /*компоненты - Преимущества, Услуги*/
    #Advantages, #Services{
      /*пункты списка*/
      li{
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
    /*компоненты - Контакты*/
    #Contacts{
      /*блоки под информацию о контактах*/
      .contacts{
        width: 100%;
      }
      /*svg*/
      svg{
        width: 45px;
      }
    }
  }
  @media screen and (min-width: 500px) and (max-width: 768px){
    /*заголовки*/
    h1{
      padding: 10% 0 1.5%;
      font-size: 2.4rem !important;
      line-height: 3rem;
    }
    h2{
      font-size: 1.3rem !important;
      padding-bottom: 10px;
    }
    /*параграф, пункты списка, таблицы*/
    p, li, table {
      font-size: 1rem !important;
      line-height: 1.2rem;
    }
    /*список*/
    ul{
      margin-bottom: 0 !important;
    }
    /*параграф*/
    p{
      margin-bottom: .5rem !important;
    }
    /*компоненты - Главная, Услуги (кнопки)*/
    #Home button, #Services button{
      font-size: 1rem !important;
    }
    /*компоненты - Главная, Услуги (обводка кнопок, кнопки)*/
    #Home .shadow, #Home button, #Services .shadow, #Services button{
      height: 45px;
    }
    /*компонент - Главная*/
    #Home{
      padding-top: 5%;
      padding-bottom: 10%;
      /*параграф*/
      p{
        width: 75%;
      }
      /*кнопки*/
      button {
        margin: 4% 20% 3% 25%;
      }
      /*обводка кнопок, кнопки*/
      .shadow, button{
        width: 200px;
      }
    }
    /*компонент - О нас*/
    #About{
      /*бутстрап сетка*/
      .row{
        flex-direction: column-reverse;
      }
      /*бутстрап сетка*/
      .col-6{
        width: 100%;
        /*блок*/
        div{
          padding-top: 7%;
          padding-left: 16%;
        }
      }
      /*картинки*/
      img{
        width: 160px;
        padding: 4% 4.5% 2%;
        /*последняя картинка*/
        &:last-child{
          padding-top: 4%;
        }
      }
    }
    /*компонент - Направления*/
    #Directions{
      /*бутстрап сетка*/
      .row{
        flex-direction: column;
        margin: 0 1%;
      }
      /*бутстрап сетка*/
      .col{
        padding: 10px;
      }
      /*картинки*/
      img{
        float: left;
        width: 200px;
        margin-top: 2%;
        margin-bottom: 1%;
      }
      /*список*/
      ul{
        margin-left: 45%;
      }
    }
    /*компонент - Сотрудники*/
    #Employees{
      /*блоки под информацию о сотрудниках*/
      .employee{
        height: 65px;
        /*svg*/
        svg{
          margin: 1.5%;
          width: 40px;
        }
        /*выделение главного*/
        span{
          font-size: 1.15rem;
          letter-spacing: -.2px;
        }
      }
    }
    /*компоненты - Преимущества*/
    #Advantages{
      /*бутстрап сетка*/
      .row{
        flex-direction: column;
      }
      /*заголовки*/
      h2{
        margin-top: 0;
      }
      /*бутстрап сетка*/
      .col-6{
        width: 100%;
      }
      /*картинки*/
      img{
        width: 38%;
        padding-bottom: 0;
        /*первая картинка*/
        &:first-child {
          margin-top: 2%;
          margin-left: 12%;
        }
      }
    }
    /*компонент - Лицензии*/
    #Licenses{
      /*отступы в таблице*/
      .table > :not(caption) > * > *{
        padding: 0.35rem 0.35rem !important;
      }
      /*первый столбец таблицы*/
      table tr td:first-child{
        width: 78%;
      }
      /*svg в таблице*/
      table svg{
        margin-left: 0;
      }
      /*выделения важного в таблице*/
      table span{
        display: none;
      }
      /*бутстрап сетка*/
      .row{
        flex-direction: column-reverse;
      }
      /*бутстрап сетка*/
      .col-5{
        width: 100%;
      }
      /*svg*/
      svg{
        width: 50%;
        margin-left: 25%;
        margin-top: 0;
      }
    }
    /*компонент - Услуги*/
    #Services{
      padding: 2% 0 2%;
      /*бутстрап сетка*/
      .row{
        flex-direction: column-reverse;
      }
      /*картинки*/
      img{
        width: 42%;
        /*последняя картинка*/
        &:last-child{
          margin-left: 5%;
        }
      }
      /*бутстрап сетка*/
      .col-5{
        width: 100%;
        margin-left: 6%;
        margin-top: 4%;
      }
      /*кнопки*/
      .btn{
        margin-left: 3%;
      }
    }
    /*компоненты - Преимущества, Услуги*/
    #Advantages, #Services{
      /*пункты списка*/
      li{
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
    /*компоненты - Контакты*/
    #Contacts{
      /*блоки под информацию о контактах*/
      .contacts{
        width: 100%;
      }
      /*svg*/
      svg{
        width: 50px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px){
    /*заголовки*/
    h1{
      padding: 10% 0 1.5%;
      font-size: 2.8rem !important;
      line-height: 3rem;
    }
    h2{
      font-size: 1.5rem !important;
      padding-bottom: 10px;
    }
    /*параграф, пункты списка, таблицы*/
    p, li, table {
      font-size: 1rem !important;
      line-height: 1.35rem;
    }
    /*параграф*/
    p{
      margin-bottom: .5rem !important;
    }
    /*компоненты - Главная, Услуги (кнопки)*/
    #Home button, #Services button{
      font-size: 1.1rem !important;
    }
    /*компоненты - Главная, Услуги (обводка кнопок, кнопки)*/
    #Home .shadow, #Home button, #Services .shadow, #Services button{
      height: 45px;
    }
    /*компонент - Главная*/
    #Home{
      /*параграф*/
      p{
        width: 60%;
      }
      /*кнопки*/
      button {
        margin: 4% 20% 3% 35%;
      }
      /*обводка кнопок, кнопки*/
      .shadow, button{
        width: 200px;
      }
    }
    /*компонент - О нас*/
    #About{
      /*бутстрап сетка*/
      .row{
        flex-direction: column-reverse;
      }
      /*бутстрап сетка*/
      .col-6{
        width: 100%;
        /*блок*/
        div{
          padding-left: 16%;
        }
      }
      /*картинки*/
      img{
        width: 220px;
        padding: 4% 4.5%;
      }
    }
    /*компонент - Направления*/
    #Directions{
      /*бутстрап сетка*/
      .row{
        flex-direction: column;
      }
      /*картинки*/
      img{
        float: left;
        width: 200px;
        margin-bottom: 1%;
      }
      /*список*/
      ul{
        margin-left: 30%;
      }
    }
    /*компонент - Сотрудники*/
    #Employees{
      /*блоки под информацию о сотрудниках*/
      .employee{
        height: 65px;
        /*svg*/
        svg{
          margin: 1.5%;
          width: 40px;
        }
        /*выделение главного*/
        span{
          font-size: 1.15rem;
          letter-spacing: -.2px;
        }
      }
    }
    /*компоненты - Преимущества*/
    #Advantages{
      /*бутстрап сетка*/
      .col-6{
        width: 55%;
      }
      /*картинки*/
      img{
        /*первая картинка*/
        &:first-child{
          margin-top: 9%;
        }
      }
    }
    /*компоненты - Преимущества, Услуги*/
    #Advantages, #Services{
      /*пункты списка*/
      li{
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
    /*компоненты - Контакты(svg)*/
    #Contacts svg{
        width: 50px;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1200px){
    /*заголовки*/
    h1{
      padding: 10% 0 1.5%;
      font-size: 2.8rem !important;
      line-height: 3rem;
    }
    h2{
      font-size: 1.5rem !important;
      padding-bottom: 10px;
    }
    /*параграф, пункты списка, таблицы*/
    p, li, table {
      font-size: 1rem !important;
      line-height: 1.4rem;
    }
    /*параграф*/
    p{
      margin-bottom: .5rem !important;
    }
    /*компоненты - Главная, Услуги (кнопки)*/
    #Home button, #Services button{
      font-size: 1.05rem !important;
    }
    /*компоненты - Главная, Услуги (обводка кнопок, кнопки)*/
    #Home .shadow, #Home button, #Services .shadow, #Services button{
      height: 48px;
    }
    /*компонент - Главная (параграф)*/
    #Home p{
        width: 60%;
    }
    /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
    .navbar{
      padding: 5px 5%;
    }
    /*компонент - О нас (картинки)*/
    #About img{
        width: 226px;
    }
    /*компоненты - Преимущества, Услуги*/
    #Advantages, #Services{
      /*пункты списка*/
      li{
        font-size: 1.1rem;
        line-height: 1.8rem;
      }
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px){
    /*заголовки*/
    h1{
      font-size: 3rem !important;
      line-height: 3.5rem;
    }
    h2{
      font-size: 1.7rem !important;
    }
    /*параграф, пункты списка, таблицы*/
    p, li, table {
      font-size: 1.15rem !important;
      line-height: 1.7rem;
    }
    /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
    .navbar{
      padding: 5px 5%;
    }
    /*компонент - О нас (картинки)*/
    #About img{
        width: 270px;
    }
    /*компоненты - Преимущества, Услуги*/
    #Advantages, #Services{
      /*пункты списка*/
      li{
        font-size: 1.15rem;
        line-height: 2.2rem;
      }
    }
  }
</style>
