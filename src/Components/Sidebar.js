import { useSelector } from "react-redux";

function Sidebar(){
    const sidebar = useSelector(store=>store.nav.sidebar);
    if(!sidebar) return null;
    return(
        <div className="p-5 w-48 shadow-lg">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                </ul>
                <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>             
                <li>Subscriptions</li>
                <li>Music</li>
                <li>Movies</li>
                 <li>Sports</li>
                <li>Gaming</li>
            </ul>
            <h1 className="font-bold pt-5"> Watch Later</h1>
            <ul>             
                <li>Subscriptions</li>
                <li>Music</li>
                <li>Movies</li>
                 <li>Sports</li>
                <li>Gaming</li>
            </ul>
        </div>
    )
}
export default Sidebar;