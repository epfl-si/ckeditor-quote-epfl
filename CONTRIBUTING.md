Contributing
============

Setup
-----

```bash
git clone git@github.com:epfl-si/ckeditor-quote-epfl.git
cd ckeditor-quote-epfl
npm i
```

Test
----

```bash
npm t
```

Release
-------

1. Bump the correct version (`npm version [<newversion> | major | minor | patch]`)
1. Update the file [CHANGELOG.md](CHANGELOG.md)
1. Create the tag (`git tag -a v<version> -m "ckeditor-quote-epfl - <version>"`)

License
-------

MIT License

Copyright (c) 2020 ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI.

See the [LICENSE](LICENSE) file for more details.
