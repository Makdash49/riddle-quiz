(ns app.hello
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require [reagent.core :as r]))

(defn api-call [joke-map]
  (go
    (let [api-response (<! (http/get "https://official-joke-api.appspot.com/random_joke" {:with-credentials? false}))]
      (reset! joke-map (get-in api-response [:body])))))

(defn joke-display [joke-map]
  [:div
    [:input {:type "button" :value "Click me!"
            :on-click #(api-call joke-map)}]
    [:p (@joke-map :setup)]
    [:p (@joke-map :punchline)]])

(def joke-map (r/atom {}))

(defn hello []
  [:<>
    [:p "RANDOM JOKES!"]
    [joke-display joke-map]])
