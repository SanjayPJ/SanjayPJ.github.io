<template>
    <div>
        <Navbar />
        <div class="max-grid margin-vertical-3">
            <section class="margin-bottom-2" id="portfolio-content">
                <section class="portfolio">
                    <h4 class="lex"><strong>Portfolio</strong></h4>
                    <hr>
                    <div class="content  margin-bottom-3">
                        <div class="grid-x grid-margin-x">
                            <div class="cell large-4 small-6">
                                <div class="img-wrapper">
                                    <img class="radius" src="@/assets/img/screen.png" alt="">
                                </div>
                                <a target="_blank" href="http://vimanam.in" class="text-uppercase"><small>Vimanam.in
                                    </small></a>
                            </div>
                            <div class="cell large-4 small-6">
                                <div class="img-wrapper">
                                    <img class="radius" src="@/assets/img/screen1.png" alt="">
                                </div>
                                <a target="_blank" href="http://bewstore.com" class="text-uppercase"><small>bewstore.com
                                    </small></a>
                            </div>
                            <div class="cell small-4"></div>
                        </div>
                    </div>
                </section>
                <section class="repositories">
                    <h4 class="lex"><strong>Repositories</strong></h4>
                    <hr>
                    <div class="margin-bottom-3">
                        <div class="content">
                            <div class="table-scroll">
                                <table class="unstriped hover">
                                    <thead>
                                        <th>Repository</th>
                                        <th>Language</th>
                                        <th>Last updated</th>
                                    </thead>
                                    <tbody id="drophere">
                                        <tr v-for="repo in repos" v-bind:key="repo.name">
                                            <td><a :href="base_url + repo.name" target="_blank">{{ repo.full_name }}</a> </td>
                                            <td>{{ repo.language }}</td>
                                            <td>{{ repo.updated_at }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a target="_blank" href="https://github.com/SanjayPJ?tab=repositories"><small class="text-uppercase">VIEW ALL MY Repos
                                    HERE
                                </small></a>
                            <p><small><a href="https://gist.github.com/SanjayPJ">VIEW ALL GISTS HERE</a></small></p>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
        </div>
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
    data() {
        return {
            repos: null,
            base_url: "http://github.com/sanjaypj/"
        }
    },
    components: {
        Footer,
        Navbar
    },
    async created() {
        const repo_response = await fetch(`https://api.github.com/users/sanjaypj/repos?per_page=100&sort=created: asc&client_id=8205252bd0cce8b3b71e&client_secret=8f244259101313693a1f08ee11b2ffd1aba6a649`);
        const repos_data = await repo_response.json();
        this.repos = repos_data;
    }
}
</script>