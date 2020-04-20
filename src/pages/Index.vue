<template>
  <Layout>
    <div class="greeting">
      <img class="greet-image" src="https://www.danhnguyen.nl/wp-content/uploads/KQD17S0BRO-e1449658156704.jpg" alt="Foto van boek" />
      <img class="avatar" src="https://www.danhnguyen.nl/wp-content/uploads/DSC07798-1024x575.jpg" alt="Foto van Danh Nguyen"/>
    </div>

    <div class="intro text-center">
      <h2 class="mb-3">Danh Nguyen</h2>
      <ul class="additional list-inline">
        <li class="list-inline-item">
          <font-awesome class="mr-1" :icon="['fas', 'envelope-open-text']" />
          nguyen.dtd@gmail.com
        </li>
        <li class="list-inline-item ml-3">
          <font-awesome class="mr-1" :icon="['fas', 'birthday-cake']" />
          27-02-1987
        </li>
        <li class="list-inline-item ml-3">
          <font-awesome class="mr-1" :icon="['fas', 'map-marker-alt']" />
          Nederland
        </li>
      </ul>
      <p>
        Ik ben Frontend Developer en dit is mijn portfolio. Op deze site neem ik jullie graag mee met mijn reizen. Verder hou ik me bezig met het omzetten van grafische ontwerpen naar volledig functionele websites welke geschikt zijn voor mobiele en desktop apparaten. Bekijk mijn uitgevoerde projecten of lees meer over mijzelf.
      </p>
    </div>

    <hr class="my-5">

    <h3 class="mt-5 mb-4">Laatste trips</h3>
    <div
      class="panel row mb-5"
      v-for="item in $page.posts.edges"
      :key="item.node.id">
      <div class="panel__img col-sm-4">
        <g-link
          :to="item.node.path"
          class="blog-post"
        >
          <g-image immediate :src="item.node.image" class="post-image" alt="image" />
        </g-link>
      </div>
      <div class="panel__content panel__content--no-padding col-sm-6">
        <g-link
          :to="item.node.path"
          class="blog-post"
        >
          <h5 class="subtitle ellipsis">{{item.node.title}}</h5>
        </g-link>

        <small>{{item.node.excerpt}}</small>

        <g-link
          :to="item.node.category.path"
          class="category-link"
        >
          <p class="category mt-3">{{item.node.category.title}}</p>
        </g-link>

        <div class="author-date mt-3">
          Door Danh Nguyen
          <span class="line"></span>
          <i class="fa fa-clock-o" aria-hidden="true"></i> {{item.node.date}}
        </div>
      </div>
    </div>

    <h3 class="mt-5 mb-4">Laatste projecten</h3>
    <p>The easiest way to get started quick is to use the Forestry button below, which will create a Github repository for you,
      clone this starter repo and import all data to the CMS. After that is complete, you can just go to <a href="https://www.netlify.com/">Netlify</a>
      and connect your newly created project that will set it up for automatic deployment when you commit to the Github repo.
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Danh Nguyen | Frontend Developer'
  }
}
</script>

<page-query>
query {
  posts: allBlogPost(limit: 3, order: DESC) {
    edges {
      node {
        title
        date
        image (width: 500, quality: 60)
        path
        excerpt
        category {
          id
          title,
          path
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.greet-image {
  object-position: center;
}
</style>
