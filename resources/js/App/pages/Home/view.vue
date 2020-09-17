<template>
    <v-row>
        <v-col
            cols="4"
            lg="4"
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
export default {
    name: "index.vue"
}
</script>

<style scoped>

</style>
