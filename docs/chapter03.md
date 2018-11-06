---
id: chapter03
title: Chapter 3: Main Script
sidebar_label: Chapter 3: Main Script
---

## Creating the App
* If you have not already downloaded the Rails Neutrino source code to the shared directory of the rails-general Docker container, please go back to the previous chapter and follow the instructions for doing this.
* Enter the rails-general Docker container, and go to the root directory of the Rails Neutrino source code.
* Enter the command "sh main.sh".
* If you reset your Docker container since you last entered your Git username and name, you will be asked to enter them again before you can continue.
* The process of generating a new Rails app will begin.  Your new app will be ready in a several minutes.
* This main version of the Rails Neutrino script runs the Annotate gem at the end of each step that this tool is available.  The main.sh script is the one to use when creating an boilerplate template app to be used for the Generic App gem.

## Follow Up
* If you are not already using a tmux window, enter the command "tmux".
* Enter your new app's root directory and enter the command "sh neutrino.sh; sh server.sh".  This runs all the tests and then starts up your app in the local Rails server.  If all goes well, there are no test failures or offenses.  After the tests have been completed, the Rails server will run.  If all goes well, you will be able to view your app locally when you open your browser to the appropriate URL.  Please note that if you selected a non-zero port offset for your Docker container, the appropriate port number will be something different from 3000.
* Press Ctrl-b and then "c" to create a new tmux window.  Go to your app's root directory, and use this tmux window for entering commands.
