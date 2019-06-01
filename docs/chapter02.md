---
id: chapter02
title: Chapter 2: Short Script
sidebar_label: Chapter 2: Short Script
---

Rails Neutrino has a short script and a long script for creating a new Ruby on Rails app.  This chapter focuses on the short script.

## Forking the Source Code
* While you're waiting for your Docker container to be ready, it's time to fork the Rails Neutrino source code.
* Go to [GitLab](https://about.gitlab.com/).  If you don't already have a GitLab account, start one now.
* Go to the [Rails Neutrino source code](https://gitlab.com/rubyonracetracks/rails_neutrino_5).  Fork this repository.  If you need to make revisions to the source code, make them in your fork, and then submit a merge request.

## Creating the App
* You began downloading the rvm-rails-general Docker image at the end of the previous chapter.  When you're finally logged into the rvm-rails-general Docker container, you are ready to begin.
* Use the "git clone" command in your terminal to download your fork of the Rails Neutrino source code.
* Use the "cd" command to enter the root directory of the Rails Neutrino source code.
* Enter the command "sh short.sh"
* Enter your Git username and name when asked.  Once you are finished, the process of generating a new Rails app will begin.  Your new app should be ready in a few minutes.
* This short version of the Rails Neutrino script skips the process of running the Annotate gem at each step.  Saving time is handy when developing or maintaining Rails Neutrino.

## Follow Up
* Start a new tab in LXTerminal.  Enter the command "sh join.sh" to enter the Docker container.
* Enter your new app's root directory and enter the command "sh build_fast.sh; sh server.sh".  This runs all the tests and then starts up your app in the local Rails server.  When the process is finished, you should be able to view the app at http://localhost:3010.
* If all goes well, there are no test failures or offenses, and you can view your app locally when you open your browser and visit the appropriate URL.

## Editing the Generated App's Source Code
* There may be errors, test failures, or offenses.  Rails, RuboCop, and Rails Best Practices sometimes change.  If there are no errors, test failures, or offenses, you can skip the rest of this section and the section on editing the Rails Neutrino source code.
* Update the code in your new app to correct these issues.  Go to the terminal tab where you are running the Rails server, and press Ctrl-c to stop the server.
* Enter the following commands:
```
git init
git add .
git commit -m "Initial commit"
```
* Enter the command "sh all.sh; sh server.sh".  Watch the messages.  When the process is complete, view the app in your browser.  If necessary, update the code again, shut down the Rails server, and repeat this step.
* When the errors, test failures, offenses, and other issues cited before are resolved, enter the command "git diff" to see the changes you made.
* Once you know what changes are necessary to get the generated app to pass, you can work on updating the Rails Neutrino source code.

## Editing the Rails Neutrino Source Code
* Start a new branch in your fork of the Rails Neutrino source code.  Do NOT make changes in the master branch.  Remember: The master branch of your fork should follow the master branch of the mainline source code.  The only change you should EVER make to your master branch is to sync it to the mainline source code.
* Incorporate your corrections into the Rails Neutrino source code.  The SearchMonkey tool can help you find the relevant part of the Rails Neutrino code for each correction.
* Run the short.sh script again.  If necessary, repeat the steps in the previous section to figure out what changes need to be made to the Rails Neutrino source code.
* When your revised Rails Neutrino source code produces a Rails app that works as expected with no errors, test failures, or offenses, you are ready to Git add/commit/push your changes.

## Merge Request
* Git add/commit/push your changes to the Rails Neutrino source code.
* Submit your branch for editing the code as a merge request.

## Reset the Docker Container
* Stop the local Rails server.
* Exit the Docker container from each terminal tab.
* Close all the terminal tabs except one.
* In the remaining terminal tab, enter the command "sh reset.sh" to reset the Docker container and log back in.
* You are now ready to move on to the next chapter, where you will try out the long script.
