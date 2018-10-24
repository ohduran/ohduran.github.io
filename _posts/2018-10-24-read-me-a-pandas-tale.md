---
layout: post
title:  "Read me a Pandas tale"
date:   2018-10-24 15:00:00 +0100
categories: blog data-science
permalink: /2018/10/read-me-a-pandas
---

If you have ever worked with pandas and JSON files, you [know](https://stackoverflow.com/questions/21104592/json-to-pandas-dataframe) [the](https://stackoverflow.com/questions/48593007/pandas-read-json-fails-with-a-simple-json-string) [struggle](https://stackoverflow.com/questions/43803180/how-to-read-json-file-using-python-pandas): it's hard to get it right first time, in the same fashion that `read_csv()` works.

As part of mentoring Data Science students, that question usually comes a lot. Most of the Data Science courses out there usually deal with information coming from [Kaggle](https://www.kaggle.com/) or [data.gov](https://www.data.gov), but the real world has nothing to do with that.

In the real world, the end-to-end data mining process usually involves a third party website that could not be bothered with providing its information easily. If you read this and have worked at ICWATCH, you know [what I'm talking about](https://techcrunch.com/2016/08/15/linkedin-sues-scrapers/?guccounter=1). The truth is, in many cases, deal with csv files, which perfectly accommodate pandas DataFrame instances, is idealistic: raw data comes in the form of JSON, because that's the language the Internet speaks.

I'm addressing this because understanding how things work in the background isn't just for engineers: [all abstractions are leaky](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/), Spolsky dixit, and this abstraction in particular is 1987 Chevrolet Vega level of leakiness: it leaves you in the middle of the road right before even starting.

Discussing this with my mentee, I found myself pronouncing a sentence that was sensible to me at the moment, but that left me with a bad taste in my mouth:

"– Pandas `read_csv`, `read_json`, etc, they're all context managers in the background."

Are they?

## <a name="context-manager"></a>Context Managers: the classic open file wrapper

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

The question that I'm determined to ask in this post is: __Is pandas.read_csv() a context manager under the hood?__, and more broadly: __What the hell happens when we use it?__

## TextFileReader

Unlike MATLAB, which I don't miss any chance to besmirch its reputation, pandas is an open source project publicly available on [GitHub](https://github.com/pandas-dev/pandas). The function `read_csv` can be found at pandas/io/parsers.py, which is simply the following [two lines](https://github.com/pandas-dev/pandas/blob/master/pandas/io/parsers.py#L711):

```python
read_csv = _make_parser_function('read_csv', default_sep=',')
read_csv = Appender(_read_csv_doc)(read_csv)
```

Now this tells me two things: one, virtually nothing, and second, that it has the documentation defined a couple lines earlier. Not much, I know. To gather more insight, let's go find the [`_make_parser_function`](https://github.com/pandas-dev/pandas/blob/master/pandas/io/parsers.py#L547), just above, to see that it follows more or less the following structure:

```python
def _make_parser_function(name, default_sep=','):

    # pretty much what follows
    sep = default_sep
    # if you don't use anything deprecated

    def parser_f(kwargs):

        # ...

        # This allows for specifying the engine used: python by default.
        if engine is not None:
            engine_specified = True
        else:
            engine = 'c'
            engine_specified = False

        kwds = dict(kwargs)

        return _read(filepath_or_buffer, kwds)

    # This helps the Appender we defined earlier find the proper documentation.
    parser_f.__name__ = name

return parser_f
```

It seems like `_make_parser_function` returns a function that calls `_read` with a variable `filepath_or_buffer`. So far, we found that `read_csv` __reads__.

Cut me some slack and let's go see what this `_read` function [does](https://github.com/pandas-dev/pandas/blob/master/pandas/io/parsers.py#L423), which is more or less as follows:

```python
def _read(filepath_or_buffer, kwds):
    """Generic reader of line files."""

    # ...

    nrows = kwds.get('nrows', None)

    # Create the parser.
    parser = TextFileReader(filepath_or_buffer, **kwds)

    try:
        data = parser.read(nrows)
    finally:
        parser.close()

    return data
```

Ah! Sweet! try, finally, that's something that resembles the context manager definition we saw [earlier](#context-manager)! However, it's not 100% that, see? No yield, no `@contextmanager`... we need to see what's behind that [TextFileReader](https://github.com/pandas-dev/pandas/blob/master/pandas/io/parsers.py#L739) curtain.

Going down the rabbit hole, Get away from all we know...

```python
class TextFileReader(BaseIterator):
    """
    Passed dialect overrides any of the related parser options
    """

    def __init__(self, f, engine=None, **kwds):

        self.f = f

        # engine = python is defined here
        if engine is not None:
            engine_specified = True
        else:
            engine = 'python'
            engine_specified = False

        # ...

        self.engine = engine
        self._engine = None
        self._currow = 0

        self.chunksize = options.pop('chunksize', None)
        self.nrows = options.pop('nrows', None)
        self.squeeze = options.pop('squeeze', False)

        # ...

        self._make_engine(self.engine)

    def close(self):
        self._engine.close()

    # ...

    def __next__(self):
        try:
            return self.get_chunk()
        except StopIteration:
            self.close()
            raise
```

Oh, that was unexpected, wasn't it? An [iterator](https://stackoverflow.com/questions/9884132/what-exactly-are-iterator-iterable-and-iteration)!

Or maybe not. If you've ever worked with the built-in function `open()`, you know that calling `readline()` yields the next line in the file, which is literally the definition of an iterator.

So this was a weird path that pandas is taking here, but not so much really: it iterates by calling `self.get_chunk()`, and it closes by calling `self._engine.close()`. Can we expect now that `self.get_chunk()` also calls `self._engine.__next()` or something like that, so that it means that this iterator is simply a wapper of the so called "engine"?

Let's find out in the second part of the class:

```python

class TextFileReader(BaseIterator):
    """
    Passed dialect overrides any of the related parser options
    """

    # What we saw earlier...

    def _make_engine(self, engine='c'):
        if engine == 'c':
            self._engine = CParserWrapper(self.f, **self.options)
        else:
            # engine is ALWAYS PYTHON unless we mess with this a lot.
            if engine == 'python':
                klass = PythonParser
            elif engine == 'python-fwf':
                klass = FixedWidthFieldParser
            else:
                raise ValueError(
                  #...
                )
            self._engine = klass(self.f, **self.options)

    def read(self, nrows=None):
        nrows = _validate_integer('nrows', nrows)


        # more or less like this:
        index, columns, col_dict = self._engine.read(nrows)

        # ...

        df = DataFrame(col_dict, columns=columns, index=index)

        self._currow += new_rows

        return df

    # ...

    def get_chunk(self, size=None):
        if size is None:
            size = self.chunksize
        if self.nrows is not None:
            if self._currow >= self.nrows:
                raise StopIteration
            size = min(size, self.nrows - self._currow)

        return self.read(nrows=size)
```

So, four main things here:

1. `_make_engine` instantiates a `PythonParser` object for the file `self.f` with which we have defined `read_csv` at the beginning, back in distant memory.

2. `read` effectively calls `self._engine.read()`, and we witness for the first time the end result of read_csv, DataFrame.

3. `get_chunk` calls `self.read`, so we were (kinda) right: this `TextFileReader` wraps up the `PythonParser` needle with a lot of logic that is mostly hay.

4. `StopIteration` is raised here, so that means that it controls when the iteration stops at this abstraction level. To do so, it takes rows in chunks of size `self.chunksize`, and handles the end of the file by doing `min(size, self.nrows - self._currow)`, so that it doesn't *bite more than it can actually chew*.

Let's regroup for a moment: `read_csv` is sort of a context manager, but not entirely, that calls a `TextFileReader` iterator to read the file. This `TextFileReader` iterates by instantiating `PythonParser` again and again, and stops when the file has ended.

That was enough, but we risk losing sleep for weeks because of not knowing what the PythonParser does. Let us relieve ourselves from that.

## PythonParser

Parsing is, in practice, turning a string into a data structure that I like. That is what I'm expecting to find in the definition of the [PythonParser class](https://github.com/pandas-dev/pandas/blob/master/pandas/io/parsers.py#L2041) (non-default cases omitted for brevity):

```python
class PythonParser(ParserBase):

    def __init__(self, f, **kwds):
        """
        Workhorse function for processing nested list into DataFrame
        Should be replaced by np.genfromtxt eventually?
        """
        ParserBase.__init__(self, kwds)

        self.data = None
        self.buf = []
        self.pos = 0
        self.line_pos = 0

        # ...

        # Set self.data to something that can read lines.
        if hasattr(f, 'readline'):
            self._make_reader(f)
        else:
            self.data = f

        # ...

    def _make_reader(self, f):
        sep = self.delimiter

        if sep is None or len(sep) == 1:

            # ...

            class MyDialect(csv.Dialect):
                delimiter = self.delimiter
                quotechar = self.quotechar
                escapechar = self.escapechar
                doublequote = self.doublequote
                skipinitialspace = self.skipinitialspace
                quoting = self.quoting
                lineterminator = '\n'

            dia = MyDialect

            sniff_sep = True

            if sep is not None:  # which isn't the default case

                #...

            # attempt to sniff the delimiter
            if sniff_sep:
                line = f.readline()

                # ...

                self.pos += 1
                self.line_pos += 1

                sniffed = csv.Sniffer().sniff(line)

                dia.delimiter = sniffed.delimiter
                if self.encoding is not None: # which isn't the default case
                    # ...
                else:
                    self.buf.extend(list(csv.reader(StringIO(line),
                                                    dialect=dia)))

            if self.encoding is not None: # which isn't the default case
                # ...
            else:
                reader = csv.reader(f, dialect=dia,
                                    strict=True)

        else:
            # ...

        self.data = reader
```

Initialising this was draining: we created a function called `self.data` that reads using the `csv.reader` functionality, among other things (`Sniffer`, `Dialect`, etc...).

Given that PythonParser.read() is called in the iterator defined previously, let's look at that method:

```python

    def read(self, rows=None):
        try:
            content = self._get_lines(rows) # this reads everything in one go.
        except StopIteration:
            if self._first_chunk:
                content = []
            else:
                raise

        # done with first read, next time raise StopIteration
        self._first_chunk = False

        columns = list(self.orig_names)
        if not len(content):
            # DataFrame with the right metadata, even though it's length 0

            # ...

        # some logic that transforms content into index, columns, data

        return index, columns, data
```

I'm a huge fan of those iterators that iterate only once. My little understanding of high level programme architecture tells me that this is for the function to be more efficient.

But what does the `get_lines()` method does, exactly?

```python

def _get_lines(self, rows=None):
    lines = self.buf  # the buffer
    new_rows = None

    # already fetched some number
    if rows is not None:
        # we already have the lines in the buffer unless we call the method
        # for the first time
        if len(self.buf) >= rows:
            new_rows, self.buf = self.buf[:rows], self.buf[rows:]

        # need some lines
        else:
            rows -= len(self.buf)

    # now that we have defined new_rows either as the first "rows" of self.buf, or (if buf has less rows than the predefined rows) as None:

    if new_rows is None:
        if isinstance(self.data, list):

            # control that we are not beyond the end of the file
            if self.pos > len(self.data):
                raise StopIteration
            # controls the beginning of the file
            if rows is None:
                new_rows = self.data[self.pos:]
                new_pos = len(self.data)
            # anything inbetween
            else:
                new_rows = self.data[self.pos:self.pos + rows]
                new_pos = self.pos + rows

            # ...

            lines.extend(new_rows)
            self.pos = new_pos

        # ...
    # new_rows is not None
    else:
        lines = new_rows

    # ...
    # return sort of lines, with special checks
    return lines
```

`self.buff` gets filled each time we call the `PythonParser` to each line, as we were doing in `TextFileReader`. We control the number of lines using `size` and `chunksize` in `get_chunk()`, again in `TextFileReader`. For each chunk, we read the lines, and we add them to the buffer, which will populate data, which will eventually made up df, the end DataFrame, that `read_csv` is returning at the end of all this journey.

That was a lot to process! Some takeaways may be useful now:

- `pandas.read_csv` is a form of context manager that encapsulates an iterator, in the same way that [the classic context manager example](#context-manager) of opening a file works.

- Iterating through a file instead of using lists is the way panda uses to be much more memory-efficient, allowing for big pieces of data to be passed from csv through disk across the RAM bottleneck. If you’ve ever worked with *database cursors*, iterators will seem familiar: because there’s never more than one element in RAM, this approach is highly memory-efficient.

- `pandas.read_csv` is a special case of the `pandas.read_` parsers, and makes use of the `csv` library for convenience. We haven't touched what happens when we step outside a csv file, and believe me, you don't want to do that.

We can all sleep peacefully now: pandas seems like a memory-efficient file reader that makes sense at the higher level (context manager) but with some nitty-gritty details that allow for us reckless scribblers who find a solution on SO and don't even bother in thinking what its consequences are.

And I know that because that's what will be engraved in my tombstone.
