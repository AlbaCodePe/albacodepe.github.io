$.get("_header.html", contentToInject=>{
    $('#header-placeholder').replaceWith(contentToInject);
});

$.get("_footer.html", contentToInject=>{
    $('#footer-placeholder').replaceWith(contentToInject);
});
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

    var mainMenu = document.querySelector('.links');
    var openMenu = document.querySelector('.open')
    var closeMenu = document.querySelector('.close')

    function show(){
    mainMenu.style.display = 'flex'
    mainMenu.style.right = '0'
}
    function close(){
    mainMenu.style.right = '-60%'
}

    openMenu.addEventListener('click', show)
    closeMenu.addEventListener('click', close)




