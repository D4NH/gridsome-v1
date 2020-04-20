<template>
  <Layout>
    <div class="greeting">
      <img class="greet-image" src="https://www.danhnguyen.nl/wp-content/uploads/LNYEQYRA6G-e1449663799614.jpg" alt="Foto van boek" />
      <img class="avatar" src="https://www.danhnguyen.nl/wp-content/uploads/DSC07798-1024x575.jpg" alt="Foto van Danh Nguyen"/>
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
        Mijn naam is Danh (Jan) Nguyen. Geboren op 27-02-1987 te Venlo. Wonend in Capelle a/d IJssel, dat ligt naast Rotterdam. Ik hou van de laatste gadgets en wil ze dan ook graag altijd hebben uitproberen. In mijn vrijetijd speel ik badminton, games op de PlayStation en lees ik Japanse Manga’s.
      </p>
    </div>

    <hr class="my-5">

    <img class="about-image" src="../../uploads/profile.svg" />

    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, platea elementum mus lectus molestie et. Conubia taciti nunc proin vehicula et nascetur lacinia commodo non, penatibus vel dui pharetra inceptos himenaeos orci viverra ad, quis ullamcorper sit scelerisque nibh praesent imperdiet vulputate.</p>

    <p>Eros morbi himenaeos eget sagittis parturient, netus sapien pharetra semper iaculis orci, elementum ullamcorper eleifend aenean. Orci ligula euismod taciti conubia facilisis mattis laoreet, cras aliquam ultrices purus augue morbi, a litora feugiat dapibus per lacinia. </p>

    <p>Conubia non mi vulputate natoque nullam sem nascetur fames felis, hendrerit imperdiet pretium urna a augue nec quis lorem, orci sed vehicula pulvinar viverra nam lacus porttitor. Praesent id elementum aliquet dolor himenaeos primis urna vestibulum, molestie sagittis cursus facilisi tellus phasellus lacinia, viverra porttitor tincidunt tortor habitasse class luctus. </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
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
