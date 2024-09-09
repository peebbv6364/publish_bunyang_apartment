'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d24c1e27edc6ef47fd8482057e091f5c",
"version.json": "e4ba4b13ce3de7847e6b19694d4c2d95",
"index.html": "903c839984616a80f4a281e14a28068e",
"/": "903c839984616a80f4a281e14a28068e",
"main.dart.js": "509324a6097f9572f5fcf5a2c5ddbb35",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "c494a37d792f17633758c17f058c62ab",
"icons/Icon-192.png": "f944cf1c66cb024d6ef285207e6db1ca",
"icons/Icon-maskable-192.png": "f944cf1c66cb024d6ef285207e6db1ca",
"icons/Icon-maskable-512.png": "71064af5e84e84c6e5caec6f7c97ef08",
"icons/Icon-512.png": "71064af5e84e84c6e5caec6f7c97ef08",
"manifest.json": "d266ace6a1e36e3025a625da882326e2",
"assets/AssetManifest.json": "08f4cc5140f976b432d2aa93d7fcafb5",
"assets/NOTICES": "44cfddc8d47311eb903ad681ac8f8e6e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "09b96072a78b71df4e0b822cebae42e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "32847b4535258d0d67ebe16c5dbfd2c8",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/yonginplatform07.png": "63d6e87ccf38a775e4bc56c85d1400f0",
"assets/assets/yonginplatform06.png": "f11caae3ace33a806398195ac9552eae",
"assets/assets/yonginplatform10.png": "f17836daef29eea28f83f0e36b48a359",
"assets/assets/yonginplatform04.png": "48024904b2184eacc13545e4dabc9e9f",
"assets/assets/size59C-3D.jpeg": "f545b52e5a1e652fc2619e40cb078e2d",
"assets/assets/size84A-3D.jpeg": "7fae7d055987b81b6080867d956794d2",
"assets/assets/size74OA-2D.jpeg": "e88642ece64cf0aa1f9c474fb8af3580",
"assets/assets/yonginplatform05.png": "6c0a43c3f5dc2d24500edf5a69fe7229",
"assets/assets/yonginplatform11.png": "def20265c17f3693203ecce8684053fb",
"assets/assets/yonginplatform01.png": "2f30b1fd4207c038913d0a4fe329f576",
"assets/assets/size59B-3D.jpeg": "b3dd68d2aacbf4bcfd8f7008f9844bd5",
"assets/assets/size59A-2D.jpeg": "d369373400704ef60d23158a7272d013",
"assets/assets/yonginplatform02.png": "2e2e453e5808f4c6bcf00623fd6a5d0f",
"assets/assets/policy.png": "2888d17b99ffe44443b6e1df537dc01e",
"assets/assets/yonginplatform03.png": "a336bf7dabbbf0934e88d45cdc6cae40",
"assets/assets/size59C-2D.jpeg": "038ad39d65e939dddd136589bd0cc72a",
"assets/assets/main2.png": "55d2fb81273d187695cda6223173183b",
"assets/assets/guide01.png": "fa0c44d343798e34a585fd1e72b57c0d",
"assets/assets/size74OA-3D.jpeg": "1f966b740d00a60afa9bb721f48b1f6a",
"assets/assets/main1.png": "ac428cf02bbd4ff085f141e25cb188cb",
"assets/assets/guide02.png": "8539c1fa97c233dd659e332b3be44e47",
"assets/assets/guide03.png": "3a5d09a17bfe755da7b01f66900913f5",
"assets/assets/gtx-a.png": "48a0b746523d6d72d0ed4d7d5f22f137",
"assets/assets/guide06.png": "1fb9f380345604b2d125701087781f79",
"assets/assets/size59B-2D.jpeg": "797437bf07f397df702a9ad80fb66266",
"assets/assets/size59A-3D.jpeg": "76dba2174ddb79e431db8756725a3520",
"assets/assets/guide04.png": "61d7123bfbbe8bc47a326d729322b864",
"assets/assets/guide05.png": "f06b015aa03c5c6ac5208107923579af",
"assets/assets/business_summary_1.png": "c624b5d7dbc1b3fb95d6e25a12037d72",
"assets/assets/business_summary_2.png": "182f75870591abad85ec3c39cb8bebd5",
"assets/assets/business_summary_3.png": "dbbe0e1127717deceb6aaefc6e4b94e5",
"assets/assets/size44-3D.jpeg": "5152ca4dfe22840fc5d166ca14824236",
"assets/assets/size47-2D.jpeg": "19659a476a05aa38d61c7e1291aef39c",
"assets/assets/logo.png": "939eba6136c26e78bf3483a1f6b7fb54",
"assets/assets/business_summary_4.png": "c20109421f49bf1ab7b476fab9d66daa",
"assets/assets/size84-2D.jpeg": "8099882bfb618f73efdf2a3ab929a4c4",
"assets/assets/phone.png": "96c52044bc79d11fde1622582901ee4c",
"assets/assets/apartment_align.png": "334b9d3bb2af1b1fd7883453b06025a0",
"assets/assets/size44-2D.jpeg": "e8ceddedaebec95ca0bb3fbfe7aca1b7",
"assets/assets/size47-3D.jpeg": "506f5c77680894224959a12c42636386",
"assets/assets/yonginplatform08.png": "0039d6afb28c83641cb26b73a8af8c94",
"assets/assets/yonginplatform09.png": "3156ab38aaf5576197793d6d494f56f4",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
