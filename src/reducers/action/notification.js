import Noty from 'noty';
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/nest.css";
// import { FiSend, FiX } from "react-icons/fi";
let alertIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
let successIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
let infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
let exit = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
const GetError = (message) => {
    return (new Noty({
        type: "error",
        theme: "nest",
        text: `  <div id="note">${alertIcon} ${message}<button id='closeError'><strong>close</strong>${exit}</button></div>`,

    }).show())
}
const GetEditForm = (post) => {
    return (new Noty({
        type: "info",
        theme: "nest",
        text: `  <div id="note">${infoIcon} ${post} <button id='closeError'><strong>close</strong>${exit}</button> </div>`,

    }).show())
}
const GetSuccess = (message) => {
    return (new Noty({
        type: "success",
        theme: "nest",
        text: ` <div id="note"> ${successIcon} ${message} <button id='closeSuccess'><strong>close</strong>${exit}</button> </div>`,

    }).show())
}
export { GetError, GetEditForm, GetSuccess }