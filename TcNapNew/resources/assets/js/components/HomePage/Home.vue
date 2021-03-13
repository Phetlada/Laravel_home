<template>
  <div class="container-fluid bg-intropase" >
    <Backg/>
    <div class="row coloract" alt="Responsive image">
      <div class="col-sm-4 coloract"><DocCard /></div>
      <div class="col-sm-4 coloract"><QuestionCard/></div>
      <div class="col-sm-4"><LoginCard/></div>

      
    </div>
    <div class="row coloract" alt="Responsive image">
      <div class="col-sm-8"><ActivityCard/></div>
      <div class="col-sm-4"><ReportCard/><CalenderCard/></div>
    </div>
  </div>
</template>
<script>
import DocCard from "./DocCard.vue";
import ActivityCard from "./ActivityCard.vue";
import CalenderCard from "./CalenderCard.vue";
import LoginCard from "./LoginCard.vue";
import QuestionCard from "./QuestionCard.vue";
import ReportCard from "./ReportCard.vue";
import Backg from "./Backg.vue";
export default {
  name: "app",
  components: {
    Backg,
      DocCard,
      ActivityCard,
      CalenderCard,
      LoginCard,
      QuestionCard,
      ReportCard
  },
};
</script>
<style scoped>
.bg-intropase {
    background-image: url('../../../image/02_Background-Inro-page2.jpg');
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
}
</style>