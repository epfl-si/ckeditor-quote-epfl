/**
 * Quote EPFL Widget
 *
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2020
 * (c) author Ayhan Akilli
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
        requiredContent: 'blockquote(blockquote)',
        upcast: function (el) {
          if (el.name !== 'blockquote' || !el.hasClass('blockquote')) {
            return false;
          }

          // Blockquote + p
          var fig = el;

          if (fig.children.length < 1 || fig.children[0].name !== 'p') {
            fig.add(new CKEDITOR.htmlParser.element('p'), 0);
          }

          // Footer
          if (fig.children.length < 2 || fig.children[1].name !== 'footer') {
            fig.add(new CKEDITOR.htmlParser.element('footer'), 1);
          }

          fig.children = fig.children.slice(0, 2);

          return fig;
        },
        downcast: function (el) {
          // Quote + p
          el.children[0].attributes = [];
          el.children[0].setHtml(this.editables.quote.getData());

          if (!el.children[0].getHtml().trim()) {
            return new CKEDITOR.htmlParser.text('');
          }

          // Caption
          el.children[1].attributes = [];
          el.children[1].addClass('blockquote-footer');
          el.children[1].setHtml(this.editables.caption.getData());

          if !el.children[1].getHtml().trim() {
            el.children[1].remove();
          }
          return el;
          /*return !el.children[1].getHtml().trim() ? el.children[0] : el;*/
        }
      });
    },
    onLoad: function () {
      CKEDITOR.addCss(
        'blockquote.blockquote {' +
          'padding-left: 1.66rem;' +
          'border-left: 1px solid #d5d5d5;' +
          'font-size: 17px;' +
          'margin-bottom: 2.5rem;' +
          'margin-top: 2.5rem;' +
        '}' +
        'blockquote.blockquote p {' +
          'line-height: 1.3em;' +
        '}' +
        'blockquote.blockquote p::before {' +
          'content: "\\201C";' +
          'padding-right: .2rem;' +
        '}' +
        'blockquote.blockquote p::after {' +
          'content: "\\201D";' +
          'padding-left: .2rem;' +
        '}' +
        'blockquote.blockquote p.cke_widget_editable {' +
          'margin: 0;' +
        '}' +
        'blockquote.blockquote footer {' +
          'margin-top: 0.72rem;' +
          'font-style: normal;' +
          'font-size: 13px;' +
          'color: #707070;' +
        '}' +
        'blockquote.blockquote footer::before {' +
          'content: "\\2014 \\00A0";' +
        '}'
      );
    }
  });
})(CKEDITOR);
