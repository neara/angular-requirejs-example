# Overview #

Bare bones project that shows how to integrate AngularJS with RequireJS, powered by Grunt, Bower and Karma.

# Requirements #

1. **node.js**

    Can be installed via *.pkg installer from [nodejs.org](http://nodejs.org/)
2. **npm**

    JavaScript package manager, can be installed by running `curl -L https://npmjs.com/install.sh | sh` from command line
3. **yeoman**

    Scaffolding tool, provides generator ecosystem. To install run `npm install -g yo`
4. **grunt**

    JavaScript task runner. To install run `npm install -g grunt-cli`
5. **bower**

    Package manager, used for dependency management. To install run `npm install -g bower`
6. **generator-angular-require (Optional)**

    Generator for basic angularjs + requirejs project. To install run `npm install -g generator-angular-require`
    Needed to kick start new projects.
    
7. **generator-karma-require (Optional)**

    Generator for *Karma*, test runner for JavaScript. To install run `npm install -g generator-karma-require`
    Needed to kick start new projects.
    
8. **npm-check-updates (Optional)**

    A quick way to check for outdated npm (system) packages
    
    
# How To Install #

1. Copy the project into your chosen directory by running

    `git clone git@github.com:neara/angular-requirejs-example.git`
    
2. `cd` into directory that holds `package.json`
    
3. To install all project system dependencies run

    `npm install`
    
4. To install all JavaScript dependencies run

    `bower install`
    
5. To verify that everything is ok run
    
    `grunt test`
    
    
# How To Run #

1. To view the app in browser, run

    `grunt serve`
    
2. To view production-ready app, run

    `grunt serve:dist`