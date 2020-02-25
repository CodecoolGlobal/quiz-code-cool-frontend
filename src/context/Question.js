export default class Question {
  constructor(
    category,
    type,
    question,
    correctAnswer,
    incorrectAnswers
  ) {
    this.category = category;
    this.type = type;
    this.question = question;
    this.correct_answer = correctAnswer;
    this.incorrect_answers = incorrectAnswers;
  }
}
