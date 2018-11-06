---
id: chapter05
title: Chapter 5: Heroku Deployment
sidebar_label: Chapter 5: Heroku Deployment
---

In this chapter, you will deploy your new Rails app to Heroku, which offers free accounts for simple apps that aren't heavy users of resources.

## Prerequisites
* In the Gemfile, the pg gem MUST be specified for the production environment.
* In the Gemfile, the sqlite3 gem must NOT be specified for the production environment.  (You may use it in the development and testing environments.)
* Your Rails app's index page should show something other than the default Rails splash page, which does not work in Heroku.
*  All of the above conditions are covered by default when you use Rails Neutrino or Generic App to create your Rails app.

## Procedure
* If you have not already done so, sign up for a [Heroku account](https://www.heroku.com/).
* In the root directory of your app, enter the command "sh credentials.sh".  If you have not entered your Heroku credentials since you last reset the Docker container, you will be asked to do so at this point.
* In your app's root directory, enter the command "heroku create".
* In your browser, visit your assigned URL. You will see the initial Heroku splash screen, because the Heroku server does not yet have your source code.
* Go to your app's root directory, and enter the following commands:
```
HEROKU_TMP="${PWD##*/}"
echo $HEROKU_TMP # Displays the name of your app
echo $HEROKU_TMP > 'config/heroku_name.txt' # Saves the name of your app
heroku rename $HEROKU_TMP # Renames the Heroku app
```
* In your browser, visit your new URL. You will again see the initial Heroku splash screen.
* To see which Heroku project you are currently configured to push to, enter the command "git remote -v".
* Deploy your app by entering the command "sh heroku.sh".
* When the deployment process has finished, refresh the browser tab that has your app's Heroku URL.  Now your app has replaced the Heroku splash screen.
* Enter the following commands:
```
git add .
git commit -m "Configured for Heroku"
git push origin master
```
* Enter the command "sh heroku.sh".
