module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter component name...',
  },
  {
    type: 'select',
    name: 'folder',
    message: 'Select screen folder...',
    choices: [
      'Auth',
      'CodeConfirm',
      'Start',
      'Main',
      'Profile',
      'Test',
      'OrderHistory',
      'Order',
      'HistoryTransaction',
      'ChoiceSourcePoints',
      'Feedback',
      'ProgramTerms',
      'Home',
      'SendInvitationFriend',
      'Products',
      'ProductInfo',
      'CategoryDetailed',
      'ChooseShop',
      'Basket',
      'BarCode',
      'ChoosePaymentMethod',
      'Payment',
      'SuccessfulPayment',
      'MessageArchive',
      'Language',
      'Chat',
      //ADD MORE SCREENS
    ],
  },
];