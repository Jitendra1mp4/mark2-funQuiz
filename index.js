

import chalk from 'chalk';
import readlineSync from 'readline-sync';

// const maxScore = 45;
let score = 0;
var name;
// function to great 
function great() {
    name = readlineSync.question("apka nam kya hai : ");
    console.log(chalk.bold(chalk.green(name) + " Apka hamare mazedar quize me swagat hai.\n"))
}

// function to ask Questions
function ask() {
    console.log("Apko niche kuch Question diye gaye hain jiske answer apko ", chalk.bold.green("y") + " or " + chalk.bold.red("n"), "me dena hai.\n");
    //Array of Question objects
    let Qns = [
        { Q: "ne kabhi apne parents ki" + chalk.bold(" nakli sign ") + "ki hai..?", ans: "y" },
        { Q: "kabhi apne " + chalk.bold("clg ke principal ") + "bananna chahte hain..?", ans: "y" },
        { Q: "kabhi " + chalk.bold("maot") + " se bal-bal banche hain..?", ans: "y" },
        { Q: chalk.bold("swarg and nark") + "  me vishwash karte hain..?", ans: null },
        { Q: "" + chalk.bold("bhut-paret") + " me vishwash karte hain..?", ans: null },
        { Q: "ko " + chalk.bold("brush karna") + " ata/ati hai..?", ans: "n" },
        { Q: "har din " + chalk.bold("nahate") + " hai..?", ans: "n" },
        { Q: "kabhi do pahar " + chalk.bold("3 baje") + " tak soyen hain..?", ans: "y" },
        { Q: "india ke " + chalk.bold("Prime Minister") + " bananna chahte hain..?", ans: "y" },
        { Q: "kabhi " + chalk.bold("nakal karte") + " hue pakde gaye hain..?", ans: "y" }
    ];
    let i;
    // Asking questions
    for (i in Qns) {
        let j = parseInt(i) + 1;
        let ans = readlineSync.question((chalk.cyan(j) + ". Kya ap " + Qns[i].Q) + " ");
        if (Qns[i].ans === null)
            continue;
        if (ans.toLowerCase() === Qns[i].ans) score += 5;

    }
}

function showScore() {
    let design = chalk.bold.green;
    let msg = chalk.bold.blue("congratulation ") + design(name) + " Apne " + design.bgYellow(score) + " score kiya hai.";
    console.log(msg);
}

great();
ask();
showScore();