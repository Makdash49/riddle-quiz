(ns app.hello
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [clojure.string :as str]))

(defn api-call [joke-map]
  (reset! joke-map {})
  (loop [x 0]
    (println "recur!!!!!")
    (when (< x 4)
    (go
      (let [api-response (<! (http/get "https://official-joke-api.appspot.com/random_joke" {:with-credentials? false}))]
        (swap! joke-map assoc-in [:jokes (get-in api-response [:body :id])] (get-in api-response [:body])))
        (swap! joke-map assoc :shuffled-jokes (shuffle (map val (@joke-map :jokes)))))
      (recur (inc x)))))

(defn first-joke [joke-map]
  (let [map-keys   (map key (joke-map :jokes))
        first-key  (first map-keys)
        first-joke (get-in joke-map [:jokes first-key])
        ]
  (prn "*joke-map:" joke-map)
  ; (prn "*map-keys: " map-keys)
  ; (prn "*first-key:" first-key)
  ; (println "*first-joke:" first-joke)
  first-joke
  ))

(defn lister [items]
  (when (> (count items) 3)
    [:ul
      (for [item items]
      ^{:key item} [:li (:punchline item)])]))

(defn letter-display [joke-map]
  [:p "You selected letter: "
  (when (:letter @joke-map)
  (str/upper-case (:letter @joke-map)))])

(defn joke-display [joke-map]
  [:div
    [:input {:type "button" :value "Click me!"
            :on-click #(api-call joke-map)}]
    [:p (:setup (first-joke @joke-map))]
    ; (println "(map val (@joke-map :jokes)):" (map val (@joke-map :jokes)))
       [lister (@joke-map :shuffled-jokes)]])

(def joke-map (r/atom {}))

  (defn handler [e] (println "This is e: " (.-key e))
   (swap! joke-map assoc :letter (.-key e)))

(defn hello []
    (js/document.addEventListener "keypress" handler)
  [:<>
    [:p "RIDDLE QUIZ!"]
    [joke-display joke-map]
    [letter-display joke-map]])
