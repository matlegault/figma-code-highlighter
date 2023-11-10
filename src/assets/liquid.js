const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
const KEYWORDS = [
  "assign", "capture", "case", "comment", "cycle", "decrement", "for", 
  "if", "ifchanged", "include", "increment", "layout", "liquid", 
  "paginate", "raw", "render", "section", "tablerow", "unless", "when"
];
const LITERALS = [
  "true",
  "false",
  "null"
];

const BUILT_INS = [
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
    "==", "=" , "!=", "<>", ">", "<", ">=", "<=", "contains", "and", "or"
];

function liquid(hljs) {
    return {
      name: 'Liquid',
      contains: [
        hljs.COMMENT('{% comment %}', '{% endcomment %}'),
        hljs.COMMENT('{% raw %}', '{% endraw %}'),
        {
          className: 'template-tag',
          begin: '{%-?\\s*(raw|comment|style|javascript|schema|stylesheet|if|elsif|unless|for|case|when|tablerow|assign|capture|endcapture|endcase|endfor|endif|endunless|endtablerow|endcomment|endraw|endstylesheet|endschema|endjavascript|else|break|continue|render|include|layout|paginate|form|endform|section|endsection|stylesheet|endstylesheet|schema|endschema|javascript|endjavascript)\\b',
          end: '-?%}',
          keywords: 'raw comment style javascript schema stylesheet if elsif unless for case when tablerow assign capture endcapture endcase endfor endif endunless endtablerow endcomment endraw endstylesheet endschema endjavascript else break continue render include layout paginate form endform section endsection stylesheet endstylesheet schema endschema javascript endjavascript',
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
              begin: '(\\b|\\s)(==|!=|<>|>|<|>=|<=|contains|and|or|=|:)(\\b|\\s)',
            },
            {
              className: 'liquidobject',
              begin: '\\b(additional_checkout_buttons|address|all_country_option_tags|all_products|article|articles|block|blog|blogs|canonical_url|cart|checkout|collection|collections|comment|content_for_additional_checkout_buttons|content_for_header|content_for_index|content_for_layout|country_option_tags|currency|current_page|current_tags|customer|customer_address|discount_allocation|discount_application|external_video|font|forloop|form|fulfillment|gift_card|handle|image|images|line_item|link|linklist|linklists|location|localization|metafield|model|model_source|order|page|page_description|page_image|page_title|pages|paginate|part|policy|powered_by_link|predictive_search|product|product_option|product_variant|recommendations|request|routes|script|scripts|search|section|selling_plan|selling_plan_allocation|selling_plan_group|settings|shipping_method|shop|shop_locale|store_availability|tablerow|tax_line|template|theme|transaction|unit_price_measurement|variant|video|video_source)\\b',
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
              begin: '(\\b|\\s)(==|!=|<>|>|<|>=|<=|contains|and|or|=|:)(\\b|\\s)',
            },
            {
              className: 'liquidobject',
              begin: '\\b(additional_checkout_buttons|address|all_country_option_tags|all_products|article|articles|block|blog|blogs|canonical_url|cart|checkout|collection|collections|comment|content_for_additional_checkout_buttons|content_for_header|content_for_index|content_for_layout|country_option_tags|currency|current_page|current_tags|customer|customer_address|discount_allocation|discount_application|external_video|font|forloop|form|fulfillment|gift_card|handle|image|images|line_item|link|linklist|linklists|location|localization|metafield|model|model_source|order|page|page_description|page_image|page_title|pages|paginate|part|policy|powered_by_link|predictive_search|product|product_option|product_variant|recommendations|request|routes|script|scripts|search|section|selling_plan|selling_plan_allocation|selling_plan_group|settings|shipping_method|shop|shop_locale|store_availability|tablerow|tax_line|template|theme|transaction|unit_price_measurement|variant|video|video_source)\\b',
            }
          ]
        },
      ]
    };
  }
  
  module.exports = liquid;