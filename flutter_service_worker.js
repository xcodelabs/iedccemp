'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5ad03b06a578c76f76877bd4de4a1c8a",
".git/config": "bdb577c284072dcd05cf03bc0eaea3d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "85936cb85e05498cbf2445ebfbe989f5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78f333cb892d3ff77f1248e789dabd8d",
".git/logs/refs/heads/main": "6d41f29e6fbc9533145353469deaad90",
".git/logs/refs/remotes/origin/main": "bcb81296e83c32ec4b4d53a0683e0cc9",
".git/objects/00/1316cc85073ccdd865eb673461281caa871570": "660fc3f09648491774f4fcd1cda74c7e",
".git/objects/09/f143165281e931912a479ba8bbef40fdf8b1f8": "bd7b68ff437f06ac2c8f125602e83692",
".git/objects/0c/9428f49360260d874f55b0474ccf1a1733b87d": "c480f1af275b3ae35a1b3df8711bcc3f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/8dcbca0a12a68bda589ca426b60d7deda1224b": "17aba7f5751cf49d8913b81d921342f7",
".git/objects/27/3029f575f6d22e6711002e08807f1960345b3e": "52503a3e80918d3cbce68e18ffe5f264",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/3b/1c82fced7cc823446d278a256a414e33355ba8": "d31897d0e19485de31431dff3648f8f7",
".git/objects/3c/69da16884ba80c52e44cd902babe34c9231363": "ef837662703e625ddf3feb79a0dd1f04",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/03247e0a6b0fe17dff925f73a012e1203025d1": "bc5b235dd746d25b4c1ce2d6b480f254",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/717a152156916b892fd276e225388ba35a0a50": "32e134d8a3534bd4b8b7dd193a2af891",
".git/objects/4a/3df54ddf746b0af1f4696586e6d16a4ba33c46": "b5a0d2b18c2c3ad7cb805006690992b6",
".git/objects/4c/e44aac781bb0548d670c49551ed37951bc56b5": "c133a3d51c5d992ac4c3bac3bb68df6d",
".git/objects/4d/381147db7f183080365127b771d52f0d964b9c": "7ce95c50dfaeb6cdd94a003d253ed527",
".git/objects/56/2579f04580fdbdea7aa0a72ae676a033a28f36": "231cec3889aff87b3c4ee256e9dbe983",
".git/objects/5b/74a957339af00d726cfe51afba5617e724658d": "ab13e31d9c85decb54b8bc45699b9a5e",
".git/objects/5d/ffcdc352a520082078e3fbf9fa4fb2560add88": "33f3108066315310da076c8db1395788",
".git/objects/5e/b69f01c9eccb2189336fd449f1aed2a0a58fda": "938fc936dc516eab6ab85e56805d9a9d",
".git/objects/79/9d033f546f34972f93f91b342d4b3378771742": "d0ce784d03b62b982b8c68c57df0c7ac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/78803f5f51dd718548e1e18b7258894beff9ab": "e886ccfedafb711b421625f4354215c1",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/024036bd07ab6a03e9a0dde1ff43120c1ec606": "123c2b8f0e194413bbd9678a132be548",
".git/objects/86/b38a220aef1d84b6f52f9ba0ec558e13ba7b42": "cf1f9b9401e9d5792499699d75918d3d",
".git/objects/97/183f2963115c25df21629a268a73713a6090b5": "89189ea32094372d34f88c616ed70db6",
".git/objects/97/57eb0040792c4dc49859e48c2a7e7782984338": "89c6b68d235eda32dd39644624799f45",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9e/636c0376f0b427246f6c73a096f16cc806f2be": "3597e94d5245b27b57ae6b2f10f08c53",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/671e8b4d2b44fd4a1d5f3162c22cacbad14253": "1dd0f6aaa233bd869ce103ada658bd2c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/b935d77d3b8a8f7ab544a251f9f41f453de149": "738ab8f93a1d04f1a1ffc9a34a9d9519",
".git/objects/cc/2315cdac4e12c3b4577debd1f7706a61df0ef9": "6fc2f06be42d750bb07aaf8a1f0a78b1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/d5e59a2eb7e6e860278705ef87d0eccf5e72eb": "0b9170ae74b8013bbb206cd833176802",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/1d7b6557485818865ae81ce52467795a713ef0": "61781c7a25e37605f85422c42d024f62",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/33e98bc9f87458dce605a426438e3bc47ab0b5": "7243a0e2f5f130189a1936679a4f603c",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/da6a15be1a4782436dd8e96d62b98fa1944bc2": "1ea3f95e08036bf2c4c84acf6028e514",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cf1892b781bb212291c03b10b55381e6e78ed1": "d685906435ea657d5e215a526f9d68a6",
".git/objects/ea/1f29eab58c21bff6b7dc9f9ad9377e5d5e585a": "0d5c5e66f7e1be2305a37c3169c0b935",
".git/objects/f5/fe2e24d782151568dc6efab96bff28d3da8fa7": "e41649a406289b42e721685372c6c66e",
".git/refs/heads/main": "c89939b1792ed2673ab11177019372b1",
".git/refs/remotes/origin/main": "c89939b1792ed2673ab11177019372b1",
"assets/AssetManifest.json": "0388023aa0aaec999d1b37490f9ae131",
"assets/assets/certifcate_final.png": "f1d80c506ef1360cd1f1786f562293b2",
"assets/assets/certifcate_final.svg": "a386a2a8821eb2bbb00d61bfde059a77",
"assets/assets/certificate.xlsx": "9ef49f492f5fe2f2f308480de1fc3b1c",
"assets/assets/iedclogo.jpeg": "e047374ab0de051e9b6ea6774816e612",
"assets/assets/Technaura.svg": "0db5789bbd36bee05ed50528cb0cd2dc",
"assets/certificate.xlsx": "9ef49f492f5fe2f2f308480de1fc3b1c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "36d4b23861defdb641893620646b993a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "4b2dcd0be9edce868ea0e335a2a37473",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "613815398cfd63a0ed19bc9b5d69fd22",
"icons/Icon-512.png": "f79cf0f54277444022b756c1a1211f72",
"icons/Icon-maskable-192.png": "613815398cfd63a0ed19bc9b5d69fd22",
"icons/Icon-maskable-512.png": "f79cf0f54277444022b756c1a1211f72",
"index.html": "a153d35af95040fce567eadc5e2a8e0b",
"/": "a153d35af95040fce567eadc5e2a8e0b",
"main.dart.js": "0ae86941a69348cc33bd858c4bb0c5ec",
"manifest.json": "8362bba9cdd1c006c3359a8bf41d1e2b",
"version.json": "27bff994c5cd024de66988fbadb35ff8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
