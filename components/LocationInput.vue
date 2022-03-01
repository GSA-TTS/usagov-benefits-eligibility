<template>

</template>

<script>
import _ from 'lodash'

export default {
    name: 'LocationInput',
    props: {
        criteriaKey: {
            type: String,
            default: "no criteria key provided"
        },
        label: {
            type: String,
            default: "no label provided"
        },
        response: {
            type: [String, Object, Boolean],
            default: "no response provided"
        },
        location: {
            type: String,
            validator: (value) => {
                return ['benefit-card', 'left-rail'].includes(value)
            },
            default: 'benefit-card'
        }
    },
    data() {
        return {
            uniqueId: _.uniqueId('locationinput-')
        }
    },
    computed: {
        selectedStyle() {
            if (this.location === "benefit-card" && this.response === true) {
                return "text-success text-bold"
            }
            return null
        }
    },
    mounted() {
        this.uniqueId = _.uniqueId("checkbox-")
    },
    methods: {

    }
}
</script>

<style>

</style>