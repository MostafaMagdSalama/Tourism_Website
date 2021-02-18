import React, { Component } from 'react'
import HappyCustomerHeader from './happyCustomerHeader';
import Customer from './customer';
import customer_1 from '../img/customers/customer-1.jpg';
import customer_2 from '../img/customers/customer-2.jpg';
import customer_3 from '../img/customers/customer-3.jpg';


export default class happyCustomers extends Component {
    render() {
        const title=`“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`;
        return (
            <div className="happyCustomers">
                <HappyCustomerHeader/>
                <div className="customersContainer">
                <Customer img={customer_1} comment={title} name='Clare Gupta'/>
                <Customer img={customer_2} comment={title} name='Rogie Slater'/>
                <Customer img={customer_3} comment={title} name='John Doe'/>
                </div>
               
            </div>
        )
    }
}
