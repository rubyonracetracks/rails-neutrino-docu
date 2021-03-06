---
id: chapter09
title: Chapter 9: Updating the Generic App Gem
sidebar_label: Chapter 9: Updating the Generic App Gem
---

This chapter explains the procedure for updating the Generic App gem to use the Rails app.

## Generic App Tutorial
If the Generic App Tutorial sent you here, it's time to [return](https://www.genericapp.net/docs/chapter04).

## Legacy Rails Apps
If the Legacy Rails Apps site sent you here, it's time to [return](https://www.legacyrailsapps.com/docs/03-00.html).

## Does This Chapter Apply To You?
* If you're just familiarizing yourself with Rails Neutrino and Generic App tools and have no intention of contributing just yet, this chapter does not apply to you.
* If you wish to contribute to the [Generic App](https://www.genericapp.net/) tool, then you do need to follow the instructions in this chapter.

## Prerequisites
* In the previous chapters, you created a Ruby on Rails app using your fork of the Rails Neutrino source code.
* For this chapter, use the mainline Rails Neutrino source code to generate a new Ruby on Rails app.  (This ensures that everyone is on the same page.)  Then follow the procedures in the previous chapters for pushing your new app to GitHub and adding continuous integration badges.

## Forking the Source Code
* Go to [https://bitbucket.org/rubyonracetracks/generic_app/src/master/](https://bitbucket.org/rubyonracetracks/generic_app/src/master/).
* If you have already forked the source code for the Generic App gem, sync your fork to the upstream repository, and skip the rest of this section.
* Go to the left side of the screen, and click on the big "+" sign.  Select the option to fork this repository.

## Downloading the Source Code
* Reset your Docker container.
  * In every LXTerminal tab you have opened, exit the Docker container.  Close all but one tab.
  * In the remaining LXTerminal tab, enter the command "sh reset.sh".  This resets your Docker container and automatically logs you back in.
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
