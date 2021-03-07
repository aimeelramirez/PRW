$(document).ready(() => {
    console.log("jQuery is running.");
    let getNoty = "";
    let message = "Hello this is a placer.";
    //show pop up
    $("#show").on("click", (e) => {
        e.preventDefault();
        getNoty = new Noty({
            type: "success",
            theme: "mint",
            text: ` ${message} <button id='close'><strong>close</strong></button>`,
        }).show();
        $(`#${getNoty.id}`).show();
    });
    //hide pop up
    //   $("#close").on("click", (e) => {
    //     e.preventDefault();
    //     $(getBody).removeClass("noty_effects_open");
    //     $(getBody).addClass("noty_effects_close");
    //     $(`#${getNoty.id}`).remove()
    //   });
});
