<template>
    <Layout>
        <div class="greeting">
            <g-image class="greet-image" src="~/assets/images/overmij.jpg" />
            <g-image class="avatar" src="~/assets/images/48395643_1_n.jpg" />
        </div>

        <div class="intro text-center">
            <h2 class="mb-3">Over mij</h2>
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
                websites welke geschikt zijn voor mobiele en desktop apparaten. Ik ben verder te vinden op
                <a href="https:/www.facebook.com/nguyendtd" target="_blank">Facebook</a>,
                <a href="https://www.instagram.com/danhnguyen_nl" target="_blank">Instagram</a> en
                <a href="https://twitter.com/nguyendanh_/" target="_blank">Twitter</a>
            </p>
        </div>

        <hr class="my-5" />
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'About',
    },
};
</script>

<style lang="scss" scoped>
.about-image {
    display: block;
    margin: auto;
    width: 90%;
    max-width: 500px;
    padding-bottom: 50px;
}
</style>
