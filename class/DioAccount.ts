export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      if (amount > 0){
        this.balance += amount
        console.log(`Você depositou R$${amount}`);
        console.log(`Você possui R$${this.balance} na sua conta.`)
      }else{
        console.log('O valor do depósito de ser maior que 0.')
      }
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if(this.balance >= value){
        this.balance -= value
        console.log(`Você fez o saque de R$${value}`)
        console.log(`Você possui R$${this.balance} na sua conta.`)

      }else{
        console.log('Voce não possui esse valor para saque.')
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
