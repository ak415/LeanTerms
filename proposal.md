## Lean Terms

Muggle struggle is a game inspired by Miniclip.com's [Bubble Trouble](https://www.youtube.com/watch?v=Dsu8CIpsyxM).

### Background & Overview

LeanTerms is a web application that allows users to generate residential lease agreements with customizable terms. It provides legal security to both tenants and landlords through mutually agreed upon housing terms. This is especially useful to those seeking or offering housing opportunities in non-traditional markets such as Craigslist.

A user will have the ability to virtually share an agreement with a second user, granting this second user the same permissions as the first. In other words, both users will become ‘owners’ of the contract. This means that both parties will have the ability to edit the agreement, or to delete it entirely. Any time a user edits or deletes a shared agreement, the second owner will be notified. Once a contract is finalized, i.e. signed by both parties, neither party can edit the contract, and no single party can unilaterally delete the contract. An individual user may ‘request’ to delete a finalized contract, but both parties will need to approve the deletion request.

###MVPs

* [ ] User Authentication
* [ ] New account creation, login, and demo login
* [ ] Contract Form
* [ ] Users will be able to create, view, edit, and/or delete a contract
* [ ] User Page
* [ ] Where a logged in user will be able to view all contracts associated with their account
* [ ] Website Homepage
* [ ] Includes short blurb about app and a mini demo on how to use the app
* [ ] Production README
* [ ] Bonus MVP
* [ ] Allow online payment transfers for security deposits/rent

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

![](https://raw.githubusercontent.com/aazaiez/LeanTerms/master/docs/Wireframes/Images/to/Screenshot%202018-02-18%2016.52.34.png)

### Architecture & Technologies

### Implementation Timeline

**Over the weekend**

**Day 1**

**Day 2**

**Day 3**

**Day 4**

### Bonus Functionality
