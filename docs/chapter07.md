---
id: chapter07
title: Chapter 7: Codecov Test Coverage
sidebar_label: Chapter 7: Codecov Test Coverage
---

In this chapter, you will add a Codecov Test Coverage CI badge to your source code.  This lets you or anyone else see the test coverage without having to set up the app locally.  I prefer Codecov because it's easy to work with and is available for BitBucket and GitLab as well as GitHub.

## Entering Your App on the Codecov Web Site
* Go to the [Codecov](https://codecov.io/) web site.  Sign up if you have not already done so.
* Select your new Rails app as one to be monitored.
* Codecov gives you a repo token.  This is used in your continuous integration build app to send its test coverage results to the Codecov service so that it can produce a test coverage badge.
* Go back to the [Travis CI](https://travis-ci.org/) web site.  Add the environment variable "CODECOV_TOKEN", and set it to the value provided by Codecov.  In the interest of security, do NOT set the option to display its value in the build log.

## Updating the Gemfile
* In the "test coverage" section of the Gemfile, add the following line:
```
gem 'codecov', require: false, group: :test
```
* Enter the command "bundle install".
* Enter the command "gem list codecov" to see which version of codecov is installed.  Pin the codecov gem in the Gemfile.
* Enter the command "bundle install".

## Updating the Test Helper File
* In the test/test_helper.rb file, add the following lines immediately after the SimpleCov section:
```
# BEGIN: codecov
if ENV.include? 'CODECOV_TOKEN'
  require 'codecov'
  SimpleCov.formatter = SimpleCov::Formatter::Codecov
end
# END: codecov
```
* In the test/test_helper.rb file, update the "minitest-reporters" section.  In the Travis CI environment, Codecov conflicts with the Minitest Reporters and leads to an uninitialized constant error and a failed build.  You must disable Minitest Reporters in the Travis environment.  Edit the test/test_helper.rb file and make the following change:
```
if ENV['CODECOV_TOKEN'].nil?
  # All source code in the "minitest-reporters" section goes here.
end
```
* Enter the command "sh git_check.sh".  All tests should pass, and there should be no offenses.
* Enter the following commands:
```
git add .
git commit -m "Added codecov"
git push origin master
```

## Running Codecov
* If all goes well, all tests will pass, and a test coverage figure will be reported to Codecov.  (It should be the same value that SimpleCov is giving you in your local setup.)
* Add the Markdown code for the Codecov test coverage badge to the README.md file.
* To commit the Codecov badge to the source code, enter the following commands:
```
git add .
git commit -m "Added the Codecov badge"
git push origin master
```
* The Travis CI badge should now appear on the README.md page of the source code.
