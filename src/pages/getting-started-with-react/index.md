---
title: Getting started with React
date: 2018-11-03
category: React
thumbnail: './thumbnail.jpg'
---

In this post I'll show you how to setup React workflow to get you up and running with this amazing library.

## 1. Make sure you have NodeJS installed

In order to use the "React starter kit" you need to have the NodeJS present on your machine, so you can use the Node Package Manager - NPM. Open your command prompt / terminal and type ```node -v``` If you see the error you have to download the NodeJS from [NodeJS website](https://nodejs.org/en/). Just follow the instructions on the installer, and once you're finished type the ```node -v``` command again to make sure you have Node installed.

## 2. Creating the React project

Ok, so now you're ready to use the React starter which is called **create-react-app**. It's an official package created by developers working on React. In order to use it, go to the location where you'd like to create a folder using this package. Just open the terminal / command prompt in the location you're interested in and type ```npx create-react-app name-of-your-project``` This will download all the required packages and create the basic boilerplate of the React project. Once you're done open the newly created folder in the IDE of your choice.

## 3. How to use it

You've created the boilerplate folder, opened it in the IDE and now you're probably wondering what are all these files for. We'll briefly walk through the folder structure. 

Before we do that though, open the integrated terminal in your IDE and type ```npm start``` This command will spin up the local development server. Once it's finished you should see the starter React page with a spinning logo. Let's go through these folders now. 

* ### node_modules

Here you'll find all the files for the dependencies used in the project. You don't have to touch this folder at all. If you want to copy the project folder and use it elsewhere for example, **you don't have to copy node_modules folder**.

* ### public

You'll find 3 files here - **favicon.ico, index.html and manifest.json**. Take a look at **index.html**. Notice that in the ```<body> ``` tags there's only an empty ```<div id="root">``` placed. In React **you don't write raw HTML at all**. Instead there is a JSX, which you use directly in your Javascript files. It's a Javascript representation of the DOM. You use it pretty much like normal HTML, but with slight differences. 

When it comes to the index.html file, you want to use it for linking external extras for your project, like google fonts, analytics and changing the title or adding meta tags.

* ### src

It's the main folder you'll be working with. All of your Javascript and CSS files will be created here. Now, you should know what React is in its heart - **it's a library which helps you create components, nothing more, nothing less.** Here you'll find the example **App.js** component. Take a look at its structure. 

On the top you'll see the import of the React library. This allows you to write that JSX syntax I mentioned earlier. Below that there is a logo import and CSS file import, which gets all the classes from this CSS file. Right under the imports you'll see the basic component structure, and one way of defining it. Inside it there is a ```render()``` method which **returns the JSX**. Here we define what the component should render to the screen. In App.js it's basically the structure of that starter React page with that spinning logo you saw earlier . 

I mentioned earlier that JSX is basically HTML with slight differences. You already can see one of them - in JSX tags instead of classes we use **classnames**. Now, where does this App CSS class comes from? Well, it comes from that imported CSS file on the top. Using CSS in React is as simple as creating an external CSS file, importing it to the JS file and using its classes in JSX tags with ```classname="Your-CSS-Class"```. It's one way of using CSS though, in future post I'll go through all the ways of using CSS in React.

What about **index.js?** Remember that ```<div id="root">``` from the **index.html**? The **index.js** is responsible for mounting your components into the real DOM. Here it imports the **App.js** file which holds the structure of that example page and puts it in that root div.

* ### Root folder.

There are also 2 important files worth mentioning - **package.json** and **README.md**. 

**Package.json** holds the information about the dependencies used in the project and the scripts you can use. You've already used one of them - ```npm start``` You can also install all the dependencies listed via ```npm install``` That's why copying node_modules folder isn't required, you just copy all the other files and folders and ```npm install``` it in a new location.

**README.md** file is useful for providing information about the project. The content of the README file will be shown for example on the repository page on Github, once you'll publish the project.

## What to do now?

Now you're ready to start working with React. If you want to learn from scratch there is tutorial on the [official page](https://reactjs.org/tutorial/tutorial.html). It will guide you through all the basics. You already have a new project set up, all you have to do is:

1. Click on Option 2: Local Development Environment to the right
2. Expand the instructions for following along
3. Continue from step number 3.

If you don't like the tutorial, you can always go step by step through the concepts in the [docs](https://reactjs.org/docs/hello-world.html).