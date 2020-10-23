<template>
    <Layout>
        <div class="greeting">
            <img
                class="greet-image"
                src="https://www.danhnguyen.nl/wp-content/uploads/LNYEQYRA6G-e1449663799614.jpg"
                alt="Foto van boek"
            />
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
                    <font-awesome class="mr-1" :icon="['fas', 'map-marker-alt']" />
                    Nederland
                </li>
            </ul>
            <p>
                Mijn naam is Danh (Jan) Nguyen. Geboren op 27-02-1987 te Venlo. Wonend in Capelle a/d IJssel, dat ligt
                naast Rotterdam. Ik hou van de laatste gadgets en wil ze dan ook graag altijd hebben uitproberen. In
                mijn vrijetijd speel ik badminton, games op de PlayStation en lees ik Japanse Manga’s.
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
