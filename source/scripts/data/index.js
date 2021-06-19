$(function(){
    //start

    // banner
    $.ajax({
        url: 'data/brookBanner.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        res.forEach(function(item){
            $('.full-hero').append('<div class="full-hero_item"><div class="full-hero_bg"><img src="'+ item.productBg +'" alt=""></div><div class="full-hero_inner"><div class="container"><div class="row"><div class="col-12 col-xl-6 d-flex align-items-center"><div class="full-hero_product"><img src="'+ item.productPic +'" alt=""></div></div><div class="col-12 col-xl-6"><div class="full-hero_text"><div class="f-textTitle-big hight-light">'+ item.label +'</div><h2 class="f-heroTitle-big full-hero_text-title">'+ item.title +'</h2><div class="full-hero_text-text">'+ item.content +'</div><a class="main-btn btn-white ml-auto mr-5" href="'+ item.href +'">了解更多</a></div></div></div></div></div></div>');
        });
    
        $('.full-hero').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6500
        });
    });
    
    // news
    $.ajax({
        url: 'data/news.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        if(res.length == 0) {
            $('#news-section').hide();
        }
        res.forEach(function(item){
            $('.news-slider').append('<a class="d-block mx-2 my-3" href="new.html"><div class="card main-card"><div class="card-img-top"><img src="'+ item.cover +'" alt="圖片"/></div><div class="card-body"><span class="t-primary f-mini f-en">2020 / 12 /02</span><h5 class="card-title t-dark mt-1">'+ item.title +'</h5><p class="card-text">'+ item. description +'</p><span class="t-primary f-mini f-en more">MORE</span></div></div></a>');
        });
    
        $('.news-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    }).fail(function(err){
        $('#news-section').hide();
    });
    
    // activity
    $.ajax({
        url: 'data/activities.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        if(res.length == 0) {
            $('#activity-section').hide();
        }
        res.forEach(function(item){
            $('.activity-slider').append('<a href="activity.html"><div class="card activity-card"><img class="card-img-top" src="'+ item.cover +'" alt="圖片"/><div class="card-body"><div class="row"><div class="col-12 col-lg-9"><h5 class="card-title">'+ item.title +'</h5></div><div class="col-12 col-lg-3 text-lg-right"><span class="f-mini f-en">'+ item.time +'</span></div></div><p class="card-text">'+ item.description +'</p></div></div></a>');
        });
        $('.activity-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }]
        });
    }).fail(function(err){
        $('#activity-section').hide();
    });

    // news
    $.ajax({
        url: 'data/mediaNews.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        if(res.length == 0) {
            $('#media-section').hide();
        }
        res.forEach(function(item){
            $('.media-slider').append('<a class="d-block mx-2 my-3" href="media.html"><div class="card main-card"><div class="card-img-top"><img src="'+ item.cover +'" alt="圖片"/></div><div class="card-body"><span class="t-primary f-mini f-en">2020 / 12 /02</span><h5 class="card-title t-dark mt-1">'+ item.title +'</h5><p class="card-text">'+ item. description +'</p><span class="t-primary f-mini f-en more">MORE</span></div></div></a>');
        });
    
        $('.media-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    }).fail(function(err){
        $('#media-section').hide();
    });

    //end
});