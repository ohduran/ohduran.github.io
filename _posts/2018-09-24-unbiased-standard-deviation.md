---
layout: post
title:  "Unbiased, Standard Deviations"
date:   2018-09-24 15:00:00 +0100
categories: data-science articles
permalink: /2018/08/unbiased-standard-deviation
---

Real Life Sucks. RLS. There, that's it. I said it.

In Maths, people buy weird stuff all the time, like 10 melons, and no one asks any questions. You can do really nasty stuff, like stealing money from people, and they will be like "oh, but now you have 4 times what I used to". That, and everything is normal, gaussian, perfect, ideal. Even trivial, sometimes.

But real life, that's a different thing. That's when you have to adjust, make assumptions, and model. And expect things to fail somehow, because things fail in real life.

Say you want to know how much people earn in California, so you go there and start asking random people about their salaries. Provided that they tell the truth, you'll get a distribution of people that have various salaries, but you'll be able to pack up in tranches how much the people you've asked make: from 0 to 5000, from 5000 to 10000, etcetera. Ideally, you would have asked a lot of people, and you will get a distribution that will be huge in the middle, and will go down as you go to higher or lower salaries.

That's normal. In fact, that's what it's called: a normal distribution.

But how normal is it? That's a weird question. What you can ask instead is how much people fall between the average plus and minus x amount of salary. Of course, the bigger the interval, you would expect the more people to fall within it, but exactly how much can only be determined by the variance: the average sum of the difference between the mean value and the value x, squared.

$$
V = E[(X - E[X])^2]
$$

What does those E mean? They mean that we are estimating the values. That's because the real thing is _unobservable_: we cannot see the mean value, the __real__ mean value, we can only estimate it. RLS. So what we do first is: estimate the mean value, then for each of the values x of the sample X, get the difference between the mean and x, square them, and then estimate the mean of those values.

We are so far from what is _really_ going on behind the scenes, that we must treat everything we say about the data using this results with tremendous caution: we are prone to calculate something that isn't _real_.

An estimator of the variance is, of course, sum every `(x - m)^2`, _`m` being the mean value of x_, then divide it by `n`, the number of cases in the sample, the number of people in our poll. It can be [proved](https://en.wikipedia.org/wiki/Variance#Sample_variance) that this doesn't lead to what you would expect. Averaging values and then averaging computations with that value doesn't add up in the end.

You're then __biased__: you are getting different results of the variance because you calculated the mean value first, instead of calculating the variance from the beginning. You must [correct that value](https://en.wikipedia.org/wiki/Bessel%27s_correction) and get the _unbiased_ result, just by dividing, instead by `n`, by `n-1`. Note that I didn't say real: that train departed a long time ago.

Now, by default, you will see that most programming languages (MATLAB, Python), in their built-in formula for the standard deviation (which is the squared root of the variance), calculate the _unbiased_ estimator with the correction term `n-1`. [NumPy](https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.std.html) however calculates the biased estimator with no correction term by default. The parameter `ddof` allows to set any correction term which, by setting it to 1, you get the same result as in MATLAB. (Similarly, MATLAB allows to add a second parameter `w`, which specifies the "weighing scheme". The default results in the correction term `n-1` (unbiased estimator), while for `w=1`, `n` is used as correction term.)

At the verge of exhaustion, we must ask now: [why is that Numpy goes against everyone else?](http://numpy-discussion.10968.n7.nabble.com/Standard-Deviation-std-Suggested-change-for-quot-ddof-quot-default-value-td37200.html) It may be that using `n-1` bans the system from crash when using only one value, or maybe because the compute power is slightly different when using one or the other (if you're calculating things a million time, every stretch you can gain is beneficial). We'll never know.

There's, however, a great wrap up to this: __"Any surprise that is created by the different default should be mitigated by the fact that it's an opportunity to learn something about what you are doing."__
