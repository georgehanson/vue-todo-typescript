<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ToDo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDo from '@/components/ToDo.ts';

@Component({
  components: {
    ToDo,
  },
})
export default class Home extends Vue {}
</script>
