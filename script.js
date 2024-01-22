function showhide () {
    var x = document.getElementById("key");
    var y = document.getElementById("open-eye");
    var z = document.getElementById("hide-eye");

    if(x.type == 'password') {
        x.type = 'text';
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = 'password';
        y.style.display = "none";
        z.style.display = "block";
    }
}