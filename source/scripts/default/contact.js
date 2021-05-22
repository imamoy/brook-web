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
                    var megMain = document.querySelector('#contact-form input[name=main]').value;
                    var name = document.querySelector('#contact-form input[name=name]').value;
                    var address = document.querySelector('#contact-form input[name=address]').value;
                    var tel = document.querySelector('#contact-form input[name=tel]').value;
                    var typeNum = document.querySelector('#contact-form input[name=typeNumber]').value;
                    var content = document.querySelector('#contact-form textarea').value;
                    var formMail = document.querySelector('#contact-form input[name=email]').value;

                    // get select
                    var megTypeSelect = document.querySelector('#contact-form select[name=megType]');
                    var megType = megTypeSelect.options[megTypeSelect.selectedIndex].text;

                    var countrySelect = document.querySelector('#contact-form select[name=country]');
                    var country = countrySelect.options[countrySelect.selectedIndex].text;

                    let body = '<html>' + 
                        '<b>主旨</b>' + megMain + '<br><br>' + 
                        '<b>訊息種類</b>  '+ megType + '<br><br>' + 
                        '<b>聯絡人</b>  ' + name + '<br><br>' + 
                        '<b>國家</b>  '+ country + '<br><br>' + 
                        '<b>聯絡地址</b>  ' + address + '<br><br>' +  
                        '<b>聯絡電話</b>  '  + tel + '<br><br>' + 
                        '<b>Email</b>  ' + formMail + '<br><br>' + 
                        '<b>產品型號</b>  ' + typeNum + '<br><br>' + 
                        '<b>內容</b>  ' + content + '</html>';
                    
                    Email.send({
                        SecureToken : "b923fb17-1328-4b68-bdf6-2a4081bd94b1",
                        To : ['livin@brookaccessory.com','brooklivin@gmail.com','brookbrook048@gmail.com'],
                        From : "Brook Livin<rd@xzfls.me>",
                        Subject : "Contact Us",
                        Body : body
                    }).then(function (message) {
                        alert("感謝！您的聯絡訊息已送出。");
                        window.location.href='index.html';
                    });
                }
            }, false);
        });
    }, false);
})();
