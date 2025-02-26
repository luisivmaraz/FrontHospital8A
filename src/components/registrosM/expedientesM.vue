<template>
    <div>
        <expedientes></expedientes>
    </div>
    <div>
        <listaExp></listaExp>
    </div>
</template>

<script>
    import expedientes from './expedienteForm.vue'
    import listaExp from './expedienteList.vue'

    export default{
        components:{
            expedientes,
            listaExp
        }
    }
</script>