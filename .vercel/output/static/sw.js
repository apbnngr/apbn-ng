/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-5357ef54'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "_astro/404.32edc85b.css",
    "revision": null
  }, {
    "url": "_astro/global.657d22a6.css",
    "revision": null
  }, {
    "url": "_astro/hoisted.d61f2ca0.js",
    "revision": null
  }, {
    "url": "_astro/intlTelInput.min.123cd124.css",
    "revision": null
  }, {
    "url": "_astro/Layout.astro_astro_type_script_index_0_lang.6ea5b3d3.js",
    "revision": null
  }, {
    "url": "_astro/Layout.astro_astro_type_script_index_1_lang.6170ca61.js",
    "revision": null
  }, {
    "url": "_astro/Layout.astro_astro_type_script_index_2_lang.392b6dab.js",
    "revision": null
  }, {
    "url": "_astro/register.a757f6f7.css",
    "revision": null
  }, {
    "url": "_astro/workbox-window.prod.es5.a7b12eab.js",
    "revision": null
  }, {
    "url": "1290x268.png",
    "revision": "49de51ede7be28aeb5b2efc8f131b402"
  }, {
    "url": "452x452.png",
    "revision": "c5a5a8915a1f3c0c8aba25982edc88a2"
  }, {
    "url": "admin",
    "revision": "9c461cd4346a2232416e0ade0560b594"
  }, {
    "url": "admin/netlify-identity-widget.js",
    "revision": "b14e0a52b68463cf5e1264715f021179"
  }, {
    "url": "admin/staticcms.css",
    "revision": "e54f9b506b374de8d7ecebebfb374ddc"
  }, {
    "url": "android-chrome-192x192.png",
    "revision": "f991332fedce416264a28137c904e3dc"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "f5adb00ef07d04b786e19e4b0e61ab0c"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "905f70b3870cb435ab13764a7d75d19f"
  }, {
    "url": "assets/apbn_logo_boolean.svg",
    "revision": "3fd925621ca114fd85ec7375afd333cb"
  }, {
    "url": "assets/apbn_logo.svg",
    "revision": "bfd6fa9ae01b8a67330e84bdaa36b6dd"
  }, {
    "url": "assets/apbn-logo-original.png",
    "revision": "80b825dc7a5a4e10b1923239b9649bc4"
  }, {
    "url": "assets/binoculars_in_dark_mode.svg",
    "revision": "4e045ba8e38a6f8b92cc85a8acfe6d30"
  }, {
    "url": "assets/binoculars_in_white_mode.svg",
    "revision": "afaaeef91274c185bb9e1c96a186f837"
  }, {
    "url": "assets/binoculars.svg",
    "revision": "8437ae9f92daa96be00341ebc1cca0f2"
  }, {
    "url": "assets/broadcast.svg",
    "revision": "a14e3e0e11ffb53527383a709092bbd9"
  }, {
    "url": "assets/icon_512x512.png",
    "revision": "18971ce73c5dcf49d5be58f5f650458d"
  }, {
    "url": "assets/logo_512x512.png",
    "revision": "81ffc482b2be8d79d0ede9a8eca3f393"
  }, {
    "url": "assets/logo-white.svg",
    "revision": "6f9d6a567d3cb6f547c791513af29e46"
  }, {
    "url": "banner_1920x1080.png",
    "revision": "665e75a85fe21447a307dfee4e169905"
  }, {
    "url": "favicon-16x16.png",
    "revision": "af64099810ba206fa495693e901ba1ec"
  }, {
    "url": "favicon-32x32.png",
    "revision": "8b86cf434c427220a352c5a9014a5ab9"
  }, {
    "url": "favicon.ico",
    "revision": "7b44591e8f893e628ced73742f3b6b9d"
  }, {
    "url": "favicon.svg",
    "revision": "2e60239ba96db0b94a6fedcc58e5631d"
  }, {
    "url": "icon-192x192.png",
    "revision": "7c91c7aa70cd591bce3791f864ba76d1"
  }, {
    "url": "icon-256x256.png",
    "revision": "e90dc375ff7780e35f87d24d9ccadc7d"
  }, {
    "url": "icon-384x384.png",
    "revision": "a4087c4467f1943a863fa86507f2b805"
  }, {
    "url": "icon-512x512.png",
    "revision": "f12cae44a6bb6afd852680c2472f586c"
  }, {
    "url": "img/flags.png",
    "revision": "416250f60d785a2e02f17e054d2e4e44"
  }, {
    "url": "img/flags@2x.png",
    "revision": "d429a5777afaf2fc349652e812e9bb11"
  }, {
    "url": "mstile-150x150.png",
    "revision": "1302ecc41f6f650a7fd2b6875b8d365f"
  }, {
    "url": "robots.txt",
    "revision": "1a8c599a2d9627c61295a9284f38622b"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "b90d91cdb4c6b10791299d6a4c23d300"
  }, {
    "url": "youtube.svg",
    "revision": "ffea5e2ce4fcdb7c3656d9767d3d1239"
  }, {
    "url": "favicon.ico",
    "revision": "7b44591e8f893e628ced73742f3b6b9d"
  }, {
    "url": "manifest.webmanifest",
    "revision": "3dd45220eac66f39b5ebfc7f4b482f57"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/404")));

}));
