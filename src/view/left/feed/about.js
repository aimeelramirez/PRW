
import placer from './../../../image.svg'
import { FetchCardAvatars } from '../../../reducers/action/fetchAvatar'
const ApiAvatars = () => {
    FetchCardAvatars()
    return (
        <div className="Body">
            <section id="list-avatars">
                <div className="card-feed">
                    <div className="clip">
                        <img src={placer} className="profile" alt="description" />
                    </div>
                    <div className="list-feed">
                        <p>The world needs more Joy... this idea is super fresh</p>
                    </div>
                </div>
                <div className="card-feed">
                    <div className="clip">
                        <img src={placer} className="profile" alt="description" />
                    </div>
                    <div className="list-feed">
                        <p>Life is the ultimate gift</p>
                    </div>
                </div>
                <div className="card-feed">
                    <div className="clip">
                        <img src={placer} className="profile" alt="description" />
                    </div>
                    <div className="list-feed">
                        <p>Artists are founders</p>
                    </div>
                </div>
                <div className="card-feed">
                    <div className="clip">
                        <img src={placer} className="profile" alt="description" />
                    </div>
                    <div className="list-feed">
                        <p>Style is genderless</p>
                    </div>
                </div>  <div className="card-feed">
                    <div className="clip">
                        <img src={placer} className="profile" alt="description" />
                    </div>
                    <div className="list-feed">
                        <p>If I got any cooler I would freeze to death</p>
                    </div>
                </div>
                <div className="card-feed">
                    <div className="clip">
                        <img src={placer} className="profile" alt="description" />
                    </div>
                    <div className="list-feed">
                        <p>I feel calm but energized</p>
                    </div>
                </div>

            </section></div>
    )
}
//https://api.kanye.rest/

export default ApiAvatars;