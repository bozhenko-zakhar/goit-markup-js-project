import{a as h,i as _,A as H}from"./assets/vendor-BtZwNgFY.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const w=document.querySelector(".modal-menu"),p=document.querySelector(".header__burger"),j=document.querySelectorAll(".modal-menu__nav a"),d=document.querySelector(".header");function S(){return w.classList.contains("modal-menu--open")}function F(){w.classList.add("modal-menu--open"),p.classList.add("is-open"),p.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),d==null||d.classList.remove("header__blur")}function v(){w.classList.remove("modal-menu--open"),p.classList.remove("is-open"),p.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),d==null||d.classList.add("header__blur")}function U(){S()?v():F()}p.addEventListener("click",t=>{t.stopPropagation(),U()});document.addEventListener("keydown",t=>{t.key==="Escape"&&S()&&v()});document.addEventListener("click",t=>{if(!S())return;const e=t.target.closest(".header__burger"),a=t.target.closest(".modal-menu__container");!e&&!a&&v()});j.forEach(t=>t.addEventListener("click",v));const c={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader")},g={animals:new Map},z="https://paw-hut.b.goit.study",k={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};h.defaults.baseURL=z;const D=async()=>{const{data:t}=await h(`${k.CATEGORIES}`);return t},$=async(t,e)=>{const{data:a}=await h(`${k.PRODUCTS}`,{params:{limit:e,page:t}});return a.animals.forEach(s=>{g.animals.set(s._id,s)}),console.log(g),a},P=async({categoryId:t,page:e=1,limit:a=9})=>{const{data:s}=await h(`${k.PRODUCTS}`,{params:{categoryId:t,page:e,limit:a}});return s.animals.forEach(o=>{g.animals.set(o._id,o)}),console.log(g),s},x=t=>{const e=t.map(({_id:a,name:s})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${a}" type="button">${s}</button>
 </li>
`).join("");c.categoryList.innerHTML=e},f=t=>{const e=t.map(({_id:a,image:s,species:o,name:n,categories:l,age:L,gender:A,behavior:I})=>{const N=`
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
                        <li class="product-card__meta-item product-card__meta-item--age">${L}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${A}</li>
                    </ul>
            
                    <p class="product-card__info">${I}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${a} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");c.productlist.insertAdjacentHTML("beforeend",e)},T=()=>{const t=window.innerWidth;return t>=1440?"desktop":t>=768?"tablet":"mobile"},M=t=>{switch(t){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},G=(t,e=300)=>{let a;return(...s)=>{clearTimeout(a),a=setTimeout(()=>t(...s),e)}},K=t=>{document.querySelectorAll(".categories__btn--active").forEach(a=>a.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")},O=()=>{const t=document.querySelector(".product-card");if(!t)return;const{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},q=()=>{c.productlist.innerHTML=""};function E(){c.loader.classList.remove("hidden")}function B(){c.loader.classList.add("hidden")}function W(){c.loadMoreBtn.classList.remove("hidden")}function J(){c.loadMoreBtn.classList.add("hidden")}function y(t,e){t<e?W():J()}let b=T(),i=1,m="all",r;const Q=async()=>{try{const t=await D();x([{_id:"all",name:"Всі"},...t]);const a=document.querySelector(".categories__btn");a&&a.classList.add("categories__btn--active")}catch(t){console.log(t),_.error({message:"Oops, something went wrong!"})}},V=G(async()=>{const t=T();t!==b&&(b=t,i=1,await C())},300);window.addEventListener("resize",V);const C=async()=>{q(),E();try{const t=M(b),{animals:e,totalItems:a}=await $(i,t);f(e),r=Math.ceil(a/t),console.log(r),y(i,r)}catch(t){console.log(t),_.error({message:"Oops, something went wrong!"})}finally{B()}},X=async t=>{if(t.target.nodeName!=="BUTTON")return;m=t.target.dataset.categoryId,i=1;const e=M(b);q(),K(t.target),c.divNotFound.classList.remove("not-found--visible"),E();try{if(m==="all"){const{animals:a,totalItems:s}=await $(i,e);f(a),r=Math.ceil(s/e),console.log(r),y(i,r)}else{const{animals:a,totalItems:s}=await P({categoryId:m,page:i,limit:e});a.length===0&&c.divNotFound.classList.add("not-found--visible"),f(a),r=Math.ceil(s/e),y(i,r)}}catch(a){console.log(a),_.error({message:"Oops, something went wrong!"})}finally{B()}};c.categoryList.addEventListener("click",X);c.loadMoreBtn.addEventListener("click",async()=>{i+=1;const t=M(b);E();try{if(m==="all"){const{animals:e}=await $(i,t);f(e),O(),y(i,r)}else{const{animals:e}=await P({categoryId:m,page:i,limit:t});e.length===0&&c.divNotFound.classList.add("not-found--visible"),f(e),O(),y(i,r)}}catch(e){console.log(e),_.error({message:"Oops, something went wrong!"})}finally{B()}});Q();C();new H(".accordion",{duration:300,showMultiple:!1,collapse:!0});const Y=document.querySelectorAll("#faq .ac");Y.forEach(t=>{const e=t.querySelector(".icon-plus"),a=t.querySelector(".icon-close");new MutationObserver(()=>{t.classList.contains("is-active")?(e.style.display="none",a.style.display="inline-block"):(e.style.display="inline-block",a.style.display="none")}).observe(t,{attributes:!0,attributeFilter:["class"]})});const u={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",t=>{const e=t.target.closest(".product-card__btn--learnMore");if(!e)return;console.log(1);const a=e.dataset.modalId;Z(a)});function Z(t){const e=g.animals.get(t);e&&(u.backdrop.innerHTML=tt(e),u.backdrop.classList.add("is-open"))}function tt({image:t,species:e,name:a,age:s,gender:o,description:n,healthStatus:l,behavior:L}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="14" height="14">
							<use href="../img/sprite.svg#icon-close"></use>
					</svg>
			</button>
			<div class="animal-detail-picture-wrap">
					<img src="${t}" alt="${e}" width="295" height="295" class="animal-detail-picture">
			</div>
		
			<div class="animal-detail-info-wrap">
				<p class="animal-detail-animal">${e}</p>
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
								${L}
					</li>
				</ul>
				<button type="button" data-btn="take-home" class="animal-detail-get-btn animal-detail-get-btn-botom">Взяти додому</button>
			</div>
		</div>
`}u.backdrop.addEventListener("click",t=>{(t.target===u.backdrop||t.target.closest(".animal-detail-close-btn"))&&u.backdrop.classList.remove("is-open")});document.addEventListener("keydown",t=>{t.key==="Escape"&&u.backdrop.classList.remove("is-open")});
//# sourceMappingURL=index.js.map
