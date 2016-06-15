---
layout: post
title:  Custom Software Development&#58; Save Money With ATDD
date:   2014-06-26
categories: agile
author: Byron Sommardahl
excerpt: Custom software is pretty expensive! Unnoticed system bugs, misunderstood requirements, and lack of developer focus can prolong a project and inflate costs...
image: /assets/img/posts/ATDD.jpg
imageCredit: http://edwinandrewlove.blogspot.com/2012/10/cash-aint-carrots-and-i-aint-your-donkey.html (public domain)
---
Custom software is pretty expensive! Unnoticed system bugs, misunderstood requirements, and lack of developer focus can prolong a project and inflate costs. So when we find a way to reduce the cost of software development, we’re about as excited as a pardoned Thanksgiving turkey! And naturally, our excitement makes us want to share! 

Today, you need to check out “Acceptance Test-Driven Development” (ATDD). It’s a term that has been around for a few years and it’s a spin on the older idea of “Test-Driven Development” (TDD). Development teams that follow ATDD have learned to value well-defined business requirements more than any other development methodology that I’ve seen. The high value on business requirements leads to a chain reaction of time (and money) saving benefits!

##Maximize Developer Focus

Software developers are some of most focused people I know on earth. They are incredibly detail oriented and love to get into the dirty details. But, without a “carrot on the stick” to remind them what the nearest goal is, time can be lost refocusing, correcting course, and sometimes going too far down a path. 

The best “carrot“ I know is a well-defined “user story”, complete with a list of “acceptance criteria”. But, ATDD takes it to a whole new level by integrating business-generated acceptance criteria into automated, repeatable tests! The basic premise is this: 1) A developer starts with one or more failing “acceptance tests”, each that explains in plain english the expected behavior. 2) While the developer is working on a feature, the acceptance test remains in a failure state, constantly calling the developers attention to the goal (the ultimate “carrot”). 3) Then, when the developer has finished writing the feature, he will know that he is done when the acceptance test starts to pass. 

##Better Requirements

Time has taught the software development industry that there are three things any team needs to create software that works the way a business needs it to work: sufficient time, excellent developers, and clear requirements. The latter of the three, unfortunately, is the most neglected and probably most costly when not implemented. Smart teams work together to generate complete and well-defined requirements. One thing that ATDD brings to the table is a requirement of standard formats and formalization of requirement text. You see, in order to integrate human generated requirements into code, there must be some patterns. 

This might sound scary, but it’s actually a good thing. What I’ve seen at times, even with well-meaning teams, is that some features lack description and deviate from the normal way of describing feature behavior.  This can cause confusion and no shortage of back-and-forth between the devs and business folks.  On the other hand, if automated tests require a certain format, as they often do with ATDD, the team will be united under one format and will be able to move forward with feature development without roadblocks and speedbumps.

##Find Defects Faster

One BIG advantage of ATDD, besides developer focus and better-defined requirements, is the comprehensive suite of automated acceptance tests that it leaves behind. In the hands of a good devops engineer, automated acceptance tests can be integrated into the “continuous integration build”. That way, if a test starts to fail because of a newly introduced bug, deployment can be stopped. The bug still exists, but at least it didn’t go to production! If developers get notified when a build breaks, then they will see the new bug and be able to fix it quickly. This tight feedback loop is HUGE and saves hours of developer time. 

#Your developers will love ATDD

Nothing invigorates a software developer than the feeling of accomplishment.  With “Acceptance Test-Driven Development”, that feeling of accomplishment comes early and often. When an automated acceptance test turns “green” (starts to pass), you know that you’re done and that it works. That kind of confirmation doesn’t normally come until after the feature has been in the wild for awhile. And even then, you might miss the feeling of accomplishment altogether because you’re already on another task. With ATDD and automated acceptance tests, developers get encouraging and quick confirmation.

#Your bottom line will love ATDD

Custom software might be one of the biggest investments your business will ever make. And you might not mind so much, because you know that software will help your business rise to the next level. But it would be even better if software didn’t have to cost so much. Well, it doesn’t. Encourage your development team to look into ATDD. When your team starts to use ATDD, expect to see more complete features, fewer bugs, lower QA costs, and happier, more productive developers.

If you’d like more information on how to get moving with ATDD or if you need an experienced ATDD team, [contact us today!](#contact-us).




