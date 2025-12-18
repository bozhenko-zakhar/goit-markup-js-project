import{a as h,i as v,S as q,N as T,P as O,K as x,A as U}from"./assets/vendor-DlJ-zhZ8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const L=document.querySelector(".modal-menu"),m=document.querySelector(".header__burger"),z=document.querySelectorAll(".modal-menu__nav a"),d=document.querySelector(".header");function k(){return L.classList.contains("modal-menu--open")}function D(){L.classList.add("modal-menu--open"),m.classList.add("is-open"),m.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),d==null||d.classList.remove("header__blur")}function w(){L.classList.remove("modal-menu--open"),m.classList.remove("is-open"),m.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),d==null||d.classList.add("header__blur")}function K(){k()?w():D()}m.addEventListener("click",e=>{e.stopPropagation(),K()});document.addEventListener("keydown",e=>{e.key==="Escape"&&k()&&w()});document.addEventListener("click",e=>{if(!k())return;const t=e.target.closest(".header__burger"),a=e.target.closest(".modal-menu__container");!t&&!a&&w()});z.forEach(e=>e.addEventListener("click",w));const r={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader")},g={animals:new Map},V="https://paw-hut.b.goit.study",S={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};h.defaults.baseURL=V;const G=async()=>{const{data:e}=await h(`${S.CATEGORIES}`);return e},$=async(e,t)=>{const{data:a}=await h(`${S.PRODUCTS}`,{params:{limit:t,page:e}});return a.animals.forEach(o=>{g.animals.set(o._id,o)}),console.log(g),a},A=async({categoryId:e,page:t=1,limit:a=9})=>{const{data:o}=await h(`${S.PRODUCTS}`,{params:{categoryId:e,page:t,limit:a}});return o.animals.forEach(s=>{g.animals.set(s._id,s)}),console.log(g),o},W=e=>{const t=e.map(({_id:a,name:o})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${a}" type="button">${o}</button>
 </li>
`).join("");r.categoryList.innerHTML=t},f=e=>{const t=e.map(({_id:a,image:o,species:s,name:n,categories:l,age:_,gender:R,behavior:j})=>{const F=`
                    <ul class="product-card__categories">
                        ${l.map(H=>`<li class="product-card__category">${H.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${a}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${o}" alt="${s}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${s}</p>
                    <h3 class="product-card__name">${n}</h3>

                    ${l.length?F:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${_}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${R}</li>
                    </ul>
            
                    <p class="product-card__info">${j}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${a} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");r.productlist.insertAdjacentHTML("beforeend",t)},C=()=>{const e=window.innerWidth;return e>=1440?"desktop":e>=768?"tablet":"mobile"},M=e=>{switch(e){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},J=(e,t=300)=>{let a;return(...o)=>{clearTimeout(a),a=setTimeout(()=>e(...o),t)}},Q=e=>{document.querySelectorAll(".categories__btn--active").forEach(a=>a.classList.remove("categories__btn--active")),e.classList.add("categories__btn--active")},B=()=>{const e=document.querySelector(".product-card");if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},I=()=>{r.productlist.innerHTML=""};function E(){r.loader.classList.remove("hidden")}function P(){r.loader.classList.add("hidden")}function X(){r.loadMoreBtn.classList.remove("hidden")}function Y(){r.loadMoreBtn.classList.add("hidden")}function b(e,t){e<t?X():Y()}let y=C(),i=1,p="all",c;const Z=async()=>{try{const e=await G();W([{_id:"all",name:"Всі"},...e]);const a=document.querySelector(".categories__btn");a&&a.classList.add("categories__btn--active")}catch(e){console.log(e),v.error({message:"Oops, something went wrong!"})}},ee=J(async()=>{const e=C();e!==y&&(y=e,i=1,await N())},300);window.addEventListener("resize",ee);const N=async()=>{I(),E();try{const e=M(y),{animals:t,totalItems:a}=await $(i,e);f(t),c=Math.ceil(a/e),console.log(c),b(i,c)}catch(e){console.log(e),v.error({message:"Oops, something went wrong!"})}finally{P()}},te=async e=>{if(e.target.nodeName!=="BUTTON")return;p=e.target.dataset.categoryId,i=1;const t=M(y);I(),Q(e.target),r.divNotFound.classList.remove("not-found--visible"),E();try{if(p==="all"){const{animals:a,totalItems:o}=await $(i,t);f(a),c=Math.ceil(o/t),console.log(c),b(i,c)}else{const{animals:a,totalItems:o}=await A({categoryId:p,page:i,limit:t});a.length===0&&r.divNotFound.classList.add("not-found--visible"),f(a),c=Math.ceil(o/t),b(i,c)}}catch(a){console.log(a),v.error({message:"Oops, something went wrong!"})}finally{P()}};r.categoryList.addEventListener("click",te);r.loadMoreBtn.addEventListener("click",async()=>{i+=1;const e=M(y);E();try{if(p==="all"){const{animals:t}=await $(i,e);f(t),B(),b(i,c)}else{const{animals:t}=await A({categoryId:p,page:i,limit:e});t.length===0&&r.divNotFound.classList.add("not-found--visible"),f(t),B(),b(i,c)}}catch(t){console.log(t),v.error({message:"Oops, something went wrong!"})}finally{P()}});Z();N();new q(".swiper",{modules:[T,O,x],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".swiper .swiper-button-next",prevEl:".swiper .swiper-button-prev"},pagination:{el:".swiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new U(".accordion",{duration:300,showMultiple:!1,collapse:!0});const ae=document.querySelectorAll("#faq .ac");ae.forEach(e=>{const t=e.querySelector(".icon-plus"),a=e.querySelector(".icon-close");new MutationObserver(()=>{e.classList.contains("is-active")?(t.style.display="none",a.style.display="inline-block"):(t.style.display="inline-block",a.style.display="none")}).observe(e,{attributes:!0,attributeFilter:["class"]})});const se=document.querySelector(".swiper-wrapper");function oe(e){const t=parseFloat(e)||0,a=Math.floor(t)+(t%1>=.5?.5:0);let o="";for(let s=1;s<=5;s++){let n="icon-star-outline";s<=Math.floor(a)?n="icon-star-filled":s===Math.ceil(a)&&a%1!==0&&(n="icon-star-half"),o+=`
      <div class="star">
        <svg class="star-icon">
          <use href="../img/sprite.svg#${n}"></use>
        </svg>
      </div>
    `}return`<div class="rating">${o}</div>`}async function ne(){try{const t=await(await fetch("https://paw-hut.b.goit.study/api/feedbacks")).json(),a=Array.isArray(t)?t.slice(0,6):t.feedbacks.slice(0,6);a&&a.length>0&&(ie(a),re())}catch(e){console.error("Помилка завантаження відгуків:",e)}}function ie(e){const t=e.map(a=>`
    <div class="swiper-slide">
      <div class="testimonial-card">
        ${oe(a.rate)}
        <p class="testimonial-quote">${a.description}</p>
        <p class="testimonial-author">${a.author}</p>
      </div>
    </div>
  `).join("");se.innerHTML=t}function re(){new q(".swiper",{modules:[T,O],slidesPerView:1,spaceBetween:32,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{704:{slidesPerView:2}}})}ne();const u={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",e=>{const t=e.target.closest(".product-card__btn--learnMore");if(!t)return;console.log(1);const a=t.dataset.modalId;ce(a)});function ce(e){const t=g.animals.get(e);t&&(u.backdrop.innerHTML=le(t),u.backdrop.classList.add("is-open"))}function le({image:e,species:t,name:a,age:o,gender:s,description:n,healthStatus:l,behavior:_}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="14" height="14">
							<use href="../img/sprite.svg#icon-close"></use>
					</svg>
			</button>
			<div class="animal-detail-picture-wrap">
					<img src="${e}" alt="${t}" width="295" height="295" class="animal-detail-picture">
			</div>
		
			<div class="animal-detail-info-wrap">
				<p class="animal-detail-animal">${t}</p>
				<h3 class="animal-detail-headline">${a}</h3>
				<ul class="animal-detail-short-info">
						<li class="animal-detail-descript-item">${o}</li>
						<li class="animal-detail-descript-item">${s}</li>
				</ul>
				<button type="button" data-btn="take-home" class="animal-detail-get-btn animal-detail-get-btn-top">Взяти додому</button>
				<ul class="animal-detail-info">
					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Опис:</span>
							${n}
					</li>
					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Здоров’я:</span>
							${l}
					</li>
					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Поведінка:</span>
								${_}
					</li>
				</ul>
				<button type="button" data-btn="take-home" class="animal-detail-get-btn animal-detail-get-btn-botom">Взяти додому</button>
			</div>
		</div>
`}u.backdrop.addEventListener("click",e=>{(e.target===u.backdrop||e.target.closest(".animal-detail-close-btn"))&&u.backdrop.classList.remove("is-open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&u.backdrop.classList.remove("is-open")});
//# sourceMappingURL=index.js.map
