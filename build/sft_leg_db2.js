var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component18(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component18.prototype.isReactComponent = {};
        Component18.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component18.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component18.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component18.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component18.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config2) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && config2.__self && ReactCurrentOwner.current.stateNode !== config2.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement24(type, config2, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config2);
              }
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            self = config2.__self === void 0 ? null : config2.__self;
            source = config2.__source === void 0 ? null : config2.__source;
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config2, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config2[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config2[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text2) {
          return text2.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray2(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render3) {
          {
            if (render3 != null && render3.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render3 !== "function") {
              error("forwardRef requires a render function but was given %s.", render3 === null ? "null" : typeof render3);
            } else {
              if (render3.length !== 0 && render3.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render3.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render3 != null) {
              if (render3.defaultProps != null || render3.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render3
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render3.name && !render3.displayName) {
                  render3.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component19) {
          var prototype = Component19.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement24.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray: toArray2,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component18;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text2) {
        var message = "Warning: " + text2;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text2) {
        var message = "Warning: " + text2;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faMagnifyingGlass.js
var require_faMagnifyingGlass = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faMagnifyingGlass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "magnifying-glass";
    var width = 512;
    var height = 512;
    var aliases = [128269, "search"];
    var unicode = "f002";
    var svgPathData = "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faMagnifyingGlass = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faBan.js
var require_faBan = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faBan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "ban";
    var width = 512;
    var height = 512;
    var aliases = [128683, "cancel"];
    var unicode = "f05e";
    var svgPathData = "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faBan = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faCircleInfo.js
var require_faCircleInfo = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faCircleInfo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "circle-info";
    var width = 512;
    var height = 512;
    var aliases = ["info-circle"];
    var unicode = "f05a";
    var svgPathData = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faCircleInfo = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faDownload.js
var require_faDownload = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faDownload.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "download";
    var width = 512;
    var height = 512;
    var aliases = [];
    var unicode = "f019";
    var svgPathData = "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faDownload = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faEllipsisVertical.js
var require_faEllipsisVertical = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faEllipsisVertical.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "ellipsis-vertical";
    var width = 128;
    var height = 512;
    var aliases = ["ellipsis-v"];
    var unicode = "f142";
    var svgPathData = "M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faEllipsisVertical = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faFilter.js
var require_faFilter = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faFilter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "filter";
    var width = 512;
    var height = 512;
    var aliases = [];
    var unicode = "f0b0";
    var svgPathData = "M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faFilter = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faFilterCircleXmark.js
var require_faFilterCircleXmark = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faFilterCircleXmark.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "filter-circle-xmark";
    var width = 576;
    var height = 512;
    var aliases = [];
    var unicode = "e17b";
    var svgPathData = "M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faFilterCircleXmark = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faListCheck.js
var require_faListCheck = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faListCheck.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "list-check";
    var width = 512;
    var height = 512;
    var aliases = ["tasks"];
    var unicode = "f0ae";
    var svgPathData = "M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faListCheck = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/fcmkit/node_modules/react/cjs/react.development.js
var require_react_development2 = __commonJS({
  "node_modules/fcmkit/node_modules/react/cjs/react.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var _assign = require_object_assign();
        var checkPropTypes = require_checkPropTypes();
        var ReactVersion = "16.14.0";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          suspense: null
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
        function describeComponentFrame(name, source, ownerName) {
          var sourceInfo = "";
          if (source) {
            var path = source.fileName;
            var fileName = path.replace(BEFORE_SLASH_RE, "");
            {
              if (/^index\./.test(fileName)) {
                var match = path.match(BEFORE_SLASH_RE);
                if (match) {
                  var pathBeforeSlash = match[1];
                  if (pathBeforeSlash) {
                    var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                    fileName = folderName + "/" + fileName;
                  }
                }
              }
            }
            sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
          } else if (ownerName) {
            sourceInfo = " (created by " + ownerName + ")";
          }
          return "\n    in " + (name || "Unknown") + sourceInfo;
        }
        var Resolved = 1;
        function refineResolvedLazyComponent(lazyComponent) {
          return lazyComponent._status === Resolved ? lazyComponent._result : null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return "Context.Consumer";
              case REACT_PROVIDER_TYPE:
                return "Context.Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type.render);
              case REACT_LAZY_TYPE: {
                var thenable = type;
                var resolvedThenable = refineResolvedLazyComponent(thenable);
                if (resolvedThenable) {
                  return getComponentName(resolvedThenable);
                }
                break;
              }
            }
          }
          return null;
        }
        var ReactDebugCurrentFrame = {};
        var currentlyValidatingElement = null;
        function setCurrentlyValidatingElement(element) {
          {
            currentlyValidatingElement = element;
          }
        }
        {
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentlyValidatingElement) {
              var name = getComponentName(currentlyValidatingElement.type);
              var owner = currentlyValidatingElement._owner;
              stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        };
        {
          _assign(ReactSharedInternals, {
            // These should not be included in production.
            ReactDebugCurrentFrame,
            // Shim for React DOM 16.0.0 which still destructured (but not used) this.
            // TODO: remove in React 17.0.
            ReactComponentTreeHook: {}
          });
        }
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === "string" && args[args.length - 1].indexOf("\n    in") === 0;
            if (!hasExistingStack) {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
            try {
              var argIndex = 0;
              var message = "Warning: " + format.replace(/%s/g, function() {
                return args[argIndex++];
              });
              throw new Error(message);
            } catch (x) {
            }
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component18(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component18.prototype.isReactComponent = {};
        Component18.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component18.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component18.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component18.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component18.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config2) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && config2.__self && ReactCurrentOwner.current.stateNode !== config2.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement24(type, config2, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config2);
              }
            }
            if (hasValidKey(config2)) {
              key = "" + config2.key;
            }
            self = config2.__self === void 0 ? null : config2.__self;
            source = config2.__source === void 0 ? null : config2.__source;
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config2, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config2)) {
              key = "" + config2.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config2[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config2[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = ("" + key).replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text2) {
          return ("" + text2).replace(userProvidedKeyEscapeRegex, "$&/");
        }
        var POOL_SIZE = 10;
        var traverseContextPool = [];
        function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
          if (traverseContextPool.length) {
            var traverseContext = traverseContextPool.pop();
            traverseContext.result = mapResult;
            traverseContext.keyPrefix = keyPrefix;
            traverseContext.func = mapFunction;
            traverseContext.context = mapContext;
            traverseContext.count = 0;
            return traverseContext;
          } else {
            return {
              result: mapResult,
              keyPrefix,
              func: mapFunction,
              context: mapContext,
              count: 0
            };
          }
        }
        function releaseTraverseContext(traverseContext) {
          traverseContext.result = null;
          traverseContext.keyPrefix = null;
          traverseContext.func = null;
          traverseContext.context = null;
          traverseContext.count = 0;
          if (traverseContextPool.length < POOL_SIZE) {
            traverseContextPool.push(traverseContext);
          }
        }
        function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            callback(
              traverseContext,
              children,
              // If it's the only child, treat the name as if it was wrapped in an array
              // so that it's consistent if the number of children grows.
              nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
            );
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getComponentKey(child, i);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              {
                if (iteratorFn === children.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(children);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else if (type === "object") {
              var addendum = "";
              {
                addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
              }
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum);
                }
              }
            }
          }
          return subtreeCount;
        }
        function traverseAllChildren(children, callback, traverseContext) {
          if (children == null) {
            return 0;
          }
          return traverseAllChildrenImpl(children, "", callback, traverseContext);
        }
        function getComponentKey(component, index) {
          if (typeof component === "object" && component !== null && component.key != null) {
            return escape(component.key);
          }
          return index.toString(36);
        }
        function forEachSingleChild(bookKeeping, child, name) {
          var func = bookKeeping.func, context = bookKeeping.context;
          func.call(context, child, bookKeeping.count++);
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          if (children == null) {
            return children;
          }
          var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
          traverseAllChildren(children, forEachSingleChild, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapSingleChildIntoContext(bookKeeping, child, childKey) {
          var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
          var mappedChild = func.call(context, child, bookKeeping.count++);
          if (Array.isArray(mappedChild)) {
            mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function(c) {
              return c;
            });
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(
                mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey
              );
            }
            result.push(mappedChild);
          }
        }
        function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
          var escapedPrefix = "";
          if (prefix != null) {
            escapedPrefix = escapeUserProvidedKey(prefix) + "/";
          }
          var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
          traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, func, context);
          return result;
        }
        function countChildren(children) {
          return traverseAllChildren(children, function() {
            return null;
          }, null);
        }
        function toArray2(children) {
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, function(child) {
            return child;
          });
          return result;
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        function lazy(ctor) {
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _ctor: ctor,
            // React uses these fields to store the result.
            _status: -1,
            _result: null
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render3) {
          {
            if (render3 != null && render3.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render3 !== "function") {
              error("forwardRef requires a render function but was given %s.", render3 === null ? "null" : typeof render3);
            } else {
              if (render3.length !== 0 && render3.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render3.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render3 != null) {
              if (render3.defaultProps != null || render3.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          return {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render3
          };
        }
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          return {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement(element);
          {
            error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
          }
          setCurrentlyValidatingElement(null);
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var name = getComponentName(type);
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              setCurrentlyValidatingElement(element);
              checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
              setCurrentlyValidatingElement(null);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            setCurrentlyValidatingElement(fragment);
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                break;
              }
            }
            if (fragment.ref !== null) {
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
            }
            setCurrentlyValidatingElement(null);
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement24.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            var testMap = /* @__PURE__ */ new Map([[frozenObject, null]]);
            var testSet = /* @__PURE__ */ new Set([frozenObject]);
            testMap.set(0, 0);
            testSet.add(0);
          } catch (e) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray: toArray2,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component18;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/fcmkit/node_modules/react/index.js
var require_react2 = __commonJS({
  "node_modules/fcmkit/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development2();
    }
  }
});

// node_modules/@fortawesome/free-regular-svg-icons/faCircleXmark.js
var require_faCircleXmark = __commonJS({
  "node_modules/@fortawesome/free-regular-svg-icons/faCircleXmark.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "far";
    var iconName = "circle-xmark";
    var width = 512;
    var height = 512;
    var aliases = [61532, "times-circle", "xmark-circle"];
    var unicode = "f057";
    var svgPathData = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faCircleXmark = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faChevronLeft.js
var require_faChevronLeft = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faChevronLeft.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "chevron-left";
    var width = 320;
    var height = 512;
    var aliases = [9001];
    var unicode = "f053";
    var svgPathData = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faChevronLeft = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faChevronRight.js
var require_faChevronRight = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faChevronRight.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "chevron-right";
    var width = 320;
    var height = 512;
    var aliases = [9002];
    var unicode = "f054";
    var svgPathData = "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faChevronRight = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faAnglesLeft.js
var require_faAnglesLeft = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faAnglesLeft.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "angles-left";
    var width = 512;
    var height = 512;
    var aliases = [171, "angle-double-left"];
    var unicode = "f100";
    var svgPathData = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faAnglesLeft = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faAngleDoubleLeft.js
var require_faAngleDoubleLeft = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faAngleDoubleLeft.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var source = require_faAnglesLeft();
    exports.definition = {
      prefix: source.prefix,
      iconName: source.iconName,
      icon: [
        source.width,
        source.height,
        source.aliases,
        source.unicode,
        source.svgPathData
      ]
    };
    exports.faAngleDoubleLeft = exports.definition;
    exports.prefix = source.prefix;
    exports.iconName = source.iconName;
    exports.width = source.width;
    exports.height = source.height;
    exports.ligatures = source.aliases;
    exports.unicode = source.unicode;
    exports.svgPathData = source.svgPathData;
    exports.aliases = source.aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faAnglesRight.js
var require_faAnglesRight = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faAnglesRight.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix = "fas";
    var iconName = "angles-right";
    var width = 512;
    var height = 512;
    var aliases = [187, "angle-double-right"];
    var unicode = "f101";
    var svgPathData = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
    exports.definition = {
      prefix,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faAnglesRight = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faAngleDoubleRight.js
var require_faAngleDoubleRight = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faAngleDoubleRight.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var source = require_faAnglesRight();
    exports.definition = {
      prefix: source.prefix,
      iconName: source.iconName,
      icon: [
        source.width,
        source.height,
        source.aliases,
        source.unicode,
        source.svgPathData
      ]
    };
    exports.faAngleDoubleRight = exports.definition;
    exports.prefix = source.prefix;
    exports.iconName = source.iconName;
    exports.width = source.width;
    exports.height = source.height;
    exports.ligatures = source.aliases;
    exports.unicode = source.unicode;
    exports.svgPathData = source.svgPathData;
    exports.aliases = source.aliases;
  }
});

// node_modules/fcmlib/lib/EventManager.js
if (!manywho.eventManager) {
  manywho.eventManager = {};
  manywho.eventManager.beforeSendListeners = {};
  manywho.eventManager.doneListeners = {};
  manywho.eventManager.initializedListeners = {};
  manywho.eventManager.joinListeners = {};
  manywho.eventManager.failListeners = {};
  manywho.eventManager.outcomeBeingTriggered;
  manywho.eventManager.history = [];
  manywho.eventManager.beforeSend = (xhr, request) => {
    if (xhr) {
      if (window.hasOwnProperty("culture") && culture.length > 0) {
        xhr.setRequestHeader("Culture", culture);
      }
    }
    for (const key in manywho.eventManager.beforeSendListeners) {
      manywho.eventManager.beforeSendListeners[key](xhr, request);
    }
  };
  manywho.eventManager.join = (xhr, request) => {
    for (const key in manywho.eventManager.joinListeners) {
      manywho.eventManager.joinListeners[key](xhr, request);
    }
  };
  manywho.eventManager.done = (xhr, request) => {
    for (const key in manywho.eventManager.doneListeners) {
      manywho.eventManager.doneListeners[key](xhr, request);
    }
  };
  manywho.eventManager.initialized = (xhr, request) => {
    for (const key in manywho.eventManager.initializedListeners) {
      manywho.eventManager.initializedListeners[key](xhr, request);
    }
  };
  manywho.eventManager.fail = (xhr, request) => {
    for (const key in manywho.eventManager.failListeners) {
      manywho.eventManager.failListeners[key](xhr, request);
    }
  };
  manywho.eventManager.addBeforeSendListener = (handler, componentId) => {
    manywho.eventManager.beforeSendListeners[componentId] = handler;
  };
  manywho.eventManager.removeBeforeSendListener = (componentId) => {
    delete manywho.eventManager.beforeSendListeners[componentId];
  };
  manywho.eventManager.addInitializedListener = (handler, componentId) => {
    manywho.eventManager.initializedListeners[componentId] = handler;
  };
  manywho.eventManager.removeInitializedListener = (componentId) => {
    delete manywho.eventManager.initializedListeners[componentId];
  };
  manywho.eventManager.addJoinListener = (handler, componentId) => {
    manywho.eventManager.joinListeners[componentId] = handler;
  };
  manywho.eventManager.removeJoinListener = (componentId) => {
    delete manywho.eventManager.joinListeners[componentId];
  };
  manywho.eventManager.addDoneListener = (handler, componentId) => {
    manywho.eventManager.doneListeners[componentId] = handler;
  };
  manywho.eventManager.removeDoneListener = (componentId) => {
    delete manywho.eventManager.doneListeners[componentId];
  };
  manywho.eventManager.addFailListener = (handler, componentId) => {
    manywho.eventManager.failListeners[componentId] = handler;
  };
  manywho.eventManager.removeFailListener = (componentId) => {
    delete manywho.eventManager.failListeners[componentId];
  };
  manywho.settings.initialize(null, {
    invoke: {
      beforeSend: manywho.eventManager.beforeSend,
      done: manywho.eventManager.done,
      fail: manywho.eventManager.fail
    },
    initialization: {
      beforeSend: manywho.eventManager.beforeSend,
      done: manywho.eventManager.initialized,
      fail: manywho.eventManager.fail
    },
    join: {
      beforeSend: manywho.eventManager.beforeSend,
      done: manywho.eventManager.join,
      fail: manywho.eventManager.fail
    }
  });
}

// node_modules/fcmlib/lib/FCMCore.js
var import_react = __toESM(require_react());

// node_modules/fcmlib/lib/FlowObjectDataProperty.js
var FlowObjectDataProperty = class _FlowObjectDataProperty {
  constructor(property) {
    this.ContentFormat = "";
    this.ContentType = eContentType.unknown;
    this.DeveloperName = "";
    this.TypeElementId = "";
    this.TypeElementPropertyId = "";
    if (property) {
      this.DeveloperName = property.developerName;
      this.ContentType = eContentType[property.contentType];
      this.ContentFormat = property.contentFormat ? property.contentFormat : "";
      this.TypeElementId = property.typeElementId ? property.typeElementId : "";
      this.TypeElementPropertyId = property.typeElementPropertyId;
      switch (this.ContentType) {
        case eContentType.ContentObject:
          this.Value = property.objectData ? new FlowObjectData(property.objectData) : void 0;
          break;
        case eContentType.ContentList:
          this.Value = property.objectData ? new FlowObjectDataArray(property.objectData) : new FlowObjectDataArray([]);
          break;
        case eContentType.ContentNumber:
          this.Value = property.contentValue ? parseFloat("" + property.contentValue) : null;
          break;
        case eContentType.ContentBoolean:
          this.Value = ("" + property.contentValue).trim().toLowerCase() === "true" ? true : false;
          break;
        case eContentType.ContentDateTime:
          this.Value = new Date(property.contentValue);
          break;
        default:
          this.Value = property.contentValue ? "" + property.contentValue : "";
          break;
      }
    }
  }
  static newInstance(developerName, contentType, value) {
    let cv;
    let objd = [];
    switch (contentType) {
      case eContentType.ContentObject:
        const od = value;
        objd.push(od.iObjectData());
        break;
      case eContentType.ContentList:
        const oda = value;
        objd = oda.iFlowObjectDataArray();
        break;
      case eContentType.ContentNumber:
        cv = value;
        break;
      case eContentType.ContentBoolean:
        cv = value;
        break;
      default:
        cv = value;
        break;
    }
    const data = {
      contentFormat: "",
      contentType: eContentType[contentType],
      contentValue: cv,
      developerName,
      objectData: objd,
      typeElementId: "",
      typeElementPropertyId: ""
    };
    return new this(data);
  }
  get contentFormat() {
    return this.ContentFormat;
  }
  set contentFormat(contentFormat) {
    this.contentFormat = contentFormat;
  }
  get contentType() {
    return this.ContentType;
  }
  set contentType(contentType) {
    this.ContentType = contentType;
  }
  get developerName() {
    return this.DeveloperName;
  }
  set developerName(developerName) {
    this.DeveloperName = developerName;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  set typeElementId(typeElementId) {
    this.TypeElementId = typeElementId;
  }
  get typeElementPropertyId() {
    return this.TypeElementPropertyId;
  }
  set typeElementPropertyId(typeElementPropertyId) {
    this.TypeElementPropertyId = typeElementPropertyId;
  }
  get value() {
    switch (this.contentType) {
      case eContentType.ContentNumber:
        return this.Value;
      case eContentType.ContentBoolean:
        return this.Value;
      case eContentType.ContentDateTime:
        return this.Value;
      default:
        return this.Value;
    }
  }
  set value(value) {
    switch (this.contentType) {
      case eContentType.ContentNumber:
        this.Value = parseFloat(value ? "" + value : "0");
        break;
      case eContentType.ContentBoolean:
        this.Value = new String(value).toLowerCase() === "true" ? true : false;
      case eContentType.ContentDateTime:
        this.Value = new Date(value);
      default:
        this.Value = value;
    }
  }
  clone() {
    let value;
    switch (this.contentType) {
      case eContentType.ContentList:
        value = new FlowObjectDataArray();
        this.value.items.forEach((item) => {
          value.addItem(item.clone(item.developerName));
        });
        break;
      case eContentType.ContentObject:
        value = this.value.clone(this.value.developerName);
        break;
      default:
        value = this.value;
    }
    const clone = _FlowObjectDataProperty.newInstance(this.developerName, this.contentType, value);
    return clone;
  }
  iFlowObjectDataProperty() {
    let contentValue = "";
    let objectData = [];
    switch (this.ContentType) {
      case eContentType.ContentObject:
        const od = this.Value;
        if (od && od.developerName && od.developerName.length > 0) {
          objectData.push(od.iObjectData());
        }
        break;
      case eContentType.ContentList:
        const oda = this.Value;
        objectData = oda.iFlowObjectDataArray();
        break;
      case eContentType.ContentNumber:
        contentValue = "" + parseFloat(this.Value ? this.Value : "0");
        break;
      case eContentType.ContentBoolean:
        contentValue = "" + (new String(this.Value).toLowerCase() === "true");
        break;
      case eContentType.ContentDateTime:
        contentValue = isNaN(this.Value.getTime()) ? "" : this.Value.toISOString();
        break;
      default:
        contentValue = this.Value;
        break;
    }
    const output = {
      contentFormat: this.ContentFormat,
      contentType: eContentType[this.ContentType],
      contentValue,
      developerName: this.DeveloperName,
      objectData,
      typeElementId: this.TypeElementId,
      typeElementPropertyId: this.TypeElementPropertyId
    };
    return output;
  }
  get displayString() {
    let label = "";
    if (this.Value) {
      switch (this.ContentType) {
        case eContentType.ContentString:
        case eContentType.ContentNumber:
          label = this.Value;
          break;
        case eContentType.ContentBoolean:
          if (this.Value === true) {
            label = "True";
          } else {
            label = "False";
          }
          break;
        case eContentType.ContentDateTime:
          const d2 = Date.parse(this.Value);
          if (!isNaN(d2)) {
            const dt = new Date(d2);
            if (label.length <= 10) {
              return dt.toLocaleDateString();
            } else {
              return dt.toLocaleString();
            }
          }
          break;
        default:
          label = eContentType[this.ContentType];
          break;
      }
    } else {
      label = "Undefined";
    }
    return label;
  }
};

// node_modules/fcmlib/lib/FlowObjectData.js
var FlowObjectData = class _FlowObjectData {
  constructor(data) {
    this.DeveloperName = "";
    this.ExternalId = "";
    this.InternalId = "";
    this.IsSelected = false;
    this.Order = 0;
    this.TypeElementId = "";
    this.Properties = {};
    if (data && data[0]) {
      const objectData = data[0];
      this.DeveloperName = objectData.developerName;
      this.InternalId = objectData.internalId;
      this.ExternalId = objectData.externalId;
      this.Order = objectData.order;
      this.IsSelected = objectData.isSelected;
      this.TypeElementId = objectData.typeElementId;
      if (objectData.properties && objectData.properties.length > 0) {
        for (const property of objectData.properties) {
          this.Properties[property.developerName] = new FlowObjectDataProperty(property);
        }
      }
    } else {
      console.log("null data");
    }
  }
  get developerName() {
    return this.DeveloperName;
  }
  set developerName(developerName) {
    this.DeveloperName = developerName;
  }
  get externalId() {
    return this.ExternalId;
  }
  set externalId(externalId) {
    this.ExternalId = externalId;
  }
  get internalId() {
    return this.InternalId;
  }
  set internalId(internalId) {
    this.InternalId = internalId;
  }
  get isSelected() {
    return this.IsSelected;
  }
  set isSelected(isSelected) {
    this.IsSelected = isSelected;
  }
  get order() {
    return this.Order;
  }
  set order(order) {
    this.Order = order;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  set typeElementId(typeElementId) {
    this.TypeElementId = typeElementId;
  }
  get properties() {
    return this.Properties;
  }
  static newInstance(developerName) {
    const data = {
      developerName,
      externalId: "",
      internalId: manywho.utils.guid(),
      isSelected: false,
      order: 0,
      properties: [],
      typeElementId: ""
    };
    return new this([data]);
  }
  addProperty(newProperty) {
    this.Properties[newProperty.developerName] = newProperty;
  }
  removeProperty(key) {
    delete this.Properties[key];
  }
  clone(newTypeName) {
    const clone = _FlowObjectData.newInstance(newTypeName || this.DeveloperName);
    Object.keys(this.properties).forEach((key) => {
      const newProp = this.properties[key].clone();
      clone.properties[key] = newProp;
    });
    return clone;
  }
  iObjectData(selected) {
    const props = [];
    for (const key of Object.keys(this.properties)) {
      props.push(this.properties[key].iFlowObjectDataProperty());
    }
    const objectData = {
      developerName: this.developerName,
      externalId: this.externalId,
      internalId: this.internalId,
      isSelected: selected || this.isSelected,
      order: this.order,
      properties: props,
      typeElementId: this.TypeElementId
    };
    return objectData;
  }
  iFlowObjectDataArray(selected) {
    const output = [];
    output.push(this.iObjectData(selected));
    return output;
  }
};

// node_modules/fcmlib/lib/FlowObjectDataArray.js
var eSortOrder;
(function(eSortOrder2) {
  eSortOrder2[eSortOrder2["ascending"] = 0] = "ascending";
  eSortOrder2[eSortOrder2["descending"] = 1] = "descending";
})(eSortOrder || (eSortOrder = {}));
var FlowObjectDataArray = class _FlowObjectDataArray {
  constructor(array) {
    this.Items = [];
    for (const item of array || []) {
      this.Items.push(new FlowObjectData([item]));
    }
  }
  get items() {
    return this.Items;
  }
  sort(order, fieldName) {
    if (order === eSortOrder.ascending) {
      if (fieldName) {
        return this.Items.sort((a, b) => {
          let valA;
          let valB;
          switch (a.properties[fieldName].contentType) {
            case eContentType.ContentNumber:
              valA = parseFloat(a.properties[fieldName].value);
              valB = parseFloat(b.properties[fieldName].value);
              break;
            case eContentType.ContentDateTime:
              valA = new Date(a.properties[fieldName].value);
              valB = new Date(b.properties[fieldName].value);
              break;
            default:
              valA = a.properties[fieldName].value;
              valB = b.properties[fieldName].value;
              break;
          }
          switch (true) {
            case valA < valB:
              return -1;
            case valA > valB:
              return 1;
            default:
              return 0;
          }
        });
      } else {
        return this.Items.sort((a, b) => a.order - b.order);
      }
    } else {
      if (fieldName) {
        return this.Items.sort((a, b) => {
          if (a && b && a.properties && b.properties && a.properties[fieldName] && b.properties[fieldName] && a.properties[fieldName].value && b.properties[fieldName].value) {
            if (a.properties[fieldName]) {
              switch (true) {
                case a.properties[fieldName].value < b.properties[fieldName].value:
                  return 1;
                case a.properties[fieldName].value > b.properties[fieldName].value:
                  return -1;
                default:
                  return 0;
              }
            } else {
              return 0;
            }
          } else {
            return 0;
          }
        });
      } else {
        return this.Items.sort((a, b) => a.order - b.order);
      }
    }
  }
  static fromJSONString(json, primaryKey, columns, flowTypeName) {
    let objDataArray = new _FlowObjectDataArray();
    let model = JSON.parse(json);
    model.forEach((item) => {
      let objData = FlowObjectData.newInstance(flowTypeName);
      columns.forEach((col) => {
        let val = item[col.developerName];
        if (col.developerName === primaryKey) {
          objData.externalId = val;
        }
        switch (col.contentType) {
          case eContentType.ContentDateTime:
            val = new Date(val);
            if (val && !isNaN(val.getTime())) {
              val = val.toISOString();
            } else {
              val = "";
            }
            break;
          case eContentType.ContentNumber:
            val = parseFloat("" + val);
            if (val && !isNaN(val)) {
              val = "" + val;
            } else {
              val = "";
            }
            break;
          case eContentType.ContentBoolean:
            val = new String(val).toLowerCase() === "true";
            break;
        }
        objData.addProperty(FlowObjectDataProperty.newInstance(col.developerName, col.contentType, val));
        objData.properties[col.developerName].typeElementPropertyId = col.typeElementPropertyId;
      });
      objDataArray.addItem(objData);
    });
    return objDataArray;
  }
  addItem(item) {
    this.Items.push(item);
  }
  clearItems() {
    this.Items = [];
  }
  clone() {
    const clone = new _FlowObjectDataArray();
    this.items.forEach((obj) => {
      clone.addItem(obj.clone());
    });
    return clone;
  }
  iFlowObjectDataArray(selected) {
    const output = [];
    for (const od of this.Items) {
      output.push(od.iObjectData(selected));
    }
    return output;
  }
  getItemWithPropertyName(findProperty, withValue, returnProperty) {
    for (const item of this.Items) {
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(compareTo.toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return item.properties[returnProperty];
        }
      }
    }
    return null;
  }
  getSelectedItems() {
    const results = new _FlowObjectDataArray();
    for (const item of this.Items) {
      if (item.isSelected === true) {
        results.addItem(item);
      }
    }
    return results;
  }
  getItemWithPropertyValue(findProperty, withValue) {
    for (const item of this.Items) {
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = new String(compareTo).toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return item;
        }
      }
    }
  }
  getIndexOfItemWithPropertyValue(findProperty, withValue) {
    for (let pos = 0; pos < this.items.length; pos++) {
      const item = this.items[pos];
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return pos;
        }
      }
    }
    return -1;
  }
  removeItemWithPropertyValue(findProperty, withValue) {
    let modifiedCount = 0;
    for (let pos = 0; pos < this.items.length; pos++) {
      const item = this.items[pos];
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          this.items.splice(pos, 1);
          modifiedCount++;
        }
      }
    }
    return modifiedCount;
  }
  removeItemAtIndex(index) {
    let modifiedCount = 0;
    if (this.items[index]) {
      this.items.splice(index, 1);
      modifiedCount = index;
    }
    return modifiedCount;
  }
};

// node_modules/fcmlib/lib/FlowAttribute.js
var FlowAttribute = class {
  constructor(name, value) {
    this.Name = name;
    this.Value = value;
  }
  get name() {
    return this.Name;
  }
  get value() {
    return this.Value;
  }
  set value(val) {
    this.Value = val;
  }
};

// node_modules/fcmlib/lib/FlowOutcome.js
var ePageActionBindingType;
(function(ePageActionBindingType2) {
  ePageActionBindingType2["Save"] = "SAVE";
  ePageActionBindingType2["PartialSave"] = "PARTIAL_SAVE";
  ePageActionBindingType2["NoSave"] = "NO_SAVE";
})(ePageActionBindingType || (ePageActionBindingType = {}));
var ePageActionType;
(function(ePageActionType2) {
  ePageActionType2["New"] = "NEW";
  ePageActionType2["Query"] = "QUERY";
  ePageActionType2["Insert"] = "INSERT";
  ePageActionType2["Update"] = "UPDATE";
  ePageActionType2["Upsert"] = "UPSERT";
  ePageActionType2["Delete"] = "DELETE";
  ePageActionType2["Remove"] = "REMOVE";
  ePageActionType2["Add"] = "ADD";
  ePageActionType2["Edit"] = "EDIT";
  ePageActionType2["Next"] = "NEXT";
  ePageActionType2["Back"] = "BACK";
  ePageActionType2["Done"] = "DONE";
  ePageActionType2["Save"] = "SAVE";
  ePageActionType2["Cancel"] = "CANCEL";
  ePageActionType2["Apply"] = "APPLY";
  ePageActionType2["Import"] = "IMPORT";
  ePageActionType2["Close"] = "CLOSE";
  ePageActionType2["Open"] = "OPEN";
  ePageActionType2["Submit"] = "SUBMIT";
  ePageActionType2["Escalate"] = "ESCALATE";
  ePageActionType2["Reject"] = "REJECT";
  ePageActionType2["Delegate"] = "DELEGATE";
})(ePageActionType || (ePageActionType = {}));
var FlowOutcome = class {
  constructor(outcome) {
    this.developerName = outcome.developerName;
    this.id = outcome.id;
    this.isBulkAction = outcome.isBulkAction;
    this.isOut = outcome.isOut;
    this.label = outcome.label;
    this.order = outcome.order;
    this.pageActionBindingType = outcome.pageActionBindingType;
    this.pageActionType = outcome.pageActionType;
    this.pageObjectBindingId = outcome.pageObjectBindingId;
    this.attributes = {};
    if (outcome.attributes) {
      for (const key of Object.keys(outcome.attributes)) {
        this.attributes[key] = new FlowAttribute(key, outcome.attributes[key]);
      }
    }
  }
};

// node_modules/fcmlib/lib/FlowDisplayColumn.js
var FlowDisplayColumn = class {
  constructor(column) {
    this.componentType = column.componentType;
    this.contentFormat = column.contentFormat;
    this.contentType = eContentType[column.contentType];
    this.developerName = column.developerName;
    this.order = column.order;
    this.label = column.label;
    this.isEditable = column.isEditable;
    this.typeElememtPropertyToDisplayId = column.typeElememtPropertyToDisplayId;
    this.typeElementPropertyId = column.typeElementPropertyId;
    this.isDisplayValue = column.isDisplayValue;
  }
};

// node_modules/fcmlib/lib/FCMNew.js
var eContentType;
(function(eContentType2) {
  eContentType2[eContentType2["unknown"] = 0] = "unknown";
  eContentType2[eContentType2["ContentString"] = 1] = "ContentString";
  eContentType2[eContentType2["ContentNumber"] = 2] = "ContentNumber";
  eContentType2[eContentType2["ContentObject"] = 3] = "ContentObject";
  eContentType2[eContentType2["ContentBoolean"] = 4] = "ContentBoolean";
  eContentType2[eContentType2["ContentList"] = 5] = "ContentList";
  eContentType2[eContentType2["ContentPassword"] = 6] = "ContentPassword";
  eContentType2[eContentType2["ContentContent"] = 7] = "ContentContent";
  eContentType2[eContentType2["ContentDateTime"] = 8] = "ContentDateTime";
  eContentType2[eContentType2["ContentEncrypted"] = 9] = "ContentEncrypted";
})(eContentType || (eContentType = {}));

// node_modules/fcmlib/lib/FlowValue.js
var FlowValue = class {
  constructor(field) {
    this.ContentType = eContentType.unknown;
    this.DeveloperName = "";
    this.TypeElementDeveloperName = "";
    this.TypeElementId = "";
    this.TypeElementPropertyDeveloperName = "";
    this.TypeElementPropertyId = "";
    this.ValueElementId = "";
    if (field) {
      this.ContentType = eContentType[field.contentType];
      this.DeveloperName = field.developerName;
      this.TypeElementDeveloperName = field.typeElementDeveloperName;
      this.TypeElementId = field.typeElementId;
      this.TypeElementPropertyDeveloperName = field.typeElementPropertyDeveloperName;
      this.TypeElementPropertyId = field.typeElementPropertyId;
      this.ValueElementId = field.valueElementId;
      switch (this.ContentType) {
        case eContentType.ContentObject:
          this.Value = field.objectData ? new FlowObjectData(field.objectData) : void 0;
          break;
        case eContentType.ContentList:
          this.Value = field.objectData && field.objectData[0] ? new FlowObjectDataArray(field.objectData) : new FlowObjectDataArray([]);
          break;
        default:
          this.Value = field.contentValue;
          break;
      }
    }
  }
  get contentType() {
    return this.ContentType;
  }
  get developerName() {
    return this.DeveloperName;
  }
  get typeElementDeveloperName() {
    return this.TypeElementDeveloperName;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  get typeElementPropertyDeveloperName() {
    return this.TypeElementPropertyDeveloperName;
  }
  get typeElementPropertyId() {
    return this.TypeElementPropertyId;
  }
  get valueElementId() {
    return this.ValueElementId;
  }
  get value() {
    return this.Value;
  }
  set value(value) {
    this.Value = value;
  }
  iFlowField() {
    let contentValue = "";
    let objectData = [];
    switch (this.ContentType) {
      case eContentType.ContentObject:
        const od = this.Value;
        objectData.push(od.iObjectData());
        break;
      case eContentType.ContentList:
        const oda = this.Value;
        objectData = oda.iFlowObjectDataArray();
        break;
      default:
        contentValue = this.Value ? this.Value : "";
        break;
    }
    const output = {
      contentType: eContentType[this.ContentType],
      contentValue,
      developerName: this.DeveloperName,
      objectData,
      typeElementDeveloperName: this.TypeElementDeveloperName,
      typeElementId: this.TypeElementId,
      typeElementPropertyDeveloperName: this.TypeElementPropertyDeveloperName,
      typeElementPropertyId: this.TypeElementPropertyId,
      valueElementId: this.ValueElementId
    };
    return output;
  }
};

// node_modules/fcmlib/lib/FCMCore.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FCMCore = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.attributes = {};
    this.fields = {};
    this.outcomes = {};
    this.triggerOutcome = this.triggerOutcome.bind(this);
    this.getPageComponentDataSource = this.getPageComponentDataSource.bind(this);
    this.loadModel = this.loadModel.bind(this);
    this.getOutcomeById = this.getOutcomeById.bind(this);
    this.triggerOutcome = this.triggerOutcome.bind(this);
    this.getPageComponentDataSource = this.getPageComponentDataSource.bind(this);
    this.loadModel(props);
  }
  /* Generic Fetch From FLOW API 1*/
  callRequest(endpoint, method, data, newEndpoint = false) {
    return __awaiter(this, void 0, void 0, function* () {
      let results;
      const request = {};
      let uri = this.flowBaseUri || window.location.origin;
      if (newEndpoint) {
        uri += "/api/run/2/state/" + this.stateId;
      } else {
        uri += "/api/run/1/state/" + this.stateId;
      }
      if (endpoint && endpoint.length > 0) {
        uri += "/" + endpoint;
      }
      request.method = method;
      request.headers = {
        "Content-Type": "application/json",
        "ManyWhoTenant": this.tenantId
      };
      if (this.authenticationToken) {
        request.headers.Authorization = this.authenticationToken;
      }
      request.credentials = "same-origin";
      if (method === "POST" || method === "PUT") {
        request.body = JSON.stringify(data);
      }
      let response = yield fetch(uri, request);
      if (response.status === 200) {
        results = yield response.json();
        console.log("Fetch Complete");
      } else {
        const errorText = yield response.text();
        console.log("Fetch Failed - " + errorText);
      }
      return results;
    });
  }
  /* Attribute access */
  getAttribute(attributeName, defaultValue) {
    var _a;
    if ((_a = this.attributes) === null || _a === void 0 ? void 0 : _a[attributeName]) {
      return this.attributes[attributeName];
    } else {
      return defaultValue || "";
    }
  }
  getOutcomeById(outcomeId) {
    let oc;
    Object.keys(this.outcomes).forEach((key) => {
      if (this.outcomes[key].id === outcomeId) {
        oc = this.outcomes[key];
      }
    });
    return oc;
  }
  getStateValue() {
    return this.stateValue;
  }
  getOriginalStateValue() {
    var _a;
    switch (this.contentType) {
      case eContentType.ContentObject:
        return this.objectData.items[0];
      case eContentType.ContentList:
        return this.objectData;
      case eContentType.ContentBoolean:
        return ((_a = this.contentValue) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "true";
      case eContentType.ContentNumber:
        let num = parseFloat(this.contentValue);
        if (!isNaN(num)) {
          return num;
        } else {
          return void 0;
        }
      case eContentType.ContentDateTime:
        let dt = new Date(this.contentValue);
        if (!isNaN(dt.getTime())) {
          return dt;
        } else {
          return void 0;
        }
      default:
        return this.contentValue;
    }
  }
  getValue(valueName) {
    return __awaiter(this, void 0, void 0, function* () {
      let value;
      try {
        value = yield this.callRequest("values/name/" + valueName, "GET", {});
        sessionStorage.setItem(value.developerName, JSON.stringify(value));
      } catch (e) {
        console.error(e);
        value = JSON.parse(sessionStorage.getItem(valueName));
      } finally {
        if (value) {
          this.fields[value.developerName] = new FlowValue(value);
        }
        return this.fields[value.developerName];
      }
    });
  }
  setValues(values) {
    return __awaiter(this, void 0, void 0, function* () {
      const updateFields = [];
      if (values.constructor.name === FlowValue.name) {
        updateFields.push(values.iFlowField());
        sessionStorage.setItem(values.developerName, JSON.stringify(values.iFlowField()));
      } else {
        for (const field of values) {
          updateFields.push(field.iFlowField());
          sessionStorage.setItem(field.developerName, JSON.stringify(field.iFlowField()));
        }
      }
      yield this.callRequest("values", "POST", updateFields);
      if (this.hasEvents) {
      }
      return Promise.resolve();
    });
  }
  // this takes a string value and if it is the {{FieldName->property}} notation it will
  // load the base flow value, save it to the Fields list and extapolate the requested property
  inflateValue(input) {
    return __awaiter(this, void 0, void 0, function* () {
      if (input) {
        let value;
        let match;
        const matches = [];
        while (match = RegExp(/{{([^}]*)}}/).exec(input)) {
          const fldElements = match[1].split("->");
          let fld;
          if (!this.fields[fldElements[0]]) {
            fld = yield this.getValue(fldElements[0]);
            this.fields[fldElements[0]] = fld;
          } else {
            fld = this.fields[fldElements[0]];
          }
          if (fld) {
            let od = fld.value;
            if (od) {
              if (fldElements.length > 1) {
                for (let epos = 1; epos < fldElements.length; epos++) {
                  od = od.properties[fldElements[epos]].value;
                }
                value = od;
              } else {
                value = fld.value;
              }
            } else {
              value = fld.value;
            }
            input = input.replace(match[0], value);
          }
        }
      }
      return input;
    });
  }
};

// node_modules/fcmlib/lib/FCMLegacy.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FCMLegacy = class extends FCMCore {
  constructor(props) {
    var _a;
    super(props);
    this.flowBaseUri = ((_a = manywho.settings.global("platform")) === null || _a === void 0 ? void 0 : _a.uri) || window.location.origin;
  }
  //static getDerivedStateFromProps(nextProps: Readonly<any>, prevState: any): void {
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.id !== this.id) {
      this.loadModel(nextProps);
      if (this.childComponent && this.componentDidMount) {
        this.componentDidMount();
      }
    } else {
      let model = manywho.model.getComponent(this.id, this.flowKey);
      if (model) {
        this.loadModel(nextProps);
        if (this.childComponent && this.componentDidMount) {
          this.componentDidMount();
        }
      }
    }
  }
  componentWillUnmount() {
  }
  loadModel(props) {
    var _a;
    this.id = props.id;
    this.flowKey = props.flowKey;
    const model = manywho.model.getComponent(this.id, this.flowKey);
    this.authenticationToken = manywho.state.getAuthenticationToken(this.flowKey);
    this.attributes = model.attributes;
    this.className = model.className;
    this.colSpan = model.colSpan;
    this.column = model.column;
    this.columns = [];
    (_a = model.columns) === null || _a === void 0 ? void 0 : _a.forEach((col) => {
      this.columns.push(new FlowDisplayColumn(col));
    });
    this.columns.sort((a, b) => {
      return a.order - b.order;
    });
    this.componentScriptURL = model.componentScriptURL;
    this.componentStyleSheetURL = model.componentStyleSheetURL;
    this.content = model.content;
    this.contentType = eContentType[model.contentType];
    this.contentValue = model.contentValue;
    this.developerName = model.developerName;
    this.fields = {};
    this.fileDataRequest = model.fileDataRequest;
    this.hasEvents = model.hasEvents;
    this.hasSubmitted = model.hasSubmitted;
    this.height = model.height;
    this.helpInfo = model.helpInfo;
    this.hintValue = model.hintValue;
    this.imageUri = model.imageUri;
    this.isEditable = model.isEditable;
    this.isEnabled = model.isEnabled;
    this.isMultiSelect = model.isMultiSelect;
    this.isRequired = model.isRequired;
    this.isSearchable = model.isSearchable;
    this.isSearchableDisplayColumns = model.isSearchableDisplayColumns;
    this.isValid = model.isValid;
    this.isVisible = model.isVisible;
    this.label = model.label;
    this.maxSize = model.maxSize;
    this.objectData = new FlowObjectDataArray(model.objectData);
    this.objectDataRequest = model.objectDataRequest;
    this.order = model.order;
    this.outcomes = {};
    manywho.model.getOutcomes(this.props.id, this.flowKey).forEach((outcome) => {
      let oc = new FlowOutcome(outcome);
      if (oc.pageObjectBindingId === this.id) {
        this.outcomes[oc.developerName] = oc;
      }
    });
    manywho.model.getOutcomes("", this.flowKey).forEach((outcome) => {
      let oc = new FlowOutcome(outcome);
      if (oc.pageObjectBindingId === this.id) {
        this.outcomes[oc.developerName] = oc;
      }
    });
    this.pageContainerId = model.pageContainerId;
    this.pageSize = model.pageSize || 20;
    this.row = model.row;
    this.rowSpan = model.rowSpan;
    this.selectedItems = model.selectedItems;
    this.size = model.size;
    this.stateId = manywho.utils.extractStateId(this.flowKey);
    this.tags = model.tags;
    this.tenantId = manywho.utils.extractTenantId(this.flowKey);
    this.type = model.type;
    this.validationMessage = model.validationMessage;
    this.validations = model.validations;
    this.width = model.width;
  }
  /*
      onBeforeSend(xhr: XMLHttpRequest, request: any) {
          if(request)
          {
              const oc: string = request.mapElementInvokeRequest.selectedOutcomeId;
              const oct: string = (manywho as any).eventManager.outcomeBeingTriggered;
              if(oc){
                  if(!oct || oct !== oc)
                  {
                      (manywho as any).eventManager.outcomeBeingTriggered = oc;
                  }
              }
              if(!this.currentMapElementId) {
                  this.currentMapElementId = request.currentMapElementId;
              }
              
          }
          else
          {
              (manywho as any).eventManager.outcomeBeingTriggered = undefined;
          }
      }
  
      
  
      async onDone(xhr: any, request: any) {
          //this handles the new subflow concept.
          //the flow could have moved to a sub flow and if so we need to reload all data
          //console.log("fbc onDone start " + new Date().getTime());
          if ((xhr as any).invokeType === 'FORWARD') {
              manywho.model.parseEngineResponse(xhr, this.flowKey);
              let model = manywho.model.getComponent(this.id, this.flowKey);
              if(model) {
                  this.loadModel({id: this.id, flowKey: this.flowKey});
                  this.setStateValue(this.getStateValue());
              }
              if(!this.currentMapElementId || xhr.currentMapElementId === this.currentMapElementId){
                  this.redraw();
              }
          }
      }
  */
  setStateValue(value) {
    this.stateValue = value;
    const flowModel = manywho.model.getComponent(this.id, this.flowKey);
    let newState;
    if (flowModel) {
      switch (flowModel.contentType) {
        case "ContentObject":
          let objectData = null;
          if (value) {
            value.isSelected = true;
            objectData = value.iFlowObjectDataArray();
            objectData = JSON.parse(JSON.stringify(objectData));
          }
          newState = { "objectData": objectData };
          manywho.state.setComponent(this.id, newState, this.flowKey, true);
          break;
        case "ContentList":
          let objectDataArray = null;
          if (value) {
            objectDataArray = value.iFlowObjectDataArray();
            objectDataArray = JSON.parse(JSON.stringify(objectDataArray));
          }
          newState = { "objectData": objectDataArray };
          manywho.state.setComponent(this.id, newState, this.flowKey, true);
          break;
        case "ContentDate":
          newState = { "contentValue": value.toISOString() };
          manywho.state.setComponent(this.id, newState, this.flowKey, true);
          break;
        default:
          newState = { "contentValue": value };
          manywho.state.setComponent(this.id, newState, this.flowKey, true);
          break;
      }
    }
    if (this.hasEvents) {
      manywho.component.handleEvent(this, manywho.model.getComponent(this.id, this.flowKey), this.flowKey, null);
    }
  }
  triggerOutcome(outcomeName) {
    return __awaiter2(this, void 0, void 0, function* () {
      let oc;
      if (this.outcomes[outcomeName]) {
        oc = this.outcomes[outcomeName];
      }
      if (oc) {
        yield manywho.component.onOutcome(oc, null, this.flowKey);
      } else {
        console.log("Could not find outcome " + outcomeName);
      }
      return Promise.resolve();
    });
  }
  requestObjectData(request) {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield manywho.engine.objectDataRequest(this.id, request, this.flowKey);
    });
  }
  getPageComponentDataSource(componentName) {
    let employees = manywho.model.getComponentByName(componentName, this.flowKey);
    let newState = { "objectData": employees.objectData };
    manywho.state.setComponent(employees.id, newState, this.flowKey, true);
    let objDataArray = new FlowObjectDataArray(employees.objectData);
    return objDataArray;
  }
  setPageComponentState(componentName, value) {
    let employees = manywho.model.getComponentByName(componentName, this.flowKey);
    manywho.state.setComponent(employees.id, value.iFlowObjectDataArray(true), this.flowKey, true);
  }
  getUserEmail() {
    let email = "admin@manywho.com";
    let token = manywho.state.getAuthenticationToken(this.flowKey);
    if (token && token.length > 0) {
      try {
        let tokStr = window.atob(token.split(".")[1]);
        let json = JSON.parse(tokStr);
        email = json.email;
      } catch (e) {
        console.log("Error parsing token");
      }
    }
    return email;
  }
};

// src/SFTLegacy.tsx
var React24 = __toESM(require_react());

// src/SearchFilterTable.tsx
var React22 = __toESM(require_react());

// src/CellItem.ts
var CellItem = class {
  constructor(name, value) {
    this.name = name;
    this.originalValue = value;
    this.newValue = value;
  }
};

// src/ColumnFilters.tsx
var React4 = __toESM(require_react());

// src/ColumnCriteria.tsx
var React2 = __toESM(require_react());
var eColumnComparator = /* @__PURE__ */ ((eColumnComparator2) => {
  eColumnComparator2[eColumnComparator2["equalTo"] = 0] = "equalTo";
  eColumnComparator2[eColumnComparator2["notEqualTo"] = 1] = "notEqualTo";
  eColumnComparator2[eColumnComparator2["greaterThan"] = 2] = "greaterThan";
  eColumnComparator2[eColumnComparator2["lessThan"] = 3] = "lessThan";
  eColumnComparator2[eColumnComparator2["between"] = 4] = "between";
  eColumnComparator2[eColumnComparator2["startsWith"] = 5] = "startsWith";
  eColumnComparator2[eColumnComparator2["endsWith"] = 6] = "endsWith";
  eColumnComparator2[eColumnComparator2["contains"] = 7] = "contains";
  eColumnComparator2[eColumnComparator2["notContains"] = 8] = "notContains";
  eColumnComparator2[eColumnComparator2["in"] = 9] = "in";
  eColumnComparator2[eColumnComparator2["notIn"] = 10] = "notIn";
  return eColumnComparator2;
})(eColumnComparator || {});
var SFTColumnCriteria = class _SFTColumnCriteria {
  static getDisplayValue(criteria) {
    let typedCriteria;
    switch (criteria) {
      case 0 /* equalTo */:
        return "Equals";
      case 1 /* notEqualTo */:
        return "Not Equal To";
      case 5 /* startsWith */:
        return "Starts With";
      case 6 /* endsWith */:
        return "Does Not Start With";
      case 7 /* contains */:
        return "Contains";
      case 8 /* notContains */:
        return "Does Not Contain";
      case 9 /* in */:
        return "Is In";
      case 10 /* notIn */:
        return "Is Not In";
      case 2 /* greaterThan */:
        return "Greater Than";
      case 3 /* lessThan */:
        return "Less Than";
      case 4 /* between */:
        return "Between";
    }
  }
  static isOptionApplicable(comparator, fieldType) {
    switch (comparator) {
      case 0 /* equalTo */:
      case 1 /* notEqualTo */:
        return true;
      case 5 /* startsWith */:
      case 6 /* endsWith */:
      case 7 /* contains */:
      case 8 /* notContains */:
      case 9 /* in */:
      case 10 /* notIn */:
        if ([eContentType.ContentString, eContentType.ContentPassword, eContentType.ContentNumber, eContentType.ContentContent].indexOf(fieldType) >= 0) {
          return true;
        } else {
          return false;
        }
      case 3 /* lessThan */:
      case 2 /* greaterThan */:
      case 4 /* between */:
        if ([eContentType.ContentDateTime, eContentType.ContentNumber].indexOf(fieldType) >= 0) {
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  }
  static getOptions(currentValue, className = "", fieldType) {
    const options = [];
    Object.keys(eColumnComparator).filter((key) => !isNaN(Number(eColumnComparator[key]))).forEach((item) => {
      if (_SFTColumnCriteria.isOptionApplicable(eColumnComparator[item], fieldType)) {
        options.push(
          /* @__PURE__ */ React2.createElement(
            "option",
            {
              className,
              value: eColumnComparator[item],
              selected: eColumnComparator[item] === currentValue
            },
            _SFTColumnCriteria.getDisplayValue(eColumnComparator[item])
          )
        );
      }
    });
    return options;
  }
  constructor(comparator, value, value2) {
    this.comparator = comparator;
    switch (comparator) {
      case 9 /* in */:
      case 10 /* notIn */:
        this.value = value;
        this.value2 = value2;
        break;
      default:
        this.value = value;
        this.value2 = value2;
    }
  }
  getForStorage() {
    const result = {};
    result.comparator = this.comparator;
    if (this.value instanceof Map) {
      const vals = [];
      this.value.forEach((val, key) => {
        vals.push(key);
      });
      result.value = JSON.stringify(vals);
    } else {
      result.value = this.value;
      result.value2 = this.value2;
    }
    return JSON.stringify(result);
  }
  getForFSS() {
    const result = {};
    result.comparator = this.comparator;
    if (this.value instanceof Map) {
      const vals = [];
      this.value.forEach((val, key) => {
        vals.push(key);
      });
      result.value = JSON.stringify(vals);
    } else {
      result.value = this.value;
      result.value2 = this.value2;
    }
    return result;
  }
};

// src/ColumnFilter.ts
var SFTColumnFilter = class _SFTColumnFilter {
  constructor(key, parent, sort = 0 /* none */, criteria = []) {
    this.sort = 0 /* none */;
    this.criteria = [];
    this.key = key;
    this.parent = parent;
    this.sort = sort || 0 /* none */;
    criteria.forEach((crit) => {
      if (crit instanceof SFTColumnCriteria === false) {
        crit = JSON.parse(crit);
      }
      if (crit.comparator === 9 /* in */ || crit.comparator === 10 /* notIn */) {
        if (crit.value instanceof Map) {
        } else {
          const vals = JSON.parse(crit.value);
          const vmap = /* @__PURE__ */ new Map();
          vals.forEach((v) => {
            vmap.set(v, v);
          });
          crit.value = vmap;
        }
      }
      this.criteria.push(new SFTColumnCriteria(crit.comparator, crit.value, crit.value2));
    });
    this.notify = this.notify.bind(this);
  }
  clone() {
    const clone = new _SFTColumnFilter(this.key, this.parent, this.sort, this.criteria);
    return clone;
  }
  clearFilters() {
    this.criteria = [];
    this.notify(2 /* filter */);
  }
  notify(event) {
    this.parent.notify(this.key, event);
  }
  sortAscending() {
    if (this.sort !== 1 /* ascending */) {
      this.sort = 1 /* ascending */;
      this.notify(1 /* sort */);
    }
  }
  sortDescending() {
    if (this.sort !== -1 /* descending */) {
      this.sort = -1 /* descending */;
      this.notify(1 /* sort */);
    }
  }
  sortToggle() {
    switch (this.sort) {
      case 0 /* none */:
        this.sort = -1 /* descending */;
        break;
      case -1 /* descending */:
        this.sort = 1 /* ascending */;
        break;
      case 1 /* ascending */:
        this.sort = 0 /* none */;
        break;
      default:
        this.sort = 0 /* none */;
        break;
    }
    this.notify(1 /* sort */);
  }
  sortNone() {
    if (this.sort !== 0 /* none */) {
      this.sort = 0 /* none */;
      this.notify(1 /* sort */);
    }
  }
  getForStorage() {
    const filter = {};
    filter.key = this.key;
    filter.sort = this.sort;
    filter.criteria = [];
    this.criteria.forEach((crit) => {
      filter.criteria.push(crit.getForStorage());
    });
    return JSON.stringify(filter);
  }
  getForFSS() {
    const filter = {};
    filter.developerName = this.key;
    this.criteria.forEach((crit) => {
      let val = crit.getForFSS();
      filter.comparator = crit.comparator.toString();
      filter.value = val.value;
      filter.value2 = val.value2;
    });
    return filter;
  }
};

// src/FilterConfigForm.tsx
var React3 = __toESM(require_react());
var FilterConfigForm = class extends React3.Component {
  constructor(props) {
    super(props);
    this.filter = this.props.filter;
    this.newCriteria = [];
    this.filter.criteria.forEach((criteria) => {
      this.newCriteria.push(criteria);
    });
    this.addCriteria = this.addCriteria.bind(this);
  }
  addCriteria() {
    this.newCriteria.push(new SFTColumnCriteria(0 /* equalTo */, ""));
    this.forceUpdate();
  }
  prepCriteriaValue(criteria) {
    switch (criteria.comparator) {
      case 9 /* in */:
      case 10 /* notIn */:
        criteria.value = /* @__PURE__ */ new Map();
        break;
      default:
        if (typeof criteria.value !== "string") {
          criteria.value = "";
        }
        break;
    }
  }
  render() {
    const rows = [];
    if (this.newCriteria.length === 0) {
      rows.push(
        /* @__PURE__ */ React3.createElement(
          "div",
          {
            className: "sft-fcf-row"
          },
          /* @__PURE__ */ React3.createElement(
            "span",
            {
              className: "sft-fcf-label"
            },
            "No Criteria defined"
          )
        )
      );
    } else {
      this.newCriteria.forEach((criteria) => {
        const options = SFTColumnCriteria.getOptions(criteria.comparator, "sft-fmf-row-criteria-select-option", this.props.contentType);
        let critBox;
        let critBox2;
        switch (criteria.comparator) {
          case 9 /* in */:
          case 10 /* notIn */:
            critBox = this.props.root.getColumnUniques(this.props.developerName, criteria);
            break;
          case 4 /* between */:
            critBox = /* @__PURE__ */ React3.createElement(
              "input",
              {
                type: "text",
                className: "sft-fmf-row-criteria-text",
                defaultValue: criteria.value,
                onChange: (e) => {
                  criteria.value = e.target.value;
                }
              }
            );
            critBox2 = /* @__PURE__ */ React3.createElement(
              "input",
              {
                type: "text",
                className: "sft-fmf-row-criteria-text",
                defaultValue: criteria.value2,
                onChange: (e) => {
                  criteria.value2 = e.target.value;
                }
              }
            );
            break;
          default:
            critBox = /* @__PURE__ */ React3.createElement(
              "input",
              {
                type: "text",
                className: "sft-fmf-row-criteria-text",
                defaultValue: criteria.value,
                onChange: (e) => {
                  criteria.value = e.target.value;
                }
              }
            );
            break;
        }
        rows.push(
          /* @__PURE__ */ React3.createElement(
            "div",
            {
              className: "sft-fmf-row"
            },
            /* @__PURE__ */ React3.createElement(
              "div",
              {
                className: "sft-fmf-row-labels"
              },
              /* @__PURE__ */ React3.createElement(
                "div",
                {
                  className: "sft-fmf-row-caption-criteria"
                },
                "Comparator"
              ),
              /* @__PURE__ */ React3.createElement(
                "div",
                {
                  className: "sft-fmf-row-caption"
                },
                "Value"
              )
            ),
            /* @__PURE__ */ React3.createElement(
              "div",
              {
                className: "sft-fmf-row-values"
              },
              /* @__PURE__ */ React3.createElement(
                "div",
                {
                  className: "sft-fmf-row-criteria"
                },
                /* @__PURE__ */ React3.createElement(
                  "select",
                  {
                    className: "sft-fmf-row-criteria-select",
                    onChange: (e) => {
                      criteria.comparator = parseInt(e.target.options[e.target.selectedIndex].value);
                      this.prepCriteriaValue(criteria);
                      this.forceUpdate();
                    }
                  },
                  options
                )
              ),
              /* @__PURE__ */ React3.createElement(
                "div",
                {
                  className: "sft-fmf-row-value"
                },
                critBox,
                critBox2
              ),
              /* @__PURE__ */ React3.createElement(
                "button",
                {
                  className: "sft-ribbon-search-button-wrapper",
                  title: "Remove criteria",
                  onClick: (e) => {
                    this.newCriteria = this.newCriteria.filter(
                      (item) => item !== criteria
                    );
                    this.forceUpdate();
                  }
                },
                /* @__PURE__ */ React3.createElement(
                  "span",
                  {
                    className: "sft-ribbon-search-button-icon glyphicon glyphicon-remove-sign"
                  }
                )
              )
            )
          )
        );
      });
    }
    rows.push(
      /* @__PURE__ */ React3.createElement(
        "div",
        {
          className: "sft-fcf-buttons"
        },
        /* @__PURE__ */ React3.createElement(
          "span",
          {
            className: "sft-fcf-button glyphicon glyphicon-plus-sign",
            title: "Add criteria",
            onClick: this.addCriteria
          }
        )
      )
    );
    return /* @__PURE__ */ React3.createElement(
      "div",
      {
        className: "modal-dialog-content",
        style: { width: "910px", display: "flex", flexDirection: "column", margin: "auto", padding: "2rem" }
      },
      rows
    );
  }
};

// node_modules/fcmkit/lib/ModalDialog/FCMModalButton.js
var FCMModalButton = class {
  constructor(label, handler) {
    this.label = label;
    this.handler = handler;
  }
};

// src/ColumnFilters.tsx
var SFTColumnFilters2 = class _SFTColumnFilters {
  constructor(parent) {
    this.items = /* @__PURE__ */ new Map();
    this.quickChecks = /* @__PURE__ */ new Map();
    this.suppressNotify = false;
    this.parent = parent;
    this.notify = this.notify.bind(this);
    this.getSortIcon = this.getSortIcon.bind(this);
    this.getFilterIcon = this.getFilterIcon.bind(this);
    this.getQuickCheck = this.getQuickCheck.bind(this);
    this.sortClicked = this.sortClicked.bind(this);
    this.filterClicked = this.filterClicked.bind(this);
    this.quickCheckClicked = this.quickCheckClicked.bind(this);
    this.saveFilter = this.saveFilter.bind(this);
    this.cancelFilter = this.cancelFilter.bind(this);
    this.matchesCriteria = this.matchesCriteria.bind(this);
  }
  clone() {
    const clone = new _SFTColumnFilters(this.parent);
    clone.globalCriteria = this.globalCriteria;
    this.items.forEach((item, key) => {
      clone.items.set(key, item.clone());
    });
    return clone;
  }
  // stores / deletes a ref to the child dialog component
  setDialog(element) {
    this.dialog = element;
  }
  // this is called when individual filters change
  notify(key, event) {
    if (this.suppressNotify === false) {
      this.parent.filtersChanged(key, event);
    }
  }
  get(key) {
    if (this.items.has(key)) {
      return this.items.get(key);
    } else {
      return void 0;
    }
  }
  has(key) {
    if (this.items.has(key)) {
      return true;
    } else {
      return false;
    }
  }
  isFiltered() {
    let filtered = false;
    this.items.forEach((item) => {
      if (item.criteria.length > 0) {
        filtered = true;
      }
    });
    return filtered;
  }
  isFilteredOn(columnName) {
    let filtered = false;
    if (this.items.has(columnName)) {
      if (this.items.get(columnName).criteria.length > 0) {
        filtered = true;
      }
    }
    return filtered;
  }
  clearAll() {
    this.suppressNotify = true;
    this.items.forEach((item) => {
      item.clearFilters();
    });
    this.suppressNotify = false;
    this.notify("", 2 /* filter */);
  }
  sortClicked(key) {
    if (!this.items.has(key)) {
      this.items.set(key, new SFTColumnFilter(key, this));
    }
    this.items.forEach((item) => {
      if (item.key !== key) {
        item.sortNone();
      }
    });
    this.items.get(key).sortToggle();
  }
  // the filter button was pressed
  filterClicked(key) {
    const root = this.parent;
    if (!this.items.has(key)) {
      this.items.set(key, new SFTColumnFilter(key, this));
    }
    const col = this.parent.colMap.get(key);
    this.parent.messageBox.showDialog(
      null,
      "Filter " + col.label,
      /* @__PURE__ */ React4.createElement(
        FilterConfigForm,
        {
          root,
          parent: this,
          key,
          developerName: key,
          filter: this.items.get(key),
          contentType: col.contentType,
          ref: (element) => {
            this.setDialog(element);
          }
        }
      ),
      [new FCMModalButton("Apply", this.saveFilter), new FCMModalButton("Cancel", this.cancelFilter)]
    );
  }
  filterClear(key) {
    this.items.get(key).clearFilters();
  }
  saveFilter() {
    const key = this.dialog.filter.key;
    this.dialog.filter.criteria = this.dialog.newCriteria;
    this.items.set(key, this.dialog.filter);
    this.dialog = void 0;
    this.parent.messageBox.hideDialog();
    this.notify(key, 2 /* filter */);
  }
  cancelFilter() {
    const key = this.dialog.filter.key;
    this.dialog = void 0;
    this.parent.messageBox.hideDialog();
    this.notify(key, 2 /* filter */);
  }
  getSortIcon(key) {
    if (this.items.has(key)) {
      switch (this.items.get(key).sort) {
        case 0 /* none */:
          return /* @__PURE__ */ React4.createElement(
            "div",
            {
              title: "Not sorted - click to toggle",
              style: { display: "flex", flexDirection: "column" }
            },
            /* @__PURE__ */ React4.createElement(
              "span",
              {
                className: "sft-column-header-flag  glyphicon glyphicon-triangle-top"
              }
            ),
            /* @__PURE__ */ React4.createElement(
              "span",
              {
                className: "sft-column-header-flag  glyphicon glyphicon-triangle-bottom"
              }
            )
          );
        case 1 /* ascending */:
          return /* @__PURE__ */ React4.createElement(
            "div",
            {
              onClick: (e) => {
                this.sortClicked(key);
              },
              title: "Ascending - click to toggle",
              style: { display: "flex", flexDirection: "column" }
            },
            /* @__PURE__ */ React4.createElement(
              "span",
              {
                className: "sft-column-header-flag sft-column-header-flag-hot glyphicon glyphicon-triangle-top"
              }
            ),
            /* @__PURE__ */ React4.createElement(
              "span",
              {
                className: "sft-column-header-flag   glyphicon glyphicon-triangle-bottom"
              }
            )
          );
        case -1 /* descending */:
          return /* @__PURE__ */ React4.createElement(
            "div",
            {
              onClick: (e) => {
                this.sortClicked(key);
              },
              title: "Descending - click to toggle",
              style: { display: "flex", flexDirection: "column" }
            },
            /* @__PURE__ */ React4.createElement(
              "span",
              {
                className: "sft-column-header-flag  glyphicon glyphicon-triangle-top"
              }
            ),
            /* @__PURE__ */ React4.createElement(
              "span",
              {
                className: "sft-column-header-flag sft-column-header-flag-hot glyphicon glyphicon-triangle-bottom"
              }
            )
          );
      }
    } else {
      return /* @__PURE__ */ React4.createElement(
        "div",
        {
          onClick: (e) => {
            this.sortClicked(key);
          },
          title: "Not sorted - click to toggle",
          style: { display: "flex", flexDirection: "column" }
        },
        /* @__PURE__ */ React4.createElement(
          "span",
          {
            className: "sft-column-header-flag  glyphicon glyphicon-triangle-top"
          }
        ),
        /* @__PURE__ */ React4.createElement(
          "span",
          {
            className: "sft-column-header-flag  glyphicon glyphicon-triangle-bottom"
          }
        )
      );
    }
  }
  getFilterIcon(key) {
    var _a;
    if (this.items.has(key) && ((_a = this.items.get(key).criteria) == null ? void 0 : _a.length) > 0) {
      return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(
        "span",
        {
          className: "sft-column-header-button sft-column-header-button-hot glyphicon glyphicon-search",
          onClick: (e) => {
            this.filterClicked(key);
          },
          title: "Change filter"
        }
      ), /* @__PURE__ */ React4.createElement(
        "span",
        {
          className: "sft-column-header-button sft-column-header-button-hot glyphicon glyphicon-remove",
          onClick: (e) => {
            this.filterClear(key);
          },
          title: "Clear filter"
        }
      ));
    } else {
      return /* @__PURE__ */ React4.createElement(
        "span",
        {
          className: "sft-column-header-button glyphicon glyphicon-search",
          onClick: (e) => {
            this.filterClicked(key);
          }
        }
      );
    }
  }
  getQuickCheck(columnName) {
    var _a, _b;
    if (this.parent.component.getAttribute("QuickCheck", "false") === "true" && ((_a = this.parent.colMap.get(columnName)) == null ? void 0 : _a.contentType) === eContentType.ContentBoolean) {
      const crit = (_b = this.items.get(columnName)) == null ? void 0 : _b.criteria[0];
      return /* @__PURE__ */ React4.createElement(
        "input",
        {
          className: "sft-checkbox sft-quick-check",
          type: "checkbox",
          onChange: (e) => {
            this.quickCheckClicked(columnName, e);
          },
          ref: (element) => {
            this.quickChecks.set(columnName, element);
          },
          checked: (crit == null ? void 0 : crit.value) ? crit.value : false
        }
      );
    } else {
      return void 0;
    }
  }
  quickCheckClicked(key, e) {
    console.log("quick " + key);
    if (e.currentTarget.checked === true) {
      this.items.set(key, new SFTColumnFilter(key, this, 0 /* none */, [new SFTColumnCriteria(0 /* equalTo */, true)]));
    } else {
      this.items.get(key).clearFilters();
    }
    this.notify(key, 2 /* filter */);
  }
  // this will filter the passed source map based on the current filters and return a new map of matches.
  filter(source) {
    const matches = /* @__PURE__ */ new Map();
    source.forEach((item, key) => {
      if (this.matchesCriteria(item)) {
        matches.set(key, void 0);
      }
    });
    return matches;
  }
  matchesCriteria(value) {
    var _a;
    const objData = value.objectData;
    let matches = true;
    let globalMatches;
    if (this.globalCriteria && this.globalCriteria.length > 0) {
      globalMatches = false;
      const comparator = this.globalCriteria.toLowerCase();
      value.columns.forEach((col) => {
        var _a2;
        const val = (_a2 = "" + objData.properties[col.name].value) == null ? void 0 : _a2.toLowerCase();
        if (val.indexOf(comparator) >= 0) {
          globalMatches = true;
        }
      });
    }
    this.items.forEach((item) => {
      item.criteria.forEach((criteria) => {
        var _a2, _b;
        let val;
        let crit;
        let crit2;
        switch ((_a2 = objData.properties[item.key]) == null ? void 0 : _a2.contentType) {
          case eContentType.ContentString:
            val = (_b = objData.properties[item.key].value) == null ? void 0 : _b.toLowerCase();
            if (criteria.value instanceof Map) {
              crit = criteria.value;
            } else {
              crit = criteria.value.toLowerCase();
            }
            break;
          case eContentType.ContentNumber:
            val = objData.properties[item.key].value;
            crit = parseInt(criteria.value);
            crit2 = parseInt(criteria.value2);
            break;
          case eContentType.ContentBoolean:
            val = objData.properties[item.key].value;
            crit = criteria.value;
            break;
          case eContentType.ContentDateTime:
            val = new Date(objData.properties[item.key].value);
            if (isNaN(val)) {
              val = 0;
            } else {
              val = val.getTime();
            }
            crit = new Date(criteria.value);
            if (isNaN(crit)) {
              crit = 0;
            } else {
              crit = crit.getTime();
            }
            crit2 = new Date(criteria.value2);
            if (isNaN(crit2)) {
              crit2 = 0;
            } else {
              crit2 = crit2.getTime();
            }
            break;
          default:
            val = "";
            crit = "";
        }
        let crits;
        let matchArray;
        switch (criteria.comparator) {
          case 0 /* equalTo */:
            if (val !== crit) {
              matches = false;
            }
            break;
          case 1 /* notEqualTo */:
            if (val === crit) {
              matches = false;
            }
            break;
          case 7 /* contains */:
            crits = crit.split(",");
            matchArray = [];
            crits.forEach((crit3) => {
              if (val.indexOf(crit3.trim()) < 0) {
                matchArray.push(false);
              } else {
                matchArray.push(true);
              }
            });
            matches = matchArray.indexOf(true) >= 0;
            break;
          case 5 /* startsWith */:
            if (!val.startsWith(crit)) {
              matches = false;
            }
            break;
          case 6 /* endsWith */:
            if (!val.endsWith(crit)) {
              matches = false;
            }
            break;
          case 8 /* notContains */:
            crits = crit.split(",");
            matchArray = [];
            crits.forEach((crit3) => {
              if (val.indexOf(crit3.trim()) >= 0) {
                matchArray.push(true);
              }
            });
            matches = matchArray.indexOf(true) < 0;
            break;
          case 9 /* in */:
            if (!crit.has(objData.properties[item.key].value)) {
              matches = false;
            }
            break;
          case 10 /* notIn */:
            if (crit.has(objData.properties[item.key].value)) {
              matches = false;
            }
            break;
          case 3 /* lessThan */:
            if (crit <= val) {
              matches = false;
            }
            break;
          case 2 /* greaterThan */:
            if (crit >= val) {
              matches = false;
            }
            break;
          case 4 /* between */:
            if (val < crit || val > crit2) {
              matches = false;
            }
            break;
          default:
            matches = false;
            break;
        }
      });
    });
    if (((_a = this.globalCriteria) == null ? void 0 : _a.length) > 0) {
      if (globalMatches === true && matches === true) {
        return true;
      } else {
        return false;
      }
    } else {
      return matches;
    }
  }
  getSortColumn() {
    let sortColumn;
    this.items.forEach((col) => {
      if (col.sort !== 0 /* none */) {
        sortColumn = col;
      }
    });
    return sortColumn;
  }
  // this will sort the passed map based on the current filter's sorts and return a new map
  sort(items, source) {
    const candidates = new Map(Array.from(source).filter((item) => {
      if (items.has(item[0])) {
        return true;
      }
    }));
    const sortColumn = this.getSortColumn();
    if (sortColumn) {
      let sorted;
      let sortPropertyName = sortColumn.key;
      let colRule = this.parent.columnRules.get(sortColumn.key);
      if (colRule) {
        if (["url"].indexOf(colRule.mode) >= 0) {
          if (colRule.label && colRule.label.startsWith("{{") && colRule.label.endsWith("}}")) {
            sortPropertyName = colRule.label.replaceAll("{{", "").replaceAll("}}", "");
          }
        }
      }
      const colDef = this.parent.colMap.get(sortPropertyName);
      sorted = Array.from(candidates);
      if (colDef) {
        if (sortColumn.sort !== 0 /* none */) {
          switch (colDef == null ? void 0 : colDef.contentType) {
            case eContentType.ContentDateTime:
              sorted.sort((a, b) => {
                const d1 = new Date(a[1].objectData.properties[sortPropertyName].value);
                const d2 = new Date(b[1].objectData.properties[sortPropertyName].value);
                if (d1 < d2) {
                  return -1;
                }
                if (d1 > d2) {
                  return 1;
                }
                return 0;
              });
              break;
            default:
              const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
              sorted.sort(
                (a, b) => {
                  const v1 = a[1].objectData.properties[sortPropertyName].value ? a[1].objectData.properties[sortPropertyName].value : 0;
                  const v2 = b[1].objectData.properties[sortPropertyName].value ? b[1].objectData.properties[sortPropertyName].value : 0;
                  return collator.compare(v1, v2);
                }
              );
              break;
          }
          if (sortColumn.sort === -1 /* descending */) {
            sorted = sorted.reverse();
          }
        }
        const results = new Map(sorted);
        results.forEach((item, key) => {
          results.set(key, void 0);
        });
        return results;
      } else {
        return items;
      }
    } else {
      return items;
    }
  }
  getForStorage() {
    const filters = [];
    this.items.forEach((item) => {
      filters.push(item.getForStorage());
    });
    return JSON.stringify(filters);
  }
  loadFromStorage(filters) {
    this.items = /* @__PURE__ */ new Map();
    const src = JSON.parse(filters);
    if (src) {
      src.forEach((filter) => {
        filter = JSON.parse(filter);
        if (filter.key) {
          this.items.set(filter.key, new SFTColumnFilter(filter.key, this, filter.sort, filter.criteria));
        }
      });
    }
  }
  getForFSS() {
    let filters = {};
    let sort;
    if (this.getSortColumn()) {
      sort = {
        developerName: this.getSortColumn().key,
        direction: this.getSortColumn().sortAscending ? "ASC" : "DESC"
      };
      filters.sort = sort;
    }
    if (this.items.size > 0 || this.globalCriteria) {
      filters.filters = [];
      if (this.globalCriteria) {
        filters.filters.push(
          {
            developerName: "stringSearch",
            comparator: "CONTAINS",
            value: this.globalCriteria
          }
        );
      }
      this.items.forEach((item) => {
        filters.filters.push(item.getForFSS());
      });
    }
    return JSON.stringify(filters);
  }
};

// src/ColumnPickerForm.tsx
var React5 = __toESM(require_react());
var ColumnPickerForm = class extends React5.Component {
  constructor(props) {
    super(props);
    this.selectedColumns = [];
    this.toggleSelection = this.toggleSelection.bind(this);
    const root = this.props.root;
    root.userColumns.forEach((columnName) => {
      this.selectedColumns.push(columnName);
    });
  }
  toggleSelection(key, e) {
    if (e.target.checked) {
      if (this.selectedColumns.indexOf(key) < 0) {
        this.selectedColumns.push(key);
      }
    } else {
      this.selectedColumns.splice(this.selectedColumns.indexOf(key), 1);
    }
    this.forceUpdate();
  }
  render() {
    const root = this.props.root;
    const cols = [];
    let rows = [];
    let colArray = Array.from(root.colMap.values());
    colArray.sort((a, b) => {
      if (a.label > b.label) {
        return 1;
      }
      if (a.label < b.label) {
        return -1;
      }
      return 0;
    });
    colArray.forEach((column) => {
      if (rows.length > 11) {
        cols.push(
          /* @__PURE__ */ React5.createElement(
            "div",
            {
              className: "sft-column-picker-column"
            },
            rows
          )
        );
        rows = [];
      }
      rows.push(
        /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: "sft-column-picker-row"
          },
          /* @__PURE__ */ React5.createElement(
            "div",
            {
              className: "checkbox-checkbox-wrapper"
            },
            /* @__PURE__ */ React5.createElement(
              "input",
              {
                id: column.developerName,
                type: "checkbox",
                className: "sft-checkbox",
                checked: this.selectedColumns.indexOf(column.developerName) >= 0,
                onChange: (e) => {
                  this.toggleSelection(column.developerName, e);
                }
              }
            )
          ),
          /* @__PURE__ */ React5.createElement(
            "div",
            {
              className: "checkbox-label-wrapper"
            },
            /* @__PURE__ */ React5.createElement(
              "label",
              {
                className: "checkbox-row-label",
                htmlFor: column.developerName
              },
              column.label
            )
          )
        )
      );
    });
    if (rows.length > 0) {
      cols.push(
        /* @__PURE__ */ React5.createElement("div", null, rows)
      );
    }
    return /* @__PURE__ */ React5.createElement(
      "div",
      {
        className: "modal-dialog-content",
        style: { maxHeight: "80vh", maxWidth: "80vw", display: "flex", flexDirection: "column", margin: "auto", padding: "0rem" }
      },
      /* @__PURE__ */ React5.createElement(
        "div",
        {
          className: "sft-scroller",
          style: { maxHeight: "80vh", maxWidth: "80vw" }
        },
        /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: "sft-column-picker-body"
          },
          cols
        )
      )
    );
  }
};

// src/ColumnRule.tsx
var React7 = __toESM(require_react());

// src/CommonFunctions.tsx
var React6 = __toESM(require_react());
var SFTCommonFunctions = class _SFTCommonFunctions {
  static async getFlowValue() {
  }
  static async assessGlobalOutcomeRule(outcome, root) {
    var _a, _b, _c, _d;
    let result = true;
    if (((_a = outcome.attributes["RequiresSelected"]) == null ? void 0 : _a.value) === "true") {
      if (root.component.isMultiSelect === true) {
        if (root.selectedRowMap.size < 1) {
          result = false;
        }
      } else {
        if (!root.selectedRow || root.selectedRow.length < 1) {
          result = false;
        }
      }
    }
    if (((_b = outcome.attributes["RequiresRows"]) == null ? void 0 : _b.value) === "true" && root.rowMap.size < 1) {
      result = false;
    }
    if (outcome.attributes.rule && outcome.attributes.rule.value.length > 0) {
      try {
        const rule = JSON.parse(outcome.attributes.rule.value);
        let contentType;
        let match;
        let fld = rule.field;
        let fld2 = rule.value;
        let value = fld;
        let compareTo = fld2;
        while (match = RegExp(/{{([^}]*)}}/).exec(fld)) {
          switch (match[1]) {
            case "TENANT_ID":
              contentType = eContentType.ContentString;
              value = "MyTenentId";
              break;
            default:
              const fldElements = match[1].split("->");
              let val;
              if (root.component.fields[fldElements[0]]) {
                val = root.component.fields[fldElements[0]];
              } else {
                val = await root.component.getValue(fldElements[0]);
              }
              if (val) {
                let od = val.value;
                if (od) {
                  if (fldElements.length > 1) {
                    for (let epos = 1; epos < fldElements.length; epos++) {
                      contentType = (_c = od.properties[fldElements[epos]]) == null ? void 0 : _c.contentType;
                      od = od.properties[fldElements[epos]].value;
                    }
                    value = od;
                  } else {
                    value = val.value;
                    contentType = val.contentType;
                  }
                } else {
                  value = val.value;
                  contentType = val.contentType;
                }
              }
              break;
          }
          fld = fld.replace(match[0], value);
        }
        while (match = RegExp(/{{([^}]*)}}/).exec(fld2)) {
          switch (match[1]) {
            case "TENANT_ID":
              contentType = eContentType.ContentString;
              value = "MyTenentId";
              break;
            default:
              const fldElements = match[1].split("->");
              let val;
              if (root.component.fields[fldElements[0]]) {
                val = root.component.fields[fldElements[0]];
              } else {
                val = await root.component.getValue(fldElements[0]);
              }
              if (val) {
                let od = val.value;
                if (od) {
                  if (fldElements.length > 1) {
                    for (let epos = 1; epos < fldElements.length; epos++) {
                      contentType = (_d = od.properties[fldElements[epos]]) == null ? void 0 : _d.contentType;
                      od = od.properties[fldElements[epos]].value;
                    }
                    compareTo = od;
                  } else {
                    compareTo = val.value;
                    contentType = val.contentType;
                  }
                } else {
                  compareTo = val.value;
                  contentType = val.contentType;
                }
              }
              break;
          }
          fld2 = fld2.replace(match[0], value);
        }
        result = result && _SFTCommonFunctions.assessRule(value, rule.comparator, compareTo, contentType);
      } catch (e) {
        console.log("The rule on top level outcome " + outcome.developerName + " is invalid");
      }
    }
    return result;
  }
  static assessRowOutcomeRule(outcome, row, root) {
    var _a, _b;
    let result = true;
    if (!outcome) {
      return false;
    }
    if (outcome.attributes.rule && outcome.attributes.rule.value.length > 0) {
      try {
        const rule = JSON.parse(outcome.attributes.rule.value);
        let contentType;
        let match;
        let fld = rule.field;
        let fld2 = rule.value;
        let value = fld;
        let compareTo = fld2;
        while (match = RegExp(/{{([^}]*)}}/).exec(fld)) {
          switch (match[1]) {
            case "TENANT_ID":
              contentType = eContentType.ContentString;
              value = "MyTenentId";
              break;
            default:
              const fldElements = match[1].split("->");
              let val;
              val = root.component.fields[fldElements[0]];
              if (val) {
                let od = val.value;
                if (od) {
                  if (fldElements.length > 1) {
                    for (let epos = 1; epos < fldElements.length; epos++) {
                      contentType = (_a = od.properties[fldElements[epos]]) == null ? void 0 : _a.contentType;
                      od = od.properties[fldElements[epos]].value;
                    }
                    value = od;
                  } else {
                    value = val.value;
                    contentType = val.contentType;
                  }
                } else {
                  value = val.value;
                  contentType = val.contentType;
                }
              }
              break;
          }
          fld = fld.replace(match[0], value);
        }
        while (match = RegExp(/{{([^}]*)}}/).exec(fld2)) {
          switch (match[1]) {
            case "TENANT_ID":
              contentType = eContentType.ContentString;
              value = "MyTenentId";
              break;
            default:
              const fldElements = match[1].split("->");
              let val;
              val = root.component.fields[fldElements[0]];
              if (val) {
                let od = val.value;
                if (od) {
                  if (fldElements.length > 1) {
                    for (let epos = 1; epos < fldElements.length; epos++) {
                      contentType = (_b = od.properties[fldElements[epos]]) == null ? void 0 : _b.contentType;
                      od = od.properties[fldElements[epos]].value;
                    }
                    compareTo = od;
                  } else {
                    compareTo = val.value;
                    contentType = val.contentType;
                  }
                } else {
                  compareTo = val.value;
                  contentType = val.contentType;
                }
              }
              break;
          }
          fld2 = fld2.replace(match[0], value);
        }
        if (row.properties[fld]) {
          const property = row.properties[fld];
          result = _SFTCommonFunctions.assessRule(property.value, rule.comparator, compareTo, property.contentType);
        } else {
          result = _SFTCommonFunctions.assessRule(value, rule.comparator, compareTo, contentType);
        }
      } catch (e) {
        console.log("The rule on row level outcome " + outcome.developerName + " is invalid");
      }
    }
    return result;
  }
  static assessRule(value, comparator, compareTo, fieldType) {
    let comparee;
    let comparer;
    let result = true;
    switch (fieldType) {
      case eContentType.ContentNumber:
        comparee = parseInt(compareTo);
        comparer = value;
        break;
      case eContentType.ContentDateTime:
        comparee = new Date(compareTo);
        comparer = value;
        break;
      case eContentType.ContentBoolean:
        comparee = ("" + compareTo).toLowerCase() === "true";
        comparer = value;
        break;
      case eContentType.ContentString:
      default:
        comparee = compareTo.toLowerCase().split(",");
        if (comparee.length > 0) {
          for (let pos = 0; pos < comparee.length; pos++) {
            comparee[pos] = comparee[pos].trim();
          }
        }
        if (["in", "not in"].indexOf(comparator.toLowerCase()) < 0) {
          comparee = comparee[0];
        }
        comparer = value == null ? void 0 : value.toLowerCase();
        break;
    }
    switch (comparator.toLowerCase()) {
      case "equals":
        result = comparer === comparee;
        break;
      case "not equals":
        result = comparer !== comparee;
        break;
      case "contains":
        result = comparer.indexOf(comparee) >= 0;
        break;
      case "not contains":
        result = comparer.indexOf(comparee) < 0;
        break;
      case "starts with":
        result = ("" + comparer).startsWith(comparee);
        break;
      case "ends with":
        result = ("" + comparer).endsWith(comparee);
        break;
      case "in":
        result = comparee.indexOf(comparer) >= 0;
        break;
      case "not in":
        result = comparee.indexOf(comparer) < 0;
        break;
      case "lt":
        result = parseInt("" + comparer) < parseInt("" + comparee);
        break;
      case "lte":
        result = parseInt("" + comparer) <= parseInt("" + comparee);
        break;
      case "gt":
        result = parseInt("" + comparer) > parseInt("" + comparee);
        break;
      case "gte":
        result = parseInt("" + comparer) >= parseInt("" + comparee);
        break;
    }
    return result;
  }
  // this will make an outcome button (top or row) based on the outcome name, the suffix & icon
  // the values, if {{}} ere prepopulated in preLoad
  static makeOutcomeButton(comp, outcome, suffix, objectData, dissabled) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    let icon3;
    let show = false;
    if (((_c = (_b = (_a = outcome.attributes) == null ? void 0 : _a.iconValue) == null ? void 0 : _b.value) == null ? void 0 : _c.length) > 0) {
      let flds;
      let iconName;
      let iconValue = (_e = (_d = outcome.attributes) == null ? void 0 : _d.iconValue) == null ? void 0 : _e.value;
      if (suffix && suffix.length > 0) {
        let path = iconValue.substring(0, iconValue.lastIndexOf("."));
        let ext = iconValue.substring(iconValue.lastIndexOf("."));
        iconName = path + "_" + suffix.toLowerCase() + ext;
      } else {
        iconName = iconValue;
      }
      let imgClass = "sft-ribbon-search-button-image";
      if (dissabled) {
        imgClass += " sft-ribbon-search-button-image-grey";
      }
      icon3 = /* @__PURE__ */ React6.createElement(
        "img",
        {
          className: imgClass,
          src: iconName,
          onError: (e) => {
            e.currentTarget.src = iconValue;
          },
          title: outcome.label || outcome.developerName
        }
      );
      show = true;
    } else {
      if (((_h = (_g = (_f = outcome.attributes) == null ? void 0 : _f.icon) == null ? void 0 : _g.value) == null ? void 0 : _h.length) > 0 && ((_j = (_i = outcome.attributes) == null ? void 0 : _i.icon) == null ? void 0 : _j.value) !== "null") {
        let iconClass = " sft-ribbon-search-button-icon";
        if (dissabled) {
          iconClass += "sft-ribbon-search-button-image-grey";
        }
        icon3 = /* @__PURE__ */ React6.createElement(
          "span",
          {
            key: outcome.developerName,
            className: "glyphicon glyphicon-" + (((_k = outcome.attributes["icon"]) == null ? void 0 : _k.value) || "plus") + " " + iconClass,
            title: outcome.label || outcome.developerName
          }
        );
        show = true;
      }
    }
    let button;
    if (show === true) {
      button = /* @__PURE__ */ React6.createElement(
        "div",
        {
          className: "sft-ribbon-search-button-wrapper " + ((_m = (_l = outcome.attributes) == null ? void 0 : _l.classes) == null ? void 0 : _m.value),
          onClick: (e) => {
            if (!dissabled) {
              e.stopPropagation();
              comp.doOutcome(outcome.developerName, objectData);
            }
          }
        },
        icon3,
        !((_n = outcome.attributes) == null ? void 0 : _n.display) || ((_o = outcome.attributes.display) == null ? void 0 : _o.value.indexOf("text")) >= 0 ? /* @__PURE__ */ React6.createElement(
          "span",
          {
            className: "sft-ribbon-search-button-label"
          },
          outcome.label
        ) : null
      );
    }
    return button;
  }
};

// src/ColumnRule.tsx
var ColumnRules = class {
  static async parse(ruleStr, parent) {
    let match;
    while (match = RegExp(/^{{([^}]*)}}/).exec(ruleStr)) {
      const fldElements = match[1].split("->");
      let val = await parent.component.getValue(fldElements[0]);
      ruleStr = ruleStr.replace(match[0], val.value);
    }
    const rules = /* @__PURE__ */ new Map();
    if (ruleStr && ruleStr.length > 0) {
      let rObj;
      try {
        rObj = JSON.parse(ruleStr);
        Object.keys(rObj).forEach((key) => {
          rules.set(key, ColumnRule.parse(key, rObj[key], parent));
        });
      } catch (e) {
        console.log("Column rules attribute badly formatted");
      }
    }
    return rules;
  }
};
var ColumnRule = class _ColumnRule {
  constructor() {
    this.timeZone = true;
  }
  static parse(key, rule, parent) {
    var _a;
    const colRule = new _ColumnRule();
    colRule.columnName = key;
    colRule.mode = (_a = rule.mode) == null ? void 0 : _a.toLowerCase();
    colRule.parent = parent;
    colRule.whiteSpace = rule.whitespace || "";
    colRule.cssClass = rule.classes || "";
    colRule.condition = rule.condition;
    colRule.cellClass = rule.cellClass;
    colRule.rowClass = rule.rowClass;
    switch (colRule.mode) {
      case "url":
        colRule.target = rule.target || "_blank";
        colRule.url = rule.url || "{{VALUE}}";
        colRule.label = rule.label || void 0;
        break;
      case "dateformat":
        colRule.dateFormat = rule.dateFormat;
        colRule.timeZone = !(("" + rule.timeZone).toLowerCase() === "false");
        break;
      case "class":
        colRule.componentClass = rule.componentClass || rule.className;
      case "style":
        break;
      case "outcome":
        colRule.outcomeName = rule.outcomeName;
        break;
      case "lookup":
        colRule.lookupTable = /* @__PURE__ */ new Map();
        if (rule.options) {
          Object.keys(rule.options).forEach((key2) => {
            colRule.lookupTable.set(key2, rule.options[key2]);
          });
        }
        break;
      case "format":
        colRule.format = rule.format;
        break;
      case "currency":
        colRule.currency = rule.currency;
        break;
      case "icon":
        colRule.icon = rule.icon;
        colRule.iconClass = rule.iconClass;
        break;
      default:
        break;
    }
    return colRule;
  }
  getTextValue(property) {
    let result = "";
    const style = {};
    switch (property.contentType) {
      case eContentType.ContentBoolean:
        if (property.value === true) {
          result = "True";
        } else {
          result = "False";
        }
        break;
      case eContentType.ContentNumber:
        result = property.value.toString();
        break;
      default:
        result = property.value;
        break;
    }
    return result;
  }
  generateColumnContent(value, row, sft) {
    const style = {};
    let classes = "sft-table-cell-text";
    if (this.whiteSpace) {
      style.whiteSpace = this.whiteSpace;
    }
    if (this.cssClass) {
      classes += " " + this.cssClass;
    }
    let applyRule = true;
    if (this.condition) {
      switch (this.condition.comparator.toLowerCase()) {
        case "equals":
          applyRule = value.value === this.condition.value;
          break;
        case "not equals":
          applyRule = value.value !== this.condition.value;
          break;
        case "gt":
          applyRule = value.value > this.condition.value;
          break;
      }
    }
    let label;
    let match;
    let content;
    let rowClass = this.rowClass || "";
    let cellClass = this.cellClass || "";
    const matches = [];
    if (applyRule === true || this.mode === "icon") {
      rowClass = this.rowClass;
      switch (this.mode) {
        case "outcome":
          label = this.label || value.value;
          let show = SFTCommonFunctions.assessRowOutcomeRule(sft.component.outcomes[this.outcomeName], row, sft);
          while (match = RegExp(/{{([^}]*)}}/).exec(label)) {
            const prop = row.properties[match[1].replace("&amp;", "&")];
            if (prop) {
              const subs = this.getTextValue(prop);
              label = label.replace(match[0], subs);
            }
          }
          if (show) {
            let toolTip = sft.component.outcomes[this.outcomeName].label;
            content = /* @__PURE__ */ React7.createElement(
              "span",
              {
                className: "sft-table-cell-href",
                onClick: (e) => {
                  sft.doOutcome(this.outcomeName, row);
                },
                title: toolTip
              },
              label
            );
          } else {
            content = /* @__PURE__ */ React7.createElement("span", { className: classes, style }, label);
          }
          break;
        case "url":
          const href = this.url.replace("{{VALUE}}", value.value);
          label = this.label || value.value;
          while (match = RegExp(/{{([^}]*)}}/).exec(label)) {
            const prop = row.properties[match[1].replace("&amp;", "&")];
            if (prop) {
              const subs = this.getTextValue(prop);
              label = label.replace(match[0], subs);
            }
          }
          content = /* @__PURE__ */ React7.createElement(
            "a",
            {
              className: "sft-table-cell-href",
              href,
              target: this.target
            },
            label
          );
          break;
        case "class":
          const columnProps = {
            id: row.internalId,
            propertyId: value.typeElementPropertyId,
            contentValue: value.value,
            objectData: value.value,
            flowKey: this.parent.component.id,
            contentType: value.contentType,
            contentFormat: value.contentFormat,
            row,
            sft: this.parent,
            component: this.parent.component
          };
          content = React7.createElement(manywho.component.getByName(this.componentClass), columnProps);
          break;
        case "dateformat":
          let result = "";
          if (value) {
            const dt = new Date(value.value);
            if (!isNaN(dt.getTime()) && dt.getTime() > 0) {
              if (this.timeZone === false) {
                dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
              }
              switch (this.dateFormat.toLowerCase()) {
                case "datetime":
                  result = dt.toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
                  break;
                case "date":
                  result = dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
                  break;
                case "time":
                  result = dt.toLocaleTimeString();
                  break;
                case "json":
                  result = dt.toJSON();
                  break;
                case "iso":
                  result = dt.toISOString();
                  break;
                case "utc":
                  result = dt.toUTCString();
                  break;
                case "year":
                  result = "" + dt.getFullYear();
                  break;
              }
            }
          }
          content = /* @__PURE__ */ React7.createElement("span", { className: classes, style }, result);
          break;
        case "lookup":
          let enval = value;
          if (this.lookupTable.has(value)) {
            enval = this.lookupTable.get(value);
          }
          content = /* @__PURE__ */ React7.createElement("span", { className: classes, style }, enval);
          break;
        case "percent":
          let pc = parseInt("" + (value == null ? void 0 : value.value) || "0") + "%";
          content = /* @__PURE__ */ React7.createElement("span", { className: classes, style }, pc);
          break;
        case "format":
          let res = this.format.replaceAll("{{value}}", value.value);
          content = /* @__PURE__ */ React7.createElement("span", { className: classes, style }, res);
          break;
        case "currency":
          var formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: this.currency,
            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            maximumFractionDigits: 0
            // (causes 2500.99 to be printed as $2,501)
          });
          let amt = formatter.format(value.value);
          content = /* @__PURE__ */ React7.createElement("span", { className: classes, style }, amt);
          break;
        case "style":
          content = /* @__PURE__ */ React7.createElement("span", { className: classes + " " + cellClass, style }, value.value);
          break;
        case "icon":
          let iconClass = this.iconClass + " glyphicon glyphicon-";
          if (applyRule) {
            iconClass += (this.condition.icon || this.icon) + " " + this.condition.iconClass;
            rowClass += " " + this.condition.rowClass;
            cellClass += " " + this.condition.cellClass;
          } else {
            iconClass += this.icon;
          }
          content = /* @__PURE__ */ React7.createElement(
            "span",
            {
              title: "" + value.value,
              className: classes + " " + iconClass,
              style
            }
          );
          break;
        default:
          content = /* @__PURE__ */ React7.createElement("span", { className: classes, style }, value.value);
          break;
      }
    } else {
      content = /* @__PURE__ */ React7.createElement("span", { className: classes, style }, value.value);
    }
    return { content, cellClass, rowClass };
  }
};

// src/FilterManagementForm.tsx
var React10 = __toESM(require_react());

// src/FilterFormManagementAddRow.tsx
var React8 = __toESM(require_react());
var FilterManagementFormAddRow = class extends React8.Component {
  constructor(props) {
    super(props);
    this.fieldSelected = this.fieldSelected.bind(this);
    this.addColumnCriteria = this.addColumnCriteria.bind(this);
  }
  fieldSelected(e) {
    this.forceUpdate();
  }
  addColumnCriteria(e) {
    const parent = this.props.parent;
    if (this.fieldSelect && this.fieldSelect.options[this.fieldSelect.selectedIndex].value) {
      parent.addCriteria(this.fieldSelect.options[this.fieldSelect.selectedIndex].value);
    }
  }
  render() {
    const parent = this.props.parent;
    const criteria = this.props.criteria;
    let fieldInput;
    const fieldOptions = [];
    fieldOptions.push(
      /* @__PURE__ */ React8.createElement(
        "option",
        {
          className: "sft-fmf-row-criteria-select-option",
          value: null
        },
        "Please Select ..."
      )
    );
    const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
    const sorted = Array.from(parent.columns).filter((a) => {
      return !parent.newFilters.isFilteredOn(a[1].developerName);
    }).sort((a, b) => {
      return collator.compare(a[1].label, b[1].label);
    });
    sorted.forEach((col) => {
      fieldOptions.push(
        /* @__PURE__ */ React8.createElement(
          "option",
          {
            className: "sft-fmf-row-criteria-select-option",
            value: col[1].developerName
          },
          " " + col[1].label + " "
        )
      );
    });
    fieldInput = /* @__PURE__ */ React8.createElement(
      "select",
      {
        className: "sft-fmf-row-criteria-select",
        onChange: this.fieldSelected,
        ref: (element) => {
          this.fieldSelect = element;
        }
      },
      fieldOptions
    );
    let addButton;
    if (this.fieldSelect && this.fieldSelect.options[this.fieldSelect.selectedIndex].value) {
      addButton = /* @__PURE__ */ React8.createElement(
        "button",
        {
          className: "sft-ribbon-search-button-wrapper",
          onClick: this.addColumnCriteria
        },
        /* @__PURE__ */ React8.createElement(
          "span",
          {
            className: "glyphicon glyphicon-plus sft-ribbon-search-button-icon"
          }
        )
      );
    }
    return /* @__PURE__ */ React8.createElement(
      "div",
      {
        className: "sft-fmf-row"
      },
      /* @__PURE__ */ React8.createElement(
        "div",
        {
          className: "sft-fmf-row-labels"
        },
        /* @__PURE__ */ React8.createElement(
          "div",
          {
            className: "sft-fmf-row-caption"
          },
          "Column Name"
        )
      ),
      /* @__PURE__ */ React8.createElement(
        "div",
        {
          className: "sft-fmf-row-values"
        },
        /* @__PURE__ */ React8.createElement(
          "div",
          {
            className: "sft-fmf-row-title"
          },
          fieldInput
        ),
        /* @__PURE__ */ React8.createElement(
          "div",
          {
            className: "sft-fmf-row-buttons"
          },
          addButton
        )
      )
    );
  }
};

// src/FilterManagementFormRow.tsx
var React9 = __toESM(require_react());
var FilterManagementFormRow = class extends React9.Component {
  constructor(props) {
    super(props);
    this.valueChanged = this.valueChanged.bind(this);
    this.valueToChanged = this.valueToChanged.bind(this);
    this.comparatorChanged = this.comparatorChanged.bind(this);
    this.removeCriteria = this.removeCriteria.bind(this);
  }
  valueChanged(e) {
    if (e.target.type === "checkbox") {
      this.props.criteria.value = e.target.checked;
    } else {
      this.props.criteria.value = e.target.value;
    }
    this.forceUpdate();
  }
  valueToChanged(e) {
    this.props.criteria.value2 = e.target.value;
    this.forceUpdate();
  }
  comparatorChanged(e) {
    if (this.comparatorElement && this.comparatorElement.options[this.comparatorElement.selectedIndex].value) {
      const value = this.comparatorElement.options[this.comparatorElement.selectedIndex].value;
      const comparator = parseInt(value);
      this.props.criteria.comparator = comparator;
      if (comparator !== 9 /* in */ && comparator !== 10 /* notIn */ && typeof this.props.criteria.value !== "string") {
        this.props.criteria.value = "";
        this.props.criteria.value2 = "";
      } else {
        if ((comparator === 9 /* in */ || comparator === 10 /* notIn */) && typeof this.props.criteria.value === "string") {
          this.props.criteria.value = /* @__PURE__ */ new Map();
        }
        if (comparator !== 4 /* between */) {
          this.props.criteria.value2 = "";
        }
      }
      this.forceUpdate();
    }
  }
  removeCriteria() {
    this.props.parent.removeCriteria(this.props.filterId);
  }
  render() {
    const parent = this.props.parent;
    const filter = parent.newFilters.get(this.props.filterId);
    const fieldDef = parent.columns.get(filter.key);
    const criteria = this.props.criteria;
    let fieldInput;
    if (fieldDef) {
      fieldInput = /* @__PURE__ */ React9.createElement("span", null, fieldDef.label);
    } else {
      const fieldOptions = [];
      parent.columns.forEach((field) => {
        fieldOptions.push(
          /* @__PURE__ */ React9.createElement(
            "option",
            {
              className: "sft-fmf-row-criteria-select-option",
              value: field.developerName,
              selected: field.developerName === fieldDef.developerName
            },
            field.label
          )
        );
      });
      fieldInput = /* @__PURE__ */ React9.createElement(
        "select",
        {
          className: "sft-fmf-row-criteria-select"
        },
        fieldOptions
      );
    }
    const criteriaOptions = SFTColumnCriteria.getOptions(criteria.comparator, "sft-fmf-row-criteria-select-option", fieldDef.contentType);
    let input;
    let input2;
    let label1 = "Value";
    let label2;
    if (criteria.comparator === 9 /* in */ || criteria.comparator === 10 /* notIn */) {
      input = this.props.parent.props.parent.getColumnUniques(fieldDef.developerName, criteria.value);
    } else {
      switch (fieldDef.contentType) {
        case eContentType.ContentDateTime:
          input = /* @__PURE__ */ React9.createElement(
            "input",
            {
              className: "sft-fmf-row-criteria-date",
              type: "date",
              value: this.props.criteria.value,
              onChange: this.valueChanged
            }
          );
          if (criteria.comparator === 4 /* between */) {
            input2 = /* @__PURE__ */ React9.createElement(
              "div",
              {
                className: "sft-fmf-row-value"
              },
              /* @__PURE__ */ React9.createElement(
                "input",
                {
                  className: "sft-fmf-row-criteria-date",
                  type: "date",
                  value: this.props.criteria.value2,
                  onChange: this.valueToChanged
                }
              )
            );
            label1 = "From";
            label2 = /* @__PURE__ */ React9.createElement(
              "div",
              {
                className: "sft-fmf-row-caption"
              },
              "To"
            );
          }
          break;
        case eContentType.ContentNumber:
          input = /* @__PURE__ */ React9.createElement(
            "input",
            {
              className: "sft-fmf-row-criteria-number",
              type: "number",
              value: this.props.criteria.value,
              onChange: this.valueChanged
            }
          );
          if (criteria.comparator === 4 /* between */) {
            input2 = /* @__PURE__ */ React9.createElement(
              "div",
              {
                className: "sft-fmf-row-value"
              },
              /* @__PURE__ */ React9.createElement(
                "input",
                {
                  className: "sft-fmf-row-criteria-number",
                  type: "number",
                  value: this.props.criteria.value2,
                  onChange: this.valueToChanged
                }
              )
            );
            label1 = "From";
            label2 = /* @__PURE__ */ React9.createElement(
              "div",
              {
                className: "sft-fmf-row-caption"
              },
              "To"
            );
          }
          break;
        case eContentType.ContentBoolean:
          input = /* @__PURE__ */ React9.createElement(
            "input",
            {
              className: "sft-fmf-row-criteria-checkbox",
              type: "checkbox",
              checked: this.props.criteria.value,
              onChange: this.valueChanged
            }
          );
          break;
        default:
          input = /* @__PURE__ */ React9.createElement(
            "input",
            {
              className: "sft-fmf-row-criteria-text",
              type: "text",
              value: this.props.criteria.value,
              onChange: this.valueChanged
            }
          );
          break;
      }
    }
    return /* @__PURE__ */ React9.createElement(
      "div",
      {
        className: "sft-fmf-row"
      },
      /* @__PURE__ */ React9.createElement(
        "div",
        {
          className: "sft-fmf-row-labels"
        },
        /* @__PURE__ */ React9.createElement(
          "div",
          {
            className: "sft-fmf-row-caption"
          },
          "Column Name"
        ),
        /* @__PURE__ */ React9.createElement(
          "div",
          {
            className: "sft-fmf-row-caption-criteria"
          },
          "Comparator"
        ),
        /* @__PURE__ */ React9.createElement(
          "div",
          {
            className: "sft-fmf-row-caption"
          },
          label1
        ),
        label2
      ),
      /* @__PURE__ */ React9.createElement(
        "div",
        {
          className: "sft-fmf-row-values"
        },
        /* @__PURE__ */ React9.createElement(
          "div",
          {
            className: "sft-fmf-row-title"
          },
          fieldInput
        ),
        /* @__PURE__ */ React9.createElement(
          "div",
          {
            className: "sft-fmf-row-criteria"
          },
          /* @__PURE__ */ React9.createElement(
            "select",
            {
              className: "sft-fmf-row-criteria-select",
              onChange: this.comparatorChanged,
              ref: (element) => {
                this.comparatorElement = element;
              }
            },
            criteriaOptions
          )
        ),
        /* @__PURE__ */ React9.createElement(
          "div",
          {
            className: "sft-fmf-row-value"
          },
          input
        ),
        input2,
        /* @__PURE__ */ React9.createElement(
          "button",
          {
            className: "sft-ribbon-search-button-wrapper",
            title: "Remove criteria",
            onClick: this.removeCriteria
          },
          /* @__PURE__ */ React9.createElement(
            "span",
            {
              className: "sft-ribbon-search-button-icon glyphicon glyphicon-remove-sign"
            }
          )
        )
      )
    );
  }
};

// src/FilterManagementForm.tsx
var FilterManagementForm = class extends React10.Component {
  constructor(props) {
    super(props);
    this.parent = this.props.parent;
    this.columns = this.parent.colMap;
    this.addCriteria = this.addCriteria.bind(this);
    this.removeCriteria = this.removeCriteria.bind(this);
    this.newFilters = this.parent.filters.clone();
  }
  addCriteria(fieldName) {
    this.newFilters.items.set(fieldName, new SFTColumnFilter(fieldName, this.newFilters, 0 /* none */, [new SFTColumnCriteria(0 /* equalTo */, "", "")]));
    this.forceUpdate();
  }
  removeCriteria(key) {
    this.newFilters.items.delete(key);
    this.forceUpdate();
  }
  render() {
    const rows = [];
    this.newFilters.items.forEach((filter, key) => {
      filter.criteria.forEach((criteria) => {
        rows.push(
          /* @__PURE__ */ React10.createElement(
            FilterManagementFormRow,
            {
              parent: this,
              filterId: key,
              criteria
            }
          )
        );
      });
    });
    rows.push(
      /* @__PURE__ */ React10.createElement(
        FilterManagementFormAddRow,
        {
          parent: this
        }
      )
    );
    return /* @__PURE__ */ React10.createElement(
      "div",
      {
        className: "modal-dialog-content",
        style: { width: "910px" }
      },
      rows
    );
  }
};

// src/ModelExporter.ts
var ModelExporter = class {
  static export(columns, data, fileName) {
    let file = "";
    let body = "";
    let headers = "";
    let row = "";
    data.forEach((item) => {
      if (headers.length === 0) {
        headers = this.buildHeaders(columns, item.objectData);
      }
      row = this.buildRow(columns, item.objectData);
      body += row;
    });
    let BOM = "\uFEFF";
    file = BOM + headers + body;
    const blob = new Blob([file], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    if (link.download !== void 0) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  static buildHeaders(cols, values) {
    let headers = "";
    cols.forEach((col) => {
      switch (col.contentType) {
        case eContentType.ContentList:
          const children = values.properties[col.developerName].value;
          children.items.forEach((item) => {
            if (headers.length > 0) {
              headers += ",";
            }
            headers += '"' + item.properties["ATTRIBUTE_DISPLAY_NAME"].value + '"';
          });
          break;
        default:
          if (headers.length > 0) {
            headers += ",";
          }
          headers += '"' + col.label + '"';
          break;
      }
    });
    headers += "\r\n";
    return headers;
  }
  static buildRow(cols, values) {
    let row = "";
    cols.forEach((col) => {
      switch (col.contentType) {
        case eContentType.ContentList:
          const children = values.properties[col.developerName].value;
          children.items.forEach((item) => {
            if (row.length > 0) {
              row += ",";
            }
            row += '"' + item.properties["ATTRIBUTE_VALUE"].value + '"';
          });
          break;
        default:
          if (row.length > 0) {
            row += ",";
          }
          row += '"' + values.properties[col.developerName].value + '"';
          break;
      }
    });
    row += "\r\n";
    return row;
  }
};

// src/MultiSelect.tsx
var React11 = __toESM(require_react());
var MultiSelect = class extends React11.Component {
  constructor(props) {
    super(props);
    this.expanded = false;
    this.showCheckboxes = this.showCheckboxes.bind(this);
  }
  showCheckboxes() {
    const checkboxes = document.getElementById("checkboxes_" + this.props.id);
    if (!this.expanded) {
      checkboxes.style.display = "flex";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
  }
  render() {
    const checkBoxes = [];
    const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
    const sorted = Array.from(this.props.allItems.keys()).sort((a, b) => collator.compare(a, b));
    sorted.forEach((item) => {
      var _a;
      checkBoxes.push(
        /* @__PURE__ */ React11.createElement(
          "div",
          {
            className: "checkbox-row"
          },
          /* @__PURE__ */ React11.createElement(
            "div",
            {
              className: "checkbox-checkbox-wrapper"
            },
            /* @__PURE__ */ React11.createElement(
              "input",
              {
                type: "checkbox",
                id: item,
                key: item,
                className: "sft-checkbox",
                checked: (_a = this.props.selectedItems) == null ? void 0 : _a.has(item),
                onClick: (e) => {
                  var _a2;
                  if ((_a2 = this.props.selectedItems) == null ? void 0 : _a2.has(item)) {
                    this.props.selectedItems.delete(item);
                  } else {
                    this.props.selectedItems.set(item, item);
                  }
                  this.forceUpdate();
                }
              }
            )
          ),
          /* @__PURE__ */ React11.createElement(
            "div",
            {
              className: "checkbox-label-wrapper"
            },
            /* @__PURE__ */ React11.createElement(
              "span",
              {
                className: "checkbox-row-label"
              },
              item
            )
          )
        )
      );
    });
    return /* @__PURE__ */ React11.createElement("div", { className: "multiselect" }, /* @__PURE__ */ React11.createElement(
      "div",
      {
        className: "selectBox",
        onClick: this.showCheckboxes
      },
      /* @__PURE__ */ React11.createElement("select", null, /* @__PURE__ */ React11.createElement("option", null, "Select an option")),
      /* @__PURE__ */ React11.createElement(
        "div",
        {
          className: "overSelect"
        }
      )
    ), /* @__PURE__ */ React11.createElement(
      "div",
      {
        className: "checkboxScroller"
      },
      /* @__PURE__ */ React11.createElement(
        "div",
        {
          className: "checkboxes",
          id: "checkboxes_" + this.props.id
        },
        checkBoxes
      )
    ));
  }
};

// src/RowItem.ts
var RowItem = class {
  constructor() {
    this.columns = /* @__PURE__ */ new Map();
  }
};

// src/SearchFilterTableFooter.tsx
var React12 = __toESM(require_react());
var SearchFilterTableFooter = class extends React12.Component {
  componentDidMount() {
    this.forceUpdate();
    this.maxPerPageChanged = this.maxPerPageChanged.bind(this);
  }
  maxPerPageChanged(e) {
    const root = this.props.root;
    root.maxPerPageChanged(parseInt(this.maxPerPage.options[this.maxPerPage.selectedIndex].value));
  }
  render() {
    const root = this.props.root;
    let summary;
    let pag;
    switch (true) {
      case root.paginationMode === 2 /* external */:
        summary = "";
        pag = root.externalPaginationPage.toString();
        break;
      case (root.component.getAttribute("summaryMode", "default").toLowerCase() === "simple" || root.component.isMultiSelect === false):
        summary = "Showing " + root.currentRowMap.size + " items of " + root.rowMap.size;
        pag = "page " + (root.currentRowPage + 1) + " of " + root.currentRowPages.length;
        break;
      default:
        summary = "Selected " + root.selectedRowMap.size + " of " + root.currentRowMap.size + " items from a total dataset of " + root.rowMap.size;
        pag = "page " + (root.currentRowPage + 1) + " of " + root.currentRowPages.length;
        break;
    }
    let firstPage;
    let prevPage;
    let nextPage;
    let lastPage;
    if (root.currentRowPage > 0) {
      firstPage = /* @__PURE__ */ React12.createElement(
        "span",
        {
          className: "glyphicon glyphicon-fast-backward sft-footer-pagination-button",
          title: "First page",
          onClick: root.firstPage
        }
      );
      prevPage = /* @__PURE__ */ React12.createElement(
        "span",
        {
          className: "glyphicon glyphicon-step-backward sft-footer-pagination-button",
          title: "Previous page",
          onClick: root.previousPage
        }
      );
    } else {
      firstPage = /* @__PURE__ */ React12.createElement(
        "span",
        {
          className: "glyphicon glyphicon-fast-backward sft-footer-pagination-button sft-footer-pagination-button-disabled"
        }
      );
      prevPage = /* @__PURE__ */ React12.createElement(
        "span",
        {
          className: "glyphicon glyphicon-step-backward sft-footer-pagination-button sft-footer-pagination-button-disabled"
        }
      );
    }
    if (root.currentRowPage < root.currentRowPages.length - 1) {
      lastPage = /* @__PURE__ */ React12.createElement(
        "span",
        {
          className: "glyphicon glyphicon-fast-forward sft-footer-pagination-button",
          title: "Last page",
          onClick: root.lastPage
        }
      );
      nextPage = /* @__PURE__ */ React12.createElement(
        "span",
        {
          className: "glyphicon glyphicon-step-forward sft-footer-pagination-button",
          title: "Next page",
          onClick: root.nextPage
        }
      );
    } else {
      lastPage = /* @__PURE__ */ React12.createElement(
        "span",
        {
          className: "glyphicon glyphicon-fast-forward sft-footer-pagination-button sft-footer-pagination-button-disabled"
        }
      );
      nextPage = /* @__PURE__ */ React12.createElement(
        "span",
        {
          className: "glyphicon glyphicon-step-forward sft-footer-pagination-button sft-footer-pagination-button-disabled"
        }
      );
    }
    let options = [];
    options.push(10, 20, 50, 100);
    if (options.indexOf(root.maxPageRows) < 0) {
      options.push(root.maxPageRows);
    }
    options = options.sort((a, b) => {
      return a - b;
    });
    const opts = [];
    let selected = options[0];
    options.forEach((a) => {
      if (root.maxPageRows === a) {
        selected = a;
      }
      opts.push(
        /* @__PURE__ */ React12.createElement(
          "option",
          {
            key: a,
            value: a
          },
          a
        )
      );
    });
    const perPage = /* @__PURE__ */ React12.createElement(
      "select",
      {
        className: "sft-footer-select",
        value: selected,
        onChange: this.maxPerPageChanged,
        ref: (element) => {
          this.maxPerPage = element;
        }
      },
      opts
    );
    let pagination;
    let perPageBlock;
    switch (root.paginationMode) {
      case 1 /* local */:
        pagination = /* @__PURE__ */ React12.createElement(
          "div",
          {
            className: "sft-footer-pagination"
          },
          firstPage,
          prevPage,
          /* @__PURE__ */ React12.createElement("span", { className: "sft-footer-pagination-label" }, pag),
          nextPage,
          lastPage
        );
        perPageBlock = /* @__PURE__ */ React12.createElement(
          "div",
          {
            className: "sft-footer-perpage"
          },
          /* @__PURE__ */ React12.createElement(
            "div",
            {
              className: "sft-footer-perpage-label"
            },
            "Items per page"
          ),
          perPage
        );
        break;
      case 2 /* external */:
        prevPage = /* @__PURE__ */ React12.createElement(
          "span",
          {
            className: "glyphicon glyphicon-step-backward sft-footer-pagination-button",
            title: "Previous page",
            onClick: root.previousPage
          }
        );
        nextPage = /* @__PURE__ */ React12.createElement(
          "span",
          {
            className: "glyphicon glyphicon-step-forward sft-footer-pagination-button",
            title: "Next page",
            onClick: root.nextPage
          }
        );
        pagination = /* @__PURE__ */ React12.createElement(
          "div",
          {
            className: "sft-footer-pagination"
          },
          prevPage,
          /* @__PURE__ */ React12.createElement("span", { className: "sft-footer-pagination-label" }, pag),
          nextPage
        );
        break;
    }
    return /* @__PURE__ */ React12.createElement(
      "div",
      {
        className: "sft-footer"
      },
      perPageBlock,
      /* @__PURE__ */ React12.createElement(
        "div",
        {
          className: "sft-footer-spacer"
        }
      ),
      /* @__PURE__ */ React12.createElement(
        "div",
        {
          className: "sft-footer-summary"
        },
        /* @__PURE__ */ React12.createElement(
          "span",
          {
            className: "sft-footer-summary-label"
          },
          summary
        )
      ),
      pagination
    );
  }
};

// src/SearchFilterTableHeaders.tsx
var React14 = __toESM(require_react());

// src/SearchFilterTableHeader.tsx
var React13 = __toESM(require_react());
var SearchFilterTableHeader = class extends React13.Component {
  constructor(props) {
    super(props);
    this.dragEnter = this.dragEnter.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
  }
  dragEnter() {
    this.mask.style.zIndex = 1e4;
    this.th.classList.add("sft-column-header-wrapper-droppable");
  }
  dragLeave() {
    this.mask.style.zIndex = -1;
    this.th.classList.remove("sft-column-header-wrapper-droppable");
  }
  render() {
    const root = this.props.root;
    const parent = this.props.parent;
    const col = this.props.column;
    let filterIcon;
    let sortIcon;
    let quickCheck;
    if (this.props.static !== true) {
      sortIcon = root.filters.getSortIcon(col.developerName);
      if (this.props.inlineSearch === true) {
        filterIcon = root.filters.getFilterIcon(col.developerName);
      }
      quickCheck = root.filters.getQuickCheck(col.developerName);
    }
    let cls = "sft-column-header";
    if (this.props.sticky) {
      cls += " sft-header-sticky";
    }
    return /* @__PURE__ */ React13.createElement(
      "th",
      {
        key: col.developerName,
        className: cls,
        style: { pointerEvents: "all" },
        ref: (element) => {
          this.th = element;
        }
      },
      /* @__PURE__ */ React13.createElement(
        "div",
        {
          className: "sft-column-header-wrapper sft-thcontainer",
          style: { display: "flex", flexDirection: "row", pointerEvents: "all" },
          draggable: root.dynamicColumns,
          onDragStart: (e) => {
            parent.dragColumn(e, col.developerName);
          },
          onDragEnter: (e) => {
            parent.onDragEnter(e);
          },
          onDragLeave: (e) => {
            parent.onDragLeave(e);
          },
          onDragOver: (e) => {
            parent.onDragOver(e);
          },
          onDrop: (e) => {
            parent.onDrop(e);
          },
          onClick: (e) => {
            root.filters.sortClicked(col.developerName);
          },
          "data-fieldname": col.developerName
        },
        /* @__PURE__ */ React13.createElement(
          "div",
          {
            className: "sft-column-header-top",
            style: { pointerEvents: "all" }
          },
          /* @__PURE__ */ React13.createElement(
            "div",
            {
              className: "sft-column-header-title",
              style: { pointerEvents: "all" }
            },
            /* @__PURE__ */ React13.createElement(
              "span",
              {
                className: "sft-column-header-title-label"
              },
              col.label
            )
          ),
          /* @__PURE__ */ React13.createElement(
            "div",
            {
              className: "sft-column-header-flags",
              style: { pointerEvents: "all" }
            },
            sortIcon
          ),
          /* @__PURE__ */ React13.createElement(
            "div",
            {
              style: { pointerEvents: "all" },
              className: "sft-column-header-buttons"
            },
            filterIcon,
            quickCheck
          )
        ),
        /* @__PURE__ */ React13.createElement(
          "div",
          {
            className: "sft-column-header-bottom",
            style: { pointerEvents: "all" }
          }
        ),
        /* @__PURE__ */ React13.createElement(
          "div",
          {
            style: { position: "absolute", top: "0", left: "0", bottom: "0", right: "0", pointerEvents: "all", zIndex: -1 },
            ref: (element) => {
              this.mask = element;
            }
          }
        )
      )
    );
  }
};

// src/SearchFilterTableHeaders.tsx
var SearchFilterTableHeaders = class extends React14.Component {
  constructor(props) {
    super(props);
    this.headers = /* @__PURE__ */ new Map();
    this.setHeader = this.setHeader.bind(this);
    this.dragColumn = this.dragColumn.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.moveColumn = this.moveColumn.bind(this);
  }
  componentDidMount() {
    this.forceUpdate();
  }
  setHeader(key, header) {
    if (header) {
      this.headers.set(key, header);
    } else {
      this.headers.delete(key);
    }
  }
  dragColumn(e, fieldName) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("column", fieldName);
    this.draggedFieldName = fieldName;
  }
  onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    const tgtFieldName = e.currentTarget.getAttribute("data-fieldname");
    const srcFieldName = this.draggedFieldName;
    if (!srcFieldName || this.draggedFieldName === tgtFieldName) {
      e.dataTransfer.dropEffect = "none";
    } else {
      this.headers.get(tgtFieldName).dragEnter();
      e.dataTransfer.dropEffect = "move";
    }
  }
  onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    const tgtFieldName = e.currentTarget.getAttribute("data-fieldname");
    this.headers.get(tgtFieldName).dragLeave();
  }
  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    const srcFieldName = e.dataTransfer.getData("column");
    const tgtFieldName = e.currentTarget.getAttribute("data-fieldname");
  }
  async onDrop(e) {
    const root = this.props.root;
    e.preventDefault();
    e.stopPropagation();
    const srcFieldName = e.dataTransfer.getData("column");
    const tgtFieldName = e.currentTarget.getAttribute("data-fieldname");
    this.draggedFieldName = void 0;
    e.dataTransfer.clearData();
    e.currentTarget.parentElement.classList.remove("sft-column-header-wrapper-droppable");
    if (srcFieldName && srcFieldName !== tgtFieldName) {
      await this.moveColumn(srcFieldName, tgtFieldName);
      this.forceUpdate();
    }
  }
  async moveColumn(srcFieldName, tgtFieldName) {
    const root = this.props.root;
    console.log("move " + srcFieldName + " before " + tgtFieldName);
    root.userColumns.splice(root.userColumns.indexOf(tgtFieldName), 0, root.userColumns.splice(root.userColumns.indexOf(srcFieldName), 1)[0]);
    root.columnsReordered();
  }
  render() {
    this.headers = /* @__PURE__ */ new Map();
    const headers = [];
    const root = this.props.root;
    const buttons = [];
    let anyoutcomes = false;
    Object.keys(root.component.outcomes).forEach((key) => {
      if (root.component.outcomes[key].isBulkAction === false) {
        if (!root.supressedOutcomes.has(key)) {
          anyoutcomes = true;
        }
        buttons.push(key);
      }
    });
    if (root.colMap.size > 0) {
      if (root.component.isMultiSelect) {
        headers.push(
          /* @__PURE__ */ React14.createElement(
            "th",
            {
              key: "checks",
              className: "sft-check-header",
              ref: (element) => {
                this.setHeader("checks", element);
              }
            },
            /* @__PURE__ */ React14.createElement("span", { style: { display: "none" } }, "Toggle Selection"),
            /* @__PURE__ */ React14.createElement(
              "div",
              {
                className: "sft-thcontainer"
              },
              /* @__PURE__ */ React14.createElement(
                "input",
                {
                  className: "sft-checkbox",
                  type: "checkbox",
                  onClick: (event) => {
                    root.toggleSelectAll(event);
                  },
                  title: "Toggle Selection"
                }
              )
            )
          )
        );
      } else {
        if (root.component.getAttribute("showRadio", "false").toLowerCase() === "true") {
          headers.push(
            /* @__PURE__ */ React14.createElement(
              "th",
              {
                key: "checks",
                className: "sft-column-header",
                ref: (element) => {
                  this.setHeader("checks", element);
                }
              },
              /* @__PURE__ */ React14.createElement("span", { style: { display: "none" } }, "Toggle Selection"),
              /* @__PURE__ */ React14.createElement(
                "div",
                {
                  className: "sft-thcontainer"
                }
              )
            )
          );
        }
      }
      let fixedCols = parseInt(root.component.getAttribute("stickyColumns", "0"));
      root.userColumns.forEach((collName) => {
        if (collName === "#BUTTONS#") {
          if (anyoutcomes) {
            headers.push(
              /* @__PURE__ */ React14.createElement(
                SearchFilterTableHeader,
                {
                  key: "#BUTTONS#",
                  root: this.props.root,
                  parent: this,
                  column: { developerName: "#BUTTONS#", label: root.component.getAttribute("OutcomesLabel", "Action") },
                  static: true,
                  inlineSearch: this.props.inlineSearch,
                  ref: (element) => {
                    this.setHeader("#BUTTONS#", element);
                  },
                  sticky: fixedCols > 0
                }
              )
            );
          }
        } else {
          const col = root.colMap.get(collName);
          if (col) {
            headers.push(
              /* @__PURE__ */ React14.createElement(
                SearchFilterTableHeader,
                {
                  key: col.developerName,
                  root: this.props.root,
                  parent: this,
                  column: col,
                  inlineSearch: this.props.inlineSearch,
                  ref: (element) => {
                    this.setHeader(col.developerName, element);
                  },
                  sticky: fixedCols > 0
                }
              )
            );
          } else {
            root.userColumns.splice(root.userColumns.indexOf(collName), 1);
            root.saveUserColumns();
          }
        }
        if (fixedCols > 0)
          fixedCols--;
      });
    }
    return /* @__PURE__ */ React14.createElement(
      "tr",
      {
        className: "sft-column-headers"
      },
      headers
    );
  }
};

// src/SearchFilterTableRibbon.tsx
var React15 = __toESM(require_react());
var SearchFilterTableRibbon = class extends React15.Component {
  constructor(props) {
    super(props);
    this.generateButtons = this.generateButtons.bind(this);
  }
  async componentDidMount() {
    await this.generateButtons();
  }
  async generateButtons() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
    this.leftButtons = [];
    this.rightButtons = [];
    const root = this.props.root;
    const canExport = root.component.getAttribute("canExport", "false").toLowerCase() === "true";
    if (canExport === true) {
      this.rightButtons.push(
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-button-wrapper",
            onClick: (e) => {
              e.stopPropagation();
              root.doExport(root.rowMap);
            }
          },
          !((_a = root.component.attributes) == null ? void 0 : _a.RibbonDisplay) || ((_c = (_b = root.component.attributes) == null ? void 0 : _b.RibbonDisplay) == null ? void 0 : _c.indexOf("icon")) >= 0 ? /* @__PURE__ */ React15.createElement(
            "span",
            {
              key: "exportAll",
              className: "glyphicon glyphicon-floppy-save sft-ribbon-button-icon",
              title: "Export All"
            }
          ) : null,
          !((_d = root.component.attributes) == null ? void 0 : _d.RibbonDisplay) || ((_f = (_e = root.component.attributes) == null ? void 0 : _e.RibbonDisplay) == null ? void 0 : _f.indexOf("text")) >= 0 ? /* @__PURE__ */ React15.createElement(
            "span",
            {
              className: "sft-ribbon-button-label"
            },
            "Export All"
          ) : null
        )
      );
    }
    if (root.rowMap.size > root.currentRowMap.size && canExport === true) {
      this.rightButtons.push(
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-button-wrapper",
            onClick: (e) => {
              e.stopPropagation();
              root.doExport(root.currentRowMap);
            }
          },
          !((_g = root.component.attributes) == null ? void 0 : _g.RibbonDisplay) || ((_i = (_h = root.component.attributes) == null ? void 0 : _h.RibbonDisplay) == null ? void 0 : _i.indexOf("icon")) >= 0 ? /* @__PURE__ */ React15.createElement(
            "span",
            {
              key: "exportShown",
              className: "glyphicon glyphicon-floppy-save sft-ribbon-button-icon",
              title: "Export Shown"
            }
          ) : null,
          !((_j = root.component.attributes) == null ? void 0 : _j.RibbonDisplay) || ((_l = (_k = root.component.attributes) == null ? void 0 : _k.RibbonDisplay) == null ? void 0 : _l.indexOf("text")) >= 0 ? /* @__PURE__ */ React15.createElement(
            "span",
            {
              className: "sft-ribbon-button-label"
            },
            "Export Shown"
          ) : null
        )
      );
    }
    const arrOutcomes = Array.from(Object.values(root.component.outcomes));
    for (let pos = 0; pos < arrOutcomes.length; pos++) {
      const outcome = arrOutcomes[pos];
      if (outcome.isBulkAction && outcome.developerName !== "OnSelect" && outcome.developerName !== "OnChange" && !outcome.developerName.toLowerCase().startsWith("cm")) {
        const showOutcome = await SFTCommonFunctions.assessGlobalOutcomeRule(outcome, root);
        if (showOutcome === true) {
          this.rightButtons.push(
            /* @__PURE__ */ React15.createElement(
              "div",
              {
                className: "sft-ribbon-button-wrapper",
                onClick: (e) => {
                  root.doOutcome(outcome.developerName, void 0);
                }
              },
              ((_m = outcome.attributes) == null ? void 0 : _m.icon) ? /* @__PURE__ */ React15.createElement(
                "span",
                {
                  key: outcome.developerName,
                  className: "glyphicon glyphicon-" + (((_n = outcome.attributes["icon"]) == null ? void 0 : _n.value) || "plus") + " sft-ribbon-button-icon",
                  title: outcome.label || outcome.developerName
                }
              ) : null,
              !((_o = outcome.attributes) == null ? void 0 : _o.display) || ((_p = outcome.attributes.display) == null ? void 0 : _p.value.indexOf("text")) >= 0 ? /* @__PURE__ */ React15.createElement(
                "span",
                {
                  className: "sft-ribbon-button-label"
                },
                outcome.label
              ) : null
            )
          );
        }
      }
    }
    if (((_q = root.component.content) == null ? void 0 : _q.length) > 0) {
      this.rightButtons.push(
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-search-button-wrapper",
            onClick: (e) => {
              root.showInfo();
            }
          },
          /* @__PURE__ */ React15.createElement(
            "span",
            {
              key: "colpick",
              className: "glyphicon sft-ribbon-search-button-icon glyphicon-" + (((_r = root.component.attributes) == null ? void 0 : _r.InfoIcon) ? root.component.attributes.InfoIcon : "question-sign"),
              title: "Infornation"
            }
          ),
          !((_s = root.component.attributes) == null ? void 0 : _s.RibbonDisplay) || ((_t = root.component.attributes.RibbonDisplay) == null ? void 0 : _t.indexOf("text")) >= 0 ? /* @__PURE__ */ React15.createElement(
            "span",
            {
              className: "sft-ribbon-search-button-label"
            },
            "Column Picker"
          ) : null
        )
      );
    }
    if (root.dynamicColumns === true) {
      this.rightButtons.push(
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-button-wrapper",
            onClick: (e) => {
              root.showColumnPicker();
            }
          },
          /* @__PURE__ */ React15.createElement(
            "span",
            {
              key: "colpick",
              className: "glyphicon sft-ribbon-button-icon glyphicon-" + (((_u = root.component.attributes) == null ? void 0 : _u.ColumnsIcon) ? root.component.attributes.ColumnsIcon : "option-vertical"),
              title: "Select columns"
            }
          ),
          !((_v = root.component.attributes) == null ? void 0 : _v.RibbonDisplay) || ((_w = root.component.attributes.RibbonDisplay) == null ? void 0 : _w.indexOf("text")) >= 0 ? /* @__PURE__ */ React15.createElement(
            "span",
            {
              className: "sft-ribbon-button-label"
            },
            "Column Picker"
          ) : null
        )
      );
    }
    if (root.selectedRowMap.size > 0 && canExport === true) {
      this.leftButtons.push(
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-button-wrapper",
            onClick: (e) => {
              e.stopPropagation();
              root.doExport(root.selectedRowMap);
            }
          },
          !((_x = root.component.attributes) == null ? void 0 : _x.RibbonDisplay) || ((_z = (_y = root.component.attributes) == null ? void 0 : _y.RibbonDisplay) == null ? void 0 : _z.indexOf("icon")) >= 0 ? /* @__PURE__ */ React15.createElement(
            "span",
            {
              key: "exportSelected",
              className: "glyphicon glyphicon-floppy-save sft-ribbon-button-icon",
              title: "Export Selected"
            }
          ) : null,
          !((_A = root.component.attributes) == null ? void 0 : _A.RibbonDisplay) || ((_C = (_B = root.component.attributes) == null ? void 0 : _B.RibbonDisplay) == null ? void 0 : _C.indexOf("text")) >= 0 ? /* @__PURE__ */ React15.createElement(
            "span",
            {
              className: "sft-ribbon-button-label"
            },
            "Export Selected"
          ) : null
        )
      );
    }
    this.forceUpdate();
    return true;
  }
  render() {
    const root = this.props.root;
    const style = {};
    if (root.titleElement) {
      style.top = "2.5rem";
    }
    return /* @__PURE__ */ React15.createElement(
      "div",
      {
        className: "sft-ribbon",
        style
      },
      /* @__PURE__ */ React15.createElement(
        "div",
        {
          className: "sft-ribbon-left-wrapper"
        },
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-title-wrapper"
          },
          /* @__PURE__ */ React15.createElement(
            "span",
            {
              className: "sft-ribbon-title"
            },
            "Available actions:"
          )
        ),
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-hbuttons-wrapper"
          },
          this.leftButtons
        )
      ),
      /* @__PURE__ */ React15.createElement(
        "div",
        {
          className: "sft-ribbon-right-wrapper"
        },
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-title-wrapper"
          },
          /* @__PURE__ */ React15.createElement(
            "span",
            {
              className: "sft-ribbon-title"
            }
          )
        ),
        /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: "sft-ribbon-hbuttons-wrapper"
          },
          this.rightButtons
        )
      )
    );
  }
};

// src/SearchFilterTableRibbonSearch.tsx
var React17 = __toESM(require_react());

// node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var noop = function noop2() {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined")
    _WINDOW = window;
  if (typeof document !== "undefined")
    _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined")
    _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined")
    _PERFORMANCE = performance;
} catch (e) {
}
var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var _familyProxy;
var _familyProxy2;
var _familyProxy3;
var _familyProxy4;
var _familyProxy5;
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var DATA_PREFIX = "data-prefix";
var DATA_ICON = "data-icon";
var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var MUTATION_APPROACH_ASYNC = "async";
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var PRODUCTION = function() {
  try {
    return false;
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = "classic";
var FAMILY_SHARP = "sharp";
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
function familyProxy(obj) {
  return new Proxy(obj, {
    get: function get2(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
  "fa": "solid",
  "fas": "solid",
  "fa-solid": "solid",
  "far": "regular",
  "fa-regular": "regular",
  "fal": "light",
  "fa-light": "light",
  "fat": "thin",
  "fa-thin": "thin",
  "fad": "duotone",
  "fa-duotone": "duotone",
  "fab": "brands",
  "fa-brands": "brands",
  "fak": "kit",
  "fa-kit": "kit"
}), _defineProperty(_familyProxy, FAMILY_SHARP, {
  "fa": "solid",
  "fass": "solid",
  "fa-solid": "solid",
  "fasr": "regular",
  "fa-regular": "regular",
  "fasl": "light",
  "fa-light": "light"
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
  "solid": "fas",
  "regular": "far",
  "light": "fal",
  "thin": "fat",
  "duotone": "fad",
  "brands": "fab",
  "kit": "fak"
}), _defineProperty(_familyProxy2, FAMILY_SHARP, {
  "solid": "fass",
  "regular": "fasr",
  "light": "fasl"
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
  "fab": "fa-brands",
  "fad": "fa-duotone",
  "fak": "fa-kit",
  "fal": "fa-light",
  "far": "fa-regular",
  "fas": "fa-solid",
  "fat": "fa-thin"
}), _defineProperty(_familyProxy3, FAMILY_SHARP, {
  "fass": "fa-solid",
  "fasr": "fa-regular",
  "fasl": "fa-light"
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), _defineProperty(_familyProxy4, FAMILY_SHARP, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl"
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/;
var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
  "900": "fas",
  "400": "far",
  "normal": "far",
  "300": "fal",
  "100": "fat"
}), _defineProperty(_familyProxy5, FAMILY_SHARP, {
  "900": "fass",
  "400": "fasr",
  "300": "fasl"
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var DUOTONE_CLASSES = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var prefixes = /* @__PURE__ */ new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function(n) {
  return "w-".concat(n);
}));
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "")
    return true;
  if (val === "false")
    return false;
  if (val === "true")
    return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
    var val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var attrs;
var _default = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
var _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg)
  _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function(key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set2(val) {
      _config[key] = val;
      _onChangeCb.forEach(function(cb) {
        return cb(config);
      });
    },
    get: function get2() {
      return _config[key];
    }
  });
});
Object.defineProperty(config, "familyPrefix", {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(function(cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return function() {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  var size = 12;
  var id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  var array = [];
  for (var i = (obj || []).length >>> 0; i--; ) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter(function(i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref2) {
  var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = "";
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }
  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
var _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER])
  w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles)
  w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks)
  w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims)
  w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function listener2() {
  DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
  loaded = 1;
  functions.map(function(fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded)
    DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
function domready(fn) {
  if (!IS_DOM)
    return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a, b, c, d2) {
    return func.call(thisContext, a, b, c, d2);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
  if (initialValue === void 0) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function ucs2decode(string) {
  var output = [];
  var counter2 = 0;
  var length = string.length;
  while (counter2 < length) {
    var value = string.charCodeAt(counter2++);
    if (value >= 55296 && value <= 56319 && counter2 < length) {
      var extra = string.charCodeAt(counter2++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter2--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;
  if (first >= 55296 && first <= 56319 && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function(acc, iconName) {
    var icon3 = icons[iconName];
    var expanded = !!icon3.icon;
    if (expanded) {
      acc[icon3.iconName] = icon3.icon;
    } else {
      acc[iconName] = icon3;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
var _LONG_STYLE;
var _PREFIXES;
var _PREFIXES_FOR_FAMILY;
var styles = namespace.styles;
var shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  var parts = cls.split("-");
  var prefix = parts[0];
  var iconName = parts.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build2() {
  var lookup = function lookup2(reducer) {
    return reduce(styles, function(o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };
  _byUnicode = lookup(function(acc, icon3, iconName) {
    if (icon3[3]) {
      acc[icon3[3]] = iconName;
    }
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a) {
        return typeof a === "number";
      });
      aliases.forEach(function(alias) {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup(function(acc, icon3, iconName) {
    acc[iconName] = iconName;
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a) {
        return typeof a === "string";
      });
      aliases.forEach(function(alias) {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup(function(acc, icon3, iconName) {
    var aliases = icon3[2];
    acc[iconName] = iconName;
    aliases.forEach(function(alias) {
      acc[alias] = iconName;
    });
    return acc;
  });
  var hasRegular = "far" in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function(acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];
    if (prefix === "far" && !hasRegular) {
      prefix = "fas";
    }
    if (typeof maybeNameMaybeUnicode === "string") {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === "number") {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function(c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode("fas", unicode);
  return oldUnicode || (newUnicode ? {
    prefix: "fas",
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon2() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$family = params.family, family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;
  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }
  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }
  var canonical = values.reduce(function(acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);
    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }
    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === "fa" ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);
      if (shim.prefix) {
        givenPrefix = null;
      }
      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;
      if (acc.prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
        acc.prefix = "fas";
      }
    }
    return acc;
  }, emptyCanonicalIcon());
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (values.includes("fa-duotone") || values.includes("fad")) {
    canonical.prefix = "fad";
  }
  if (!canonical.prefix && family === FAMILY_SHARP && (styles["fass"] || config.autoFetchSvg)) {
    canonical.prefix = "fass";
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
var Library = /* @__PURE__ */ function() {
  function Library2() {
    _classCallCheck(this, Library2);
    this.definitions = {};
  }
  _createClass(Library2, [{
    key: "add",
    value: function add() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function(key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix)
          defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function(key) {
        var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon3 = _normalized$key.icon;
        var aliases = icon3[2];
        if (!additions[prefix])
          additions[prefix] = {};
        if (aliases.length > 0) {
          aliases.forEach(function(alias) {
            if (typeof alias === "string") {
              additions[prefix][alias] = icon3;
            }
          });
        }
        additions[prefix][iconName] = icon3;
      });
      return additions;
    }
  }]);
  return Library2;
}();
var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref2) {
  var obj = _ref2.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function(k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(function(plugin) {
    var mixout8 = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout8).forEach(function(tk) {
      if (typeof mixout8[tk] === "function") {
        obj[tk] = mixout8[tk];
      }
      if (_typeof(mixout8[tk]) === "object") {
        Object.keys(mixout8[tk]).forEach(function(sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout8[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      var hooks8 = plugin.hooks();
      Object.keys(hooks8).forEach(function(hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks8[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args));
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName)
    return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto2() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks("noAuto");
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (IS_DOM) {
      callHooks("beforeI2svg", params);
      callProvided("pseudoElements2svg", params);
      return callProvided("i2svg", params);
    } else {
      return Promise.reject("Operation requires a DOM of some kind.");
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(function() {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks("watch", params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }
    if (_typeof(_icon) === "object" && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }
    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof _icon === "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof _icon === "string") {
      var _prefix = getDefaultUsablePrefix();
      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
var autoReplace = function autoReplace2() {
  var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg)
    api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get2() {
      return val.abstract.map(function(a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get2() {
      if (!IS_DOM)
        return;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref2) {
  var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2(_objectSpread2({}, styles2), {}, {
      "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref2) {
  var prefix = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var isUploadedIcon = prefix === "fak";
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function(c) {
    return c !== "" || !!c;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) {
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });
  var _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  }, children = _ref22.children, attributes = _ref22.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content, width = params.width, height = params.height, transform = params.transform, title = params.title, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  var styles2 = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content, title = params.title, extra = params.extra;
  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  var styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
var styles$1 = namespace.styles;
function asFoundIcon(icon3) {
  var width = icon3[0];
  var height = icon3[1];
  var _icon$slice = icon3.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  var givenPrefix = prefix;
  if (prefix === "fa" && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise(function(resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided("missingIconAbstract") || {}
    };
    if (givenPrefix === "fa") {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon3 = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon3));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
var noop$1 = function noop3() {
};
var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = 'FA "6.4.2"';
var begin = function begin2(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function() {
    return end(name);
  };
};
var end = function end2(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
var noop$2 = function noop4() {
};
function isWatched(node) {
  var i2svg2 = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg2 === "string";
}
function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon3 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon3;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement15(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement15 : _params$ceFn;
  if (typeof abstractObj === "string") {
    return DOCUMENT.createTextNode(abstractObj);
  }
  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(function(_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1];
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete _abstract2[0].attributes.id;
    if (_abstract2[0].attributes.class) {
      var splitClasses = _abstract2[0].attributes.class.split(" ").reduce(function(acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      _abstract2[0].attributes.class = splitClasses.toSvg.join(" ");
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute("class");
      } else {
        node.setAttribute("class", splitClasses.toNode.join(" "));
      }
    }
    var newInnerHTML = _abstract2.map(function(a) {
      return toHtml(a);
    }).join("\n");
    node.setAttribute(DATA_FA_I2SVG, "");
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  var callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(function() {
      var mutator = getMutator();
      var mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function(objects) {
    if (disabled)
      return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function(mutationRecord) {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName)
            mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM)
    return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo)
    return;
  mo.disconnect();
}
function styleParser(node) {
  var style = node.getAttribute("style");
  var val = [];
  if (style) {
    val = style.split(";").reduce(function(acc, style2) {
      var styles2 = style2.split(":");
      var prop = styles2[0];
      var value = styles2.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  var existingPrefix = node.getAttribute("data-prefix");
  var existingIconName = node.getAttribute("data-icon");
  var innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  var val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  var title = node.getAttribute("title");
  var titleId = node.getAttribute("data-fa-title-id");
  if (config.autoA11y) {
    if (title) {
      extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes["aria-hidden"] = "true";
      extraAttributes["focusable"] = "false";
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  };
  var _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest;
  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    title: node.getAttribute("title"),
    titleId: node.getAttribute("data-fa-title-id"),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
var styles$2 = namespace.styles;
function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
}
var knownPrefixes = /* @__PURE__ */ new Set();
FAMILIES.map(function(family) {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = _toConsumableArray(knownPrefixes);
function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!IS_DOM)
    return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd2(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var hclRemove = function hclRemove2(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));
  if (!prefixes2.includes("fa")) {
    prefixes2.push("fa");
  }
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map(function(p2) {
    return ".".concat(p2, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  var candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  var mark = perf.begin("onTree");
  var mutations = candidates.reduce(function(acc, node) {
    try {
      var mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === "MissingIcon") {
          console.error(e);
        }
      }
    }
    return acc;
  }, []);
  return new Promise(function(resolve, reject) {
    Promise.all(mutations).then(function(resolvedMutations) {
      perform(resolvedMutations, function() {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function")
          callback();
        mark();
        resolve();
      });
    }).catch(function(e) {
      mark();
      reject(e);
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then(function(mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
var render = function render2(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition)
    return;
  var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon3 = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: "icon"
  }, iconDefinition), function() {
    callHooks("beforeDOMElementCreation", {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon3),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout2() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks2() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
      } : _params$callback;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
      var iconName = nodeMeta.iconName, title = nodeMeta.title, titleId = nodeMeta.titleId, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
      return new Promise(function(resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(_ref2) {
          var _ref22 = _slicedToArray(_ref2, 2), main = _ref22[0], mask2 = _ref22[1];
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask: mask2
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function(_ref3) {
      var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles;
      var styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      var nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided("generateAbstractTransformGrouping", {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};
var Layers = {
  mixout: function mixout3() {
    return {
      layer: function layer2(assembler) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: "layer"
        }, function() {
          callHooks("beforeDOMElementCreation", {
            assembler,
            params
          });
          var children = [];
          assembler(function(args) {
            Array.isArray(args) ? args.map(function(a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: "span",
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(" ")
            },
            children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout: function mixout4() {
    return {
      counter: function counter2(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "counter",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout: function mixout5() {
    return {
      text: function text2(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "text",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides2(providers$$1) {
    providers$$1.generateLayersText = function(node, nodeMeta) {
      var title = nodeMeta.title, transform = nodeMeta.transform, extra = nodeMeta.extra;
      var width = null;
      var height = null;
      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes["aria-hidden"] = "true";
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise(function(resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve();
    }
    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function(c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles2 = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles2.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN);
    var fontWeight = styles2.getPropertyValue("font-weight");
    var content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamily) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== "none" && content !== "") {
      var _content = styles2.getPropertyValue("content");
      var family = ~["Sharp"].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];
      var _hexValueFromContent = hexValueFromContent(_content), hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary;
      var isV4 = fontFamily[0].startsWith("FontAwesome");
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;
      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function(main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          var element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = _abstract.map(function(a) {
            return toHtml(a);
          }).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace2(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root) {
  if (!IS_DOM)
    return;
  return new Promise(function(resolve, reject) {
    var operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace2);
    var end3 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(function() {
      end3();
      enableObservation();
      resolve();
    }).catch(function() {
      end3();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks: function hooks3() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides3(providers$$1) {
    providers$$1.pseudoElements2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout6() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks4() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks("mutationObserverCallbacks", {}));
      },
      noAuto: function noAuto3() {
        disconnect();
      },
      watch: function watch2(params) {
        var observeMutationsRoot = params.observeMutationsRoot;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks("mutationObserverCallbacks", {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
var parseTransformString = function parseTransformString2(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(" ").reduce(function(acc, n) {
    var parts = n.toLowerCase().split("-");
    var first = parts[0];
    var rest = parts.slice(1).join("-");
    if (first && rest === "h") {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === "v") {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case "grow":
        acc.size = acc.size + rest;
        break;
      case "shrink":
        acc.size = acc.size - rest;
        break;
      case "left":
        acc.x = acc.x - rest;
        break;
      case "right":
        acc.x = acc.x + rest;
        break;
      case "up":
        acc.y = acc.y - rest;
        break;
      case "down":
        acc.y = acc.y + rest;
        break;
      case "rotate":
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout7() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks5() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute("data-fa-transform");
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides: function provides4(providers2) {
    providers2.generateAbstractTransformGrouping = function(_ref2) {
      var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer,
        inner,
        path
      };
      return {
        tag: "g",
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: "g",
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = "black";
  }
  return _abstract;
}
function deGroup(_abstract2) {
  if (_abstract2.tag === "g") {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}
var Masks = {
  hooks: function hooks6() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute("data-fa-mask");
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map(function(i) {
          return i.trim();
        }));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute("data-fa-mask-id");
        return accumulator;
      }
    };
  },
  provides: function provides5(providers2) {
    providers2.generateAbstractMask = function(_ref2) {
      var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
      var mainWidth = main.width, mainPath = main.icon;
      var maskWidth = mask.width, maskPath = mask.icon;
      var trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: "rect",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: "white"
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: "mask",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: "rect",
        attributes: _objectSpread2({
          fill: "currentColor",
          "clip-path": "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides: function provides6(providers2) {
    var reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    providers2.missingIconAbstract = function() {
      var gChildren = [];
      var FILL = {
        fill: "currentColor"
      };
      var ANIMATION_BASE = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: "opacity"
      });
      var dot = {
        tag: "circle",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;1;1;0;1;"
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: reduceMotion ? [] : [{
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      });
      if (!reduceMotion) {
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        });
      }
      return {
        tag: "g",
        attributes: {
          "class": "missing"
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks: function hooks7() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute("data-fa-symbol");
        var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
        accumulator["symbol"] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon2 = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;

// node_modules/@fortawesome/react-fontawesome/index.es.js
var import_prop_types = __toESM(require_prop_types());
var import_react2 = __toESM(require_react());
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread2();
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function classList(props) {
  var _classes;
  var beat = props.beat, fade = props.fade, beatFade = props.beatFade, bounce = props.bounce, shake = props.shake, flash = props.flash, spin = props.spin, spinPulse = props.spinPulse, spinReverse = props.spinReverse, pulse = props.pulse, fixedWidth = props.fixedWidth, inverse = props.inverse, border = props.border, listItem = props.listItem, flip = props.flip, size = props.size, rotation = props.rotation, pull = props.pull;
  var classes = (_classes = {
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-flash": flash,
    "fa-spin": spin,
    "fa-spin-reverse": spinReverse,
    "fa-spin-pulse": spinPulse,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both"
  }, _defineProperty2(_classes, "fa-".concat(size), typeof size !== "undefined" && size !== null), _defineProperty2(_classes, "fa-rotate-".concat(rotation), typeof rotation !== "undefined" && rotation !== null && rotation !== 0), _defineProperty2(_classes, "fa-pull-".concat(pull), typeof pull !== "undefined" && pull !== null), _defineProperty2(_classes, "fa-swap-opacity", props.swapOpacity), _classes);
  return Object.keys(classes).map(function(key) {
    return classes[key] ? key : null;
  }).filter(function(key) {
    return key;
  });
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}
var _excluded = ["style"];
function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
function styleToObject(style) {
  return style.split(";").map(function(s) {
    return s.trim();
  }).filter(function(s) {
    return s;
  }).reduce(function(acc, pair) {
    var i = pair.indexOf(":");
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith("webkit") ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}
function convert(createElement24, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof element === "string") {
    return element;
  }
  var children = (element.children || []).map(function(child) {
    return convert(createElement24, child);
  });
  var mixins = Object.keys(element.attributes || {}).reduce(function(acc, key) {
    var val = element.attributes[key];
    switch (key) {
      case "class":
        acc.attrs["className"] = val;
        delete element.attributes["class"];
        break;
      case "style":
        acc.attrs["style"] = styleToObject(val);
        break;
      default:
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
    }
    return acc;
  }, {
    attrs: {}
  });
  var _extraProps$style = extraProps.style, existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style, remaining = _objectWithoutProperties(extraProps, _excluded);
  mixins.attrs["style"] = _objectSpread22(_objectSpread22({}, mixins.attrs["style"]), existingStyle);
  return createElement24.apply(void 0, [element.tag, _objectSpread22(_objectSpread22({}, mixins.attrs), remaining)].concat(_toConsumableArray2(children)));
}
var PRODUCTION2 = false;
try {
  PRODUCTION2 = false;
} catch (e) {
}
function log() {
  if (!PRODUCTION2 && console && typeof console.error === "function") {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function normalizeIconArgs(icon3) {
  if (icon3 && _typeof2(icon3) === "object" && icon3.prefix && icon3.iconName && icon3.icon) {
    return icon3;
  }
  if (parse$1.icon) {
    return parse$1.icon(icon3);
  }
  if (icon3 === null) {
    return null;
  }
  if (icon3 && _typeof2(icon3) === "object" && icon3.prefix && icon3.iconName) {
    return icon3;
  }
  if (Array.isArray(icon3) && icon3.length === 2) {
    return {
      prefix: icon3[0],
      iconName: icon3[1]
    };
  }
  if (typeof icon3 === "string") {
    return {
      prefix: "fas",
      iconName: icon3
    };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty2({}, key, value) : {};
}
var FontAwesomeIcon = /* @__PURE__ */ import_react2.default.forwardRef(function(props, ref) {
  var iconArgs = props.icon, maskArgs = props.mask, symbol = props.symbol, className = props.className, title = props.title, titleId = props.titleId, maskId = props.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey("classes", [].concat(_toConsumableArray2(classList(props)), _toConsumableArray2(className.split(" "))));
  var transform = objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
  var mask = objectWithKey("mask", normalizeIconArgs(maskArgs));
  var renderedIcon = icon2(iconLookup, _objectSpread22(_objectSpread22(_objectSpread22(_objectSpread22({}, classes), transform), mask), {}, {
    symbol,
    title,
    titleId,
    maskId
  }));
  if (!renderedIcon) {
    log("Could not find icon", iconLookup);
    return null;
  }
  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref
  };
  Object.keys(props).forEach(function(key) {
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = "FontAwesomeIcon";
FontAwesomeIcon.propTypes = {
  beat: import_prop_types.default.bool,
  border: import_prop_types.default.bool,
  beatFade: import_prop_types.default.bool,
  bounce: import_prop_types.default.bool,
  className: import_prop_types.default.string,
  fade: import_prop_types.default.bool,
  flash: import_prop_types.default.bool,
  mask: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.array, import_prop_types.default.string]),
  maskId: import_prop_types.default.string,
  fixedWidth: import_prop_types.default.bool,
  inverse: import_prop_types.default.bool,
  flip: import_prop_types.default.oneOf([true, false, "horizontal", "vertical", "both"]),
  icon: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.array, import_prop_types.default.string]),
  listItem: import_prop_types.default.bool,
  pull: import_prop_types.default.oneOf(["right", "left"]),
  pulse: import_prop_types.default.bool,
  rotation: import_prop_types.default.oneOf([0, 90, 180, 270]),
  shake: import_prop_types.default.bool,
  size: import_prop_types.default.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: import_prop_types.default.bool,
  spinPulse: import_prop_types.default.bool,
  spinReverse: import_prop_types.default.bool,
  symbol: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string]),
  title: import_prop_types.default.string,
  titleId: import_prop_types.default.string,
  transform: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.object]),
  swapOpacity: import_prop_types.default.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, import_react2.default.createElement);

// src/SearchFilterTableRibbonSearch.tsx
var import_faMagnifyingGlass = __toESM(require_faMagnifyingGlass());
var import_faBan = __toESM(require_faBan());
var import_faCircleInfo = __toESM(require_faCircleInfo());
var import_faDownload = __toESM(require_faDownload());
var import_faEllipsisVertical = __toESM(require_faEllipsisVertical());
var import_faFilter = __toESM(require_faFilter());
var import_faFilterCircleXmark = __toESM(require_faFilterCircleXmark());
var import_faListCheck = __toESM(require_faListCheck());
var SearchFilterTableRibbonSearch = class extends React17.Component {
  constructor(props) {
    super(props);
    this.previousFilter = "";
    this.leftButtons = [];
    this.rightButtons = [];
    this.deBounce = false;
    this.generateButtons = this.generateButtons.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.filterKeyDown = this.filterKeyDown.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
    this.filterCommitted = this.filterCommitted.bind(this);
    const root = this.props.root;
    this.currentFilter = root.filters.globalCriteria;
  }
  componentDidMount() {
    this.generateButtons();
  }
  async generateButtons() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    if (this.deBounce === true) {
      return;
    } else {
      this.deBounce = true;
    }
    const root = this.props.root;
    this.leftButtons = [];
    this.rightButtons = [];
    const canExport = root.component.getAttribute("canExport", "true").toLowerCase() === "true";
    if (canExport === true) {
      this.rightButtons.push(
        /* @__PURE__ */ React17.createElement(
          "div",
          {
            className: "sft-ribbon-search-button-wrapper",
            onClick: (e) => {
              e.stopPropagation();
              root.doExport(root.rowMap);
            },
            key: "exportAll"
          },
          /* @__PURE__ */ React17.createElement(
            FontAwesomeIcon,
            {
              role: "button",
              icon: import_faDownload.faDownload,
              key: "exportAll",
              className: "sft-ribbon-search-button-icon",
              title: "Export Shown"
            }
          ),
          !((_a = root.component.attributes) == null ? void 0 : _a.RibbonDisplay) || ((_b = root.component.attributes.RibbonDisplay) == null ? void 0 : _b.indexOf("text")) >= 0 ? /* @__PURE__ */ React17.createElement(
            "span",
            {
              className: "sft-ribbon-search-button-label"
            },
            "Export All"
          ) : null
        )
      );
    }
    if (root.rowMap.size > root.currentRowMap.size && canExport === true) {
      this.rightButtons.push(
        /* @__PURE__ */ React17.createElement(
          "div",
          {
            className: "sft-ribbon-search-button-wrapper",
            onClick: (e) => {
              e.stopPropagation();
              root.doExport(root.currentRowMap);
            },
            key: "exportShown"
          },
          /* @__PURE__ */ React17.createElement(
            FontAwesomeIcon,
            {
              role: "button",
              icon: import_faDownload.faDownload,
              key: "exportShown",
              className: "sft-ribbon-search-button-icon",
              title: "Export Shown"
            }
          ),
          !((_c = root.component.attributes) == null ? void 0 : _c.RibbonDisplay) || ((_d = root.component.attributes.RibbonDisplay) == null ? void 0 : _d.indexOf("text")) >= 0 ? /* @__PURE__ */ React17.createElement(
            "span",
            {
              className: "sft-ribbon-search-button-label"
            },
            "Export Shown"
          ) : null
        )
      );
    }
    const arrOutcomes = Array.from(Object.values(root.component.outcomes));
    for (let pos = 0; pos < arrOutcomes.length; pos++) {
      const outcome = arrOutcomes[pos];
      if (outcome.isBulkAction && outcome.developerName !== "OnSelect" && outcome.developerName !== "OnChange" && !outcome.developerName.toLowerCase().startsWith("cm")) {
        const showOutcome = await SFTCommonFunctions.assessGlobalOutcomeRule(outcome, root);
        if (root.component.getAttribute("greyDissabled", "false").toLowerCase() === "true") {
          let btn = SFTCommonFunctions.makeOutcomeButton(root, outcome, root.iconSuffix, void 0, !showOutcome);
          this.rightButtons.push(
            btn
          );
        } else {
          if (showOutcome === true) {
            let btn = SFTCommonFunctions.makeOutcomeButton(root, outcome, root.iconSuffix, void 0, false);
            this.rightButtons.push(
              btn
            );
          }
        }
      }
    }
    if (((_e = root.component.content) == null ? void 0 : _e.length) > 0) {
      this.rightButtons.push(
        /* @__PURE__ */ React17.createElement(
          "div",
          {
            className: "sft-ribbon-search-button-wrapper",
            onClick: (e) => {
              root.showInfo();
            },
            key: "info"
          },
          /* @__PURE__ */ React17.createElement(
            FontAwesomeIcon,
            {
              role: "button",
              icon: import_faCircleInfo.faCircleInfo,
              key: "info",
              className: "sft-ribbon-search-button-icon",
              title: "Show Info"
            }
          ),
          !((_f = root.component.attributes) == null ? void 0 : _f.RibbonDisplay) || ((_g = root.component.attributes.RibbonDisplay) == null ? void 0 : _g.indexOf("text")) >= 0 ? /* @__PURE__ */ React17.createElement(
            "span",
            {
              className: "sft-ribbon-search-button-label"
            },
            "Column Picker"
          ) : null
        )
      );
    }
    if (root.dynamicColumns === true) {
      this.rightButtons.push(
        /* @__PURE__ */ React17.createElement(
          "div",
          {
            className: "sft-ribbon-search-button-wrapper",
            onClick: (e) => {
              root.showColumnPicker();
            },
            key: "colpick"
          },
          /* @__PURE__ */ React17.createElement(
            FontAwesomeIcon,
            {
              role: "button",
              icon: import_faEllipsisVertical.faEllipsisVertical,
              key: "colpick",
              className: "sft-ribbon-search-button-icon",
              title: "Select columns"
            }
          ),
          !((_h = root.component.attributes) == null ? void 0 : _h.RibbonDisplay) || ((_i = root.component.attributes.RibbonDisplay) == null ? void 0 : _i.indexOf("text")) >= 0 ? /* @__PURE__ */ React17.createElement(
            "span",
            {
              className: "sft-ribbon-search-button-label"
            },
            "Column Picker"
          ) : null
        )
      );
    }
    if (root.selectedRowMap.size > 0 && canExport === true) {
      this.leftButtons.push(
        /* @__PURE__ */ React17.createElement(
          "div",
          {
            className: "sft-ribbon-search-button-wrapper",
            onClick: (e) => {
              e.stopPropagation();
              root.doExport(root.selectedRowMap);
            },
            key: "exportSelected"
          },
          /* @__PURE__ */ React17.createElement(
            FontAwesomeIcon,
            {
              role: "button",
              icon: import_faListCheck.faListCheck,
              key: "exportSelected",
              className: "sft-ribbon-search-button-icon sft-ribbon-search-icon-clear",
              title: "Export Selected"
            }
          ),
          !((_j = root.component.attributes) == null ? void 0 : _j.RibbonDisplay) || ((_k = root.component.attributes.RibbonDisplay) == null ? void 0 : _k.indexOf("text")) >= 0 ? /* @__PURE__ */ React17.createElement(
            "span",
            {
              className: "sft-ribbon-search-button-label"
            },
            "Export Selected"
          ) : null
        )
      );
    }
    if (root.filters.isFiltered()) {
      this.clearFiltersButton = /* @__PURE__ */ React17.createElement(
        "div",
        {
          className: "sft-ribbon-search-button-wrapper sft-ribbon-search-button-clear",
          onClick: this.clearFilters,
          key: "clearFilters"
        },
        /* @__PURE__ */ React17.createElement(
          FontAwesomeIcon,
          {
            role: "button",
            icon: import_faFilterCircleXmark.faFilterCircleXmark,
            key: "clearFilters",
            className: "sft-ribbon-search-button-icon sft-ribbon-search-icon-clear",
            title: "Clear Filters"
          }
        )
      );
    } else {
      this.clearFiltersButton = void 0;
    }
    this.deBounce = false;
    this.forceUpdate();
  }
  clearSearch(e) {
    this.currentFilter = "";
    this.filterCommitted();
  }
  filterChanged() {
    this.currentFilter = this.searchInput.value;
    this.forceUpdate();
  }
  filterCommitted() {
    if (this.currentFilter !== this.previousFilter) {
      this.previousFilter = this.currentFilter;
      const root = this.props.root;
      root.globalFilterChanged(this.currentFilter);
    }
  }
  filterKeyDown(e) {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        e.stopPropagation();
        this.filterCommitted();
        return false;
        break;
      case "Escape":
        e.preventDefault();
        e.stopPropagation();
        this.searchInput.value = this.previousFilter;
        return false;
        break;
      case "Delete":
        e.preventDefault();
        e.stopPropagation();
        this.searchInput.value = "";
        return false;
        break;
      case "Tab":
        this.filterCommitted();
        return false;
        break;
      default:
        break;
    }
  }
  showSearch(e) {
    const root = this.props.root;
    root.manageFilters();
  }
  clearFilters(e) {
    const root = this.props.root;
    root.filters.clearAll();
  }
  render() {
    const root = this.props.root;
    const style = {};
    if (root.titleElement) {
      style.marginTop = "0.5rem";
    }
    let title;
    if (root.title && root.title.length > 0) {
      title = /* @__PURE__ */ React17.createElement(
        "div",
        {
          className: "sft-ribbon-title-wrapper"
        },
        root.title
      );
    }
    return /* @__PURE__ */ React17.createElement(
      "div",
      {
        className: "sft-ribbon-search",
        style,
        key: "ribbon"
      },
      title,
      /* @__PURE__ */ React17.createElement(
        "div",
        {
          className: "sft-ribbon-search-left-wrapper"
        },
        /* @__PURE__ */ React17.createElement(
          "div",
          {
            className: "sft-ribbon-search-wrapper"
          },
          /* @__PURE__ */ React17.createElement(
            FontAwesomeIcon,
            {
              icon: import_faMagnifyingGlass.faMagnifyingGlass,
              role: "button",
              className: "sft-ribbon-search-icon sft-ribbon-search-icon-search",
              onClick: this.filterCommitted,
              title: "Search"
            }
          ),
          /* @__PURE__ */ React17.createElement(
            "input",
            {
              className: "sft-ribbon-search-input",
              ref: (element) => {
                this.searchInput = element;
              },
              onKeyDown: this.filterKeyDown,
              onKeyUp: (e) => {
                e.stopPropagation();
                e.preventDefault();
              },
              onChange: this.filterChanged,
              value: this.currentFilter,
              placeholder: "Search table",
              title: "Search Criteria"
            }
          ),
          /* @__PURE__ */ React17.createElement(
            FontAwesomeIcon,
            {
              icon: import_faBan.faBan,
              role: "button",
              className: "sft-ribbon-search-icon sft-ribbon-search-icon-clear",
              onClick: this.clearSearch,
              title: "Clear"
            }
          )
        ),
        /* @__PURE__ */ React17.createElement(
          "div",
          {
            className: "sft-ribbon-search-button-wrapper",
            onClick: this.showSearch
          },
          /* @__PURE__ */ React17.createElement(
            FontAwesomeIcon,
            {
              role: "button",
              icon: import_faFilter.faFilter,
              key: "showSearch",
              className: "sft-ribbon-search-button-icon sft-ribbon-search-icon-advanced",
              title: "Advanced Search"
            }
          )
        ),
        this.clearFiltersButton
      ),
      /* @__PURE__ */ React17.createElement(
        "div",
        {
          className: "sft-ribbon-search-right-wrapper"
        },
        /* @__PURE__ */ React17.createElement(
          "div",
          {
            className: "sft-ribbon-search-buttons-wrapper"
          },
          this.leftButtons,
          this.rightButtons
        )
      )
    );
  }
};

// src/SearchFilterTableRow.tsx
var React18 = __toESM(require_react());
var SearchFilterTableRow = class extends React18.Component {
  constructor(props) {
    super(props);
    this.state = { enabledOutcomes: [] };
    this.selectRow = this.selectRow.bind(this);
  }
  async componentDidMount() {
    var _a, _b;
    const enabledOutcomes = [];
    const root = this.props.root;
    const objData = (_a = root.rowMap.get(this.props.id)) == null ? void 0 : _a.objectData;
    const keys = Object.keys(root.component.outcomes);
    for (let pos = 0; pos < keys.length; pos++) {
      if (root.component.outcomes[keys[pos]].isBulkAction === false) {
        if (!root.supressedOutcomes.has(root.component.outcomes[keys[pos]].developerName)) {
          if (SFTCommonFunctions.assessRowOutcomeRule(root.component.outcomes[keys[pos]], objData, root) === true) {
            enabledOutcomes.push(keys[pos]);
          }
        }
      }
    }
    if (root.lastRememberedRow) {
      if (((_b = objData.properties[root.rowRememberColumn]) == null ? void 0 : _b.value) === root.lastRememberedRow) {
        this.rowElement.scrollIntoView({ inline: "center", block: "center", behavior: "auto" });
      }
    }
    this.setState({ enabledOutcomes });
  }
  selectRow(e) {
    var _a;
    const root = this.props.root;
    const objData = (_a = root.rowMap.get(this.props.id)) == null ? void 0 : _a.objectData;
    root.selectRow(objData);
  }
  render() {
    var _a;
    const root = this.props.root;
    const objData = (_a = root.rowMap.get(this.props.id)) == null ? void 0 : _a.objectData;
    let rowClass = "";
    if (root.selectedRow === objData.externalId) {
      rowClass += " sft-table-row-selected ";
    }
    const buttons = [];
    let anyoutcomes = false;
    for (let key of Object.keys(root.component.outcomes)) {
      if (root.component.outcomes[key].isBulkAction === false) {
        let showOutcome = this.state.enabledOutcomes.indexOf(key) >= 0;
        if (!root.supressedOutcomes.has(key)) {
          anyoutcomes = true;
          if (root.component.getAttribute("greyDissabled", "false").toLowerCase() === "true") {
            let btn = SFTCommonFunctions.makeOutcomeButton(root, root.component.outcomes[key], root.iconSuffix, objData, !showOutcome);
            buttons.push(btn);
          } else {
            if (showOutcome === true) {
              let btn = SFTCommonFunctions.makeOutcomeButton(root, root.component.outcomes[key], root.iconSuffix, objData, false);
              buttons.push(btn);
            }
          }
        }
      }
    }
    ;
    const cols = [];
    if (root.component.isMultiSelect) {
      cols.push(
        /* @__PURE__ */ React18.createElement(
          "td",
          {
            className: "sft-table-cell sft-table-cell-check",
            key: "#CHECK#"
          },
          /* @__PURE__ */ React18.createElement(
            "input",
            {
              className: "sft-checkbox",
              type: "checkbox",
              onClick: (event) => {
                root.toggleSelect(event, this.props.id);
              },
              checked: root.selectedRowMap.has(this.props.id),
              title: "Select Row",
              onChange: (e) => {
                return;
              }
            }
          )
        )
      );
    } else {
      if (root.component.getAttribute("showRadio", "false").toLowerCase() === "true") {
        cols.push(
          /* @__PURE__ */ React18.createElement(
            "td",
            {
              className: "sft-table-cell",
              key: "#CHECK#"
            },
            /* @__PURE__ */ React18.createElement(
              "input",
              {
                className: "sft-radio",
                type: "radio",
                checked: root.selectedRow === objData.externalId,
                title: "Select Row",
                onChange: (e) => {
                  return;
                }
              }
            )
          )
        );
      }
    }
    root.userColumns.forEach((collName) => {
      if (collName === "#BUTTONS#") {
        if (anyoutcomes) {
          cols.push(
            /* @__PURE__ */ React18.createElement(
              "td",
              {
                key: "#BUTTONS#",
                className: "sft-table-cell"
              },
              /* @__PURE__ */ React18.createElement(
                "div",
                {
                  className: "sft-table-cell-buttons"
                },
                buttons
              )
            )
          );
        }
      } else {
        const col = root.colMap.get(collName);
        if (col) {
          let cellResult = this.formatValue(col.componentType, col.contentType, root, col.developerName, objData);
          const val = cellResult.result;
          if (rowClass.length > 0 && cellResult.rowClass.length > 0) {
            rowClass += " ";
          }
          rowClass += cellResult.rowClass;
          cols.push(
            /* @__PURE__ */ React18.createElement(
              "td",
              {
                key: col.developerName,
                className: "sft-table-cell " + cellResult.cellClass
              },
              val
            )
          );
        } else {
          console.log("Failed to get a definition for col " + collName);
        }
      }
    });
    return /* @__PURE__ */ React18.createElement(
      "tr",
      {
        key: this.props.id,
        className: "sft-table-row " + rowClass,
        ref: (element) => {
          this.rowElement = element;
        },
        onClick: this.selectRow
      },
      cols
    );
  }
  // handles special contents like uris & dataUri
  formatValue(componentType, contentType, root, columnName, row) {
    var _a;
    let result;
    let rowClass = "";
    let cellClass = "";
    let col;
    if (root.component.getAttribute("ComplexColumns", "false").toLowerCase() === "true") {
      let colsName = root.component.getAttribute("ComplexColumnsChildren", "Columns");
      let colName = root.component.getAttribute("ComplexColumnName", "Name");
      let colValue = root.component.getAttribute("ComplexColumnValue", "Value");
      row.properties[colsName].value.items.forEach((c) => {
        let cname = c.properties[colName].value;
        if (cname === columnName) {
          let val = c.properties[colValue].value;
          let colType = root.colMap.get(columnName).contentType;
          col = FlowObjectDataProperty.newInstance(cname, colType, c);
        }
      });
    } else {
      col = row == null ? void 0 : row.properties[columnName];
    }
    if (col && col.developerName) {
      if (root.columnRules.has(col.developerName)) {
        let ruleResult = root.columnRules.get(col.developerName).generateColumnContent(col, row, root);
        result = ruleResult.content;
        rowClass = ruleResult.rowClass ? ruleResult.rowClass : "";
        cellClass = ruleResult.cellClass ? ruleResult.cellClass : "";
      } else {
        if ((componentType == null ? void 0 : componentType.length) > 0) {
          const columnProps = {
            id: row.internalId,
            propertyId: col.typeElementPropertyId,
            contentValue: col.value,
            objectData: col.value,
            flowKey: root.component.id,
            contentType: col.contentType,
            contentFormat: col.contentFormat,
            row,
            sft: root,
            component: root.component
          };
          result = React18.createElement(manywho.component.getByName(componentType), columnProps);
        } else {
          switch (contentType) {
            case eContentType.ContentDateTime:
              let dt = new Date(col.value);
              if ((dt instanceof Date && !isNaN(dt.getTime())) === true) {
                let str = "";
                switch (root.component.getAttribute("DateFormat", "LOCALE")) {
                  case "UTC":
                    str = dt.toUTCString();
                    break;
                  case "JSON":
                    str = dt.toJSON();
                    break;
                  default:
                    str = dt.toLocaleString();
                    break;
                }
                result = /* @__PURE__ */ React18.createElement(
                  "span",
                  {
                    className: "sft-table-cell-text"
                  },
                  str
                );
              } else {
                /* @__PURE__ */ React18.createElement("span", { className: "sft-table-cell-text" });
              }
              break;
            case eContentType.ContentString:
              switch (true) {
                case this.isXML(col.value) === true:
                  result = /* @__PURE__ */ React18.createElement(
                    "button",
                    {
                      onClick: (e) => {
                        this.showXML(col.developerName, col.value);
                      }
                    },
                    "View XML"
                  );
                  break;
                case this.isJSON(col.value) === true:
                  result = /* @__PURE__ */ React18.createElement(
                    "button",
                    {
                      onClick: (e) => {
                        this.showJSON(col.developerName, col.value);
                      }
                    },
                    "View JSON"
                  );
                  break;
                case this.isContent(col.value) === true:
                  result = /* @__PURE__ */ React18.createElement(
                    "button",
                    {
                      onClick: (e) => {
                        this.showContent(col.developerName, col.value);
                      }
                    },
                    "View Content"
                  );
                  break;
                case col.value.startsWith("http:"):
                case col.value.startsWith("https:"):
                  let inner;
                  if (this.isUrlImage(col.value)) {
                    inner = /* @__PURE__ */ React18.createElement(
                      "img",
                      {
                        src: col.value,
                        style: { height: "2rem", width: "auto" },
                        alt: col.value,
                        title: col.value
                      }
                    );
                  } else {
                    inner = col.value;
                  }
                  result = /* @__PURE__ */ React18.createElement(
                    "a",
                    {
                      href: col.value,
                      target: "_blank"
                    },
                    inner
                  );
                  break;
                case col.value.startsWith("data:"):
                  const mime = col.value.split(";")[0].split(":")[1];
                  switch (true) {
                    case mime.startsWith("audio/"):
                      result = /* @__PURE__ */ React18.createElement(
                        "audio",
                        {
                          controls: true,
                          style: { width: "100%", minWidth: "9rem" }
                        },
                        /* @__PURE__ */ React18.createElement("source", { src: col.value, type: mime })
                      );
                      break;
                    case mime.startsWith("video/"):
                      result = /* @__PURE__ */ React18.createElement(
                        "button",
                        {
                          className: "sft-table-cell-button",
                          onClick: (e) => {
                            root.playVideo("Video", col.value, mime);
                          }
                        },
                        "Play Video"
                      );
                      break;
                    default:
                      const dnld = this.makeFileName("file", mime);
                      result = /* @__PURE__ */ React18.createElement("a", { href: col.value, target: "_blank", download: dnld }, "Download File");
                      break;
                  }
                  break;
                case (root.maxColText > 0 && col.value.length > root.maxColText):
                  result = /* @__PURE__ */ React18.createElement(
                    "button",
                    {
                      onClick: (e) => {
                        this.showContent(col.developerName, col.value);
                      }
                    },
                    "View Content"
                  );
                  break;
                default:
                  result = /* @__PURE__ */ React18.createElement(
                    "span",
                    {
                      className: "sft-table-cell-text"
                    },
                    col.value
                  );
                  break;
              }
              break;
            case eContentType.ContentNumber:
              if (col.value === "") {
                result = /* @__PURE__ */ React18.createElement(
                  "span",
                  {
                    className: "sft-table-cell-text"
                  }
                );
              } else {
                result = /* @__PURE__ */ React18.createElement(
                  "span",
                  {
                    className: "sft-table-cell-text"
                  },
                  col.value
                );
              }
              break;
            case eContentType.ContentBoolean:
              if (((_a = col.value + "") == null ? void 0 : _a.toLowerCase()) === "true") {
                result = /* @__PURE__ */ React18.createElement(
                  "span",
                  {
                    className: "sft-table-cell-text sft-table-cell-boolean sft-table-cell-boolean-true glyphicon glyphicon-ok"
                  }
                );
              } else {
                result = /* @__PURE__ */ React18.createElement(
                  "span",
                  {
                    className: "sft-table-cell-text sft-table-cell-boolean sft-table-cell-boolean-false glyphicon glyphicon-remove"
                  }
                );
              }
              break;
            default:
              result = /* @__PURE__ */ React18.createElement(
                "span",
                {
                  className: "sft-table-cell-text"
                },
                "???"
              );
              break;
          }
        }
      }
    } else {
      console.log("One of the columns in the table had a null name.  Check the table display columns settings in Flow");
    }
    return { result, rowClass, cellClass };
  }
  isUrlImage(url) {
    url += "";
    if (url.endsWith("jpg") || url.endsWith("jpeg") || url.endsWith("jfif") || url.endsWith("png") || url.endsWith("bmp") || url.endsWith("ico") || url.endsWith("gif")) {
      return true;
    } else {
      return false;
    }
  }
  isJSON(value) {
    value += "";
    if (value === "null") {
      value = "";
    }
    try {
      if (value.indexOf("{") < 0) {
        return false;
      }
    } catch (e) {
      console.log("bang");
    }
    try {
      value = value.replaceAll("\\n ", "");
      value = value.replaceAll("\\n}", "}");
      value = value.replaceAll("\\", '"');
      value = value.replaceAll('"', '"');
      const obj = JSON.parse(value);
      return true;
    } catch (e) {
      return false;
    }
  }
  showJSON(title, value) {
    const root = this.props.root;
    value = value.replaceAll("\\n ", "");
    value = value.replaceAll("\\n}", "}");
    value = value.replaceAll("\\", '"');
    value = value.replaceAll('"', '"');
    const jj = JSON.stringify(JSON.parse(value), void 0, 4);
    const content = /* @__PURE__ */ React18.createElement(
      "div",
      {
        style: {
          overflow: "visible"
        }
      },
      /* @__PURE__ */ React18.createElement(
        "div",
        {
          style: {
            overflow: "visible",
            whiteSpace: "pre",
            textAlign: "left",
            fontSize: "1rem"
          }
        },
        jj
      )
    );
    root.messageBox.showDialog(
      null,
      title,
      content,
      [new FCMModalButton("Ok", root.messageBox.hideDialog)]
    );
  }
  isContent(value) {
    value += "";
    if (value === "null") {
      value = "";
    }
    if (value.indexOf("\\n") > 0 || /<\/?[a-z][\s\S]*>/i.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  showContent(title, value) {
    value = value.replaceAll("\\n", "<br>");
    value = value.replaceAll("<br><br>", "<br>");
    const content = /* @__PURE__ */ React18.createElement(
      "div",
      {
        style: {
          overflow: "visible"
        }
      },
      /* @__PURE__ */ React18.createElement("pre", null, /* @__PURE__ */ React18.createElement(
        "code",
        {
          style: {
            overflow: "visible",
            whiteSpace: "pre",
            fontSize: "1rem"
          },
          dangerouslySetInnerHTML: { __html: value }
        }
      ))
    );
    const root = this.props.root;
    root.messageBox.showDialog(
      null,
      title,
      content,
      [new FCMModalButton("Ok", root.messageBox.hideDialog)]
    );
  }
  isXML(value) {
    value += "";
    if (value === "null") {
      value = "";
    }
    if (value.startsWith("<?xml")) {
      return true;
    } else {
      return false;
    }
  }
  showXML(title, value) {
    value = value.replaceAll("\\n", "<br>");
    value = value.replaceAll("<br><br>", "<br>");
    const content = /* @__PURE__ */ React18.createElement(
      "div",
      {
        style: {
          overflow: "visible"
        }
      },
      /* @__PURE__ */ React18.createElement("pre", null, /* @__PURE__ */ React18.createElement("code", null, value))
    );
    const root = this.props.root;
    root.messageBox.showDialog(
      null,
      title,
      content,
      [new FCMModalButton("Ok", root.messageBox.hideDialog)]
    );
  }
  makeFileName(name, mimeType) {
    const fileName = name;
    switch (mimeType) {
      case "audio/webm":
        return fileName + ".webm";
      default:
        return fileName;
    }
  }
};

// node_modules/fcmkit/lib/ContextMenu/FCMContextMenu.js
var React19 = __toESM(require_react2());
var FCMContextMenu = class extends React19.Component {
  constructor(props) {
    super(props);
    this.displayStyle = {};
    this.menuItems = [];
    this.showContextMenu = this.showContextMenu.bind(this);
    this.hideContextMenu = this.hideContextMenu.bind(this);
    this.positionContextMenu = this.positionContextMenu.bind(this);
  }
  setMenu(menu) {
    this.menu = menu;
  }
  positionContextMenu(mouseX, mouseY) {
    let menuPostion = {};
    if (mouseX < window.innerWidth / 2) {
      this.displayStyle.left = mouseX - 10;
      this.displayStyle.right = void 0;
    } else {
      this.displayStyle.left = void 0;
      this.displayStyle.right = window.innerWidth - (mouseX + 10);
    }
    if (mouseY < window.innerHeight / 2) {
      this.displayStyle.top = mouseY - 10;
      this.displayStyle.bottom = void 0;
    } else {
      this.displayStyle.top = void 0;
      this.displayStyle.bottom = window.innerHeight - (mouseY + 10) + "px";
    }
    this.displayStyle.display = "block";
  }
  showContextMenu(mouseX, mouseY, menuItems) {
    if (menuItems.size > 0) {
      const menuItemArray = [];
      menuItems.forEach((item) => {
        menuItemArray.push(item);
      });
      this.menuItems = menuItemArray;
      this.positionContextMenu(mouseX, mouseY);
      this.forceUpdate();
    }
  }
  hideContextMenu() {
    this.displayStyle.display = "none";
    this.menuItems = [];
    this.forceUpdate();
  }
  render() {
    return React19.createElement(
      "div",
      { className: "fcmcm", onMouseLeave: this.hideContextMenu, style: {
        left: this.displayStyle.left,
        right: this.displayStyle.right,
        top: this.displayStyle.top,
        bottom: this.displayStyle.bottom,
        display: this.displayStyle.display
      }, ref: (element) => this.setMenu(element) },
      React19.createElement("ul", { className: "fcmcm-list" }, this.menuItems)
    );
  }
};

// node_modules/fcmkit/lib/ModalDialog/FCMDragEvent.js
var eFCMDragEventType;
(function(eFCMDragEventType2) {
  eFCMDragEventType2[eFCMDragEventType2["unknown"] = 0] = "unknown";
  eFCMDragEventType2[eFCMDragEventType2["canvas"] = 1] = "canvas";
  eFCMDragEventType2[eFCMDragEventType2["table"] = 2] = "table";
  eFCMDragEventType2[eFCMDragEventType2["link"] = 3] = "link";
  eFCMDragEventType2[eFCMDragEventType2["dialog"] = 4] = "dialog";
})(eFCMDragEventType || (eFCMDragEventType = {}));
var FCMDragEvent = class _FCMDragEvent {
  constructor() {
    this.type = eFCMDragEventType.unknown;
    this.sourceElement = null;
    this.targetElement = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseOffsetX = 0;
    this.mouseOffsetY = 0;
  }
  static start(type, sourceElement, mouseX, mouseY) {
    const evt = new _FCMDragEvent();
    evt.type = type;
    evt.sourceElement = sourceElement;
    evt.targetElement = null;
    evt.mouseX = mouseX;
    evt.mouseY = mouseY;
    evt.mouseOffsetX = mouseX;
    evt.mouseOffsetY = mouseY;
    return evt;
  }
  drag(mouseX, mouseY) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;
  }
  end(target, mouseX, mouseY) {
    this.targetElement = target;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.type = eFCMDragEventType.unknown;
  }
};

// node_modules/fcmkit/lib/ModalDialog/FCMModal.js
var import_faCircleXmark = __toESM(require_faCircleXmark());
var React20 = __toESM(require_react2());
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FCMModal = class extends React20.Component {
  // Init of the component before it is mounted.
  constructor(props) {
    super(props);
    this.dragEvent = new FCMDragEvent();
    this.dialogVisible = false;
    this.dialogTitle = "";
    this.dialogButtons = [];
    this.dialogOnClose = this.hideDialog;
    this.top = 0;
    this.left = 0;
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.centerDialog = this.centerDialog.bind(this);
  }
  positionDialog() {
    if (this.dialog) {
      this.dialog.style.left = this.left + "px";
      this.dialog.style.top = this.top + "px";
    }
  }
  centerDialog() {
    if (this.dialog) {
      const parentXCenter = this.dialog.offsetParent.clientWidth / 2;
      const parentYCenter = this.dialog.offsetParent.clientHeight / 2;
      const dialogXOffset = this.dialog.clientWidth / 2;
      const dialogYOffset = this.dialog.clientHeight / 2;
      this.left = parentXCenter - dialogXOffset;
      this.top = parentYCenter - dialogYOffset;
      this.dialog.classList.add("fcmmod-shown");
      this.positionDialog();
    }
  }
  setDialog(dialog) {
    this.dialog = dialog;
    if (this.dialog) {
      this.centerDialog();
    }
  }
  stopEventBubble(e) {
    if (e.stopPropagation)
      e.stopPropagation();
    if (e.preventDefault)
      e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }
  // Add listeners immediately after the component is mounted.
  componentDidMount() {
    this.forceUpdate();
  }
  showDialog(icon3, title, content, buttons, onClose, clientStyle) {
    return __awaiter3(this, void 0, void 0, function* () {
      this.dialogVisible = true;
      this.dialogIcon = icon3;
      this.dialogTitle = title;
      this.dialogContent = content;
      this.dialogOnClose = onClose || this.hideDialog;
      this.dialogButtons = buttons;
      this.clientStyle = clientStyle;
      this.forceUpdate();
    });
  }
  hideDialog(e) {
    return __awaiter3(this, void 0, void 0, function* () {
      this.dialogVisible = false;
      this.dialogIcon = void 0;
      this.dialogTitle = "";
      this.dialogContent = void 0;
      this.dialogOnClose = void 0;
      this.dialogButtons = [];
      this.forceUpdate();
    });
  }
  // Handle the key press event.
  handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        this.hideDialog();
      }
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }
  // Handle the mouse click on browser window.
  handleOutsideClick(e) {
    if (!this.dialog) {
      if (!this.dialog.contains(e.target)) {
        this.hideDialog();
      }
    }
  }
  // Render the component passing onCloseRequest and children as props.
  render() {
    let content;
    if (this.dialogVisible === false) {
      content = React20.createElement("div", null);
    } else {
      const buttons = [];
      for (const button of this.dialogButtons) {
        buttons.push(React20.createElement("button", { className: "fcmmod-dialog-button-bar-button", title: button.label, onMouseDown: (e) => {
          e.stopPropagation();
          button.handler();
        } }, button.label));
      }
      let buttonBar;
      if (buttons.length > 0) {
        buttonBar = React20.createElement("div", { className: "fcmmod-dialog-button-bar" }, buttons);
      }
      let header;
      let bodyMouseDown;
      if (this.dialogIcon || this.dialogTitle) {
        header = React20.createElement(
          "div",
          { className: "fcmmod-dialog-header", onMouseDown: (e) => {
            this.onMouseDown(e);
          } },
          React20.createElement("span", { className: "fcmmod-dialog-header-icon" }, this.dialogIcon),
          React20.createElement("span", { className: "fcmmod-dialog-header-title" }, this.dialogTitle),
          React20.createElement(
            "div",
            { style: { display: "flex", flexDirection: "row", marginLeft: "auto", flexGrow: 0 } },
            React20.createElement(
              "span",
              { style: { cursor: "pointer", marginRight: "5px", display: "flex" }, title: "Close", onMouseDown: (e) => {
                this.stopEventBubble(e);
                this.dialogOnClose();
              } },
              React20.createElement(FontAwesomeIcon, { icon: import_faCircleXmark.faCircleXmark, className: "fcmmod-icon" })
            )
          )
        );
      } else {
        bodyMouseDown = this.onMouseDown;
      }
      content = React20.createElement(
        "div",
        { className: "fcmmod-redaction", onMouseMove: (e) => {
          this.onMouseMove(e);
        }, onMouseUp: (e) => {
          this.onMouseUp(e);
        }, onMouseDown: (e) => {
          this.handleOutsideClick(e);
        }, onContextMenu: (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (this.props.onContextMenu) {
            this.props.onContextMenu();
          }
        } },
        React20.createElement(
          "div",
          { className: "fcmmod-content", ref: (element) => this.setDialog(element) },
          React20.createElement(
            "div",
            { className: "fcmmod-dialog", style: this.clientStyle },
            header,
            React20.createElement(
              "div",
              { className: "fcmmod-dialog-body", onMouseDown: bodyMouseDown },
              React20.createElement("div", { className: "fcmmod-dialog-body-client", style: this.clientStyle }, this.dialogContent)
            ),
            buttonBar
          )
        )
      );
    }
    return content;
  }
  moveMe(left, top) {
    this.left = left;
    this.top = top;
    this.positionDialog();
  }
  onMouseDown(e) {
    let clientRect = e.target.getBoundingClientRect();
    let mouseOffsetY = e.clientY - clientRect.top;
    this.dragEvent = FCMDragEvent.start(eFCMDragEventType.dialog, this, e.clientX - clientRect.left, mouseOffsetY);
  }
  onMouseMove(e) {
    if (this.dragEvent.type === eFCMDragEventType.dialog) {
      this.moveMe(e.clientX - this.dragEvent.mouseOffsetX, e.clientY - this.dragEvent.mouseOffsetY);
    }
  }
  onMouseUp(e) {
    if (this.dragEvent.type === eFCMDragEventType.dialog) {
      this.dragEvent.end(null, e.clientX, e.clientY);
    }
  }
};

// src/SearchFilterTableFooterNav.tsx
var React21 = __toESM(require_react());
var import_faChevronLeft = __toESM(require_faChevronLeft());
var import_faChevronRight = __toESM(require_faChevronRight());
var import_faAngleDoubleLeft = __toESM(require_faAngleDoubleLeft());
var import_faAngleDoubleRight = __toESM(require_faAngleDoubleRight());
var SearchFilterTableFooterNav = class extends React21.Component {
  constructor(props) {
    super(props);
    this.setItemsPerPage = this.setItemsPerPage.bind(this);
    this.firstPage = this.firstPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.gotoPage = this.gotoPage.bind(this);
    this.state = { events: [] };
  }
  setItemsPerPage(e) {
    let parent = this.props.root;
    let perPage = parseInt(e.currentTarget.options[e.currentTarget.selectedIndex].value);
    parent.maxPerPageChanged(perPage);
  }
  firstPage(e) {
    let parent = this.props.root;
    parent.gotoPage(1);
  }
  previousPage(e) {
    let parent = this.props.root;
    if (parent.currentRowPage > 0) {
      parent.previousPage();
    }
  }
  nextPage(e) {
    let parent = this.props.root;
    if (parent.currentRowPage < parent.currentRowPages.length - 1) {
      parent.nextPage();
    }
  }
  lastPage(e) {
    let parent = this.props.root;
    parent.gotoPage(parent.currentRowPages.length);
  }
  gotoPage(pg) {
    let parent = this.props.root;
    parent.gotoPage(pg);
  }
  render() {
    var _a;
    let parent = this.props.root;
    let first = parent.currentRowPage * parent.maxPageRows + 1;
    if (isNaN(first)) {
      first = 0;
    }
    let tot = ((_a = parent.currentRowMap) == null ? void 0 : _a.size) || 0;
    if (isNaN(tot)) {
      tot = 0;
    }
    let to = first + (parent.maxPageRows - 1);
    if (isNaN(to)) {
      to = 0;
    }
    if (to > tot) {
      to = tot;
    }
    let showing;
    let pag;
    switch (true) {
      case parent.paginationMode === 2 /* external */:
        showing = "";
        pag = parent.externalPaginationPage.toString();
        break;
      case (parent.component.getAttribute("summaryMode", "default").toLowerCase() === "simple" || parent.component.isMultiSelect === false):
        showing = "Showing " + parent.currentRowMap.size + " items of " + parent.rowMap.size;
        pag = "page " + (parent.currentRowPage + 1) + " of " + parent.currentRowPages.length;
        break;
      default:
        showing = "Selected " + parent.selectedRowMap.size + " of " + parent.currentRowMap.size + " items from a total dataset of " + parent.rowMap.size;
        pag = "page " + (parent.currentRowPage + 1) + " of " + parent.currentRowPages.length;
        break;
    }
    let pageCount = parent.currentRowPages.length;
    let currentPage = parent.currentRowPage + 1;
    let pageNav = [];
    let prevClass = "sft-nav-chev";
    if (currentPage === 1) {
      prevClass += " sft-nav-chev-dissabled";
    }
    pageNav.push(
      /* @__PURE__ */ React21.createElement(
        FontAwesomeIcon,
        {
          icon: import_faAngleDoubleLeft.faAngleDoubleLeft,
          className: prevClass,
          title: "First page",
          onClick: this.firstPage
        }
      )
    );
    pageNav.push(
      /* @__PURE__ */ React21.createElement(
        FontAwesomeIcon,
        {
          icon: import_faChevronLeft.faChevronLeft,
          className: prevClass,
          title: "Previous page",
          onClick: this.previousPage
        }
      )
    );
    let pagePageNav = [];
    for (let pg = 1; pg <= pageCount; pg++) {
      if (pg === currentPage) {
        pagePageNav.push(
          /* @__PURE__ */ React21.createElement(
            "span",
            {
              className: "sft-nav-pg  sft-nav-pg-selected",
              onClick: (e) => {
                this.gotoPage(pg);
              }
            },
            pg
          )
        );
      } else {
        pagePageNav.push(
          /* @__PURE__ */ React21.createElement(
            "span",
            {
              className: "sft-nav-pg",
              onClick: (e) => {
                this.gotoPage(pg);
              }
            },
            pg
          )
        );
      }
    }
    if (pagePageNav.length > 7) {
      if (currentPage > 4) {
        let chop = currentPage - 4;
        if (chop > 0) {
          pagePageNav.splice(0, chop);
          pagePageNav.splice(0, 0, /* @__PURE__ */ React21.createElement(
            "span",
            {
              className: "sft-nav-pg"
            },
            "..."
          ));
        }
      }
    }
    if (pagePageNav.length >= 8) {
      let preserve = 5 - currentPage;
      let offset = currentPage + preserve + (currentPage > 4 ? 1 : 0);
      let chop = pagePageNav.length - 1 - offset;
      pagePageNav.splice(offset, chop);
      pagePageNav.splice(pagePageNav.length - 1, 0, /* @__PURE__ */ React21.createElement(
        "span",
        {
          className: "sft-nav-pg"
        },
        "..."
      ));
    }
    pageNav = pageNav.concat(pagePageNav);
    let nextClass = "sft-nav-chev";
    if (currentPage >= pageCount) {
      nextClass += " sft-nav-chev-dissabled";
    }
    pageNav.push(
      /* @__PURE__ */ React21.createElement(
        FontAwesomeIcon,
        {
          icon: import_faChevronRight.faChevronRight,
          className: nextClass,
          title: "Next page",
          onClick: this.nextPage
        }
      )
    );
    pageNav.push(
      /* @__PURE__ */ React21.createElement(
        FontAwesomeIcon,
        {
          icon: import_faAngleDoubleRight.faAngleDoubleRight,
          className: nextClass,
          title: "Last page",
          onClick: this.lastPage
        }
      )
    );
    return /* @__PURE__ */ React21.createElement(
      "div",
      {
        className: "sft-footer"
      },
      /* @__PURE__ */ React21.createElement(
        "div",
        {
          className: "sft-footer-pagination"
        },
        /* @__PURE__ */ React21.createElement(
          "span",
          {
            className: "sft-footer-pagination-label"
          },
          "Items per page"
        ),
        /* @__PURE__ */ React21.createElement(
          "select",
          {
            className: "sft-footer-pagination-select",
            onChange: this.setItemsPerPage
          },
          /* @__PURE__ */ React21.createElement("option", { value: 10, selected: parent.maxPageRows === 10 }, "10"),
          /* @__PURE__ */ React21.createElement("option", { value: 20, selected: parent.maxPageRows === 20 }, "20"),
          /* @__PURE__ */ React21.createElement("option", { value: 50, selected: parent.maxPageRows === 50 }, "50"),
          /* @__PURE__ */ React21.createElement("option", { value: 100, selected: parent.maxPageRows === 100 }, "100")
        )
      ),
      /* @__PURE__ */ React21.createElement(
        "div",
        {
          className: "sft-footer-events"
        }
      ),
      /* @__PURE__ */ React21.createElement(
        "div",
        {
          className: "sft-footer-nav"
        },
        /* @__PURE__ */ React21.createElement(
          "span",
          {
            className: "sft-footer-nav-label"
          },
          showing
        ),
        pageNav
      )
    );
  }
};

// src/SearchFilterTable.tsx
var SFT3 = class extends React22.Component {
  constructor(props) {
    super(props);
    this.version = "1.0.0";
    // this is the form being shown by the message box
    // this contains the master copy of the model data, it doesn't change unless data reloaded
    this.rowMap = /* @__PURE__ */ new Map();
    // this contains the display time subset of rowMap which is filtered & sorted, it changes with each query etc,  Used to build the actual rows
    this.currentRowMap = /* @__PURE__ */ new Map();
    // currentRowMap: Array<string> = [];//Map<string,any> = new Map();
    // this holds the max items per page
    this.maxPageRows = 5;
    // this holds the items in pages
    this.currentRowPages = [];
    // this holds the current pagination page number
    this.currentRowPage = 0;
    // this contains the display time subset of currentRowMap which is selected, each query removes any items no longer in results
    this.selectedRowMap = /* @__PURE__ */ new Map();
    // these are the child row React objects, they are re-populated with each filter, search etc
    this.rows = /* @__PURE__ */ new Map();
    // this is the column definition map, it doesn't change unless data reloaded
    this.colMap = /* @__PURE__ */ new Map();
    // this is the column value map, it conatins all possible values for each column, it doesn't change unless data reloaded
    this.colValMap = /* @__PURE__ */ new Map();
    // this is the column value map, it conatins all possible values for each column, it doesn't change unless data reloaded
    this.userColumns = [];
    // these are the child column React objects, it doesn't change unless data reloaded
    this.cols = /* @__PURE__ */ new Map();
    // these are the filter & sort controllers
    this.filters = new SFTColumnFilters2(this);
    // dynamic columns flag
    this.dynamicColumns = false;
    // max col text size before converting to button
    this.maxColText = -1;
    // column formatting rules map - allows us to specify special actions on clicking a cell
    this.columnRules = /* @__PURE__ */ new Map();
    this.retries = 0;
    this.loaded = false;
    this.supressedOutcomes = /* @__PURE__ */ new Map();
    this.component = this.props.parent;
    this.showContextMenu = this.showContextMenu.bind(this);
    this.hideContextMenu = this.hideContextMenu.bind(this);
    this.buildCoreTable = this.buildCoreTable.bind(this);
    this.buildRibbon = this.buildRibbon.bind(this);
    this.buildFooter = this.buildFooter.bind(this);
    this.filtersChanged = this.filtersChanged.bind(this);
    this.globalFilterChanged = this.globalFilterChanged.bind(this);
    this.manageFilters = this.manageFilters.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.cancelFilters = this.cancelFilters.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.toggleSelectAll = this.toggleSelectAll.bind(this);
    this.firstPage = this.firstPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.gotoPage = this.gotoPage.bind(this);
    this.maxPerPageChanged = this.maxPerPageChanged.bind(this);
    this.doExport = this.doExport.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.showColumnPicker = this.showColumnPicker.bind(this);
    this.applyColumns = this.applyColumns.bind(this);
    this.cancelColumns = this.cancelColumns.bind(this);
    this.columnsReordered = this.columnsReordered.bind(this);
    this.cancelOutcomeForm = this.cancelOutcomeForm.bind(this);
    this.okOutcomeForm = this.okOutcomeForm.bind(this);
    this.bringColumnIntoView = this.bringColumnIntoView.bind(this);
    this.selectRow = this.selectRow.bind(this);
    this.refreshRows = this.refreshRows.bind(this);
    this.loadSelected = this.loadSelected.bind(this);
    this.loadSingleSelected = this.loadSingleSelected.bind(this);
    this.loadModelData = this.loadModelData.bind(this);
    let pmode = this.component.getAttribute("PaginationMode", "local").toLowerCase();
    switch (pmode) {
      case "none":
        this.paginationMode = 0 /* none */;
        break;
      case "local":
        this.paginationMode = 1 /* local */;
        break;
      case "external":
        this.paginationMode = 2 /* external */;
        this.previousPageOutcome = this.component.getAttribute("PreviousPageOutcome");
        this.supressedOutcomes.set(this.previousPageOutcome, true);
        this.nextPageOutcome = this.component.getAttribute("NextPageOutcome");
        this.supressedOutcomes.set(this.nextPageOutcome, true);
        this.externalPage = this.component.getAttribute("ExternalPaginationPage");
        break;
    }
    this.iconSuffix = this.component.getAttribute("iconSuffixValue", "");
    this.title = this.component.label;
    this.maxPageRows = parseInt(localStorage.getItem("sft-max-" + this.component.id) || this.component.getAttribute("PaginationSize", void 0) || "10");
    localStorage.setItem("sft-max-" + this.component.id, this.maxPageRows.toString());
    this.rowRememberColumn = this.component.getAttribute("RetainRowColumn");
    if (this.rowRememberColumn) {
      this.lastRememberedRow = sessionStorage.getItem("sft-lastrow-" + this.component.id);
    }
  }
  async componentDidMount() {
    console.log(this.component.developerName + "=" + this.component.id);
    this.loaded = false;
    this.maxPageRows = parseInt(localStorage.getItem("sft-max-" + this.component.id || this.component.getAttribute("PaginationSize", void 0) || "10"));
    this.filters.loadFromStorage(localStorage.getItem("sft-filters-" + this.component.id));
    if (this.component.attributes.UserColumnsValue) {
      this.dynamicColumns = true;
    }
    if (this.component.attributes.MaxColumnTextLength) {
      this.maxColText = parseInt(this.component.attributes.MaxColumnTextLength);
    }
    this.columnRules = await ColumnRules.parse(this.component.getAttribute("ColumnRules", "{}"), this);
    await this.preLoad();
    await this.buildCoreTable();
    this.forceUpdate();
    this.loaded = true;
  }
  showInfo() {
    const content = /* @__PURE__ */ React22.createElement(
      "div",
      {
        dangerouslySetInnerHTML: { __html: this.component.content }
      }
    );
    this.messageBox.showDialog(
      null,
      "Information",
      content,
      [new FCMModalButton("Close", this.messageBox.hideDialog)]
    );
  }
  showColumnPicker() {
    const content = /* @__PURE__ */ React22.createElement(
      ColumnPickerForm,
      {
        root: this,
        ref: (element) => {
          this.form = element;
        }
      }
    );
    this.messageBox.showDialog(
      null,
      "Select Columns",
      content,
      [new FCMModalButton("Apply", this.applyColumns), new FCMModalButton("Cancel", this.cancelColumns)]
    );
  }
  cancelColumns() {
    this.messageBox.hideDialog();
    this.form = void 0;
  }
  async applyColumns() {
    this.userColumns = this.form.selectedColumns;
    this.saveUserColumns();
    this.messageBox.hideDialog();
    this.form = void 0;
    this.headers.forceUpdate();
    this.rows.forEach((row) => {
      row.forceUpdate();
    });
  }
  async columnsReordered() {
    this.saveUserColumns();
    this.headers.forceUpdate();
    this.rows.forEach((row) => {
      row.forceUpdate();
    });
  }
  getColumnUniques(name, criteria) {
    return /* @__PURE__ */ React22.createElement(
      MultiSelect,
      {
        id: name,
        allItems: this.colValMap.get(name),
        selectedItems: criteria
      }
    );
  }
  filtersChanged(key, event) {
    var _a;
    (_a = this.headers) == null ? void 0 : _a.forceUpdate();
    localStorage.setItem("sft-filters-" + this.component.id, this.filters.getForStorage());
    switch (event) {
      case 1 /* sort */:
        if (this.filters.get(key).sort !== 0 /* none */) {
          const col = this.headers.headers.get(key);
        }
        this.sortRows();
        this.bringColumnIntoView(key);
        break;
      case 2 /* filter */:
        this.filterRows();
        break;
    }
  }
  bringColumnIntoView(col) {
    var _a;
    let header = this.headers.headers.get(col);
    (_a = header == null ? void 0 : header.th) == null ? void 0 : _a.scrollIntoView({ inline: "center", block: "center", behavior: "auto" });
  }
  globalFilterChanged(value) {
    this.filters.globalCriteria = value;
    this.filtersChanged("", 2 /* filter */);
  }
  manageFilters() {
    const content = /* @__PURE__ */ React22.createElement(
      FilterManagementForm,
      {
        parent: this,
        ref: (form) => {
          this.form = form;
        }
      }
    );
    this.messageBox.showDialog(
      null,
      "Manage Filters",
      content,
      [new FCMModalButton("Apply", this.applyFilters), new FCMModalButton("Cancel", this.cancelFilters)]
    );
  }
  cancelFilters() {
    this.form = void 0;
    this.messageBox.hideDialog();
  }
  applyFilters() {
    this.filters = this.form.newFilters;
    this.form = void 0;
    this.messageBox.hideDialog();
    this.filtersChanged("", 2 /* filter */);
  }
  maxPerPageChanged(max) {
    this.maxPageRows = max || 10;
    localStorage.setItem("sft-max-" + this.component.id, this.maxPageRows.toString());
    this.paginateRows();
    this.buildTableRows();
    this.forceUpdate();
  }
  // stores / deletes a ref to a table row as it's created or destroyed
  setRow(key, element) {
    if (element) {
      this.rows.set(key, element);
    } else {
      if (this.rows.has(key)) {
        this.rows.delete(key);
      }
    }
  }
  // stores / deletes a ref to the column headers
  setRibbon(element) {
    if (element)
      this.ribbon = element;
  }
  // stores / deletes a ref to the column headers
  setHeaders(element) {
    if (element)
      this.headers = element;
  }
  // stores / deletes a ref to the footer component
  setFooter(element) {
    if (element)
      this.footer = element;
  }
  async loadUserColumns() {
    let userFieldsVal = "";
    if (this.component.attributes.UserColumnsValue !== "LOCAL_STORAGE") {
      const userFields = await this.component.getValue(this.component.attributes.UserColumnsValue);
      if (userFields && userFields.value.length > 0) {
        userFieldsVal = userFields.value;
      }
    } else {
      userFieldsVal = localStorage.getItem("sft_" + this.component.id + "_cols") || "";
    }
    let cols = [];
    if (userFieldsVal && userFieldsVal.length > 0) {
      cols = userFieldsVal.split(",");
    }
    this.userColumns = [];
    cols.forEach((col) => {
      this.userColumns.push(col.trim());
    });
  }
  async saveUserColumns() {
    let userCols = "";
    this.userColumns.forEach((col) => {
      if (userCols.length > 0) {
        userCols += ",";
      }
      if (col) {
        userCols += col.trim();
      } else {
        console.log("One of the columns in the table had a null name.  Check the table display columns settings in Flow");
      }
    });
    if (this.component.attributes.UserColumnsValue !== "LOCAL_STORAGE") {
      const userFields = await this.component.getValue(this.component.attributes.UserColumnsValue);
      userFields.value = userCols;
      await this.component.setValues(userFields);
    } else {
      localStorage.setItem("sft_" + this.component.id + "_cols", userCols);
    }
  }
  async preLoad() {
    let outcomes = Array.from(Object.values(this.component.outcomes));
    for (let pos = 0; pos < outcomes.length; pos++) {
      let outcome = outcomes[pos];
      if (outcome.attributes.rule && outcome.attributes.rule.value.length > 0) {
        try {
          const rule = JSON.parse(outcome.attributes.rule.value);
          rule.field = await this.component.inflateValue(rule.field);
        } catch (e) {
          console.log("The rule on outcome " + outcome.developerName + " is invalid");
        }
      }
      if (outcome.attributes.iconValue && outcome.attributes.iconValue.value.length > 0) {
        outcome.attributes.iconValue.value = await this.component.inflateValue(outcome.attributes.iconValue.value);
      }
    }
    if (this.columnRules && this.columnRules.size > 0) {
      this.columnRules.forEach((rule) => {
        var _a;
        if (((_a = rule.mode) == null ? void 0 : _a.toLowerCase()) === "outcome") {
          this.supressedOutcomes.set(rule.outcomeName, true);
        }
      });
    }
    this.supressedOutcomes.set("OnSelect", true);
    this.title = await this.component.inflateValue(this.title);
    this.iconSuffix = await this.component.inflateValue(this.iconSuffix);
    if (this.paginationMode === 2 /* external */) {
      if (this.externalPage) {
        let pg = await this.component.inflateValue(this.externalPage);
        this.externalPaginationPage = parseInt(pg);
        if (isNaN(this.externalPaginationPage)) {
          this.externalPaginationPage = 1;
        }
      }
    }
    return true;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  // reads the model
  // constructs the a flat a map of rows ready for searching, sorting and direct access
  // also builds the display column map
  ///////////////////////////////////////////////////////////////////////////////////////////
  async buildCoreTable() {
    var _a, _b;
    this.colMap = /* @__PURE__ */ new Map();
    let cols;
    let colMap = /* @__PURE__ */ new Map();
    ;
    if (this.component.columns && this.component.columns.length > 0) {
      cols = (_a = this.component.columns) == null ? void 0 : _a.sort((a, b) => {
        switch (true) {
          case a.DisplayOrder > b.DisplayOrder:
            return 1;
          case a.DisplayOrder === b.DisplayOrder:
            return 0;
          default:
            return -1;
        }
      });
      cols.forEach((col) => {
        colMap.set(col.developerName, col);
      });
    } else {
      if (this.component.getAttribute("ComplexColumns", "false").toLowerCase() === "true") {
        let colsName = this.component.getAttribute("ComplexColumnsChildren", "Columns");
        let colName = this.component.getAttribute("ComplexColumnName", "Name");
        let colType = this.component.getAttribute("ComplexColumnType", "Type");
        (_b = this.component.objectData.items) == null ? void 0 : _b.forEach((item) => {
          item.properties[colsName].value.items.forEach((col) => {
            let cname = col.properties[colName].value;
            if (!colMap.has(cname)) {
              let cdef = {
                developerName: cname,
                label: cname,
                contentType: eContentType.ContentObject
              };
              colMap.set(cname, cdef);
            }
          });
        });
      }
    }
    if (this.dynamicColumns === true) {
      await this.loadUserColumns();
    }
    const populateDefaults = this.dynamicColumns === false || this.dynamicColumns === true && (this.userColumns.length === 0 || this.userColumns.length === 1 && this.userColumns.indexOf("#BUTTONS#") >= 0);
    if (populateDefaults) {
      this.userColumns = [];
    }
    colMap.forEach((col) => {
      this.colMap.set(col.developerName, col);
      this.colValMap.set(col.developerName, /* @__PURE__ */ new Map());
      if (populateDefaults) {
        this.userColumns.push(col.developerName);
      }
    });
    if (this.userColumns.indexOf("#BUTTONS#") < 0) {
      let outcomesPos = 0;
      switch (this.component.getAttribute("OutcomesPosition", "0").toLowerCase()) {
        case "first":
        case "start":
        case "0":
          outcomesPos = 0;
          break;
        case "last":
        case "end":
          outcomesPos = this.userColumns.length;
          break;
        default:
          try {
            outcomesPos = parseInt(this.component.getAttribute("OutcomesPosition", "0"));
            if (outcomesPos > this.userColumns.length) {
              outcomesPos = this.userColumns.length;
            }
          } catch (e) {
            console.log("OutcomesPosition had an invalid value");
            outcomesPos = 0;
          }
          break;
      }
      this.userColumns.splice(outcomesPos, 0, "#BUTTONS#");
    }
    if (this.dynamicColumns === true && populateDefaults === true) {
      await this.saveUserColumns();
    }
    let inlineSearch = true;
    if (!this.ribbonElement) {
      switch (this.component.getAttribute("RibbonStyle", "ribbon")) {
        case "search":
          this.ribbonElement = /* @__PURE__ */ React22.createElement(
            SearchFilterTableRibbonSearch,
            {
              key: "ribbon",
              root: this,
              ref: (element) => {
                this.setRibbon(element);
              }
            }
          );
          inlineSearch = false;
          break;
        case "ribbon":
        default:
          this.ribbonElement = /* @__PURE__ */ React22.createElement(
            SearchFilterTableRibbon,
            {
              key: "ribbon",
              root: this,
              ref: (element) => {
                this.setRibbon(element);
              }
            }
          );
          break;
      }
    }
    if (!this.headersElement) {
      this.headersElement = /* @__PURE__ */ React22.createElement(
        SearchFilterTableHeaders,
        {
          root: this,
          inlineSearch,
          ref: (element) => {
            this.setHeaders(element);
          }
        }
      );
    }
    if (!this.footerElement) {
      switch (this.component.getAttribute("FooterStyle", "default")) {
        case "default":
          this.footerElement = /* @__PURE__ */ React22.createElement(
            SearchFilterTableFooter,
            {
              root: this,
              ref: (element) => {
                this.setFooter(element);
              }
            }
          );
          break;
        case "nav":
          this.footerElement = /* @__PURE__ */ React22.createElement(
            SearchFilterTableFooterNav,
            {
              root: this,
              ref: (element) => {
                this.setFooter(element);
              }
            }
          );
          break;
      }
    }
    if (this.rowRememberColumn) {
      this.lastRememberedRow = sessionStorage.getItem("sft-lastrow-" + this.component.id);
    }
    await this.saveSelected();
    const end3 = /* @__PURE__ */ new Date();
    await this.loadSingleSelected();
    await this.filterRows();
  }
  async loadModelData() {
    let JSONStateName = this.component.getAttribute("JSONModelValue");
    let modelTypeName = this.component.getAttribute("ModelTypeName", "GetOpportunities RESPONSE - Opportunity");
    let model;
    if (JSONStateName) {
      let jsonField = await this.component.getValue(JSONStateName);
      let jsonString = jsonField.value;
      if (jsonString && jsonString.length > 0) {
        model = FlowObjectDataArray.fromJSONString(jsonField.value, this.component.getAttribute("JSONModelPrimaryKey"), this.component.columns, modelTypeName);
      }
    } else {
      model = this.component.objectData;
    }
    if (model) {
      const stateSelectedItems = await this.loadSelected();
      const isSelectedColumn = this.component.getAttribute("IsSelectedColumn");
      this.rowMap = /* @__PURE__ */ new Map();
      this.selectedRowMap = /* @__PURE__ */ new Map();
      this.rows = /* @__PURE__ */ new Map();
      model.items.forEach((item) => {
        var _a, _b;
        if (stateSelectedItems) {
          if (stateSelectedItems.has(item.internalId) && stateSelectedItems.get(item.internalId).isSelected === true) {
            this.selectedRowMap.set(item.internalId, void 0);
          }
        }
        if (item.isSelected === true || isSelectedColumn && (((_a = item.properties[isSelectedColumn]) == null ? void 0 : _a.value) === true || ((_b = item.properties[isSelectedColumn]) == null ? void 0 : _b.value) > 0)) {
          this.selectedRowMap.set(item.internalId, void 0);
        }
        const node = new RowItem();
        node.id = item.internalId;
        this.colMap.forEach((col) => {
          var _a2, _b2, _c;
          node.columns.set(col.developerName, new CellItem(col.developerName, (_a2 = item.properties[col.developerName]) == null ? void 0 : _a2.value));
          this.colValMap.get(col.developerName).set((_b2 = item.properties[col.developerName]) == null ? void 0 : _b2.value, (_c = item.properties[col.developerName]) == null ? void 0 : _c.value);
        });
        node.objectData = item;
        this.rowMap.set(node.id, node);
      });
      await this.saveSelected();
    }
  }
  // filters the currentRowMap
  async filterRows() {
    var _a, _b, _c;
    const start = /* @__PURE__ */ new Date();
    if ((_a = this.component) == null ? void 0 : _a.objectDataRequest) {
      let odr = this.component.objectDataRequest;
      let newOdr = JSON.parse(JSON.stringify(odr));
      newOdr.listFilter.where = [
        {
          columnName: "Filters",
          criteriaType: "EQUAL",
          value: this.filters.getForFSS()
        }
      ];
      let sortColumn = (_b = this.filters) == null ? void 0 : _b.getSortColumn();
      let XHR = this.component.requestObjectData(newOdr);
      await this.loadModelData();
      this.currentRowMap = /* @__PURE__ */ new Map();
      if (this.rowMap.size > 0) {
        this.rowMap.forEach((item, key) => {
          this.currentRowMap.set(key, item);
        });
      }
    } else {
      await this.loadModelData();
      this.currentRowMap = /* @__PURE__ */ new Map();
      if (this.rowMap.size > 0) {
        this.currentRowMap = this.filters.filter(this.rowMap);
      }
    }
    this.selectedRowMap.forEach((item, internalId) => {
      if (!this.currentRowMap.has(internalId)) {
      }
    });
    await this.loadSingleSelected();
    const end3 = /* @__PURE__ */ new Date();
    if ((_c = this.component) == null ? void 0 : _c.objectDataRequest) {
      this.paginateRows();
    } else {
      this.sortRows();
    }
  }
  // sorts the currentRowMap by getting the current sort column from filters
  sortRows() {
    const start = /* @__PURE__ */ new Date();
    if (this.currentRowMap.size > 0) {
      this.currentRowMap = this.filters.sort(this.currentRowMap, this.rowMap);
    }
    const end3 = /* @__PURE__ */ new Date();
    this.paginateRows();
  }
  // this goes through currentRowMap and splits them into pages based on maxPageRows
  paginateRows() {
    const start = /* @__PURE__ */ new Date();
    this.currentRowPages = [];
    let currentPage = /* @__PURE__ */ new Map();
    this.currentRowPage = 0;
    this.currentRowMap.forEach((item, key) => {
      var _a;
      let objData = this.rowMap.get(key).objectData;
      let objKey;
      if (this.lastRememberedRow) {
        objKey = "" + ((_a = objData.properties[this.rowRememberColumn]) == null ? void 0 : _a.value);
      }
      if (currentPage.size < this.maxPageRows || this.paginationMode !== 1 /* local */) {
        currentPage.set(key, item);
        if (objKey && this.lastRememberedRow && objKey === this.lastRememberedRow) {
          this.currentRowPage = this.currentRowPages.length;
        }
      } else {
        this.currentRowPages.push(currentPage);
        currentPage = /* @__PURE__ */ new Map();
        currentPage.set(key, item);
        if (objKey && this.lastRememberedRow && objKey === this.lastRememberedRow) {
          this.currentRowPage = this.currentRowPages.length;
        }
      }
    });
    this.currentRowPages.push(currentPage);
    const end3 = /* @__PURE__ */ new Date();
    this.buildTableRows();
  }
  async firstPage() {
    this.currentRowPage = 0;
    this.buildTableRows();
    this.forceUpdate();
  }
  previousPage() {
    switch (this.paginationMode) {
      case 1 /* local */:
        if (this.currentRowPage > 1) {
          this.currentRowPage -= 1;
        } else {
          this.currentRowPage = 0;
        }
        this.buildTableRows();
        this.forceUpdate();
        break;
      case 2 /* external */:
        if (this.previousPageOutcome && this.component.outcomes[this.previousPageOutcome]) {
          this.component.triggerOutcome(this.previousPageOutcome);
        }
        break;
    }
  }
  nextPage() {
    switch (this.paginationMode) {
      case 1 /* local */:
        if (this.currentRowPage < this.currentRowPages.length - 1) {
          this.currentRowPage += 1;
        } else {
          this.currentRowPage = this.currentRowPages.length - 1;
        }
        this.buildTableRows();
        this.forceUpdate();
        break;
      case 2 /* external */:
        if (this.nextPageOutcome && this.component.outcomes[this.nextPageOutcome]) {
          this.component.triggerOutcome(this.nextPageOutcome);
        }
        break;
    }
  }
  lastPage() {
    this.currentRowPage = this.currentRowPages.length - 1;
    this.buildTableRows();
    this.forceUpdate();
  }
  gotoPage(page) {
    this.currentRowPage = page - 1;
    this.buildTableRows();
    this.forceUpdate();
  }
  async selectRow(objData) {
    this.selectedRow = objData.externalId;
    await this.doOutcome("OnSelect", objData);
    this.buildRibbon();
    this.buildFooter();
    this.refreshRows();
  }
  refreshRows() {
    this.rows.forEach((row) => {
      row.forceUpdate();
    });
  }
  /////////////////////
  // toggles all rows selected status
  /////////////////////
  toggleSelectAll(event) {
    if (event.target.checked) {
      this.currentRowMap.forEach((item, key) => {
        this.selectedRowMap.set(key, "");
      });
    } else {
      this.selectedRowMap.clear();
    }
    this.rows.forEach((row) => {
      row.forceUpdate();
    });
    this.buildRibbon();
    this.buildFooter();
    this.saveSelected();
  }
  toggleSelect(event, key) {
    event.stopPropagation();
    if (event.target.checked) {
      this.selectedRowMap.set(key, "");
    } else {
      this.selectedRowMap.delete(key);
    }
    this.rows.get(key).forceUpdate();
    this.buildRibbon();
    this.buildFooter();
    this.saveSelected();
  }
  // store the selected items to state
  async saveSelected() {
    const selectedItems = new FlowObjectDataArray();
    this.selectedRowMap.forEach((item, key) => {
      const tItem = this.rowMap.get(key).objectData;
      tItem.isSelected = true;
      selectedItems.addItem(tItem);
    });
    this.component.setStateValue(selectedItems);
  }
  // load selected items from state
  async loadSelected() {
    let stateSelected;
    const selectedItems = this.component.getStateValue();
    if (selectedItems && selectedItems.items) {
      stateSelected = /* @__PURE__ */ new Map();
      for (let pos = 0; pos < selectedItems.items.length; pos++) {
        stateSelected.set(selectedItems.items[pos].internalId, selectedItems.items[pos]);
      }
    }
    return stateSelected;
  }
  //gets the single selected item from rowlevelstate
  async loadSingleSelected() {
    var _a, _b;
    this.selectedRow = void 0;
    if (this.component.getAttribute("RowLevelState", "").length > 0 && this.rowRememberColumn) {
      const rls = await this.component.getValue(this.component.getAttribute("RowLevelState"));
      if (rls.value) {
        for (let val of this.rowMap.values()) {
          let objData = val == null ? void 0 : val.objectData;
          if (((_a = rls.value.properties[this.rowRememberColumn]) == null ? void 0 : _a.value) === ((_b = objData.properties[this.rowRememberColumn]) == null ? void 0 : _b.value)) {
            this.selectedRow = objData.externalId;
          }
        }
      }
    }
  }
  /////////////////////////////////////////////////////////////////////
  // Builds the rowElements from the currentRowMap and forces a redraw
  ////////////////////////////////////////////////////////////////////
  async buildTableRows() {
    this.rowElements = [];
    if (this.currentRowMap && this.currentRowMap.size > 0 && this.currentRowPages && this.currentRowPages.length > 0 && this.currentRowPages[this.currentRowPage]) {
      this.currentRowPages[this.currentRowPage].forEach((node, key) => {
        this.rowElements.push(
          /* @__PURE__ */ React22.createElement(
            SearchFilterTableRow,
            {
              key,
              root: this,
              id: key,
              ref: (element) => {
                this.setRow(key, element);
              }
            }
          )
        );
      });
    } else {
      this.rowElements.push(
        /* @__PURE__ */ React22.createElement(
          "tr",
          {
            key: "none",
            className: "sft-table-row"
          },
          /* @__PURE__ */ React22.createElement("td", { colSpan: 1e3 }, /* @__PURE__ */ React22.createElement("div", { className: "sft-table-row-noresults" }, /* @__PURE__ */ React22.createElement("span", { className: "sft-table-row-noresults-title" }, this.component.getAttribute("noResults", "No Results Available")), this.filters.isFiltered() ? /* @__PURE__ */ React22.createElement("span", { className: "sft-table-row-noresults-subtitle" }, this.component.getAttribute("noResultsFilter", "( This may be due to the filters applied )")) : null))
        )
      );
    }
    this.buildRibbon();
    this.buildFooter();
    this.forceUpdate();
  }
  //////////////////////////////////////////////////////
  // builds title bar buttons based on attached outcomes
  //////////////////////////////////////////////////////
  buildRibbon() {
    var _a;
    (_a = this.ribbon) == null ? void 0 : _a.generateButtons();
  }
  //////////////////////////////////////////////////////
  // forces the footer to update
  //////////////////////////////////////////////////////
  buildFooter() {
    var _a;
    (_a = this.footer) == null ? void 0 : _a.forceUpdate();
  }
  //////////////////////////
  // constructs and shows context menu
  //////////////////////////
  showContextMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    const listItems = /* @__PURE__ */ new Map();
    if (this.contextMenu) {
      Object.keys(this.component.outcomes).forEach((key) => {
        var _a, _b;
        const outcome = this.component.outcomes[key];
        if (outcome.isBulkAction === true && outcome.developerName !== "OnSelect" && outcome.developerName.toLowerCase().startsWith("cm")) {
          if (!(((_a = outcome.attributes["RequiresSelected"]) == null ? void 0 : _a.value) === "true" && this.selectedRowMap.size < 1)) {
            listItems.set(outcome.developerName, /* @__PURE__ */ React22.createElement(
              "li",
              {
                className: "sft-cm-item",
                title: outcome.label || key,
                onClick: (e2) => {
                  e2.stopPropagation();
                  this.cmClick(key);
                }
              },
              /* @__PURE__ */ React22.createElement(
                "span",
                {
                  className: "glyphicon glyphicon-" + (((_b = outcome.attributes["icon"]) == null ? void 0 : _b.value) || "plus") + " sft-cm-item-icon"
                }
              ),
              /* @__PURE__ */ React22.createElement(
                "span",
                {
                  className: "sft-cm-item-label"
                },
                outcome.label || key
              )
            ));
          }
        }
      });
      const canExport = this.component.getAttribute("canExport", "true").toLowerCase() === "true";
      if (canExport) {
        listItems.set("exportall", /* @__PURE__ */ React22.createElement(
          "li",
          {
            className: "sft-cm-item",
            title: "Export All",
            onClick: (e2) => {
              e2.stopPropagation();
              this.doExport(this.rowMap);
            }
          },
          /* @__PURE__ */ React22.createElement(
            "span",
            {
              className: "glyphicon glyphicon-floppy-save sft-cm-item-icon"
            }
          ),
          /* @__PURE__ */ React22.createElement(
            "span",
            {
              className: "sft-cm-item-label"
            },
            "Export All"
          )
        ));
        listItems.set("exportshown", /* @__PURE__ */ React22.createElement(
          "li",
          {
            className: "sft-cm-item",
            title: "Export Search Results",
            onClick: (e2) => {
              e2.stopPropagation();
              this.doExport(this.currentRowMap);
            }
          },
          /* @__PURE__ */ React22.createElement(
            "span",
            {
              className: "glyphicon glyphicon-floppy-save sft-cm-item-icon"
            }
          ),
          /* @__PURE__ */ React22.createElement(
            "span",
            {
              className: "sft-cm-item-label"
            },
            "Export Shown"
          )
        ));
        if (this.selectedRowMap.size > 0) {
          listItems.set("exportselected", /* @__PURE__ */ React22.createElement(
            "li",
            {
              className: "sft-cm-item",
              title: "Export Selected Items",
              onClick: (e2) => {
                e2.stopPropagation();
                this.doExport(this.selectedRowMap);
              }
            },
            /* @__PURE__ */ React22.createElement(
              "span",
              {
                className: "glyphicon glyphicon-floppy-save sft-cm-item-icon"
              }
            ),
            /* @__PURE__ */ React22.createElement(
              "span",
              {
                className: "sft-cm-item-label"
              },
              "Export Selected"
            )
          ));
        }
      }
      this.contextMenu.showContextMenu(e.clientX, e.clientY, listItems);
      this.forceUpdate();
    }
  }
  async hideContextMenu() {
    this.contextMenu.hideContextMenu();
  }
  // a context menu item was clicked - the key will be the item's name
  cmClick(key) {
    this.doOutcome(key);
  }
  getTextValue(property) {
    switch (property.contentType) {
      case eContentType.ContentBoolean:
        if (property.value === true) {
          return "True";
        } else {
          return "False";
        }
      case eContentType.ContentNumber:
        return property.value.toString();
      default:
        return property.value;
    }
  }
  async doOutcome(outcomeName, selectedItem, ignoreRules) {
    var _a, _b, _c, _d, _e;
    if (typeof selectedItem === "string") {
      selectedItem = this.rowMap.get(selectedItem).objectData;
    }
    this.selectedRow = selectedItem == null ? void 0 : selectedItem.externalId;
    if (this.component.getAttribute("RowLevelState", "").length > 0 && selectedItem) {
      const val = await this.component.getValue(this.component.getAttribute("RowLevelState"));
      if (val) {
        val.value = selectedItem || new FlowObjectDataArray();
        await this.component.setValues(val);
      }
      if (this.rowRememberColumn) {
        sessionStorage.setItem("sft-lastrow-" + this.component.id, (_a = selectedItem.properties[this.rowRememberColumn]) == null ? void 0 : _a.value);
      }
    }
    if (this.component.outcomes[outcomeName]) {
      const outcome = this.component.outcomes[outcomeName];
      switch (true) {
        case ((_b = outcome.attributes["uri"]) == null ? void 0 : _b.value.length) > 0:
          let href = outcome.attributes["uri"].value;
          let match;
          while (match = RegExp(/{{([^}]*)}}/).exec(href)) {
            if (selectedItem && selectedItem.properties[match[1]]) {
              href = href.replace(match[0], selectedItem.properties[match[1]] ? this.getTextValue(selectedItem.properties[match[1]]) : "");
            } else {
              switch (match[1]) {
                case "TENANT_ID":
                  href = href.replace(match[0], this.component.tenantId);
                  break;
                default:
                  const fldElements = match[1].split("->");
                  const val = await this.component.getValue(fldElements[0]);
                  let value;
                  if (val) {
                    if (fldElements.length > 1) {
                      let od = val.value;
                      for (let epos = 1; epos < fldElements.length; epos++) {
                        od = od.properties[fldElements[epos]].value;
                      }
                      value = od;
                    } else {
                      value = val.value;
                    }
                  }
                  href = href.replace(match[0], value);
              }
            }
          }
          if (((_c = this.component.outcomes[outcomeName].attributes["target"]) == null ? void 0 : _c.value) === "_self") {
            window.location.href = href;
          } else {
            const tab = window.open("");
            if (tab) {
              tab.location.href = href;
            } else {
              console.log("Couldn't open a new tab");
            }
          }
          break;
        case (((_e = (_d = outcome.attributes) == null ? void 0 : _d.form) == null ? void 0 : _e.value.length) > 0 && ignoreRules !== true):
          const form = JSON.parse(outcome.attributes.form.value);
          const formProps = {
            id: this.component.id,
            okOutcome: this.okOutcomeForm,
            cancelOutcome: this.cancelOutcomeForm,
            objData: selectedItem,
            selectedItem,
            outcome,
            form,
            sft: this,
            component: this.component
          };
          const comp = manywho.component.getByName(form.class);
          const content = React22.createElement(comp, formProps);
          this.messageBox.showDialog(
            null,
            form.title,
            content,
            [new FCMModalButton("Ok", this.okOutcomeForm), new FCMModalButton("Cancel", this.cancelOutcomeForm)]
          );
          this.forceUpdate();
          break;
        default:
          this.component.triggerOutcome(outcomeName);
          break;
      }
    }
  }
  cancelOutcomeForm() {
    this.messageBox.hideDialog();
    this.form = null;
    this.forceUpdate();
  }
  async okOutcomeForm() {
    var _a;
    if (this.form.validate() === true) {
      const objData = await ((_a = this.form) == null ? void 0 : _a.makeObjectData());
      const outcome = this.form.props.outcome;
      const form = this.form.props.form;
      if (form.state && objData) {
        const state = await this.component.getValue(form.state);
        if (state) {
          state.value = objData;
          await this.component.setValues(state);
        }
      }
      this.messageBox.hideDialog();
      this.form = null;
      this.doOutcome(outcome.developerName, objData, true);
      this.forceUpdate();
    }
  }
  async doExport(data) {
    const opdata = /* @__PURE__ */ new Map();
    data.forEach((item, key) => {
      opdata.set(key, this.rowMap.get(key));
    });
    let cols;
    if (this.component.getAttribute("exportUserColumns", "false").toLowerCase() === "true") {
      cols = /* @__PURE__ */ new Map();
      this.userColumns.forEach((cname) => {
        if (this.colMap.has(cname)) {
          cols.set(cname, this.colMap.get(cname));
        }
      });
    } else {
      cols = this.colMap;
    }
    ModelExporter.export(cols, opdata, "export.csv");
    if (this.component.outcomes["OnExport"]) {
      this.component.triggerOutcome("OnExport");
    }
  }
  playVideo(title, dataUri, mimetype) {
    this.messageBox.showDialog(
      null,
      title,
      /* @__PURE__ */ React22.createElement(
        "video",
        {
          style: { width: "100%", minWidth: "10rem", height: "97%" },
          autoPlay: true,
          controls: true
        },
        /* @__PURE__ */ React22.createElement("source", { src: dataUri, type: mimetype }),
        "Your browser does not support the video tag."
      ),
      [new FCMModalButton("Close", this.messageBox.hideDialog)]
    );
  }
  playAudio(title, dataUri, mimetype) {
    this.messageBox.showDialog(
      null,
      title,
      /* @__PURE__ */ React22.createElement(
        "audio",
        {
          controls: true,
          autoPlay: true,
          style: { width: "100%", minWidth: "10rem", height: "97%" }
        },
        /* @__PURE__ */ React22.createElement("source", { src: dataUri, type: mimetype }),
        "Your browser does not support the audio tag."
      ),
      [new FCMModalButton("Close", this.messageBox.hideDialog)]
    );
  }
  render() {
    const classes = "sft " + this.component.getAttribute("classes", "");
    const style = {};
    style.width = "-webkit-fill-available";
    style.height = "-webkit-fill-available";
    if (this.component.isVisible === false) {
      style.display = "none";
    }
    if (this.component.attributes.width) {
      style.width = this.component.attributes.width;
    }
    if (this.component.attributes.height) {
      style.height = this.component.attributes.height;
    }
    const title = this.component.label || "";
    let body;
    if (this.loaded === false) {
      body = /* @__PURE__ */ React22.createElement(
        "div",
        {
          className: "sft-loading"
        },
        /* @__PURE__ */ React22.createElement(
          "div",
          {
            className: "sft-loading-inner",
            style: { margin: "auto", display: "flex", flexDirection: "column" }
          },
          this.component.attributes.LoadingIcon ? /* @__PURE__ */ React22.createElement("img", { className: "sft-loading-image", src: this.component.attributes.LoadingIcon }) : void 0,
          /* @__PURE__ */ React22.createElement(
            "span",
            {
              className: "sft-loading-label"
            },
            "Loading"
          )
        )
      );
    } else {
      body = /* @__PURE__ */ React22.createElement(
        "div",
        {
          className: "sft-scroller-body",
          ref: (element) => {
            this.tableBody = element;
          }
        },
        /* @__PURE__ */ React22.createElement(
          "table",
          {
            style: { minWidth: "100%" }
          },
          /* @__PURE__ */ React22.createElement("thead", null, this.headersElement),
          /* @__PURE__ */ React22.createElement("tbody", null, this.rowElements),
          /* @__PURE__ */ React22.createElement("tfoot", null)
        )
      );
    }
    return /* @__PURE__ */ React22.createElement(
      "div",
      {
        id: this.component.id,
        key: this.component.id,
        className: classes,
        style,
        onContextMenu: this.showContextMenu
      },
      /* @__PURE__ */ React22.createElement(
        FCMModal,
        {
          parent: this,
          ref: (element) => {
            this.messageBox = element;
          }
        }
      ),
      /* @__PURE__ */ React22.createElement(
        FCMContextMenu,
        {
          parent: this,
          ref: (element) => {
            this.contextMenu = element;
          }
        }
      ),
      this.titleElement,
      this.ribbonElement,
      /* @__PURE__ */ React22.createElement(
        "div",
        {
          className: "sft-body"
        },
        /* @__PURE__ */ React22.createElement(
          "div",
          {
            className: "sft-scroller",
            ref: (element) => {
              this.scroller = element;
            }
          },
          body
        )
      ),
      this.footerElement
    );
  }
};

// src/SFTMessageBox.tsx
var React23 = __toESM(require_react());
var SFTMessageBox = class extends React23.Component {
  constructor(props) {
    super(props);
    this.content = /* @__PURE__ */ React23.createElement(
      "img",
      {
        src: "https://files-manywho-com.s3.amazonaws.com/8f6d2e19-efc9-4ebc-b70e-616396f7184e/loading-icon-transparent-background-12.jpg"
      }
    );
    this.validate = this.validate.bind(this);
    this.makeObjectData = this.makeObjectData.bind(this);
    this.props.sft.form = this;
  }
  async componentDidMount() {
    let sft = this.props.sft;
    this.forceUpdate();
  }
  validate() {
    let valid = true;
    return valid;
  }
  async makeObjectData() {
    return null;
  }
  render() {
    let outcome = this.props.outcome;
    let form = this.props.form;
    let icon3 = "glyphicon glyphicon-" + (form.icon || "exclamation-sign") + " sft-dlg-icon";
    let msgStr = "Deletion is a permanent action.  Please confirm ?";
    msgStr = form.message || msgStr;
    let msgRows = [];
    let msgLines = msgStr.split("/n");
    msgLines.forEach((line) => {
      msgRows.push(
        /* @__PURE__ */ React23.createElement(
          "span",
          {
            className: "sft-dlg-row"
          },
          line.trim()
        )
      );
    });
    this.content = /* @__PURE__ */ React23.createElement(
      "div",
      {
        className: "sft-dlg"
      },
      /* @__PURE__ */ React23.createElement(
        "div",
        {
          className: "sft-dlg-body"
        },
        /* @__PURE__ */ React23.createElement(
          "div",
          {
            className: "sft-dlg-body-icon"
          },
          /* @__PURE__ */ React23.createElement("span", { className: icon3 })
        ),
        /* @__PURE__ */ React23.createElement(
          "div",
          {
            className: "sft-dlg-body-message"
          },
          msgRows
        )
      )
    );
    return this.content;
  }
};
manywho.component.register("SFTMessageBox", SFTMessageBox);

// src/SFTLegacy.tsx
var SearchFilterTable = class extends FCMLegacy {
  componentDidMount() {
    if (this.childComponent && this.childComponent.componentDidMount) {
      this.childComponent.componentDidMount();
    }
  }
  render() {
    return /* @__PURE__ */ React24.createElement(
      SFT3,
      {
        key: this.id,
        parent: this,
        ref: (element) => {
          this.childComponent = element;
        }
      }
    );
  }
};
manywho.component.register("SearchFilterTable", SearchFilterTable);
manywho.component.register("SFTMessageBox", SFTMessageBox);
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react.development.js:
  (** @license React v16.14.0
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
