<template>
  <Layout>
    <div class="greeting">
      <img class="greet-image" src="https://www.danhnguyen.nl/wp-content/uploads/2H0QPGDVGZ.jpg" alt="Foto van blog" />
      <img class="avatar" src="https://www.danhnguyen.nl/wp-content/uploads/DSC07798-1024x575.jpg" alt="Foto van Danh Nguyen"/>
    </div>

    <div class="intro text-center">
      <h2 class="mb-3">Blog</h2>
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
      <p>Waar gaan we dit keer naartoe?</p>
    </div>

    <hr class="my-5">

    <div class="row">
      <div
        class="mb-5 col-sm-6"
        v-for="category in $page.categories.edges"
        :key="category.node.id">
          <g-link
            :to="category.node.path"
            class="blog-post"
          >
            <g-image immediate :src="category.node.belongsTo.edges[Math.floor(Math.random() * category.node.belongsTo.edges.length)].node.image" class="post-image mb-3" alt="image" />
            <h5>{{category.node.title}}</h5>
          </g-link>

          <small>{{ category.node.belongsTo.edges.filter(post => post.node.info)[0].node.info }}</small>

          <div class="author-date mt-3">
            Door Danh Nguyen
            <span class="line"></span>
            <i class="fa fa-clock-o" aria-hidden="true"></i> {{ category.node.belongsTo.edges.filter(post => post.node.date)[0].node.date }}
          </div>
      </div>

    </div>
    <!-- <Pager :info="$page.posts.pageInfo"/> -->

    <!-- <div class="media my-5">
      <g-image immediate :src="item.node.image" class="mr-3" alt="image" />
      <div class="media-body">
        <h5 class="mt-0">{{item.node.title}}</h5>
        <p class="text-dark">{{item.node.excerpt}}</p>
      </div>
    </div> -->
  </Layout>
</template>

<script>
</script>

<page-query>
query {
  categories: allCategory {
    edges {
      node {
        id
        path
        title
        belongsTo {
          edges {
            node {
              ... on BlogPost {
                id
                image (width: 500)
                info
                date
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
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

.post-image {
  height: 200px;
}
</style>
