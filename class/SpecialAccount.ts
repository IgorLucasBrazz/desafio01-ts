import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if ((this as any).validateStatus()) {
      if (value > 0) {
        const bonusAmount = value + 10;
        (this as any).balance += bonusAmount;
        console.log(`Você depositou R$${value}, com bônus de R$10, totalizando R$${bonusAmount}`);
      } else {
        console.log('O valor do depósito deve ser positivo.');
      }
    }
  }
}
