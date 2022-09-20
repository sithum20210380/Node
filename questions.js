/*const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preffered progarmming language?"
]
const ask = (i=0)=>{
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(`>`);
};
ask();

const answers = [];
process.stdin.on("data",  data =>{
    answers.push(data.toString().trim());
    if(answers.length <questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
    // process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    process.exit(); 
});

process.on("exit", () => {
    const [name, activity , lang] = answers;
    console.log(`
    Thank You for Answers.
    Go ${activity} ${name} you can write ${lang} code later!!
    `);
});*/

/* process.stdout.write("Hello");
process.stdout.write("World \n\n\n"); */

/*const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});*/
const collectAnswers =require("./lib/collectAnswers");
const questions = [
    "What is your name?",
    "Where do u live",
    "What are going to do with node js?"
];

/*module.exports = (questions,done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.lenght < questions.lenght){
            rl.question(questions[answers.length], questionAnswered);
        }else{
            done(answers);
        }
    };
rl.question(firstQuestion, questionAnswered);
};*/
const answersEvents = collectAnswers(questions);

answersEvents.on("answer" , answer=>
console.log(`question answered: ${answer}`));

answersEvents.on("complete",answers =>{
    console.log("Thank you for your answers");
    console.log(answers);
})

answersEvents.on("complete",() => process.exit());
