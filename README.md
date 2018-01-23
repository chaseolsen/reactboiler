# React Boiler Plate
### by Chase Olsen

## Technologies Included

* ReactJS
* Express (for node server)
* Webpack (to transpile ES6 and all js files into client.min.js)
* Babel (to handle ES6 code with webpack)
* Morgan (For detailed log info for Express) 

## Project Overview

Basic ReactJS boiler with basic routes setup using React Router v4. Webpack is preconfigured in a minimal fashion.

Here is basic file structure of project

    ├── node_modules            # Will be generated when running 'npm install'
    ├── server                  # Contains index.js for Express server and controllers for getting post data.
    ├── app                     # Source files, client.min.js, components, pages, etc.
    ├── .gitignore              # To prevent pushing big files such as Node_Modules
    ├── package.json            # Contains Dependency List
    ├── webpack.config.js       # Webpack Configuration File
    └── README.md


## How to Run Everything
(be sure node is installed)

1. Clone Project
```
git clone https://github.com/chaseolsen/reactboiler.git
```
2. Enter Project
```
cd reactboiler
```

3. Install Dependencies
```
npm install
```

4. Run Node Server
```
node server (or nodemon server)
```
Done! Then navigate to Localhost:3000

## Extra Details About Development Environment

Webpack is setup to use Babel with ES6, however, I've yet to add Sass/Less. Will be adding soon.
```
webpack --w
```

If nodemon is installed you can also run this to automatically restart server if any changes are detected
```
nodemon server
```

