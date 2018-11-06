---
id: chapter02
title: Chapter 2: Short Script
sidebar_label: Chapter 2: Short Script
---

## Creating the App 
* Use the reset.sh script to enter a Docker container based on one of the rails-general Docker images.
* Enter the following commands:
```
git clone https://gitlab.com/rubyonracetracks/rails_neutrino_5.git
cd rails_neutrino_5
sh short.sh
```
* The process of generating a new Rails app will begin.  Your new app will be ready in a few minutes.
* This short version of the Rails Neutrino script skips the process of running the Annotate gem at each step.  Saving time is handy when developing or maintaining Rails Neutrino.

## Follow Up
* In a terminal window, enter the command "tmux".
* Enter your new app's root directory and enter the command "sh neutrino.sh; sh server.sh".  This runs all the tests and then starts up your app in the local Rails server.  If all goes well, there are no test failures or offenses.  After the tests have been completed, the Rails server will run.  If all goes well, you will be able to view your app locally when you open your browser to the appropriate URL.  Please note that if you selected a non-zero port offset for your Docker container, the appropriate port number will be something different from 3000.
