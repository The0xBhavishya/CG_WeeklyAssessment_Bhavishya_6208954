import ticketdetails from "../utility/ticket.json"
class createTicket{
    page:any
    subject:any
    tasktype:any
    priority:any
    description:any
    send:any

    constructor(page){
        this.page=page;
        this.subject=page.locator('#subject');
        this.tasktype=page.locator('[name="tasktype"]')
        this.priority=page.locator('[name="priority"]')
        this.description=page.locator('//textarea[@name="description"]')
       this.send=page.locator('[value="Send"]')
    }

    async navi(url:string){
        await this.page.goto(url);
    }

    async create(){
       await this.subject.fill(ticketdetails.subject)
       await this.tasktype.selectOption(ticketdetails.tasktype)
       await this.priority.selectOption(ticketdetails.prioritytype)
       await this.description.fill(ticketdetails.description)
        await this.send.click()

    }
}

export default createTicket