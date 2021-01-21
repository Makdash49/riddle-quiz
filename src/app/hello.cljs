(ns app.hello
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require [reagent.core :as r]))

(defn api-call [joke-map]
  (reset! joke-map {})
  (loop [x 0]
    (when (< x 4)
    (go
      (let [api-response (<! (http/get "https://official-joke-api.appspot.com/random_joke" {:with-credentials? false}))]
        (swap! joke-map assoc (get-in api-response [:body :id]) (get-in api-response [:body]))))
      (recur (inc x)))))

(defn first-joke [joke-map]
  (let [map-keys   (map key joke-map)
        first-key  (first map-keys)
        first-joke (joke-map first-key)
        ]
  (prn "joke-map:" joke-map)
  (prn "map-keys: " map-keys)
  (prn "first-key:" first-key)
  (println "first-joke:" first-joke)
  first-joke
  ))

(defn lister [items]
  (when (> (count items) 3)
    [:ul
      (for [item items]
      ^{:key item} [:li (:punchline item)])]))

(defn joke-display [joke-map]
  [:div
    [:input {:type "button" :value "Click me!"
            :on-click #(api-call joke-map)}]
    [:p (:setup (first-joke @joke-map))]
      [lister (shuffle (map val @joke-map))]])

(def joke-map (r/atom {}))

  (defn handler [e] (println "This is e: " (.-key e))
   (swap! joke-map assoc :letter (.-key e)))

(defn hello []
    (js/document.addEventListener "keypress" handler)
  [:<>
    [:p "RANDOM JOKES!"]
    [joke-display joke-map]])
