<template>
    <Layout>
        <div class="greeting">
            <g-image class="greet-image" src="~/assets/images/blog.jpg" />
            <g-image class="avatar" src="~/assets/images/profile.jpg" />
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
                    {{ setDate('1987-02-27') }}
                </li>
                <li class="list-inline-item ml-3">
                    <font-awesome class="mr-1" :icon="['fas', 'map-marker-alt']" />
                    Nederland
                </li>
            </ul>
            <p>
                Mijn naam is Danh (Jan) Nguyen. Ik hou van de laatste gadgets en wil ze dan ook graag altijd
                <strike>hebben</strike> uitproberen. In mijn vrijetijd speel ik badminton, games en lees ik japanse
                manga’s. Verder hou ik van reizen die je op deze pagina kan vinden.
            </p>
            <p>Waar gaan we dit keer naartoe?</p>
        </div>

        <hr class="my-5" />

        <div class="row">
            <div class="mb-5 col-sm-6 d-flex flex-column" v-for="category in orderedCategories" :key="category.node.id">
                <!-- SKIP CATEGORY IF ONLY ONE POST -->
                <!-- <g-link
                    :to="
                        category.node.belongsTo.edges.length === 1
                            ? category.node.belongsTo.edges[0].node.path
                            : category.node.path
                    "
                    class="blog-post"
                > -->
                <g-link :to="category.node.path" class="blog-post">
                    <v-lazy-image
                        src-placeholder="https://dummyimage.com/242x170/e0e0e0/e0e0e0.png"
                        :src="categoryImage(category)"
                        class="post-image mb-3"
                    />
                    <h5>{{ category.node.title }}</h5>
                </g-link>

                <small class="mb-3">{{
                    category.node.belongsTo.edges.filter((post) => post.node.intro)[0].node.intro
                }}</small>

                <div class="author-date mt-auto">
                    <span class="line"></span>
                    <!-- Door Danh Nguyen<br> -->
                    <font-awesome class="mr-1" :icon="['far', 'calendar']" />
                    {{ setDate(category.node.belongsTo.edges.filter((post) => post.node.date)[0].node.date) }}
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
    metaInfo() {
        return {
            title: 'Danh Nguyen | Frontend Developer',
        };
    },
    computed: {
        orderedCategories() {
            const categories = this.$page.categories.edges;
            const sortedCategories = categories.sort(
                (a, b) =>
                    new Date(b.node.belongsTo.edges[0].node.date.split('-')) -
                    new Date(a.node.belongsTo.edges[0].node.date.split('-'))
            );

            return sortedCategories;
        },
    },
    methods: {
        categoryImage(category) {
            const postImage =
                category.node.belongsTo.edges[Math.floor(Math.random() * category.node.belongsTo.edges.length)].node
                    .image;

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
                path
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

.author {
    &-date {
        font-size: 9px;
        color: #b3b4b9;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-weight: 700;
    }
}

.category {
    font-size: 9px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 700;
}

.panel {
    &__img {
        &:hover {
            .panel__content a {
                text-decoration: underline;
            }
        }
    }
}

.line {
    border-bottom: 1px solid gray;
    width: 20px;
    height: 1px;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}

.post-image {
    height: 200px;
}
</style>
