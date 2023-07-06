# Car NextJS 13

A car showcase application using Next.js 13

### Setup

Create a Next.js 13 project using,

```bash
npx create-next-app@latest
```
- What is your project named? **_carhub_**
- Would you like to add TypeScript with this project? **_Yes_**
- Would you like to use ESLint with this project? **_No_**
- Would you like to use Tailwind CSS with this project? **_Yes_**
- Would you like to use the `src/ directory` with this project? **_No_**
- What import alias would you like configured? **_@\*_**

### Packages

We're using the [headlessui](https://headlessui.com/) to create combobox and dropdowns. To download the package, 
```bash
npm install @headlessui/react
```

### APIs

We're using two APIs:
1. Rapid API
   - Doc Link - [Cars API by API Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)
3. Imagin Studio
   - Sign up Link - [Imagin SignUp](https://www.imagin.studio/subscriptions/pricing)
   - Doc Link - [Imagin Docs](https://docs.imagin.studio/)
     From the Menu, you can select ["CDN Data Points"](https://docs.imagin.studio/cdnDatapoints) to see all the params the API accepts.
   
**⚠️ Issue with Imagin - It doesn't seem to allow creating an account using normal email address. For it to work, it has to be a business account. I tried [TempMail](https://temp-mail.org/en/) and it works. But no normal gmail accounts are working.**   

### Things to know

To enable the functionality of dynamic images, we need to inform Next.js explicitly that we anticipate receiving dynamic image URLs from a particular source. This can be achieved by adjusting the configuration of Next.js as follows:

```javascript
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
};
```
