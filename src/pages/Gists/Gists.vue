<template>
    <div class="container-fluid">
        <div class="loader-wrapper" v-if="loading">
            <h1>Loading...</h1>
        </div>
        <div class="error-wrapper" v-if="showErrorMessage">
            <h1>Something went wrong. Please try again later.</h1>
        </div>
        <div class="gist-wrapper" v-if="gists.length">
            <h1 class="gist-wrapper__title">Gists</h1>
            <list-item
                v-for="gist in gists"
                :key="gist.id"
                v-bind:data="gist"
            />
        </div>
        <pagination v-model="page" :records="3000" @paginate="getData" :per-page="30" />
    </div>
</template>

<script>
import ListItem from '../../components/GistComponents/ListItem.vue';
import GistsAdministration from '../../services/gists/Gists';

export default {
    components: { ListItem },
    data() {
        return {
            page: 1,
            gists: [],
            showErrorMessage: false,
            loading: false
        }
    },
    created() {
        this.getData(this.page);
    },
    methods: {
        getData(pageNum) {
            this.scrollTop();
            this.loading = true;
            this.gists = [];
            GistsAdministration.getAllGists(pageNum)
            .then((res) => {
                this.gists = res || [];
                this.loading = false;
            }).catch(() => {
                this.loading = false;
                this.showErrorMessage = true;
            });
        },
        scrollTop(){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
</script>