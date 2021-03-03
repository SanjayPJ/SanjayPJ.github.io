<template>
    <div id="main">
        <div class="fof">
            <h2>ERROR 404</h2>
        </div>
    </div>
</template>
<style scoped>
* {
    transition: all 0.6s;
}

#main {
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.fof {
    display: table-cell;
    vertical-align: middle;
}

.fof h2 {
    font-size: 25px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
    color: #888;
}

@keyframes type {
    from {
        box-shadow: inset -3px 0px 0px #888;
    }

    to {
        box-shadow: inset -3px 0px 0px transparent;
    }
}
</style>