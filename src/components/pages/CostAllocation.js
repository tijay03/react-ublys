import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import CostAllocDetails from "./CostAllocDetails";

class CostAllocation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [
          {headerName: "Invoice", field: "invoice"},
          {headerName: "Client", field: "client"},
          {headerName: "Supplier", field: "supplier"},
          {headerName: "Cost Type", field: "costtype"},
          {headerName: "Payment Done", field: "paydone"},
          {headerName: "TO Year", field: "toyear"},
          {headerName: "Total Amount", field: "totalamount"}
        ],
        rowData: [
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}, 
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}, 
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}, 
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}, 
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}, 
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}, 
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}, 
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}, 
          {invoice: "THA3434233", client: "Mary Kay Inc.", supplier: "A.M.F. HONG KONG", costtype: "Testing", paydone: "2019-08-21", toyear: "2019", totalamount: "1 823.5000 HKD"}
        ]
      }
    }
  
    handleClick() {
      //alert('test 2');
      document.getElementById('Search').style.display = "none";
      document.getElementById('Details').style.display = "block";
     // this.currentTarget.className = " active";
     
    }

    handleClick2() {
      document.getElementById('Search').style.display = "block";
      document.getElementById('Details').style.display = "none";
     
    }
    
    render() {
      return (
        <div style={{textAlign:"left", padding:"10px"}}>
          <div style={{display:"inline-block",height:"5px"}}></div>
          <p><h7>Cost Allocation (ag-grid)</h7></p>
          <hr/>
          <div class="tab">
            <button class="tablinks" onClick={this.handleClick2.bind(this)}>Search</button>
            <button class="tablinks" onClick={this.handleClick.bind(this)}>Details</button>
          </div>
          <div id="Search"  class="tabcontent"
            className="ag-theme-balham"
            style={{ 
            height: '400px', 
            width: '100%' }} 
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              onCellClicked={this.handleClick.bind(this)}>
            </AgGridReact>
          </div>
          <div id="Details" class="tabcontent">
            <CostAllocDetails/>
          </div>
         
        </div>
      );
    }
  }
  
  export default CostAllocation;