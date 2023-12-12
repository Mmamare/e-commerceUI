import React from "react";
import UserApi from "./UserApi";    


export default class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: []
        }
    }

    componenetDidMount(){
        UserApi.getUserDetails().then((data) => {
            this.setState({user: data})
            console.log(this.state.data)
        })
        .catch(function (ex){
            console.log('No data found', ex);
        });
    }

    render(){
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Useer Id</th>
                            <th>User name</th>
                            <th>User email</th>
                            <th>UniqueId</th>
                            <th>Product Id</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            this.state.user.map(user=>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.emailId}</td>
                                    <td>{user.uniqueId}</td>
                                    <td>{user.productId}</td>
                                </tr>
                        
                            )
                        }
                    </tbody>
                </table>
    
            </div>
        );
    }
}


