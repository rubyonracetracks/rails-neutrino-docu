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
* Enter your new app's root directory.
* Enter the command "sh neutrino.sh".  If all goes well, there are no test failures or offenses.
* Enter the command "sh server.sh".  Open your web browser to the appropriate URL to view your app locally.
