

                  $(document).on('click', '#siroctopus', function () {
     if ( $( this ).hasClass( "checked" ) ) {
         alert('wasa');
         $(document).find('.sirOctopus, #btnSiroctopus').css('display', 'none');
     }
});