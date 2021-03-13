<template>
  <div class="container-fluid" >
  <div class="card" style="width: auto">
    <a href="#" class="btn btn-success" bgcolor="#2DA888">ข่าวสารและกิจกรรม</a>
    <div class="card-img-top">
      <ContactHeader/>
    </div>
  </div>
  </div>
</template>
<script> 
import ContactHeader from "../Header/ContactHead.vue";
export default {
 
  name: "ActiivityCard",
  components: {
    ContactHeader
  },
};
</script>
<style>

</style>