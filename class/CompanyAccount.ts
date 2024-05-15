import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if((this as any).validateStatus()){
      if(value > 0){
        (this as any).balance += value
        console.log(`O empréstimo de R$${value} reais para a empresa ${this.getName()} foi realizado com sucesso!`)
      }else{
        console.log("Não foi possível realizar o empréstimo!")
        console.log("O valor do empréstimo tem que ser maior que 0.")
      }
    }
  }
}
