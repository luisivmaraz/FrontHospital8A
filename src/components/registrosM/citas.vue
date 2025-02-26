<template>
    <div>
        <citas></citas>
    </div>
    <div>
        <lista></lista>
    </div>
</template>

<script>
    import citas from './citasForm.vue'
    import lista from './citasList.vue'

    export default{
        components:{
            citas,
            lista
        }
    }
</script>