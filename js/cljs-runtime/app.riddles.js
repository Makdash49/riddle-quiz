goog.provide('app.riddles');
app.riddles.api_call = (function app$riddles$api_call(joke_map){
cljs.core.reset_BANG_(joke_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296),(0)], null));

var x = (0);
while(true){
if((x < (4))){
var c__25962__auto___26339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (x,c__25962__auto___26339){
return (function (){
var f__25963__auto__ = (function (){var switch__25917__auto__ = ((function (x,c__25962__auto___26339){
return (function (state_26277){
var state_val_26278 = (state_26277[(1)]);
if((state_val_26278 === (1))){
var inst_26249 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26250 = [false];
var inst_26251 = cljs.core.PersistentHashMap.fromArrays(inst_26249,inst_26250);
var inst_26252 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://official-joke-api.appspot.com/random_joke",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26251], 0));
var state_26277__$1 = state_26277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26277__$1,(2),inst_26252);
} else {
if((state_val_26278 === (2))){
var inst_26254 = (state_26277[(2)]);
var inst_26255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26257 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"id","id",-1388402092)];
var inst_26258 = (new cljs.core.PersistentVector(null,2,(5),inst_26256,inst_26257,null));
var inst_26259 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26254,inst_26258);
var inst_26260 = [new cljs.core.Keyword(null,"jokes","jokes",-500058052),inst_26259];
var inst_26261 = (new cljs.core.PersistentVector(null,2,(5),inst_26255,inst_26260,null));
var inst_26262 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26263 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_26264 = (new cljs.core.PersistentVector(null,1,(5),inst_26262,inst_26263,null));
var inst_26265 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26254,inst_26264);
var inst_26266 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc_in,inst_26261,inst_26265);
var inst_26267 = cljs.core.deref(joke_map);
var inst_26268 = (inst_26267.cljs$core$IFn$_invoke$arity$1 ? inst_26267.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jokes","jokes",-500058052)) : inst_26267.call(null,new cljs.core.Keyword(null,"jokes","jokes",-500058052)));
var inst_26269 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,inst_26268);
var inst_26270 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"ordered-jokes","ordered-jokes",-164775973),inst_26269);
var inst_26271 = cljs.core.deref(joke_map);
var inst_26272 = (inst_26271.cljs$core$IFn$_invoke$arity$1 ? inst_26271.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jokes","jokes",-500058052)) : inst_26271.call(null,new cljs.core.Keyword(null,"jokes","jokes",-500058052)));
var inst_26273 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,inst_26272);
var inst_26274 = cljs.core.shuffle(inst_26273);
var inst_26275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"shuffled-jokes","shuffled-jokes",-691400283),inst_26274);
var state_26277__$1 = (function (){var statearr_26279 = state_26277;
(statearr_26279[(7)] = inst_26270);

(statearr_26279[(8)] = inst_26266);

return statearr_26279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26277__$1,inst_26275);
} else {
return null;
}
}
});})(x,c__25962__auto___26339))
;
return ((function (x,switch__25917__auto__,c__25962__auto___26339){
return (function() {
var app$riddles$api_call_$_state_machine__25918__auto__ = null;
var app$riddles$api_call_$_state_machine__25918__auto____0 = (function (){
var statearr_26280 = [null,null,null,null,null,null,null,null,null];
(statearr_26280[(0)] = app$riddles$api_call_$_state_machine__25918__auto__);

(statearr_26280[(1)] = (1));

return statearr_26280;
});
var app$riddles$api_call_$_state_machine__25918__auto____1 = (function (state_26277){
while(true){
var ret_value__25919__auto__ = (function (){try{while(true){
var result__25920__auto__ = switch__25917__auto__(state_26277);
if(cljs.core.keyword_identical_QMARK_(result__25920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25920__auto__;
}
break;
}
}catch (e26281){var ex__25921__auto__ = e26281;
var statearr_26282_26340 = state_26277;
(statearr_26282_26340[(2)] = ex__25921__auto__);


if(cljs.core.seq((state_26277[(4)]))){
var statearr_26283_26341 = state_26277;
(statearr_26283_26341[(1)] = cljs.core.first((state_26277[(4)])));

} else {
throw ex__25921__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26342 = state_26277;
state_26277 = G__26342;
continue;
} else {
return ret_value__25919__auto__;
}
break;
}
});
app$riddles$api_call_$_state_machine__25918__auto__ = function(state_26277){
switch(arguments.length){
case 0:
return app$riddles$api_call_$_state_machine__25918__auto____0.call(this);
case 1:
return app$riddles$api_call_$_state_machine__25918__auto____1.call(this,state_26277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$riddles$api_call_$_state_machine__25918__auto__.cljs$core$IFn$_invoke$arity$0 = app$riddles$api_call_$_state_machine__25918__auto____0;
app$riddles$api_call_$_state_machine__25918__auto__.cljs$core$IFn$_invoke$arity$1 = app$riddles$api_call_$_state_machine__25918__auto____1;
return app$riddles$api_call_$_state_machine__25918__auto__;
})()
;})(x,switch__25917__auto__,c__25962__auto___26339))
})();
var state__25964__auto__ = (function (){var statearr_26284 = f__25963__auto__();
(statearr_26284[(6)] = c__25962__auto___26339);

return statearr_26284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25964__auto__);
});})(x,c__25962__auto___26339))
);


var G__26343 = (x + (1));
x = G__26343;
continue;
} else {
return null;
}
break;
}
});
app.riddles.lister = (function app$riddles$lister(items){
var letters = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C","D"], null);
if((cljs.core.count(items) > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function app$riddles$lister_$_iter__26285(s__26286){
return (new cljs.core.LazySeq(null,(function (){
var s__26286__$1 = s__26286;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26286__$1);
if(temp__5735__auto__){
var s__26286__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26286__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26286__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26288 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26287 = (0);
while(true){
if((i__26287 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__26287);
cljs.core.chunk_append(b__26288,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"(",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(letters,items.indexOf(item)),")  ",new cljs.core.Keyword(null,"punchline","punchline",1942476013).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__26344 = (i__26287 + (1));
i__26287 = G__26344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26288),app$riddles$lister_$_iter__26285(cljs.core.chunk_rest(s__26286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26288),null);
}
} else {
var item = cljs.core.first(s__26286__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"(",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(letters,items.indexOf(item)),")  ",new cljs.core.Keyword(null,"punchline","punchline",1942476013).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),app$riddles$lister_$_iter__26285(cljs.core.rest(s__26286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items);
})()], null);
} else {
return null;
}
});
app.riddles.letter_display = (function app$riddles$letter_display(joke_map){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shuffled-jokes","shuffled-jokes",-691400283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(joke_map)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You typed letter: ",new cljs.core.Keyword(null,"temp-letter","temp-letter",1308173807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(joke_map))], null);
} else {
return null;
}
});
app.riddles.joke_display = (function app$riddles$joke_display(joke_map){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["joke-map:",cljs.core.deref(joke_map)], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"click-here",new cljs.core.Keyword(null,"value","value",305978217),"Click Here for Riddles!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.riddles.api_call(joke_map);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__26289 = cljs.core.deref(joke_map);
return (fexpr__26289.cljs$core$IFn$_invoke$arity$1 ? fexpr__26289.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ordered-jokes","ordered-jokes",-164775973)) : fexpr__26289.call(null,new cljs.core.Keyword(null,"ordered-jokes","ordered-jokes",-164775973)));
})(),(function (){var fexpr__26290 = cljs.core.deref(joke_map);
return (fexpr__26290.cljs$core$IFn$_invoke$arity$1 ? fexpr__26290.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296)) : fexpr__26290.call(null,new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296)));
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.riddles.lister,(function (){var fexpr__26291 = cljs.core.deref(joke_map);
return (fexpr__26291.cljs$core$IFn$_invoke$arity$1 ? fexpr__26291.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shuffled-jokes","shuffled-jokes",-691400283)) : fexpr__26291.call(null,new cljs.core.Keyword(null,"shuffled-jokes","shuffled-jokes",-691400283)));
})()], null)], null);
});
app.riddles.joke_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296),(0)], null));
app.riddles.handler = (function app$riddles$handler(e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.riddles.joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"letter","letter",-125811450),clojure.string.upper_case(e.key));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.riddles.joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"temp-letter","temp-letter",1308173807),clojure.string.upper_case(e.key));
});
app.riddles.answer = (function app$riddles$answer(joke_map){
var setup_id_26345 = (cljs.core.truth_((function (){var fexpr__26292 = cljs.core.deref(joke_map);
return (fexpr__26292.cljs$core$IFn$_invoke$arity$1 ? fexpr__26292.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ordered-jokes","ordered-jokes",-164775973)) : fexpr__26292.call(null,new cljs.core.Keyword(null,"ordered-jokes","ordered-jokes",-164775973)));
})())?(function (){var fexpr__26295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__26296 = cljs.core.deref(joke_map);
return (fexpr__26296.cljs$core$IFn$_invoke$arity$1 ? fexpr__26296.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ordered-jokes","ordered-jokes",-164775973)) : fexpr__26296.call(null,new cljs.core.Keyword(null,"ordered-jokes","ordered-jokes",-164775973)));
})(),(function (){var fexpr__26297 = cljs.core.deref(joke_map);
return (fexpr__26297.cljs$core$IFn$_invoke$arity$1 ? fexpr__26297.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296)) : fexpr__26297.call(null,new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296)));
})());
return (fexpr__26295.cljs$core$IFn$_invoke$arity$1 ? fexpr__26295.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : fexpr__26295.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
})():null);
var selected_letter_26346 = (function (){var fexpr__26298 = cljs.core.deref(joke_map);
return (fexpr__26298.cljs$core$IFn$_invoke$arity$1 ? fexpr__26298.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter","letter",-125811450)) : fexpr__26298.call(null,new cljs.core.Keyword(null,"letter","letter",-125811450)));
})();
var letters_to_nums_26347 = new cljs.core.PersistentArrayMap(null, 4, ["A",(0),"B",(1),"C",(2),"D",(3)], null);
var joke_index_26348 = (function (){var G__26299 = (function (){var fexpr__26300 = cljs.core.deref(joke_map);
return (fexpr__26300.cljs$core$IFn$_invoke$arity$1 ? fexpr__26300.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter","letter",-125811450)) : fexpr__26300.call(null,new cljs.core.Keyword(null,"letter","letter",-125811450)));
})();
return (letters_to_nums_26347.cljs$core$IFn$_invoke$arity$1 ? letters_to_nums_26347.cljs$core$IFn$_invoke$arity$1(G__26299) : letters_to_nums_26347.call(null,G__26299));
})();
var selection_id_26349 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(joke_map),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shuffled-jokes","shuffled-jokes",-691400283),joke_index_26348,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if((((!((selected_letter_26346 == null)))) && ((!(((function (){var fexpr__26302 = cljs.core.deref(joke_map);
return (fexpr__26302.cljs$core$IFn$_invoke$arity$1 ? fexpr__26302.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jokes","jokes",-500058052)) : fexpr__26302.call(null,new cljs.core.Keyword(null,"jokes","jokes",-500058052)));
})() == null)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(setup_id_26345,selection_id_26349)){
if(((function (){var fexpr__26303 = cljs.core.deref(joke_map);
return (fexpr__26303.cljs$core$IFn$_invoke$arity$1 ? fexpr__26303.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296)) : fexpr__26303.call(null,new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296)));
})() < (3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"wrong-or-right","wrong-or-right",-2135862773),"You are Correct!!!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"answer-status","answer-status",-765811772),new cljs.core.Keyword(null,"correct","correct",984806334)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"letter","letter",-125811450),null);

var c__25962__auto___26350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25963__auto__ = (function (){var switch__25917__auto__ = (function (state_26314){
var state_val_26315 = (state_26314[(1)]);
if((state_val_26315 === (1))){
var inst_26304 = cljs.core.async.timeout((1000));
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26314__$1,(2),inst_26304);
} else {
if((state_val_26315 === (2))){
var inst_26306 = (state_26314[(2)]);
var inst_26307 = cljs.core.deref(joke_map);
var inst_26308 = (inst_26307.cljs$core$IFn$_invoke$arity$1 ? inst_26307.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296)) : inst_26307.call(null,new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296)));
var inst_26309 = (inst_26308 + (1));
var inst_26310 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"joke-counter","joke-counter",923878296),inst_26309);
var inst_26311 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"wrong-or-right","wrong-or-right",-2135862773),"");
var inst_26312 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"temp-letter","temp-letter",1308173807),null);
var state_26314__$1 = (function (){var statearr_26316 = state_26314;
(statearr_26316[(7)] = inst_26306);

(statearr_26316[(8)] = inst_26310);

(statearr_26316[(9)] = inst_26311);

return statearr_26316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26314__$1,inst_26312);
} else {
return null;
}
}
});
return (function() {
var app$riddles$answer_$_state_machine__25918__auto__ = null;
var app$riddles$answer_$_state_machine__25918__auto____0 = (function (){
var statearr_26317 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26317[(0)] = app$riddles$answer_$_state_machine__25918__auto__);

(statearr_26317[(1)] = (1));

return statearr_26317;
});
var app$riddles$answer_$_state_machine__25918__auto____1 = (function (state_26314){
while(true){
var ret_value__25919__auto__ = (function (){try{while(true){
var result__25920__auto__ = switch__25917__auto__(state_26314);
if(cljs.core.keyword_identical_QMARK_(result__25920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25920__auto__;
}
break;
}
}catch (e26318){var ex__25921__auto__ = e26318;
var statearr_26319_26351 = state_26314;
(statearr_26319_26351[(2)] = ex__25921__auto__);


if(cljs.core.seq((state_26314[(4)]))){
var statearr_26320_26352 = state_26314;
(statearr_26320_26352[(1)] = cljs.core.first((state_26314[(4)])));

} else {
throw ex__25921__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26353 = state_26314;
state_26314 = G__26353;
continue;
} else {
return ret_value__25919__auto__;
}
break;
}
});
app$riddles$answer_$_state_machine__25918__auto__ = function(state_26314){
switch(arguments.length){
case 0:
return app$riddles$answer_$_state_machine__25918__auto____0.call(this);
case 1:
return app$riddles$answer_$_state_machine__25918__auto____1.call(this,state_26314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$riddles$answer_$_state_machine__25918__auto__.cljs$core$IFn$_invoke$arity$0 = app$riddles$answer_$_state_machine__25918__auto____0;
app$riddles$answer_$_state_machine__25918__auto__.cljs$core$IFn$_invoke$arity$1 = app$riddles$answer_$_state_machine__25918__auto____1;
return app$riddles$answer_$_state_machine__25918__auto__;
})()
})();
var state__25964__auto__ = (function (){var statearr_26321 = f__25963__auto__();
(statearr_26321[(6)] = c__25962__auto___26350);

return statearr_26321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25964__auto__);
}));

} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"wrong-or-right","wrong-or-right",-2135862773),"Well done! You cleared the riddles! Click for another set!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"answer-status","answer-status",-765811772),new cljs.core.Keyword(null,"cleared","cleared",-1267667336)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"letter","letter",-125811450),null);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"wrong-or-right","wrong-or-right",-2135862773),"Wrong!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"answer-status","answer-status",-765811772),new cljs.core.Keyword(null,"wrong","wrong",-1945918192)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"letter","letter",-125811450),null);

var c__25962__auto___26354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25963__auto__ = (function (){var switch__25917__auto__ = (function (state_26328){
var state_val_26329 = (state_26328[(1)]);
if((state_val_26329 === (1))){
var inst_26322 = cljs.core.async.timeout((1000));
var state_26328__$1 = state_26328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26328__$1,(2),inst_26322);
} else {
if((state_val_26329 === (2))){
var inst_26324 = (state_26328[(2)]);
var inst_26325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"wrong-or-right","wrong-or-right",-2135862773),"");
var inst_26326 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(joke_map,cljs.core.assoc,new cljs.core.Keyword(null,"temp-letter","temp-letter",1308173807),null);
var state_26328__$1 = (function (){var statearr_26330 = state_26328;
(statearr_26330[(7)] = inst_26324);

(statearr_26330[(8)] = inst_26325);

return statearr_26330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26328__$1,inst_26326);
} else {
return null;
}
}
});
return (function() {
var app$riddles$answer_$_state_machine__25918__auto__ = null;
var app$riddles$answer_$_state_machine__25918__auto____0 = (function (){
var statearr_26331 = [null,null,null,null,null,null,null,null,null];
(statearr_26331[(0)] = app$riddles$answer_$_state_machine__25918__auto__);

(statearr_26331[(1)] = (1));

return statearr_26331;
});
var app$riddles$answer_$_state_machine__25918__auto____1 = (function (state_26328){
while(true){
var ret_value__25919__auto__ = (function (){try{while(true){
var result__25920__auto__ = switch__25917__auto__(state_26328);
if(cljs.core.keyword_identical_QMARK_(result__25920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25920__auto__;
}
break;
}
}catch (e26332){var ex__25921__auto__ = e26332;
var statearr_26333_26355 = state_26328;
(statearr_26333_26355[(2)] = ex__25921__auto__);


if(cljs.core.seq((state_26328[(4)]))){
var statearr_26334_26356 = state_26328;
(statearr_26334_26356[(1)] = cljs.core.first((state_26328[(4)])));

} else {
throw ex__25921__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26357 = state_26328;
state_26328 = G__26357;
continue;
} else {
return ret_value__25919__auto__;
}
break;
}
});
app$riddles$answer_$_state_machine__25918__auto__ = function(state_26328){
switch(arguments.length){
case 0:
return app$riddles$answer_$_state_machine__25918__auto____0.call(this);
case 1:
return app$riddles$answer_$_state_machine__25918__auto____1.call(this,state_26328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$riddles$answer_$_state_machine__25918__auto__.cljs$core$IFn$_invoke$arity$0 = app$riddles$answer_$_state_machine__25918__auto____0;
app$riddles$answer_$_state_machine__25918__auto__.cljs$core$IFn$_invoke$arity$1 = app$riddles$answer_$_state_machine__25918__auto____1;
return app$riddles$answer_$_state_machine__25918__auto__;
})()
})();
var state__25964__auto__ = (function (){var statearr_26335 = f__25963__auto__();
(statearr_26335[(6)] = c__25962__auto___26354);

return statearr_26335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25964__auto__);
}));

}
} else {
}

return null;
});
app.riddles.wrong_or_right = (function app$riddles$wrong_or_right(joke_map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var answer_status = (function (){var fexpr__26336 = cljs.core.deref(joke_map);
return (fexpr__26336.cljs$core$IFn$_invoke$arity$1 ? fexpr__26336.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"answer-status","answer-status",-765811772)) : fexpr__26336.call(null,new cljs.core.Keyword(null,"answer-status","answer-status",-765811772)));
})();
var G__26337 = answer_status;
var G__26337__$1 = (((G__26337 instanceof cljs.core.Keyword))?G__26337.fqn:null);
switch (G__26337__$1) {
case "correct":
return "correct";

break;
case "wrong":
return "wrong";

break;
default:
return "cleared";

}
})()], null),(function (){var fexpr__26338 = cljs.core.deref(joke_map);
return (fexpr__26338.cljs$core$IFn$_invoke$arity$1 ? fexpr__26338.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wrong-or-right","wrong-or-right",-2135862773)) : fexpr__26338.call(null,new cljs.core.Keyword(null,"wrong-or-right","wrong-or-right",-2135862773)));
})()], null);
});
app.riddles.riddles = (function app$riddles$riddles(){
document.addEventListener("keypress",app.riddles.handler);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"/css/style.css"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"joke-container centered"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),"RIDDLE QUIZ!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.riddles.joke_display,app.riddles.joke_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.riddles.letter_display,app.riddles.joke_map], null),app.riddles.answer(app.riddles.joke_map),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.riddles.wrong_or_right,app.riddles.joke_map], null)], null)], null);
});

//# sourceMappingURL=app.riddles.js.map
