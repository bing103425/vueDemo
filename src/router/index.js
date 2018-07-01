import Vue from "vue";
import Router from "vue-router";
import hello from "@/components/page/hello";
import index from "@/components/page/index";
import compony from "@/components/page/compony";
import culture from "@/components/page/culture";
import system from "@/components/page/system";
import investor from "@/components/page/investor";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "hello",
      component: hello,
      redirect:'/index',
      children: [
        { path: "/index", component: index },
        { path: "/compony", component: compony },
        { path: "/culture", component: culture },
        { path: "/system", component: system },
        { path: "/investor", component: investor }
      ]
    }
  ]
});
