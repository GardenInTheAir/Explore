const cacheName = "codeZone-v1";
const assets = [
    "/",
    "/stylesheets/style.css",
    "/javascripts/app.js",
    "/sw.js",
    "/javascripts/script.js",
    "/images/logo-explore.png",
    "/manifest.json",
    "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw5aXo.woff2",
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap",
    "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
]

// those are all asynchrone events. So the installation might
// finish and go to the activation before the caching being finished.
self.addEventListener("install", (installEvent) => {
    // so here we force the installation to wait until the caching is finished.
    installEvent.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets).then().catch((err) => {console.log("adding assets failed :", err);});
        }).catch((err) => {
            console.log("caching failed : ", err);
        }))
    //console.log("installed", installEvent);
})

self.addEventListener("activate", (activateEvent) => {
    //console.log("activated sw.js", activateEvent);
    // we have to delete here the old caches to be able to receive new caches
    // so it can apply new changes and automate the reloading of new changes !
    activateEvent.waitUntil(caches.keys().then((keys) => {
        //console.log("anciens clés : ", keys);
        // traite tous les promises ensembles et retourne leur résultat ensemble.
        return Promise.all(
            keys.filter((key) => key != cacheName)
            .map((key) => caches.delete(key))
        )
    }))
})

/*
self.addEventListener("fetch", (fetchEvent) => {
    //console.log("fetch", fetchEvent);
    // CACHE FIRST STRATEGY = offline first
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request).then((fetchRes) => {
                return caches.open(cacheName).then((cache) => {
                    cache.put(fetchEvent.request, fetchRes.clone());
                    return fetchRes;
                });
            });
        })
    )
})
*/

/*.catch(() => {
                console.log("failed to put fetchEvent.request",fetchEvent.request);
                return caches.match("/pages/fallback.html");
            });*/

self.addEventListener("fetch", (fetchEvent) => {
    // NETWORK FIRST STRATEGY. this means that if there is network connection, we collect and show the new updated
    // version. if it fails to connect, it will fetch the last version saved in the cache and show it instead !
    fetchEvent.respondWith(
        // try network
      fetch(fetchEvent.request).then((fetchRes) => {
        return caches.open(cacheName).then((cache) => {
            // put in cache if succeed
          cache.put(fetchEvent.request, fetchRes.clone())
          return fetchRes;
        });
        // ERROR : Should have a 404.html page as a fallback incase of error !
      }).catch(() => {
        return caches.match(fetchEvent.request)
      })
    );
});

/*
// ERROR : Uncaught ReferenceError: require is not defined
import { Router } from 'express';
app = Router();

// Define a route for the animal search with a dynamic parameter 'id'
app.get('/templates/:niveau', (req, res) => {
    const niveau = req.params.niveau;
    if (niveau === 'fr12') {
      res.render('/templates/fr12.html', {
        title: 'TEST'
      });
    } else if (niveau === 'fr34') {
      res.render('/templates/fr34.html');
    } else if (niveau === 'fr56') {
      res.render('/templates/fr56.html');
    } else if (niveau === 'fr78') {
      res.render('/templates/fr78.html');
    }
});
*/
