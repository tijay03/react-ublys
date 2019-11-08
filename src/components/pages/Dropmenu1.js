import React from "react";
import { Table } from 'react-bootstrap';

function Dropmenu1(){

    return(
        <div style={{textAlign:"left", padding:"10px"}}>
            <div style={{display:"inline-block",height:"5px"}}></div>
            <p><h7>Cost Allocation (react grid)</h7></p>
            <hr/>
            <div>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Invoice</th>
                        <th>Client</th>
                        <th>Supplier</th>
                        <th>Cost Type</th>
                        <th>Payment Done</th>
                        <th>TO Year</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>THA3434233</td>
                        <td>Mary Kay Inc.</td>
                        <td>A.M.F. HONG KONG</td>
                        <td>Testing</td>
                        <td>2019-08-21</td>
                        <td>2019</td>
                        <td>1 823.5000 HKD</td>
                    </tr>
                    <tr>
                        <td>SH2019024</td>
                        <td>Mary Kay Inc.</td>
                        <td>A.M.F. HONG KONG</td>
                        <td>Packaging</td>
                        <td>2019-10-12</td>
                        <td>2019</td>
                        <td>4 823.5000 HKD</td>
                    </tr>
                    <tr>
                        <td>SH2019024</td>
                        <td>Mary Kay Inc.</td>
                        <td>A.M.F. HONG KONG</td>
                        <td>Packaging</td>
                        <td>2019-10-12</td>
                        <td>2019</td>
                        <td>4 823.5000 HKD</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Dropmenu1;