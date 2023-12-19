<script setup lang="ts">
const totalTodos = ref(20);
const completedTodos = ref(8);
const remainingTodos = computed(() => totalTodos.value - completedTodos.value);
</script>

<template>
  <div class="page-container">
    <div class="welcome-container">
      <h1>Todo App</h1>
      <p>Manage your tasks with ease.</p>
    </div>
    <div class="stats-container">
      <h2>Your todo stats</h2>
      <div class="stats-boxes">
        <IndexStatsBox>
          <template #default>Total todos</template>
          <template #count>{{ totalTodos }}</template>
        </IndexStatsBox>
        <IndexStatsBox>
          <template #default>Completed todos</template>
          <template #count>{{ completedTodos }}</template>
        </IndexStatsBox>
        <IndexStatsBox>
          <template #default>Remaining todos</template>
          <template #count>{{ remainingTodos }}</template>
        </IndexStatsBox>
      </div>
    </div>
    <input type="button" value="Erstelle ein Todo" @click="totalTodos++">
    <input v-if="totalTodos > completedTodos" type="button" value="Hacke einen ab" @click="completedTodos++">
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  margin: 5vh auto;
  max-width: 1100px;
  width: 90%;

  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    font-size: 1.5rem;

    h1 {
      margin: 0;
      color: #222;
    }

    p {
      margin: 0;
      color: #666;
    }
  }

  .stats-container {
    max-width: 600px;
    width: 65vw;
    padding: 32px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      margin: 0;
      font-size: 1.6rem;
      color: #222;
    }

    .stats-boxes {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 16px;

      @media screen and (max-width: 750px) {
        flex-direction: column;
      }

      * {
        flex: 1;
      }
    }
  }
}
</style>