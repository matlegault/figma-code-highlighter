const colorSyntaxDefault = { type: 'SOLID', color: { r: 27/255, g: 103/255, b: 128/255 } };
const colorSyntaxComment = { type: 'SOLID', color: { r: 75/255, g: 100/255, b: 104/255 } };
const colorSyntaxKeyword = { type: 'SOLID', color: { r: 0/255, g: 95/255, b: 184/255 } };
const colorSyntaxNumber = { type: 'SOLID', color: { r: 40/255, g: 109/255, b: 29/255 } };
const colorSyntaxLiquidObject = { type: 'SOLID', color: { r: 0/255, g: 109/255, b: 81/255 } };
const colorSyntaxString = { type: 'SOLID', color: { r: 154/255, g: 70/255, b: 66/255 } };
const colorSyntaxDelete = { type: 'SOLID', color: { r: 205/255, g: 53/255, b: 91/255 } };
const colorSyntaxFunction = { type: 'SOLID', color: { r: 125/255, g: 89/255, b: 0/255 } };
const colorSyntaxAdd = { type: 'SOLID', color: { r: 96/255, g: 85/255, b: 255/255 } };
const colorSyntaxPunctuation = { type: 'SOLID', color: { r: 86/255, g: 71/255, b: 74/255 } };
const colorSyntaxBoolean = { type: 'SOLID', color: { r: 75/255, g: 61/255, b: 247/255 } };
const colorSyntaxProperty = { type: 'SOLID', color: { r: 27/255, g: 103/255, b: 128/255 } };

const ShopifyLight = {
  'hljs': colorSyntaxDefault,
  'hljs-comment': colorSyntaxComment,
  'hljs-quote': colorSyntaxComment,
  'hljs-keyword': colorSyntaxKeyword,
  'hljs-selector-tag': colorSyntaxKeyword,
  'hljs-literal': colorSyntaxKeyword,
  'hljs-subst': colorSyntaxDefault,
  'hljs-number': colorSyntaxNumber,
  'hljs-string': colorSyntaxString,
  'hljs-doctag': colorSyntaxString,
  'hljs-selector-id': colorSyntaxString,
  'hljs-selector-class': colorSyntaxString,
  'hljs-section': colorSyntaxString,
  'hljs-type': colorSyntaxString,
  'hljs-params': colorSyntaxString,
  'hljs-title': colorSyntaxString,
  'hljs-tag': colorSyntaxString,
  'hljs-name': colorSyntaxString,
  'hljs-attribute': colorSyntaxString,
  'hljs-symbol': colorSyntaxNumber,
  'hljs-bullet': colorSyntaxString,
  'hljs-link': colorSyntaxString,
  'hljs-meta': colorSyntaxString,
  'hljs-deletion': colorSyntaxDelete,
  'hljs-addition': colorSyntaxAdd,
  'hljs-emphasis': colorSyntaxDefault,
  'hljs-strong': colorSyntaxDefault,
  'hljs-function': colorSyntaxFunction,
  'hljs-variable': colorSyntaxDefault,
  'hljs-template-variable': colorSyntaxDefault,
  'hljs-template-tag': colorSyntaxDefault,
  'hljs-image': colorSyntaxDefault,
  'hljs-formula': colorSyntaxDefault,
  'hljs-selector-attr': colorSyntaxDefault,
  'hljs-selector-pseudo': colorSyntaxDefault,
  'hljs-built_in': colorSyntaxDefault,
  'hljs-builtin-name': colorSyntaxDefault,
  'hljs-class .hljs-title': colorSyntaxDefault,
  'hljs-attr': colorSyntaxDefault,
  'hljs-punctuation': colorSyntaxPunctuation,
  'hljs-boolean': colorSyntaxBoolean,
  'hljs-operator': colorSyntaxPunctuation,
  'hljs-property': colorSyntaxProperty,
  'hljs-namespace': colorSyntaxDefault,
  'hljs-tag .hljs-title': colorSyntaxDefault,
  'hljs-tag .hljs-attr': colorSyntaxDefault,
  'hljs-variable .hljs-punctuation': colorSyntaxDefault,
  'hljs-variable .hljs-title': colorSyntaxDefault,
  'hljs-punctuation .hljs-tag': colorSyntaxDefault,
  'hljs-string .hljs-attr': colorSyntaxDefault,
  'hljs-string .hljs-punctuation': colorSyntaxDefault,
  'hljs-literal .hljs-punctuation': colorSyntaxDefault,
};
export default ShopifyLight