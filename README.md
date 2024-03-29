ckeditor-quote-epfl
===================

[![Build Status][github-actions-image]][github-actions-url]
[![GitHub Tag][tag-image]][tag-url]

CKEditor quote plugin.

Resume
------

This widget is a derivative of the [Ayhan Akilli quote plugin](https://ckeditor.com/cke4/addon/quote) and can be used as an alternative to the [Blockquote Plugin](https://ckeditor.com/cke4/addon/blockquote). It follows the EPFL style guide for *quote* element (see [quote EPFL guidelines](https://epfl-si.github.io/elements/#/molecules/quote)).

So the resulting HTML will be:

    <blockquote class="blockquote">
        <p>
            ...
        </p>
        <footer class="blockquote-footer">
            ...
        </footer>
    </blockquote>

If the caption is empty, the blockquote element will just be:

    <blockquote>
        ...
    </blockquote>

Usage
-----

Add this repository as a git submodule in the CKEditor plugins folder:

```bash
git submodule add git@github.com:epfl-si/ckeditor-quote-epfl.git src/static/ckeditor/ckeditor/plugins/quoteepfl
```

Add the plugin to CKEditor config file:

```js
config.extraPlugins = 'quoteepfl';
```

Dependencies: Widget

Contributing
------------

See [Contributing](CONTRIBUTING.md).

Developer
---------

* [Lindo Duratti](https://github.com/dragonleman)

License
-------

The MIT License

Copyright (c) 2020 ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI.

[github-actions-image]: https://github.com/epfl-si/ckeditor-quote-epfl/workflows/Build/badge.svg
[github-actions-url]: https://github.com/epfl-si/ckeditor-quote-epfl/actions
[tag-image]: https://img.shields.io/github/tag/epfl-si/ckeditor-quote-epfl.svg
[tag-url]: https://github.com/epfl-si/ckeditor-quote-epfl/tags
