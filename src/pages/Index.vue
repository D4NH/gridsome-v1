<template>
    <Layout>
        <div class="greeting">
            <g-image class="greet-image" src="~/assets/images/home.jpg" />
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

        <div class="panel row mb-5" v-for="category in orderedCategories" :key="category.node.id">
            <div class="mx-auto col-md-10">
                <div class="row">
                    <div class="panel__img col-sm-4">
                        <g-link :to="category.node.path" class="blog-post">
                            <v-lazy-image
                                src-placeholder="https://dummyimage.com/242x170/e0e0e0/e0e0e0.png"
                                :src="categoryImage(category)"
                                class="post-image"
                                alt="image"
                            />
                        </g-link>
                    </div>
                    <div class="panel__content panel__content--no-padding col">
                        <g-link :to="category.node.path" class="blog-post">
                            <h5 class="subtitle ellipsis">{{ category.node.title }}</h5>
                        </g-link>

                        <small>{{
                            category.node.belongsTo.edges.filter((post) => post.node.intro)[0].node.intro
                        }}</small>

                        <div class="author-date mt-3">
                            Door Danh Nguyen
                            <span class="line"></span>
                            <font-awesome class="mr-1" :icon="['far', 'calendar']" />
                            {{ category.node.belongsTo.edges.filter((post) => post.node.date)[0].node.date }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
    components: {
        VLazyImage,
    },
    metaInfo: {
        title: 'Danh Nguyen | Frontend Developer',
    },
    computed: {
        orderedCategories() {
            const categories = this.$page.categories.edges;
            const sortedCategories = categories.sort(
                (a, b) =>
                    new Date(b.node.belongsTo.edges[0].node.date.split('-')) -
                    new Date(a.node.belongsTo.edges[0].node.date.split('-'))
            );

            return sortedCategories.slice(0, 3);
        },
    },
    methods: {
        categoryImage(category) {
            const postImage =
                category.node.belongsTo.edges[Math.floor(Math.random() * category.node.belongsTo.edges.length)].node
                    .image;

            return postImage ? postImage : 'https://placehold.co/460x200?text=404';
        },
    },
};
</script>

<page-query>
query {
  categories: allCategory {
    edges {
      node {
        id
        path
        title
        belongsTo {
          edges {
            node {
              ... on BlogPost {
                id
                image
                intro
                date
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.v-lazy-image {
    filter: blur(5px);
    transition: filter 0.5s;
}
.v-lazy-image-loaded {
    filter: blur(0);
}

.greet-image {
    object-position: center;
}
</style>
