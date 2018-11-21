---
layout: post
title:  "Of Dogfooding"
date:   2018-05-11 15:00:00 +0100
categories: business-strategy
permalink: /2018/05/dogfooding
---
I'm in love with edge cases of capitalism. One thing I have always being told is that property is at the core of our modern society, and economies thrive partly because individual agents have something (their "stuff") to care for, and they are unwilling to give away goods or services unless it is in exchange for money, or any other form of remuneration. What we usually reduce to "there is no such thing as a free lunch."

It's interesting, because Wikipedia or open-source software such as GNU-Linux have proven that it isn't always the case. And that is because, consistently with societies that deal more frequently with intellectual property, its differences with owning material things become acute and significant.

A couple of years ago, a guy named Steve Yegge wrote a [post](https://plus.google.com/+RipRowan/posts/eVeouesvaVX) about architecture and management of IT that has resonated with me ever since, where he rants about Amazon doing everything wrong and Google doing everything right (leveraging the fact that he worked for both companies), except for a couple of things.

>But there's one thing they do really well that pretty much makes up for ALL of their political, philosophical and technical screw ups. [...]. So one day Jeff Bezos issued a mandate, [which] went something along these lines:
> 1. All teams will henceforth expose their data and functionality through service interfaces.
> 2. Teams must communicate with each other through these interfaces.
> 3. There will be no other form of interprocess communication allowed.
> 4. It doesn't matter what technlogy they use.
> 5. All service interfaces must be designed from the ground up to be externalizable.
> 6. Anyone who doesn't do this will be fired.

He then goes on about Amazon transforming into a service-oriented architecture, or SOA, or microservices, whatever it's named now.

>There was lots of existing documentation and lore about SOAs, but at Amazon's vast scale it was about as useful as telling Indiana Jones to look both ways before crossing the street.

The one big realization on the article is that Bezos realised that he can't always build the right thing. And that is hugely important, because draws a line between open and closed source, and highlights the reason why several pieces of software succeed or fail, and lays out a roadmap for companies in the future to look at.

The second thing is Platforms. That is, ways for external users to wire their applications and develop new things on top of what you built. And then, leveraging that kind of value to allow new developers to build new things on top of that, ad infinitum. You only need to follow one rule:

>The Golden Rule of platforms is that you Eat Your Own DogFood. [...] Microsoft has known about the Dogfood rule for at least twenty years. [...] You don't eat People Food and give your developers Dog Food. Doing that is simply robbing your long-term platform value for short-term successes. Platforms are all about long-term thinking.

Dogfooding means that, if the organisation truly believes its own product to be better, there is no reason for them to use any other product. Zach Holman summarises the trend in his [blog](https://zachholman.com/posts/dogfooding-culture):

>Something that’s been fascinating to watch over the past few years is the aggressive march towards openness in technology companies. Open source software is a big deal as always, sure, but now startups are opening up their HR policies. They’re doing open product development planning. They’re even doing open salaries.
> Companies that espouse this openness benefit from a variety of advantages, ranging from faster product development, quicker support cycles, and sometimes a decent marketing bump. When you’re talking about the organizational side of the company, though, I think there are three very important advantages: recruitment, ramp-up time, and guidance.


Platforms like Facebook are successful because they built an entire constellation of products by allowing other people to do the work, says Yegge, and he is absolutely right. You won't try, iterate, and gamble in an endless array of features that may or may not attract your users, you just let anyone deal with that kind of risk, and take a bit of their success by means of the platform. It's franchising for intellectual property.

From the Bill Gates, Steve Jobs, late XX century ideas about building something that people will love, the XXI century has shifted into Bezos and Zuckerberg: you don't need to provide everyone with the right products, but with interfaces and workflows that they like and felt at ease. That is what sets apart companies like AirBnB, Uber, and the likes, that came later: they are the clever middleman that brokerages the deal, incentivises the competition between suppliers and keeps the quality of the product provided to the customers brutally high at the lowest price possible.
