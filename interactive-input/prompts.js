const prompts = require('prompts');

function isValidPackageName(projectName) {
    return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName);
}

async function main() {
    let result = {};
    try {
        result = await prompts(
            [{
                    name: 'name',
                    type: 'text',
                    message: 'Your name:',
                    initial: 'xiaoming'
                },
                {
                    name: 'shouldOverwrite',
                    type: 'confirm',
                    message: () => {
                        return 'Remove existing files and continue?';
                    }
                },
                {
                    name: 'overwriteChecker',
                    type: (prev, values) => {
                        if (values.shouldOverwrite === false) {
                            throw new Error('Operation cancelled');
                        }
                        return null;
                    }
                },
                {
                    name: 'packageName',
                    type: 'text',
                    message: 'Package name:',
                    initial: 'name',
                    validate: dir => isValidPackageName(dir) || 'Invalid package.json name'
                },
                {
                    name: 'needsTypeScript',
                    type: 'toggle',
                    message: 'Add TypeScript?',
                    initial: false,
                    active: 'Yes',
                    inactive: 'No'
                },
                {
                    name: 'needsJsx',
                    type: 'toggle',
                    message: 'Add JSX Support?',
                    initial: false,
                    active: 'Yes',
                    inactive: 'No'
                },
                {
                    name: 'needsRouter',
                    type: 'toggle',
                    message: 'Add Vue Router for Single Page Application development?',
                    initial: false,
                    active: 'Yes',
                    inactive: 'No'
                },
                {
                    name: 'needsPinia',
                    type: 'toggle',
                    message: 'Add Pinia for state management?',
                    initial: false,
                    active: 'Yes',
                    inactive: 'No'
                },
                {
                    name: 'needsVitest',
                    type: 'toggle',
                    message: 'Add Vitest for Unit Testing?',
                    initial: false,
                    active: 'Yes',
                    inactive: 'No'
                },
                {
                    name: 'needsE2eTesting',
                    type: 'select',
                    message: 'Add an End-to-End Testing Solution?',
                    initial: 0,
                    choices: (prev, answers) => [{
                            title: 'No',
                            value: false
                        },
                        {
                            title: 'Cypress',
                            description: answers.needsVitest ?
                                undefined : 'also supports unit testing with Cypress Component Testing',
                            value: 'cypress'
                        },
                        {
                            title: 'Playwright',
                            value: 'playwright'
                        }
                    ]
                },
                {
                    name: 'needsEslint',
                    type: 'toggle',
                    message: 'Add ESLint for code quality?',
                    initial: false,
                    active: 'Yes',
                    inactive: 'No'
                },
                {
                    name: 'needsPrettier',
                    type: 'toggle',
                    message: 'Add Prettier for code formatting?',
                    initial: false,
                    active: 'Yes',
                    inactive: 'No'
                }
            ], {
                onCancel: () => {
                    throw new Error('Operation cancelled');
                }
            }
        );
    } catch (err) {
        console.log(err.message);
    }
    console.log(result);
}

main();