goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__35841 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__35841.cljs$core$IFn$_invoke$arity$1 ? fexpr__35841.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__35841.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35843){
var vec__35844 = p__35843;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35844,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__35847 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__35847)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__35847)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__35847)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__35847)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__35847)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__35847)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35847)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__35849){
var map__35850 = p__35849;
var map__35850__$1 = (((((!((map__35850 == null))))?(((((map__35850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35850):map__35850);
var request = map__35850__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__35852 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__35852,default_headers);

cljs_http.core.apply_response_type_BANG_(G__35852,response_type);

G__35852.setTimeoutInterval(timeout);

G__35852.setWithCredentials(send_credentials);

return G__35852;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__35857){
var map__35858 = p__35857;
var map__35858__$1 = (((((!((map__35858 == null))))?(((((map__35858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35858):map__35858);
var request = map__35858__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35858__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35858__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35858__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35858__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35858__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__35863 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__35863) : cljs_http.core.error_kw.call(null,G__35863));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__29877__auto___35922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_35874){
var state_val_35875 = (state_35874[(1)]);
if((state_val_35875 === (1))){
var state_35874__$1 = state_35874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35874__$1,(2),cancel);
} else {
if((state_val_35875 === (2))){
var inst_35865 = (state_35874[(2)]);
var inst_35866 = xhr.isComplete();
var inst_35867 = cljs.core.not(inst_35866);
var state_35874__$1 = (function (){var statearr_35876 = state_35874;
(statearr_35876[(7)] = inst_35865);

return statearr_35876;
})();
if(inst_35867){
var statearr_35877_35923 = state_35874__$1;
(statearr_35877_35923[(1)] = (3));

} else {
var statearr_35878_35924 = state_35874__$1;
(statearr_35878_35924[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35875 === (3))){
var inst_35869 = xhr.abort();
var state_35874__$1 = state_35874;
var statearr_35879_35925 = state_35874__$1;
(statearr_35879_35925[(2)] = inst_35869);

(statearr_35879_35925[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35875 === (4))){
var state_35874__$1 = state_35874;
var statearr_35880_35926 = state_35874__$1;
(statearr_35880_35926[(2)] = null);

(statearr_35880_35926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35875 === (5))){
var inst_35872 = (state_35874[(2)]);
var state_35874__$1 = state_35874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35874__$1,inst_35872);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__29715__auto__ = null;
var cljs_http$core$xhr_$_state_machine__29715__auto____0 = (function (){
var statearr_35884 = [null,null,null,null,null,null,null,null];
(statearr_35884[(0)] = cljs_http$core$xhr_$_state_machine__29715__auto__);

(statearr_35884[(1)] = (1));

return statearr_35884;
});
var cljs_http$core$xhr_$_state_machine__29715__auto____1 = (function (state_35874){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_35874);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e35885){var ex__29718__auto__ = e35885;
var statearr_35886_35928 = state_35874;
(statearr_35886_35928[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_35874[(4)]))){
var statearr_35887_35929 = state_35874;
(statearr_35887_35929[(1)] = cljs.core.first((state_35874[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35930 = state_35874;
state_35874 = G__35930;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__29715__auto__ = function(state_35874){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__29715__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__29715__auto____1.call(this,state_35874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__29715__auto____0;
cljs_http$core$xhr_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__29715__auto____1;
return cljs_http$core$xhr_$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_35891 = f__29878__auto__();
(statearr_35891[(6)] = c__29877__auto___35922);

return statearr_35891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__35892){
var map__35893 = p__35892;
var map__35893__$1 = (((((!((map__35893 == null))))?(((((map__35893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35893):map__35893);
var request = map__35893__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35893__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35893__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35893__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35893__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_35940 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_35940], null));

if(cljs.core.truth_(cancel)){
var c__29877__auto___35942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_35902){
var state_val_35903 = (state_35902[(1)]);
if((state_val_35903 === (1))){
var state_35902__$1 = state_35902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35902__$1,(2),cancel);
} else {
if((state_val_35903 === (2))){
var inst_35899 = (state_35902[(2)]);
var inst_35900 = jsonp.cancel(req_35940);
var state_35902__$1 = (function (){var statearr_35905 = state_35902;
(statearr_35905[(7)] = inst_35899);

return statearr_35905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35902__$1,inst_35900);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__29715__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__29715__auto____0 = (function (){
var statearr_35909 = [null,null,null,null,null,null,null,null];
(statearr_35909[(0)] = cljs_http$core$jsonp_$_state_machine__29715__auto__);

(statearr_35909[(1)] = (1));

return statearr_35909;
});
var cljs_http$core$jsonp_$_state_machine__29715__auto____1 = (function (state_35902){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_35902);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e35910){var ex__29718__auto__ = e35910;
var statearr_35911_35947 = state_35902;
(statearr_35911_35947[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_35902[(4)]))){
var statearr_35912_35948 = state_35902;
(statearr_35912_35948[(1)] = cljs.core.first((state_35902[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35949 = state_35902;
state_35902 = G__35949;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__29715__auto__ = function(state_35902){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__29715__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__29715__auto____1.call(this,state_35902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__29715__auto____0;
cljs_http$core$jsonp_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__29715__auto____1;
return cljs_http$core$jsonp_$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_35913 = f__29878__auto__();
(statearr_35913[(6)] = c__29877__auto___35942);

return statearr_35913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__35914){
var map__35915 = p__35914;
var map__35915__$1 = (((((!((map__35915 == null))))?(((((map__35915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35915):map__35915);
var request = map__35915__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35915__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
