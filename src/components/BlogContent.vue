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
        max-width: 700px;
        margin: 15px auto;
    }

    img,
    .g-image {
        max-width: 700px;
        height: auto;
        object-fit: contain;
        margin: 15px auto 0;

        // border: 1px solid #ccc;
        // border-radius: 0.3rem;
        // padding: 5px;
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
