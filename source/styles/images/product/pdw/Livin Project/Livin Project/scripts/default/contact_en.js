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
                        '<b>Subject</b>' + megMain + '<br><br>' + 
                        '<b>Message Type</b>  '+ megType + '<br><br>' + 
                        '<b>Contact</b>  ' + name + '<br><br>' + 
                        '<b>Country</b>  '+ country + '<br><br>' + 
                        '<b>Address</b>  ' + address + '<br><br>' +  
                        '<b>Phone</b>  '  + tel + '<br><br>' + 
                        '<b>Email</b>  ' + formMail + '<br><br>' + 
                        '<b>Product Model Number</b>  ' + typeNum + '<br><br>' + 
                        '<b>Message</b>  ' + content + '</html>';
                    
                    Email.send({
                        SecureToken : "b3015307-af62-4395-8019-796a773045ac",
                        To : ['livin@brookaccessory.com','brooklivin@gmail.com','brookbrook048@gmail.com'],
                        From : "Brook Livin<rd1@brookaccessory.com>",
                        Subject : "Contact Us",
                        Body : body
                    }).then(function (message) {
                        alert("Thank you! Your request has been sent!");
                        window.location.href='index.html';
                    });
                }
            }, false);
        });
    }, false);
})();
