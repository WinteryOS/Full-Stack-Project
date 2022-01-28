<template>
  <form>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> Leave A Review </slot>
          <button type="button" class="btn-close" @click="close">x</button>
        </header>
        <section class="modal-body">
          <slot name="body">
            <textarea
              v-model="form.review"
              placeholder="add multiple lines"
            ></textarea>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <star-rating v-model="form.rating"></star-rating>
          </slot>
          <button type="button" class="btn-green" @click="close">
            Submit/Close
          </button>
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
    close() {
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
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
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
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
