const cardItems = [
    {
        type:'rent',
        imgSrc:'slide3',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'sale',
        imgSrc:'slide1',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'rent',
        imgSrc:'slide2',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'sale',
        imgSrc:'slide3',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'rent',
        imgSrc:'slide2',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'sale',
        imgSrc:'slide1',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'rent',
        imgSrc:'slide2',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'sale',
        imgSrc:'slide2',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'rent',
        imgSrc:'slide3',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'sale',
        imgSrc:'slide3',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
    {
        type:'sale',
        imgSrc:'slide1',
        property:'El Jardin del Presidente',
        address:'South Triangle Quezon City Manila',
        price:'99,999'
    },
]
const layout = {
    modal(content,size){ 
        $('body').append(`
            <div class="my-modal">
                <div class="modal-wrapper ${size}">
                    <div class="header tag-${content.type}">
                        <div class="title">
                            <h2>${content.property}</h2>
                            <span class="address">${content.address}</span>
                        </div>
                        <div>
                            <h3>₱ ${content.price}</h3>
                        </div>
                    </div>
                    <div class="content">
                        <div class="slide">
                            <div class="owl-carousel modal-slide owl-theme">
                                <div class="item">
                                    <img src="/img/slide1.jpg">
                                </div>
                                <div class="item">
                                    <img src="/img/slide2.jpg">
                                </div>
                                <div class="item">
                                    <img src="/img/slide2.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="details">
                            <div class="overview">
                                <h4>Overview</h4>
                                <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</span>
                            </div>
                            <div class="small-details">
                                <div class="item">
                                    <div class="icon-wrapper">
                                        <i class="fa-solid fa-ruler"></i>
                                    </div>
                                    <span>140 sqm</span>
                                </div>
                                <div class="item">
                                    <div class="icon-wrapper">
                                        <i class="fa-solid fa-bath"></i>
                                    </div>
                                    <span>2 bathrooms</span>
                                </div>
                                <div class="item">
                                    <div class="icon-wrapper">
                                        <i class="fa-solid fa-bed"></i>
                                    </div>
                                    <span>3 beds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <button class="btn close-modal">CLOSE</button>
                    </div>
                </div>
            </div>
        `)
        $('.modal-slide').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    },
    createCards(){
        cardItems.forEach((data,index)=>{
            $('.products-cotainer').append(
                `<a class="card for-${data.type}" data-aos="flip-left" data-index="${index}">
                    <div class="img-container">
                        <img src="img/${data.imgSrc}.jpg">
                    </div>
                    <div class="footer">
                        <div class="foot-content">
                            <div class="title">
                                <h4>${data.property}</h4>
                                <div>${data.address}</div>
                            </div>
                            <div class="price">₱ ${data.price}</div>
                        </div>
                    </div>
                </a>
                `
            )
        })
    },
    sideNav(){
        $('body').append(`
            <div class="mobile-nav">
                <div class="nav-bar">
                    <ul class="side-nav">
                        <li>
                            <a href="#main-view" data-section="main-view">Home</a>
                        </li>
                        <li>
                            <a href="#all-products" data-section="all-products">Products</a>
                        </li>
                        <li>
                            <a href="#about-us" data-section="about-us">About Us</a>
                        </li>
                        <li>
                            <a href="#faqs" data-section="faqs">FAQs</a>
                        </li>
                        <li>
                            <a href="#contact" data-section="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        `)
    }
}
function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("customers",40,100);
numCounter("products",10,150);
numCounter("inquiries",60,100);
layout.createCards()
AOS.init();


$(document).ready(function(){
    $('.main-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            700:{
                items:2
            },
            1269:{
                items:1
            }
        }
    })
    
    $('.featured-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })

    $('body, html').scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
    })
    
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $(".scroll-top").on("click", function () {
        $('.mobile-nav').slideUp()
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    
    $('.toggle-buttons button').click(function(){
        let val = $(this).data('val')
        let el = $('.products-cotainer')
    
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    
        if(val == 'rent'){
            el.removeClass('sale')
            el.addClass(`${val}`)
        }else if(val == 'sale'){
            el.removeClass('rent')
            el.addClass(`${val}`)
        }else{
            el.removeClass('rent')
            el.removeClass('sale')
        }
    })

    $('.card').click(function(){
        let val = data = $(this).data('index')
        let content = cardItems[val]
        let size = 'md'
        layout.modal(content,size)
    })

    $('.nav-toggle').click(function(){
        layout.sideNav()
    })

    $(document).on('click','.side-nav a',function(){
        $('.mobile-nav').remove()
    })

    $(document).on('click','.mobile-nav',function(){
        $('.mobile-nav').remove()
    })

    $(document).on('click','.close-modal',function(){
        $('.my-modal').remove()
    })
})