import { LightningElement, api } from 'lwc';

export default class PaymentPlan extends LightningElement {
  @api balance;
  downPayment = 0;;
  firstPayDate = new Date().toISOString();
  remainingAmount;

}