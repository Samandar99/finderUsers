import { createStore } from "vuex";

export default createStore({
  state: {
    usersDataies: null,
    userAvaDataes: [],
    usersRepsoitoys: null,
  },
  getters: {},
  mutations: {
    getUsersApi(state, payload) {
      state.usersDataies = payload;
    },
    setUserAvaData(state, payload) {
      state.userAvaDataes = payload;
    },
    setRepositoys(state, payload) {
      state.usersRepsoitoys = payload;
    },
  },
  actions: {
    async getUsersApi(context, findUsers) {
      try {
        const usersApi = await fetch(
          `https://api.github.com/users/${findUsers}`
        );
        const usersData = await usersApi.json();
        context.commit("getUsersApi", usersData);

        const reposApi = await fetch(usersData.repos_url);
        const reposData = await reposApi.json();
        console.log(reposData);

        function formatDate(originalTime) {
          const date = new Date(originalTime);
          const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
          return formattedDate;
        }

        const repositoriesInfo = reposData.map((repo) => ({
          stargazers_count: repo.stargazers_count,
          name: repo.name,
          created_at: formatDate(repo.created_at),
          html_url: repo.html_url,
        }));

        console.log(repositoriesInfo);
        context.commit("setRepositoys", repositoriesInfo);
      } catch (error) {
        console.log(error);
      }

      const {
        login,
        created_at,
        public_repos,
        followers,
        following,
        avatar_url,
        html_url,
      } = context.state.usersDataies;
      // console.log(html_url);
      context.commit("setUserAvaData", [
        login,
        created_at,
        public_repos,
        followers,
        following,
        avatar_url,
        html_url,
      ]);
    },
  },
  modules: {},
});
