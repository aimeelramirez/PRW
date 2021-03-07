const include = async (file) => {
    let script = document.createElement("script")
    script.src = file
    script.type = "text/javascript"
    script.defer = true
    await getScript(script)
}
const getScript = (script) => {
    let htmlScript = document.querySelector("head")
    htmlScript.insertAdjacentElement("afterend", script)
}
//get files to read more than one
include("assets/js/spinner.js")
include("assets/js/notification.js")
include("assets/js/index.js")
