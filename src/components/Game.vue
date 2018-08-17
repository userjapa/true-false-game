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
        <div class="game-tf__answer__option__alternative right" @click="answer(true)">
          <span>TRUE</span>
        </div>
        <div class="game-tf__answer__option__alternative wrong" @click="answer(false)">
          <span>FALSE</span>
        </div>
      </div>
      <div class="game-tf__answer__result">
        <div class="game-tf__answer__result__text">
          <span :class="{
                  right: question.hit,
                  wrong: !question.hit
                }">
              {{ question.answer }}
          </span>
        </div>
        <div class="game-tf__answer__result__next">
          <div class="game-tf__answer__result__next__btn">
            <button type="button" @click="setCurrent(exercise.questions)" :disabled="!question.answered" v-if="!ended">Next</button>
            <button type="button" v-else>Finish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrueOrFalseGame',
  data () {
    return {
      question: {},
      exercise: {
        questions: [{
          img: 'https://reptilepark.com.au/wp-content/uploads/2015/11/mammals_grey_headed_flying_fox2-1030x579.jpg',
          question: 'The bird is flying.',
          correct: false,
          answer: null,
          answered: false,
          hit: false
        }]
      },
      ended: false,
      index: 0
    }
  },
  methods: {
    setCurrent (questions) {
      let index = 0
      let qst = null
      for (const key in questions) {
        index = key
        if (!questions[key].answered) {
          qst = questions[key]
          break
        } else if (key == (questions.length - 1)) {
          qst = questions[key]
          this.ended = true
        }
      }
      this.$set(this, 'index', index)
      this.$set(this, 'question', qst)
    },
    answer (answer) {
      if (!this.question.answered) {
        this.$set(this.question, 'answer', answer)
        this.$set(this.question, 'hit', answer == this.question.correct)
        this.$set(this.question, 'answered', true)
      }
    }
  },
  mounted () {
    this.setCurrent(this.exercise.questions)
  }
}
</script>

<style lang="scss">
.game-tf {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  &__img {
    flex-basis: 65%;
    padding: 10px;
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
  }
  &__answer {
    flex-basis: 35%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    &__question {
      flex-basis: 10%;
      font-weight: 600;
      font-size: 20px;
      padding: 10px;
      display: flex;
      justify-content: center;
      span {
        display: inline-block;
        align-self: center;
      }
    }
    &__option {
      width: 100%;
      flex-basis: 50%;
      align-self: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      &__alternative {
        display: inline;
        padding: 20px 30px;
        border-radius: 15px;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1.25px;
        box-shadow: 0px 2.5px 7.5px 1px #888;
        transition: all .2s ease;
        cursor: pointer;
        &:first-child { margin-right: 20px; }
        &:hover {
          box-shadow: 0px 5px 10px 1px #888;
          transform: translateY(-2.5px);
        }
        &:active {
          box-shadow: 0px 2.5px 7.5px 1px #888;
          transform: translateY(0);
        }
        &.right {
          background-color: #5ec12d;
          &:hover { background-color: lighten(#5ec12d, 5) }
        }
        &.wrong {
          background-color: #c2003c;
          &:hover { background-color: lighten(#c2003c, 5)}
        }
      }
    }
    &__result {
      flex-basis: 40%;
      display: flex;
      justify-content: center;
      align-items: stretch;
      flex-direction: column;
      &__text {
        flex-basis: 60%;
        display: flex;
        justify-content: center;
        span {
          width: 120px;
          height: 40px;
          border-radius: 150px;
          text-align: center;
          border: 3px solid #ff9c00;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 1px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          font-size: 20px;
          &.right { color: #5ec12d; }
          &.wrong { color: #c2003c; }
        }
      }
      &__next {
        flex-basis: calc(40% - 20px);
        padding: 10px;
        display: flex;
        justify-content: flex-end;
        &__btn {
          display: inline-block;
          align-self: center;
          button {
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;
            border: none;
            padding: 12.5px 25px;
            font-size: 14px;
            border-radius: 150px;
            background-color: #3bbfd4;
            cursor: pointer;
            &:hover { background-color: #28a1b4; }
            &:active { background-color: #3bbfd4; }
            &:disabled { background-color: #aaa; }
          }
        }
      }
    }
  }
}
</style>
