const inquirer = require('inquirer');



function getUserInput() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your GitHub username',
            name: 'username',
        },
        {
            type: 'list',
            message: 'Select your favorite color',
            name: 'color',
            choices: [
                {
                    name: 'Red',
                    value: 'red'
                },
                {
                    name: 'Blue',
                    value: 'blue'
                },
            ]
            
        }
    ])
}
async function main() {
    const { username, color } = await getUserInput();
    console.log(username, color);
}
main();