---
layout: post
title:  "Take care of the environment"
date:   2018-11-30 15:00:00 +0100
categories: science
permalink: /2018/11/take-care-of-the-environment
---

One of the things to look out when using third-party libraries, and specially in Python, is versioning and dependencies. Here's a question from one of my Data Science students at [Thinkful](https://thinkful.com):

> I've been using Anaconda to install libraries on my computer. Today, I tried to install the `geopandas` library using the terminal command.
>
> ```bash
> conda install -c conda-forge geopandas
> ```
>
> This is what I got back and I'm not sure what to make of it.
>
> ```bash
> >> Solving environment: failed
>
> UnsatisfiableError: The following specifications were found to be in conflict:
>
>  - geopandas
>
> Use "conda info <package>" to see the dependencies for each package.
> ```

The student found that `geopandas` depends on using python 3.7 instead of the version she's using, 3.6.5. She is concerned about upgrading to the latest version as she isn't aware of all the other libraries' dependencies.

This is a recurrent problem once you reach a level of confidence with Python: using external, third-party libraries is a good thing, since it helps you make your code cleaner and more efficient, while allowing you to have more confidence in the code you write without the need of a high code coverage, that is, without writing so many tests.

So what most people do is start installing libraries for pretty much everything on their computers. They `pip install` this, and that, and they little by little start to pile a lot of dependencies in their computer that are long to kill you in the long term.

And then, they hit the problem that my student has hit: they can't do `pip install` anymore. They've `pip install`-ed themselves into a corner. I've been there, we've all been there, because we didn't know better.

Experienced programmers and data scientists avoid the temptation to `pip install` recklessly into their default Python environment, because it could lead to a difficult to maintain setup that will not be reproducible when you want to share it with your colleagues.

They instead use [dependency managers](https://www.fullstackpython.com/application-dependencies.html). If you’re familiar with Node.js’ `npm` or Ruby’s `bundler`, it is similar in spirit to those tools. The idea is to isolate dependencies on a per-project basis, that is, I can use Python 3.7 with `geopandas` in one project while using Python 3.6 with the rest of them. Or, even, run a version of Python in my projects that is different from the one that my Mac uses for its own thing, and avoiding potential 'go-to-your-nearest-Apple-store' problems. Not only that, it also makes it much more straightforward for others to reproduce your local project environment.

Fortunately, I don't need to install anything else other than an [Anaconda distribution](https://docs.anaconda.com/anaconda/), the one that the student is talking about. Once someone has done that, it takes care of all the dependencies for you. You just need to go to `Environments`, and create a new environment, where all dependencies will be isolated. Or you can [use the command line with `conda`](https://conda.io/docs/user-guide/getting-started.html#managing-envs):

```bash
$ mkdir myproject # create project folder        
$ cd myproject       

$ conda create --name myproject python=3.7 # create new env.
$ source activate myproject      # activate environment

[myproject] $ conda install geopandas   # install package(s)
```

`conda` is a general-purpose package management system, and not just a Python package management system, like `virtualenv`. It's designed to manage packages and dependencies within any software stack. This makes it particularly useful for managing complex data science projects, which may contain a mixture of systems and languages, code and data.

And as a side recommendation, you should also establish a sensible folder structure for your project, creating separate folders for data, notebooks, source code, tests, documentation, etc. For that, tools like [Cookicutter](https://cookiecutter.readthedocs.io/en/latest/) do the job amazingly simple.
