"""This script creates a graph of books mentioned on every post"""
import re
from os import listdir
from os.path import isfile, join

import markdown
from lxml import etree
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


def generate_book_mentions():
    url_starter = 'https://www.amazon.com/gp/product/'
    graph = []
    uniques = []
    for path in collection_paths:
        for filename in collection_files():
            try:
                with open(join(path, filename), 'rb') as file:
                    html = etree.fromstring(markdown.markdown(file.read()))
                    for link in html.xpath('//a'):
                        if link.get('href') and link.get('href').startswith(url_starter) and link.text not in uniques:
                            uniques.append(link.text)
                            graph.append({
                                'title': link.text,
                                'url': link.get('href')
                            })
            except (FileNotFoundError, etree.XMLSyntaxError):
                pass
    return sorted(graph, key=lambda k: k['title'])


with open('_data/book_mentions.yml', 'w') as stream:
    data = generate_book_mentions()
    dump(data, stream)    # Write a YAML representation of data to 'document.yaml'.
    print(data)
