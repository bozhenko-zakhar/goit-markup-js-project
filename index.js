import{a as L,i as _,S as R,N as x,P as N,K as W,A as J,b as f}from"./assets/vendor-DPMqQZsn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const M=document.querySelector(".modal-menu"),y=document.querySelector(".header__burger"),Q=document.querySelectorAll(".modal-menu__nav a"),p=document.querySelector(".header");function $(){return M.classList.contains("modal-menu--open")}function X(){M.classList.add("modal-menu--open"),y.classList.add("is-open"),y.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),p==null||p.classList.remove("header__blur")}function S(){M.classList.remove("modal-menu--open"),y.classList.remove("is-open"),y.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),p==null||p.classList.add("header__blur")}function Y(){$()?S():X()}y.addEventListener("click",e=>{e.stopPropagation(),Y()});document.addEventListener("keydown",e=>{e.key==="Escape"&&$()&&S()});document.addEventListener("click",e=>{if(!$())return;const t=e.target.closest(".header__burger"),a=e.target.closest(".modal-menu__container");!t&&!a&&S()});Q.forEach(e=>e.addEventListener("click",S));const l={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader")},h={animals:new Map},Z="https://paw-hut.b.goit.study",B={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};L.defaults.baseURL=Z;const ee=async()=>{const{data:e}=await L(`${B.CATEGORIES}`);return e},P=async(e,t)=>{const{data:a}=await L(`${B.PRODUCTS}`,{params:{limit:t,page:e}});return a.animals.forEach(o=>{h.animals.set(o._id,o)}),console.log(h),a},D=async({categoryId:e,page:t=1,limit:a=9})=>{const{data:o}=await L(`${B.PRODUCTS}`,{params:{categoryId:e,page:t,limit:a}});return o.animals.forEach(s=>{h.animals.set(s._id,s)}),console.log(h),o},te=e=>{const t=e.map(({_id:a,name:o})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${a}" type="button">${o}</button>
 </li>
`).join("");l.categoryList.innerHTML=t},b=e=>{const t=e.map(({_id:a,image:o,species:s,name:n,categories:c,age:m,gender:z,behavior:V})=>{const K=`
                    <ul class="product-card__categories">
                        ${c.map(G=>`<li class="product-card__category">${G.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${a}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${o}" alt="${s}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${s}</p>
                    <h3 class="product-card__name">${n}</h3>

                    ${c.length?K:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${m}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${z}</li>
                    </ul>
            
                    <p class="product-card__info">${V}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${a} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");l.productlist.insertAdjacentHTML("beforeend",t)},j=()=>{const e=window.innerWidth;return e>=1440?"desktop":e>=768?"tablet":"mobile"},q=e=>{switch(e){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},ae=(e,t=300)=>{let a;return(...o)=>{clearTimeout(a),a=setTimeout(()=>e(...o),t)}},se=e=>{document.querySelectorAll(".categories__btn--active").forEach(a=>a.classList.remove("categories__btn--active")),e.classList.add("categories__btn--active")},C=()=>{const e=document.querySelector(".product-card");if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},H=()=>{l.productlist.innerHTML=""};function A(){l.loader.classList.remove("hidden")}function O(){l.loader.classList.add("hidden")}function oe(){l.loadMoreBtn.classList.remove("hidden")}function T(){l.loadMoreBtn.classList.add("hidden")}function v(e,t){e<t?oe():T()}let w=j(),i=1,g="all",u;const ne=async()=>{try{const e=await ee();te([{_id:"all",name:"Всі"},...e]);const a=document.querySelector(".categories__btn");a&&a.classList.add("categories__btn--active")}catch(e){console.log(e),_.error({message:"Oops, something went wrong!"})}},ie=ae(async()=>{const e=j();e!==w&&(w=e)},300);window.addEventListener("resize",ie);const re=async()=>{H(),A();try{const e=q(w),{animals:t,totalItems:a}=await P(i,e);b(t),u=Math.ceil(a/e),v(i,u)}catch(e){console.log(e),_.error({message:"Oops, something went wrong!"})}finally{O()}},ce=async e=>{if(e.target.nodeName!=="BUTTON")return;g=e.target.dataset.categoryId,i=1;const t=q(w);H(),se(e.target),A(),T();try{if(g==="all"){const{animals:a,totalItems:o}=await P(i,t);b(a),u=Math.ceil(o/t),v(i,u)}else{const{animals:a,totalItems:o}=await D({categoryId:g,page:i,limit:t});b(a),u=Math.ceil(o/t),v(i,u)}}catch(a){console.log(a),_.error({message:"Oops, something went wrong!"})}finally{O()}};l.categoryList.addEventListener("click",ce);l.loadMoreBtn.addEventListener("click",async()=>{i+=1;const e=q(w);A(),T();try{if(g==="all"){const{animals:t}=await P(i,e);b(t),C(),v(i,u)}else{const{animals:t}=await D({categoryId:g,page:i,limit:e});t.length===0&&l.divNotFound.classList.add("not-found--visible"),b(t),C(),v(i,u)}}catch(t){console.log(t),_.error({message:"Oops, something went wrong!"})}finally{O()}});ne();re();new R(".swiper",{modules:[x,N,W],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".swiper .swiper-button-next",prevEl:".swiper .swiper-button-prev"},pagination:{el:".swiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new J(".accordion",{duration:300,showMultiple:!1,collapse:!0});const le=document.querySelectorAll("#faq .ac");le.forEach(e=>{const t=e.querySelector(".icon-plus"),a=e.querySelector(".icon-close");new MutationObserver(()=>{e.classList.contains("is-active")?(t.style.display="none",a.style.display="inline-block"):(t.style.display="inline-block",a.style.display="none")}).observe(e,{attributes:!0,attributeFilter:["class"]})});const de=document.querySelector(".testimonials-wrapper");function ue(e){const t=parseFloat(e)||0,a=Math.floor(t)+(t%1>=.5?.5:0);let o="";for(let s=1;s<=5;s++){let n="icon-star-outline";s<=Math.floor(a)?n="icon-star-filled":s===Math.ceil(a)&&a%1!==0&&(n="icon-star-half"),o+=`
      <div class="star">
        <svg class="star-icon">
          <use href="../img/sprite.svg#${n}"></use>
        </svg>
      </div>
    `}return`<div class="rating">${o}</div>`}async function me(){try{const t=await(await fetch("https://paw-hut.b.goit.study/api/feedbacks")).json(),a=Array.isArray(t)?t.slice(0,6):t.feedbacks.slice(0,6);a.length&&(pe(a),fe())}catch(e){console.error("Помилка завантаження відгуків:",e)}}function pe(e){de.innerHTML=e.map(t=>`
        <div class="swiper-slide">
          <div class="testimonial-card">
            ${ue(t.rate)}
            <p class="testimonial-quote">${t.description}</p>
            <p class="testimonial-author">${t.author}</p>
          </div>
        </div>
      `).join("")}function fe(){new R(".testimonials-swiper",{modules:[x,N],slidesPerView:1,spaceBetween:32,loop:!1,observer:!0,observeParents:!0,navigation:{nextEl:".testimonials-next",prevEl:".testimonials-prev"},pagination:{el:".testimonials-pagination",clickable:!0},breakpoints:{704:{slidesPerView:2}}})}me();let F="682f9bbf8acbdf505592ac36";const r=document.querySelector("[data-modal]"),I=document.querySelector("[data-modal-close]"),k=document.querySelector(".adopt-modal-form");function ge(e){e&&(F=e),r==null||r.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function E(){r==null||r.classList.add("is-hidden"),document.body.classList.remove("modal-open")}I&&I.addEventListener("click",E);r&&r.addEventListener("click",e=>{e.target===r&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!(r!=null&&r.classList.contains("is-hidden"))&&E()});k&&(k.setAttribute("novalidate","true"),k.addEventListener("submit",async e=>{var c;e.preventDefault();const{name:t,phone:a,comment:o}=e.target.elements,s=a.value.replace(/\D/g,"");if(s.length!==12){f.fire({icon:"error",title:"Помилка",text:"Телефон має містити 12 цифр"});return}if(!t.value.trim()){f.fire({icon:"warning",title:"Помилка заповнення",text:"Будь ласка, введіть ваше ім’я"});return}const n={name:t.value.trim(),phone:s,modelId:F,color:"#1212ca",comment:o.value.trim()||"Запит на знайомство"};try{f.showLoading();const m=await L.post("https://furniture-store.b.goit.study/api/orders",n);console.log("orderData :>> ",m.data),await f.fire({icon:"success",title:"Дякуємо за Вашу заявку!",text:"Запис на знайомство прийнято."}),e.target.reset(),E()}catch(m){console.error("SERVER ERROR:",(c=m.response)==null?void 0:c.data),f.fire({icon:"error",title:"Помилка сервера",text:"Спробуйте пізніше"})}}));const d={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",e=>{const t=e.target.closest(".product-card__btn--learnMore");if(!t)return;const a=t.dataset.modalId;ye(a)});function ye(e){const t=h.animals.get(e);t&&(d.backdrop.innerHTML=he(t),d.backdrop.classList.add("is-open"),document.body.classList.add(".not-scroll"),d.dataBtn=document.querySelector("[data-btn]"),d.dataBtn.addEventListener("click",()=>{ge(e),d.backdrop.classList.remove("is-open")}))}function he({image:e,species:t,name:a,age:o,gender:s,description:n,healthStatus:c,behavior:m}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="32" height="32">
							<use href="/img/sprite.svg#icon-close"></use>
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
							${c}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Поведінка:</span>
								${m}
					</li>
				</ul>

				<button type="button" data-btn="take-home" class="animal-detail-get-btn">Взяти додому</button>
			</div>
		</div>
`}function U(){d.backdrop.classList.remove("is-open"),document.body.classList.remove(".not-scroll")}d.backdrop.addEventListener("click",e=>{(e.target===d.backdrop||e.target.closest(".animal-detail-close-btn"))&&U()});document.addEventListener("keydown",e=>{e.key==="Escape"&&U()});
//# sourceMappingURL=index.js.map
