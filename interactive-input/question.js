const inquirer = require('inquirer');

async function askQuestions(questions) {
  const answers = {};

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const prompt = {
      type: 'input',
      name: question.name,
      message: question.message
    };

    if (question.choices) {
      prompt.type = 'list';
      prompt.choices = question.choices;
    }

    const answer = await inquirer.prompt(prompt);
    console.log(answer);
    answers[question.name] = answer;
  }

  return answers;
}

async function main() {
  const questions = [
    {
      name: 'name',
      message: '请输入您的姓名：'
    },
    {
      name: 'gender',
      message: '请选择您的性别：',
      choices: ['男', '女', '其他']
    },
    {
      name: 'age',
      message: '请输入您的年龄：'
    }
  ];

  const answers = await askQuestions(questions);
  console.log('您的回答是：', answers);
}

main();
