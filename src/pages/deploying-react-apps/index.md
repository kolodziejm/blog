---
title: Deploy React app to Github Pages
date: 2018-12-11
category: React
thumbnail: './thumbnail.jpg'
---

You've built your fresh React app and now want to show it to the world? I'll show you how you can do it very easily using well-known Github Pages!

## Create github repository*

If you haven't done it already - you need to create a remote github repository where you'll push your code. Visit **github.com** and create it using the plus button. Once you've done it, copy the ```git remote add origin``` command with a link, you'll need it later

## Initialize local git repository*

You can omit this step if you've already used git in your project. If not, open the terminal in your React project folder and type ```git init``` - this will initialize local git repository. When you've done it, paste the ```git remote add origin``` command from previous step.

## Install gh-pages

If you setup remote and local git repositories - then you're ready for deploy. In order to do that we need to install an external package called **gh-pages** using ```npm install --save-dev gh-pages``` Then you'll need to tweak your **package.json** a little bit.

In the root of this file add a new key-value pair - ```"homepage": "https://USERNAME.github.io/REPONAME"``` and replace USERNAME with your github username as well as REPONAME with the github repository name.

In your **"scripts"** section add 2 new scripts - ```"predeploy": "npm run build"``` and ```"deploy": "gh-pages -d build"``` These commands will build the React app, creating optimized code and will push the contents of the build folder to the remote Github repository.

## Deploy time

After you've done these steps there is only one more thing to do! All you have to do is type ```npm run deploy``` After a short period of time your app will be published on the URL you've specified in package.json
