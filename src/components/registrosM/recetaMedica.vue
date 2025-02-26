<template>
    <div>
        <recetas></recetas>
    </div>
    <div>
        <listaReceta></listaReceta>
    </div>
</template>

<script>
    import recetas from './recetaMedicaForm.vue'
    import listaReceta from './recetaMedicaList.vue'

    export default{
        components:{
            recetas,
            listaReceta
        }
    }
</script>