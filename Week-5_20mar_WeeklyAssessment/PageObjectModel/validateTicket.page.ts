import { expect } from "@playwright/test"

class validateTicket{
    page:any
    openquery:any
    message:any

    constructor(page){
        this.page=page
        this.openquery=page.locator('span.label.label-important').first()
        this.message=page.locator('div.info').first();
    }


    async navi(url:string){
        await this.page.goto(url)
    }

    async validate(){
      await  this.openquery.click();
        await expect(this.message).toBeVisible()

        
        
        
    }
}

export default validateTicket 