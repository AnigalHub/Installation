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
  .modal-footer {display: none !important;}
  /*заголовок модального окна*/
  .modal-header{
    padding: 0 0.5rem !important;
  }
  /*тело модального окна*/
  .modal-body{
    padding: 0;
  }
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
  a{
    text-decoration: none !important;
  }
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
  p, li, a{
    color: rgba(255, 255, 255, 0.65) !important;
  }
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
  p, li, table{
    font-family: 'Source Serif 4', serif;
    font-size: 1.2rem;
    line-height:1.9rem;
  }
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
  .shadow{
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.75);
    top: -15%;
    left: 6.7%;
    transform: skew(-2deg);
    height: 55px;
  }
  #Home{
    padding-bottom: 5%;
    background: url("../public/bg.png") no-repeat;
    background-size: 100% 100%;
    p{
      width: 55%;
      font-size: 1.35rem;
      margin: 0 auto;
      text-align: center;
      color: rgba(255, 255, 255, 0.75) !important;
    }
    button{
      margin: 4% 20% 3% 40%;
      width: 230px;
    }
    .shadow{
      width: 230px;
    }
  }
  #About{
    padding: 4% 0 3%;
    span{
      color: #088eaf;
      font-size: 1.25rem;
      font-weight: 600;
    }
    img{
      width: 300px;
      padding: 3% 3.5%;
      &:first-child{
        margin-top: -8%;
      }
      &:last-child{
        padding-top: 14%;
      }
    }
   .adv{
     text-align: center;

   }
  }
  #Employees{
    h2{
      text-align: center;
    }
    img{
      padding-top: 2%;
    }
    .flex-container{
      padding-top: 1.5%;
    }
    .employee{
      width: 100%;
      span{
        color: #088eaf;
        font-size: 1.25rem;
        font-weight: 600;
      }
      svg{
        float: left;
        width: 48px;
        margin: 3.5%;
      }
    }
  }
  #Directions{
    padding: 2.5% 0;
    background: rgba(7, 139, 172, 0.04);
    h2{
      text-align: center;
    }
    img{
      border: 3px solid #040B11;
      margin-bottom: 4%;
    }
    .col{
      padding-top: 1%;
      transform: skew(-2.5deg);
      margin: 1.3%;
      border: 1px solid rgba(8, 142, 175, 0.56);

    }
  }
  #Advantages{
    padding: 2.5% 0 4%;
    img{
      width: 51.5%;
      float: left;
      margin-top: 3%;
      padding: 3% 3%;
      &:first-child{
        margin-top: 7%;
        margin-left: -5%;
      }
      &:last-child{
        margin-top: -2%;
        margin-left: 2%;
      }
    }
    .col-5{
      padding: 0 !important;
    }
    .col{
      padding-left: 2.5%;
    }
    li{
      font-size: 1.25rem;
      line-height:2.65rem;
    }
  }
  #Licenses{
    padding: 2% 0 2%;
    background: rgba(7, 139, 172, 0.04);
    h2{
      text-align: center;
      padding-bottom: 2%;
    }
    a:hover{
      color: #088eaf !important;
    }
    .table > :not(caption) > * > *, span{
      background: transparent !important;
      color: rgba(255, 255, 255, 0.68) !important;
    }
    table{

      tr{
        border-bottom: .26px solid rgba(8, 142, 175, 0.66) !important;
      }
      td{
        padding: 1% 0;
      }
      tr td:first-child{
        width: 61%;
      }
      svg{
        width: 23px;
        float: left;
      }
    }
    span{
      float: left;
      padding: 0 10px;
    }
    svg{
      width: 100%;
      padding: 0;
    }
  }
  #Services{
    padding: 5% 0 2.5%;
    img{
      width: 85%;
      height: 42%;
      &:first-child{
        margin-bottom: 6%;
      }
      &:last-child{
        margin-left: 15%;
      }
    }
    button{
      margin-top: 3.5%;
      padding-bottom: 2.5%;
      padding-top: 1%;
    }
    .shadow{
      width: 290px;
    }
    li{
      font-size: 1.25rem;
      line-height:2.7rem;
    }
    .col{
      padding-left: 5%;
    }
  }
  #Contacts {
    background: rgba(7, 139, 172, 0.04);
    padding: 2% 0;
    .contacts {
      width: 48%;
      margin: 5px;
    }
    b {
      color: #088eaf;
    }
    svg {
      margin-right: 1%;
      padding: 10px;
      width: 60px;
      float: left !important;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px){
    h1{
      padding: 10% 0 1.5%;
      font-size: 2.8rem !important;
      line-height: 3rem;
    }
    h2{
      font-size: 1.5rem !important;
    }
    p, li, table {
      font-size: 1rem !important;
      line-height: 1.4rem;
    }
    p {
      margin-bottom: .5rem !important;
    }
    #Home button, #Services button{
      font-size: 1.1rem !important;
    }
    .navbar{
      padding: 5px 5%;
    }
    #Home{
      p{
        width: 60%;
      }
      button {
        margin: 4% 20% 3% 30%;
      }
    }
    #About{
      .row{
        flex-direction: column-reverse;
      }
      .col-6{
        width: 100%;
      }
      img{
        width: 260px;
        padding: 4% 4.5%;
      }
    }
    #Directions{
      .row{
        flex-direction: column;
      }
      img {
        float: left;
        width: 200px;
      }
      ul{
        margin-left: 30%;
      }
    }
    #Employees{
      .employee svg {
        margin: 2%;
      }
    }
    #Advantages, #Services{
      li {
        font-size: 1.1rem;
        line-height: 1.8rem;
      }
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1200px){
    h1{
      padding: 10% 0 1.5%;
      font-size: 2.8rem !important;
      line-height: 3rem;
    }
    h2{
      font-size: 1.5rem !important;
    }
    p, li, table {
      font-size: 1rem !important;
      line-height: 1.4rem;
    }
    p {
      margin-bottom: .5rem !important;
    }
    #Home button, #Services button{
      font-size: 1.1rem !important;
    }
    .navbar{
      padding: 5px 5%;
    }
    #About{
      img{
        width: 226px;
      }
    }
    #Employees{
      .employee svg {
        margin: 5%;
      }
    }
    #Advantages, #Services{
      li {
        font-size: 1.1rem;
        line-height: 1.8rem;
      }
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px){
    h1{
      font-size: 3rem !important;
      line-height: 3.5rem;
    }
    h2{
      font-size: 1.7rem !important;
    }
    p, li, table {
      font-size: 1.15rem !important;
      line-height: 1.7rem;
    }
    .navbar{
      padding: 5px 5%;
    }
    #About{
      img{
        width: 270px;
      }
    }
    #Advantages, #Services{
      li {
        font-size: 1.15rem;
        line-height: 2.2rem;
      }
    }
  }
</style>
