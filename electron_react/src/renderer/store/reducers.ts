export default combineReducers({
  form: formReducer,
  payment: PaymentReducer,
  cardList: CardListReducer,
  payInstruments: AvailableInstrumentsReducer,
});
