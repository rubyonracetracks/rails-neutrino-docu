---
id: chapter08
title: Chapter 8: Other Badges
sidebar_label: Chapter 8: Other Badges
---

In this chapter, you will add additional badges.  The Hakiri badge warns of security vulnerabilities.  The CodeClimate and Codacy badges rate the quality of your app.

## Hakiri Badge
* Go to the [Hakiri](https://hakiri.io/) web site.  Sign up if you have not already done so.
* Add your Rails app to the list of apps you want Hakiri to monitor.
* Run the scan.
* When the scan is finished, you'll see 5 security warnings.
* There are two warnings about cross-site scripting.  These pertain to the use of the email_munger gem (to make email addresses more difficult for bots to scrape).  Mark these as false positives.
* There are two warnings about "dynamic render path".  These pertain to the user and admin index pages.  Mark these as false positives.
* There's one more warning.  You'll take care of this in a moment.  (NOTE: If following the Generic App Tutorial led you here, this fifth issue has already been taken care of for you.)
* Add the source code for the Hakiri badge to the badge section in your app's README.md file.
* Enter the following commands:
```
git add .
git commit -m "Added the Hakiri badge"
git push origin master
```
* If following the Generic App Tutorial led you here, your Hakiri badge should show no issues at this point.  Skip ahead to the "CodeClimate Maintainability Badge" section.
* The Hakiri badge should appear on the README.md page in GitHub.  You may need to refresh your web browser.  Please note that there is still one issue left to take care of.
* The one remaining issue is that the Cross-Site Request Forgery in app/controllers/application_controller.rb.  To correct it, edit the file app/controllers/application_controller.rb and add the following line just after the line "class ApplicationController < ActionController::Base":
```
  protect_from_forgery with: :exception
```
* Enter the command "sh git_check.sh".  All tests should pass, and there should be no offenses.
* Enter the following commands:
```
git add .
git commit -m "Addressed the Cross-Site Request Forgery issue"
git push origin master
```
* Enter the command "sh heroku.sh".
* Now all security issues raised by Hakiri should be resolved.  Please note that it takes a moment for Hakiri to rescan your app.  You'll then have to refresh the GitHub page to see the updated Hakiri badge.


## CodeClimate Maintainability Badge
* Go to the [CodeClimate](https://codeclimate.com/) web site.  Sign up if you have not already done so.
* Add your Rails app to the list of apps you want CodeClimate to monitor.
* Run the build.
* When the build is finished, click on "Repo Settings" and then click on "Badges".  Add the source code for the CodeClimate Maintainability badge to the badge section in your app's README.md file.
* Enter the following commands:
```
git add .
git commit -m "Added the CodeClimate Maintainability badge"
git push origin master
```
* Enter the command "sh heroku.sh".
* The CodeClimate Maintainability badge should appear on the README.md page in GitHub.  You may need to refresh your web browser.


## Codacy Code Quality Badge
* Go to the [Codacy](https://www.codacy.com/) web site.  Sign up if you have not already done so.
* Add your Rails app to the list of apps you want Codacy to review.
* When the build is finished, your Codacy Code Quality badge will be ready.  Add the source code for it to the badge section in your app's README.md file.
* Enter the following commands:
```
git add .
git commit -m "Added the Codacy Code Quality badge"
git push origin master
```
* Enter the command "sh heroku.sh".
* The Codacy Code Quality badge should appear on the README.md page in GitHub.  You may need to refresh your web browser.
