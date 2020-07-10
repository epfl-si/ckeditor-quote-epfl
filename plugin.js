/**
 * Quote EPFL Widget
 *
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2020
 */
'use strict';

(function (CKEDITOR) {
  /**
   * Plugin
   */
  CKEDITOR.plugins.add('quoteepfl', {
    requires: 'api,widget',
    icons: 'quoteepfl',
    hidpi: true,
    lang: 'de,en,fr',
    init: function (editor) {
      /**
       * Widget
       */
      editor.widgets.add('quoteepfl', {
        button: editor.lang.quoteepfl.title,
        template: '<blockquote class="blockquote"><p>' +
          editor.lang.quoteepfl.putCitationHere +
          '</p><footer class="blockquote-footer">' +
          editor.lang.quoteepfl.putAuthor +
          '</footer></blockquote>',
        editables: {
          quote: {
            selector: 'p'
          },
          caption: {
            selector: 'footer',
            allowedContent: {
              a: {
                attributes: { href: true },
                requiredAttributes: { href: true }
              },
              br: true,
              em: true,
              strong: true,
              cite: true
            }
          }
        },
        allowedContent: {
          blockquote: {
            classes: { blockquote: true },
            requiredClasses: { blockquote: true }
          },
          p: true,
          footer: {
            classes: { 'blockquote-footer': true },
            requiredClasses: { 'blockquote-footer': true }
          }
        },
        requiredContent: 'blockquote(quote)',
        upcast: function (el) {
          if (el.name !== 'blockquote' || !el.hasClass('blockquote')) {
            return false;
          }

          // Blockquote + p
          var fig = el;

          if (fig.children.length < 1 || fig.children[0].name !== 'p') {
            fig.add(new CKEDITOR.htmlParser.element('p'), 0);  /* eslint-disable-line */
          }

          // Footer
          if (fig.children.length < 2 || fig.children[1].name !== 'footer') {
            fig.add(new CKEDITOR.htmlParser.element('footer'), 1);  /* eslint-disable-line */
          }

          fig.children = fig.children.slice(0, 2);

          return fig;
        },
        downcast: function (el) {
          // Quote + p
          el.children[0].attributes = [];
          el.children[0].setHtml(this.editables.quote.getData());

          if (!el.children[0].getHtml().trim()) {
            return new CKEDITOR.htmlParser.text('');  /* eslint-disable-line */
          }

          // Caption
          el.children[1].attributes = [];
          el.children[1].addClass('blockquote-footer');
          el.children[1].setHtml(this.editables.caption.getData());

          return !el.children[1].getHtml().trim() ? el.children[0] : el;
        }
      });
    },
    onLoad: function () {
      CKEDITOR.addCss(
        'blockquote.blockquote {line-height: 1.5rem;margin: 0 0 1.5rem;text-align: center;border: 0.0625rem solid #ddd;border-radius: 0.5rem;}' +  /* eslint-disable-line */
        'blockquote.blockquote p {padding: 2.25rem 0.75rem 0.75rem;color: #333;background: #f8f8f7;}' +  /* eslint-disable-line */
        'blockquote.blockquote footer {font-size: 0.875rem;background: #eee;}' +  /* eslint-disable-line */
        'blockquote.blockquote .cke_widget_editable {outline: none !important;}'  /* eslint-disable-line */
      );
    }
  });
})(CKEDITOR);
