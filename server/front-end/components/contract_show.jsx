import React from 'react';
import jsPDF from 'jspdf';
import PDF from 'react-pdf-js';

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

        doc.text('Hello world!', 10, 10);
        return doc;
    }



    onDocumentLoad( numPages ){
        this.setState({ numPages });
    };




    render(){
        debugger
        let pdf=this.DownloadContract();
        return(
          <div>
              <PDF file='../../PDF/a4.pdf'/>
          </div>
        );
    }
}


export default ShowContract;