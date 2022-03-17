import { handleFirstResponse } from "../../utils/apuUtils"

export const AvatarsAPI = {
    getAvatars() {
        return fetch('https://noroff-react-txt-forum-api.herokuapp.com/avatars')
            .then(handleFirstResponse)
    }
}