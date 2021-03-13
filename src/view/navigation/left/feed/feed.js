
import placer from '../../../../image.svg'
import { FetchCardAvatars } from '../../../../reducers/action/fetchAvatar'
const ApiAvatars = () => {
    FetchCardAvatars()
    return (
        <section id="list-avatars">
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>

        </section>
    )
}

export default ApiAvatars;