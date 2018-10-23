---
layout: post
title:  "Pandas is an Iterator"
date:   2018-09-28 15:00:00 +0100
categories: blog data-science
permalink: /2018/10/pandas-is-an-iterator
---

If you have ever worked with pandas and JSON files, you [know](https://stackoverflow.com/questions/21104592/json-to-pandas-dataframe) [the](https://stackoverflow.com/questions/48593007/pandas-read-json-fails-with-a-simple-json-string) [struggle](https://stackoverflow.com/questions/43803180/how-to-read-json-file-using-python-pandas): it's hard to get it right first time, in the same fashion that `read_csv()` works.

As part of mentoring Data Science students, that question usually comes a lot. Most of the Data Science courses out there usually deal with information coming from [Kaggle](https://www.kaggle.com/) or [data.gov](https://www.data.gov), but the real world has nothing to do with that.

In the real world, the end-to-end data mining process usually involves a third party website that could not be bothered with providing its information easily. If you read this and have worked at ICWATCH, you know [what I'm talking about](https://techcrunch.com/2016/08/15/linkedin-sues-scrapers/?guccounter=1). The truth is, in many cases, deal with csv files, which perfectly accommodate pandas DataFrame instances, is idealistic: raw data comes in the form of JSON, because that's the language the Internet speaks.

I'm addressing this because understanding how things work in the background isn't just for engineers: [all abstractions are leaky](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/), Spolsky dixit, and this abstraction in particular is 1987 Chevrolet Vega level of leakiness: it leaves you in the middle of the road right before even starting.

Discussing this with my mentee, I found myself pronouncing a sentence that was sensible to me at the moment, but that left me with a bad taste in my mouth:

"– Pandas `read_csv`, `read_json`, etc, they're all context managers in the background."

Are they?

## Context Managers: the classic open file wrapper

Well at first sight, you would say they definitely look like one, walk like one, and quack like one. A context manager simplifies resource management patterns by abstracting their functionality in the form of a `with` statement. It's an obscure feature of Python and the recruiter asked me about them in my last job interview, so they definitely signal some level of expertise in the language.

A good way to see this feature in action is, you guessed, opening files:

```python
with open('hello.txt', 'w') as f:
    f.write('hello, world!')
```

In reality, this way of writing can be loosely translated into this:

```python
f = open('hello.txt', 'w')
try:
    f.write('hello, world')
finally:
    f.close()
```

That's why opening files using the `with` statement is generally recommended: it ensures that open file descriptors are closed automatically after program execution leaves the context of the `with` statement.

Dealing with system resources using context managers can make code more readable, and avoid bugs or leaks by making virtually impossible to forget cleaning up afterwards.

But there isn't anything special about functions such as `open()`. We can create an object with `__enter__` and `__exit__` methods, and it will function as a context manager. Python will call these two methods at the appropriate times.

```python
class OpenFile:
    def __init__(self, filename):
        self.filename = filename

    def __enter__(self):
        self.file = open(self.filename, 'w')
        return self.file

    def __exit__(self, t, v, tb):
        self.file.close()
```

Once we have defined `OpenFile` like that, then we can use it like this:

```python
with OpenFile('example.txt') as f:
    f.write('hello, world!')
```

Ah, but here comes something even more interesting: using the [`contextlib`](https://docs.python.org/3.5/library/contextlib.html#contextlib.contextmanager) library we can produce our own context managers in a complete different fashion:

```python
from contextlib import contextmanager

@contextmanager
def open_file(filename):
    try:
        f = open(filename, 'w')
        yield f
    finally:
        f.close()
```

Now, instead of a class with two magic methods, it's a *generator* that opens the file, yields it, and afterwards leaves the function open so that the generator continues to execute. Any remaining clean-up steps can occur afterwards but before the resource gets released back to the system.

The question that I'm determined to ask in this post is: __Is pandas.read_csv() a context manager under the hood?__
