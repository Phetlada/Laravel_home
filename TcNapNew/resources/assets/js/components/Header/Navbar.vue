<template>
  <div class="container-fluid">
      
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav container-fluid">
            <li class="nav-item active ">
                <router-link to="/home" class="nav-item nav-link">หน้าหลัก<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item"> <router-link to="/" class="nav-item nav-link">คู่มือและเอกสาร</router-link></li>
            <li class="nav-item"> <router-link to="/" class="nav-item nav-link">แบบสอบถาม</router-link></li>
            <li class="nav-item"> <router-link to="/" class="nav-item nav-link">ปฏิทินฝึกอบรม</router-link></li>
            <li class="nav-item"> <router-link to="/" class="nav-item nav-link">ข่าวสารและกิจกรรม</router-link></li>
            <li class="nav-item"> <router-link to="/" class="nav-item nav-link">แจ้งปัญหา</router-link></li>
            <li class="nav-item"> <router-link to="/" class="nav-item nav-link">ติดต่อเรา</router-link></li>
            <li class="nav-item"> <router-link to="/" class="nav-item nav-link">เข้าสู่ระบบ</router-link></li>
            <li class="nav-item"> <router-link to="/" class="nav-item nav-link">สมัครสมาชิก</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>