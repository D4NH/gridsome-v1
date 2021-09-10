<template>
    <Layout>
        <div class="greeting">
            <g-image
                class="greet-image"
                :src="$page.post.image ? $page.post.image : 'https://placehold.co/460x200?text=404'"
            />
            <g-image class="avatar" src="~/assets/images/48395643_1_n.jpg" />
        </div>
        <div class="intro text-center">
            <h2 class="mb-3">{{ $page.post.title ? $page.post.title : '-' }}</h2>

            <ul class="additional list-inline">
                <li class="list-inline-item">
                    <font-awesome class="mr-1" :icon="['fas', 'calendar-day']" />
                    {{ $page.post.date ? $page.post.date : '-' }}
                </li>
                <li class="list-inline-item ml-3">
                    <font-awesome class="mr-1" :icon="['fas', 'map-marker-alt']" />
                    {{ $page.post.category.title ? $page.post.category.title.split('-')[1] : '-' }}
                </li>
            </ul>
        </div>

        <hr class="my-5" />

        <div class="blogPost">
            <BlogContent class="mt-5" :content="$page.post.content ? $page.post.content : '-'" />
        </div>

        <hr class="my-5" />

        <div class="row">
            <div class="col text-right">
                <div v-if="previousPost" class="prev">
                    <strong>Vorige</strong><br />
                    <a :href="previousPost.path">{{ previousPost.title }}</a
                    ><br />
                    <small>{{ previousPost.excerpt }}</small>
                </div>
            </div>
            <div class="col">
                <div v-if="nextPost" class="next">
                    <strong>Volgende</strong><br />
                    <a :href="nextPost.path">{{ nextPost.title }}</a
                    ><br />
                    <small>{{ nextPost.excerpt }}</small>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    author
    date
    content
    id
    path
    image
    category {
      title
      id
      belongsTo(sortBy: "date", order: ASC) {
        edges {
          node {
            ... on BlogPost {
              title
              path
              id
              excerpt
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import BlogContent from '@/components/BlogContent';

export default {
    data() {
        return {
            previousPost: null,
            nextPost: null,
        };
    },
    components: {
        BlogContent,
    },
    metaInfo() {
        return {
            title: this.$page.post ? this.$page.post.title : '-',
        };
    },
    watch: {
        $route(to, from) {
            this.setPrevNextLinks();
        },
    },
    methods: {
        setPrevNextLinks() {
            const allBlogs = this.$page.post.category.belongsTo.edges;
            const currentBlogPost = this.$page.post;
            const currentBlogPostId = allBlogs.findIndex((blogPost) => blogPost.node.id === currentBlogPost.id);

            this.previousPost = currentBlogPostId === 0 ? null : allBlogs[currentBlogPostId - 1].node;
            this.nextPost = currentBlogPostId === allBlogs.length - 1 ? null : allBlogs[currentBlogPostId + 1].node;
        },
    },
    mounted() {
        this.setPrevNextLinks();
    },
};
</script>

<style lang="scss" scoped>
.meta {
    display: flex;
}

.box {
    display: flex;
    flex-direction: column;
    padding: 0 20px 0 0;

    .label {
        font-weight: bold;
    }
}

.blogImage {
    max-height: 400px;
    width: 100%;
}
</style>
