<template>
    <div class="gist" @click="changeRowStyle">
        <div class="image_wrapper">
            <img :src=data.owner.avatar_url alt="Avatar Image" class="gist_image"/>
        </div>
        <p class="gist_filename">{{Object.keys(data.files)[0]}}</p>
        <Modal v-bind:data="data.owner.avatar_url" v-if="showImage" @close="showImage = false" />
    </div>
</template>
<script>
import Modal from '../modal/ShowImageModal.vue'
export default {
    components: { Modal },
    props: [ 'data' ],
    name: 'ListItem',
    data() {
        return {
            showImage: false
        }
    },    
    methods: {
        changeRowStyle(e) {
            e.target.classList.toggle('active');
            e.target.querySelector('.image_wrapper').classList.toggle('dark-background');
            this.showImage = true;
        }
    }
}
</script>