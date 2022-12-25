//import './list.css';
function List(props){
    return(
   <ul className="listal"> {props.users.map(user=><li key={user.id}>{user.name}</li>)}
   </ul>
        
    );
}
export default List