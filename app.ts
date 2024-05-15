import { CompanyAccount} from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const Maria: PeopleAccount = new PeopleAccount(1, 'Igor', 200)

Maria.deposit(200)
Maria.getBalance()
Maria.withdraw(120)


const Dio: CompanyAccount = new CompanyAccount('Dio', 123)

Dio.getLoan(1000)