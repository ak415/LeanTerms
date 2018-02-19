## Lean Terms

### Background & Overview

LeanTerms is a web application that allows users to generate residential lease agreements with customizable terms. It facilitates residence-related financial transactions, such as security deposits and rent payments, and provides legal security and peace of mind to both tenants and landlords through mutually agreed upon housing terms. This is especially useful to those seeking or offering housing opportunities in non-traditional markets such as Craigslist.

A user will have the ability to virtually share an agreement with a second user, granting this second user the same permissions as the first. In other words, both users will become ‘owners’ of the contract. This means that both parties will have the ability to edit the agreement, or to delete it entirely. Any time a user edits or deletes a shared agreement, the second owner will be notified. Once a contract is finalized, i.e. signed by both parties, neither party can edit the contract, and no single party can unilaterally delete the contract. An individual user may ‘request’ to delete a finalized contract, but both parties will need to approve the deletion request.

### MVPs

* [ ] User Authentication
* [ ] New account creation, login, and demo login
* [ ] Contract Form: users will be able to create, view, edit, and/or delete a contract
* [ ] User Page: where a logged in user will be able to view all contracts associated with their account
* [ ] Payment: Allow transfer of payments between user accounts
* [ ] Website Homepage: includes short blurb about app and a mini demo on how to use the app
* [ ] Electronic Signatures
* [ ] Production README

### Technologies and Technical Challenges

**Backend: Node.js, MongoDB, AWS S3 as Cloud Host**
**Frontend: React/Redux**

**Libraries**: PDFKit.js, Signature Pad, Paperclip

**Accessing contract terms**

* Using MongoDB to handle data persistence and retrieval will require building familiarity with the database program in a short amount of time.

* Being able to allow collaborating parties to edit the contract’s terms and handle notifications and real time updates.

**Exporting Contracts as PDF documents**

* We will use PDFKit.js to export contracts as PDF documents.

**Electronic Signatures**

* In order to store a user’s signature in our database, we will make use of Signature Pad’s Canvas-based platform

### Wireframes

#### **Homepage**

![](https://raw.githubusercontent.com/aazaiez/LeanTerms/master/docs/Wireframes/Images/Screenshot%202018-02-18%2016.54.19.png)

#### **Form Creation**

![](https://raw.githubusercontent.com/aazaiez/LeanTerms/master/docs/Wireframes/Images/Screenshot%202018-02-18%2016.53.51.png)

#### **User Page**

![](https://raw.githubusercontent.com/aazaiez/LeanTerms/master/docs/Wireframes/Images/Screenshot%202018-02-18%2016.53.25.png)

#### **Contact Sharing Page**

![](https://raw.githubusercontent.com/aazaiez/LeanTerms/master/docs/Wireframes/Images/Screenshot%202018-02-18%2016.52.34.png)

### Architecture & Technologies

### Implementation Timeline

**Over the weekend**

* [x] Learn Node.js (Everyone)

**Day 1**

* [ ] Complete user authentication back-end (Areej)
* [ ] Set up Heroku page
* [ ] Install and learn MongoDB (Everyone)
* [ ] Complete styling of login/signup pages (Akram)
* [ ] Learn how to user Paperclip (Ali)

**Day 2**

* [ ] Set up Paperclip and begin learning PDFKit.js (Ali)
* [ ] Complete User page (Akram)
* [ ] Set up database 'Contracts' and 'Types' collections (Areej)

**Day 3**

* [ ] Set up PDFKit.js and begin learning Signature Pad (Ali)
* [ ] Begin working on contract form page (Akram)
* [ ] Work on styling homepage, learn payment API (Areej)

**Day 4**

* [ ] Work on contract page and ensure the whole contract creation process is functional and data persists to the database (Areej + Akram)
* [ ] Add React component for editing contract on browser text editor (Ali)

**Day 5**

* [ ] Learn payment API (Ali)
* [ ] Build payment-related React components (Akram)
* [ ] Develop payment API back-end (Areej)

**Day 6**

* [ ] Review and Style everything (Everyone)

**Day 7**

* [ ] Final Polish of README (Everyone)
* [ ] Final push to Heroku

### Bonus Functionality

* [ ] Add email verification
* [ ] Add Google Oauth
