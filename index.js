import{a as h,i as _,S as H,N as j,P as F,K as U,A as x}from"./assets/vendor-DYGtBfcg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const L=document.querySelector(".modal-menu"),p=document.querySelector(".header__burger"),z=document.querySelectorAll(".modal-menu__nav a"),d=document.querySelector(".header");function S(){return L.classList.contains("modal-menu--open")}function D(){L.classList.add("modal-menu--open"),p.classList.add("is-open"),p.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),d==null||d.classList.remove("header__blur")}function v(){L.classList.remove("modal-menu--open"),p.classList.remove("is-open"),p.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),d==null||d.classList.add("header__blur")}function K(){S()?v():D()}p.addEventListener("click",e=>{e.stopPropagation(),K()});document.addEventListener("keydown",e=>{e.key==="Escape"&&S()&&v()});document.addEventListener("click",e=>{if(!S())return;const t=e.target.closest(".header__burger"),a=e.target.closest(".modal-menu__container");!t&&!a&&v()});z.forEach(e=>e.addEventListener("click",v));const r={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader")},g={animals:new Map},G="https://paw-hut.b.goit.study",k={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};h.defaults.baseURL=G;const V=async()=>{const{data:e}=await h(`${k.CATEGORIES}`);return e},$=async(e,t)=>{const{data:a}=await h(`${k.PRODUCTS}`,{params:{limit:t,page:e}});return a.animals.forEach(s=>{g.animals.set(s._id,s)}),console.log(g),a},O=async({categoryId:e,page:t=1,limit:a=9})=>{const{data:s}=await h(`${k.PRODUCTS}`,{params:{categoryId:e,page:t,limit:a}});return s.animals.forEach(o=>{g.animals.set(o._id,o)}),console.log(g),s},W=e=>{const t=e.map(({_id:a,name:s})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${a}" type="button">${s}</button>
 </li>
`).join("");r.categoryList.innerHTML=t},f=e=>{const t=e.map(({_id:a,image:s,species:o,name:n,categories:l,age:w,gender:A,behavior:I})=>{const N=`
                    <ul class="product-card__categories">
                        ${l.map(R=>`<li class="product-card__category">${R.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${a}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${s}" alt="${o}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${o}</p>
                    <h3 class="product-card__name">${n}</h3>

                    ${l.length?N:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${w}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${A}</li>
                    </ul>
            
                    <p class="product-card__info">${I}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${a} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");r.productlist.insertAdjacentHTML("beforeend",t)},T=()=>{const e=window.innerWidth;return e>=1440?"desktop":e>=768?"tablet":"mobile"},E=e=>{switch(e){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},J=(e,t=300)=>{let a;return(...s)=>{clearTimeout(a),a=setTimeout(()=>e(...s),t)}},Q=e=>{document.querySelectorAll(".categories__btn--active").forEach(a=>a.classList.remove("categories__btn--active")),e.classList.add("categories__btn--active")},P=()=>{const e=document.querySelector(".product-card");if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},q=()=>{r.productlist.innerHTML=""};function M(){r.loader.classList.remove("hidden")}function B(){r.loader.classList.add("hidden")}function X(){r.loadMoreBtn.classList.remove("hidden")}function Y(){r.loadMoreBtn.classList.add("hidden")}function y(e,t){e<t?X():Y()}let b=T(),i=1,m="all",c;const Z=async()=>{try{const e=await V();W([{_id:"all",name:"Всі"},...e]);const a=document.querySelector(".categories__btn");a&&a.classList.add("categories__btn--active")}catch(e){console.log(e),_.error({message:"Oops, something went wrong!"})}},ee=J(async()=>{const e=T();e!==b&&(b=e,i=1,await C())},300);window.addEventListener("resize",ee);const C=async()=>{q(),M();try{const e=E(b),{animals:t,totalItems:a}=await $(i,e);f(t),c=Math.ceil(a/e),console.log(c),y(i,c)}catch(e){console.log(e),_.error({message:"Oops, something went wrong!"})}finally{B()}},te=async e=>{if(e.target.nodeName!=="BUTTON")return;m=e.target.dataset.categoryId,i=1;const t=E(b);q(),Q(e.target),r.divNotFound.classList.remove("not-found--visible"),M();try{if(m==="all"){const{animals:a,totalItems:s}=await $(i,t);f(a),c=Math.ceil(s/t),console.log(c),y(i,c)}else{const{animals:a,totalItems:s}=await O({categoryId:m,page:i,limit:t});a.length===0&&r.divNotFound.classList.add("not-found--visible"),f(a),c=Math.ceil(s/t),y(i,c)}}catch(a){console.log(a),_.error({message:"Oops, something went wrong!"})}finally{B()}};r.categoryList.addEventListener("click",te);r.loadMoreBtn.addEventListener("click",async()=>{i+=1;const e=E(b);M();try{if(m==="all"){const{animals:t}=await $(i,e);f(t),P(),y(i,c)}else{const{animals:t}=await O({categoryId:m,page:i,limit:e});t.length===0&&r.divNotFound.classList.add("not-found--visible"),f(t),P(),y(i,c)}}catch(t){console.log(t),_.error({message:"Oops, something went wrong!"})}finally{B()}});Z();C();new H(".swiper",{modules:[j,F,U],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".swiper .swiper-button-next",prevEl:".swiper .swiper-button-prev"},pagination:{el:".swiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new x(".accordion",{duration:300,showMultiple:!1,collapse:!0});const ae=document.querySelectorAll("#faq .ac");ae.forEach(e=>{const t=e.querySelector(".icon-plus"),a=e.querySelector(".icon-close");new MutationObserver(()=>{e.classList.contains("is-active")?(t.style.display="none",a.style.display="inline-block"):(t.style.display="inline-block",a.style.display="none")}).observe(e,{attributes:!0,attributeFilter:["class"]})});const u={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",e=>{const t=e.target.closest(".product-card__btn--learnMore");if(!t)return;console.log(1);const a=t.dataset.modalId;oe(a)});function oe(e){const t=g.animals.get(e);t&&(u.backdrop.innerHTML=se(t),u.backdrop.classList.add("is-open"))}function se({image:e,species:t,name:a,age:s,gender:o,description:n,healthStatus:l,behavior:w}){return`
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
						<li class="animal-detail-descript-item">${s}</li>
						<li class="animal-detail-descript-item">${o}</li>
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
								${w}
					</li>
				</ul>
				<button type="button" data-btn="take-home" class="animal-detail-get-btn animal-detail-get-btn-botom">Взяти додому</button>
			</div>
		</div>
`}u.backdrop.addEventListener("click",e=>{(e.target===u.backdrop||e.target.closest(".animal-detail-close-btn"))&&u.backdrop.classList.remove("is-open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&u.backdrop.classList.remove("is-open")});
//# sourceMappingURL=index.js.map
