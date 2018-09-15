const QuestionType = {
  'two-of-two': `doubleQuestion`,
  'tinder-like': `singleQuestion`,
  'one-of-three': `tripleQuestion`
};

const AnswerType = {
  'painting': `paint`,
  'photo': `photo`
};

const adaptServerData = (data) => {
  for (let question of Object.values(data)) {
    question.level = data.indexOf(question);
    question.type = QuestionType[question.type];
    question.task = question.question;
    question.options = [];

    question.answers.forEach((el) => {
      let answerItem = {
        alt: `Option ${question.answers.indexOf(el) + 1}`,
        src: el.image.url,
        answer: AnswerType[el.type],
        width: el.image.width,
        height: el.image.height
      };
      question.options.push(answerItem);
    });
    // question.answers = null;
    // question.question = null; FIXME Создает поля, но оставляет старые поля на месте
  }
  return data;
};

export default adaptServerData;
