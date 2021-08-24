var contactDownloadBtn  = $(".down-load-btn");
var contactBackBtn      = $(".success-close-btn");
var contactShape        = $(".success-sec-shape");
var copyBtn             = $(".url-copy");

contactBackBtn.click(function(){
    $(".success-sec").removeClass("show");
    $(".success-sec-shape").removeClass("show");
    document.querySelector(".sec16 #stb_subscribe").style.display="flex";
})

copyBtn.click(function(){
    CopyUrlToClipboard();
});

function CopyUrlToClipboard(){
    var dummy   = document.createElement("textarea");
    var text    = location.href;
    
    dummy.value = text;
    document.body.appendChild(dummy);

    var selection = document.getSelection();
    var range = document.createRange();

    range.selectNode(dummy);
    
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");

    selection.removeAllRanges();
    
    document.body.removeChild(dummy);
    alert("URL 복사가 완료되었습니다.");
}
