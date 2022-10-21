<template>
    <footer class="page-footer font-small teal py-4">
        <div class="footer-copyright text-center">
            © 2017 - {{ getCurrentYear() }} Copyright Danh Nguyen | Frontend Developer
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
        getCurrentYear() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style lang="scss">
footer {
    width: 100%;
    margin-top: 6rem;
    background-color: #f5f5f5;
}

.footer-copyright {
    font-size: 12px;
}
</style>
