<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="greeting">
            <g-image class="greet-image" :src="categoryImage($page.category)" />
            <g-image class="avatar" src="~/assets/images/profile.jpg" />
        </div>

        <div class="intro text-center">
            <h2 class="mb-3">{{ $page.category.title.split('-')[0] }}</h2>

            <ul class="additional list-inline">
                <li class="list-inline-item">
                    <font-awesome class="mr-1" :icon="['fas', 'calendar-day']" />
                    {{ setDate($page.category.belongsTo.edges[0].node.date) }}
                </li>
                <li class="list-inline-item ml-3">
                    <font-awesome class="mr-1" :icon="['fas', 'map-marker-alt']" />
                    {{ $page.category.title.split('-')[1] }}
                </li>
            </ul>

            <p>{{ $page.category.belongsTo.edges.filter((item) => item.node.intro)[0].node.intro }}</p>
        </div>

        <hr class="my-5" />

        <div class="panel row mb-5" v-for="item in $page.category.belongsTo.edges" :key="item.node.id">
            <div class="mx-auto col-md-10">
                <div class="row">
                    <div class="panel__img col-sm-4">
                        <g-link :to="item.node.path" class="blog-post">
                            <v-lazy-image
                                src-placeholder="https://dummyimage.com/242x170/e0e0e0/e0e0e0.png"
                                :src="item.node.image ? item.node.image : '/uploads/404.svg'"
                                class="post-image"
                            />
                        </g-link>
                    </div>
                    <div class="panel__content panel__content--no-padding col">
                        <g-link :to="item.node.path" class="blog-post">
                            <h5 class="subtitle ellipsis">{{ item.node.title }}</h5>
                        </g-link>

                        <small>{{ item.node.excerpt }}</small>

                        <g-link :to="item.node.category.path" class="category-link">
                            <p class="category mt-3">{{ item.node.category.title }}</p>
                        </g-link>

                        <div class="author-date mt-3">
                            <span class="line"></span>
                            <font-awesome class="mr-1" :icon="['far', 'calendar']" /> {{ setDate(item.node.date) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
  query($id: ID!) {
    category(id: $id) {
      title
      path
      belongsTo(sortBy: "date", order: ASC) {
        edges {
          node {
            ... on BlogPost {
              title
              excerpt
              image
              path
              date
              intro
              category {
                id
                title
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import VLazyImage from 'v-lazy-image';

export default {
    components: {
        VLazyImage,
    },
    metaInfo() {
        return {
            title: this.$page.category.title,
        };
    },
    methods: {
        categoryImage(page) {
            const postImage = page.belongsTo.edges[Math.floor(Math.random() * page.belongsTo.edges.length)].node.image;

            return postImage ? postImage : 'https://placehold.co/460x200?text=404';
        },
        setDate(date) {
            const newDate = new Date(date);
            return new Intl.DateTimeFormat('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour12: false,
            }).format(newDate);
        },
    },
};
</script>

<style lang="scss" scoped>
.v-lazy-image {
    filter: blur(5px);
    transition: filter 0.5s;
}
.v-lazy-image-loaded {
    filter: blur(0);
}
</style>
