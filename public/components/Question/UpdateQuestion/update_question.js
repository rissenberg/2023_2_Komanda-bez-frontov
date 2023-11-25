export const removedAnswersID = [];

/**
 * Функция для рендеринга одного вопроса (вариант для формы обновления и создания).
 *
 * @function
 * @param {question} question - JSON с информацией о вопросе.
 * @return {HTMLDivElement} - HTML элемент вопроса.
 */
export const createQuestionUpdate = (question) => {
  const questionElement = document.createElement('div');
  questionElement.innerHTML = Handlebars.templates.update_question({question});

  const radioButton = questionElement.querySelector('#update-question__answer-format-radio');
  const checkboxButton = questionElement.querySelector('#update-question__answer-format-checkbox');
  const textButton = questionElement.querySelector('#update-question__answer-format-text');
  const answerContainer = questionElement.querySelector('#question-answers');
  const buttonAddAnswer = questionElement.querySelector('#add-answer-button');

  let type = question.type;
  const answers = question.answers;

  const renderAnswers = () => {
    answerContainer.innerHTML = Handlebars.templates
      .update_answer({answers, type});
    const cInputText = questionElement.querySelectorAll('.update-question__answers-item-input');
    cInputText.forEach((input, index) => {
      input.addEventListener('change', () => {
        answers[index].text = input.value;
      });
    });
    const cAnswers = questionElement.querySelectorAll('.update-question__answers-item');
    cAnswers.forEach((answerElement, index) => {
      const deleteButton = answerElement.querySelector('.update-question__answers-item-delete');
      if (deleteButton) {
        deleteButton.addEventListener('click', () => {
          answers.splice(index, 1);
          if (answers.length === 0) {
            answers.push({
              id: 0,
              text: '',
            })
          }
          if (deleteButton.id !== '0') {
            removedAnswersID.push(Number(deleteButton.id));
          }
          renderAnswers();
        });
      }
    });
  };

  switch (type) {
    case 1:
      radioButton.checked = true;
      renderAnswers();
      break;
    case 2:
      checkboxButton.checked = true;
      renderAnswers();
      break;
    default:
      textButton.checked = true;
      renderAnswers();
      buttonAddAnswer.style.display = 'none';
      break;
  }

  radioButton.addEventListener('click', () => {
    checkboxButton.checked = false;
    textButton.checked = false;
    type = 1;
    buttonAddAnswer.style.display = 'block';
    renderAnswers();
  });
  checkboxButton.addEventListener('click', () => {
    radioButton.checked = false;
    textButton.checked = false;
    type = 2;
    buttonAddAnswer.style.display = 'block';
    renderAnswers();
  });
  textButton.addEventListener('click', () => {
    checkboxButton.checked = false;
    radioButton.checked = false;
    type = 3;
    buttonAddAnswer.style.display = 'none';
    renderAnswers();
  });

  const addButton = questionElement.querySelector('#add-answer-button');
  addButton.addEventListener('click', () => {
    if (answers.length >= 12) {
      return;
    }
    answers.push({
      id: 0,
      text: '',
    });
    renderAnswers();
  });

  // const clearButton = questionElement.querySelector('#clear-answers-button');
  // clearButton.addEventListener('click', () => {
  //   answers.length = 0;
  //   answers.push({
  //     id: 0,
  //     text: '',
  //   });
  //   renderAnswers();
  // });

  return questionElement;
};
