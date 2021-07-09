$(function(){
    // 一般問題
    $.ajax({
        url: '../data/jp_generalQA.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        res.forEach(function(item){
            $('#qa-Section1').append('<div class="collapse-item"> <div class="collapse-item-title d-flex align-items-center justify-content-between"><h5 class="mb-0">'+ item.q +'</h5><i class="icon-add open"></i><i class="icon-less close"></i></div><div class="collapse-item-inner"><p class="mb-0">'+ item.a +'</p></div></div>');
        });
    
    }).fail(function(err){
    });

    // 購買問題
    $.ajax({
        url: '../data/jp_buyQA.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        res.forEach(function(item){
            $('#qa-Section2').append('<div class="collapse-item"> <div class="collapse-item-title d-flex align-items-center justify-content-between"><h5 class="mb-0">'+ item.q +'</h5><i class="icon-add open"></i><i class="icon-less close"></i></div><div class="collapse-item-inner"><p class="mb-0">'+ item.a +'</p></div></div>');
        });
    
    }).fail(function(err){
    });

    // 宅電守護
    $.ajax({
        url: '../data/jp_guardQA.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        res.forEach(function(item){
            $('#qa-Section3').append('<div class="collapse-item"> <div class="collapse-item-title d-flex align-items-center justify-content-between"><h5 class="mb-0">'+ item.q +'</h5><i class="icon-add open"></i><i class="icon-less close"></i></div><div class="collapse-item-inner"><p class="mb-0">'+ item.a +'</p></div></div>');
        });
    
    }).fail(function(err){
    });
    
    // 其他服務
    $.ajax({
        url: '../data/jp_otherQA.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        res.forEach(function(item){
            $('#qa-Section4').append('<div class="collapse-item"> <div class="collapse-item-title d-flex align-items-center justify-content-between"><h5 class="mb-0">'+ item.q +'</h5><i class="icon-add open"></i><i class="icon-less close"></i></div><div class="collapse-item-inner"><p class="mb-0">'+ item.a +'</p></div></div>');
        });
    
    }).fail(function(err){
    });
});