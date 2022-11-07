import { LightningElement, api } from 'lwc';

export default class SettlementCalculator extends LightningElement {
  @api balance;
  deductible = 0;
  discountPercent = 0;
  discountAmount = 0;
  calculatedDiscountPercent = 0;
  calculatedDiscountAmount = 0;

  handleDiscountPercentChange(event) {
    this.discountPercent
    this.calculatedDiscountAmount = this.balance - (this.balance * event.detail.value / 100);
  }

  handleDiscountAmountChange(event) {
    if (this.balance === 0) {
      this.calculatedDiscountPercent = 0;
    } else {
      this.calculatedDiscountPercent = event.detail.value / this.balance * 100;
    }
  }

  handleClearFormClick() {
    this.deductible = 0;
    this.discountPercent = 0;
    this.discountAmount = 0;
    this.calculatedDiscountPercent = 0;
    this.calculatedDiscountAmount = 0;
  }
}