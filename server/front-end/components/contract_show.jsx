import React from 'react';
import jsPDF from 'jspdf';
import pdfkit from 'pdfkit/js/data'

class ShowContract extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            numPages: null,
            pageNumber: 1,
        };

        this.DownloadContract = this.DownloadContract.bind(this);
        this.PdfPrep = this.PdfPrep.bind(this);


    }

    DownloadContract(){
        let doc = new jsPDF();

        doc.text('HI LeanTerms', 10, 10);
        doc.save();
    }


  render() {
    let pdf = this.DownloadContract();
    return(
        <div>

        </div>
    );
  }
}

export default ShowContract;
