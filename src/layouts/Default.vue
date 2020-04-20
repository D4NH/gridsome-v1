<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: {
    Footer,
    Header
  }
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

body,
html {
  height: 100%;
}

body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#content-wrapper {
  flex: 1 0 auto;
  max-width: 950px;
  width: 90vw;
  margin: 0 auto;
}

.greeting {
  margin-bottom: 60px;
}

.avatar {
  border: 5px solid white;
  object-fit: cover;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -50px;
}

.greet-image {
  display: block;
  object-fit: cover;
  object-position: bottom;
  height: 250px;
  width: 100%;
}

.additional {
  color: grey;
  font-size: 13px;
}

.post-image {
  object-fit: cover;
  height: 170px;
  width: 100%;
}

.author {
  &-date {
    font-size: 9px;
    color: #b3b4b9;
    letter-spacing: .5px;
    text-transform: uppercase;
    font-weight: 700;
  }
}

.category {
  font-size: 9px;
  letter-spacing: .5px;
  text-transform: uppercase;
  font-weight: 700;

  &-link {
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
}

.panel {
  &__img {
    &:hover {
      .panel__content a {
        text-decoration: underline;
      }
    }
  }
}

.line {
  border-bottom: 1px solid gray;
  width: 20px;
  height: 1px;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
