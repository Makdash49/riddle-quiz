(ns app.hello
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
  ; Matt K says break out each condition into its own function.
  (let [setup-id (when (@joke-map :ordered-jokes)((nth (@joke-map :ordered-jokes) (@joke-map :joke-counter)) :id))
        selected-letter (@joke-map :letter)
        letters-to-nums {"A" 0 "B" 1 "C" 2 "D" 3}
        joke-index (letters-to-nums (@joke-map :letter))
        selection-id (get-in @joke-map [:shuffled-jokes joke-index :id])]
        (when (some? selected-letter)
          (if (= setup-id selection-id)
            (do
              (if (< (@joke-map :joke-counter) 3)
              (do
                (swap! joke-map assoc :wrong-or-right "You are Correct!!")
                (swap! joke-map assoc :letter nil)
                (go
                  (<! (timeout 1000))
                    (swap! joke-map assoc :joke-counter (inc (@joke-map :joke-counter)))
                    (swap! joke-map assoc :wrong-or-right "")
                    (swap! joke-map assoc :temp-letter nil)))
              (do
               (swap! joke-map assoc :wrong-or-right "Well done! You cleared the riddles! Click for another set!")
               (swap! joke-map assoc :letter nil)))
               "")
            (do
              (swap! joke-map assoc :wrong-or-right "Wrong!")
              (swap! joke-map assoc :letter nil)
              (go
                (<! (timeout 1000))
                  (swap! joke-map assoc :wrong-or-right "")
                  (swap! joke-map assoc :temp-letter nil)
                "")
              ))))
            "")

(defn wrong-or-right [joke-map]
  [:p (@joke-map :wrong-or-right)])

(defn hello []
  ; Matt K says there may be a way to do this with shadow.cljs
  ; This may be creating many many listeners
    (js/document.addEventListener "keypress" handler)
  [:<>
    [:link {:rel "stylesheet" :href "/css/style.css"}]
    [:div {:class "joke-container centered"}
      [:p {:class "title"} "RIDDLE QUIZ!"]
      [joke-display joke-map]
      [letter-display joke-map]
      ; Does this need to be a component that displays?
      [answer joke-map]
      [wrong-or-right joke-map]]])


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
