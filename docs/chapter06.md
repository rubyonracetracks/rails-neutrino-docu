---
id: chapter06
title: Chapter 6: Travis CI
sidebar_label: Chapter 6: Travis CI
---

In this chapter, you will add a Travis CI badge to your source code.  This lets you verify that your app passes all tests simply by looking at the source code on GitHub.  I prefer Travis CI because it's simple to configure and allows you to test your Rails app with multiple Ruby versions at once.  This is handy when it's time to upgrade your Ruby version.

## Entering Your App on the Travis CI Web Site
* Go the [Travis CI](https://travis-ci.org/) web site.  Sign up if you have not already done so.
* Select your new Rails app as one to be monitored.

## Travis Configuration File
* Enter the following commands in your local terminal within your app's root directory:
```
touch .travis.yml
touch config/database.yml.travis
```
* Give the config/database.yml.travis file the following content:
```
test:
  adapter: postgresql
  database: travis_ci_test
```
* Give the .travis.yml file the following content:
```
language: ruby
rvm:
  - x.y.z

services:
  - postgresql

before_install:
 - gem update --system
 - gem install bundler

before_script:
  - psql -c 'create database travis_ci_test;' -U postgres
  - cp config/database.yml.travis config/database.yml
  - rails db:migrate

script:
  - rails test

cache:
  bundler: true
  directories:
    - vendor/cache
```
* In your local terminal, enter the command "ruby -v" to see which version of Ruby you are using.
* In the .travis.yml file, replace "x.y.z" with the version number of Ruby in use.  (Omit the "p" and everything that comes after it.)
* Enter the following commands:
```
git add .
git commit -m "Configured for Travis CI"
git push origin master
```

## Running Travis CI
* Go back to the Travis CI site.  Travis CI will test your app.  This will take a few minutes.  Subsequent Travis builds will be faster, because you have configured Travis to cache the gems installed with the "bundle install" command.
* If all goes well, all tests will pass.
* Add the Markdown code for the Travis status badge to the README.md file just after the top heading.
* To commit the Travis CI badge to the source code, enter the following commands:
```
git add .
git commit -m "Added the Travis CI badge"
git push origin master
```
* The Travis CI badge should now appear on the README.md page of the source code.