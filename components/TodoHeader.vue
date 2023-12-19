<template>
  <header>
    <nav>
      <div class="nav-branding">
        <img src="../assets/todo-logo.png" alt="nuxt-todos logo" />
        <h1>Todo App</h1>
      </div>
      <div class="nav-routes">
        <NuxtLink class="route-link" to="/">Home</NuxtLink>
        <NuxtLink class="route-link" to="/todos">Todos</NuxtLink>
        <NuxtLink class="route-link" to="/about">About</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #f1f1f1;
  padding: 25px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  nav {
    display: flex;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    .nav-branding {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        max-width: 50px;
      }

      h1 {
        font-size: 1.5rem
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;

      .route-link {
        text-decoration: none;
        color: inherit;
        transition: color 100ms ease;

        &:hover {
          color: #FC6E51;
        }
      }
    }
  }
}
</style>