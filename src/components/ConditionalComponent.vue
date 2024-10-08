<template>
    <div>
        <h3>Conditional Rendering</h3>
     
        <div>
            <button @click="$event => isAwesome = !isAwesome">Toggle </button>
        </div>
        <div v-if="isAwesome">Vue is Awesome</div>
        <div v-else>Oh No!! It is not awesome</div>

        <div v-show="isAwesome">V-show Property</div>
        <div v-if="type == 1">1</div>
        <div v-else-if="type == 2">2</div>
        <div v-else-if="type == 3">3</div>
        <div v-else>Not a Number </div>

        <template v-if="showArticle">
        <!-- <div v-if="showArticle"> -->
            <h4 >Paradraph Heading</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus. Ut rem ullam harum illo sint eaque, beatae iusto incidunt doloribus tempore tenetur, quae at. Molestiae animi rem cumque naml
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dolor obcaecati vero tempora, fugit voluptas sed laboriosam nesciunt corporis odit error ipsum maiores dicta exercitationem dolore nostrum molestiae, accusantium autem.
            </p>
        </template>
        <!-- </div> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';

  const isAwesome = ref(true);

  const type = ref(1);

  const showArticle = ref(true);

  setInterval(() => {
    type.value++;
  }, 2000)
</script>