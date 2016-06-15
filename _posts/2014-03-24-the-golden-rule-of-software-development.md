---
layout: post
title:  The Golden Rule of Software Development
date:   2014-01-19 10:52:48
categories: software
author: Byron Sommardahl
excerpt: I’ve gone to church all my life and “The Golden Rule” has been pound into my head since I was a toddler “Do to others as you would have them do to you.”...
image: /assets/img/posts/SteveJobs.jpg
---
I’ve gone to church all my life and “The Golden Rule” has been pound into my head since I was a toddler: “Do to others as you would have them do to you.” That’s Jesus talking in Matthew 7:12, by the way. Now, I’m not going to preach, so don’t navigate away too quickly… Well, I’m not going to preach about the Bible anyhow. I guess I am going to preach a little about how I think software developers should change their evil ways. 

It doesn’t matter if you believe in God or follow the Bible, anyone can probably admit that Jesus was teaching something pretty important. Common human decency. An expectation that, if you treat folks badly, you’ll probably get the same in return. Love people so you will be loved. Open the door for someone and smile, because that’s what you want people to do for you. This blog article is my attempt to live out “The Golden Rule” amongst my fellow developers. I am chewing you all out because I would want you to chew me out if I did this crap to you all. 

Before I started writing, I did a little research about “The Golden Rule” and “programming” to see if anyone else had written on the topic. I found out quickly that someone coined “The Golden Rule of Programming” awhile back so it has stuck. But I’m here to tell you, WE are way off on this. Here’s the popular programmer’s golden rule:

> _“If it can be null, it will be null.”_ 

What does that have to do with people?? Nothing. It’s a clever way to help programmers remember to avoid nulls, which is great. But we’ve missed an opportunity to answer a higher calling: **doing to other developers what we would have them do to us. **So I’m reclaiming the phrase for the cause of better code. I should have called this article, “How to Make Other Programmers Hate You,” and given a bullet list of ways to piss me off when I look at another developer’s crappy code. Maybe another day.  

When you are writing code, you should consider that you will probably not be the only human being who has to maintain it. Some other poor soul is going to eventually crack open your code and try to implement some fix, requirement change, or new feature. Will it take them days or minutes? Will they be able to decipher your structure? Or will they hate you and call you incompetent? I suggest that all developers, around the world, stop coding right now and change their hearts. It’s time to start thinking of others, and putting their future needs first when it comes to our code. It’s time to start allowing this simple teaching of Jesus to form our ethics as professional programmers. 

Are you ready to repent and turn from your evils ways? Here are some suggestions that I guarantee will set you on the right path: 

**Use Test-First Development** – Don’t write production code until you have a failing unit test. Then, only write enough production code to make that unit test pass. This sequence will help you stay disciplined in your unit test coverage and will help you produce better, more modular chunks of code. This will also enable your future readers to be able to look at your tests and understand quickly how you intended things to work. Oh, one more thing. If any future developer messes up something in your code, your unit tests will alert that dev me he/she can fix it more quickly. There are actually SO many other benefits to test-first development that are out of scope for this article. Just do it and you’ll understand. 

**Use Documented Architecture** – Don’t try to reinvent the wheel. Architecture has been done and done and done. Learn one that fits your project and stick to it. Creating your own will probably get you into trouble and will rob your future readers of the ability to understand your architectural decisions apart from a ton of documentation that you shouldn’t have to waste time writing. 

**Names Matter** – Name your variables, classes, methods, everything with care. Who cares if names get long. If they communicate what’s going on, let it go! This will go a long way in helping your future readers understand your code. It will also cut down or eliminate the need for code comments. **Use Patterns** – Like anybody who makes things for a living, patterns and templates are essential to reproducing similar types of products or work. Same goes for software development. There are tons of great “pre-thought-out” patterns for programmers to pick up and use. And, later on, other developers, who are also aware of those patterns, can look at your use of this or that pattern and know EXACTLY what is going on. Or you can ignore the patterns out there and do everything your way, alienating and confusing your future readers, making them hate you. Your choice. 

**SOLID, Know it, Love it, Use it** – If your haven’t heard of the “SOLID Principles of Software Engineering” by Robert Martin, you should Google it. It is five software engineering principles that, when used together, tend to guide software developers to creating better, more maintainable code. There are tons of principles like these out there, but the nice thing about these five is that most any professional software developer can follow them closely if not to the letter in their day-to-day. So, if a future reader must maintain your code, and you follow SOLID, all they have to do is familiarize themselves with those five principles and they are almost as good as the original dev because they will understand what guides and motivates your decisions. Following a popular set of principles like SOLID sets future readers and maintainers up for success months and years in advance. 

**Give a Flip** – Would you want your dear, sweet grandmother to have to maintain your code. How about your baby daughter? How bout yourself 6 months later. Well, the reality is that someone will probably look at your code in the future. If none of these suggestions have resonated with you, an ounce of caring would be SOMETHING. Just remember that a puppy dies every time you check-in crappy code. If that doesn’t motivate you, consider that people will hate you. Just care about people and don’t leave them hanging. Code with care! 

Will you follow the REAL “Golden Rule” in your day-to-day programming, taking the necessary steps to leave future developers with code that can be maintained and extended? For your clients’ sake, for your fellow developers’ sake, for your own soul’s sake, I sincerely hope so. 

On the other hand, if you want to keep putting crappy, unintelligible code out there, be my guest. I’m actually making a pretty good living by cleaning up your messes. I just feel bad for your clients who have to pay for your blunders. Your call. 