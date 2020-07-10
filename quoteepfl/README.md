# Quote EPFL Widget

This widget can be used as an alternative to the [Blockquote Plugin](https://ckeditor.com/cke4/addon/blockquote). It follows the EPFL style guide for *quote* element (see [WHATWG](https://epfl-si.github.io/elements/#/molecules/quote)). 

So the resulting HTML will be 

    <blockquote class="blockquote">
        <p>
            ...
        </p>
        <footer class="blockquote-footer">
            ...
        </footer>
    </blockquote>

If the caption is empty, the blockquote element will just be

    <blockquote>
        ...
    </blockquote>
