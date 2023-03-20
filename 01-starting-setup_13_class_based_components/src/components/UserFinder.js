import { Fragment, useState, useEffect, Component } from "react";
import UsersContext from "../store/users-context";
import ErrorBountry from "./ErrorBountry";
import classes from "./UserFinder.module.css";
import Users from "./Users";

class UserFinder extends Component {
    static contextType = UsersContext;
  constructor() {
    super();
    this.state = { searchTerm: "",filterUsers:[] };
  }
  componentDidMount(){
    this.setState({filterUsers:this.context.users})
  }
  componentDidUpdate(prevsProps,prevsState){
    console.log(this.state.searchTerm)
    if(prevsState.searchTerm !==this.state.searchTerm){
        this.setState({filterUsers:this.context.users.filter((user) => user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))}) 
    }
  }
  searchChangeHandler(event){
    this.setState({searchTerm : event.target.value});

  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBountry>
            <Users users={this.state.filterUsers} />
        </ErrorBountry>
      </Fragment>
    );
  }
}
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}><input type='search' onChange={searchChangeHandler} /></div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
