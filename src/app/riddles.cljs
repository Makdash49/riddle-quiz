(ns app.riddles
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [clojure.string :as str]
            [cljs.core.async :refer [<! timeout]]))

(defn api-call [joke-map]
  (reset! joke-map {:joke-counter 0})
  (loop [x 0]
    (when (< x 4)
    (go
      (let [api-response (<! (http/get "https://official-joke-api.appspot.com/random_joke" {:with-credentials? false}))]
        (swap! joke-map assoc-in [:jokes (get-in api-response [:body :id])] (get-in api-response [:body])))
        (swap! joke-map assoc :ordered-jokes (map val (@joke-map :jokes)))
        (swap! joke-map assoc :shuffled-jokes (shuffle (map val (@joke-map :jokes)))))
      (recur (inc x)))))

(defn lister [items]
  (let [letters ["A" "B" "C" "D"]]
    (when (> (count items) 3)
    [:ul
    (for [item items]
      ^{:key item} [:li "("(nth letters (.indexOf items item)) ")  " (:punchline item)])])))

(defn letter-display [joke-map]
  (when (:shuffled-jokes @joke-map)
  [:p "You typed letter: "(:temp-letter @joke-map)]))

(defn joke-display [joke-map]
  (prn "joke-map:" @joke-map)
  [:div
    [:input {:type "button" :class "click-here" :value "Click Here for Riddles!"
            :on-click #(api-call joke-map)}]
    [:p (:setup (nth (@joke-map :ordered-jokes) (@joke-map :joke-counter)))]
       [lister (@joke-map :shuffled-jokes)]])

(def joke-map (r/atom {:joke-counter 0}))

(defn handler [e]
   (swap! joke-map assoc :letter  (str/upper-case (.-key e)))
   (swap! joke-map assoc :temp-letter  (str/upper-case (.-key e))))

(defn answer [joke-map]
  ; TODO Break out each condition into its own function.
  (let [setup-id (when (@joke-map :ordered-jokes)((nth (@joke-map :ordered-jokes) (@joke-map :joke-counter)) :id))
        selected-letter (@joke-map :letter)
        letters-to-nums {"A" 0 "B" 1 "C" 2 "D" 3}
        joke-index (letters-to-nums (@joke-map :letter))
        selection-id (get-in @joke-map [:shuffled-jokes joke-index :id])]
        (when (and (some? selected-letter) (some? (@joke-map :jokes)))
          (if (= setup-id selection-id)
            (do
              (if (< (@joke-map :joke-counter) 3)
              (do
                (swap! joke-map assoc :wrong-or-right "You are Correct!!" :answer-status :correct)
                (swap! joke-map assoc :letter nil)
                (go
                  (<! (timeout 1000))
                    (swap! joke-map assoc :joke-counter (inc (@joke-map :joke-counter)))
                    (swap! joke-map assoc :wrong-or-right "")
                    (swap! joke-map assoc :temp-letter nil)))
              (do
               (swap! joke-map assoc :wrong-or-right "Well done! You cleared the riddles! Click for another set!" :answer-status :cleared)
               (swap! joke-map assoc :letter nil))))
            (do
              (swap! joke-map assoc :wrong-or-right "Wrong!" :answer-status :wrong)
              (swap! joke-map assoc :letter nil)
              (go
                (<! (timeout 1000))
                  (swap! joke-map assoc :wrong-or-right "")
                  (swap! joke-map assoc :temp-letter nil))))))
            nil)

(defn wrong-or-right [joke-map]
  [:p {:class
      (let [answer-status (@joke-map :answer-status)]
        (case answer-status
          :correct "correct"
          :wrong "wrong"
          "cleared"))} (@joke-map :wrong-or-right)])

(defn riddles []
  ; TODO There may be a way to do this with shadow.cljs
  ; TODO This may be creating many many listeners. Address.
    (js/document.addEventListener "keypress" handler)
  [:<>
    [:link {:rel "stylesheet" :href "/css/style.css"}]
    [:div {:class "joke-container centered"}
      [:p {:class "title"} "RIDDLE QUIZ!"]
      [joke-display joke-map]
      [letter-display joke-map]
      (answer joke-map)
      [wrong-or-right joke-map]]])
