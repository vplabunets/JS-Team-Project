function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=a.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,a){r[e]=a},a.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.900c9fb5.js","fKKvY":"filmWrap.dabdf2b2.jpg","4627Z":"my-library.0c351d56.js"}')),s("g9qdN");var l,i=s("2vqxs"),n=s("lUsL3"),o=s("cky31");l=new URL(s("kyEFX").resolve("fKKvY"),import.meta.url).toString();var d=s("krGWQ");let c=1;function f(e,a){c=e;let t="";e>1&&(t+='<li class="paginationRow">&#129144;</li>'),e>1&&(t+="<li>1</li>"),e>4&&(t+='<li id="left-pagnDots">...</li>'),e>3&&(t+=`<li>${e-2}</li>`),e>2&&(t+=`<li>${e-1}</li>`),t+=`<li class="paginationPage--current">${e}</li>`,a-1>e&&(t+=`<li>${e+1}</li>`),a-2>e&&(t+=`<li>${e+2}</li>`),a-3>e&&(t+='<li id="right-pagnDots">...</li>'),a>e&&(t+=`<li>${e+5}</li>`,t+='<li class="paginationRow">&#129146;</li>'),d.refs.paginationBox.innerHTML=t}var m=s("anlFm");function g(){const e=Array.from(d.refs.imgElArr);0===e.length&&(d.refs.preloaderEl.classList.add("preloader--hide"),d.refs.bodyEl.classList.remove("no-scroll")),e.forEach(((a,t)=>{a.onload=()=>{t===e.length-1&&(d.refs.preloaderEl.classList.add("preloader--hide"),d.refs.bodyEl.classList.remove("no-scroll"),console.log("ВЫКЛ ПРЕЛОУДЕРА"))}}))}function u(e){d.refs.preloaderEl.classList.add("preloader--hide"),d.refs.bodyEl.classList.remove("no-scroll"),window.removeEventListener("load",u)}(d=s("krGWQ")).refs.bodyEl.classList.add("no-scroll"),d.refs.preloaderEl.classList.remove("preloader--hide"),window.addEventListener("load",u);d=s("krGWQ");const p=new(0,n.default);d.refs.paginationBox.addEventListener("click",(async function(e){if(p.filmName)return void console.log("return");{if(console.log("asd"),"LI"!==e.target.nodeName)return;if("🡸"===e.target.textContent){p.setPageNumber(v-=1);const e=await p.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),_(e),f(p.pageNumber,p.totalPages),void g()}if("🡺"===e.target.textContent){p.setPageNumber(v+=1);const e=await p.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),_(e),f(p.pageNumber,p.totalPages),void g()}if("left-pagnDots"===e.target.id){p.setPageNumber(v-=3);const e=await p.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),_(e),f(p.pageNumber,p.totalPages),void g()}if("right-pagnDots"===e.target.id){p.setPageNumber(v+=3);const e=await p.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),_(e),f(p.pageNumber,p.totalPages),void g()}const a=e.target.textContent;p.setPageNumber(Number(a));const t=await p.fetchPopularsFilms();(0,m.cleanerMarkup)(d.refs.cardListEl),_(t),f(p.pageNumber,p.totalPages),g()}}));let v=1;async function _(a){const t=await a;d.refs.fetchDataValue=t;const r=t.map((({id:a,poster_path:t,title:r,genre_ids:s,release_date:n})=>`<li class="film__item">\n        <a class="film__link" id="${a}">\n  <div class="film__wrap">\n      <img src=${t?`https://image.tmdb.org/t/p/original${t}`:e(l)} class="film-item__img" alt="${r}" width="300">\n  </div>\n  <div class="wrap__film>\n  <div class="film__title-wrap">\n  <h3 class="film__title">${r}</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">${(0,i.searchGenresById)(s)?(0,i.searchGenresById)(s):"Unknown genre"}</p>\n  <p class="film__release-date">${n?new Date(n).getFullYear():"Nobody knows"}</p>\n\n   </div>\n   </div>\n   </a>\n   </li>`)).join("");return(0,o.renderFoo)(r,d.refs.cardListEl),await f(p.pageNumber,p.totalPages),r}_(p.fetchPopularsFilms());m=s("anlFm"),i=s("2vqxs"),o=s("cky31"),d=s("krGWQ");let h=1;async function b(a){const t=await a;if(d.refs.fetchDataValue=t,t.length){d.refs.headerErrorEl.classList.add("visually-hidden");const a=t.map((({id:a,poster_path:t,title:r,genre_ids:s,release_date:n})=>`<li class="film__item"><div class="test">\n        <a class="film__link" id="${a}">\n  <div class="film__wrap">\n  <img src=${t?`https://image.tmdb.org/t/p/original${t}`:e(l)} class="film-item__img" alt="${r}" width="300">\n  </div>\n  <div class= "film__info">\n  <div class="film__title-wrap">\n  <h3 class="film__title">${r}</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">${(0,i.searchGenresById)(s)?(0,i.searchGenresById)(s):"Unknown genre"}</p>\n  <p class="film__release-date">${n?new Date(n).getFullYear():"Nobody knows"}</p>\n  </div>\n  \n   </div>\n   </div>\n   </a>\n   </li>`)).join("");return(0,o.renderFoo)(a,d.refs.cardListEl),g(),f(p.pageNumber,p.totalPages),a}await N()}function N(){g(),d.refs.headerErrorEl.classList.remove("visually-hidden"),d.refs.headerFormEl.reset(),(0,m.cleanerMarkup)(d.refs.paginationBox)}d.refs.headerFormEl.addEventListener("submit",(async function(e){e.preventDefault(),p.setPageNumber(1);let a=e.target.elements[0].value.trim();if(d.refs.expFilmName=a,!a)return void N();d.refs.bodyEl.classList.add("no-scroll"),d.refs.preloaderEl.classList.remove("preloader--hide"),setTimeout((()=>{d.refs.bodyEl.scrollIntoView({top:0,behavior:"smooth"})}),100),console.log("ЗАПУСК ПРЕЛОУДЕРА"),(0,m.cleanerMarkup)(d.refs.cardListEl),p.setFilmName(a),b(p.fetchFilmsByName()),d.refs.headerFormEl.reset()})),d.refs.paginationBox.addEventListener("click",(async function(e){if(!p.getFilmName())return;{if("LI"!==e.target.nodeName)return;if("🡸"===e.target.textContent){p.setPageNumber(h-=1),p.getFilmName();const e=await p.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),b(e),f(p.pageNumber,p.totalPages),void g()}if("🡺"===e.target.textContent){p.setPageNumber(h+=1),p.getFilmName();const e=await p.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),b(e),f(p.pageNumber,p.totalPages),void g()}if("left-pagnDots"===e.target.id){p.setPageNumber(h-=3),p.getFilmName();const e=await p.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),b(e),g(),void f(p.pageNumber,p.totalPages)}if("right-pagnDots"===e.target.id){p.setPageNumber(h+=3),p.getFilmName();const e=await p.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),b(e),g(),void f(p.pageNumber,p.totalPages)}const a=e.target.textContent;p.setPageNumber(Number(a));const t=await p.fetchFilmsByName();(0,m.cleanerMarkup)(d.refs.cardListEl),b(t),f(p.pageNumber,p.totalPages),g()}})),s("2eBWb"),s("010fZ"),s("1wH5c"),s("7bYU0"),s("kNOsD"),s("c2dC2");
//# sourceMappingURL=index.900c9fb5.js.map
