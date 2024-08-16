

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function downloadCV() {
    // Relative URL to the CV file
    const cvUrl = 'assets/js/cv/mycv.pdf'; // Adjust path relative to the HTML file location

    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'mycv.pdf'; // Default filename for the downloaded file

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Programmatically click the anchor element
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
}

// Attach the downloadCV function to the button's click event
document.getElementById('download-cv').addEventListener('click', downloadCV);