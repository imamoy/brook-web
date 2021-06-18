$(function(){
    // news
    $.ajax({
        url: 'data/news.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        if(res.length == 0) {
            $('.news-link').hide();
        }
        res.forEach(function(item){
            $('#news-inner').append('<div class="col-12 col-lg-4 my-lg-2"><a class="d-block mx-2 my-3" href="new.html"><div class="card main-card"><div class="card-img-top"><img src="'+ item.cover +'" alt="圖片"></div><div class="card-body"><span class="t-primary f-mini f-en">'+ item.time +'</span><h5 class="card-title t-dark mt-1">'+ item.title +'</h5><p class="card-text">'+ item.description +'</p><span class="t-primary f-mini f-en more">MORE</span></div></div></a></div>');
        });
    
    }).fail(function(err){
        $('.news-link').hide();
    });

    // medias
    // $.ajax({
    //     url: 'data/mediaNews.json',
    //     method: 'get',
    //     dataType: 'json',
    //     data: {}
    // }).done(function(res){
    //     if(res.length == 0) {
    //         $('.medias-link').hide();
    //     }
    //     res.forEach(function(item){
    //         $('#medias-inner').append('<div class="col-12 col-lg-4 my-lg-2"><a class="d-block mx-2 my-3" href="media.html"><div class="card main-card"><div class="card-img-top"><img src="'+ item.cover +'" alt="圖片"></div><div class="card-body"><span class="t-primary f-mini f-en">'+ item.time +'</span><h5 class="card-title t-dark mt-1">'+ item.title +'</h5><p class="card-text">'+ item.description +'</p><span class="t-primary f-mini f-en more">MORE</span></div></div></a></div>');
    //     });
    
    // }).fail(function(err){
    //     $('.medias-link').hide();
    // });

    // activity
    $.ajax({
        url: 'data/activities.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        if(res.length == 0) {
            $('.activities-link').hide();
        }
        res.forEach(function(item){
            $('#activities-inner').append('<div class="col-12 col-lg-4 my-lg-2"><a class="d-block mx-2 my-3" href="activity.html"><div class="card main-card"><div class="card-img-top"><img src="'+ item.cover +'" alt="圖片"></div><div class="card-body"><span class="t-primary f-mini f-en">'+ item.time +'</span><h5 class="card-title t-dark mt-1">'+ item.title +'</h5><p class="card-text">'+ item.description +'</p><span class="t-primary f-mini f-en more">MORE</span></div></div></a></div>');
        });
    
    }).fail(function(err){
        $('.activities-link').hide();
    });
    
    // unboxes
    // $.ajax({
    //     url: 'data/unboxNews.json',
    //     method: 'get',
    //     dataType: 'json',
    //     data: {}
    // }).done(function(res){
    //     if(res.length == 0) {
    //         $('.unboxes-link').hide();
    //     }
    //     res.forEach(function(item){
    //         $('#unboxes-inner').append('<div class="col-12 col-lg-4 my-lg-2"><a class="d-block mx-2 my-3" href="unboxing.html"><div class="card main-card"><div class="card-img-top"><img src="'+ item.cover +'" alt="圖片"></div><div class="card-body"><span class="t-primary f-mini f-en">'+ item.time +'</span><h5 class="card-title t-dark mt-1">'+ item.title +'</h5><p class="card-text">'+ item.description +'</p><span class="t-primary f-mini f-en more">MORE</span></div></div></a></div>');
    //     });
    
    // }).fail(function(err){
    //     $('.unboxes-link').hide();
    // });
});