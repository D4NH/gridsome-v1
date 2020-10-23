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

            <!-- <p>{{ $page.category.belongsTo.edges.filter((item) => item.node.info)[0].node.info }}</p> -->
        </div>

        <hr class="my-5" />

        <div class="blogPost">
            <BlogContent class="mt-5" :content="$page.post.content ? $page.post.content : '-'" />
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
    image
    category {
      title
    }
  }
}
</page-query>

<script>
import BlogContent from '@/components/BlogContent';

export default {
    components: {
        BlogContent,
    },
    metaInfo() {
        return {
            title: this.$page.post ? this.$page.post.title : '-',
        };
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
