## Bug 1: Subscription can be renewed with $0.00 Hostinger balance

### Steps to reproduce:
1. Go to Billing > Subscriptions
2. Find a subscription that has not been renewed yet
3. Click "Renew now" button
4. Click "Complete payment with Hostinger balance" button

### Expected result:
Error message is shown that the user does not have a sufficient balance and the subscription cannot be renewed.

### Actual result:
Payment renewal is shown as successful even though payment method is not added and balance is insufficient.

## Bug 2: Blank page is shown when the user is trying to upgrade Business Web Hosting

### Test data:
Business Web Hosting - testinghostinger.lt, ID: 169xnxUCHG3ER2M7I

### Steps to reproduce:
1. Go to Billing > Subscriptions
2. Find a Business Web Hosting subscription in the list
3. Click the arrow button next to subscription's renewal price
4. In subscription details page, click "Upgrade" button

### Expected result:
An error message is shown that it is not possible to upgrade this subscription.

### Actual result:
A blank page is shown with no error message (see attached image `bug2.png`). 422 response is shown in Network tab:
```
{
    "status": 422,
    "success": false,
    "data": null,
    "error": {
        "code": 422,
        "message": "Username not provided"
    },
    "execution_time": null,
    "execution_time_total": 0.06
}
```

