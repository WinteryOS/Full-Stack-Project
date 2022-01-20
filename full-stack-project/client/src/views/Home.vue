<template>
  <div class="home">
    <Header />
    <div class="grey-bg">
      <div class="content border-test">
        <h2>Lorem Ipsum</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          varius, purus ac tincidunt auctor, mauris ligula auctor nibh, vel
          consequat est tortor non arcu. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Proin lacinia
          elit nulla, luctus tristique ipsum posuere sit amet. Morbi enim nisl,
          tempor sit amet lacinia vel, consequat eu felis.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Header,
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
    //If token - Redirect To Movie Page
    if (this.token) {
      this.$router.push("/movieapp");
    }
  },
};
</script>

<style></style>
