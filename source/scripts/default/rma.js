$('#files').change(function () {
    var files = $(this)[0].files;
    var files_len = $(this)[0].files.length;
    //alert(files.length);
    var size = 0;
    for (var i = 0; i < files.length; i++) {
        size = size + this.files[i].size;
    }
    if (size > 1024 * 1024 * 15) {
        //alert(size);
        $('.file-feedback').text('您的檔案超過15MB，請重新選擇！');
        $('.file-feedback').show();
        $('#files').val('');
    } else if(files_len > 3) {
        $('.file-feedback').text('您選擇的檔案已超過3個，請重新選擇');
        $('.file-feedback').show();
        $('#files').val('');
    } else {
        $('.file-feedback').hide();
    };
});

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add('was-validated');
                } else if (form.checkValidity() === true) {
                    event.preventDefault();

                    // get input text
                    var store = document.querySelector('#rma-form input[name=store]').value;
                    var buyTime = document.querySelector('#rma-form input[name=buyTime]').value;
                    var single = document.querySelector('#rma-form textarea[name=single]').value;
                    var detail = document.querySelector('#rma-form textarea[name=detail]').value;
                    var main = document.querySelector('#rma-form input[name=main]').value;
                    var name = document.querySelector('#rma-form input[name=name]').value;
                    var address = document.querySelector('#rma-form input[name=address]').value;
                    var tel = document.querySelector('#rma-form input[name=tel]').value;
                    var mail = document.querySelector('#rma-form input[name=mail]').value;

                    // get select
                    var productTypeSelect = document.querySelector('#rma-form select[name=productType]');
                    var productType = productTypeSelect.options[productTypeSelect.selectedIndex].text;

                    var productSelect = document.querySelector('#rma-form select[name=product]');
                    var product = productSelect.options[productSelect.selectedIndex].text;

                    var questionSelect = document.querySelector('#rma-form select[name=question]');
                    var question = questionSelect.options[questionSelect.selectedIndex].text;

                    var countrySelect = document.querySelector('#rma-form select[name=country]');
                    var country = countrySelect.options[countrySelect.selectedIndex].text;

                    let body = '<html>' +
                        '<b>主旨</b>' + main + '<br>' + '<br>' +
                        '<b>原始購買商店</b>  ' + store + '<br>' + '<br>' +
                        '<b>產品系列</b>  ' + productType + '<br>' + '<br>' +
                        '<b>產品</b>  ' + product + '<br>' + '<br>' +
                        '<b>問題類型</b>  ' + question + '<br>' + '<br>' +
                        '<b>何時購買的?</b>  ' + buyTime + '<br>' + '<br>' +
                        '<b>產品的廠牌和型號？</b>  ' + single + '<br>' + '<br>' +
                        '<b>細節說明</b>  ' + detail + '<br>' + '<br>' +
                        '<b>主旨</b>  ' + main + '<br>' + '<br>' +
                        '<b>姓名</b>  ' + name + '<br>' + '<br>' +
                        '<b>國家</b>  ' + country + '<br>' + '<br>' +
                        '<b>聯絡地址</b>  ' + address + '<br>' + '<br>' +
                        '<b>聯絡電話</b>  ' + tel + '<br>' + '<br>' +
                        '</b>E-mail</b>  ' + mail + '</html>';

                    var zip = new JSZip();
                    var numberOfFiles = document.querySelector('#files').files.length;
                    var numberOfProcessedFiles = 0;
                    for (var i = 0; i < numberOfFiles; i++) {
                        (function (i) {
                            var file = document.querySelector('#files').files[i];
                            var reader = new FileReader();
                            reader.readAsBinaryString(file);
                            reader.onload = function () {
                                numberOfProcessedFiles++;
                                zip.file(file.name, btoa(reader.result), {
                                    base64: true
                                });
                                if (numberOfProcessedFiles == numberOfFiles) {
                                    zip.generateAsync({
                                        type: "base64"
                                    })
                                    .then(function (content) {
                                        var dataUri = "data:application/x-zip-compressed;base64," + content;
                                        Email.send({
                                            SecureToken : "b923fb17-1328-4b68-bdf6-2a4081bd94b1",
                                            To : ['livin_rma@brookaccessory.com','brooklivin@gmail.com','brookbrook048@gmail.com'],
                                            From : "Brook Livin<rd@xzfls.me>",
                                            Subject : "RMA維修保固需求",
                                            Body: body,
                                            Attachments: [{
                                                name: name + "RMA維修保固需求附件檔案.zip",
                                                data: dataUri
                                            }]
                                        }).then(function (message) {
                                            alert("感謝！您的RMA維修保固需求已送出。");
                                            window.location.href='index.html';
                                        });
                                    });
                                }
                            };
                        })(i);
                    }

                }
            }, false);
        });
    }, false);
})();