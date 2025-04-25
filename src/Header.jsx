
function Header(){
const profile={
    student:"name",
    id:78,
    gender:"male",
    class:10,
};
    return( 
        <header>
            <h1>my website</h1>
            <ul className="list">
                <li><a herf="">{profile.student}</a></li>
                <li><a herf="">{profile.id}</a></li>
                <li><a herf="">{profile.class}</a></li>
            </ul>
        </header>
    );
   }
   
   export default Header