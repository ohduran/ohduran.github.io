"""This script creates a graph of books and stores it in the _data folder"""
import re
from os import listdir
from os.path import isfile, join

from yaml import dump

books_collection_path = '_collections/_books'

collection_paths = ['_collections/_books', '_collections/_annual_letters',
                    '_collections/_articles', '_collections/_journal']


def collection_files():
    return [
        f
        for path in collection_paths
        for f in listdir(path) if isfile(join(path, f))
    ]


def book_collection_files():
    """Scraps through the book collection and extracts the files' names"""
    return [f for f in listdir(books_collection_path) if isfile(join(books_collection_path, f))]


def filename_variable(filename, variable='permalink'):
    START_END_BYTES = b'---\n'
    PATTERN_WORD_BEFORE_COLON = r"(\w+)(?:)"
    PATTERN_VARIABLE = r"(?::\s)(.+)"
    for path in collection_paths:
        try:
            with open(join(path, filename), 'rb') as file:
                if file.readline() == START_END_BYTES:

                    bline = file.readline()
                    while bline != START_END_BYTES:

                        line = bline.decode()
                        key = re.findall(PATTERN_WORD_BEFORE_COLON, line)[0]

                        if key == variable:
                            return re.findall(PATTERN_VARIABLE, line)[0]

                        bline = file.readline()
        except FileNotFoundError:
            pass


def books_permalinks():
    """Scraps through the books collection and extacts the list of permalinks"""
    return [filename_variable(filename) for filename in book_collection_files()]


def book_graph():
    graph = {book: [] for book in books_permalinks()}
    for filename in book_collection_files():
        for book in books_permalinks():
            with open(join(books_collection_path, filename), 'rb') as file:
                if book in file.read().decode() and book != filename_variable(filename):
                    graph[book].append(filename_variable(filename))
    return graph


def book_mentions():
    """
    {
        '/how-to-read-a-book':
        {
            'permalink': '/how-to-read-a-book',
            'mentions': [
                {
                    'title': 'Through the Language Glass',
                    'permalink': '/through-the-language-glass'
                },
                ...
            ]
        }
    }
    """
    graph = [{'permalink': filename_variable(book), 'mentions': []} for book in book_collection_files()]

    for filename in book_collection_files():
        for book in book_collection_files():
            with open(join(books_collection_path, filename), 'r') as file:
                if filename_variable(book) in file.read() and book != filename:

                    for item in graph:
                        if item.get('permalink') == filename_variable(book):
                            item['mentions'].append(
                                {
                                    'title': filename_variable(filename, 'title'),
                                    'url': filename_variable(filename, 'permalink'),
                                    'rating': filename_variable(filename, 'rating'),
                                }
                            )
    return graph


def mentions():
    graph = []
    for file in collection_files():
        graph.append({'permalink': filename_variable(file), 'mentions': []})

    for filename in collection_files():
        for article in collection_files():
            for path in collection_paths:
                try:
                    with open(join(path, filename), 'r') as file:
                        if filename_variable(article) in file.read() and article != filename:

                            for item in graph:
                                if item.get('permalink') == filename_variable(article):
                                    item['mentions'].append(
                                        {
                                            'title': filename_variable(filename, 'title'),
                                            'url': filename_variable(filename, 'permalink'),
                                            'rating': filename_variable(filename, 'rating'),
                                        }
                                    )
                except FileNotFoundError:
                    pass
    return graph


data = mentions()

print(data)


with open('_data/mentions.yml', 'w') as stream:
    dump(data, stream)    # Write a YAML representation of data to 'document.yaml'.
    print(dump(data))
