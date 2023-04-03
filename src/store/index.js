import { store } from "quasar/wrappers";
import { createLogger, createStore } from "vuex";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const storePbj = createStore({
  modules: {
    user,
  },
  plugins: [
    createLogger(),
    createPersistedState({
      key: "quasar-my-project",
      user: this.user,
    }),
  ],
  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING,
});

export default store(function (/* { ssrContext } */) {
  const Store = storePbj;
  return Store;
});
