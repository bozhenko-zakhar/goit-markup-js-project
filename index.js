import{a as w,i as k,S as I,N,P as R,K as J,A as X,b as _}from"./assets/vendor-DPMqQZsn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const d="/goit-markup-js-project/assets/sprite-DntPMVyq.svg",Q=document.querySelector(".header__link-logo"),Y=`
	<svg class="header-logo">
			<use href="${d}#icon-alternate-false"></use>
	</svg>
`;function ee(){Q.innerHTML=Y}const x=document.querySelector(".modal-menu"),b=document.querySelector(".header__burger"),te=document.querySelectorAll(".modal-menu__nav a"),g=document.querySelector(".header");function M(){return x.classList.contains("modal-menu--open")}function se(){x.classList.add("modal-menu--open"),b.classList.add("is-open"),b.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),g==null||g.classList.remove("header__blur")}function L(){x.classList.remove("modal-menu--open"),b.classList.remove("is-open"),b.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),g==null||g.classList.add("header__blur")}function oe(){M()?L():se()}b.addEventListener("click",e=>{e.stopPropagation(),oe()});document.addEventListener("keydown",e=>{e.key==="Escape"&&M()&&L()});document.addEventListener("click",e=>{if(!M())return;const t=e.target.closest(".header__burger"),s=e.target.closest(".modal-menu__container");!t&&!s&&L()});te.forEach(e=>e.addEventListener("click",L));ee();const l={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader")},y={animals:new Map},ae="https://paw-hut.b.goit.study",E={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};w.defaults.baseURL=ae;const ie=async()=>{const{data:e}=await w(`${E.CATEGORIES}`);return e},q=async(e,t)=>{const{data:s}=await w(`${E.PRODUCTS}`,{params:{limit:t,page:e}});return s.animals.forEach(a=>{y.animals.set(a._id,a)}),console.log(y),s},U=async({categoryId:e,page:t=1,limit:s=9})=>{const{data:a}=await w(`${E.PRODUCTS}`,{params:{categoryId:e,page:t,limit:s}});return a.animals.forEach(o=>{y.animals.set(o._id,o)}),console.log(y),a},ne=e=>{const t=e.map(({_id:s,name:a})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${s}" type="button">${a}</button>
 </li>
`).join("");l.categoryList.innerHTML=t},v=e=>{const t=e.map(({_id:s,image:a,species:o,name:i,categories:n,age:p,gender:K,behavior:Z})=>{const z=`
                    <ul class="product-card__categories">
                        ${n.map(W=>`<li class="product-card__category">${W.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${s}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${a}" alt="${o}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${o}</p>
                    <h3 class="product-card__name">${i}</h3>

                    ${n.length?z:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${p}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${K}</li>
                    </ul>
            
                    <p class="product-card__info">${Z}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${s} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");l.productlist.insertAdjacentHTML("beforeend",t)},F=()=>{const e=window.innerWidth;return e>=1440?"desktop":e>=768?"tablet":"mobile"},C=e=>{switch(e){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},re=(e,t=300)=>{let s;return(...a)=>{clearTimeout(s),s=setTimeout(()=>e(...a),t)}},ce=e=>{document.querySelectorAll(".categories__btn--active").forEach(s=>s.classList.remove("categories__btn--active")),e.classList.add("categories__btn--active")},D=()=>{const e=document.querySelector(".product-card");if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},V=()=>{l.productlist.innerHTML=""};function T(){l.loader.classList.remove("hidden")}function P(){l.loader.classList.add("hidden")}function le(){l.loadMoreBtn.classList.remove("hidden")}function A(){l.loadMoreBtn.classList.add("hidden")}function h(e,t){e<t?le():A()}let j=F(),r=1,f="all",u;const de=async()=>{try{const e=await ie();ne([{_id:"all",name:"Всі"},...e]);const s=document.querySelector(".categories__btn");s&&s.classList.add("categories__btn--active")}catch(e){console.log(e),k.error({message:"Oops, something went wrong!"})}},ue=re(async()=>{const e=F();e!==j&&(j=e)},300);window.addEventListener("resize",ue);const pe=async()=>{V(),T();try{const e=C(j),{animals:t,totalItems:s}=await q(r,e);v(t),u=Math.ceil(s/e),h(r,u)}catch(e){console.log(e),k.error({message:"Oops, something went wrong!"})}finally{P()}},me=async e=>{if(e.target.nodeName!=="BUTTON")return;f=e.target.dataset.categoryId,r=1;const t=C(j);V(),ce(e.target),T(),A();try{if(f==="all"){const{animals:s,totalItems:a}=await q(r,t);v(s),u=Math.ceil(a/t),h(r,u)}else{const{animals:s,totalItems:a}=await U({categoryId:f,page:r,limit:t});v(s),u=Math.ceil(a/t),h(r,u)}}catch(s){console.log(s),k.error({message:"Oops, something went wrong!"})}finally{P()}};l.categoryList.addEventListener("click",me);l.loadMoreBtn.addEventListener("click",async()=>{r+=1;const e=C(j);T(),A();try{if(f==="all"){const{animals:t}=await q(r,e);v(t),D(),h(r,u)}else{const{animals:t}=await U({categoryId:f,page:r,limit:e});t.length===0&&l.divNotFound.classList.add("not-found--visible"),v(t),D(),h(r,u)}}catch(t){console.log(t),k.error({message:"Oops, something went wrong!"})}finally{P()}});de();pe();const ge="/goit-markup-js-project/assets/slide-1-mob-min-dSbCqo9H.jpg",_e="/goit-markup-js-project/assets/slide-1-mob@2x-min-DMWamx1N.jpg",fe="/goit-markup-js-project/assets/slide-1-tab-min-DIK2ilev.jpg",be="/goit-markup-js-project/assets/slide-1-tab@2x-min-DZwyF8XH.jpg",ye="/goit-markup-js-project/assets/slide-1-desktop-min-CUit_ctj.jpg",ve="/goit-markup-js-project/assets/slide-1-desktop@2x-min-BsyZrAam.jpg",he="/goit-markup-js-project/assets/slide-2-mob-min-Bc5esMqH.jpg",je="/goit-markup-js-project/assets/slide-2-mob@2x-min-DschUynu.jpg",we="/goit-markup-js-project/assets/slide-2-tab-min-CmAeux2c.jpg",ke="/goit-markup-js-project/assets/slide-2-tab@2x-min-ZMkCsw4y.jpg",Le="/goit-markup-js-project/assets/slide-2-desktop-min-BVb5UXDB.jpg",Se="/goit-markup-js-project/assets/slide-2-desktop@2x-min-hhFJ02Um.jpg",$e="/goit-markup-js-project/assets/slide-3-mob-min-DdMDgsZs.jpg",Be="/goit-markup-js-project/assets/slide-3-mob@2x-min-CW0Jcbru.jpg",xe="/goit-markup-js-project/assets/slide-3-tab-min-DBrmqaBK.jpg",Me="/goit-markup-js-project/assets/slide-3-tab@2x-min-BXJ6Rb3v.jpg",Ee="/goit-markup-js-project/assets/slide-3-desktop-min-Bu_7PKVK.jpg",qe="/goit-markup-js-project/assets/slide-3-desktop@2x-min-CLG3N8EE.jpg",Ce="/goit-markup-js-project/assets/slide-4-mob-min-9NkQUEbI.jpg",Te="/goit-markup-js-project/assets/slide-4-mob@2x-min-B9RINJi2.jpg",Pe="/goit-markup-js-project/assets/slide-4-tab-min-Cirko9ef.jpg",Ae="/goit-markup-js-project/assets/slide-4-tab@2x-min-C3_VmGFk.jpg",De="/goit-markup-js-project/assets/slide-4-desktop-min-DhDfqD-0.jpg",He="/goit-markup-js-project/assets/slide-4-desktop@2x-min-CxR8bxza.jpg",Oe="/goit-markup-js-project/assets/slide-5-mob-min-BiqkKyQ8.jpg",Ie="/goit-markup-js-project/assets/slide-5-mob@2x-min-R3odaZlS.jpg",Ne="/goit-markup-js-project/assets/slide-5-tab-min-BsZGumiA.jpg",Re="/goit-markup-js-project/assets/slide-5-tab@2x-min-RaHw714B.jpg",Ue="/goit-markup-js-project/assets/slide-5-desktop-min-BUEZTg-Z.jpg",Fe="/goit-markup-js-project/assets/slide-5-desktop@2x-min-BX9zHC6l.jpg",Ve=[[ye,ve,fe,be,ge,_e,"Людина сидить поруч із безпритульним собакою, демонструючи турботу та довіру","Все почалося у 2015 році з кількох небайдужих людей та одноговрятованого собаки. Сьогодні ми — один з найбільших притулків урегіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."],[Le,Se,we,ke,he,je,"Врятована собака з притулку Хатинка Лапок дивиться в камеру",'Ми рятуємо, реабілітуємо та знаходимо люблячі родини длябезпритульних тварин. Наша мета — не просто дати прихисток, а йзабезпечити кожному "хвостику" щасливе та повноцінне життя в новій'],[Ee,qe,xe,Me,$e,Be,"Команда волонтерів притулку Хатинка Лапок разом із врятованими тваринами",'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів тадесятків волонтерів, які щодня вкладають свою душу та час у турботупро наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить віднас.'],[De,He,Pe,Ae,Ce,Te,"Територія притулку Хатинка Лапок з будівлями та вигульними зонами для тварин","Ми створили безпечний та комфортний простір. Кожна тварина отримуєякісне харчування, своєчасну ветеринарну допомогу, проходитьсоціалізацію та гуляє на спеціально обладнаних майданчиках."],[Ue,Fe,Ne,Re,Oe,Ie,"Людина ніжно обіймає собаку з притулку, символ любові та безпеки","Ваша допомога — безцінна. Ви можете взяти тваринку додому, стативолонтером, допомогти фінансово або інформаційно. Кожен маленькийвнесок наближає нас до великої мети — світу без безпритульнихтварин."]];document.querySelectorAll(".gallerySlide");const Ge=document.querySelector(".galleryWrapper"),Ke=Ve.map(e=>`
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
	`);function Ze(){Ge.insertAdjacentHTML("beforeend",Ke.join(""))}const ze=document.querySelector(".galleryNavBtn"),We=`
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
			<use href="${d}#icon-arrow_back"></use>
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
			<use href="${d}#icon-arrow_forward"></use>
		</svg>
	</button>
`;function Je(){ze.innerHTML=We}Ze();Je();new I(".gallerySwiper",{modules:[N,R,J],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".gallerySwiper .swiper-button-next",prevEl:".gallerySwiper .swiper-button-prev"},pagination:{el:".gallerySwiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new X(".accordion",{duration:300,showMultiple:!1,collapse:!0});const Xe=document.querySelectorAll("#faq .ac");Xe.forEach(e=>{const t=e.querySelector(".icon-plus"),s=e.querySelector(".icon-close");new MutationObserver(()=>{e.classList.contains("is-active")?(t.style.display="none",s.style.display="inline-block"):(t.style.display="inline-block",s.style.display="none")}).observe(e,{attributes:!0,attributeFilter:["class"]})});const Qe=document.querySelector(".testimonial-navigation-buttons"),Ye=`
	<div class="testimonials-prev js-testimonials-prev">
		<svg class="icon-back" viewBox="0 0 24 24">
			<use href="${d}#icon-arrow_back"></use>
		</svg>
	</div>
	<div class="testimonials-next js-testimonials-next">
		<svg class="icon-forward" viewBox="0 0 24 24">
			<use href="${d}#icon-arrow_forward"></use>
		</svg>
	</div>
`;function et(){Qe.innerHTML=Ye}const tt=document.querySelector(".testimonials-wrapper");function st(e){const t=parseFloat(e)||0,s=Math.floor(t)+(t%1>=.5?.5:0);let a="";for(let o=1;o<=5;o++){let i="icon-star-outline",n="outline";o<=Math.floor(s)?(i="icon-star-filled",n="filled"):o===Math.ceil(s)&&s%1!==0&&(i="icon-star-half",n="half"),a+=`
      <div class="star ${n}">
        <svg class="star-icon">
          <use href="../img/sprite.svg#${i}"></use>
        </svg>
      </div>
    `}return`<div class="rating">${a}</div>`}async function ot(){try{const t=await(await fetch("https://paw-hut.b.goit.study/api/feedbacks")).json(),s=Array.isArray(t)?t.slice(1,7):t.feedbacks.slice(1,7);s.length&&(at(s),it())}catch(e){console.error("Помилка завантаження відгуків:",e)}}function at(e){tt.innerHTML=e.map(t=>`
        <div class="swiper-slide swiper-slide-testimonial">
          <div class="testimonial-card">
            ${st(t.rate)}
            <p class="testimonial-quote">${t.description}</p>
            <p class="testimonial-author">${t.author}</p>
          </div>
        </div>
      `).join("")}function it(){const e=document.querySelector(".section.testimonial"),t=e.querySelector(".testimonials-swiper"),s=e.querySelector(".js-testimonials-next"),a=e.querySelector(".js-testimonials-prev"),o=e.querySelector(".testimonials-pagination");new I(t,{modules:[N,R],slidesPerView:1,slidesPerGroup:1,spaceBetween:32,loop:!1,watchOverflow:!0,observer:!0,observeParents:!0,navigation:{nextEl:s,prevEl:a,disabledClass:"swiper-button-isNotActive"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:o,clickable:!0},breakpoints:{768:{slidesPerGroup:1,slidesPerView:2,spaceBetween:32}}})}ot();et();const nt=document.querySelector(".footer-logo"),H=document.querySelectorAll(".footer-social-links-list-item"),rt=`
<svg class="footer-logo-icon">
		<use href="${d}#icon-alternate-false"></use>
</svg>
`,ct=`
<svg class="footer-social-icon-unit">
		<use href="${d}#icon-facebook"></use>
</svg>
`,lt=`
<svg class="footer-social-icon-unit">
		<use href="${d}#icon-instagram"></use>
</svg>
`;function dt(){nt.innerHTML=rt,H[0].innerHTML=ct,H[1].innerHTML=lt}dt();let G="682f9bbf8acbdf505592ac36";const c=document.querySelector("[data-modal]"),O=document.querySelector("[data-modal-close]"),B=document.querySelector(".adopt-modal-form");function ut(e){e&&(G=e),c==null||c.classList.remove("is-hidden"),document.body.classList.add("modal-open"),$()}function S(){c==null||c.classList.add("is-hidden"),document.body.classList.remove("modal-open")}O&&O.addEventListener("click",S);c&&c.addEventListener("click",e=>{e.target===c&&S()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!(c!=null&&c.classList.contains("is-hidden"))&&S()});B&&(B.setAttribute("novalidate","true"),B.addEventListener("submit",async e=>{var n;e.preventDefault();const{name:t,phone:s,comment:a}=e.target.elements,o=s.value.replace(/\D/g,"");if(o.length!==12){_.fire({icon:"error",title:"Помилка",text:"Телефон має містити 12 цифр"});return}if(!t.value.trim()){_.fire({icon:"warning",title:"Помилка заповнення",text:"Будь ласка, введіть ваше ім’я"});return}const i={name:t.value.trim(),phone:o,animalId:G,comment:a.value.trim()||"Запит на знайомство"};try{_.showLoading();const p=await w.post("https://paw-hut.b.goit.study/api/orders",i);console.log("orderData :>> ",p.data),await _.fire({icon:"success",title:"Дякуємо за Вашу заявку!",text:"Запис на знайомство прийнято."}),e.target.reset(),S()}catch(p){console.error("SERVER ERROR:",(n=p.response)==null?void 0:n.data),_.fire({icon:"error",title:"Помилка сервера",text:"Спробуйте пізніше"})}}));const m={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",e=>{const t=e.target.closest(".product-card__btn--learnMore");if(!t)return;const s=t.dataset.modalId;pt(s)});function pt(e){const t=y.animals.get(e);t&&(m.backdrop.innerHTML=mt(t),m.backdrop.classList.add("is-open"),document.body.classList.add("not-scroll"),m.dataBtn=document.querySelector("[data-btn]"),m.dataBtn.addEventListener("click",()=>{ut(e),$()}))}function mt({image:e,species:t,name:s,age:a,gender:o,description:i,healthStatus:n,behavior:p}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="32" height="32">
							<use href="${d}#icon-close"></use>
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
							<li class="animal-detail-descript-item">${a}</li>
							<li class="animal-detail-descript-item">${o}</li>
					</ul>
				</div>

				<ul class="animal-detail-info">
					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Опис:</span>
							${i}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Здоров’я:</span>
							${n}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Поведінка:</span>
								${p}
					</li>
				</ul>

				<button type="button" data-btn="take-home" class="animal-detail-get-btn">Взяти додому</button>
			</div>
		</div>
`}function $(){m.backdrop.classList.remove("is-open"),document.body.classList.remove("not-scroll")}m.backdrop.addEventListener("click",e=>{(e.target===m.backdrop||e.target.closest(".animal-detail-close-btn"))&&$()});document.addEventListener("keydown",e=>{e.key==="Escape"&&$()});
//# sourceMappingURL=index.js.map
