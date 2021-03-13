import Noty from 'noty';
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/nest.css";
const GetError = (message) => {
    return (new Noty({
        type: "error",
        theme: "nest",
        text: ` <div>${message}<button id='closeError'><strong>close</strong> > </button></div>`,

    }).show())
}
const GetEditForm = (post) => {
    return (new Noty({
        type: "info",
        theme: "nest",
        text: ` <div>${JSON.stringify(post)} <button id='closeError'><strong>close</strong> > </button> </div>`,

    }).show())
}
export { GetError, GetEditForm }