var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n),n.register;var o=(n("7rYDH"),n("7rYDH")),r=n("iJbGQ"),d=new class{async render(e){console.log("start home rendering");let t=await (0,o.default).searchMovies(e.text),a="",n=0;t.data.results.forEach(e=>{a+=(0,r.default).render(e),n++}),document.getElementById("content").innerHTML=a}},i=n("kDUSD");document.getElementById("search-button").onclick=async function(e){let t=document.getElementById("search-input");await d.render({text:t.value}),function(){for(let e of document.getElementsByClassName("movie-card"))e.onclick=async function(e){let t=e.currentTarget.getAttribute("data-movie-id"),a=await (0,o.default).getMovieDetails(t);(0,i.default).render(a.data);let n=document.getElementById("add-to-watched-btn"),r=document.getElementById("add-to-q-btn");n.onclick=function(e){let t=localStorage.getItem("watchedMovies"),n=[];t&&(n=JSON.parse(t));let o={id:a.data.id,poster_path:a.data.poster_path,original_title:a.data.original_title,vote_average:a.data.vote_average,genre_ids:a.data.genres.map(e=>e.id),release_date:a.data.release_date};n.push(o),localStorage.setItem("watchedMovies",JSON.stringify(n)),console.log(n)},r.onclick=function(e){let t=localStorage.getItem("queuedMovies"),n=[];t&&(n=JSON.parse(t));let o={id:a.data.id,poster_path:a.data.poster_path,original_title:a.data.original_title,vote_average:a.data.vote_average,genre_ids:a.data.genres.map(e=>e.id),release_date:a.data.release_date};n.push(o),localStorage.setItem("queuedMovies",JSON.stringify(n))}}}()};
//# sourceMappingURL=index.8566f451.js.map
