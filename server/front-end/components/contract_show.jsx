import React from 'react';
import jsPDF from 'jspdf';


class ShowContract extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            numPages: null,
            pageNumber: 1,
        };

        this.DownloadContract = this.DownloadContract.bind(this);
        this.onDocumentLoad = this.onDocumentLoad.bind(this);


    }


    DownloadContract(){
        let doc = new jsPDF();

        doc.text('HI LeanTerms', 10, 10);
        doc.save();
    }



    onDocumentLoad( numPages ){
        this.setState({ numPages });
    };




    render(){
        let pdf=this.DownloadContract();
        return(
          <div>

          </div>
        );
    }
}


export default ShowContract;