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


    <div>
      <img class="contact-image mb-4" src="../../uploads/email.svg" />
      <b-form
        name="contact"
        method="post"
        @submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
        <b-form-group id="input-group-2" label="Name:" label-for="form-name">
          <b-form-input
            id="name"
            name="name"
            v-model="form.name"
            required
            placeholder="Enter name"
          />
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            required
            placeholder="Enter email"
          />
        </b-form-group>

        <b-form-group id="input-group-3" label="Message:" label-for="message">
          <b-form-textarea
            id="message"
            name="message"
            v-model="form.message"
            required
            placeholder="Enter message"
          />
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
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
          message: '',
        },
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      },
      handleSubmit(e) {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.form,
          }),
        })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error))
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
