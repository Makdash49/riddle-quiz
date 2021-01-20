(ns app.hello
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require [reagent.core :as r]))

(defn api-call []
  (go
    (let [api-response (<! (http/get "https://official-joke-api.appspot.com/random_joke" {:with-credentials? false}))]
        (println "api-response:" api-response)
        (println "body:" (:body api-response))
        (println "setup:" (get-in api-response [:body :setup]))
        (println "punchline:" (get-in api-response [:body :punchline]))

        ; (get-in api-response [:body :setup])

        )) nil )

(defn click-counter [click-count]
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click api-call}]])

(def click-count (r/atom 0))

(defn hello []
  [:<>
   [:p "Hello, my-shadow-app is running!"]
   [:p "Here's an example of using a component with state:"]
   [click-counter click-count]
   [api-call]
])
