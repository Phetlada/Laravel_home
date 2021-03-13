<template>
  <div class="container-fluid">
    <div class="card" style="width: auto height: auto">
      <a href="#" class="btn btn-success">ปฏิทินการฝึกอบรม</a>
      <div class="card-body" style="">
        <div class="googleCalendar">
          <iframe
            src="https://calendar.google.com/calendar/embed?title=Put%20your%20Title%20here&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=8d3fc8l9g04n7r9im45fsn08ak%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FNew_York"
            style="border-width: 0"
            width="800"
            height="200"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.googleCalendar{
  position: relative;
  height: 50%;
  width: 100%;
  padding-bottom: 50%;
}
.googleCalendar iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
}
</style>