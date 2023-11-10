const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';

// Liquid Tags
const KEYWORDS = [
  "assign", "capture", "case", "comment", "cycle", "decrement", "for", 
  "if", "ifchanged", "include", "increment", "layout", "liquid", 
  "raw", "render", "section", "tablerow", "unless", "when",
  "elsif", "style", "javascript", "schema", "stylesheet", "endcapture", 
  "endcase", "endfor", "endif", "endunless", "endtablerow", "endcomment", 
  "endraw", "endstylesheet", "endschema", "endjavascript", "else", 
  "break", "continue", "form", "endform", "endsection", "endschema"
];

const KEYWORDS_SUBSET = [
    "limit", "offset", "reversed", "range", 
];

// Booleans
const LITERALS = [
  "true",
  "false",
  "null"
];

// Objects and Variables
const BUILT_INS = [
    "additional_checkout_buttons", "address", "all_country_option_tags", 
    "all_products", "article", "articles", "block", "blog", "blogs", 
    "canonical_url", "cart", "checkout", "collection", "collections", 
    "comment", "content_for_additional_checkout_buttons", "content_for_header", 
    "content_for_index", "content_for_layout", "country_option_tags", 
    "currency", "current_page", "current_tags", "customer", "customer_address", 
    "discount_allocation", "discount_application", "external_video", "font", 
    "forloop", "form", "fulfillment", "gift_card", "handle", "image", 
    "images", "line_item", "link", "linklist", "linklists", "location", 
    "localization", "metafield", "model", "model_source", "order", "page", 
    "page_description", "page_image", "page_title", "pages", "paginate", 
    "part", "policy", "powered_by_link", "predictive_search", "product", 
    "product_option", "product_variant", "recommendations", "request", 
    "routes", "script", "scripts", "search", "section", "selling_plan", 
    "selling_plan_allocation", "selling_plan_group", "settings", 
    "shipping_method", "shop", "shop_locale", "store_availability", 
    "tablerow", "tax_line", "template", "theme", "transaction", 
    "unit_price_measurement", "variant", "video", "video_source", 
    "item", "numbers", "i", "index", "value", "letters", "products"
  ];

// Liquid Filters
const FILTERS = [
    "abs", "append", "at_least", "at_most", "capitalize", "ceil", "compact", 
    "concat", "date", "default", "divided_by", "downcase", "escape", 
    "escape_once", "first", "floor", "join", "last", "lstrip", "map", 
    "minus", "modulo", "newline_to_br", "plus", "prepend", "remove", 
    "remove_first", "replace", "replace_first", "reverse", "round", 
    "rstrip", "size", "slice", "sort", "sort_natural", "split", "strip", 
    "strip_html", "strip_newlines", "times", "truncate", "truncatewords", 
    "uniq", "upcase", "url_decode", "url_encode"
];

const OPERATORS = [
    "==", "=", "\\:", "\\.", "\\|", "!=", "<>", ">", "<", ">=", "<=", "contains", "and", "or", "\\[", "\\]"
];

function liquid(hljs) {
    return {
      name: 'Liquid',
      contains: [
        {
            className: 'punctuation',
            begin: /^[^{]+/,
            end: /(?={|$)/,
            relevance: 0
        },
        hljs.COMMENT('{% comment %}', '{% endcomment %}'),
        hljs.COMMENT('{% raw %}', '{% endraw %}'),
        {
          className: 'template-tag',
          begin: '{%-?\\s*(' + KEYWORDS.join('|') + ')\\b',
          end: '-?%}',
          keywords: KEYWORDS.join(' '),
          contains: [
            {
              className: 'string',
              begin: '"',
              end: '"'
            },
            {
              className: 'string',
              begin: "'",
              end: "'"
            },
            {
              className: 'operator',
              begin: '(' + OPERATORS.join('|') + ')',
            },
            {
              className: 'liquidobject',
              begin: '\\b(' + BUILT_INS.join('|') + ')\\b',
            },
            {
                className: 'function',
                begin: '\\b(' + FILTERS.join('|') + ')\\b',
            },
            {
                className: 'number',
                begin: '\\b\\d+\\b',
            },
            {
                className: 'addition',
                begin: '\\b(' + KEYWORDS_SUBSET.join('|') + ')\\b',
            }
          ]
        },
        {
          className: 'template-variable',
          begin: '{{-?',
          end: '-?}}',
          contains: [
            {
              className: 'string',
              begin: '"',
              end: '"'
            },
            {
              className: 'string',
              begin: "'",
              end: "'"
            },
            {
                className: 'operator',
                begin: '(' + OPERATORS.join('|') + ')',
            },
            {
              className: 'liquidobject',
              begin: '\\b(' + BUILT_INS.join('|') + ')\\b',
            },
            {
                className: 'function',
                begin: '\\b(' + FILTERS.join('|') + ')\\b',
            },
            {
                className: 'number',
                begin: '\\b\\d+\\b',
            },
            {
                className: 'addition',
                begin: '\\b(' + KEYWORDS_SUBSET.join('|') + ')\\b',
            }
          ]
        },
      ]
    };
  }
  
  module.exports = liquid;