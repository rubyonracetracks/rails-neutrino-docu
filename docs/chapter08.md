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
* When the scan is finished, you'll see security warnings.
* There are two warnings about cross-site scripting.  These pertain to the use of the email_munger gem (to make email addresses more difficult for bots to scrape).  Mark these as false positives.
* There are two warnings about "dynamic render path".  These pertain to the user and admin index pages.  Mark these as false positives.
* There is a warning about a cross-site request forgery.  It says that "protect_from_forgery" should be in the application controller.  (This was provided in Rails 4 but dropped in Rails 5.)  Mark this as a false positive.
* Add the source code for the Hakiri badge to the badge section in your app's README.md file.
* Enter the following commands:
```
git add .
git commit -m "Added the Hakiri badge"
git push origin master
```

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
