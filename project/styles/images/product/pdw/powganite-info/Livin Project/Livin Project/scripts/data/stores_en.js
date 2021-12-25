$(function(){
    //start

    $.ajax({
        url: '../data/en_stores.json',
        method: 'get',
        dataType: 'json',
        data: {}
    }).done(function(res){
        if(res.length == 0) {
        }
        res.forEach(function(item){
            $('#store-inner').append('<div class="row align-items-lg-center py-3 py-md-5"><div class="col-12 col-lg-6"><div class="store-img"><img src="'+ item.pic +'" alt="經銷據點圖片"></div></div><div class="col-12 col-lg-5 py-3 py-lg-5 pl-lg-5 pr-lg-0"><h5 class="f-sc-title">'+ item.Name +'</h5><hr class="my-lg-4"><address class="store-list mb-4"><ul class="list-unstyled"><li class="mb-3"><div class="label d-inline-block f-500 f-text-big">Phone</div><a class="f-text-big" href="tel:'+ item.tel +'">'+ item.tel +'</a></li><li class="mb-3"><div class="label d-inline-block f-500 f-text-big">Business Hours</div><span class="f-text-big">'+ item.time +'</span></li><li><div class="label d-inline-block f-500 f-text-big">Address</div><a class="f-text-big" href="'+ item.mapLink +'" target="_blank">'+ item.address +'</a></li></ul></address><div class="store-products"><ul class="list-inline"><li class="list-inline-item">'+ item.products +'</li></ul></div><a class="main-btn btn-border-primary ml-0 mt-5" href="'+ item.onlineStoreLink +'"><i class="icon-buy mr-1" style="font-size: 20px;"></i><span>Shop</span></a></div></div>');
        });
    
    }).fail(function(err){

    });

    //end
});