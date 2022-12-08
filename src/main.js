import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://ljwuwwfisdfivjomdsyb.supabase.co",
  supabaseKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd3V3d2Zpc2RmaXZqb21kc3liIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDQ3ODM2OCwiZXhwIjoxOTg2MDU0MzY4fQ.f_n-wqBQRAuMM0dRqy0PROvE1avZ6hQo6-95Z9Zbv1Y",
  supabaseOptions: {},
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
