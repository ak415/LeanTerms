import React from 'react';


class Contract extends React.Component {

  constructor(props) {
    super(props);
    this.state = {contractPageIndex: 0};
    this.changedisplay = this.changedisplay.bind(this);
    this.handleNext = this.handleNext.bind(this);


  }

  componentDidMount(){
    $("#bar").width($("#bar").parent().width()*0.05);
    $("#bar").children()[0].innerHTML = ($("#bar").width()/$("#bar").parent().width()*100).toFixed(0) + "%";
  }

  changedisplay(id){
      if (document.getElementById(id)){
          document.getElementById(id).style.display = 'flex';
      }
      return ;
  }

  handleNext(element, status) {
    let widthHash = {
      'section01': '5%',
      'section02': '10%',
      'section03': '15%',
      'section04': '20%',
      'section05': '25%',
      'section06': '30%',
      'section07': '35%',
      'section08': '40%',
      'section09': '45%',
      'section10': '50%',
      'section11': '55%',
      'section12': '60%',
      'section13': '65%',
      'section14': '70%',
      'section15': '75%',
      'section16': '80%',
      'section17': '85%',
      'section18': '90%',
      'section19': '95%',
      'section20': '100%',
    };
    $("li").css('font-weight','normal');
    $(".show").css('display','none');
    $(".hidden").css('display','none');
    $(`#${element}`).css('display','block');
    $(`.${element}`).css('font-weight','bold');


    $("#bar").width(widthHash[element]);

    $("#bar").children()[0].innerHTML = ($("#bar").width()/$("#bar").parent().width()*100).toFixed(0) + "%";
  }


  render() {
    return(

      <div>


          <div className="contract-form-wrapper">

            <div className="contract-title">
              <h1>California Residential Lease Agreement</h1>
            </div>

            <div id="progress" className="graph">
              <div id="bar"><p>0%</p></div>
            </div>


          <div className="wrap-conract-navigation">




          <form className="contract-form">
            <div id="currentContract">


              <div className="show" id="section01">

                <div id="component-title" className="parties">
                  <p>Parties</p>
                    <span>Provide names of parties involved in the transaction :
                    </span>

                  <div className="party-name1">
                    <label>Landlord's Full Name :</label>
                    <input id="contract-name-input" type="text"></input>
                  </div>

                  <div className="party-name2">
                    <label>Tenant's Full Name :</label>
                    <input id="contract-name-input" type="text"></input>
                  </div>
                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section02', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>


              <div className="show" className="hidden" id="section02">

                <div id="component-title">
                  <p>Lease Type</p>

                    <span>Select lease type :
                    </span>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                      <label >Month-to-month</label>
                    </div>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                      <label >1-year-lease</label>
                    </div>


                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section01', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                  <button type="button" onClick={() => this.handleNext('section03', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>





              <div className="hidden" id="section03">

                <div id="component-title">
                  <p>Effective Date</p>

                    <span>Select lease start date :
                    </span>


                    <input id="date" type="date"/>


                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section02', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                  <button type="button" onClick={() => this.handleNext('section04', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>



              <div className="hidden" id="section04">

                <div id="component-title" >
                  <p>Notice-To-Vacate</p>

                    <span>A landlord or tenant must give a minimum period of notice when ending a periodic tenancy. What is the notice period?
                    </span>
                    <div>
                    <input id="contract-name-input" type="text"></input>
                    <label>days.</label>
                    </div>

                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section03', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                  <button type="button" onClick={() => this.handleNext('section05', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>



              <div className="hidden" id="section05">

                <div id="component-title" >
                  <p>Property Type</p>

                    <span>Select property type from the options below :
                    </span>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                           <label >Apartment</label>
                    </div>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                           <label >Condominium</label>
                    </div>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                           <label >House</label>
                    </div>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                           <label >Room</label>
                    </div>
                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section04', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                  <button type="button" onClick={() => this.handleNext('section06', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>


              <div className="hidden" id="section06">

                <div id="component-title" >
                  <p>Address</p>

                    <span>Provide the leased property's address:
                    </span>

                    <div className="party-name1">
                      <input id="contract-name-input" type="text" placeholder="Street Address"></input>
                    </div>

                    <div className="party-name2">
                      <input id="contract-name-input" type="text" placeholder="Address Line 2"></input>
                    </div>

                    <div id="city-state">

                      <div className="party-name2">
                        <input style={{width:'100%'}} id="contract-name-input" type="text" placeholder="City"></input>
                      </div>

                      <div className="party-name2">
                        <input style={{width:'100%'}} className="state" id="contract-name-input" type="text" placeholder="State"></input>
                      </div>

                    </div>

                    <div className="party-name2">
                      <input id="contract-name-input" type="text" placeholder="Zip Code"></input>
                    </div>

                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section05', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                  <button type="button" onClick={() => this.handleNext('section07', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>

              <div className="hidden" id="section07">

                <div id="component-title" >
                  <p>Furniture Status</p>

                    <span>Is the property going to be furnished throughout the lease period?
                    </span>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                           <label >Yes</label>
                    </div>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                           <label >No</label>
                    </div>

                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section06', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                  <button type="button" onClick={() => this.handleNext('section08', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>

              <div className="hidden" id="section08">

                <div id="component-title" >
                  <p>Parking Status</p>

                    <span>Is parking provided throughout the lease period?
                    </span>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                           <label >Yes</label>
                    </div>

                    <div id="element">
                      <input type="radio" id="contactChoice1"
                             name="contact" />
                           <label >No</label>
                    </div>

                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section07', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                  <button type="button" onClick={() => this.handleNext('section09', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>









              <div className="hidden" id="section09">

                <div id="component-title" >
                  <p>Lessor's Address</p>

                    <span>Provide the landlord's or lessor's address:
                    </span>

                    <div className="party-name1">
                      <input id="contract-name-input" type="text" placeholder="Street Address"></input>
                    </div>

                    <div className="party-name2">
                      <input id="contract-name-input" type="text" placeholder="Address Line 2"></input>
                    </div>

                    <div id="city-state">

                      <div className="party-name2">
                        <input style={{width:'100%'}} id="contract-name-input" type="text" placeholder="City"></input>
                      </div>

                      <div className="party-name2">
                        <input style={{width:'100%'}} className="state" id="contract-name-input" type="text" placeholder="State"></input>
                      </div>

                    </div>

                    <div className="party-name2">
                      <input id="contract-name-input" type="text" placeholder="Zip Code"></input>
                    </div>

                </div>

                <div className="buttons">
                  <button type="button" onClick={() => this.handleNext('section08', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                  <button type="button" onClick={() => this.handleNext('section10', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                </div>

              </div>




                <div className="hidden" id="section10">

                  <div id="component-title" >
                    <p>Rent Amount</p>

                      <span>What is the rent amount requied to be paid on a monthtly basis?
                      </span>
                      <div>
                        <label>$</label>
                        <input id="contract-name-input" type="text"></input>
                      </div>

                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section09', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section11', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>







                <div className="hidden" id="section11">

                  <div id="component-title" >
                    <p>Rent Due Date</p>

                      <span>Provide the day of the month by which rent is due:
                      </span>
                      <div>
                        <label> the rent is due for the entire lease term, in equal payments, on the </label>
                        <input id="contract-name-input" type="text"></input>
                        <label>day of each month. </label>
                      </div>

                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section10', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section12', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>



                <div className="hidden" id="section12">

                  <div id="component-title" >
                    <p>Payment Method</p>

                      <span>Select payment method from the options below:
                      </span>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >ACH - Electronic payment made from the tenant's bank account</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >Check</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >PayPal</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >Venmo</label>
                      </div>
                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section11', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section13', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>



                <div className="hidden" id="section13">

                  <div id="component-title" >
                    <p>Deposit terms</p>

                      <span>is the tenant required to pay a deposit?
                      </span>

                      <div id="element">
                        <input type="radio" id="contactchoice1"
                               name="contact" />
                             <label >Nes</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactchoice1"
                               name="contact" />
                             <label >No</label>
                      </div>

                      <span id="nested-span">What is the deposit amount?
                      </span>
                      <div>
                        <label>$</label>
                        <input id="contract-name-input" type="text"></input>
                      </div>

                      <span id="nested-span">Select the deposit's due date:
                      </span>
                      <input id="date" type="date"/>

                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section12', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section14', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>


                <div className="hidden" id="section14">

                  <div id="component-title" >
                    <p>First and Last month's Payment Requirements</p>

                      <span>In addition to the desposit, what is the tenant required to pay upon move-in?
                      </span>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >First month's rent only</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >First and last month's rent</label>
                      </div>

                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section13', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section15', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>



                <div className="hidden" id="section15">

                  <div id="component-title" >
                    <p>Late Fees</p>

                      <span>is the tenant subject to late payment fees if rent is not paid by the due date?
                      </span>

                      <div id="element">
                        <input type="radio" id="contactchoice1"
                               name="contact" />
                             <label >Yes</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactchoice1"
                               name="contact" />
                             <label >No</label>
                      </div>

                      <span id="nested-span">what do the late fees amount to?
                      </span>
                      <div>
                        <label>$</label>
                        <input id="contract-name-input" type="text"></input>
                      </div>
                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section14', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section16', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>





                <div className="hidden" id="section16">

                  <div id="component-title" >
                    <p>Utilities</p>

                      <span>Is the tenant required to pay for utilities?
                      </span>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >Yes</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >No</label>
                      </div>

                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section15', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section17', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>





                <div className="hidden" id="section17">

                  <div id="component-title" >
                    <p>Pet Policy</p>

                      <span>Is the tenant allowed to have pets on the leased premises?
                      </span>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >Yes</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >No</label>
                      </div>

                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section16', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section18', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>


                <div className="hidden" id="section18">

                  <div id="component-title" >
                    <p>Subletting Policy</p>

                      <span>Is the tenant allowed to fully or partially sublease the leased property?
                      </span>
                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >Yes</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >No</label>
                      </div>

                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section17', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section19', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>


                <div className="hidden" id="section19">

                  <div id="component-title" >
                    <p>Guests</p>

                      <span>Is the tenant allowed to have guests stay overnight?
                      </span>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >Yes</label>
                      </div>

                      <div id="element">
                        <input type="radio" id="contactChoice1"
                               name="contact" />
                             <label >No</label>
                      </div>

                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section18', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="button" onClick={() => this.handleNext('section20', "up")} className="nextbtn">Next<i id="next-icon" className="fa fa-arrow-right"></i></button>
                  </div>

                </div>


                <div className="hidden" id="section20">

                  <div id="component-title">
                    <p>Signing Date</p>

                      <span>Select lease signing date:
                      </span>


                      <input id="date" type="date" />


                  </div>

                  <div className="buttons">
                    <button type="button" onClick={() => this.handleNext('section19', 'down')} className="prvbtn"><i id="prv-icon" className="fa fa-arrow-left"></i>Previous</button>
                    <button type="submit" onClick={() => this.handleNext('section21')} className="nextbtn">Submit</button>
                  </div>

                </div>

            </div>
            </form>

            <div className="navigation">
              <ul>
                <li onClick={() => this.handleNext('section01', "up")} className="section01">Parties</li>
                <li onClick={() => this.handleNext('section02', "up")} className="section02">Lease Type</li>
                <li onClick={() => this.handleNext('section03', "up")} className="section03">Effective Date</li>
                <li onClick={() => this.handleNext('section04', "up")} className="section04">Notice</li>
                <li onClick={() => this.handleNext('section05', "up")} className="section05">Property Type</li>
                <li onClick={() => this.handleNext('section06', "up")} className="section06">Property Address</li>
                <li onClick={() => this.handleNext('section07', "up")} className="section07">Furniture</li>
                <li onClick={() => this.handleNext('section08', "up")} className="section08">Parking</li>
                <li onClick={() => this.handleNext('section09', "up")} className="section09">Landlord's Address</li>
                <li onClick={() => this.handleNext('section10', "up")} className="section10">Rent Amount</li>
                <li onClick={() => this.handleNext('section11', "up")} className="section11">Rent Due Date</li>
                <li onClick={() => this.handleNext('section12', "up")} className="section12">Rent Payment</li>
                <li onClick={() => this.handleNext('section13', "up")} className="section13">Deposit Terms</li>
                <li onClick={() => this.handleNext('section14', "up")} className="section14">First and Last</li>
                <li onClick={() => this.handleNext('section15', "up")} className="section15">Late Fees</li>
                <li onClick={() => this.handleNext('section16', "up")} className="section16">Utilities</li>
                <li onClick={() => this.handleNext('section17', "up")} className="section17">Pet Policy</li>
                <li onClick={() => this.handleNext('section18', "up")} className="section18">Subletting Policy</li>
                <li onClick={() => this.handleNext('section19', "up")} className="section19">Guests</li>
                <li onClick={() => this.handleNext('section20', "up")} className="section20">Signing Date</li>
              </ul>

            </div>




            </div>
          </div>

      </div>


    );
  }

}



export default Contract;
