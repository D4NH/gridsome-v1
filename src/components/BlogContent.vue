<template>
    <div class="blog-content text-center" v-html="content" />
</template>

<script>
export default {
    props: {
        content: String,
    },
};
</script>

<style lang="scss" scoped>
p {
    line-height: 1.5;
    font-size: 1.15rem;
}
h2 {
    font-size: 2rem;
}
h3 {
    font-size: 1.5rem;
}
h4,
h5,
h6 {
    font-size: 1.15rem;
}
</style>

<style lang="scss">
.blog-content {
    p {
        width: 700px;
        margin: 15px auto;
    }

    img,
    .g-image {
        width: 700px;
        height: 500px;
        object-fit: cover;
        margin: 15px auto 0;
    }

    @media screen and (max-width: 640px) {
        p,
        img,
        .g-image {
            width: 100%;
        }
    }
}
</style>
