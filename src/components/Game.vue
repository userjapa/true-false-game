<template lang="html">
  <div class="game-tf">
    <div class="game-tf__img">
      <img :src="question.img">
    </div>
    <div class="game-tf__answer">
      <div class="game-tf__answer__question">
        <span>{{ question.question }}</span>
      </div>
      <div class="game-tf__answer__option">
        <div class="game-tf__answer__option__alternative right">
          <span>TRUE</span>
        </div>
        <div class="game-tf__answer__option__alternative wrong">
          <span>FALSE</span>
        </div>
      </div>
      <div class="game-tf__answer__result">
        <span>{{ question.hit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrueOrFalseGame',
  data () {
    return {
      question: {
        img: 'https://reptilepark.com.au/wp-content/uploads/2015/11/mammals_grey_headed_flying_fox2-1030x579.jpg',
        question: 'The bird is flying.',
        correct: false,
        answer: null,
        answered: false,
        hit: false
      }
    }
  }
}
</script>

<style lang="scss">
div {
  border: 2px solid black;
}

.game-tf {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  &__img {
    flex-basis: 50%;
  }
  &__answer {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    &__question {
      flex-basis: 10%;
      font-weight: 600;
      font-size: 20px;
      padding: 10px;
    }
    &__option {
      width: 100%;
      flex-basis: 40%;
      align-self: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      &__alternative {
        display: inline;
        padding: 20px 40px;
        border-radius: 15px;
        &:first-child {
          margin-right: 20px;
        }
        &.right {
          background-color: green;
        }
        &.wrong {
          background-color: red;
        }
      }
    }
    &__result {
      flex-basis: 50%;
    }
  }
}
</style>
