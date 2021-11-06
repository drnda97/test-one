<template>
    <div class="container-fluid">
        <div class="loader-wrapper" v-if="loading">
            <h1>Loading...</h1>
        </div>
        <div class="error-wrapper" v-if="showErrorMessage">
            <h1>Something went wrong. Please try again later.</h1>
        </div>
        <div class="gist-wrapper" v-if="allGists.length">
            <h1 class="gist-wrapper__title">Gists</h1>
            <list-item
                v-for="gist in allGists"
                :key="gist.id"
                v-bind:data="gist"
            />
        </div>
        <pagination v-model="page" :records="3000" @paginate="getData" :per-page="30"/>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'; 
import ListItem from '../../components/GistComponents/ListItem.vue';
export default {
    components: { ListItem },
    name: 'Gists',
    data() {
        return {
            page: 1,
            loading: true,
            showErrorMessage: false
        }
    },
    computed: mapGetters(['allGists']),
    created(){ 
        this.getData();
    },
    methods:{
        ...mapActions(['getGists']),
        scrollTop(){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        getData() {
            this.scrollTop();
            this.loading = true;
            this.allGists.length = 0;
            this.getGists(this.page).then(() => {
                this.loading = false;
            }).catch(() => {
                this.loading = false;
                this.showErrorMessage = true;
            });
        }
    }

}
</script>
