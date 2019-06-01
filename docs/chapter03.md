---
id: chapter03
title: Chapter 3: Main Script
sidebar_label: Chapter 3: Main Script
---

In the previous chapter, you used the short script for creating aa Rails app.  Now that you have ensured that Rails Neutrino works as expected (in a branch in your fork), you are ready to run the main script, which is longer.

## Creating the App
* In the Docker container, use the "cd" command to enter the root directory of the Rails Neutrino source code.
* Enter the command "sh main.sh".
* Because you reset your Docker container since you last entered your Git username and name, you will be asked to enter them again before you can continue.
* The process of generating a new Rails app will begin.  Your new app will be ready in several minutes.
* This main version of the Rails Neutrino script runs the Annotate gem at the end of each step that this tool is available.  The main.sh script is the one to use when creating an boilerplate template app to be used for the Generic App gem.

## Follow Up
* Open a new LXTerminal tab, and enter the command "sh join.sh" to enter the Docker container.
* Enter your new app's root directory and enter the command "sh build_fast.sh; sh server.sh".  This runs all the tests and then starts up your app in the local Rails server.  If all goes well, there are no test failures or offenses.  After the tests have been completed, the Rails server will run.  If all goes well, you will be able to view your app locally when you open your browser to http://localhost:3010.
* Open a new LXTerminal tab, and enter the command "sh join.sh".  Enter your new app's root directory.  Use this tab for entering commands.
