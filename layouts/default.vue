<template>
    <div>
        <TodoHeader class="header" />
        <slot class="page" />
        <TodoFooter class="footer" />
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .page {
        flex: 1;
    }

    .footer {
        margin-top: auto;
    }
}
</style>