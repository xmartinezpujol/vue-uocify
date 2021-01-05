<template>
    <main class="page-home">
        <div class="container container-thin">
            <img class="logo" src="@/assets/icon.svg" alt="logo">
            <h1 class="main-title">Página no encontrada</h1>
        </div>
    </main>
</template>

<script>
	export default {
        name:'NotFound',
	}
</script>


<style lang="scss">
    .page-home{
        text-align: center;
        padding-left:30px;
        padding-right:30px;

        .logo{
            width: 200px;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        .container-thin{
            max-width: 600px;
        }
    }
</style>
