## DRUID - React Native SDK for AI Powered Customer KYC

This is an example react native [Expo](https://expo.dev) project created with [create-expo-app](https://www.npmjs.com/package/create-expo-app) to demonstrate the integration of [druid-ogold-rn-sdk](https://www.npmjs.com/package/druid-ogold-rn-sdk). However, this can also be easily used across application which does not use `expo`.

The [SDK](https://www.npmjs.com/package/druid-ogold-rn-sdk) is a fully managed kit that takes care of the customer onboarding process (KYC) to ensure regulatory compliance. The demo example does the following:

- Integrate the widget in the sample react native application.
- Interact with the widget, and follow the KYC Process.
- Return back to the main application.
- View the KYC status.

For the comprehensive list of status, page details and the entire workflow journey, please get in touch with the [team](https://thenovaweb.com/contact/) or write to us at [info@thenovaweb.com](mailto:info@thenovaweb.com)

## Prerequisite

For you to be able to clone and run this example demo, client secrets are required. Please make sure that you have required secrets to run the demo application.

## Get started

### Sample Run

1. Clone the repo in your local machine

   ```bash
   git clone https://github.com/thenovaweb/druid-ogold-sample-app.git
   ```

2. Navigate to the directory

   ```bash
   cd druid-ogold-sample-app
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the app and you're ready to go!

   ```bash
    npx expo start
   ```

This will start the application. Now, you can choose between the various device options to run it on. After the server is started, the following screen will show up on the device.

<img src="assets/images/index.png" alt="Application Home" width="250"/>

You can begin by clicking on the `Get Started` button on the KYC Widget. Based on the status of the application, the user will be routed to the relevant screen.

### Integrating with the current workflow

#### Installation

```bash
npm install -i druid-ogold-rn-sdk
```

Once the package is installed, we can import the main widget by adding the following line of code.

#### Usage

```js
import Widget from "druid-ogold-rn-sdk";
```

#### Status Widget

And now to activate the widget, modify and add this component - [components/StatusWidget.tsx](components/StatusWidget.tsx) to any part of the screen.

The componenent performs an API call and fetches the status of the application. Based on the responses, the functionaltity can be extended to meet the design structure of the application as required.

#### Workflow Screen

We also have to create an empty **screen** for the whole workflow to function. This implementation can be seen in [`app/onboard.tsx`](app/onboard.tsx) file.

> This implementation is also being upgraded to work as a modal which can be inserted in any small portion of the screen, thereby allowing much granular control on the UI.

```js
...
<View>
   <Widget
      phone: ""
      email: ""
      clientUuid: "xxxx-xxx-xx-x"
      clientSecret: "xxxx-xxx-xx-x"
      onSuccess: "navigateToParent"
   />
</View>
...
```

#### Props

- `phone`: Phone Number of the user
- `email`: Email of the user
- `clientUuid`: The unique identification number provided to the client.
- `clientSecret`: The secret provided to the client.
- `onSuccess`: A callback function to route back to the main parent page.

The onSuccess function can be as simple as this:

```js
const redirectToHome = () => {
  router.push("/");
};
```

**Note**: `client secrets` are mandatory without which the widget won't work. Similarly any one field among `phone` or `email` is also required.

### Widget Details

We have created a component that acts as the main entrypoint - [`components/NewWidget.tsx`](components/NewWidget.tsx). This component does the following things:

- Fetches the customer status, and accordingly updates the status, button route and description of the main widget.
- Styling based on the status with `green`, `amber` and `red` colors to indicate accepted, pending and rejected/failure statuses.

The following is a sample widget with the necessary information. For the comprehensive list of all the statuses, please reach out to the team.

<img src="assets/images/widget.png" alt="Application Home" width="300"/>

In the widget:

- `Not Started` - indicates the status of the application.
- `Get Started` - indicates the action that a user can perform, based on the current application state. This action changes with respect to the application status.
- `Description` - _KYC is not..._ indicates the description for the status allowing informed call to action for the user.

Once the process is complete, the user will automatically be routed to the main application widget page. For further details of the workflow, please refer to main documentation page.

> Please connect with the [team](mailto:info@thenovaweb.com) for obtaining the client secrets.
