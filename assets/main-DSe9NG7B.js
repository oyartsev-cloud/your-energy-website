var K=Object.defineProperty;var X=(t,e,i)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var h=(t,e,i)=>X(t,typeof e!="symbol"?e+"":e,i);import{a as f,i as y}from"./vendor-XJ88ArH8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();const s={filter:"Muscles",filterValue:"",pagination:null};f.defaults.baseURL="https://your-energy.b.goit.study/api";async function ee(){const t=await f.get(`/filters?filter=${s.filter}&page=${s.pagination.page}&limit=${s.pagination.perPage}`);return s.pagination.page===1&&s.pagination.setMaxPage(t.data.totalPages),t.data.results}async function te(t=""){const e=new URLSearchParams({page:s.pagination.page,limit:s.pagination.perPage});switch(t!=""&&e.set("keyword",t),s.filter){case"Muscles":e.set("muscles",s.filterValue);break;case"Body parts":e.set("bodypart",s.filterValue);break;case"Equipment":e.set("equipment",s.filterValue)}const i=await f.get(`/exercises?${e}`);return s.pagination.page===1&&s.pagination.setMaxPage(i.data.totalPages),i.data.results}async function C(t){return(await f.get(`/exercises/${t}`)).data}async function ie(){return(await f.get("/quote")).data}async function ae(t){try{await f.post("/subscription",{email:t}),y.success({title:"Success",message:"You are now subscribed",position:"bottomCenter"})}catch{y.error({title:"Error",message:"Couldn't subscribe. Email might be already registered",position:"bottomCenter"})}}async function se(t,e){await f.patch(`/exercises/${t}/rating`,e)}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}const $=document.querySelector(".pagination"),ne=document.querySelector(".pagination-pages"),P=document.querySelector(".pagination-back-wrapper"),M=document.querySelector(".pagination-next-wrapper");function d(t,e){e===1?$.style.display="none":$.style.display="flex",t===1?P.style.opacity="20%":P.style.opacity="100%",t===e?M.style.opacity="20%":M.style.opacity="100%";let i=[];for(let a=t-2;a<=t+2;a++)a>0&&a<=e&&i.push(a);let n=i.map(a=>`<li class="pagination-page-number ${a==t?"current":""}">${a}</li>`).join("");t<e-2&&(n+='<li class="pagination-continues">...</li>'),ne.innerHTML=n}const oe=document.querySelector(".content-list");async function l(t=""){const e=(await te(t)).map(i=>`
      <li class="exercise">
        <div class="exercise-line-wrapper">
            <span class="workout">workout</span>
            <div class="rating">
                <span class="rating-value">${i.rating.toFixed(1)}</span>
                <svg class="star-icon" width="18" height="18">
                    <use href="icon-pack/star-icon.svg"></use>
                </svg>
            </div>
            <button class="start-button" data-id="${i._id}" aria-label="Start exercise">
                Start
                <svg class="start-arrow" width="16" height="16">
                    <use href="icon-pack/start-arrow.svg"></use>
                </svg>
            </button>
        </div>
        <div class="exercise-line-wrapper">
            <div class="exercise-icon-wrapper">
                <svg class="exercise-icon" width="24" height="24">
                    <use href="icon-pack/running-icon.svg"></use>
                </svg>
            </div>
            <p class="exercise-name">${c(i.name)}</p>
        </div>
        <div class="exercise-line-wrapper">
            <p class="exercise-info">Burned calories: <span class="exercise-info-value">${i.burnedCalories} / ${i.time}</span></p>
            <p class="exercise-info">Body part: <span class="exercise-info-value">${c(i.bodyPart)}</span></p>
            <p class="exercise-info">Target: <span class="exercise-info-value">${c(i.target)}</span></p>
        </div>
      </li>`).join("");oe.innerHTML=e,d(s.pagination.page,s.pagination.maxPage)}const re=function(){localStorage.getItem("version")===null&&(localStorage.clear(),localStorage.setItem("version","1.0.1"))};re();let w;de();function m(){return JSON.parse(localStorage.getItem("favorites"))??[]}async function ce(t){const e=m(),i=JSON.stringify([...e,t]);localStorage.setItem("favorites",i),ue(t)}function I(t){const e=m(),i=JSON.stringify(e.filter(n=>n!=t));localStorage.setItem("favorites",i),pe(t),s.pagination.purpose==="favorites"&&(s.pagination.updateSize(m().length),u())}function le(t){return w.has(t)}function de(){w=new Set(m())}function ue(t){w.add(t)}function pe(t){w.delete(t)}const B=document.querySelector(".favorite-exercises-list"),ge=document.querySelector(".pagination");async function u(){const t=m();if(t.length===0){B.innerHTML=`
    <li class="favorites-placeholder">
        It appears that you haven't added any exercises to your
        favorites yet. To get started, you can add exercises that you
        like to your favorites for easier access in the future.
    </li>`,ge.style.display="none";return}const e=(s.pagination.page-1)*s.pagination.perPage,i=s.pagination.page*s.pagination.perPage,n=t.slice(e,i),a=await Promise.all(n.map(async o=>{const r=await C(o);return`
          <li class="exercise">
            <div class="exercise-line-wrapper">
                <span class="workout">workout</span>
                <div class="rating">
                    <button type="button" class="remove-favorite-quick-btn" data-id="${r._id}">
                        <svg class="bin-icon" width="18" height="18">
                            <use href="button-icons/delete.svg"></use>
                        </svg>
                    </button>
                </div>
                <button class="start-button" data-id="${r._id}" aria-label="Start exercise">
                    Start
                    <svg class="start-arrow" width="16" height="16">
                        <use href="icon-pack/start-arrow.svg"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-line-wrapper">
                <div class="exercise-icon-wrapper">
                    <svg class="exercise-icon" width="24" height="24">
                        <use href="icon-pack/running-icon.svg"></use>
                    </svg>
                </div>
                <p class="exercise-name">${c(r.name)}</p>
            </div>
            <div class="exercise-line-wrapper">
                <p class="exercise-info">Burned calories: <span class="exercise-info-value">${r.burnedCalories} / ${r.time}</span></p>
                <p class="exercise-info">Body part: <span class="exercise-info-value">${c(r.bodyPart)}</span></p>
                <p class="exercise-info">Target: <span class="exercise-info-value">${c(r.target)}</span></p>
            </div>
          </li>`}));B.innerHTML=a.join("")}const fe=document.querySelector(".content-list");async function g(){const t=(await ee()).map(e=>`<li class="filter-tile" data-value="${e.name}" aria-label="${e.name}">
            <img src="${e.imgURL}" class="filter-image" alt="${e.name}" loading="lazy"/>
            <h3 class="filter-name">${c(e.name)}</h3>
            <p class="filter-category">${e.filter}</p>
        </li>`).join("");fe.innerHTML=t,d(s.pagination.page,s.pagination.maxPage)}class v{constructor(e,i=null){h(this,"perPage");h(this,"page");h(this,"maxPage");h(this,"purpose");this.purpose=e,this.page=1,this.purpose==="filters"?window.matchMedia("(min-width: 768px)").matches?this.perPage=12:this.perPage=9:this.purpose==="favorites"&&window.matchMedia("(min-width: 1440px)").matches?this.perPage=200:(this.purpose,window.matchMedia("(min-width: 768px)").matches?this.perPage=10:this.perPage=8),i?this.updateSize(i):this.maxPage=1,d(this.page,this.maxPage)}getPage(){return this.page}setMaxPage(e){this.maxPage=e}updateSize(e){this.maxPage=Math.ceil(e/this.perPage)}choosePage(e){this.page=e,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}next(){this.page<this.maxPage&&this.page++,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}back(){this.page>1&&this.page--,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}reset(){this.page=1,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}last(){this.page=this.maxPage,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}}const me=document.querySelector(".main-heading"),ve=document.querySelector(".category-heading"),he=document.querySelector(".exercises-search");function ye(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tabs-item");i&&(s.pagination=new v("filters"),me.innerHTML="Exercises",ve.style.display="none",he.style.display="none",document.querySelectorAll(".filter-tabs-item").forEach(n=>n.classList.remove("active")),i.classList.add("active"),s.filter=i.dataset.filter,g())})}function R(){const t=document.querySelector(".pagination-first-button"),e=document.querySelector(".pagination-previous-button"),i=document.querySelector(".pagination-next-button"),n=document.querySelector(".pagination-last-button"),a=document.querySelector(".pagination-pages"),o=function(r){const E=r.target.closest(".pagination-page-number");E&&s.pagination.choosePage(Number(E.innerHTML))};t.addEventListener("click",()=>s.pagination.reset()),e.addEventListener("click",()=>s.pagination.back()),i.addEventListener("click",()=>s.pagination.next()),n.addEventListener("click",()=>s.pagination.last()),a.addEventListener("click",o)}const be=document.querySelector(".nav-toggle"),N=document.querySelector(".nav-close"),S=document.querySelector(".mobile-menu-backdrop");function O(){be.addEventListener("click",()=>{S.classList.add("opened"),xe()})}const b=function(){S.classList.remove("opened"),we()},A=function(t){t.key==="Escape"&&b()},xe=function(){N.addEventListener("click",b),S.addEventListener("click",b),document.addEventListener("keydown",A)},we=function(){N.removeEventListener("click",b),S.removeEventListener("click",b),document.removeEventListener("keydown",A)},Se=document.querySelector(".main-heading"),H=document.querySelector(".category-heading"),qe=document.querySelector(".exercises-search");function Le(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tile");i&&(s.pagination=new v("exercises"),Se.innerHTML="Exercises /",H.innerHTML=c(i.dataset.value),H.style.display="block",qe.style.display="flex",s.filterValue=i.dataset.value,l())})}const ke=document.querySelector(".motivation-text"),Ee=document.querySelector(".motivation-author");function $e(t,e){ke.innerHTML=e,Ee.innerHTML=t}async function D(){let t=JSON.parse(localStorage.getItem("quote"));const e=new Date().getDate();if(!t||t.date!=e){const i=await ie();localStorage.setItem("quote",JSON.stringify({...i,date:e})),t=JSON.parse(localStorage.getItem("quote"))}$e(t.author,t.quote)}function z(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}function _(t){t.addEventListener("submit",e=>{try{e.preventDefault();const i=document.getElementById("subscription-email");if(!z(i.value))throw new Error;ae(i.value),i.value=""}catch{y.error({title:"Error",message:"Invalid email",position:"bottomCenter"})}})}const F=document.getElementById("exercises-search"),q=document.querySelector(".search-delete-button");function Pe(t){t.addEventListener("submit",e=>{e.preventDefault(),s.pagination=new v("exercises"),F.value!=""?l(F.value):l()}),t.addEventListener("input",e=>{e.target.value!=""?q.style.display="block":q.style.display="none"}),t.addEventListener("reset",()=>{q.style.display="none",s.pagination=new v("exercises"),l()})}const Me=document.querySelector(".modal-backdrop"),T=document.querySelector(".modal-body");async function L(t){const e=await C(t);T.innerHTML=`
    <div class="exercise-details-wrapper">
        <img src="${e.gifUrl}" class="exercise-gif" alt="Gif example of how to do the exercise" width="258" height="258"/>
        <div class="exercise-details-container">
            <div class="exercise-header">
                <h3 class="exercise-details-title">${c(e.name)}</h3>
                <div class="exercise-details-rating">
                    <span class="exercise-details-rating-value">${e.rating.toFixed(1)}</span>
                    <div class="rating-stars-container">
                        
                    </div>
                </div>
            </div>
            <ul class="quick-info-list">
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Target</p>
                    <p class="quick-info-value">${c(e.target)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Body Part</p>
                    <p class="quick-info-value">${c(e.bodyPart)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Equipment</p>
                    <p class="quick-info-value">${c(e.equipment)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Popular</p>
                    <p class="quick-info-value">${e.popularity}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Burned Calories</p>
                    <p class="quick-info-value">${e.burnedCalories}/${e.time} min</p>
                </li>
            </ul>
            <p class="exercise-detailed-description">${e.description}</p>

            <div class="exercise-action-buttons">
                ${le(e._id)?'<button type="button" class="remove-from-favorites-btn" data-id="'+e._id+'" aria-label="Remove from favorites">Remove from<svg class="bin-icon" width="20" height="20"><use href="button-icons/delete.svg"></use></svg></button>':'<button type="button" class="add-to-favorites-btn" data-id="'+e._id+'" aria-label="Add to favorites">Add to favorites<svg class="like-icon" width="20" height="20"><use href="button-icons/like.svg"></use></svg></button>'}
                <button type="button" class="give-rating-btn" data-id="${e._id}" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;const i=e.rating,n=T.querySelector(".rating-stars-container");for(let a=1;a<=5;a++){const o=document.createElement("span");o.classList.add("star","filled"),o.innerHTML="★";let r=0;i>=a?r=100:i>a-1?r=(i-(a-1))*100:r=0,o.style.setProperty("--percent",`${r}%`),n.appendChild(o)}Me.classList.remove("is-hidden")}const J=document.querySelector(".modal-body"),V=function(t){const e=t.target.closest(".add-to-favorites-btn"),i=t.target.closest(".remove-from-favorites-btn");if(e){const n=e.dataset.id;ce(n);const a=`
        <button type="button" class="remove-from-favorites-btn" aria-label="Remove from favorites" data-id="${n}">
            Remove from
            <svg class="bin-icon" width="20" height="20">
                <use href="button-icons/delete.svg"></use>
            </svg>
        </button>
      `,o=new DOMParser().parseFromString(a,"text/html").body.firstChild;e.replaceWith(o)}else if(i){const n=i.dataset.id;I(n);const a=`
        <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites" data-id="${n}">
            Add to favorites
            <svg class="like-icon" width="20" height="20">
                <use href="button-icons/like.svg"></use>
            </svg>
        </button>
      `,o=new DOMParser().parseFromString(a,"text/html").body.firstChild;i.replaceWith(o)}};function Be(){J.addEventListener("click",V)}function He(){J.removeEventListener("click",V)}const Fe=document.querySelector(".modal-body");function Te(t){Fe.innerHTML=`
    <form id="rating-form" data-id="${t}">
        <div class="rating-section">
            <label class="rating-label" for="stars-fieldset">Rating</label>
            <div class="rating-line-wrapper">
                <span class="rating-form-value">0.0</span>
                <fieldset id="stars-fieldset" name="stars-fieldset">
                    <span class="star-cb-group">
                        <input type="radio" id="rating-5" name="rating" value="5.0" /><label for="rating-5">5</label>
                        <input type="radio" id="rating-4" name="rating" value="4.0" /><label for="rating-4">4</label>
                        <input type="radio" id="rating-3" name="rating" value="3.0" /><label for="rating-3">3</label>
                        <input type="radio" id="rating-2" name="rating" value="2.0" /><label for="rating-2">2</label>
                        <input type="radio" id="rating-1" name="rating" value="1.0" /><label for="rating-1">1</label>
                    </span>
                </fieldset>
            </div>
        </div>
        <div class="rating-text-section">
            <input type="email" id="rating-email-input" placeholder="Email" required/>
            <textarea id="rating-review-text" placeholder="Your comment"></textarea>
        </div>
        <button type="submit" id="submit-rating-button" aria-label="Submit your review about the exercise">Send</button>
    </form>
    `}const k=document.querySelector(".modal-backdrop"),U=document.querySelector(".modal-close-btn"),p=document.querySelector(".modal-body"),Ce=document.querySelector("header"),Ie=document.querySelector("body"),j=function(t){t.stopPropagation()},x=function(){const t=document.querySelector("#rating-form");t?(Ae(),L(t.dataset.id)):(k.classList.add("is-hidden"),Ie.classList.remove("modal-open"),Ce.style.visibility="visible",He(),Oe())},G=function(t){t.key==="Escape"&&x()},Q=function(t){const e=t.target.closest(".give-rating-btn");if(!e)return;const i=e.dataset.id;Ne(),Te(i)},W=function(t){try{t.preventDefault();const e=t.target.closest("#rating-form");if(!e)return;const i=Number(e.querySelector(".rating-form-value").innerHTML),n=e.querySelector("#rating-email-input").value,a=e.querySelector("#rating-review-text").value,o={rate:i,email:n,review:a};if(!z(n))throw new Error("Invalid email");if(i==0)throw new Error("Rating can't be 0");const r=e.dataset.id;se(r,o),L(r),y.success({title:"Success",message:"Posted a review",position:"bottomCenter"})}catch(e){y.error({title:"Error",message:e.message,position:"bottomCenter"})}},Y=function(t){if(t.target.type==="radio"){const e=document.querySelector(".rating-form-value");e.innerHTML=t.target.value}};function Re(){p.addEventListener("click",j),k.addEventListener("click",x),document.addEventListener("keydown",G),U.addEventListener("click",x),p.addEventListener("click",Q)}function Ne(){p.addEventListener("submit",W),p.addEventListener("change",Y)}function Oe(){p.removeEventListener("click",j),k.removeEventListener("click",x),document.removeEventListener("keydown",G),U.removeEventListener("click",x),p.removeEventListener("click",Q)}function Ae(){p.removeEventListener("submit",W),p.removeEventListener("change",Y)}const De=document.querySelector("header"),ze=document.querySelector("body");function Z(t){t.addEventListener("click",e=>{const i=e.target.closest(".remove-favorite-quick-btn"),n=e.target.closest(".start-button");n?(De.style.visibility="hidden",ze.classList.add("modal-open"),Re(),Be(),L(n.dataset.id)):i&&(I(i.dataset.id),u())})}function _e(){let t=window.location;const e=document.querySelector(".nav-list"),i=t.pathname.lastIndexOf("/")+1;let n=t.pathname.slice(i);n=n.length>0?n:"index.html",e.querySelector('a[href="'+n+'"]').parentNode.classList.add("active"),n==="index.html"?Je():Ve()}async function Je(){O();const t=document.querySelector(".filter-tabs-list"),e=document.querySelector(".content-list");ye(t);const i=document.querySelector(".exercises-search");Pe(i),s.pagination=new v("filters"),g(),Le(e),D(),R(),Z(e);const n=document.querySelector(".subscription-form");_(n)}async function Ve(){O(),D(),s.pagination=new v("favorites",m().length),R();const t=document.querySelector(".favorite-exercises-list");Z(t),u();const e=document.querySelector(".subscription-form");_(e)}_e();
//# sourceMappingURL=main-DSe9NG7B.js.map
