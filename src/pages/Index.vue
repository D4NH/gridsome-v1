<template>
    <Layout>
        <div class="greeting">
            <g-image
                class="greet-image"
                src="https://www.danhnguyen.nl/wp-content/uploads/KQD17S0BRO-e1449658156704.jpg"
            />
            <g-image class="avatar" src="~/assets/images/48395643_1_n.jpg" />
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
                Ik ben Frontend Developer en dit is mijn portfolio. Op deze site neem ik jullie graag mee met mijn
                reizen. Verder hou ik me bezig met het omzetten van grafische ontwerpen naar volledig functionele
                websites welke geschikt zijn voor mobiele en desktop apparaten. Bekijk mijn uitgevoerde projecten of
                lees meer over mijzelf.
            </p>
        </div>

        <hr class="my-5" />

        <div class="panel row mb-5" v-for="item in $page.posts.edges" :key="item.node.id">
            <div class="panel__img col-sm-4">
                <g-link :to="item.node.path" class="blog-post">
                    <g-image
                        :src="item.node.image ? item.node.image : 'https://placehold.co/300x170?text=404'"
                        class="post-image"
                        alt="image"
                    />
                </g-link>
            </div>
            <div class="panel__content panel__content--no-padding col-sm-6">
                <g-link :to="item.node.path" class="blog-post">
                    <h5 class="subtitle ellipsis">{{ item.node.title }}</h5>
                </g-link>

                <small>{{ item.node.excerpt }}</small>

                <g-link :to="item.node.category.path" class="category-link">
                    <p class="category mt-3">{{ item.node.category.title }}</p>
                </g-link>

                <div class="author-date mt-3">
                    Door Danh Nguyen
                    <span class="line"></span>
                    <i class="fa fa-clock-o" aria-hidden="true"></i> {{ item.node.date }}
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Danh Nguyen | Frontend Developer',
    },
};
</script>

<page-query>
query {
  posts: allBlogPost(limit: 5, order: DESC) {
    edges {
      node {
        title
        date
        image
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
