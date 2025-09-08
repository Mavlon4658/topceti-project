const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const lang = document.querySelector('.lang');
const langBtn = document.querySelector('.lang .lang-btn');
const langList = document.querySelectorAll('.lang .lang-list li');

if (lang) {
    langBtn.onclick = () => {
        lang.classList.toggle('active');
    }
    langList.forEach(el => {
        el.onclick = () => {
            lang.classList.remove('active');
            langBtn.querySelector('span').textContent = el.textContent.trim();
            langBtn.querySelector('input').value = el.textContent.trim();
            langBtn.querySelector('img').setAttribute('src', el.querySelector('img').getAttribute('src'));
        }
    })
}

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (scrollY > 200) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})

const bars = document.querySelector('.header .bars');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu .menu-close');
const catalogBtn = document.querySelector('.catalog-links__wrap .btn-red');

bars.onclick = () => {
    menu.classList.add('active');
}

menuClose.onclick = () => {
    menu.classList.remove('active');
}

const catalogMb = document.querySelector('.menu-catalog');
const catalogCloseMb = document.querySelector('.menu-catalog__close');
const catalogOpenMb = document.querySelector('.menu-content__head .catalog-btn');

catalogOpenMb.onclick = () => {
    catalogMb.classList.add('active');
}

catalogCloseMb.onclick = () => {
    catalogMb.classList.remove('active');
}

catalogBtn.onclick = e => {
    if (window.innerWidth < 1050) {
        e.preventDefault();
        menu.classList.add('active');
        catalogMb.classList.add('active');
    }
}

const langModal = document.querySelector('.lang-modal');
const langModalBg = document.querySelector('.lang-modal .modal-bg');
const langModalClose = document.querySelector('.lang-modal .modal-close');
const langModalOpen = document.querySelector('.menu .lang-btn');
const langModalList = document.querySelectorAll('.lang-modal ul li');

langModalOpen.onclick = () => {
    langModal.classList.add('active');
}

const closeLangModal = () => {
    langModal.classList.remove('active');
    langModal.classList.add('end-active');
    setTimeout(() => {
        langModal.classList.remove('end-active');
    }, 400);
}

langModalClose.onclick = () => closeLangModal();

langModalBg.onclick = () => closeLangModal();

langModalList.forEach(el => {
    el.onclick = () => {
        closeLangModal();
        langModalOpen.querySelector('span').textContent = el.textContent.trim();
        langModalOpen.querySelector('input').value = el.textContent.trim();
        langModalOpen.querySelector('img').setAttribute('src', el.querySelector('img').getAttribute('src'));
    }
})

const accordion = document.querySelectorAll('.accordion');

if (accordion.length) {
    accordion.forEach((item) => {
        const accBtn = item.querySelector('.accordion-btn');
        const accBody = item.querySelector('.accordion-body__wrap');

        if (item.classList.contains('active')) {
            accBody.style.maxHeight = accBody.scrollHeight + 'px';
        }

        accBtn.addEventListener('click', () => {
            item.classList.toggle('active');
            accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
        });

        const checkboxList = item.querySelector('.accordion-body ul');
        const showBtn = item.querySelector('.accordion-body a.more-btn');
        console.log(showBtn);

        if (checkboxList && showBtn) {
            showBtn.onclick = e => {
                e.preventDefault();
                checkboxList.classList.add('active');
                showBtn.classList.add('hidden');
                setTimeout(() => {
                    accBody.style.maxHeight = accBody.scrollHeight + 'px';
                }, 100);
            }
        }
    });
}

const rangesEl = document.querySelectorAll(".form_range");

if (rangesEl.length) {
    rangesEl.forEach(range => {
        let rangeS = range.querySelectorAll("input[type=range]"),
            numberS = range.querySelectorAll("input.val"),
            line = range.querySelector('.line'),
            min = parseFloat(rangeS[0].min),
            max = parseFloat(rangeS[0].max);

        const handleRange = () => {
            let slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) [slide1, slide2] = [slide2, slide1];

            numberS[0].value = slide1;
            numberS[1].value = slide2;

            line.style.left = 100 * slide1 / max + '%';
            line.style.width = 100 * (slide2 - slide1) / max + '%';
        };

        const handleNumber = () => {
            let num1 = parseFloat(numberS[0].value),
                num2 = parseFloat(numberS[1].value);

            if (num1 > num2) [num1, num2] = [num2, num1];

            rangeS[0].value = num1;
            rangeS[1].value = num2;

            handleRange();
        };

        handleRange();

        rangeS.forEach(el => {
            el.oninput = handleRange;
        });

        numberS.forEach(el => {
            el.oninput = handleNumber;
        });
    });
}

const likeBtns = document.querySelectorAll('.product-card .like-btn');

if (likeBtns.length) {
    likeBtns.forEach(el => {
        el.onclick = () => {
            el.classList.toggle('active');
        }
    })
}

const changeViewMode = (mode = 0) => {
    const card = document.querySelector('.home-cards');
    
    if (mode == 1) {
        card.classList.add('active');
        card.querySelectorAll('.product-card').forEach(el => {
            el.classList.remove('list');
            el.classList.add('compact');
        })
    } else if (mode == 2) {
        card.classList.add('active');
        card.querySelectorAll('.product-card').forEach(el => {
            el.classList.remove('compact');
            el.classList.add('list');
        })
    } else {
        card.classList.remove('active');
        card.querySelectorAll('.product-card').forEach(el => {
            el.classList.remove('compact');
            el.classList.remove('list');
        })
    }
}

const layoutBtns = document.querySelectorAll('.home .settings-right button');
if (layoutBtns.length) {
    layoutBtns.forEach((btn, btnID) => {
        btn.onclick = () => {
            changeViewMode(btnID);
            layoutBtns.forEach(el => {
                if (btn == el) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

// modals
const modalCls = ['.sort-modal', '.filter-modal'];

if (modalCls.length) {
    modalCls.forEach(cls => {
        const modal = document.querySelector(cls);
        const modalOpenBtns = document.querySelectorAll(`${cls}__open`);
        const modalCloseBtn = document.querySelector(`${cls} .modal-close`);
        const modalBg = document.querySelector(`${cls} .modal-bg`);
    
        const modalClose = () => {
            bodyVisible();
            modal.classList.remove('active');
            modal.classList.add('end-active');
            setTimeout(() => {
                modal.classList.remove('end-active');
            }, 400);
        }
    
        if (modalOpenBtns.length) {
            modalOpenBtns.forEach(btn => {
                btn.onclick = e => {
                    e.preventDefault();
                    modal.classList.add('active');
                    bodyHidden();
                }
            })
        }
    
        if (modalCloseBtn) {
            modalCloseBtn.onclick = () => modalClose();
        }
    
        if (modalBg) {
            modalBg.onclick = () => modalClose();
        }
    
    })
}
// modals end

const homeText = document.querySelector('.home-text ul');
const homeTextBtn = document.querySelector('.home-text button');

if (homeText) {
    homeTextBtn.onclick = () => {
        homeTextBtn.classList.add('hidden');
        homeText.classList.add('active');
    }
}

const watchedSwp = new Swiper('.watched .swiper', {
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        1050: {
            spaceBetween: 32,
            slidesPerView: 4,
        }, 
        900: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: ".watched .swp-btn__next",
        prevEl: ".watched .swp-btn__prev",
    }
})

const catalogCard = document.querySelectorAll('.catalog-block__card');
if (catalogCard.length) {
    catalogCard.forEach(el => {
        const moreBtn = el.querySelector('.more-btn');
        const list = el.querySelector('ul');
        const accBtn = el.querySelector('.text button');
        const accBody = el.querySelector('.catalog-block__card-body');

        if (moreBtn) {
            moreBtn.onclick = () => {
                list.classList.toggle('active');
                moreBtn.classList.toggle('active');
            }
        }
        
        accBtn.onclick = () => {
            accBody.classList.toggle('active');
            accBtn.classList.toggle('active');
        }
    })
}

const catalogLinks = document.querySelectorAll('.header .catalog-links__item');
const catalogLinksItem = document.querySelectorAll('.header .catalog-links__right');
if (catalogLinks.length) {
    catalogLinks.forEach((link, linkID) => {
        link.onclick = e => {
            e.preventDefault();
            catalogLinksItem.forEach((item, itemID) => {
                if (linkID == itemID) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
            catalogLinks.forEach((item, itemID) => {
                if (linkID == itemID) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        }
    })
}