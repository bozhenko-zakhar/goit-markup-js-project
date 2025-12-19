import{a as _,i as L,S as R,N as x,P as N,K,A as G,b as g}from"./assets/vendor-DPMqQZsn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const M=document.querySelector(".modal-menu"),y=document.querySelector(".header__burger"),W=document.querySelectorAll(".modal-menu__nav a"),m=document.querySelector(".header");function $(){return M.classList.contains("modal-menu--open")}function J(){M.classList.add("modal-menu--open"),y.classList.add("is-open"),y.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),m==null||m.classList.remove("header__blur")}function S(){M.classList.remove("modal-menu--open"),y.classList.remove("is-open"),y.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),m==null||m.classList.add("header__blur")}function Q(){$()?S():J()}y.addEventListener("click",e=>{e.stopPropagation(),Q()});document.addEventListener("keydown",e=>{e.key==="Escape"&&$()&&S()});document.addEventListener("click",e=>{if(!$())return;const t=e.target.closest(".header__burger"),a=e.target.closest(".modal-menu__container");!t&&!a&&S()});W.forEach(e=>e.addEventListener("click",S));const c={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader")},h={animals:new Map},X="https://paw-hut.b.goit.study",P={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};_.defaults.baseURL=X;const Y=async()=>{const{data:e}=await _(`${P.CATEGORIES}`);return e},B=async(e,t)=>{const{data:a}=await _(`${P.PRODUCTS}`,{params:{limit:t,page:e}});return a.animals.forEach(o=>{h.animals.set(o._id,o)}),console.log(h),a},D=async({categoryId:e,page:t=1,limit:a=9})=>{const{data:o}=await _(`${P.PRODUCTS}`,{params:{categoryId:e,page:t,limit:a}});return o.animals.forEach(s=>{h.animals.set(s._id,s)}),console.log(h),o},Z=e=>{const t=e.map(({_id:a,name:o})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${a}" type="button">${o}</button>
 </li>
`).join("");c.categoryList.innerHTML=t},b=e=>{const t=e.map(({_id:a,image:o,species:s,name:n,categories:i,age:u,gender:F,behavior:U})=>{const z=`
                    <ul class="product-card__categories">
                        ${i.map(V=>`<li class="product-card__category">${V.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${a}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${o}" alt="${s}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${s}</p>
                    <h3 class="product-card__name">${n}</h3>

                    ${i.length?z:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${u}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${F}</li>
                    </ul>
            
                    <p class="product-card__info">${U}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${a} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");c.productlist.insertAdjacentHTML("beforeend",t)},j=()=>{const e=window.innerWidth;return e>=1440?"desktop":e>=768?"tablet":"mobile"},q=e=>{switch(e){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},ee=(e,t=300)=>{let a;return(...o)=>{clearTimeout(a),a=setTimeout(()=>e(...o),t)}},te=e=>{document.querySelectorAll(".categories__btn--active").forEach(a=>a.classList.remove("categories__btn--active")),e.classList.add("categories__btn--active")},C=()=>{const e=document.querySelector(".product-card");if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},H=()=>{c.productlist.innerHTML=""};function O(){c.loader.classList.remove("hidden")}function T(){c.loader.classList.add("hidden")}function ae(){c.loadMoreBtn.classList.remove("hidden")}function A(){c.loadMoreBtn.classList.add("hidden")}function v(e,t){e<t?ae():A()}let w=j(),r=1,f="all",d;const se=async()=>{try{const e=await Y();Z([{_id:"all",name:"Всі"},...e]);const a=document.querySelector(".categories__btn");a&&a.classList.add("categories__btn--active")}catch(e){console.log(e),L.error({message:"Oops, something went wrong!"})}},oe=ee(async()=>{const e=j();e!==w&&(w=e)},300);window.addEventListener("resize",oe);const ne=async()=>{H(),O();try{const e=q(w),{animals:t,totalItems:a}=await B(r,e);b(t),d=Math.ceil(a/e),v(r,d)}catch(e){console.log(e),L.error({message:"Oops, something went wrong!"})}finally{T()}},re=async e=>{if(e.target.nodeName!=="BUTTON")return;f=e.target.dataset.categoryId,r=1;const t=q(w);H(),te(e.target),O(),A();try{if(f==="all"){const{animals:a,totalItems:o}=await B(r,t);b(a),d=Math.ceil(o/t),v(r,d)}else{const{animals:a,totalItems:o}=await D({categoryId:f,page:r,limit:t});b(a),d=Math.ceil(o/t),v(r,d)}}catch(a){console.log(a),L.error({message:"Oops, something went wrong!"})}finally{T()}};c.categoryList.addEventListener("click",re);c.loadMoreBtn.addEventListener("click",async()=>{r+=1;const e=q(w);O(),A();try{if(f==="all"){const{animals:t}=await B(r,e);b(t),C(),v(r,d)}else{const{animals:t}=await D({categoryId:f,page:r,limit:e});t.length===0&&c.divNotFound.classList.add("not-found--visible"),b(t),C(),v(r,d)}}catch(t){console.log(t),L.error({message:"Oops, something went wrong!"})}finally{T()}});se();ne();new R(".swiper",{modules:[x,N,K],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".swiper .swiper-button-next",prevEl:".swiper .swiper-button-prev"},pagination:{el:".swiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new G(".accordion",{duration:300,showMultiple:!1,collapse:!0});const ie=document.querySelectorAll("#faq .ac");ie.forEach(e=>{const t=e.querySelector(".icon-plus"),a=e.querySelector(".icon-close");new MutationObserver(()=>{e.classList.contains("is-active")?(t.style.display="none",a.style.display="inline-block"):(t.style.display="inline-block",a.style.display="none")}).observe(e,{attributes:!0,attributeFilter:["class"]})});const ce=document.querySelector(".swiper-wrapper");function le(e){const t=parseFloat(e)||0,a=Math.floor(t)+(t%1>=.5?.5:0);let o="";for(let s=1;s<=5;s++){let n="icon-star-outline";s<=Math.floor(a)?n="icon-star-filled":s===Math.ceil(a)&&a%1!==0&&(n="icon-star-half"),o+=`
      <div class="star">
        <svg class="star-icon">
          <use href="../img/sprite.svg#${n}"></use>
        </svg>
      </div>
    `}return`<div class="rating">${o}</div>`}async function de(){try{const t=await(await fetch("https://paw-hut.b.goit.study/api/feedbacks")).json(),a=Array.isArray(t)?t.slice(0,6):t.feedbacks.slice(0,6);a&&a.length>0&&(ue(a),me())}catch(e){console.error("Помилка завантаження відгуків:",e)}}function ue(e){const t=e.map(a=>`
    <div class="swiper-slide">
      <div class="testimonial-card">
        ${le(a.rate)}
        <p class="testimonial-quote">${a.description}</p>
        <p class="testimonial-author">${a.author}</p>
      </div>
    </div>
  `).join("");ce.innerHTML=t}function me(){new R(".swiper",{modules:[x,N],slidesPerView:1,spaceBetween:32,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{704:{slidesPerView:2}}})}de();const p={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",e=>{const t=e.target.closest(".product-card__btn--learnMore");if(!t)return;console.log(1);const a=t.dataset.modalId;pe(a)});function pe(e){const t=h.animals.get(e);t&&(p.backdrop.innerHTML=ge(t),p.backdrop.classList.add("is-open"))}function ge({image:e,species:t,name:a,age:o,gender:s,description:n,healthStatus:i,behavior:u}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="32" height="32">
							<use href="../img/sprite.svg#icon-close"></use>
					</svg>
			</button>
			<div class="animal-detail-picture-wrap">
					<img src="${e}" alt="${t}" width="295" height="295" class="animal-detail-picture">
			</div>
		
			<div class="animal-detail-info-wrap">
				<div class="animal-detail-animal-preview">
					<p class="animal-detail-animal">${t}</p>
					<h3 class="animal-detail-headline">${a}</h3>
					<ul class="animal-detail-short-info">
							<li class="animal-detail-descript-item">${o}</li>
							<li class="animal-detail-descript-item">${s}</li>
					</ul>
				</div>

				<ul class="animal-detail-info">
					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Опис:</span>
							${n}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Здоров’я:</span>
							${i}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Поведінка:</span>
								${u}
					</li>
				</ul>

				<button type="button" data-btn="take-home" class="animal-detail-get-btn">Взяти додому</button>
			</div>
		</div>
`}p.backdrop.addEventListener("click",e=>{(e.target===p.backdrop||e.target.closest(".animal-detail-close-btn"))&&p.backdrop.classList.remove("is-open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&p.backdrop.classList.remove("is-open")});let fe="682f9bbf8acbdf505592ac36";const l=document.querySelector("[data-modal]"),I=document.querySelector("[data-modal-close]"),E=document.querySelector(".adopt-modal-form");function k(){l==null||l.classList.add("is-hidden"),document.body.classList.remove("modal-open")}I&&I.addEventListener("click",k);l&&l.addEventListener("click",e=>{e.target===l&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!(l!=null&&l.classList.contains("is-hidden"))&&k()});E&&(E.setAttribute("novalidate","true"),E.addEventListener("submit",async e=>{var i;e.preventDefault();const{name:t,phone:a,comment:o}=e.target.elements,s=a.value.replace(/\D/g,"");if(s.length!==12){g.fire({icon:"error",title:"Помилка",text:"Телефон має містити 12 цифр"});return}if(!t.value.trim()){g.fire({icon:"warning",title:"Помилка заповнення",text:"Будь ласка, введіть ваше ім’я"});return}const n={name:t.value.trim(),phone:s,modelId:fe,color:"#1212ca",comment:o.value.trim()||"Запит на знайомство"};try{g.showLoading();const u=await _.post("https://furniture-store.b.goit.study/api/orders",n);console.log("orderData :>> ",u.data),await g.fire({icon:"success",title:"Дякуємо за Вашу заявку!",text:"Запис на знайомство прийнято."}),e.target.reset(),k()}catch(u){console.error("SERVER ERROR:",(i=u.response)==null?void 0:i.data),g.fire({icon:"error",title:"Помилка сервера",text:"Спробуйте пізніше"})}}));
//# sourceMappingURL=index.js.map
