import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <main>
            <h4>This page does not exist</h4>
            <Link to="/">Take me home</Link>
        </main>
    )
}

export default NotFound;