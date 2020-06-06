export const routes = {
  auth: {
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
  home: "/",
  question: {
    base: "/question",
    new: "/question/new",
    all: "/questions",
    id: "/questions/:id",
  },
  randomQuiz: "/random-quiz/start",
  customQuiz: {
    start: "/custom-quiz/start",
    base: "/custom-quiz",
    new: "/custom-quiz/new",
    all: "/custom-quizzes",
  },
  quiz: "/quiz",
  result: "/result",
  user: {
    all: "/users",
    id: "/users/:id",
  },
};
