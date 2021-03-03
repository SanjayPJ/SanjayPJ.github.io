<template>
    <div>
        <div ref="topbar" class="top-bar" id="responsive-menu">
            <div class="top-bar-left">
                <ul class="dropdown menu" data-dropdown-menu>
                    <li @click="go_home" class="menu-text lex" id="index-button">Sanjay PJ</li>
                    <li>
                        <router-link to="/portfolio" id="portfolio-button"><small class="text-uppercase">Portfolio &amp; Repos</small></router-link>
                    </li>
                    <li>
                        <router-link to="/contact" id="contact-button"><small class="text-uppercase">Contact</small></router-link>
                    </li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                    <li><input v-model="search_term" type="search" class="radius" placeholder="Search Repositories"></li>
                    <li><button data-open="modal-sorry" type="button" class="button radius" @click="search">Search</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            base_url: "https://github.com/SanjayPJ?utf8=%E2%9C%93&tab=repositories&q=",
            search_term: null
        }
    },
    methods: {
        go_home() {
            this.$router.push({ name: "home" });
        },

        search() {
            if (this.search_term) {
                window.open(this.base_url + this.search_term);
            }
        }
    }
}
</script>
<style scoped>
.top-bar input {
    margin-right: 0.5rem;
}
</style>