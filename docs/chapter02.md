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
* Enter your Git username and name when asked.  Once you are finished, the process of generating a new Rails app will begin.  Your new app will be ready in a few minutes.
* This short version of the Rails Neutrino script skips the process of running the Annotate gem at each step.  Saving time is handy when developing or maintaining Rails Neutrino.

## Follow Up
* In a terminal window, enter the command "tmux".
* Enter your new app's root directory and enter the command "sh neutrino.sh; sh server.sh".  This runs all the tests and then starts up your app in the local Rails server.
* If all goes well, there are no test failures or offenses, and you can view your app locally when you open your browser and visit the appropriate URL.  Please note that if you selected a non-zero port offset for your Docker container, the appropriate port number will be something different from 3000.

## Editing the Rails Neutrino Source Code
* There may be errors, test failures, or offenses.  Rails, RuboCop, and Rails Best Practices sometimes change.
* Update the code in your new app to correct these issues, and enter the command "sh neutrino.sh" again.
* When the errors, test failures, offenses, and other issues cited before are resolved, incorporate your corrections into the Rails Neutrino source code.
* Run the short.sh script again.  If everything pans out, you are ready to Git add/commit/push your changes and move on to the next chapter.
