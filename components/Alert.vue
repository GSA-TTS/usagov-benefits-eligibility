<template>
    <section class="usa-site-alert usa-site-alert--info margin-bottom-2" aria-label="Site alert,">
        <div class="usa-alert">
            <div class="usa-alert__body">
                <h3 v-if="heading" class="usa-alert__heading">{{ heading }}</h3>
                <p class="usa-alert__text">
                    <slot></slot>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        // eslint-disable-next-line vue/require-default-prop
        heading: {
            type: String,
            required: false,
        },
    },
};
</script>
