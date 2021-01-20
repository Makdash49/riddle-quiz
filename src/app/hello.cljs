(ns app.hello
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require [reagent.core :as r]))

(defn api-call [click-count]
  (go
    (let [api-response (<! (http/get "https://official-joke-api.appspot.com/random_joke" {:with-credentials? false}))]
        ; (println "api-response:" api-response)
        ; (println "body:" (:body api-response))
        (println "\nsetup:" (get-in api-response [:body :setup]))
        (println "punchline:" (get-in api-response [:body :punchline]))
        (reset! click-count (get-in api-response [:body]))
        (println "click-count:" click-count))))

(defn click-counter [click-count]
  [:div
   [:input {:type "button" :value "Click me!"
            :on-click #(api-call click-count)}]
   [:p (get @click-count :setup)]
   [:p (get @click-count :punchline)]])

(def click-count (r/atom ""))

(defn hello []
  [:<>
   [:p "RANDOM JOKES!"]
   [click-counter click-count]
])
