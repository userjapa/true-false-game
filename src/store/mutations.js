export default {
  addQuestion (state, question) {
    state.exercise.questions.push(question)
  },
  setToUpdate (state, key) {
    state.setToUpdate = key
  }
}
