<template>
    <!-- sidebar -->
    <b-col cols="12" md="4">
      <div class="site-sidebar">

        <!-- search component -->
        <!-- <SidebarSearch/> -->

        <!-- Ocean ad -->
        <Advertisement :image="`/assets/img/ocean-promo.png`" url="/ocean"/>

        <!-- about component -->
        <About
          :image="'/assets/img/world_religions.jpg'"
          description="Should interfaith be limited to mutual tolerance? What if we instead look at other Faiths with a sense of appreciation and wonder, diving into their sacred teachings with an open mind eager to understand God’s greater plan for all his children?"
        />


        <!-- /about component -->
        <Follow/>
        <WidgetPopularEntries/>

        <Categories/>
        <Tags/>
      </div>
      <!-- .site-sidebar -->
    </b-col>
    <!-- .col-md-4 -->
</template>

<script>
// import SidebarSearch from "~/components/articles/sidebar/Search";
import About from "~/components/articles/sidebar/About";
import Follow from "~/components/articles/sidebar/FollowLinks";
import WidgetPopularEntries from "~/components/articles/sidebar/WidgetPopularEntries";
import Advertisement from "~/components/articles/sidebar/Advertisement";
import Categories from "~/components/articles/sidebar/Categories";
import Tags from "~/components/articles/sidebar/Tags";

export default {
  props: ["_articles", "articleCount"],
  components: {
    // SidebarSearch,
    About,
    Follow,
    WidgetPopularEntries,
    Advertisement,
    // RecentPost,
    Categories,
    Tags
  },
};
</script>
