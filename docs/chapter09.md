---
id: chapter09
title: Chapter 9: Updating the Generic App Gem
sidebar_label: Chapter 9: Updating the Generic App Gem
---

In this chapter, you will update the Generic App gem to use the Rails app you've been working on in this tutorial as the basis for generating all new Rails apps.  If you used the Generic App gem to create your Rails app, and following the instructions led you to this Rails Neutrino tutorial, this chapter is not relevant for you.

## Downloading the Source Code
Download the Generic App source code from [BitBucket](https://bitbucket.org/rubyonracetracks/generic_app/src/master/).

## Editing the Source Code
* Edit the file generic_app/lib/generic_app/version.rb and update the version number.
* Edit the file generic_app/lib/generic_app.rb and update the value of the variable URL_TEMPLATE (defined at the beginning).
* Go to the root directory of generic_app.  Test the gem by entering the command "sh all.sh".  All tests should pass, there should be no RuboCop offenses, and the Rails Neutrino timestamp of your new app should correspond to that of the app you created.
* Test the gem AND the app it creates by entering the command "sh long_test.sh".  All tests should pass, there should be no RuboCop offenses, and the Rails Neutrino timestamp of your new app should correspond to that of the app you created.
* If necessary, make additional changes, and then repeat the previous steps to make sure that everything pans out.
* If all goes well, you are ready to commit the source code and publish the next version of the Generic App gem.

## Congratulations!
You have updated the template app used by the Generic App gem!
