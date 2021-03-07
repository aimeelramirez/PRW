$(document).ready(() => {
    console.log("jQuery is running.");

});
class GetNote {
    constructor() {
        props()
    }
    static showMessage(message) {
        console.log(message)
        let getNoty;
        //hide
        $("#close").hide();

        //show pop up
        // $("#show").on("click", (e) => {
        //     e.preventDefault();
        getNoty = new Noty({
            type: "error",
            theme: "semanticui",
            text: ` ${message} <button id='close'><strong>close</strong></button>`,
        }).show();
        $("#close").show()
        //hide pop up
        $("#close").on("click", (e) => {
            e.preventDefault()
            getNoty.close()
            $("#close").hide()
        });
    }

}

