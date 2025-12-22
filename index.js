import{a as k,i as j,S as K,N as Z,P as z,K as at,A as ot,b as h}from"./assets/vendor-DPMqQZsn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const u="/goit-markup-js-project/assets/sprite-DntPMVyq.svg",it=document.querySelector(".header__link-logo"),nt=`
	<svg class="header-logo">
			<use href="${u}#icon-alternate-false"></use>
	</svg>
`;function rt(){it.innerHTML=nt}const A=document.querySelector(".modal-menu"),w=document.querySelector(".header__burger"),ct=document.querySelectorAll(".modal-menu__nav a"),f=document.querySelector(".header"),lt=document.querySelector(".modal-menu__button");function H(){return A.classList.contains("modal-menu--open")}function dt(){A.classList.add("modal-menu--open"),w.classList.add("is-open"),w.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),f==null||f.classList.remove("header__blur")}function L(){A.classList.remove("modal-menu--open"),w.classList.remove("is-open"),w.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),f==null||f.classList.add("header__blur")}function ut(){H()?L():dt()}w.addEventListener("click",t=>{t.stopPropagation(),ut()});document.addEventListener("keydown",t=>{t.key==="Escape"&&H()&&L()});document.addEventListener("click",t=>{if(!H())return;const e=t.target.closest(".header__burger"),s=t.target.closest(".modal-menu__container");!e&&!s&&L()});ct.forEach(t=>t.addEventListener("click",L));rt();lt.addEventListener("click",()=>{L()});const r={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader"),paginationList:document.querySelector(".products-pagination__list"),prevBtn:document.querySelector(".products-pagination__btn--prev"),nextBtn:document.querySelector(".products-pagination__btn--next"),paginationContainer:document.querySelector(".products-pagination-container")},I={animals:new Map},pt="https://paw-hut.b.goit.study",O={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};k.defaults.baseURL=pt;const mt=async()=>{const{data:t}=await k(`${O.CATEGORIES}`);return t},S=async(t,e)=>{const{data:s}=await k(`${O.PRODUCTS}`,{params:{limit:e,page:t}});return s.animals.forEach(i=>{I.animals.set(i._id,i)}),s},D=async({categoryId:t,page:e=1,limit:s=9})=>{const{data:i}=await k(`${O.PRODUCTS}`,{params:{categoryId:t,page:e,limit:s}});return i.animals.forEach(a=>{I.animals.set(a._id,a)}),i},gt=t=>{const e=t.map(({_id:s,name:i})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${s}" type="button">${i}</button>
 </li>
`).join("");r.categoryList.innerHTML=e},_=(t,e=!1)=>{const s=t.map(({_id:i,image:a,species:o,name:l,categories:p,age:Q,gender:Y,behavior:tt})=>{const et=`
                    <ul class="product-card__categories">
                        ${p.map(st=>`<li class="product-card__category">${st.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${i}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${a}" alt="${o}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${o}</p>
                    <h3 class="product-card__name">${l}</h3>

                    ${p.length?et:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${Q}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${Y}</li>
                    </ul>
            
                    <p class="product-card__info">${tt}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${i} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");e?r.productlist.insertAdjacentHTML("beforeend",s):r.productlist.innerHTML=s},$=(t,e)=>{let s="";if(e<=1){r.paginationList.innerHTML="";return}if(e<=3){for(let o=1;o<=e;o++)s+=`
                <li class="products-pagination__item">
                    <button class="products-pagination__btn ${o===t?"products-pagination__btn--active":""}"
                            data-page="${o}"
                            type="button">
                        ${o}
                    </button>
                </li>
            `;r.paginationList.innerHTML=s;return}t>2&&(s+=`<li class="products-pagination__item">
            <button class="products-pagination__btn ${t===1?"products-pagination__btn--active":""}" data-page="1" type="button">1</button>
        </li>`,t>3&&(s+=`<li class="products-pagination__item products-pagination__dots">
                    <span>...</span>
                </li>`));let i=Math.max(1,t-1),a=Math.min(e,t+1);a-i<2&&(i===1?a=Math.min(3,e):a===e&&(i=Math.max(1,e-2)));for(let o=i;o<=a;o++)s+=`<li class="products-pagination__item">
                <button class="products-pagination__btn ${o===t?"products-pagination__btn--active":""}" data-page="${o}" type="button">${o}</button>
            </li>`;t<e-1&&(t<e-2&&(s+=`<li class="products-pagination__item products-pagination__dots">
                    <span>...</span>
                </li>`),s+=`<li class="products-pagination__item">
                <button class="products-pagination__btn ${t===e?"products-pagination__btn--active":""}" data-page="${e}" 
                type="button">${e}</button>
            </li>`),r.paginationList.innerHTML=s},W=()=>{const t=window.innerWidth;return t>=1440?"desktop":t>=768?"tablet":"mobile"},B=t=>{switch(t){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},_t=(t,e=300)=>{let s;return(...i)=>{clearTimeout(s),s=setTimeout(()=>t(...i),e)}},ft=t=>{document.querySelectorAll(".categories__btn--active").forEach(s=>s.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")},T=()=>{const t=document.querySelector(".product-card");if(!t)return;const{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*.5,behavior:"smooth"})},N=()=>{r.productlist.innerHTML=""};function M(){r.loader.classList.remove("hidden")}function x(){r.loader.classList.add("hidden")}function J(){r.loadMoreBtn.classList.remove("hidden")}function R(){r.loadMoreBtn.classList.add("hidden")}function b(t,e){t<e&&v()?J():R()}const P=(t,e)=>{v()||(r.prevBtn.disabled=t===1,r.nextBtn.disabled=t===e),e<=1?r.paginationContainer.style.display="none":r.paginationContainer.style.display="flex"},bt=()=>{r.paginationContainer.style.display="flex"},U=()=>{r.paginationContainer.style.display="none"},v=()=>window.innerWidth<768,F=()=>{v()?(r.paginationContainer.style.display="none",J()):(R(),r.paginationContainer.style.display="flex")};let y=W(),n=1,g="all",c;const yt=async()=>{try{const t=await mt(),e={_id:"all",name:"Всі"},s=[...t].sort((a,o)=>a._id.localeCompare(o._id));gt([e,...s]);const i=document.querySelector(".categories__btn");i&&i.classList.add("categories__btn--active")}catch(t){console.log(t),j.error({message:"Oops, something went wrong!"})}},vt=_t(async()=>{const t=W();t!==y&&(y=t,F())},300);window.addEventListener("resize",vt);const ht=async()=>{N(),M(),U(),n=1;try{const t=B(y),{animals:e,totalItems:s}=await S(n,t);_(e,!1),c=Math.ceil(s/t),b(n,c),v()||$(n,c),P(n,c),F(),b(n,c)}catch(t){console.log(t),j.error({message:"Oops, something went wrong!"})}finally{x()}},wt=async t=>{if(t.target.nodeName!=="BUTTON")return;g=t.target.dataset.categoryId,n=1;const e=B(y);N(),ft(t.target),M(),U();try{if(g==="all"){const{animals:s,totalItems:i}=await S(n,e);_(s,!1),c=Math.ceil(i/e),b(n,c)}else{const{animals:s,totalItems:i}=await D({categoryId:g,page:n,limit:e});_(s,!1),c=Math.ceil(i/e)}b(n,c),v()||$(n,c),P(n,c),F(),T()}catch(s){console.log(s),j.error({message:"Oops, something went wrong!"})}finally{x()}};r.categoryList.addEventListener("click",wt);r.paginationList.addEventListener("click",async t=>{if(t.target.nodeName!=="BUTTON")return;t.target.blur();const e=Number(t.target.dataset.page);e!==n&&(n=e,await V())});r.prevBtn.addEventListener("click",async t=>{t.target.blur(),n!==1&&(n-=1,await V())});r.nextBtn.addEventListener("click",async t=>{t.target.blur(),n!==c&&(n+=1,await V())});const V=async()=>{if(!v()){N(),M(),U();try{const t=B(y);if(g==="all"){const{animals:e,totalItems:s}=await S(n,t);_(e,!1),c=Math.ceil(s/t)}else{const{animals:e,totalItems:s}=await D({categoryId:g,page:n,limit:t});_(e,!1),c=Math.ceil(s/t)}$(n,c),P(n,c),bt()}catch(t){console.log(t),j.error({message:"Oops, something went wrong!"})}finally{x()}}};r.loadMoreBtn.addEventListener("click",async()=>{n+=1;const t=B(y);M(),R();try{if(g==="all"){const{animals:e}=await S(n,t);_(e,!0),T(),b(n,c)}else{const{animals:e}=await D({categoryId:g,page:n,limit:t});_(e,!0),T(),b(n,c)}$(n,c)}catch(e){console.log(e),j.error({message:"Oops, something went wrong!"})}finally{x()}});yt();ht();const kt="/goit-markup-js-project/assets/slide-1-mob-min-dSbCqo9H.jpg",jt="/goit-markup-js-project/assets/slide-1-mob@2x-min-DMWamx1N.jpg",Lt="/goit-markup-js-project/assets/slide-1-tab-min-DIK2ilev.jpg",St="/goit-markup-js-project/assets/slide-1-tab@2x-min-DZwyF8XH.jpg",$t="/goit-markup-js-project/assets/slide-1-desktop-min-CUit_ctj.jpg",Bt="/goit-markup-js-project/assets/slide-1-desktop@2x-min-BsyZrAam.jpg",Mt="/goit-markup-js-project/assets/slide-2-mob-min-Bc5esMqH.jpg",xt="/goit-markup-js-project/assets/slide-2-mob@2x-min-DschUynu.jpg",Et="/goit-markup-js-project/assets/slide-2-tab-min-CmAeux2c.jpg",qt="/goit-markup-js-project/assets/slide-2-tab@2x-min-ZMkCsw4y.jpg",Ct="/goit-markup-js-project/assets/slide-2-desktop-min-BVb5UXDB.jpg",Tt="/goit-markup-js-project/assets/slide-2-desktop@2x-min-hhFJ02Um.jpg",At="/goit-markup-js-project/assets/slide-3-mob-min-DdMDgsZs.jpg",Ht="/goit-markup-js-project/assets/slide-3-mob@2x-min-CW0Jcbru.jpg",It="/goit-markup-js-project/assets/slide-3-tab-min-DBrmqaBK.jpg",Ot="/goit-markup-js-project/assets/slide-3-tab@2x-min-BXJ6Rb3v.jpg",Dt="/goit-markup-js-project/assets/slide-3-desktop-min-Bu_7PKVK.jpg",Nt="/goit-markup-js-project/assets/slide-3-desktop@2x-min-CLG3N8EE.jpg",Rt="/goit-markup-js-project/assets/slide-4-mob-min-9NkQUEbI.jpg",Pt="/goit-markup-js-project/assets/slide-4-mob@2x-min-B9RINJi2.jpg",Ut="/goit-markup-js-project/assets/slide-4-tab-min-Cirko9ef.jpg",Ft="/goit-markup-js-project/assets/slide-4-tab@2x-min-C3_VmGFk.jpg",Vt="/goit-markup-js-project/assets/slide-4-desktop-min-DhDfqD-0.jpg",Gt="/goit-markup-js-project/assets/slide-4-desktop@2x-min-CxR8bxza.jpg",Kt="/goit-markup-js-project/assets/slide-5-mob-min-BiqkKyQ8.jpg",Zt="/goit-markup-js-project/assets/slide-5-mob@2x-min-R3odaZlS.jpg",zt="/goit-markup-js-project/assets/slide-5-tab-min-BsZGumiA.jpg",Wt="/goit-markup-js-project/assets/slide-5-tab@2x-min-RaHw714B.jpg",Jt="/goit-markup-js-project/assets/slide-5-desktop-min-BUEZTg-Z.jpg",Xt="/goit-markup-js-project/assets/slide-5-desktop@2x-min-BX9zHC6l.jpg",Qt=[[$t,Bt,Lt,St,kt,jt,"Людина сидить поруч із безпритульним собакою, демонструючи турботу та довіру","Все почалося у 2015 році з кількох небайдужих людей та одноговрятованого собаки. Сьогодні ми — один з найбільших притулків урегіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."],[Ct,Tt,Et,qt,Mt,xt,"Врятована собака з притулку Хатинка Лапок дивиться в камеру",'Ми рятуємо, реабілітуємо та знаходимо люблячі родини длябезпритульних тварин. Наша мета — не просто дати прихисток, а йзабезпечити кожному "хвостику" щасливе та повноцінне життя в новій'],[Dt,Nt,It,Ot,At,Ht,"Команда волонтерів притулку Хатинка Лапок разом із врятованими тваринами",'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів тадесятків волонтерів, які щодня вкладають свою душу та час у турботупро наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить віднас.'],[Vt,Gt,Ut,Ft,Rt,Pt,"Територія притулку Хатинка Лапок з будівлями та вигульними зонами для тварин","Ми створили безпечний та комфортний простір. Кожна тварина отримуєякісне харчування, своєчасну ветеринарну допомогу, проходитьсоціалізацію та гуляє на спеціально обладнаних майданчиках."],[Jt,Xt,zt,Wt,Kt,Zt,"Людина ніжно обіймає собаку з притулку, символ любові та безпеки","Ваша допомога — безцінна. Ви можете взяти тваринку додому, стативолонтером, допомогти фінансово або інформаційно. Кожен маленькийвнесок наближає нас до великої мети — світу без безпритульнихтварин."]];document.querySelectorAll(".gallerySlide");const Yt=document.querySelector(".galleryWrapper"),te=Qt.map(t=>`
	<div class="swiper-slide gallerySlide">
		<picture>
			<source
				media="(min-width: 1440px)"
				srcset="
					${t[0]} 1x,
					${t[1]} 2x
				"
			/>
			<source
				media="(min-width: 768px)"
				srcset="
					${t[2]} 1x,
					${t[3]} 2x
				"
			/>
			<source
				media="(max-width: 768px)"
				srcset="
					${t[4]} 1x,
					${t[5]} 2x
				"
			/>
			<img
				src="${t[0]}}"
				alt="${t[6]}"
				loading="lazy"
			/>
		</picture>
		<p class="p-overlay">
			${t[7]}
		</p>
	</div>
	`);function ee(){Yt.insertAdjacentHTML("beforeend",te.join(""))}const se=document.querySelector(".galleryNavBtn"),ae=`
	<button
		class="swiper-button-prev galleryBtn"
		type="button"
		aria-label="previous"
	>
		<svg
			class="gallery-btn__icon"
			width="24"
			height="24"
			aria-hidden="true"
		>
			<use href="${u}#icon-arrow_back"></use>
		</svg>
	</button>

	<button
		class="swiper-button-next galleryBtn"
		type="button"
		aria-label="next"
	>
		<svg
			class="gallery-btn__icon"
			width="24"
			height="24"
			aria-hidden="true"
		>
			<use href="${u}#icon-arrow_forward"></use>
		</svg>
	</button>
`;function oe(){se.innerHTML=ae}ee();oe();new K(".gallerySwiper",{modules:[Z,z,at],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".gallerySwiper .swiper-button-next",prevEl:".gallerySwiper .swiper-button-prev"},pagination:{el:".gallerySwiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new ot(".accordion",{duration:300,showMultiple:!1,collapse:!0});const ie=document.querySelectorAll("#faq .ac");ie.forEach(t=>{const e=t.querySelector(".icon-plus"),s=t.querySelector(".icon-close");new MutationObserver(()=>{t.classList.contains("is-active")?(e.style.display="none",s.style.display="inline-block"):(e.style.display="inline-block",s.style.display="none")}).observe(t,{attributes:!0,attributeFilter:["class"]})});const ne=document.querySelector(".testimonial-navigation-buttons"),re=`
	<div class="testimonials-prev js-testimonials-prev">
		<svg class="icon-back" viewBox="0 0 24 24">
			<use href="${u}#icon-arrow_back"></use>
		</svg>
	</div>
	<div class="testimonials-next js-testimonials-next">
		<svg class="icon-forward" viewBox="0 0 24 24">
			<use href="${u}#icon-arrow_forward"></use>
		</svg>
	</div>
`;function ce(){ne.innerHTML=re}const le=document.querySelector(".testimonials-wrapper");function de(t){const e=parseFloat(t)||0,s=Math.floor(e)+(e%1>=.5?.5:0);let i="";for(let a=1;a<=5;a++){let o="icon-star-outline",l="outline";a<=Math.floor(s)?(o="icon-star-filled",l="filled"):a===Math.ceil(s)&&s%1!==0&&(o="icon-star-half",l="half"),i+=`
      <div class="star ${l}">
        <svg class="star-icon">
          <use href="${u}#${o}"></use>
        </svg>
      </div>
    `}return`<div class="rating">${i}</div>`}async function ue(){try{const e=await(await fetch("https://paw-hut.b.goit.study/api/feedbacks")).json(),s=Array.isArray(e)?e.slice(1,7):e.feedbacks.slice(1,7);s.length&&(pe(s),me())}catch(t){console.error("Помилка завантаження відгуків:",t)}}function pe(t){le.innerHTML=t.map(e=>`
        <div class="swiper-slide swiper-slide-testimonial">
          <div class="testimonial-card">
            ${de(e.rate)}
            <p class="testimonial-quote">${e.description}</p>
            <p class="testimonial-author">${e.author}</p>
          </div>
        </div>
      `).join("")}function me(){const t=document.querySelector(".section.testimonial"),e=t.querySelector(".testimonials-swiper"),s=t.querySelector(".js-testimonials-next"),i=t.querySelector(".js-testimonials-prev"),a=t.querySelector(".testimonials-pagination");new K(e,{modules:[Z,z],slidesPerView:1,slidesPerGroup:1,spaceBetween:32,loop:!1,watchOverflow:!0,observer:!0,observeParents:!0,navigation:{nextEl:s,prevEl:i,disabledClass:"swiper-button-isNotActive"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:a,clickable:!0},breakpoints:{768:{slidesPerGroup:1,slidesPerView:2,spaceBetween:32}}})}ue();ce();const ge=document.querySelector(".footer-logo"),_e=document.querySelector(".footer-social-links-list"),fe=`
<svg class="footer-logo-icon">
		<use href="${u}#icon-alternate-false"></use>
</svg>
`,be=`
<li class="footer-social-links-list-item">
	<a href="https://www.facebook.com/" class="footer-social-icon" target="_blank">
		<svg class="footer-social-icon-unit">
				<use href="${u}#icon-facebook"></use>
		</svg>
	</a>
</li>
<li class="footer-social-links-list-item">
	<a href="https://www.instagram.com/" class="footer-social-icon" target="_blank">
		<svg class="footer-social-icon-unit">
				<use href="${u}#icon-instagram"></use>
		</svg>
	</a>
</li>
`;function ye(){ge.innerHTML=fe,_e.innerHTML=be}ye();let X="682f9bbf8acbdf505592ac36";const d=document.querySelector("[data-modal]"),G=document.querySelector("[data-modal-close]"),C=document.querySelector(".adopt-modal-form");function ve(t){t&&(X=t),d==null||d.classList.remove("is-hidden"),document.body.classList.add("modal-open"),q()}function E(){d==null||d.classList.add("is-hidden"),document.body.classList.remove("modal-open")}G&&G.addEventListener("click",E);d&&d.addEventListener("click",t=>{t.target===d&&E()});document.addEventListener("keydown",t=>{t.key==="Escape"&&!(d!=null&&d.classList.contains("is-hidden"))&&E()});C&&(C.setAttribute("novalidate","true"),C.addEventListener("submit",async t=>{var l;t.preventDefault();const{name:e,phone:s,comment:i}=t.target.elements,a=s.value.replace(/\D/g,"");if(a.length!==12){h.fire({icon:"error",title:"Помилка",text:"Телефон має містити 12 цифр"});return}if(!e.value.trim()){h.fire({icon:"warning",title:"Помилка заповнення",text:"Будь ласка, введіть ваше ім’я"});return}const o={name:e.value.trim(),phone:a,animalId:X,comment:i.value.trim()||"Запит на знайомство"};try{h.showLoading();const p=await k.post("https://paw-hut.b.goit.study/api/orders",o);console.log("orderData :>> ",p.data),await h.fire({icon:"success",title:"Дякуємо за Вашу заявку!",text:"Запис на знайомство прийнято."}),t.target.reset(),E()}catch(p){console.error("SERVER ERROR:",(l=p.response)==null?void 0:l.data),h.fire({icon:"error",title:"Помилка сервера",text:"Спробуйте пізніше"})}}));const m={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",t=>{const e=t.target.closest(".product-card__btn--learnMore");if(!e)return;const s=e.dataset.modalId;he(s)});function he(t){const e=I.animals.get(t);e&&(m.backdrop.innerHTML=we(e),m.backdrop.classList.add("is-open"),document.body.classList.add("not-scroll"),m.dataBtn=document.querySelector("[data-btn]"),m.dataBtn.addEventListener("click",()=>{ve(t),q()}))}function we({image:t,species:e,name:s,age:i,gender:a,description:o,healthStatus:l,behavior:p}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="32" height="32">
							<use href="${u}#icon-close"></use>
					</svg>
			</button>
			<div class="animal-detail-picture-wrap">
					<img src="${t}" alt="${e}" width="295" height="295" class="animal-detail-picture">
			</div>
		
			<div class="animal-detail-info-wrap">
				<div class="animal-detail-animal-preview">
					<p class="animal-detail-animal">${e}</p>
					<h3 class="animal-detail-headline">${s}</h3>
					<ul class="animal-detail-short-info">
							<li class="animal-detail-descript-item">${i}</li>
							<li class="animal-detail-descript-item">${a}</li>
					</ul>
				</div>

				<ul class="animal-detail-info">
					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Опис:</span>
							${o}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Здоров’я:</span>
							${l}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Поведінка:</span>
								${p}
					</li>
				</ul>

				<button type="button" data-btn="take-home" class="animal-detail-get-btn">Взяти додому</button>
			</div>
		</div>
`}function q(){m.backdrop.classList.remove("is-open"),document.body.classList.remove("not-scroll")}m.backdrop.addEventListener("click",t=>{(t.target===m.backdrop||t.target.closest(".animal-detail-close-btn"))&&q()});document.addEventListener("keydown",t=>{t.key==="Escape"&&q()});
//# sourceMappingURL=index.js.map
