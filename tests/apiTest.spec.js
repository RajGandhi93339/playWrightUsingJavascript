const { test, expect } = require("@playwright/test")

test('getApi', async ({ request }) => {


    // Pass Devid and token as query parameters in the URL
    const response = await request.get("https://crmapi.testsjit.in/api/V1/Ticket/ticketDetails?ticketId=936&userId=1", {
        params: {
            ticketId: '936',
            userId: '1'
        },
        headers: {
            devId: '82DwAGMIRp8BfZEeGaP/IIuZiTO6EhKwPDzuyEfagH4=',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImRlcGFydG1lbnROYW1lIjoiQURNSU4iLCJwbGF0Zm9ybSI6IndlYiIsImlhdCI6MTczNzM2NzMyMiwiZXhwIjoxNzM3OTcyMTIyfQ.J5pcSpH79jldLAokzpxzArOLOVFDYPIgkgwswwbvLPI'
        }
    });
    const getResponseData = await response.json()
    console.log(getResponseData)
    expect(response.ok()).toBeTruthy();

    // Optional: Add more assertions to validate specific fields in the response
    expect(getResponseData.ticketId).toBe(936);
    expect(getResponseData.userId).toBe(1);
    expect(getResponseData).toHaveProperty('ticketDetails');
    
    if (!response.ok()) {
        console.error('API request failed with status:', response.status());
    }
    //await apiContext.dispose();

})

test('PostApi', async ({ request }) => {

    const response = await request.post("https://crmapi.testsjit.in/api/V1/Ticket/ticketDetailsUpdate", {
        data: {
            "userId": "1",
            "ticketId": 936,
            "formId": 624,
            "estimatedTime": "",
            "status": "Pending",
            "remark": "this is remarks for test by raaj ",
            "platform": "CRM",
            "taskTypeId": 1,
            "ticketHeader": "TEST GROUP USER WISE TICKET DASHBOARD - API TEST",
            "description": "While clicking on party name from jangad view customer profile is not loading. There is no data on landing page (pop-up).",
            "priority": "Low",
            "dueDate": null,
            "ticketUserId": 1,
            "tags": "[{\"display\":\"SJCRM\",\"value\":\"SJCRM\"},{\"display\":\"SJSINGLE\",\"value\":\"SJSINGLE\"},{\"display\":\"MFG\",\"value\":\"MFG\"}]",
            "version": "1.00.2",
            "coOrdinator": "test",
            "devTicketId": 10050
        },
        headers: {
            "Accept": "application/json, text/plain, */*"
        }
    })
    const postResponseData = await response.json()
    console.log(postResponseData)
    expect.soft(response.status()).toBe(200);

    //await apiContext.dispose();

})