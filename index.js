import{a as L,i as _,S as j,N as x,P as N,K as W,A as J,b as g}from"./assets/vendor-DPMqQZsn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const $=document.querySelector(".modal-menu"),y=document.querySelector(".header__burger"),Q=document.querySelectorAll(".modal-menu__nav a"),p=document.querySelector(".header");function q(){return $.classList.contains("modal-menu--open")}function X(){$.classList.add("modal-menu--open"),y.classList.add("is-open"),y.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),p==null||p.classList.remove("header__blur")}function S(){$.classList.remove("modal-menu--open"),y.classList.remove("is-open"),y.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),p==null||p.classList.add("header__blur")}function Y(){q()?S():X()}y.addEventListener("click",e=>{e.stopPropagation(),Y()});document.addEventListener("keydown",e=>{e.key==="Escape"&&q()&&S()});document.addEventListener("click",e=>{if(!q())return;const t=e.target.closest(".header__burger"),a=e.target.closest(".modal-menu__container");!t&&!a&&S()});Q.forEach(e=>e.addEventListener("click",S));const l={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader")},h={animals:new Map},Z="https://paw-hut.b.goit.study",B={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};L.defaults.baseURL=Z;const ee=async()=>{const{data:e}=await L(`${B.CATEGORIES}`);return e},P=async(e,t)=>{const{data:a}=await L(`${B.PRODUCTS}`,{params:{limit:t,page:e}});return a.animals.forEach(o=>{h.animals.set(o._id,o)}),console.log(h),a},D=async({categoryId:e,page:t=1,limit:a=9})=>{const{data:o}=await L(`${B.PRODUCTS}`,{params:{categoryId:e,page:t,limit:a}});return o.animals.forEach(s=>{h.animals.set(s._id,s)}),console.log(h),o},te=e=>{const t=e.map(({_id:a,name:o})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${a}" type="button">${o}</button>
 </li>
`).join("");l.categoryList.innerHTML=t},b=e=>{const t=e.map(({_id:a,image:o,species:s,name:n,categories:i,age:u,gender:V,behavior:z})=>{const G=`
                    <ul class="product-card__categories">
                        ${i.map(K=>`<li class="product-card__category">${K.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${a}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${o}" alt="${s}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${s}</p>
                    <h3 class="product-card__name">${n}</h3>

                    ${i.length?G:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${u}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${V}</li>
                    </ul>
            
                    <p class="product-card__info">${z}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${a} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");l.productlist.insertAdjacentHTML("beforeend",t)},H=()=>{const e=window.innerWidth;return e>=1440?"desktop":e>=768?"tablet":"mobile"},A=e=>{switch(e){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},ae=(e,t=300)=>{let a;return(...o)=>{clearTimeout(a),a=setTimeout(()=>e(...o),t)}},se=e=>{document.querySelectorAll(".categories__btn--active").forEach(a=>a.classList.remove("categories__btn--active")),e.classList.add("categories__btn--active")},I=()=>{const e=document.querySelector(".product-card");if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},U=()=>{l.productlist.innerHTML=""};function O(){l.loader.classList.remove("hidden")}function T(){l.loader.classList.add("hidden")}function oe(){l.loadMoreBtn.classList.remove("hidden")}function C(){l.loadMoreBtn.classList.add("hidden")}function v(e,t){e<t?oe():C()}let w=H(),r=1,f="all",d;const ne=async()=>{try{const e=await ee();te([{_id:"all",name:"Всі"},...e]);const a=document.querySelector(".categories__btn");a&&a.classList.add("categories__btn--active")}catch(e){console.log(e),_.error({message:"Oops, something went wrong!"})}},ie=ae(async()=>{const e=H();e!==w&&(w=e)},300);window.addEventListener("resize",ie);const re=async()=>{U(),O();try{const e=A(w),{animals:t,totalItems:a}=await P(r,e);b(t),d=Math.ceil(a/e),v(r,d)}catch(e){console.log(e),_.error({message:"Oops, something went wrong!"})}finally{T()}},ce=async e=>{if(e.target.nodeName!=="BUTTON")return;f=e.target.dataset.categoryId,r=1;const t=A(w);U(),se(e.target),O(),C();try{if(f==="all"){const{animals:a,totalItems:o}=await P(r,t);b(a),d=Math.ceil(o/t),v(r,d)}else{const{animals:a,totalItems:o}=await D({categoryId:f,page:r,limit:t});b(a),d=Math.ceil(o/t),v(r,d)}}catch(a){console.log(a),_.error({message:"Oops, something went wrong!"})}finally{T()}};l.categoryList.addEventListener("click",ce);l.loadMoreBtn.addEventListener("click",async()=>{r+=1;const e=A(w);O(),C();try{if(f==="all"){const{animals:t}=await P(r,e);b(t),I(),v(r,d)}else{const{animals:t}=await D({categoryId:f,page:r,limit:e});t.length===0&&l.divNotFound.classList.add("not-found--visible"),b(t),I(),v(r,d)}}catch(t){console.log(t),_.error({message:"Oops, something went wrong!"})}finally{T()}});ne();re();new j(".gallerySwiper",{modules:[x,N,W],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".gallerySwiper .swiper-button-next",prevEl:".gallerySwiper .swiper-button-prev"},pagination:{el:".gallerySwiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new J(".accordion",{duration:300,showMultiple:!1,collapse:!0});const le=document.querySelectorAll("#faq .ac");le.forEach(e=>{const t=e.querySelector(".icon-plus"),a=e.querySelector(".icon-close");new MutationObserver(()=>{e.classList.contains("is-active")?(t.style.display="none",a.style.display="inline-block"):(t.style.display="inline-block",a.style.display="none")}).observe(e,{attributes:!0,attributeFilter:["class"]})});const de=document.querySelector(".testimonials-wrapper");function ue(e){const t=parseFloat(e)||0,a=Math.floor(t)+(t%1>=.5?.5:0);let o="";for(let s=1;s<=5;s++){let n="icon-star-outline",i="outline";s<=Math.floor(a)?(n="icon-star-filled",i="filled"):s===Math.ceil(a)&&a%1!==0&&(n="icon-star-half",i="half"),o+=`
      <div class="star ${i}">
        <svg class="star-icon">
          <use href="../img/sprite.svg#${n}"></use>
        </svg>
      </div>
    `}return`<div class="rating">${o}</div>`}async function me(){try{const t=await(await fetch("https://paw-hut.b.goit.study/api/feedbacks")).json(),a=Array.isArray(t)?t.slice(1,7):t.feedbacks.slice(1,7);a.length&&(pe(a),ge())}catch(e){console.error("Помилка завантаження відгуків:",e)}}function pe(e){de.innerHTML=e.map(t=>`
        <div class="swiper-slide swiper-slide-testimonial">
          <div class="testimonial-card">
            ${ue(t.rate)}
            <p class="testimonial-quote">${t.description}</p>
            <p class="testimonial-author">${t.author}</p>
          </div>
        </div>
      `).join("")}function ge(){const e=document.querySelector(".section.testimonial"),t=e.querySelector(".testimonials-swiper"),a=e.querySelector(".js-testimonials-next"),o=e.querySelector(".js-testimonials-prev"),s=e.querySelector(".testimonials-pagination");new j(t,{modules:[x,N],slidesPerView:1,slidesPerGroup:1,spaceBetween:32,loop:!1,watchOverflow:!0,observer:!0,observeParents:!0,navigation:{nextEl:a,prevEl:o,disabledClass:"swiper-button-isNotActive"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:s,clickable:!0},breakpoints:{768:{slidesPerGroup:1,slidesPerView:2,spaceBetween:32}}})}me();let F="682f9bbf8acbdf505592ac36";const c=document.querySelector("[data-modal]"),R=document.querySelector("[data-modal-close]"),M=document.querySelector(".adopt-modal-form");function fe(e){e&&(F=e),c==null||c.classList.remove("is-hidden"),document.body.classList.add("modal-open"),k()}function E(){c==null||c.classList.add("is-hidden"),document.body.classList.remove("modal-open")}R&&R.addEventListener("click",E);c&&c.addEventListener("click",e=>{e.target===c&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!(c!=null&&c.classList.contains("is-hidden"))&&E()});M&&(M.setAttribute("novalidate","true"),M.addEventListener("submit",async e=>{var i;e.preventDefault();const{name:t,phone:a,comment:o}=e.target.elements,s=a.value.replace(/\D/g,"");if(s.length!==12){g.fire({icon:"error",title:"Помилка",text:"Телефон має містити 12 цифр"});return}if(!t.value.trim()){g.fire({icon:"warning",title:"Помилка заповнення",text:"Будь ласка, введіть ваше ім’я"});return}const n={name:t.value.trim(),phone:s,animalId:F,comment:o.value.trim()||"Запит на знайомство"};try{g.showLoading();const u=await L.post("https://paw-hut.b.goit.study/api/orders",n);console.log("orderData :>> ",u.data),await g.fire({icon:"success",title:"Дякуємо за Вашу заявку!",text:"Запис на знайомство прийнято."}),e.target.reset(),E()}catch(u){console.error("SERVER ERROR:",(i=u.response)==null?void 0:i.data),g.fire({icon:"error",title:"Помилка сервера",text:"Спробуйте пізніше"})}}));const ye="/goit-markup-js-project/assets/sprite-DntPMVyq.svg",m={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",e=>{const t=e.target.closest(".product-card__btn--learnMore");if(!t)return;const a=t.dataset.modalId;he(a)});function he(e){const t=h.animals.get(e);t&&(m.backdrop.innerHTML=be(t),m.backdrop.classList.add("is-open"),document.body.classList.add("not-scroll"),m.dataBtn=document.querySelector("[data-btn]"),m.dataBtn.addEventListener("click",()=>{fe(e),k()}))}function be({image:e,species:t,name:a,age:o,gender:s,description:n,healthStatus:i,behavior:u}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="32" height="32">
							<use href="${ye}#icon-close"></use>
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
`}function k(){m.backdrop.classList.remove("is-open"),document.body.classList.remove("not-scroll")}m.backdrop.addEventListener("click",e=>{(e.target===m.backdrop||e.target.closest(".animal-detail-close-btn"))&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});
//# sourceMappingURL=index.js.map
