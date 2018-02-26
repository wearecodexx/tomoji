  var extIcon = chrome.extension.getURL('img/icon_16.png');

$('.PostFull__reply').append(
  '<span class="showTomoji"><img src="'+ extIcon +'"></span>'
);

 //$('span.PostFull__reply a').click(function() {
 $('.PostFull').on('click', '.showTomoji', function () {
  $(this).css('color','#585094');

  var octopusteem_01 = chrome.extension.getURL('siroctopus/octopusteem_01.png');
  var octopusteem_02 = chrome.extension.getURL('siroctopus/octopusteem_02.png');
  var octopusteem_04 = chrome.extension.getURL('siroctopus/octopusteem_04.png');
  var octopusteem_05 = chrome.extension.getURL('siroctopus/octopusteem_05.png');
  var octopusteem_06 = chrome.extension.getURL('siroctopus/octopusteem_06.png');


  $('.RightShare__Menu').append(
    '<div class="addEmojis"><h5><img src="'+ extIcon +'"> TOMOJI <span>add emojis to your comments</span><span class="closeTomoji">x</span></h5> <div class="allEmojis">' +
    '<div class="selector"> <span class="selectBtn" name=".normalEmojis">😁</span> <span class="selectBtn" name=".ascii">(๑✧‿✧๑)</span> <span class="selectBtn selected" name=".sirOctopus "><img src="'+ octopusteem_01 +'"></span></div>'+
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

    '<div class="emojiBox sirOctopus emojiOpen">'+
    '<span class="tomoji2" name=":siroctopus-cute:"  title="http://wearecodex.com/tomoji/siroctopus/octopusteem_01.png"><img src="'+ octopusteem_01 +'"></span>' +
    '<span class="tomoji2" name=":siroctopus-cute:"  title="http://wearecodex.com/tomoji/siroctopus/octopusteem_02.png"><img src="'+ octopusteem_02 +'"></span>' +
    '<span class="tomoji2" name=":siroctopus-cute:"  title="http://wearecodex.com/tomoji/siroctopus/octopusteem_04.png"><img src="'+ octopusteem_04 +'"></span>' +
    '<span class="tomoji2" name=":siroctopus-cute:"  title="http://wearecodex.com/tomoji/siroctopus/octopusteem_05.png"><img src="'+ octopusteem_05 +'"></span>' +
    '<span class="tomoji2" name=":siroctopus-cute:"  title="http://wearecodex.com/tomoji/siroctopus/octopusteem_06.png"><img src="'+ octopusteem_06 +'"></span>' +
    '</div><!--/sirOctopus-->'+
    '</div></div>'
  );

});


$('.PostFull').on('click', '.closeTomoji', function () {
    $('.addEmojis').remove()
});



// https://tinypng.com/

$('.PostFull').on('click', '.tomoji2', function () {
    // Do something on an existent or future .dynamicElement

//    var $txt = jQuery(".ReplyEditor__body textarea");
    var $txt = $("textarea").focus();
    var caretPos = $txt[0].selectionStart;
    var textAreaTxt = $txt.val();
    var thetomoji = $(this).attr('title');
  //  var txtToAdd = "thetomoji";
    $txt.val(textAreaTxt.substring(0, caretPos) + thetomoji + textAreaTxt.substring(caretPos) );
});

$('.PostFull').on('click', '.tomoji', function() {
    // Do something on an existent or future .dynamicElement

    var $txt = jQuery(".ReplyEditor__body textarea");
    var caretPos = $txt[0].selectionStart;
    var textAreaTxt = $txt.val();
    var thetomoji = $(this).html();

    $txt.val(textAreaTxt.substring(0, caretPos) + thetomoji + textAreaTxt.substring(caretPos) );
});

$('.PostFull').on('click', '.selectBtn', function () {
    // Do something on an existent or future .dynamicElement
    $('.selectBtn').removeClass('selected');
    $(this).addClass('selected');
    var openEmoji = $(this).attr('name');
    $('.emojiBox').removeClass('emojiOpen');
    $(openEmoji).addClass('emojiOpen');

});
