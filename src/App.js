import React, {Component} from "react";

export default class App extends Component{
    state={
        users:[
            {id: 1,age:45, first_name:'John', last_name: 'Smith', city: 'Chicago', state:'IL'},
            {id: 2,age:25, first_name:'Jane', last_name: 'Doe', city: 'Phoenix', state:'AZ'},
            {id: 3,age:40, first_name:'Mary', last_name: 'Smith', city: 'Chicago', state:'IL'},
            {id: 4,age:50, first_name:'George', last_name: 'Edwards', city: 'Phoenix', state:'AZ'}
        ],
        active: true,
        text: ''
    }
    filterArray =()=>{
        let arr_filter = this.state.users.filter((item)=>item.age <= 40)
        this.setState({
            users: arr_filter
        })
    }
    changeActive=()=>{
        this.setState({
            active: !this.state.active
        })
    }
    changeIn=(str)=>{
        this.setState({
            text: str
        })
    }

    render(){
        const {users,active,text} =  this.state
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Age</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>City</th>
                                    <th>State</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((item,index)=>{
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.age}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                        <button onClick={this.filterArray} className='btn btn-success'>armiyaga qabul qilish</button> <span className="text-danger">(40 yosh va undan kichiklar qabul qilinsin)</span>
                    </div>
                    <div className="text-center mt-5">
                        {active ? (
                            <div>
                                <button onClick={this.changeActive} className="btn btn-primary">login</button>
                                <h1 className="dark">login</h1>
                            </div>
                        ) : (
                            <div>
                                <button onClick={this.changeActive} className="btn btn-danger">logout</button>
                                <h1 className="dark">welcome </h1>
                            </div>
                        )}
                        
                    </div>
                </div>
                <div className="text-center mt-5 ">
                <button onClick={()=>this.changeIn('Invoice 1')} className="btn btn-info">Invoice 1</button>
                <button onClick={()=>this.changeIn('Invoice 2')} className="btn btn-info">Invoice 2</button>
                <button onClick={()=>this.changeIn('Invoice 3')} className="btn btn-info">Invoice 3</button>
                </div>
                {
                    text === 'Invoice 1' ? (
                        <h1>Product 1</h1>
                    ) : text === 'Invoice 2' ? (
                        <h1>Product 2</h1>
                    ) : text === 'Invoice 3' ? (
                        <h1>Product 3</h1>
                    ) : ''
                }
            </div>
        )
    }
}