<template>
    <div>
        parameter : {{param}}
    </div>
</template>

<script>
export default{
    computed: {
        param: function() {
            return this.$route.param;
        }
    },
    created () {
        const id = this.$route.param.id;
        if (id === undefined) {
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>