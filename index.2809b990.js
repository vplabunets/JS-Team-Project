function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=a.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,a){r[e]=a},a.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.2809b990.js","fKKvY":"filmWrap.dabdf2b2.jpg","4627Z":"my-library.87f23584.js"}')),s("g9qdN");var l,i=s("2vqxs"),n=s("lUsL3"),o=s("cky31");l=new URL(s("kyEFX").resolve("fKKvY"),import.meta.url).toString();var d=s("krGWQ");let c=0;function f(e,a){c=e;let t="";e>1&&(t+='<li class="paginationRow">&#129144;</li>'),e>1&&(t+="<li>1</li>"),e>4&&(t+='<li id="left-pagnDots">...</li>'),e>3&&(t+=`<li>${e-2}</li>`),e>2&&(t+=`<li>${e-1}</li>`),t+=`<li class="paginationPage--current">${e}</li>`,a-1>e&&(t+=`<li>${e+1}</li>`),a-2>e&&(t+=`<li>${e+2}</li>`),a-3>e&&(t+='<li id="right-pagnDots">...</li>'),a>e&&(t+=`<li class="avd">${e+5}</li>`,t+='<li class="paginationRow">&#129146;<li>'),d.refs.paginationBox.innerHTML=t}var m=s("anlFm");function g(){d.refs.bodyEl.classList.add("no-scroll"),d.refs.preloaderEl.classList.remove("preloader--hide"),setTimeout((()=>{d.refs.bodyEl.scrollIntoView({top:0,behavior:"smooth"})}),100)}function u(){d.refs.bodyEl.classList.remove("no-scroll");const e=Array.from(d.refs.imgElArr);0===e.length&&d.refs.preloaderEl.classList.add("preloader--hide"),e.forEach(((a,t)=>{a.onload=()=>{t===e.length-1&&d.refs.preloaderEl.classList.add("preloader--hide")}}))}function p(e){d.refs.preloaderEl.classList.add("preloader--hide"),d.refs.bodyEl.classList.remove("no-scroll"),window.removeEventListener("load",p)}(d=s("krGWQ")).refs.bodyEl.classList.add("no-scroll"),d.refs.preloaderEl.classList.remove("preloader--hide"),window.addEventListener("load",p);d=s("krGWQ");const _=new(0,n.default);d.refs.paginationBox.addEventListener("click",(async function(e){if(g(),"LI"!==e.target.nodeName)return;if("🡸"===e.target.textContent){_.setPageNumber(v-=1);const e=await _.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),h(e),f(_.pageNumber,_.totalPages),void u()}if("🡺"===e.target.textContent){_.setPageNumber(v+=1);const e=await _.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),h(e),f(_.pageNumber,_.totalPages),void u()}if("left-pagnDots"===e.target.id){_.setPageNumber(v-=3);const e=await _.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),h(e),f(_.pageNumber,_.totalPages),void u()}if("right-pagnDots"===e.target.id){_.setPageNumber(v+=3);const e=await _.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),h(e),f(_.pageNumber,_.totalPages),void u()}const a=e.target.textContent;_.setPageNumber(Number(a));const t=await _.fetchPopularsFilms();(0,m.cleanerMarkup)(d.refs.cardListEl),h(t),f(_.pageNumber,_.totalPages),u()}));let v=0;async function h(a){const t=await a;d.refs.fetchDataValue=t;const r=t.map((({id:a,poster_path:t,title:r,genre_ids:s,release_date:n})=>`<li class="film__item">\n        <a class="film__link" id="${a}">\n  <div class="film__wrap">\n      <img src=${t?`https://image.tmdb.org/t/p/original${t}`:e(l)} class="film-item__img" alt="${r}" width="300">\n  </div>\n  <div class="wrap__film>\n  <div class="film__title-wrap">\n  <h3 class="film__title">${r}</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">${(0,i.searchGenresById)(s)?(0,i.searchGenresById)(s):"Unknown genre"}</p>\n  <p class="film__release-date">${n?new Date(n).getFullYear():"Nobody knows"}</p>\n\n   </div>\n   </div>\n   </a>\n   </li>`)).join("");return(0,o.renderFoo)(r,d.refs.cardListEl),await f(_.pageNumber,_.totalPages),r}h(_.fetchPopularsFilms());n=s("lUsL3"),m=s("anlFm"),i=s("2vqxs"),o=s("cky31"),d=s("krGWQ");let b=0;const w=new(0,n.default);async function E(a){const t=await a;if(d.refs.fetchDataValue=t,t.length){d.refs.headerErrorEl.classList.add("visually-hidden");const a=t.map((({id:a,poster_path:t,title:r,genre_ids:s,release_date:n})=>`<li class="film__item"><div class="test">\n        <a class="film__link" id="${a}">\n  <div class="film__wrap">\n  <img src=${t?`https://image.tmdb.org/t/p/original${t}`:e(l)} class="film-item__img" alt="${r}" width="300">\n  </div>\n  <div class= "film__info">\n  <div class="film__title-wrap">\n  <h3 class="film__title">${r}</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">${(0,i.searchGenresById)(s)?(0,i.searchGenresById)(s):"Unknown genre"}</p>\n  <p class="film__release-date">${n?new Date(n).getFullYear():"Nobody knows"}</p>\n  </div>\n  \n   </div>\n   </div>\n   </a>\n   </li>`)).join("");return(0,o.renderFoo)(a,d.refs.cardListEl),u(),f(w.pageNumber,w.totalPages),a}await N()}function N(){u(),d.refs.headerErrorEl.classList.remove("visually-hidden"),d.refs.headerFormEl.reset()}d.refs.headerFormEl.addEventListener("submit",(async function(e){e.preventDefault();let a=e.target.elements[0].value.trim();if(d.refs.expFilmName=a,!a)return void N();g(),(0,m.cleanerMarkup)(d.refs.cardListEl),w.setFilmName(a),E(w.fetchFilmsByName()),d.refs.headerFormEl.reset()})),d.refs.paginationBox.addEventListener("click",(async function(e){if(!w.getFIlmName())return;{if(g(),"LI"!==e.target.nodeName)return;if("🡸"===e.target.textContent){w.setPageNumber(b-=1),w.getFIlmName();const e=await w.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),E(e),void f(w.pageNumber,w.totalPages)}if("🡺"===e.target.textContent){console.log(w.getFIlmName()),w.setPageNumber(b+=1),console.log(w.pageNumber),w.getFIlmName();const e=await w.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),E(e),void f(w.pageNumber,w.totalPages)}if("..."===e.target.textContent)return;const a=e.target.textContent;w.setPageNumber(Number(a));const t=await w.fetchFilmsByName();(0,m.cleanerMarkup)(d.refs.cardListEl),E(t),f(w.pageNumber,w.totalPages),u()}})),s("2eBWb"),s("010fZ"),s("1wH5c"),s("7bYU0"),s("kNOsD"),s("c2dC2");
//# sourceMappingURL=index.2809b990.js.map
