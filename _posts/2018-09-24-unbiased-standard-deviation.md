---
layout: post
title:  "Unbiased, Standard Deviations"
date:   2018-09-24 15:00:00 +0100
categories: data-science mathematics
permalink: /2018/08/unbiased-standard-deviation
---

Real life sucks. There, that's it. I said it.

In Maths, people buy weird stuff all the time, like 10 melons, and no one asks any questions. You can do really nasty stuff, like stealing money from people, and they will be like "oh, but now you have 4 times what I used to". That, and everything is normal, gaussian, perfect, ideal. Even trivial, sometimes.

But real life, that's a different thing. That's when you have to adjust, make assumptions, and model. And expect things to fail somehow, because things fail in real life.

Say you want to know how much people earn in California, so you go there and start asking random people about their salaries. Provided that they tell the truth, you'll get a distribution of people that have various salaries, but you'll be able to pack up in tranches how much the people you've asked make: from 0 to 5000, from 5000 to 10000, etcetera. Ideally, you would have asked a lot of people, and you will get a distribution that will be huge in the middle, and will go down as you go to higher or lower salaries.

That's normal. In fact, that's what it's called: a normal distribution.

But how normal is it? That's a weird question. What you can ask instead is how much people fall between the average plus and minus x amount of salary. Of course, the bigger the interval, you would expect the more people to fall within it, but exactly how much can only be determined by the variance: the average sum of the difference between the mean value and the value x, squared.

$\sin$
