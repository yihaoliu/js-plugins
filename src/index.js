function component() { 
  console.log("000000")
    return true;
}
component()
(function (name, context, definition) {
  'use strict';
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else {
    context[name] = definition(name, context);
  }
}('PubSub', this, function (name, context) {
  let PubSub = null;
  return PubSub;
}));
