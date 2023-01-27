'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "366cd6da2fc683aaa3923fdb7e11040c",
"assets/assets/bootcamp/1.png": "45c2d345ce8be768693b1cabec6a68da",
"assets/assets/bootcamp/2.png": "378325839620b8e34b9f3373408d9957",
"assets/assets/bootcamp/3.png": "a84d7c9d9d073842517b1128911b2aee",
"assets/assets/bootcamp/4.png": "6f46fff3e32261f21dc7fcfcbe50f171",
"assets/assets/bootcamp/5.png": "dfa1f855bafaac6274a9b270f97a99e1",
"assets/assets/bootcamp/6.png": "6bb79a6bdc6709072e945a4f585eeea9",
"assets/assets/bootcamp/7.png": "472d197610cb557566e66186c6982239",
"assets/assets/bootcamp/8.png": "721bb21303ac35776c2a947710250a22",
"assets/assets/bootcamp/9.png": "de2b5cb9849e3459b1678e5d7d1b0061",
"assets/assets/icons/3D.png": "ff58e7f00692631a9d15ca3d88f7752a",
"assets/assets/icons/android.png": "df2e702629c1a73e440349c602142828",
"assets/assets/icons/api.png": "c44b2c240fa2385c7716e0c500f450c3",
"assets/assets/icons/arduino.png": "4066a3beebb343c65566d1f06e0325ad",
"assets/assets/icons/c++.png": "8c184ef94f456c0a1218a832716465f2",
"assets/assets/icons/c.png": "623f8181c81323e831a831bd69b76d95",
"assets/assets/icons/cloud.png": "f1e95339a7ef566698a64e2196a94ded",
"assets/assets/icons/cn.png": "f9dc7a1fd9e613505c1745b63d2d7c36",
"assets/assets/icons/component.png": "13218efcc761b508530503977a5723c1",
"assets/assets/icons/connect.png": "03ba7ab9e52a4b41e9c4be73eb343199",
"assets/assets/icons/dart.png": "ebd877fd3d7cbfac03b9f9e22b0c9d95",
"assets/assets/icons/db.png": "4a32a7088343109af20962d096fac94d",
"assets/assets/icons/dsa.png": "da2feea4bae4913fa29e477d1cbe3ab9",
"assets/assets/icons/electronics.png": "7953e102eee311d94e4d1c209908e4b7",
"assets/assets/icons/embedded.png": "ed0680914f3f3d9e5baa27ac210f4305",
"assets/assets/icons/favicon.png": "8d27a2dd9d551b8ba4afb1f39f3b9b1b",
"assets/assets/icons/flutter.png": "238453d215524d1d6b0fb8e1e80dc475",
"assets/assets/icons/form.png": "a8ba02a862f16425c0da8e7fd61cb1d5",
"assets/assets/icons/front.jpg": "7ac7d96932f2f1ecd8204da465bca0fb",
"assets/assets/icons/fusion.png": "c5fc609295987747d0bb896613d65a08",
"assets/assets/icons/gameDev.png": "2265a37bfd7e2500ab7841f6fe0737c1",
"assets/assets/icons/git.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/icons/gui.png": "452e0972299ccdeca6886091d4a841d4",
"assets/assets/icons/ic.png": "09092728df374426e93b09506101416d",
"assets/assets/icons/internship.png": "d017df6c9fb190eeea1b7c5e439e7e2e",
"assets/assets/icons/iot.png": "de56b1e2b046999374b12bd2d715d84a",
"assets/assets/icons/linux.png": "9e492a17a674b818214471e4d45a63ed",
"assets/assets/icons/logic.png": "b06b4330e98ade79a695a46392f5d8ff",
"assets/assets/icons/makers.png": "89b67aa2bc4e580be15a58cf5975e0c2",
"assets/assets/icons/modules.png": "6b4b6d8e06826c3abc2a9afa31439cb8",
"assets/assets/icons/pcb.png": "f8cc9cfd9b445ac01a2123710c6001df",
"assets/assets/icons/placement.png": "f793ebb438efad88c428a4e143eaa4a9",
"assets/assets/icons/python.png": "b630284e333762c66c3b5ed62283c180",
"assets/assets/icons/raspberrypi.png": "54f7f480b6bd4044014a2cd344a3ae24",
"assets/assets/icons/rectifier.png": "f49359e0ac9341a93ea434ab676fc12b",
"assets/assets/icons/robotics.png": "fa65202951042237c59f4ebff4ee2530",
"assets/assets/icons/sensor.png": "70cfd5584abe2402288c89a3efe5298b",
"assets/assets/icons/sqlite.png": "f697ba0c9244a5495766983a27636ff4",
"assets/assets/icons/tools.png": "2189a14846ad3a589f1f74b89194a25c",
"assets/assets/icons/training.png": "424cc8adb581c611964e4dfcbc41099f",
"assets/assets/icons/upload.png": "9cebe5cb2723488a8af1c5dedb2dc26a",
"assets/assets/icons/wireless.png": "abdb26451fb1ae8030ab0859189ae9bf",
"assets/assets/icons/xd.png": "d72ef2c6c36ef1e0d5ef21eb2744f389",
"assets/assets/images/21.jpeg": "a3bde60b80fd45e6d630a84f7d7be9a7",
"assets/assets/images/24.jpeg": "d2a82d2a47c4c41110358884b69bc6c3",
"assets/assets/images/26.png": "d1d11396a6f22ec5dce3aa26100645d3",
"assets/assets/images/28.jpeg": "42a93157344215a404342b7dc6e8e142",
"assets/assets/images/29.jpeg": "267183ad2c9c20013a654fb8f9cb7d9e",
"assets/assets/images/30.jpeg": "45e84fc1a6c879d0730488f546469eb0",
"assets/assets/images/logo.png": "bc2be15bdc00e8f7328bc1a49d47a1a6",
"assets/assets/images/photo.jpg": "96389a89f41756973778b86e7ee75a4d",
"assets/assets/images/whiteLogo.png": "7c49ec417915b2602a99bb80a6886c3c",
"assets/assets/images/who.png": "929628359302bbea527a1b494e57c343",
"assets/assets/pdfs/Electronics&pcb.pdf": "0520037b3c5ee268a9c1d8177a1525c1",
"assets/assets/pdfs/Flutter.pdf": "78c2f6f6ad6bb950aaae95fb7b8286b0",
"assets/assets/pdfs/Internet_of_Things.pdf": "ea3b4cf35f741060aee500cdfdf7e80f",
"assets/assets/pdfs/Python.pdf": "e6b5dc4ef522a5503ddabfea23e093ba",
"assets/assets/pdfs/Robotics_Arduino.pdf": "ee8494ffa3c53c3c6ab77f43ee848ae4",
"assets/FontManifest.json": "3b70b61ab32057db7d0ed40a99d19cd2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1010ecf34a5c10a5cd795283bd09b930",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b438a657f6cab4769ad03211c120f3f9",
"/": "b438a657f6cab4769ad03211c120f3f9",
"main.dart.js": "8def86124605e3d0d3a860a7492e5825",
"manifest.json": "610c01bd0fcf70920a75fd6a6f159dc1",
"version.json": "bb76bb5d2528b697fbd8251ef14829fb"
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
