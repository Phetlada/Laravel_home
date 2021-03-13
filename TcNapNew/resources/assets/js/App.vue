<template>
  <div class="container-fluid">
    <Banner/>
    <Navbar/>
    <Footer/>
  </div>
</template>
<script>
//import ContactHeader from "./components//ContactHead.vue";
import Banner from "./components/Header/Banner.vue";
import Navbar from "./components/Header/Navbar.vue";
import Footer from "./components/Footer/Footer.vue"
export default {
  name: "app",
  components: {
    Navbar,
    Banner,
    Footer,
  },
  mounted: function () {
    $(".navbar a").on("click", function () {
      $(".navbar").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });
  },
};
</script>
