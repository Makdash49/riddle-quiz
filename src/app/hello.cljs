(ns app.hello
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [clojure.string :as str]))

(defn api-call [joke-map]
  (reset! joke-map {:joke-counter 0})
  (loop [x 0]
    (when (< x 4)
    (go
      (let [api-response (<! (http/get "https://official-joke-api.appspot.com/random_joke" {:with-credentials? false}))]
        (swap! joke-map assoc-in [:jokes (get-in api-response [:body :id])] (get-in api-response [:body])))
        (swap! joke-map assoc :ordered-jokes (map val (@joke-map :jokes)))
        (swap! joke-map assoc :shuffled-jokes (shuffle (map val (@joke-map :jokes))))
        )
      (recur (inc x)))))

(defn lister [items]
  (let [letters ["A" "B" "C" "D"]]
    (when (> (count items) 3)
    [:ul
    (for [item items]
      ^{:key item} [:li "("(nth letters (.indexOf items item)) ")  " (:punchline item)])])))

(defn letter-display [joke-map]
  (when (:shuffled-jokes @joke-map)
  [:p "You typed letter: "

  (:letter @joke-map)]))

(defn joke-display [joke-map]
  (println "\n\njoke-counter: " (@joke-map :joke-counter))
  (prn "joke-map:" @joke-map)

  [:div
    [:input {:type "button" :value "Click me for a Riddle!"
            :on-click #(api-call joke-map)}]
    [:p (:setup (nth (@joke-map :ordered-jokes) (@joke-map :joke-counter)))]
       [lister (@joke-map :shuffled-jokes)]])

(def joke-map (r/atom {:joke-counter 0}))

  (defn handler [e]
   (swap! joke-map assoc :letter  (str/upper-case (.-key e)  )))

(defn answer [joke-map]
  (let [setup-id (when (@joke-map :ordered-jokes)((nth (@joke-map :ordered-jokes) (@joke-map :joke-counter)) :id))
        selected-letter (@joke-map :letter)
        letters-to-nums {"A" 0 "B" 1 "C" 2 "D" 3}
        joke-index (letters-to-nums (@joke-map :letter))
        selection-id (get-in @joke-map [:shuffled-jokes joke-index :id])]
        (prn "setup-id:" setup-id)
        (prn "selection-id: " selection-id)
        (when (some? selected-letter)
          (if (= setup-id selection-id)
            (do
              (swap! joke-map assoc :joke-counter (inc (@joke-map :joke-counter)))
              (swap! joke-map assoc :letter nil)
              "")
            "WRONG!!!"))))

(defn hello []
    (js/document.addEventListener "keypress" handler)
  [:<>
    [:p "RIDDLE QUIZ!"]
    [joke-display joke-map]
    [letter-display joke-map]
    [answer joke-map]])


    ; {
    ;    :"jokes"{
    ;       259{
    ;          :id 259,
    ;          :"type""general",
    ;          :"setup""What is the hardest part about sky diving?",
    ;          :"punchline""The ground."
    ;       },
    ;       275{
    ;          :id 275,
    ;          :"type""general",
    ;          :"setup""What type of music do balloons hate?",
    ;          :"punchline""Pop music!"
    ;       },
    ;       193{
    ;          :id 193,
    ;          :"type""general",
    ;          :"setup""What did the Red light say to the Green light?",
    ;          :"punchline""Don't look at me I'm changing!"
    ;       },
    ;       305{
    ;          :id 305,
    ;          :"type""general",
    ;          :"setup""Where does Fonzie like to go for lunch?",
    ;          :"punchline""Chick-Fil-Eyyyyyyyy."
    ;       }
    ;    },
    ;    :"ordered-jokes ("{
    ;       :id 259,
    ;       :"type""general",
    ;       :"setup""What is the hardest part about sky diving?",
    ;       :"punchline""The ground."
    ;    }{
    ;       :id 275,
    ;       :"type""general",
    ;       :"setup""What type of music do balloons hate?",
    ;       :"punchline""Pop music!"
    ;    }{
    ;       :id 193,
    ;       :"type""general",
    ;       :"setup""What did the Red light say to the Green light?",
    ;       :"punchline""Don't look at me I'm changing!"
    ;    }{
    ;       :id 305,
    ;       :"type""general",
    ;       :"setup""Where does Fonzie like to go for lunch?",
    ;       :"punchline""Chick-Fil-Eyyyyyyyy."
    ;    }")",
    ;    :"shuffled-jokes"[
    ;       {
    ;          :id 193,
    ;          :"type""general",
    ;          :"setup""What did the Red light say to the Green light?",
    ;          :"punchline""Don't look at me I'm changing!"
    ;       }{
    ;          :id 275,
    ;          :"type""general",
    ;          :"setup""What type of music do balloons hate?",
    ;          :"punchline""Pop music!"
    ;       }{
    ;          :id 305,
    ;          :"type""general",
    ;          :"setup""Where does Fonzie like to go for lunch?",
    ;          :"punchline""Chick-Fil-Eyyyyyyyy."
    ;       }{
    ;          :id 259,
    ;          :"type""general",
    ;          :"setup""What is the hardest part about sky diving?",
    ;          :"punchline""The ground."
    ;       }
    ;    ],
    ;    :"letter""D"
    ; }
