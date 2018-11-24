---
id: chapter09
title: Chapter 9: Updating the Generic App Gem
sidebar_label: Chapter 9: Updating the Generic App Gem
---

In this chapter, you will update the Generic App gem to use the Rails app you've been working on in this tutorial as the basis for generating all new Rails apps.  If you used the Generic App gem to create your Rails app, and following the instructions led you to this Rails Neutrino tutorial, this chapter is not relevant for you.

## Forking the Source Code
Go to [https://bitbucket.org/rubyonracetracks/generic_app/src/master/](https://bitbucket.org/rubyonracetracks/generic_app/src/master/).

## Downloading the Source Code
* Reset your Docker container.
  * In every tmux window you have opened to use the rails-general Docker image, enter the command "exit".
  * Once you have closed every tmux window, enter the "exit" command again.  This takes you out of Docker and back into the host environment.
  * Enter the command "sh reset.sh".  This resets your Docker container and automatically logs you back in.
* Go to your fork of the Generic App source code on BitBucket.  Press the "Clone" button, and copy and paste the git clone command into your Docker container.
* From the generic_app directory, enter the command "sh credentials.sh".  Enter your name and email address when prompted.

## Editing the Source Code
* From the generic_app directory and enter the command "git checkout -b version_x_y_z".  (Replace x, y and z with the new version of Generic App.  The lib/generic_app/version.rb file contains the current version of Generic App.)
* Edit the file lib/generic_app/version.rb and update the version number.
* Edit the file lib/generic_app.rb and update the value of the variable URL_TEMPLATE (defined at the beginning).
* Go to the root directory of generic_app.  Test the gem by entering the command "sh all.sh".  All tests should pass, there should be no RuboCop offenses, and the Rails Neutrino timestamp of your new app should correspond to that of the app you created.
* Test the gem AND the app it creates by entering the command "sh long_test.sh".  All tests should pass, there should be no RuboCop offenses, and the Rails Neutrino timestamp of your new app should correspond to that of the app you created.
* If necessary, make additional changes, and then repeat the previous steps to make sure that everything pans out.
* If all goes well, you are ready to Git add, commit, and push the source code.
* Submit a pull request for your branch.
* If all goes well, your pull request will be accepted, and a new version of the Generic App gem will be published.

## Congratulations!
You have updated the template app used by the Generic App gem!
