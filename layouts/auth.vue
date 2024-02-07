<template>
    <div>
       <div class="auth-main">
        <!-- <div class="auth-brand">
           Btrans
        </div> -->
        <slot />
       </div>
    </div>
  </template>
  <script>
  export default {
    
      mounted(){
          
      }
  }
  </script>
  <style>
img.auth-logo {
    height: 60px;
    width: auto;
}

.auth-brand {
  text-align: center;
  padding-top: 90px
}


.log-main.container {
    margin-top: 5%;
    padding: 10%;
}

.auth-main {
    height: 100vh;
    background: rgb(255,65,111);
    background: linear-gradient(0deg, rgba(255,65,111,1) 0%, rgba(255,104,117,1) 43%, rgba(255,138,120,1) 100%);
    background: #f1f3fa;
}
.auth-input input {
    height: 48px;
    border-radius: 24px;
}


.auth-input.control.has-icons-left .icon,.auth-input .auth-input.control.has-icons-right .icon {
   
    height: 3em;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 2.5em;
    z-index: 4;
}

.auth-act-wrap {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 28px;
}


.log-button-primary {
    background: #fb1f55;
    border: none;
    color: #fff;
}


section.log-bottom {
    text-align: center;
    margin-top: 28px;
}


a.button.log-button-secondary.log-signup-button {
    color: #006064;
    border-color: #006064;
}

.log-button-secondary {
    background: transparent;
    color: #2196f3;
    border: none;
}
</style>
  