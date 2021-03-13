<template>
  <div class="container-fluid">
    <Banner/>
    <img class = "img-fluid" src="../image/02_Background-Inro-page.jpg">
  </div>
</template>
<script>
//import ContactHeader from "./components//ContactHead.vue";
import Banner from "./components/Header/Banner.vue";
import Navbar from "./components/Header/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Banner,
  },
  mounted: function () {
    $(".navbar a").on("click", function () {
      $(".navbar").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });
  },
};
</script>
