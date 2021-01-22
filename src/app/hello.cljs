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
      ; TODO This can be refactored so that I don't store the jokes twice.
        (when (= x 0)
          (swap! joke-map assoc :display-setup-joke (get-in api-response [:body])))
        ; We may not need this one after you get this working.
        (swap! joke-map assoc-in [:jokes (get-in api-response [:body :id])] (get-in api-response [:body])))
        (swap! joke-map assoc :shuffled-jokes (shuffle (map val (@joke-map :jokes)))))
      (recur (inc x)))))

(defn lister [items]
  (let [letters ["A" "B" "C" "D"]]
    (when (> (count items) 3)
    [:ul
    (for [item items]
      ^{:key item} [:li (nth letters (.indexOf items item)) " " (:punchline item)])])))

(defn letter-display [joke-map]
  [:p "You selected letter: "
  (when (:letter @joke-map)
  (str/upper-case (:letter @joke-map)))])

(defn joke-display [joke-map]
  [:div
    [:input {:type "button" :value "Click me!"
            :on-click #(api-call joke-map)}]
    [:p (:setup (@joke-map :display-setup-joke))]
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
