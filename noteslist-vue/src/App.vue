
<template>
  <div>
    <div>
      <RouterLink :to="{name: 'notes'}">Notes</RouterLink> |
      <RouterLink :to="{name: 'stats'}">Notes</RouterLink>

    </div>
    <RouterView/>
  </div>
</template>