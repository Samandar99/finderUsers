<template>
  <div class="sort">
    <h3 class="sort__title">Сортировка</h3>
    <div class="sort__btns">
      <button class="sort__btn active">ИМЯ</button>
      <button class="sort__btn">ЗВЕЗДЫ</button>
      <button class="sort__btn">ДАТА</button>
    </div>
    <div class="sort__list">
      <div
        class="sort__list-item"
        v-for="(usersRos, index) in usersRepsoitoys"
        :key="index"
      >
        <div class="sort__list-item-left">
          <h3>{{ usersRos.name }}</h3>
          <p>Кол-во звёзд: {{ usersRos.stargazers_count }}</p>
          <p>Дата добавления: {{ usersRos.created_at }}</p>
        </div>

        <div class="sort__list-item-right">
          <a :href="usersRos.html_url" class="sort__right-btn">ПОСЕТИТЬ</a>
        </div>
      </div>
    </div>
    <!-- {{ usersRepsoitoys }} -->
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["usersRepsoitoys"]),
  },
  methods: {
    ...mapMutations(["setRepositoys"]),
    formatDate(){
      // const date = new Date(this.)
    }

  },
  mounted() {
    this.setRepositoys();
  },
};
</script>

<style></style>
