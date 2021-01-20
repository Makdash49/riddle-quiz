(ns app.hello
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require [reagent.core :as r]))

(defn api-call [joke-map]
  (go
    (let [api-response (<! (http/get "https://official-joke-api.appspot.com/random_joke" {:with-credentials? false}))]
      (swap! joke-map assoc (get-in api-response [:body :id]) (get-in api-response [:body]))
      (println "joke-map:" joke-map)

      )))

(defn first-joke [joke-map]
  (let [map-keys   (map key joke-map)
        first-key  (first map-keys)
        first-joke (joke-map first-key)
        ]
  (prn "map-keys: " map-keys)
  (prn "first-key:" first-key)
  (println "first-joke:" first-joke)
  first-joke
  ))

(defn joke-display [joke-map]
  [:div
    [:input {:type "button" :value "Click me!"
            :on-click #(api-call joke-map)}]
    [:p (:setup (first-joke @joke-map))]
    [:p (:punchline (first-joke @joke-map))]])


(def joke-map (r/atom {}))

(defn hello []
  [:<>
    [:p "RANDOM JOKES!"]
    [joke-display joke-map]])
