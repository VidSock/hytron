---
templateKey: article-page
title: Using SASS in Coda with WordPress on a remote server
slug: coda-sass-wordpress
date: 2019-12-23T22:45:24.314Z
cover: /img/coda-sass-wordpress-1600x339.jpg
tags:
  - coda
  - sass
  - wordpress
  - remote
  - html
  - css
  - javascript
meta_title: Using SASS in Coda with WordPress on a remote server
meta_description: I’ve been searching for a very long time for a solution to use SASS with Coda.
---

I’ve been searching for a very long time for a solution to use SASS with Coda.

Actually, with a free plugin from Panic’s website: (<https://panic.com/coda/plugins.php?id=101>) I’ve been able to use SASS directly in my code editor of choice, Coda.

However, due to the nature of how the SASS compiler works, it forces you to use a local development workflow as it is only capable of saving to a local directory.

This sucks for me as I tend to work on remote servers constantly especially when I am working with WordPress. It’s just not feasible for me to have a ton of different WordPress installs setup on my Mac.

Actually, I can and do have multiple installs using WordPress Multi Site but I don’t really want to have all of my sites, plus all of my clients sites running on my personal Mac.

So for that reason, I have been resigned to not use SASS on WordPress installs just because it’s a pain in the ass to constantly upload an extra file from my desktop; up to the server over and over again while checking in a browser each time I make a change.

## Enter the Swiss Army Tool called Hazel

Now, I’ve had a tool installed on my Mac for several years called Hazel. Hazel is a sort of “Automator on Steroids” but I’ve never really thought about using it for this type of thing until recently. Download Hazel by Noodlesoft here: ([https://www.noodlesoft.com](https://www.noodlesoft.com/))

You can buy Hazel for only $32 and it is totally worth it, as it is one of the most powerful tools I have on my Mac. It can do so many things. Things I had not even thought of, like this.

I finally got fed up with not having SASS on my WordPress sites, so I set out to find a way to make it happen.

In the end, Hazel actually has a great built-in capability to watch a folder and then do something based on different criteria like modified dates, etc…

> Some of the plants found on the Blue Mountain cannot be found anywhere else in the world and they are often of a dwarfed sort.

So that is where I began and I quickly learned that Hazel now offers the ability to upload files to remote web servers through ftp, ssh, and sftp.

## Houston, we have launch!

Bingo! This was the last piece of the puzzle and with this setup, I now edit one file on my local setup (the default style.css for WordPress) and then it automatically duplicates it as a preprocessed CSS file (using the aforementioned SASS plugin) and then Hazel handles the uploading automatically to my desired web server.

Thus, I can now easily use SASS with my remote WordPress installs and everything is just peachy. It’s fast, and works great without much lag or processor cycles on my machine.

As a bonus, I’ve set up an additional rule to upload the .scss (SASS File) as well. So both are uploaded and stored on my server, so even if I access the server from somewhere else, I still have access to the SASS file which is a huge plus.
