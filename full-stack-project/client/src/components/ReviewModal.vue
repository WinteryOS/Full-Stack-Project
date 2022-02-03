<template>
  <form>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header bold">
          <slot name="header">LEAVE A REVIEW </slot>
          <button type="button" class="x-btn btn-close" @click="close">
            X
          </button>
        </header>
        <section class="modal-body">
          <slot name="body">
            <textarea
              v-model="form.review"
              maxlength="100"
              placeholder="Maximum of 100 characters"
            ></textarea>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <star-rating v-model="form.rating" :star-size="35"></star-rating>
          </slot>
          <div style="margin: 15px 0px">
            <button type="button" class="btn confirm-btn" @click="submit">
              SUBMIT
            </button>
          </div>
        </footer>
      </div>
    </div>
  </form>
</template>

<script>
import StarRating from "vue-star-rating";
import axios from "axios";
export default {
  name: "Modal",
  data() {
    return {
      form: {
        rating: 0,
        review: "",
        movieId: "",
        username: "",
      },
    };
  },
  components: {
    StarRating,
  },
  methods: {
    submit() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.form.username = user.username;
      this.form.movieId = this.$route.params.id;
      axios
        .post("http://localhost:9000/api/review", this.form)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
textarea {
  width: 350px;
  resize: none;
  height: 100px;
  border: none;
  padding: 10px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
textarea:focus {
  outline: none !important;
  border: 2px solid #cccccc;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #000000;
  justify-content: space-between;
  padding: 15px;
  text-align: center;
}

.modal-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #cf222e;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
