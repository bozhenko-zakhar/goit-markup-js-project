import{a as k,i as j,S as K,N as Z,P as z,K as ae,A as oe,b as h}from"./assets/vendor-DPMqQZsn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const u="/goit-markup-js-project/assets/sprite-DntPMVyq.svg",ie=document.querySelector(".header__link-logo"),ne=`
	<svg class="header-logo">
			<use href="${u}#icon-alternate-false"></use>
	</svg>
`;function re(){ie.innerHTML=ne}const A=document.querySelector(".modal-menu"),w=document.querySelector(".header__burger"),ce=document.querySelectorAll(".modal-menu__nav a"),f=document.querySelector(".header"),le=document.querySelector(".modal-menu__button");function H(){return A.classList.contains("modal-menu--open")}function de(){A.classList.add("modal-menu--open"),w.classList.add("is-open"),w.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),f==null||f.classList.remove("header__blur")}function L(){A.classList.remove("modal-menu--open"),w.classList.remove("is-open"),w.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),f==null||f.classList.add("header__blur")}function ue(){H()?L():de()}w.addEventListener("click",e=>{e.stopPropagation(),ue()});document.addEventListener("keydown",e=>{e.key==="Escape"&&H()&&L()});document.addEventListener("click",e=>{if(!H())return;const t=e.target.closest(".header__burger"),s=e.target.closest(".modal-menu__container");!t&&!s&&L()});ce.forEach(e=>e.addEventListener("click",L));re();le.addEventListener("click",()=>{L()});const r={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader"),paginationList:document.querySelector(".products-pagination__list"),prevBtn:document.querySelector(".products-pagination__btn--prev"),nextBtn:document.querySelector(".products-pagination__btn--next"),paginationContainer:document.querySelector(".products-pagination-container")},I={animals:new Map},pe="https://paw-hut.b.goit.study",O={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};k.defaults.baseURL=pe;const me=async()=>{const{data:e}=await k(`${O.CATEGORIES}`);return e},S=async(e,t)=>{const{data:s}=await k(`${O.PRODUCTS}`,{params:{limit:t,page:e}});return s.animals.forEach(i=>{I.animals.set(i._id,i)}),s},D=async({categoryId:e,page:t=1,limit:s=9})=>{const{data:i}=await k(`${O.PRODUCTS}`,{params:{categoryId:e,page:t,limit:s}});return i.animals.forEach(a=>{I.animals.set(a._id,a)}),i},ge=e=>{const t=e.map(({_id:s,name:i})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${s}" type="button">${i}</button>
 </li>
`).join("");r.categoryList.innerHTML=t},_=(e,t=!1)=>{const s=e.map(({_id:i,image:a,species:o,name:l,categories:p,age:Q,gender:Y,behavior:ee})=>{const te=`
                    <ul class="product-card__categories">
                        ${p.map(se=>`<li class="product-card__category">${se.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${i}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${a}" alt="${o}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${o}</p>
                    <h3 class="product-card__name">${l}</h3>

                    ${p.length?te:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${Q}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${Y}</li>
                    </ul>
            
                    <p class="product-card__info">${ee}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${i} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");t?r.productlist.insertAdjacentHTML("beforeend",s):r.productlist.innerHTML=s},$=(e,t)=>{let s="";if(t<=1){r.paginationList.innerHTML="";return}if(t<=3){for(let o=1;o<=t;o++)s+=`
                <li class="products-pagination__item">
                    <button class="products-pagination__btn ${o===e?"products-pagination__btn--active":""}"
                            data-page="${o}"
                            type="button">
                        ${o}
                    </button>
                </li>
            `;r.paginationList.innerHTML=s;return}e>2&&(s+=`<li class="products-pagination__item">
            <button class="products-pagination__btn ${e===1?"products-pagination__btn--active":""}" data-page="1" type="button">1</button>
        </li>`,e>3&&(s+=`<li class="products-pagination__item products-pagination__dots">
                    <span>...</span>
                </li>`));let i=Math.max(1,e-1),a=Math.min(t,e+1);a-i<2&&(i===1?a=Math.min(3,t):a===t&&(i=Math.max(1,t-2)));for(let o=i;o<=a;o++)s+=`<li class="products-pagination__item">
                <button class="products-pagination__btn ${o===e?"products-pagination__btn--active":""}" data-page="${o}" type="button">${o}</button>
            </li>`;e<t-1&&(e<t-2&&(s+=`<li class="products-pagination__item products-pagination__dots">
                    <span>...</span>
                </li>`),s+=`<li class="products-pagination__item">
                <button class="products-pagination__btn ${e===t?"products-pagination__btn--active":""}" data-page="${t}" 
                type="button">${t}</button>
            </li>`),r.paginationList.innerHTML=s},W=()=>{const e=window.innerWidth;return e>=1440?"desktop":e>=768?"tablet":"mobile"},B=e=>{switch(e){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},_e=(e,t=300)=>{let s;return(...i)=>{clearTimeout(s),s=setTimeout(()=>e(...i),t)}},fe=e=>{document.querySelectorAll(".categories__btn--active").forEach(s=>s.classList.remove("categories__btn--active")),e.classList.add("categories__btn--active")},T=()=>{const e=document.querySelector(".product-card");if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*.5,behavior:"smooth"})},N=()=>{r.productlist.innerHTML=""};function M(){r.loader.classList.remove("hidden")}function x(){r.loader.classList.add("hidden")}function J(){r.loadMoreBtn.classList.remove("hidden")}function R(){r.loadMoreBtn.classList.add("hidden")}function b(e,t){e<t&&v()?J():R()}const P=(e,t)=>{v()||(r.prevBtn.disabled=e===1,r.nextBtn.disabled=e===t),t<=1?r.paginationContainer.style.display="none":r.paginationContainer.style.display="flex"},be=()=>{r.paginationContainer.style.display="flex"},U=()=>{r.paginationContainer.style.display="none"},v=()=>window.innerWidth<768,F=()=>{v()?(r.paginationContainer.style.display="none",J()):(R(),r.paginationContainer.style.display="flex")};let y=W(),n=1,g="all",c;const ye=async()=>{try{const e=await me(),t={_id:"all",name:"Всі"},s=[...e].sort((a,o)=>a._id.localeCompare(o._id));ge([t,...s]);const i=document.querySelector(".categories__btn");i&&i.classList.add("categories__btn--active")}catch(e){console.log(e),j.error({message:"Oops, something went wrong!"})}},ve=_e(async()=>{const e=W();e!==y&&(y=e,F())},300);window.addEventListener("resize",ve);const he=async()=>{N(),M(),U(),n=1;try{const e=B(y),{animals:t,totalItems:s}=await S(n,e);_(t,!1),c=Math.ceil(s/e),b(n,c),v()||$(n,c),P(n,c),F(),b(n,c)}catch(e){console.log(e),j.error({message:"Oops, something went wrong!"})}finally{x()}},we=async e=>{if(e.target.nodeName!=="BUTTON")return;g=e.target.dataset.categoryId,n=1;const t=B(y);N(),fe(e.target),M(),U();try{if(g==="all"){const{animals:s,totalItems:i}=await S(n,t);_(s,!1),c=Math.ceil(i/t),b(n,c)}else{const{animals:s,totalItems:i}=await D({categoryId:g,page:n,limit:t});_(s,!1),c=Math.ceil(i/t)}b(n,c),v()||$(n,c),P(n,c),F(),T()}catch(s){console.log(s),j.error({message:"Oops, something went wrong!"})}finally{x()}};r.categoryList.addEventListener("click",we);r.paginationList.addEventListener("click",async e=>{if(e.target.nodeName!=="BUTTON")return;e.target.blur();const t=Number(e.target.dataset.page);t!==n&&(n=t,await V())});r.prevBtn.addEventListener("click",async e=>{e.target.blur(),n!==1&&(n-=1,await V())});r.nextBtn.addEventListener("click",async e=>{e.target.blur(),n!==c&&(n+=1,await V())});const V=async()=>{if(!v()){N(),M(),U();try{const e=B(y);if(g==="all"){const{animals:t,totalItems:s}=await S(n,e);_(t,!1),c=Math.ceil(s/e)}else{const{animals:t,totalItems:s}=await D({categoryId:g,page:n,limit:e});_(t,!1),c=Math.ceil(s/e)}$(n,c),P(n,c),be()}catch(e){console.log(e),j.error({message:"Oops, something went wrong!"})}finally{x()}}};r.loadMoreBtn.addEventListener("click",async()=>{n+=1;const e=B(y);M(),R();try{if(g==="all"){const{animals:t}=await S(n,e);_(t,!0),T(),b(n,c)}else{const{animals:t}=await D({categoryId:g,page:n,limit:e});_(t,!0),T(),b(n,c)}$(n,c)}catch(t){console.log(t),j.error({message:"Oops, something went wrong!"})}finally{x()}});ye();he();const ke="/goit-markup-js-project/assets/slide-1-mob-min-dSbCqo9H.jpg",je="/goit-markup-js-project/assets/slide-1-mob@2x-min-DMWamx1N.jpg",Le="/goit-markup-js-project/assets/slide-1-tab-min-DIK2ilev.jpg",Se="/goit-markup-js-project/assets/slide-1-tab@2x-min-DZwyF8XH.jpg",$e="/goit-markup-js-project/assets/slide-1-desktop-min-CUit_ctj.jpg",Be="/goit-markup-js-project/assets/slide-1-desktop@2x-min-BsyZrAam.jpg",Me="/goit-markup-js-project/assets/slide-2-mob-min-Bc5esMqH.jpg",xe="/goit-markup-js-project/assets/slide-2-mob@2x-min-DschUynu.jpg",qe="/goit-markup-js-project/assets/slide-2-tab-min-CmAeux2c.jpg",Ee="/goit-markup-js-project/assets/slide-2-tab@2x-min-ZMkCsw4y.jpg",Ce="/goit-markup-js-project/assets/slide-2-desktop-min-BVb5UXDB.jpg",Te="/goit-markup-js-project/assets/slide-2-desktop@2x-min-hhFJ02Um.jpg",Ae="/goit-markup-js-project/assets/slide-3-mob-min-DdMDgsZs.jpg",He="/goit-markup-js-project/assets/slide-3-mob@2x-min-CW0Jcbru.jpg",Ie="/goit-markup-js-project/assets/slide-3-tab-min-DBrmqaBK.jpg",Oe="/goit-markup-js-project/assets/slide-3-tab@2x-min-BXJ6Rb3v.jpg",De="/goit-markup-js-project/assets/slide-3-desktop-min-Bu_7PKVK.jpg",Ne="/goit-markup-js-project/assets/slide-3-desktop@2x-min-CLG3N8EE.jpg",Re="/goit-markup-js-project/assets/slide-4-mob-min-9NkQUEbI.jpg",Pe="/goit-markup-js-project/assets/slide-4-mob@2x-min-B9RINJi2.jpg",Ue="/goit-markup-js-project/assets/slide-4-tab-min-Cirko9ef.jpg",Fe="/goit-markup-js-project/assets/slide-4-tab@2x-min-C3_VmGFk.jpg",Ve="/goit-markup-js-project/assets/slide-4-desktop-min-DhDfqD-0.jpg",Ge="/goit-markup-js-project/assets/slide-4-desktop@2x-min-CxR8bxza.jpg",Ke="/goit-markup-js-project/assets/slide-5-mob-min-BiqkKyQ8.jpg",Ze="/goit-markup-js-project/assets/slide-5-mob@2x-min-R3odaZlS.jpg",ze="/goit-markup-js-project/assets/slide-5-tab-min-BsZGumiA.jpg",We="/goit-markup-js-project/assets/slide-5-tab@2x-min-RaHw714B.jpg",Je="/goit-markup-js-project/assets/slide-5-desktop-min-BUEZTg-Z.jpg",Xe="/goit-markup-js-project/assets/slide-5-desktop@2x-min-BX9zHC6l.jpg",Qe=[[$e,Be,Le,Se,ke,je,"Людина сидить поруч із безпритульним собакою, демонструючи турботу та довіру","Все почалося у 2015 році з кількох небайдужих людей та одноговрятованого собаки. Сьогодні ми — один з найбільших притулків урегіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."],[Ce,Te,qe,Ee,Me,xe,"Врятована собака з притулку Хатинка Лапок дивиться в камеру",'Ми рятуємо, реабілітуємо та знаходимо люблячі родини длябезпритульних тварин. Наша мета — не просто дати прихисток, а йзабезпечити кожному "хвостику" щасливе та повноцінне життя в новій'],[De,Ne,Ie,Oe,Ae,He,"Команда волонтерів притулку Хатинка Лапок разом із врятованими тваринами",'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів тадесятків волонтерів, які щодня вкладають свою душу та час у турботупро наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить віднас.'],[Ve,Ge,Ue,Fe,Re,Pe,"Територія притулку Хатинка Лапок з будівлями та вигульними зонами для тварин","Ми створили безпечний та комфортний простір. Кожна тварина отримуєякісне харчування, своєчасну ветеринарну допомогу, проходитьсоціалізацію та гуляє на спеціально обладнаних майданчиках."],[Je,Xe,ze,We,Ke,Ze,"Людина ніжно обіймає собаку з притулку, символ любові та безпеки","Ваша допомога — безцінна. Ви можете взяти тваринку додому, стативолонтером, допомогти фінансово або інформаційно. Кожен маленькийвнесок наближає нас до великої мети — світу без безпритульнихтварин."]];document.querySelectorAll(".gallerySlide");const Ye=document.querySelector(".galleryWrapper"),et=Qe.map(e=>`
	<div class="swiper-slide gallerySlide">
		<picture>
			<source
				media="(min-width: 1440px)"
				srcset="
					${e[0]} 1x,
					${e[1]} 2x
				"
			/>
			<source
				media="(min-width: 768px)"
				srcset="
					${e[2]} 1x,
					${e[3]} 2x
				"
			/>
			<source
				media="(max-width: 768px)"
				srcset="
					${e[4]} 1x,
					${e[5]} 2x
				"
			/>
			<img
				src="${e[0]}}"
				alt="${e[6]}"
				loading="lazy"
			/>
		</picture>
		<p class="p-overlay">
			${e[7]}
		</p>
	</div>
	`);function tt(){Ye.insertAdjacentHTML("beforeend",et.join(""))}const st=document.querySelector(".galleryNavBtn"),at=`
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
`;function ot(){st.innerHTML=at}tt();ot();new K(".gallerySwiper",{modules:[Z,z,ae],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".gallerySwiper .swiper-button-next",prevEl:".gallerySwiper .swiper-button-prev"},pagination:{el:".gallerySwiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new oe(".accordion",{duration:300,showMultiple:!1,collapse:!0});const it=document.querySelectorAll("#faq .ac");it.forEach(e=>{const t=e.querySelector(".icon-plus"),s=e.querySelector(".icon-close");new MutationObserver(()=>{e.classList.contains("is-active")?(t.style.display="none",s.style.display="inline-block"):(t.style.display="inline-block",s.style.display="none")}).observe(e,{attributes:!0,attributeFilter:["class"]})});const nt=document.querySelector(".testimonial-navigation-buttons"),rt=`
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
`;function ct(){nt.innerHTML=rt}const lt=document.querySelector(".testimonials-wrapper");function dt(e){const t=parseFloat(e)||0,s=Math.floor(t)+(t%1>=.5?.5:0);let i="";for(let a=1;a<=5;a++){let o="icon-star-outline",l="outline";a<=Math.floor(s)?(o="icon-star-filled",l="filled"):a===Math.ceil(s)&&s%1!==0&&(o="icon-star-half",l="half"),i+=`
      <div class="star ${l}">
        <svg class="star-icon">
          <use href="${u}#${o}"></use>
        </svg>
      </div>
    `}return`<div class="rating">${i}</div>`}async function ut(){try{const t=await(await fetch("https://paw-hut.b.goit.study/api/feedbacks")).json(),s=Array.isArray(t)?t.slice(1,7):t.feedbacks.slice(1,7);s.length&&(pt(s),mt())}catch(e){console.error("Помилка завантаження відгуків:",e)}}function pt(e){lt.innerHTML=e.map(t=>`
        <div class="swiper-slide swiper-slide-testimonial">
          <div class="testimonial-card">
            ${dt(t.rate)}
            <p class="testimonial-quote">${t.description}</p>
            <p class="testimonial-author">${t.author}</p>
          </div>
        </div>
      `).join("")}function mt(){const e=document.querySelector(".section.testimonial"),t=e.querySelector(".testimonials-swiper"),s=e.querySelector(".js-testimonials-next"),i=e.querySelector(".js-testimonials-prev"),a=e.querySelector(".testimonials-pagination");new K(t,{modules:[Z,z],slidesPerView:1,slidesPerGroup:1,spaceBetween:32,loop:!1,watchOverflow:!0,observer:!0,observeParents:!0,navigation:{nextEl:s,prevEl:i,disabledClass:"swiper-button-isNotActive"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:a,clickable:!0},breakpoints:{768:{slidesPerGroup:1,slidesPerView:2,spaceBetween:32}}})}ut();ct();const gt=document.querySelector(".footer-logo"),_t=document.querySelector(".footer-social-links-list"),ft=`
<svg class="footer-logo-icon">
		<use href="${u}#icon-alternate-false"></use>
</svg>
`,bt=`
<li class="footer-social-links-list-item">
	<a href="https://www.facebook.com/" class="footer-social-icon" rel="noopener noreferrer" target="_blank">
		<svg class="footer-social-icon-unit">
				<use href="${u}#icon-facebook"></use>
		</svg>
	</a>
</li>
<li class="footer-social-links-list-item">
	<a href="https://www.instagram.com/" class="footer-social-icon" rel="noopener noreferrer" target="_blank">
		<svg class="footer-social-icon-unit">
				<use href="${u}#icon-instagram"></use>
		</svg>
	</a>
</li>
`;function yt(){gt.innerHTML=ft,_t.innerHTML=bt}yt();let X="682f9bbf8acbdf505592ac36";const d=document.querySelector("[data-modal]"),G=document.querySelector("[data-modal-close]"),C=document.querySelector(".adopt-modal-form"),vt=document.querySelector("[data-modal-close]");vt.innerHTML=`
<svg class="adopt-modal-svg" width="24" height="24">
	<use href="${u}#icon-close"></use>
</svg>
`;function ht(e){e&&(X=e),d==null||d.classList.remove("is-hidden"),document.body.classList.add("modal-open"),E()}function q(){d==null||d.classList.add("is-hidden"),document.body.classList.remove("modal-open")}G&&G.addEventListener("click",q);d&&d.addEventListener("click",e=>{e.target===d&&q()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!(d!=null&&d.classList.contains("is-hidden"))&&q()});C&&(C.setAttribute("novalidate","true"),C.addEventListener("submit",async e=>{var l;e.preventDefault();const{name:t,phone:s,comment:i}=e.target.elements,a=s.value.replace(/\D/g,"");if(a.length!==12){h.fire({icon:"error",title:"Помилка",text:"Телефон має містити 12 цифр"});return}if(!t.value.trim()){h.fire({icon:"warning",title:"Помилка заповнення",text:"Будь ласка, введіть ваше ім’я"});return}const o={name:t.value.trim(),phone:a,animalId:X,comment:i.value.trim()||"Запит на знайомство"};try{h.showLoading();const p=await k.post("https://paw-hut.b.goit.study/api/orders",o);console.log("orderData :>> ",p.data),await h.fire({icon:"success",title:"Дякуємо за Вашу заявку!",text:"Запис на знайомство прийнято."}),e.target.reset(),q()}catch(p){console.error("SERVER ERROR:",(l=p.response)==null?void 0:l.data),h.fire({icon:"error",title:"Помилка сервера",text:"Спробуйте пізніше"})}}));const m={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",e=>{const t=e.target.closest(".product-card__btn--learnMore");if(!t)return;const s=t.dataset.modalId;wt(s)});function wt(e){const t=I.animals.get(e);t&&(m.backdrop.innerHTML=kt(t),m.backdrop.classList.add("is-open"),document.body.classList.add("not-scroll"),m.dataBtn=document.querySelector("[data-btn]"),m.dataBtn.addEventListener("click",()=>{ht(e),E()}))}function kt({image:e,species:t,name:s,age:i,gender:a,description:o,healthStatus:l,behavior:p}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="32" height="32">
							<use href="${u}#icon-close"></use>
					</svg>
			</button>
			<div class="animal-detail-picture-wrap">
					<img src="${e}" alt="${t}" width="295" height="295" class="animal-detail-picture">
			</div>
		
			<div class="animal-detail-info-wrap">
				<div class="animal-detail-animal-preview">
					<p class="animal-detail-animal">${t}</p>
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
`}function E(){m.backdrop.classList.remove("is-open"),document.body.classList.remove("not-scroll")}m.backdrop.addEventListener("click",e=>{(e.target===m.backdrop||e.target.closest(".animal-detail-close-btn"))&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&E()});
//# sourceMappingURL=index.js.map
