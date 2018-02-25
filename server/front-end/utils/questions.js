export default [
  {
    title: 'Parties',
    body: 'Provide names of parties involved in the transaction:',
    textFields: ["Landlord's Full Name:", "Tenant's Full Name:"],
    textFieldStates: ['party-name-1', 'party-name-2']
  },
  {
    title: 'Lease Type',
    body: 'Select lease type',
    radioButtons: ['Month-to-month', '1-year-lease'],
    radioButtonState: 'lease-type'
  },
  {
    title: 'Effective Date',
    body: 'Select lease start date:',
    dateField: true,
    dateButtonState: 'lease-start-date'
  },
  {
    title: 'Notice-to-Vacate',
    body:
      'A landlord or tenant must give a minimum period of notice when ending a periodic tenancy. What is the notice period?',
    textFields: ['Days'],
    textFieldStates: ['notice-to-vacate']
  },
  {
    title: 'Property Type',
    body: 'Select property type from the options below',
    radioButtons: ['Apartment', 'Condominium', 'House', 'Room'],
    radioButtonState: 'property-type'
  },
  {
    title: 'Address',
    body: "Provide the leased property's address:",
    textFields: [
      'Street Address',
      'Address Line 2',
      'City',
      'State',
      'Zip Code'
    ],
    textFieldStates: [
      'property-street-address',
      'property-address-line-2',
      'property-city',
      'property-state',
      'property-zip-code'
    ]
  },
  {
    title: 'Furniture Status',
    body: 'Is the property going to be furnished throughout the lease period?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'furnished'
  },
  {
    title: 'Parking Status',
    body: 'Is parking provided throughout the lease period?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'parking'
  },
  {
    title: "Lessor's Address",
    body: "Provide the landlord's or lessor's address:",
    textFields: [
      'Street Address',
      'Address Line 2',
      'City',
      'State',
      'Zip Code'
    ],
    textFieldStates: [
      'lessor-street-address',
      'lessor-address-line-2',
      'lessor-city',
      'lessor-state',
      'lessor-zip-code'
    ]
  },
  {
    title: 'Rent Amount',
    body: 'What is the rent amount requied to be paid on a monthtly basis?',
    textFields: ['$'],
    textFieldStates: ['rent-amount']
  },
  {
    title: 'Rent Due Date',
    body: 'Provide the day of the month by which rent is due:',
    textFields: [
      'The rent is due for the entire lease term, in equal payments, on which day of the month?'
    ],
    textFieldStates: ['rent-due-day']
  },
  {
    title: 'Payment Method',
    body: 'Select payment method from the options below:',
    radioButtons: [
      "ACH - Electronic payment made from the tenant's bank account",
      'Check',
      'PayPal',
      'Venmo'
    ]
  },
  {
    title: 'Deposit terms',
    body: 'Is the tenant required to pay a deposit?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'deposit-required',
    textFields: ['What is the deosit amount?'],
    textFieldStates: ['deposit-amount'],
    dateField: "Select the deposit's due date:",
    dateButtonState: 'deposit-due-date'
  },
  {
    title: "First and Last month's Payment Requirements",
    body:
      'In addition to the desposit, what is the tenant required to pay upon move-in?',
    radioButtons: ["First month's rent only", "First and last month's rent"],
    radioButtonState: 'first-last-month-requirements'
  },
  {
    title: 'Late Fees',
    body:
      'Is the tenant subject to late payment fees if rent is not paid by the due date?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'late-payment-fees',
    textFields: ['What do the late fees amount to?'],
    textFieldStates: ['total-late-fees']
  },
  {
    title: 'Utilities',
    body: 'Is the tenant required to pay for utilities?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: ['utilities']
  },
  {
    title: 'Pet Policy',
    body: 'Is the tenant allowed to have pets on the leased premises?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'pet-policy'
  },
  {
    title: 'Subletting Policy',
    body:
      'Is the tenant allowed to fully or partially sublease the leased property?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'subletting-policy'
  },
  {
    title: 'Guests',
    body: 'Is the tenant allowed to have guests stay overnight?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'guest-policy'
  },
  {
    title: 'Tentative Signing Date',
    body: 'Select lease signing date:',
    dateField: 'Select lease signing date:',
    dateButtonState: 'tentative-signing-date'
  }
];
