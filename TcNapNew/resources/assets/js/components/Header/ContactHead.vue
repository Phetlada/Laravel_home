<template>
<!-- Carousel Wrapper -->
<div
 id ="carousel-example-1z"
 class ="carousel slide carousel-fade z-depth-1-half"
 data-ride = "carousel"
>
<!-- Indicators -->
<ol class="carousel-indicators">
    <li
    data-target="#carousel-example-1z"
    data-slide-to = "0"
    class="active"
    ></li>
    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
</ol>
<!--/.Indicators -->
<!--Slides -->
<div class="carousel-inner" role="listbox">
    <!--First slide-->
    <div class="carousel-item active">
        <img  class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide" />
        </div>
        <!--/First slide-->
        <!--Secound slide-->
        <div class="carousel-item">
            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" alt="Second slide" />
        </div>
        <!--/second slide -->
        <!-- Third slide -->
        <div class="carousel-item">
            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide" />
        </div>
        <!--/Third slide -->
    </div>
    <!--/.Slides-->
    <!--Controls-->
    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
        <span class="carousel-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    <!--./Controls -->
</div>
 </template>
 <style scoped>
     .carousel-indicators li {
         display: inline-block;
         width: 12px;
         height: 12px;
         margin: 5px;
         text-indent: 0;
         cursor: pointer;
         border: none;
         border-radius: 50%;
         background-color: #afafb4;
         /*box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.5);*/
     }
     .carousel-indicators .active{
         width: 12px;
         height: 12px;
         margin: 5px;
         background-color: #ffffff;
     }
 </style>