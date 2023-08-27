<template>
  <div class="container">
    <div class="main">
      <form @submit.prevent="submitForm" action="" class="main__form">
        <input
          type="text"
          class="main__form-input"
          placeholder="Введите имя пользователя"
          v-model="findUsers"
        />
        <button class="main__form-btn">НАЙТИ</button>
      </form>
      <div class="main__user">
        <div class="main__user-left">
          <img
            class="main__user-left-img"
            :src="
              userAvaDataes[5]
                ? userAvaDataes[5]
                : require('@/assets/images/Rectangle.png')
            "
            alt=""
          />
          <a :href="userAvaDataes[6]" class="main__user-left-link">ПОСЕТИТЬ</a>
        </div>
        <div class="main__user-right">
          <ul class="main__user-right-list">
            <li class="item">
              <b class="main__name">{{ userAvaDataes[0] }}</b>
            </li>
            <li class="item">
              <b class="main__name">Репозиториев: </b>
              <span>{{ userAvaDataes[2] }}</span>
            </li>
            <li class="item">
              <b class="main__name">Создан: </b>
              <span>{{ formattedCreatedAt }}</span>
            </li>
            <li class="item">
              <b class="main__name">Подписщиков: </b>
              <span>{{ userAvaDataes[3] }}</span>
            </li>
            <li class="item">
              <b class="main__name">Подписок: </b>
              <span>{{ userAvaDataes[4] }} </span>
            </li>
          </ul>
        </div>
      </div>

      <MainSort />
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import MainSort from "./MainSort.vue";
export default {
  components: { MainSort },
  data() {
    return {
      findUsers: "",
    };
  },

  methods: {
    ...mapActions(["getUsersApi"]),
    submitForm() {
      if (this.findUsers.trim() !== "") {
        this.getUsersApi(this.findUsers);
      } else {
        console.log("hello");
      }
    },
  },
  computed: {
    ...mapState(["usersDataies", "userAvaDataes"]),
    formattedCreatedAt() {
      if (this.userAvaDataes[1]) {
        const date = new Date(this.userAvaDataes[1]);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year} ${month} ${day}`;
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
.main__form-btn {
  cursor: pointer;
}
</style>
