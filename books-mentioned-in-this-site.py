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
    image_link_template = 'https://www.amazon.com/gp/product/{}/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN={}&linkCode=as2&tag=alvaroduran-20&linkId=f5d392d227d2234a4e08b81362c11e24'
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
                            asin = re.findall(r"product/(.{10})", link.get('href'))[0]
                            graph.append({
                                'title': link.text,
                                'url': link.get('href'),
                                'asin': asin,
                                'image_url': image_link_template.format(asin, asin)
                            })
            except (FileNotFoundError, etree.XMLSyntaxError):
                pass
    return sorted(graph, key=lambda k: k['title'])


with open('_data/book_mentions.yml', 'w') as stream:
    data = generate_book_mentions()
    dump(data, stream)    # Write a YAML representation of data to 'document.yaml'.
    print(data)
