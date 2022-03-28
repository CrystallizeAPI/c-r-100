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
var tailwind_default = "/build/_assets/tailwind-PXISRCP2.css";

// route:/Users/hakonmartinholmsenkrogh/www/crystallize-remix-100/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({
  charset: "utf-8",
  title: "Donuts",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MWTR635');
        `
    }
  })), /* @__PURE__ */ React.createElement("body", {
    className: "text-gray-900"
  }, /* @__PURE__ */ React.createElement("noscript", null, /* @__PURE__ */ React.createElement("iframe", {
    src: "https://www.googletagmanager.com/ns.html?id=GTM-MWTR635",
    height: "0",
    width: "0",
    title: "GTM",
    style: { display: "none", visibility: "hidden" }
  })), /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", {
    className: "container mx-auto p-8 sm:px-6 max-w-7xl mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    prefetch: "intent",
    to: "/",
    className: "text-6xl"
  }, "\u{1F369}")), children);
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
  })), /* @__PURE__ */ React.createElement(import_react_image.Image, __spreadProps(__spreadValues({}, product.defaultVariant.firstImage), {
    className: "my-6",
    sizes: "450px",
    loading: "eager"
  }))), /* @__PURE__ */ React.createElement("div", {
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
      loading: "lazy",
      sizes: `(min-width: ${screens.md}) 580px, 100wv`
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
var assets_manifest_default = { "version": "982b1ffd", "entry": { "module": "/build/entry.client-AXRDDHA3.js", "imports": ["/build/_shared/chunk-NXDPIAF3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-LHA3MQQI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$product": { "id": "routes/$product", "parentId": "root", "path": ":product", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$product-LP4GS2WS.js", "imports": ["/build/_shared/chunk-LLRAMJ73.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HYDLDVAE.js", "imports": ["/build/_shared/chunk-LLRAMJ73.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-982B1FFD.js" };

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
  mode: "development"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2hha29ubWFydGluaG9sbXNlbmtyb2doL3d3dy9jcnlzdGFsbGl6ZS1yZW1peC0xMDAvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9oYWtvbm1hcnRpbmhvbG1zZW5rcm9naC93d3cvY3J5c3RhbGxpemUtcmVtaXgtMTAwL2FwcC9yb3V0ZXMvJHByb2R1Y3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL3ByaWNlLnRzeCIsICIuLi8uLi9hcHAvaG9va3MvdGFpbHdpbmQudHMiLCAicm91dGU6L1VzZXJzL2hha29ubWFydGluaG9sbXNlbmtyb2doL3d3dy9jcnlzdGFsbGl6ZS1yZW1peC0xMDAvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgbGV0IGF1dGhIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXTtcbiAgbGV0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgbGV0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyLFxuICB9O1xuXG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3Qua2V5cyhsb2FkQ29udGV4dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2hha29ubWFydGluaG9sbXNlbmtyb2doL3d3dy9jcnlzdGFsbGl6ZS1yZW1peC0xMDAvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2hha29ubWFydGluaG9sbXNlbmtyb2doL3d3dy9jcnlzdGFsbGl6ZS1yZW1peC0xMDAvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9oYWtvbm1hcnRpbmhvbG1zZW5rcm9naC93d3cvY3J5c3RhbGxpemUtcmVtaXgtMTAwL2FwcC9yb3V0ZXMvJHByb2R1Y3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9oYWtvbm1hcnRpbmhvbG1zZW5rcm9naC93d3cvY3J5c3RhbGxpemUtcmVtaXgtMTAwL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy8kcHJvZHVjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvJHByb2R1Y3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOnByb2R1Y3RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTGluayxcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0YWlsd2luZFN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRhaWx3aW5kU3R5bGVzIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJEb251dHNcIixcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgKGZ1bmN0aW9uKHcsZCxzLGwsaSl7d1tsXT13W2xdfHxbXTt3W2xdLnB1c2goeydndG0uc3RhcnQnOlxuICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXG4gICAgICAgIGo9ZC5jcmVhdGVFbGVtZW50KHMpLGRsPWwhPSdkYXRhTGF5ZXInPycmbD0nK2w6Jyc7ai5hc3luYz10cnVlO2ouc3JjPVxuICAgICAgICAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScraStkbDtmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosZik7XG4gICAgICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywnR1RNLU1XVFI2MzUnKTtcbiAgICAgICAgYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD1HVE0tTVdUUjYzNVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMFwiXG4gICAgICAgICAgICB0aXRsZT1cIkdUTVwiXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9fVxuICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC04IHNtOnB4LTYgbWF4LXctN3hsIG1iLTRcIj5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2g9XCJpbnRlbnRcIiB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LTZ4bFwiPlxuICAgICAgICAgIFx1RDgzQ1x1REY2OVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBDb250ZW50VHJhbnNmb3JtZXIgfSBmcm9tIFwiQGNyeXN0YWxsaXplL3JlYWN0LWNvbnRlbnQtdHJhbnNmb3JtZXJcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjcnlzdGFsbGl6ZS9yZWFjdC1pbWFnZVwiO1xuaW1wb3J0IHsganNvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgUHJpY2UgfSBmcm9tIFwifi9jb21wb25lbnRzL3ByaWNlXCI7XG5pbXBvcnQgeyB1c2VTY3JlZW5zIH0gZnJvbSBcIi4uL2hvb2tzL3RhaWx3aW5kXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyBwYXJhbXMgfTogeyBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gfSkge1xuICAvLyBHZXQgc29tZSBkb251dHNcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLmNyeXN0YWxsaXplLmNvbS9sZWFybmluZy13aXRoLWphc29uLXByZXAvY2F0YWxvZ3VlXCIsXG4gICAge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVyeTogYFxuICAgICAgICB7XG4gICAgICAgICAgY2F0YWxvZ3VlKHBhdGg6IFwiLyR7cGFyYW1zLnByb2R1Y3R9XCIpIHtcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIC4uLiBvbiBQcm9kdWN0IHtcbiAgICAgICAgICAgICAgZGVmYXVsdFZhcmlhbnQge1xuICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgZmlyc3RJbWFnZSB7XG4gICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIHNpemVcbiAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNvbXBvbmVudChpZDogXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAuLi4gb24gUGFyYWdyYXBoQ29sbGVjdGlvbkNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSB7IHRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgIGJvZHkgeyBqc29uIH1cbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIH0pLFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4ganNvbihhd2FpdCByZXNwb25zZS5qc29uKCkudGhlbigoYykgPT4gYy5kYXRhLmNhdGFsb2d1ZSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KCkge1xuICBjb25zdCBwcm9kdWN0ID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCBzY3JlZW5zID0gdXNlU2NyZWVucygpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICB7LyogUHJvZHVjdCBuYW1lLCBwcmljZSBhbmQgaW1hZ2UgaGVyZSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXctbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi01XCI+e3Byb2R1Y3QubmFtZX08L2gxPlxuICAgICAgICAgIDxQcmljZSBwcm9kdWN0VmFyaWFudD17cHJvZHVjdC5kZWZhdWx0VmFyaWFudH0gY2xhc3NOYW1lPVwidGV4dC14bFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW1hZ2Ugey4uLnByb2R1Y3QuZGVmYXVsdFZhcmlhbnQuZmlyc3RJbWFnZX0gY2xhc3NOYW1lPVwibXktNlwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFByb2R1Y3Qgc3RvcnkgaGVyZSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIHAtNiBzbTpwLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXcteGxcIj5cbiAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbi5jb250ZW50Py5wYXJhZ3JhcGhzLm1hcChcbiAgICAgICAgICAgIChwYXJhZ3JhcGg6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHBhcmFncmFwaC50aXRsZT8udGV4dDtcbiAgICAgICAgICAgICAgY29uc3QgYm9keSA9IHBhcmFncmFwaC5ib2R5Py5qc29uO1xuICAgICAgICAgICAgICBjb25zdCBpbWFnZXMgPSBwYXJhZ3JhcGguaW1hZ2VzIHx8IFtdO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi0xMlwiPlxuICAgICAgICAgICAgICAgICAge3RpdGxlID8gPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWItNlwiPnt0aXRsZX08L2gyPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICB7Ym9keSA/IDxDb250ZW50VHJhbnNmb3JtZXIganNvbj17Ym9keX0gLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNlwiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIHNpemVzPXtgKG1pbi13aWR0aDogJHtzY3JlZW5zLm1kfSAxMDB2dyAtICkgMTAwd3ZgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxhbnk+IHtcbiAgcHJvZHVjdFZhcmlhbnQ6IHtcbiAgICBwcmljZTogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUHJpY2U6IEZDPFByb3BzPiA9ICh7IHByb2R1Y3RWYXJpYW50LCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiB7Li4ucmVzdH0+XG4gICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tR0JcIiwge1xuICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICBjdXJyZW5jeTogXCJFVVJcIixcbiAgICAgIH0pLmZvcm1hdChwcm9kdWN0VmFyaWFudC5wcmljZSl9XG4gICAgPC9zcGFuPlxuICApO1xufTtcbiIsICIvLyBpbXBvcnQgcmVzb2x2ZUNvbmZpZyBmcm9tIFwidGFpbHdpbmRjc3MvcmVzb2x2ZUNvbmZpZ1wiO1xuLy8gaW1wb3J0IHRhaWx3aW5kQ29uZmlnIGZyb20gXCIuLi90YWlsd2luZC5jb25maWcuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNjcmVlbnMoKSB7XG4gIC8vIHJldHVybiByZXNvbHZlQ29uZmlnKHRhaWx3aW5kQ29uZmlnKS50aGVtZS5zY3JlZW5zO1xuICByZXR1cm4ge1xuICAgIHNtOiBcIjY0MHB4XCIsXG4gICAgbWQ6IFwiNzY4cHhcIixcbiAgICBsZzogXCIxMDI0cHhcIixcbiAgICB4bDogXCIxMjgwcHhcIixcbiAgICBcIjJ4bFwiOiBcIjE1MzZweFwiLFxuICB9O1xufVxuIiwgImltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjcnlzdGFsbGl6ZS9yZWFjdC1pbWFnZVwiO1xuaW1wb3J0IHsganNvbiwgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgUHJpY2UgfSBmcm9tIFwifi9jb21wb25lbnRzL3ByaWNlXCI7XG5pbXBvcnQgeyB1c2VTY3JlZW5zIH0gZnJvbSBcIi4uL2hvb2tzL3RhaWx3aW5kXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIC8vIEdldCBzb21lIGRvbnV0c1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkuY3J5c3RhbGxpemUuY29tL2xlYXJuaW5nLXdpdGgtamFzb24tcHJlcC9jYXRhbG9ndWVcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgIHtcbiAgICAgICAgICBjYXRhbG9ndWUocGF0aDogXCIvXCIpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuIHtcbiAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIC4uLiBvbiBQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFyaWFudCB7XG4gICAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgICAgZmlyc3RJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgIHNpemVcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIH0pLFxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIGpzb24oYXdhaXQgcmVzcG9uc2UuanNvbigpLnRoZW4oKGMpID0+IGMuZGF0YS5jYXRhbG9ndWUuY2hpbGRyZW4pKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC04IHNtOnB4LTYgbWF4LXctN3hsXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIj5cbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cC5wYXRofSBjbGFzc05hbWU9XCJmbGV4IHctMS8yIG1kOnctMS8zXCI+XG4gICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdD17cH0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3QgfTogeyBwcm9kdWN0OiBhbnkgfSkge1xuICBjb25zdCBzY3JlZW5zID0gdXNlU2NyZWVucygpO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgIHRvPXtwcm9kdWN0LnBhdGh9XG4gICAgICBjbGFzc05hbWU9XCJibG9jayBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiXG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHsuLi5wcm9kdWN0LmRlZmF1bHRWYXJpYW50LmZpcnN0SW1hZ2V9XG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbFwiXG4gICAgICAgIHNpemVzPXtgKG1pbi13aWR0aDogJHtzY3JlZW5zLm1kfSkgMzN2dyAtIGNhbGMoY2FsYygxMDB2dyAtICR7c2NyZWVucy5tZH0pIC8gMyksIDUwdndgfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1jZW50ZXIgbXQtMlwiPntwcm9kdWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgPFByaWNlIHByb2R1Y3RWYXJpYW50PXtwcm9kdWN0LmRlZmF1bHRWYXJpYW50fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6Jzk4MmIxZmZkJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1BWFJEREhBMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTlhEUElBRjMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUxIQTNNUVFJLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvJHByb2R1Y3QnOnsnaWQnOidyb3V0ZXMvJHByb2R1Y3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonOnByb2R1Y3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvJHByb2R1Y3QtTFA0R1MyV1MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMUkFNSjczLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUhZRExEVkFFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MTFJBTUo3My5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOTgyQjFGRkQuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtB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
