---
layout: post
title:  "Defaulting and Copying"
date:   2018-10-26 15:00:00 +0100
categories: data-science
permalink: /2018/10/defaulting-and-copying
---

Most Data Scientists, at least the ones that I mentor, usually come from non-STEM backgrounds, gravitate towards it driven by their own curiosity, and have looked up for free tutorials on the internet on how to "do Data Science", Machine Learning, and Big Data. In most cases, the overwhelming amount of resources, rather than a positive things, becomes a burden: will I be a Data Scientist after this course or that course?

That is the backdrop against many "we will turn you into a Data Scientist in 21 days" courses proliferate like the plague: Internet is a place with signal, but with a low signal to noise ratio.

And that "21 days" mindset is misguiding. First, because Data Science is hard, and cannot be learned in 21 days (I'm still learning, and I'm positive that so is everyone else). And second, because up until very recently, there was no such thing as Data Science: it has been created over the rise of Facebook, Google, Amazon and the likes, to operate in a scale of data not known before.

In 21 days you learn some Python, and high school statistics to hit the ground running, but that's it. And that's why there's a lot of people with a lot of holes in their understanding of Python, and statistics.

Like a programmer writing tests to cover his own code, today I'm going to tell you two stories about code, so that the signal to noise ratio on the Internet increases just a little bit.

### <a name="defaulting"></a>Defaulting

The first story is about this devilish function:

```python
def function(data=[]):
  data.append(1)
  return data
```

Harmless at first sight: if we do nothing, we will see that it returns a list containing the number 1. Let's check it out in the terminal

```python
>>> function()
[1]
```

Coolio! But wait, what if I do it again?

```python
>>> function()
[1, 1]
```

??

```python
>>> function()
[1, 1, 1]
```

It looks like `function()` is reusing the default parameter `data=[]`, instead of creating a new one each time, which is what we were expecting!

```python
>>> id(function())
12564876
>>> id(function())
12564876
>>> id(function())
12564876
```

It's remarkable how well disguised is this bug, and how perverse it may become if not spotted. When the `def` statement is read, and only then, the default parameter is evaluated, which means that any parameter defined as a default value is "linked" to the function __as a reference__ (the pointer is stored, if you are familiar with C/C++). It's what we call *static definition*.

> __Default parameter values are evaluated from left to right when the function definition is executed.__
>
> [Function definitions, The Python Language Reference](https://docs.python.org/3/reference/compound_stmts.html#function)

If we wanted to define a function that behaves as we wanted earlier, we need to be a bit more verbose:

```python
def function(data=None):
  if data is None:
        data = []
  data.append(1)
  return data
```
```python
>>> function()
[1]
>>> function()
[1]
>>> function()
[1]
```

However, like nuclear power, we can use this force of evil to do good things, like storing previously calculated values of something:

```python
def calculate(a, b, last_value={}):
    try:
        value = last_value[a, b] # return already calculated value
    except KeyError:
        value = calculation(a, b)
        last_value[a, b, c] = value # update the dictionary
    return value
```

Given that it is always pointing to the same object, we are simply replacing one calculation with another. We can do that to store the cache coming from an API response, can we? Or use it to prepare calculations that build on top of what it was before.

### Copying

The second story goes like this:

```python
one_list = [1, 'a', [True, False]]
another_list = one_list
yet_another_list = list(one_list)
```

You would say "well, the three are the same thing". And in part you're right:

```python
>>>one_list == another_list
True
>>>one_list == yet_another_list
True
>>>another_list == yet_another_list
True
```

But in the same way that two laptops may be identical, but may not be the same laptop:

```python
>>>one_list is another_list
True
>>>one_list is yet_another_list
False
>>>another_list is yet_another_list
False
```
Again, checking the ids gives us the clue:
```python
>>>id(one_list)
4303957896
>>>id(another_list)
4303957896
>>>id(is yet_another_list)
4304054536
```
`one_list` and `another_list` are the same thing, whereas `yet_another_list` is a copy of them.


So far, so good. 'Is' versus '==' might have been explained to you at some point. Let's do another experiment:
```python
one_list = [1, 'a', [True, False]]

# copy one_list into a different object
copy_list = list(one_list)
copy_list[0] = 2
```
Well, of course:
```python
>>>one_list
[1, 'a', [True, False]]
>>>copy_list
[2, 'a', [True, False]]
```

If we make a copy onto a different object, changes are not going to be shared... are they?

```python
>>>one_list = [1, 'a', [True, False]]
>>>copy_list = list(one_list)
>>>copy_list[2][0] = False
>>>copy_list
[1, 'a', [False, False]]
>>>one_list
[1, 'a', [False, False]]
```
Wow, they __are shared__, provided that we change nested values! That's what we call a '*shallow copy*' in Python. A '*deep copy*', however, is one where we can't access any item on the original, regardless of it being simple or compound.

> - A shallow copy constructs a new compound object and then (to the extent possible) inserts references into it to the objects found in the original.
> - A deep copy constructs a new compound object and then, recursively, inserts copies into it of the objects found in the original.
>
>[Shallow and Deep Copy Operations, The Python Standard Library](https://docs.python.org/2/library/copy.html)

Like in [defaulting](#defaulting), these copies are references, and thus can be accessed from the shallow copy as they were its own. Check out the documentation on the [copy library](https://docs.python.org/2/library/copy.html) if you want to learn more.
