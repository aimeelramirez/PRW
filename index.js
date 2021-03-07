$(document).ready(() => {

    console.log("jQuery is running.");
    let getNoty, message;
    //hide
    $("#close").hide()

    //show pop up
    $("#show").on("click", (e) => {
        e.preventDefault();
        message = "Hello this is a placer.";
        getNoty = new Noty({
            type: "success",
            theme: "semanticui",
            text: ` ${message} <button id='close'><strong>close</strong></button>`,
        }).show();
        $("#close").show()


    });
    //hide pop up
    $("#close").on("click", (e) => {
        e.preventDefault();
        getNoty.close()
        $("#close").hide()




    });
});
