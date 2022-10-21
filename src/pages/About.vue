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

        <div class="row mb-5">
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/totaalcheck.png"
                    class="mb-2 img-fluid"
                />
                <br />
                TotaalCheck - Zilveren Kruis
                <br />
                <small>Vue</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/Screenshot-2020-10-25-at-14.15.02.png"
                    class="mb-2 img-fluid"
                />
                <br />
                Nimbus Newsroom - Websight
                <br />
                <small>React</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/Screenshot-2020-10-25-at-14.18.31.png"
                    class="mb-2 img-fluid"
                />
                <br />
                MijnOverheid - Logius
                <br />
                <small>Vue</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/monuta.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Monuta Verzekeringsmodule - Monuta
                <br />
                <small>Angular</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/luminisamsterdam.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Luminis Amsterdam - Luminis
                <br />
                <small>Wordpress</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/devcon.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Luminis DevCon - Luminis
                <br />
                <small>Wordpress</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/proudteachers.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Proud Teachers - Luminis
                <br />
                <small>Wordpress</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/training.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Luminis Academy - Luminis
                <br />
                <small>Wordpress</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/bespaarcoach.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Bespaarcoach - Essent
                <br />
                <small>Javascript</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/essentmobiel.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Mobiele site - Essent
                <br />
                <small>Mobile First</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/bespaartips.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Bespaartips - Essent
                <br />
                <small>Javascript</small>
            </div>
            <div class="col-sm-6">
                <v-lazy-image
                    src-placeholder="https://dummyimage.com/460x283/e0e0e0/e0e0e0.png"
                    src="https://www.danhnguyen.nl/wp-content/uploads/webdesign/philipskitchen.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                MyKitchen - Philips
                <br />
                <small>Javascript, ATG CMS</small>
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
            title: 'Over mij',
        };
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

.col-sm-6 {
    margin-bottom: 3rem;

    &:last-of-type {
        margin-bottom: 0;
    }

    .g-image {
        border: 1px solid #ccc;
        padding: 10px;
    }
}

.v-lazy-image {
    filter: blur(5px);
    transition: filter 0.5s;
}
.v-lazy-image-loaded {
    filter: blur(0);
}
</style>
