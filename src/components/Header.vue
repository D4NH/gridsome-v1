<template>
    <header class="header">
        <b-navbar class="px-0 mt-1" toggleable="md" type="light">
            <b-navbar-brand>
                <g-link class="logo-home" to="/">{{ $static.metadata.siteName }}</g-link>
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <g-link class="nav--link" to="/about">Over mij</g-link>
                    <!-- <g-link class="nav--link" to="/blog">Blog</g-link> -->
                    <!-- <g-link class="nav--link" to="/projecten">Projecten</g-link> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
nav {
    width: 100%;
    padding-top: 1rem;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #0000001a;
    margin-bottom: 15px;
    padding-bottom: 5px;
}

.navbar-collapse {
    @media screen and (max-width: 640px) {
        border-top: 1px solid #0000001a;
        margin-top: 10px;
    }
}

.logo-home {
    font-size: 24px;
    max-width: 75%;
    font-weight: bold;
    &:hover {
        text-decoration: none;
    }
}

.logo-desktop {
    @media (max-width: 419px) {
        display: none;
    }
    @media (min-width: 420px) {
        display: default;
    }
}

.logo–mobile {
    @media (max-width: 419px) {
        display: default;
    }
    @media (min-width: 420px) {
        display: none;
    }
}

.logo-image {
    width: 40px;
}

.nav--link {
    margin-left: 20px;
    font-size: 0.9rem;
    @media (max-width: 419px) {
        margin: 0;
        padding: 15px 10px 10px 0;
    }
}

.active--exact {
    font-weight: bold;
}
</style>
