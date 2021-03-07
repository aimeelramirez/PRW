$(document).ready(() => {
    console.log("jQuery is running.");

});
class GetNote {
    constructor() {
        props()
    }
    static showMessageSuccess(message) {
        let getNoty;
        //hide
        $("#close").hide();
        getNoty = new Noty({
            type: "success",
            theme: "semanticui",
            text: ` ${message} <button id='closeSuccess'><strong>close</strong></button>`,
        }).show();
        // $("#close").show()
        //hide pop up
        $("#close").on("click", (e) => {
            e.preventDefault()
            // $("#close").hide()
            getNoty.close()
        });
    }
    static showMessageError(message) {
        let getNoty;
        //hide
        $("#close").hide();
        getNoty = new Noty({
            type: "error",
            theme: "semanticui",
            text: ` ${message} <button id='closeError'><strong>close</strong></button>`,
        }).show();
        // $("#close").show()
        //hide pop up
        $("#close").on("click", (e) => {
            e.preventDefault()
            // $("#close").hide()
            getNoty.close()
        });
    }

}

