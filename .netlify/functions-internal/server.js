var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/hakonmartinholmsenkrogh/www/crystallize-remix-100/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ACR2SIF4.css";

// route:/Users/hakonmartinholmsenkrogh/www/crystallize-remix-100/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({
  charset: "utf-8",
  title: "\u26A1\uFE0F",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "text-gray-900"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", {
    className: "container mx-auto p-8 sm:px-6 max-w-7xl mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    prefetch: "intent",
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/logo.svg",
    alt: "dounot logo",
    className: "block"
  }))), children);
}

// route:/Users/hakonmartinholmsenkrogh/www/crystallize-remix-100/app/routes/$product.tsx
var product_exports = {};
__export(product_exports, {
  default: () => Product,
  loader: () => loader
});
init_react();
var import_react_content_transformer = require("@crystallize/react-content-transformer");
var import_react_image = require("@crystallize/react-image");
var import_remix3 = __toESM(require_remix());

// app/components/price.tsx
init_react();
var Price = (_a) => {
  var _b = _a, { productVariant } = _b, rest = __objRest(_b, ["productVariant"]);
  return /* @__PURE__ */ React.createElement("span", __spreadValues({}, rest), new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR"
  }).format(productVariant.price));
};

// app/hooks/tailwind.ts
init_react();
function useScreens() {
  return {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  };
}

// route:/Users/hakonmartinholmsenkrogh/www/crystallize-remix-100/app/routes/$product.tsx
async function loader({ params }) {
  const response = await fetch("https://api.crystallize.com/learning-with-jason-prep/catalogue", {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `
        {
          catalogue(path: "/${params.product}") {
            path
            name
            ... on Product {
              defaultVariant {
                price
                firstImage {
                  url
                  altText
                  variants {
                    width
                    height
                    size
                    url
                  }
                }
              }

              description: component(id: "description") {
                content {
                  ... on ParagraphCollectionContent {
                    paragraphs {
                      title { text }
                      body { json }
                      images {
                        url
                        altText
                        variants {
                          width
                          height
                          size
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
    })
  });
  return (0, import_remix3.json)(await response.json().then((c) => c.data.catalogue));
}
function Product() {
  var _a;
  const product = (0, import_remix3.useLoaderData)();
  const screens = useScreens();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto max-w-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl mb-5"
  }, product.name), /* @__PURE__ */ React.createElement(Price, {
    productVariant: product.defaultVariant,
    className: "text-xl"
  })), /* @__PURE__ */ React.createElement(import_react_image.Image, __spreadValues({}, product.defaultVariant.firstImage))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-slate-100 p-6 sm:p-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto max-w-xl"
  }, (_a = product.description.content) == null ? void 0 : _a.paragraphs.map((paragraph, index) => {
    var _a2, _b;
    const title = (_a2 = paragraph.title) == null ? void 0 : _a2.text;
    const body = (_b = paragraph.body) == null ? void 0 : _b.json;
    const images = paragraph.images || [];
    return /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: "mb-12"
    }, title ? /* @__PURE__ */ React.createElement("h2", {
      className: "text-xl mb-6"
    }, title) : null, body ? /* @__PURE__ */ React.createElement(import_react_content_transformer.ContentTransformer, {
      json: body
    }) : null, images.map((image) => /* @__PURE__ */ React.createElement(import_react_image.Image, __spreadProps(__spreadValues({
      className: "mt-6",
      key: image.url
    }, image), {
      sizes: `(min-width: ${screens.md} 100vw - ) 100wv`
    }))));
  }))));
}

// route:/Users/hakonmartinholmsenkrogh/www/crystallize-remix-100/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_react_image2 = require("@crystallize/react-image");
var import_remix4 = __toESM(require_remix());
async function loader2() {
  const response = await fetch("https://api.crystallize.com/learning-with-jason-prep/catalogue", {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `
        {
          catalogue(path: "/") {
            children {
              path
              name
              ... on Product {
                defaultVariant {
                  price
                  firstImage {
                    url
                    altText
                    variants {
                      width
                      height
                      size
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `
    })
  });
  return (0, import_remix4.json)(await response.json().then((c) => c.data.catalogue.children));
}
function Index() {
  const products = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto p-8 sm:px-6 max-w-7xl"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-row flex-wrap"
  }, products.map((p) => /* @__PURE__ */ React.createElement("li", {
    key: p.path,
    className: "flex w-1/2 md:w-1/3"
  }, /* @__PURE__ */ React.createElement(ProductCard, {
    product: p
  })))));
}
function ProductCard({ product }) {
  const screens = useScreens();
  return /* @__PURE__ */ React.createElement(import_remix4.Link, {
    prefetch: "intent",
    to: product.path,
    className: "block flex flex-col justify-between"
  }, /* @__PURE__ */ React.createElement(import_react_image2.Image, __spreadProps(__spreadValues({}, product.defaultVariant.firstImage), {
    className: "block w-full",
    sizes: `(min-width: ${screens.md}) 33vw - calc(calc(100vw - ${screens.md}) / 3), 50vw`
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg text-center mt-2"
  }, product.name), /* @__PURE__ */ React.createElement(Price, {
    productVariant: product.defaultVariant
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "42b6a5e8", "entry": { "module": "/build/entry.client-6HPPIHYI.js", "imports": ["/build/_shared/chunk-3RCOWZCY.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-66W2Y5SY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$product": { "id": "routes/$product", "parentId": "root", "path": ":product", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$product-65GU6AGQ.js", "imports": ["/build/_shared/chunk-OWRBJ4VH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-S6ZJUZ3X.js", "imports": ["/build/_shared/chunk-OWRBJ4VH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-42B6A5E8.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$product": {
    id: "routes/$product",
    parentId: "root",
    path: ":product",
    index: void 0,
    caseSensitive: void 0,
    module: product_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "production"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
