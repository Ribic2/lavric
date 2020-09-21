<template>
    <v-row>
        <v-col
            cols="12"
            sm="12"
            lg="6"
            md="6"
            xl="4"
            v-for="i in 10" :key="i">
            <v-card
                :rounded="false"
                :elevation="1"
            >
                <v-responsive :aspect-ratio="1/1">
                    <v-card-text>
                        This card will always be 1
                    </v-card-text>
                </v-responsive>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import api from '../../Service/Api'

export default {

    data() {
        return {
            videos: []
        }
    },
    methods: {
        getVideos() {
            api.getVideos()
            .then((response)=>{
                console.log(response)
            })
            .catch((err)=>{
                console.log(err.response)
            })
        }
    },
    mounted() {
        this.getVideos()
    }
}
</script>

<style scoped>

</style>
