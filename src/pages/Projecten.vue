<template>
  <Layout>
    <div class="greeting">
      <img class="greet-image" src="https://www.danhnguyen.nl/wp-content/uploads/SA07EZX8KU-e1449663788877.jpg" alt="Foto van laptop" />
      <img class="avatar" src="https://www.danhnguyen.nl/wp-content/uploads/DSC07798-1024x575.jpg" alt="Foto van Danh Nguyen"/>
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
        Ik hou me graag bezig met de ontwikkeling van volledige functionele websites. Mijn projecten zijn responsive, geschikt voor verschillende schermresoluties en apparaten. Internet bestaat voornamelijk uit tekst, daardoor besteed ik veel aandacht aan typografie, informatie-architectuur, en de user interface. Ik ontwikkel veelal portfolio’s, blogs, corporate en product websites.
      </p>
    </div>

    <hr class="my-5">

    <div class="row mb-5">
      <div class="col-sm-6">
        <!-- <a href="/categories/japan"> -->
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/mijnoverheid.jpg" alt="Afbeelding van Logius" class="mb-2 img-fluid">
          <br/>
          MijnOverheid - Logius
        <!-- </a> -->
        <br/>
        <small>Vue</small>
      </div>
      <div class="col-sm-6">
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/monuta.jpg" alt="Afbeelding van Monuta" class="mb-2 img-fluid">
          <br/>
          Monuta Verzekeringsmodule - Monuta
        <br/>
        <small>Angular</small>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-sm-6">
        <!-- <a href="/categories/japan"> -->
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/luminisamsterdam.jpg" alt="Afbeelding van Luminis" class="mb-2 img-fluid">
          <br/>
          Luminis Amsterdam - Luminis
        <!-- </a> -->
        <br/>
        <small>Wordpress</small>
      </div>
      <div class="col-sm-6">
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/devcon.jpg" alt="Afbeelding van Luminis" class="mb-2 img-fluid">
          <br/>
          Luminis DevCon - Luminis
        <br/>
        <small>Wordpress</small>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-sm-6">
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/proudteachers.jpg" alt="Afbeelding van Luminis" class="mb-2 img-fluid">
          <br/>
          Proud Teachers - Luminis
        <br/>
        <small>Wordpress</small>
      </div>
      <div class="col-sm-6">
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/training.jpg" alt="Afbeelding van Luminis" class="mb-2 img-fluid">
          <br/>
          Luminis Academy - Luminis
        <br/>
        <small>Wordpress</small>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-sm-6">
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/bespaarcoach.jpg" alt="Afbeelding van Essent" class="mb-2 img-fluid">
          <br/>
          Bespaarcoach - Essent
        <br/>
        <small>Javascript</small>
      </div>
      <div class="col-sm-6">
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/essentmobiel.jpg" alt="Afbeelding van Essent" class="mb-2 img-fluid">
          <br/>
          Mobiele site - Essent
        <br/>
        <small>Mobile First</small>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/bespaartips.jpg" alt="Afbeelding van Essent" class="mb-2 img-fluid">
          <br/>
          Bespaartips - Essent
        <br/>
        <small>Javascript</small>
      </div>
      <div class="col-sm-6">
          <img src="https://www.danhnguyen.nl/wp-content/themes/D4NH_V04/assets/img/webdesign/philipskitchen.jpg" alt="Afbeelding van Philips" class="mb-2 img-fluid">
          <br/>
          MyKitchen - Philips
        <br/>
        <small>Javascript, ATG CMS</small>
      </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Projecten'
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.contact-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}
</style>
