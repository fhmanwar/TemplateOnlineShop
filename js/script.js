
function validateForm() {
    // debugger;
    var nama = $('#name').val();
    var mail = $('#email').val();
    var msg = $('#msg').val();
    if (nama == "" ) {
        alert("Name must be fill");
    } else if (mail == "") {
        alert("Email must be fill");
    } else if (!IsValidEmail(mail)) {
        alert("Invalid Email");
    }  else if (msg == "") {
        alert("Comment must be fill");
    }else {
        alert("Success");
    }
}

function IsValidEmail(email) {
    //Check minimum valid length of an Email.
    if (email.length <= 2) {
        return false;
    }
    //If whether email has @ character.
    if (email.indexOf("@") == -1) {
        return false;
    }

    var parts = email.split("@");
    var dot = parts[1].indexOf(".");
    var len = parts[1].length;
    var dotSplits = parts[1].split(".");
    var dotCount = dotSplits.length - 1;

    //Check whether Dot is present, and that too minimum 1 character after @.
    if (dot == -1 || dot < 2 || dotCount > 2 ) {
        return false;
    }

    var list = new Array (
        "/", "!", "#", "$", "%", 
        "%", "^", "&", "*", "(", 
        ")", "+", "=", "-", "`", 
        "~", ";", "<", ">",  "?", 
        "[", "]", "{", "}", ",",
    );
    var llength = list.length;
    var symbol = parts[0];
    for (i = 0; i < symbol.length; i++) {
        for (j = 0; j < llength; j++) {
            if(symbol[i] == list[j]) {
                return false;
            }
        }        
    }

    //Check whether Dot is not the last character and dots are not repeated.
    for (var i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length == 0) {
            return false;
        }
    }

    return true;
};