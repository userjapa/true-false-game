<template lang="html">
  <div class="create">
    <h2>Create</h2>
    <div class="create__game">
      <Game/>
    </div>
    <div class="create__form">
      <form class="create__form create__form--question">
        <div class="create__form__field">

        </div>
        <div class="create__form__btn">

        </div>
      </form>
      <form class="create__form create__form--answer">
        <div class="create__form__field">

        </div>
        <div class="create__form__btn">

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Game from '@/components/Game'

export default {
  name: 'CreateGame',
  components: {
    Game
  }
}
</script>

<style lang="css">
</style>
