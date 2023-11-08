const colorSyntaxDefault = { type: 'SOLID', color: { r: 163/255, g: 223/255, b: 253/255 } };
const colorSyntaxComment = { type: 'SOLID', color: { r: 215/255, g: 215/255, b: 219/255 } };
const colorSyntaxKeyword = { type: 'SOLID', color: { r: 122/255, g: 167/255, b: 255/255 } };
const colorSyntaxNumber = { type: 'SOLID', color: { r: 99/255, g: 244/255, b: 76/255 } };
const colorSyntaxLiquidObject = { type: 'SOLID', color: { r: 0/255, g: 244/255, b: 185/255 } };
const colorSyntaxString = { type: 'SOLID', color: { r: 254/255, g: 159/255, b: 155/255 } };
const colorSyntaxDelete = { type: 'SOLID', color: { r: 254/255, g: 159/255, b: 155/255 } };
const colorSyntaxFunction = { type: 'SOLID', color: { r: 243/255, g: 249/255, b: 115/255 } };
const colorSyntaxAdd = { type: 'SOLID', color: { r: 180/255, g: 177/255, b: 255/255 } };
const colorSyntaxPunctuation = { type: 'SOLID', color: { r: 238/255, g: 241/255, b: 241/255 } };
const colorSyntaxBoolean = { type: 'SOLID', color: { r: 180/255, g: 177/255, b: 255/255 } };
const colorSyntaxProperty = { type: 'SOLID', color: { r: 124/255, g: 212/255, b: 251/255 } };

const ShopifyDark = {
  hljs: colorSyntaxDefault,
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
export default ShopifyDark