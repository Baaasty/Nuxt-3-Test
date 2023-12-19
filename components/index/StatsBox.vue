<template>
    <div>
        <p class="stat-name">
            <slot />
        </p>
        <span class="stat-count">
            <slot name="count" />
        </span>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;

    .stat-name {
        font-size: 16px;
        margin: 0;
        color: #666;
    }

    .stat-count {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
        color: #333;
    }
}
</style>