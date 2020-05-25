export default class Question {
  constructor({
    id,
    category,
    type,
    question,
    correctAnswer,
    incorrectAnswers,
    creationDate,
    validationDate,
    validated,
    appUser
  }) {
    this.id = id;
    this.category = category;
    this.type = type;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
    this.creationDate = creationDate;
    this.validationDate = validationDate;
    this.validated = validated;
    this.appUser = appUser
  }
}
