export default {
  getExercise ({ exercise }) {
    return exercise
  },
  isToUpdate ({ toUpdate }) {
    if (!toUpdate) return false
    else return true
  }
}
