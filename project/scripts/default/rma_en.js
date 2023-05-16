$('#files').change(function () {
    var files = $(this)[0].files;
    var files_len = $(this)[0].files.length;
    var size = 0;
    var file_name = $(this)[0].files[0].name;
    for (var i = 0; i < files.length; i++) {
        size = size + this.files[i].size;
    }
    if (size > 1024 * 1024 * 15) {
        //alert(size);
        $('.file-feedback').text('Your file exceeds 15MB, please select again!');
        $('.file-feedback').show();
        $('#files').val('');
    } else if(files_len > 3) {
        $('.file-feedback').text('You have selected more than 3 files, please select again');
        $('.file-feedback').show();
        $('#files').val('');
    } else {
        $('.file-feedback').hide();
    };
    if (files_len == 1) {
        $('.upload-name').text(file_name);
    } else if (files_len > 1) {
        $('.upload-name').text(files_len + ' files');
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
                        '<b>Subject</b>' + main + '<br>' + '<br>' +
                        '<b>Purchased From </b>  ' + store + '<br>' + '<br>' +
                        '<b>Product Series</b>  ' + productType + '<br>' + '<br>' +
                        '<b>Product</b>  ' + product + '<br>' + '<br>' +
                        '<b>Request Category</b>  ' + question + '<br>' + '<br>' +
                        '<b>Purchase date?</b>  ' + buyTime + '<br>' + '<br>' +
                        '<b>Product brand and model?</b>  ' + single + '<br>' + '<br>' +
                        '<b>Description</b>  ' + detail + '<br>' + '<br>' +
                        '<b>Subject</b>  ' + main + '<br>' + '<br>' +
                        '<b>Name</b>  ' + name + '<br>' + '<br>' +
                        '<b>Country</b>  ' + country + '<br>' + '<br>' +
                        '<b>Address</b>  ' + address + '<br>' + '<br>' +
                        '<b>Phone</b>  ' + tel + '<br>' + '<br>' +
                        '<b>E-mail</b>  ' + mail + '</html>';

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
                                          SecureToken:
                                            "4a757c75-ec64-45d2-8c68-28c64685550f",
                                          To: [
                                            "livin_rma@brookaccessory.com",
                                            "brooklivin@gmail.com",
                                            "brookbrook048@gmail.com",
                                          ],
                                          From: "Brook Livin<brooklivin@gmail.com>",
                                          Subject: "RMA維修保固需求",
                                          Body: body,
                                          Attachments: [
                                            {
                                              name:
                                                name +
                                                "RMA維修保固需求附件檔案.zip",
                                              data: dataUri,
                                            },
                                          ],
                                        }).then(function (message) {
                                          alert(
                                            "Thank you! We have received your RMA maintenance request."
                                          );
                                          window.location.href = "index.html";
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