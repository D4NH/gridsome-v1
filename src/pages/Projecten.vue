<template>
    <Layout>
        <div class="greeting">
            <g-image class="greet-image" position="top" src="~/assets/images/projecten.jpg" />
            <g-image class="avatar" src="~/assets/images/48395643_1_n.jpg" />
        </div>

        <div class="intro text-center">
            <h2 class="mb-3">Projecten</h2>
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
                Ik hou me graag bezig met de ontwikkeling van volledige functionele websites. Mijn projecten zijn
                responsive, geschikt voor verschillende schermresoluties en apparaten. Internet bestaat voornamelijk uit
                tekst, daardoor besteed ik veel aandacht aan typografie, informatie-architectuur, en de user interface.
                Ik ontwikkel veelal portfolio’s, blogs, corporate en product websites.
            </p>
        </div>

        <hr class="my-5" />

        <div class="row mb-5">
            <div class="col-sm-6">
                <g-image src="https://www.danhnguyen.nl/wp-content/uploads/totaalcheck.png" class="mb-2 img-fluid" />
                <br />
                TotaalCheck - Zilveren Kruis
                <br />
                <small>Vue</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/mijnoverheid.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                MijnOverheid - Logius
                <br />
                <small>Vue</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/monuta.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Monuta Verzekeringsmodule - Monuta
                <br />
                <small>Angular</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/luminisamsterdam.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Luminis Amsterdam - Luminis
                <br />
                <small>Wordpress</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/devcon.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Luminis DevCon - Luminis
                <br />
                <small>Wordpress</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/proudteachers.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Proud Teachers - Luminis
                <br />
                <small>Wordpress</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/training.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Luminis Academy - Luminis
                <br />
                <small>Wordpress</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/bespaarcoach.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Bespaarcoach - Essent
                <br />
                <small>Javascript</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/essentmobiel.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Mobiele site - Essent
                <br />
                <small>Mobile First</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/bespaartips.jpg"
                    class="mb-2 img-fluid"
                />
                <br />
                Bespaartips - Essent
                <br />
                <small>Javascript</small>
            </div>
            <div class="col-sm-6">
                <g-image
                    src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/philipskitchen.jpg"
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
export default {
    metaInfo: {
        title: 'Projecten',
    },
};
</script>

<style scoped lang="scss">
// .greet-image {

// }

.contact-image {
    display: block;
    margin: auto;
    width: 90%;
    max-width: 500px;
}

.col-sm-6 {
    margin-bottom: 3rem;

    &:last-of-type {
        margin-bottom: 0;
    }
}
</style>
