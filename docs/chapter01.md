---
id: chapter01
title: Chapter 1: Fresh Start
sidebar_label: Chapter 1: Fresh Start
---

In this chapter, you will give yourself a fresh start for this tutorial by deleting all of your Docker containers and images on your local machine.

## Prerequisites
* Docker should be installed.  This is covered in the [Different Docker Tutorial](https://www.differentdockertutorial.com/).
* You should be familiar with the process of creating a new Rails app.

## What's the Point?
* A fresh start guarantees that you don't get stopped by conflicts as a result of trying to use the same port for two or more different Docker containers.
* A fresh start guarantees that you're using the latest Docker image with the latest version of Ruby and the latest versions of gems like rails, pg, nokogiri, and ffi.  While the latest versions of these gems will be installed if you don't already have them in your development environment, this takes time and slows you down.
* Some of the steps in this chapter may be overkill.  However, I believe it's better to get a fresh start when it isn't necessary than to have problems as a result of trying to use Docker container settings that conflict with your pre-existing setup.

## Repository For Using the RVM Rails General Docker Image
* If you still have the "rubyonracetracks" directory on your local machine as a result of going through the Different Docker Tutorial, delete it.
* In LXTerminal, enter the following commands:
```
cd
mkdir -p rubyonracetracks
cd rubyonracetracks
git clone https://gitlab.com/rubyonracetracks/docker-debian-buster-use.git
cd docker-debian-buster-use
```
* Enter the command "sh rvm-rails-general.sh".
* You will be asked about your desired offset for the port numbers. Enter "10".
* Enter the command "cd rvm-rails-general".
* Enter the command "sh nuke.sh".  This clears out all Docker containers and images stored on your local machine.
* Enter the command "sh download_new_image.sh".  This downloads the latest rvm-rails-general Docker image.  In a few minutes, you will be automatically logged into the Docker container.  While you're waiting, you can get started on the next chapter.
