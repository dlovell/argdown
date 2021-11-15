/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fa8cace34be3983429e2238dabc4c70b"
  },
  {
    "url": "agree-icon.svg",
    "revision": "a8e3436592aff8067dd9bd4a34908184"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b234c1cf1ae1958f111579509cf52ee"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "d257d914052dc3409eeeab27caa4267c"
  },
  {
    "url": "api/index.html",
    "revision": "9ce56f89f161a99162eb63fc75548ac3"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b731ba118d89e5652404d9e9d82a219e"
  },
  {
    "url": "argdown-arrow-white.svg",
    "revision": "188460ee31d1efa9eda2e89c485777ca"
  },
  {
    "url": "argdown-arrow.png",
    "revision": "16eb1c797a9fabfb08ad373009309b26"
  },
  {
    "url": "argdown-map.css",
    "revision": "9780c99f378c91beae8da16d5631b2a0"
  },
  {
    "url": "argdown-map.js",
    "revision": "2ca1ff1688e272e77dd0cafdbf7036d2"
  },
  {
    "url": "argdown-mark.svg",
    "revision": "d3c4d784d8cc12c1cf9ccc4cdc149b13"
  },
  {
    "url": "argdown-viewer.js",
    "revision": "22c390fc8c2b3b18f4a837fd8e616656"
  },
  {
    "url": "assets/css/0.styles.d44408e3.css",
    "revision": "023f7da37d7e4d71c7a14572b24b5801"
  },
  {
    "url": "assets/img/argdown-vscode-greenspan-1.b6e85ee0.png",
    "revision": "b6e85ee01e7079435dfd9877642b01b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bce1ef07.js",
    "revision": "eb53703d0ffbf0bef5c79155832876ad"
  },
  {
    "url": "assets/js/11.85cbcf59.js",
    "revision": "4c4b3c667128a45c0d33821cdcd91b21"
  },
  {
    "url": "assets/js/12.e422cfc7.js",
    "revision": "2a2f89fcfa9572bbafe06f26bb7b6d0e"
  },
  {
    "url": "assets/js/13.839cb0f3.js",
    "revision": "4e177e18a15b484a66694c74196d193a"
  },
  {
    "url": "assets/js/14.c799e084.js",
    "revision": "840e153f8fb959d07543dbc830f2d302"
  },
  {
    "url": "assets/js/15.abbcfdfa.js",
    "revision": "47cd7a7a81be60d653b797280d6a1289"
  },
  {
    "url": "assets/js/16.66655fc3.js",
    "revision": "68ba0bb57e69f6fde9f77710a1393836"
  },
  {
    "url": "assets/js/17.b4388f13.js",
    "revision": "e628d0768c5a7219c9d44205125a1f5f"
  },
  {
    "url": "assets/js/18.2c158d2b.js",
    "revision": "d75a2eb5c6d7ceb5b584be191df0ed6a"
  },
  {
    "url": "assets/js/19.3b0d426a.js",
    "revision": "d5d7c7a924fc4e5eaa9d64080512aa1f"
  },
  {
    "url": "assets/js/20.47b1b51d.js",
    "revision": "823e9dcc2a8e0f8ecf0961d162550bb8"
  },
  {
    "url": "assets/js/21.fc7b8e02.js",
    "revision": "fe95ddf0a34baf679ce3e89f5f0ae423"
  },
  {
    "url": "assets/js/22.e23c34b0.js",
    "revision": "a33c9228ee7470ef017295ccd566514a"
  },
  {
    "url": "assets/js/23.7c846710.js",
    "revision": "f23882ab4c9ee8e51279498ce188e558"
  },
  {
    "url": "assets/js/24.8070ea8d.js",
    "revision": "1d985d6d27094db688da411766818a7c"
  },
  {
    "url": "assets/js/25.a9a8ddc3.js",
    "revision": "98b764f34984c37130fbd1047465a5e1"
  },
  {
    "url": "assets/js/26.902d3fd5.js",
    "revision": "ed1615b8e7a83169a3f95f6ffa6728f3"
  },
  {
    "url": "assets/js/27.9ebf4a04.js",
    "revision": "f2def159536c88dbf61e2677817ab29e"
  },
  {
    "url": "assets/js/28.24ae0a27.js",
    "revision": "7143a91b71e387471290df2ae52c5889"
  },
  {
    "url": "assets/js/29.a1c59d34.js",
    "revision": "bb3555d62e0e5a7c711ba0e1809ed616"
  },
  {
    "url": "assets/js/3.275776de.js",
    "revision": "bb9089d512a41a72b5d9f8872e90ec8a"
  },
  {
    "url": "assets/js/30.28cd0d45.js",
    "revision": "93c940fb80769ec8cbdef81aca6acbd1"
  },
  {
    "url": "assets/js/31.c6867fcd.js",
    "revision": "2d1700e7e6e87513295650c34e2cb45e"
  },
  {
    "url": "assets/js/32.41c457b8.js",
    "revision": "751a6aab039c4953b78c29f3156cfe2f"
  },
  {
    "url": "assets/js/33.941b70ec.js",
    "revision": "f5b975f7f35931fc0eef094b56bf65a6"
  },
  {
    "url": "assets/js/34.730911c8.js",
    "revision": "28392dbd002366e843d4bc1fe0f70512"
  },
  {
    "url": "assets/js/35.58030383.js",
    "revision": "d29c9d23331f41930c9dd403358b701e"
  },
  {
    "url": "assets/js/36.81cb78b6.js",
    "revision": "4c9f6e7a5cf84f512e599c0535dc85c1"
  },
  {
    "url": "assets/js/37.88d84f8b.js",
    "revision": "956791d2e40ff4246be0ff3b32a3775b"
  },
  {
    "url": "assets/js/38.ce082b49.js",
    "revision": "578f3a237665d115bef47d73683ba71a"
  },
  {
    "url": "assets/js/39.fbc7a5ce.js",
    "revision": "86bc243b5eb1c5d7f4b3f19abb733151"
  },
  {
    "url": "assets/js/4.b53bd676.js",
    "revision": "399973cd85cec1244cc569178b406ed2"
  },
  {
    "url": "assets/js/40.731950c5.js",
    "revision": "11f32011db68f9dc25b8866cac6857d6"
  },
  {
    "url": "assets/js/41.81be052c.js",
    "revision": "878f7e947e14da5ea8c48d81a807725d"
  },
  {
    "url": "assets/js/42.c76fa786.js",
    "revision": "29cbab5b399fc48c324fd62d8f51b890"
  },
  {
    "url": "assets/js/43.b8eeb19d.js",
    "revision": "76b08e114ea7b82b7fb1e34001460b75"
  },
  {
    "url": "assets/js/44.2b798d4b.js",
    "revision": "3e2a9a60d08bba5c1804cff47d852e4b"
  },
  {
    "url": "assets/js/45.f245072e.js",
    "revision": "f8fe4e00df3785e0f2d8ff40cfd16bdf"
  },
  {
    "url": "assets/js/46.296bbf18.js",
    "revision": "c73bcf5cfa7b4799a1e571c6770c099b"
  },
  {
    "url": "assets/js/47.e3f4288a.js",
    "revision": "1a1828d5452cfb87522cf96cb7866ee1"
  },
  {
    "url": "assets/js/5.6e73b733.js",
    "revision": "36a05b1ec0f23afb6f90e5f7b4259048"
  },
  {
    "url": "assets/js/6.ef680bec.js",
    "revision": "b9db08d701949fbb561c3c92d23bc2fc"
  },
  {
    "url": "assets/js/7.9a487c21.js",
    "revision": "dbaecafe695be8830bba85f4a1684af4"
  },
  {
    "url": "assets/js/8.418c95c5.js",
    "revision": "3e02da6f67b6e838c940c9eada6b6313"
  },
  {
    "url": "assets/js/9.cc838dd5.js",
    "revision": "fc32f9350a7d0ba52b13395c2681a55c"
  },
  {
    "url": "assets/js/app.ff97f2e9.js",
    "revision": "1a3700faf4ee666ce0eaa78e6b283404"
  },
  {
    "url": "assets/js/vendors~docsearch.b03e88c6.js",
    "revision": "b45c6ce3c107c550ec393e54f8270437"
  },
  {
    "url": "cat1.jpg",
    "revision": "f5d126a3797a2f4516afd01fdd4fe7eb"
  },
  {
    "url": "cat2.jpg",
    "revision": "fdc90fdd737d461f64e37c64631cdcc2"
  },
  {
    "url": "changes/2018.html",
    "revision": "efa3668fe0c2d00ec6313685502442a1"
  },
  {
    "url": "changes/2019.html",
    "revision": "9192b1726baa605a04531da3837abb81"
  },
  {
    "url": "changes/2020.html",
    "revision": "2513abb4200b9c8f5bb3d9143383cd7d"
  },
  {
    "url": "changes/index.html",
    "revision": "57413a80a0049d61dfbbd07d04b0ffe6"
  },
  {
    "url": "compress.svg",
    "revision": "c5fefc2d5586fb61f5a709a6280b94c7"
  },
  {
    "url": "disagree-icon.svg",
    "revision": "03de316ed2329ee60c1911460e1c0414"
  },
  {
    "url": "dog1.jpg",
    "revision": "e4c2277580ebd7252672e1af09c9d213"
  },
  {
    "url": "dog2.jpg",
    "revision": "2dd0ebf990d44fbbc7c07b536be06658"
  },
  {
    "url": "expand.svg",
    "revision": "651a07980327d5bcbb8851c06761dc74"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "0838bbbe758ce024287a339ce2f20026"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "9a454f3ef2a188c19ccae92bc59f975c"
  },
  {
    "url": "favicon.svg",
    "revision": "0f1956d1eb23e082af85d779ee3d56ba"
  },
  {
    "url": "googleb41049b30bb73985.html",
    "revision": "e3ed96111974b98cc5f9dbd3a9f4f5d9"
  },
  {
    "url": "guide/a-first-example.html",
    "revision": "906dd340d3a35089c63502a643910fbe"
  },
  {
    "url": "guide/adding-images.html",
    "revision": "691f27f004131ebc2c47901971ad684d"
  },
  {
    "url": "guide/changing-the-graph-layout.html",
    "revision": "4a8b8d0131dc1d4de55faf50734dfb6a"
  },
  {
    "url": "guide/changing-the-node-size.html",
    "revision": "dc2adfa446614e13709c81e6541fe83b"
  },
  {
    "url": "guide/changing-the-node-style.html",
    "revision": "67ec34bbe2ba715721f934bed23517ff"
  },
  {
    "url": "guide/colorizing-maps.html",
    "revision": "b8f75c72b918ecc216bac591cab67b52"
  },
  {
    "url": "guide/configuration-cheatsheet.html",
    "revision": "5ac59d878801b906fa9358a4fb88dbc3"
  },
  {
    "url": "guide/configuration-in-the-frontmatter-section.html",
    "revision": "33eea96d58794617ac1f6b2b7e7c159f"
  },
  {
    "url": "guide/configuration-with-config-files.html",
    "revision": "fc8cd581cb2837a1bb7875cdd22f3501"
  },
  {
    "url": "guide/configuration.html",
    "revision": "9bbbeeb7700ed8c6132e90724f072f6e"
  },
  {
    "url": "guide/creating-argument-maps.html",
    "revision": "866f9de3ced9a43a50dd434ac0d02c6e"
  },
  {
    "url": "guide/creating-edges.html",
    "revision": "aa70244104add2c9d13f48116a186be6"
  },
  {
    "url": "guide/creating-group-nodes.html",
    "revision": "e6ecc7b6ef6506644f24e36bd429e10d"
  },
  {
    "url": "guide/creating-oldschool-argument-maps-and-inference-trees.html",
    "revision": "008221b550a24052c893f09e66b66e31"
  },
  {
    "url": "guide/creating-statement-and-argument-nodes.html",
    "revision": "b49360742cf5578e072cae3263399d4b"
  },
  {
    "url": "guide/elements-of-an-argument-map.html",
    "revision": "18feca3111dd888ff6a76f53fd592a30"
  },
  {
    "url": "guide/embedding-your-maps-in-a-webpage.html",
    "revision": "3b7ce0796655bd10d0d9b3380dbc6a18"
  },
  {
    "url": "guide/extending-argdown.html",
    "revision": "7f04e923888ff668742ef475fb779e1d"
  },
  {
    "url": "guide/index.html",
    "revision": "95c82fc6673fdd8f1109000321977008"
  },
  {
    "url": "guide/installing-the-commandline-tool.html",
    "revision": "a26e80f0933957c360f77328796bad74"
  },
  {
    "url": "guide/installing-the-vscode-extension.html",
    "revision": "f8cce81f488773c0387199ca4c42e1f4"
  },
  {
    "url": "guide/integrating-argdown-markdown-into-applications.html",
    "revision": "18ba582b65f015242f854f41c89fd9d5"
  },
  {
    "url": "guide/loading-custom-plugins-in-a-config-file.html",
    "revision": "daa3427a7159fa7305f17af2feb37d00"
  },
  {
    "url": "guide/publishing-argdown-markdown-with-pandoc.html",
    "revision": "f7f2e2a88fc4665cf038245a32cf7608"
  },
  {
    "url": "guide/publishing-argument-maps.html",
    "revision": "ac312b0e31bfb56bb60364342b15f9cc"
  },
  {
    "url": "guide/running-custom-processes.html",
    "revision": "2437f35979bddb5a6cc6cb365e48b9f1"
  },
  {
    "url": "guide/using-argdown-in-markdown.html",
    "revision": "0dadcb72f412fb692be7013949266843"
  },
  {
    "url": "guide/using-argdown-in-your-application.html",
    "revision": "6aa7c611ca5b3a213ac9261b06c47d13"
  },
  {
    "url": "guide/using-logical-symbols-and-emojis.html",
    "revision": "fe8327496a8fc7e50286592843d9e060"
  },
  {
    "url": "guide/writing-custom-plugins.html",
    "revision": "42d4e2af319afc24c6e8dae50ae2586d"
  },
  {
    "url": "index.html",
    "revision": "a851c01a4fea7736e76721ffb8a42c1f"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "f1e527365592a25dd0039f28b0e2ae3c"
  },
  {
    "url": "river-deep.argdown-theme.css",
    "revision": "1dde29f17b6306f7f4da8df080e7c32d"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2c742637dbf81b39dfe0870701ba5a6d"
  },
  {
    "url": "snow-in-spring.argdown-theme.css",
    "revision": "10500bb1a5555592f94b762a44e85ca9"
  },
  {
    "url": "syntax/index.html",
    "revision": "f0e78882e79014c33739b22e3b728d4e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
