<template>
  <div class="bg-image">
    <div class="content">
      <div class="header-content">
        <div>
          <h1>Welcome To The Movie Review</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </br>
          <router-link class="btn default-btn" to="/register">GET STARTED</router-link>
        </div>
        <img
          class="header-img"
          alt="Header Image"
          src="../assets/placeholder-img.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
//Notes:
</script>

<style>
.bg-image {
  background-image: url(../assets/movie-bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.header-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  padding: 75px 40px;
  text-align: left;
  color: #ffffff;
}
.header-img {
  width: 400px;
}
</style>
