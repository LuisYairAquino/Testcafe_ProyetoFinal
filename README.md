# Project Title
***Testcafe_ProjectoFinal***

## Getting Started
This repository contains the diverse modules that have were developed with the intention to test the page 'http://automationpractice.com/' using Test Cafe. In case you are interested in downloading and executing my project to see what I have done, please check the steps below for more details.

### Prerequisites
The next tools were used to Develop and Execute the exercises present in this repository:
* [NodeJS](https://nodejs.org/en/download/) - As JavaScript runtime environment to execute JavaScript code. 
* [NPM](https://www.npmjs.com/) - As package manager for the JavaScript programming language.
* [Visual Studio Code](https://code.visualstudio.com/download) - As Development IDE.
* [Testcafe](https://devexpress.github.io/testcafe/) - As Testing Framework.
* [Git](https://git-scm.com/downloads) - As version controller.
* [Chrome](https://www.google.com/chrome/) and [FireFox](https://www.mozilla.org/en-US/firefox/new/) at least.
> Note: I´m using Win 10 for this project, not sure if this might be relevant.

### Installing
Below is the installation process I had to perform, in case you already have the tools, please jump to the last part of Step 4 where the repo will be cloned.

**1.- Download and install [NodeJS](https://nodejs.org/en/download/)** based on your Operating System, as well as the version you´ll like to have. Follow the instructions displayed by the installer until the installation is successfully completed.  
Once the installation is completed, you can **Check Node version**; open Command Line and type the next instruction to get the installed NodeJS version:  
`$ node -v`  
Another process to perform is, to **Check NPM version**, once again open Command Line and this time type:  
`$ npm -v`  
If you want to get sure **NodeJS** works, create on your desktop a file named "hello.js", open the file, and enter the next line  
`console.log('NodeJS is installed!');"`  
To execute the code, open the command line, navigate to the desktop folder, then type  
` $ node hello.js`  
This will start Node.js and execute the hello.js file. If you see a message reading `Node is installed!`, congratulations you are one step closer to see my project working.

**2.- Download and Install [Visual Studio Code](https://code.visualstudio.com/download)** based on your Operating System, as well as the version you´ll like to have. Follow the instructions displayed by the installer until the installation is successfully completed.  
Once the installation is completed and you want to have a nice button that will help you to run the scripts, I suggest you click `Ctrl+Shift+X` search and install the Extension __Code Runner__, now you are another step closer.

**3.- Installing [Testcafe](https://devexpress.github.io/testcafe/)**, hey! come back here, you don´t need to download anything for Testcafe (you already have what you need), that was just an informative link. Ok, open Command-Line and to start installing Testcafe type:  
`$ npm install -g testcafe` (you can go and get a snack while the system does all the work)  
 Once done, it´s time to **Check Test Cafe Version**, go back to the Command-Line and type:  
`$ testcafe -v`  
You can also check the list of browsers that you have available, just type in command Line:  
`$ testcafe -b`  
Need help???  
`$ testcafe -h`  
If you want to get sure **Testcafe** works, create on your desktop a file named "test.js", open the file, and enter the next:  
```javascript
import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('http://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    // Test code
});
```
To execute the file "test.js" in Chrome, open the Command Line navigate to Desktop, and type `$ testcafe chrome new.js`  
For Firefox you can type `$ testcafe chrome new.js`
 
**4.- Installing [Git](https://git-scm.com/downloads)** based on your Operating System, as well as the version you'll like to have. Follow the instructions displayed by the installer until the installation is successfully completed.
Once the installation is completed, locate on your desktop a Direct Access called Git Bash and double click on it to launch, navigate to a folder where you'd like to download my repo, create a folder caller repo and..... wait!!!, we forgot to configure Git, we'll need your user name and email, (if you do not have a GitHub account, go get one and then come back)... ready. open Git Bash again and type `$ git config --global user.name "YOUR_GIT_USERNAME"` press enter, then `$ git config --global user.email "EMAIL_IN_GIT"`, press enter.  
**Cloning the repo**
To clone my repo, open Git Bash and type `$ git clone https://github.com/pedrobarragan30/Testcafe_Bootcamp`

**5.- To run a Script** (let's try to run practica3.js), open Visual Studio Code, in the main page locate a link that reads `Open folder...` and locate the repo that you have just cloned; locate at the extreme left bar the "Explorer" icon, click on it and search for "Testcafe" folder and expand it. Now you are inside the directory that contains the practica3.js file.
Locate at the menu bar the option "Terminal", expand it and select "New Terminal" this should open a new area at bottom of Visual Studio Code, in the command prompt write the next:

* _To run a script, use the command_ `$ testcafe <BrowserName> <ScriptToRun>`
* _To run a script using incognito mode, use the command_ `$ testcafe "<BrowserName> -incognito" <ScriptToRun>`
* _To run a script using headless mode, use the command_ `$ testcafe <BrowserName>:headless <ScriptToRun>`
* _To run a script and record video, use the command_ `$ testcafe <BrowserName> <ScriptToRun> --video Videos`
* _To run a script and generate a report, use the command_ `$ testcafe <BrowserName> <ScriptToRun> --reporter html:Reports/<ReportName>.html`
* _To run a script without taking screenshots, use the command_ `$ testcafe <BrowserName> <ScriptToRun> --disable-screenshots` 
* _To run a test from a script, use the command_ `$ testcafe <BrowserName> <ScriptToRun> -t "<TestToRun>"` 
***NOTE 1: You can combine the modifiers, now you are ready to have fun!*** :smile:
***NOTE 2: BrowserName can be firefox or chrome***

## Folder Structure
Testcafe_ProyetoFinal (Main folder)  
-> Documentation (Subfolder with Documentation files)  
-> Reports (Subfolder with Reports)
-> Videos (Subfolder with Videos recorded)
-> screenshots (Subfolder to store the Screenshots)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details