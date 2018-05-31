  var extIcon = chrome.extension.getURL('img/icon_16.png');

    $('.PostFull__reply').append(
      '<span class="showTomoji"><img src="'+ extIcon +'"></span>'
    );




$('.PostFull').on('click', '.showTomoji', function () {
 $(this).css('color','#585094');
    $('.addEmojis').removeClass('hideEmoji')
});

  $('.RightShare__Menu').append(
    '<div class="addEmojis"><h5><img src="'+ extIcon +'"> Tomoji <span>add stickers to your comments</span><span class="customize">⚙</span><span class="closeTomoji">x</span></h5>' + 
    
      '<div class="allEmojis">' +
    
    /* stickers menu */
    '<div class="selector">'+
    '<span class="selectBtn selected ono" name=".ono" id="btnOno"><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_01.png"></span>'+
    '<span class="selectBtn sirOctopus" name=".sirOctopus" id="btnSiroctopus"><img src="https://wearecodex.com/tomoji/siroctopus/octopusteem_01.png"></span>'+
    '<span class="selectBtn kittyface" name=".kittyface" id="btnkittyface"><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_01.png"></span>'+
    '<span class="selectBtn normalEmojis" name=".normalEmojis" id="normalEmojis">😁</span>' +
    '<span class="selectBtn ascii" name=".ascii" id="ascii">(๑✧‿✧๑)</span>' +
    '</div>'+
      
    '<div class="emojiBox normalEmojis">'+
    '<span class="tomoji" name=":grin:"">😁</span>' +
    '<span class="tomoji" name=":joy:">😂</span>' +
    '<span class="tomoji" name=": :">😃</span>' +
    '<span class="tomoji" name=": :">😅</span>' +
    '<span class="tomoji" name=": :">😇</span>' +
    '<span class="tomoji" name=": :">😉</span>' +
    '<span class="tomoji" name="::">😊</span>' +
    '<span class="tomoji" name=": :">😋</span>' +
    '<span class="tomoji" name=": :">😌</span>' +
    '<span class="tomoji" name=": :">😍</span>' +
    '<span class="tomoji" name=": :">😎</span>' +
    '<span class="tomoji" name=": :">😏</span>' +
    '<span class="tomoji" name=": :">😐</span>' +
    '<span class="tomoji" name=": :">😒</span>' +
    '<span class="tomoji" name=": :">😚</span>' +
    '<span class="tomoji" name=": :">😠</span>' +
    '<span class="tomoji" name=": :">😣</span>' +
    '<span class="tomoji" name=": :">😞</span>' +
    '<span class="tomoji" name=": :">😆</span>' +
    '<span class="tomoji" name=": :">😎</span>' +
    '<span class="tomoji" name=": :">😒</span>' +
    '<span class="tomoji" name=": :">😡</span>' +
    '<span class="tomoji" name=": :">😷</span>' +
    '<span class="tomoji" name=": :">👀</span>' +
    '<span class="tomoji" name=": :">👄</span>' +
    '<span class="tomoji" name=": :">😫</span>' +
    '<span class="tomoji" name=": :">😱</span>' +
    '<span class="tomoji" name=": :">😵</span>' +
    '<span class="tomoji" name=": :">😭</span>' +
    '<div class="separator"></div>' +
    '<span class="tomoji" name=": :">👍</span>' +
    '<span class="tomoji" name=": :">👇</span>' +
    '<span class="tomoji" name=": :">👊</span>' +
    '<span class="tomoji" name=": :">👆</span>' +
    '<span class="tomoji" name=": :">👉</span>' +
    '<span class="tomoji" name=": :">👌</span>' +
    '<span class="tomoji" name=": :">👎</span>' +
    '<span class="tomoji" name=": :">👏</span>' +
    '<span class="tomoji" name=": :">👐</span>' +
    '<span class="tomoji" name=": :">✌</span>' +
    '<span class="tomoji" name=": :">🙈</span>' +
    '<span class="tomoji" name=": :">🙉</span>' +
    '<span class="tomoji" name=": :">🙊</span>' +
    '<div class="separator"></div>'+
    '<span class="tomoji" name=": :">❤</span>' +
    '<span class="tomoji" name=": :">💔</span>' +
    '<span class="tomoji" name=": :">💕</span>' +
    '<span class="tomoji" name=": :">💖</span>' +
    '<span class="tomoji" name=": :">💘</span>' +
    '<span class="tomoji" name=": :">💙</span>' +
    '<span class="tomoji" name=": :">💜</span>' +
    '<div class="separator"></div>'+
    '<span class="tomoji" name=": :">🍕</span>' +
    '<span class="tomoji" name=": :">🍔</span>' +
    '<span class="tomoji" name=": :">🍗</span>' +
    '<span class="tomoji" name=": :">🍘</span>' +
    '<span class="tomoji" name=": :">🍙</span>' +
    '<span class="tomoji" name=": :">🍟</span>' +
    '<span class="tomoji" name=": :">🍡</span>' +
    '<span class="tomoji" name=": :">🍢</span>' +
    '<span class="tomoji" name=": :">🍣</span>' +
    '<span class="tomoji" name=": :">🍤</span>' +
    '<span class="tomoji" name=": :">🍥</span>' +
    '<span class="tomoji" name=": :">🍦</span>' +
    '<span class="tomoji" name=": :">🍧</span>' +
    '<span class="tomoji" name=": :">🍩</span>' +
    '<span class="tomoji" name=": :">🍪</span>' +
    '<span class="tomoji" name=": :">🍬</span>' +
    '<span class="tomoji" name=": :">🍭</span>' +
    '<span class="tomoji" name=": :">🍰</span>' +

    '</div><!--/normalEmojis-->'+

    '<div class="emojiBox ascii">'+
    '<span class="tomoji" name=": :">(๑✧‿✧๑)</span>' +
    '<span class="tomoji" name="::">(๑^ ‿ &nbsp; ^)</span>' +
    '<span class="tomoji" name=": :">(♥‿ &nbsp; ♥)</span>' +
    '<span class="tomoji" name=": :">( ˘ ³˘)♥</span>' +
    '<span class="tomoji" name=": :">( ˘‿ &nbsp; ˘ )</span>' +
    '<span class="tomoji" name=": :">( ˘ ᵕ ˘)</span>' +
    '<span class="tomoji" name=": :">( ˘ ᗝ˘)</span>' +
    '<span class="tomoji" name="::">(˘ڡ˘)</span>' +
    '<span class="tomoji" name=": :">٩( ˘ ᗜ ˘)و</span>' +
    '<span class="tomoji" name=": :">(〜˘ ᗝ ˘ )〜</span>' +
    '<span class="tomoji" name=": :">(〜˘ ⌣ ˘)〜</span>' +
    '<span class="tomoji" name=": :">(๑• ‿ •๑)</span>' +
    '<span class="tomoji" name=": :">(๑•﹏•)</span>' +
    '<span class="tomoji" name=": :">(๑•̌ ﹏ •̑๑)</span>' +
    '<span class="tomoji" name=": :">୧(๑•̀ ﹏ •́)૭</span>' +
    '<span class="tomoji" name=": :">୧(๑•̀ ‿  &nbsp; •́)૭</span>' +
    '<span class="tomoji" name=": :">(๑˃ ‿  &nbsp; ˂๑)</span>' +
    '<span class="tomoji" name=": :">(๑˃ ‿  &nbsp; ˂)</span>' +
    '<span class="tomoji" name=": :">(๑˃ ‿ &nbsp; ˂)و</span>' +
    '<span class="tomoji" name=": :">(๑˃ ﹏ &nbsp; ˂)</span>' +
    '<span class="tomoji" name=": :">( > ﹏ &nbsp; ˂ )</span>' +
    '<span class="tomoji" name=": :">( > ﹏ &nbsp; ˂ )</span>' +
    '<span class="tomoji" name=": :">( > ‸ ˂ )</span>' +
    '<span class="tomoji" name=": :">٩(˃‿ &nbsp; ˂)۶</span>' +
    '<span class="tomoji" name=": :">( ⚆ ‸ ⚆ )</span>' +
    '<span class="tomoji" name=": :">( ⚆ _ ⚆ )</span>' +
    '<span class="tomoji" name=": :">( ⚆﹏⚆ )</span>' +
    '<span class="tomoji" name=": :">( ⚆‿⚆ )</span>' +
    '<span class="tomoji" name=": :">໒( ⇀ ‸ ↼ )७</span>' +
    '<span class="tomoji" name=": :">ლ(ಠ益ಠლ </span>' +
    '<span class="tomoji" name=": :">ಠᴥಠ</span>' +
    '<span class="tomoji" name=": :">(ಠ_ರೃ) </span>' +
    '<span class="tomoji" name=": :">(╯°□°）╯︵ ┻━┻</span>' +
    '<span class="tomoji" name=": :">(╯°Д°）╯︵ /(.□ . \)</span>' +
    '<span class="tomoji" name=": :">┬─┬ノ( º _ ºノ)</span>' +
    '</div><!--/ascii-->'+

      
    '<div class="emojiBox sirOctopus" id="boxSiroctopus">'+
    '<span class="tomoji" name=":siroctopus-cute:"><img src="https://wearecodex.com/tomoji/siroctopus/octopusteem_01.png"></span>' +
    '<span class="tomoji" name=":siroctopus-cute:"><img src="https://wearecodex.com/tomoji/siroctopus/octopusteem_02.png"></span>' +
    '<span class="tomoji" name=":siroctopus-cute:"><img src="https://wearecodex.com/tomoji/siroctopus/octopusteem_04.png"></span>' +
    '<span class="tomoji" name=":siroctopus-cute:"><img src="https://wearecodex.com/tomoji/siroctopus/octopusteem_05.png"></span>' +
    '<span class="tomoji" name=":siroctopus-cute:"><img src="https://wearecodex.com/tomoji/siroctopus/octopusteem_06.png"></span>' +
    '</div><!--/sirOctopus-->'+
      
    '<div class="emojiBox kittyface" id="boxkittyface">'+
    '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_01.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_02.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_03.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_04.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_05.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_06.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_07.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_08.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_09.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_10.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_11.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_12.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_13.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_14.png"></span>' +
      '<span class="tomoji" name=""><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_15.png"></span>' +
      '</div><!--/kitty face-->'+
      
      '<div class="emojiBox ono emojiOpen" id="boxOno">'+
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_01.png"></span>' +
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_02.png"></span>' +
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_03.png"></span>' +
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_04.png"></span>' +
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_05.png"></span>' +
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_06.png"></span>' +
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_08.png"></span>' +
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_09.png"></span>' +
      '<span class="tomoji" ><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_07.png"></span>' +

      '</div><!--/ono-->'+
    
      '<div class="emojiBox customizeemojis">'+
      '<p><strong>Select the stickers you want to see in the panel</strong></p>'+
      
      '<input type="checkbox" id="checkOno" name=".ono"><label for="checkOno"><img src="https://wearecodex.com/tomoji/ono/ono_by_fabiyamada_01.png"></label>'+
      
      '<input type="checkbox" id="checksiroctopus" name=".sirOctopus"><label for="checksiroctopus"><img src="https://wearecodex.com/tomoji/siroctopus/octopusteem_01.png"></label>'+
      
      '<input type="checkbox" id="checkkittyface" name=".kittyface"><label for="checkkittyface"><img src="https://wearecodex.com/tomoji/ksf/kitty-face_stickers_by_fabiyamada_01.png"></label>'+
      
      '<input type="checkbox" id="checknormal" name=".normalEmojis"><label for="checknormal">😁</label>'+
      '<input type="checkbox" id="checkascii" name=".ascii"><label for="checkascii">(๑✧‿✧๑)</label>'+
      
      '<div class="clearfix"></div></div>'+
      
      
      '</div>'
  );



// Close Tomoji panel
$('.PostFull').on('click', '.closeTomoji', function () {
    $('.addEmojis').addClass('hideEmoji');
});



$('.PostFull').on('click', '.tomoji', function() {
    // Add the sticker to the comment textarea

    var $txt = jQuery(".ReplyEditor__body textarea");
    var caretPos = $txt[0].selectionStart;
    var textAreaTxt = $txt.val();
    var thetomoji = $(this).html();

    $txt.val(textAreaTxt.substring(0, caretPos) + thetomoji + textAreaTxt.substring(caretPos) );
});

$('.PostFull').on('click', '.selectBtn', function () {
    // Do something on an existent or future .dynamicElement
    $('.selectBtn').removeClass('selected');
    $('.customize').removeClass('selected');
    $(this).addClass('selected');
    var openEmoji = $(this).attr('name');
    $('.emojiBox').removeClass('emojiOpen');
    $(openEmoji).addClass('emojiOpen');

});
$('.PostFull').on('click', '.customize', function () {
    // Do something on an existent or future .dynamicElement
    $('.selectBtn').removeClass('selected');
    $(this).addClass('selected');

    $('.emojiBox').removeClass('emojiOpen');
    $('.customizeemojis').addClass('emojiOpen');

});



/** SELECT WHICH STICKERS YOU WANT TO SEE IN THE PANEL **/

 $(document).on('click', '.customizeemojis :checkbox', function () {
     var showEmoji = $(this).attr('name');
      if ($(this).attr('checked')) {
        $(showEmoji).addClass('hideEmoji'); //checked
          $(this).attr('checked', false);
        }
        else {
             $(showEmoji).removeClass('hideEmoji'); //not checked
             $(this).attr('checked', true);
        }
});


/** SAVE the user preferences **/

var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $(".customizeemojis :checkbox");

$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});

// On page load
$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});

   
// Checks which checkbox is checked and shows the stickers

$(document).ready(function() {
  $('.customizeemojis :checkbox').each(function( i ) {     
    var whathide= $(this).attr('name');
        if ($(this).is(':checked')) {
            $(whathide).removeClass('hideEmoji'); //not checked
            $(this).attr('checked', true);
        } else {
            $(whathide).addClass('hideEmoji'); //checked
            $(this).attr('checked', false);
        }
  });
});

