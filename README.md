<!-- ABOUT THE PROJECT -->
# RealtyRise

## About The Project

[![Product Name Screen Shot][product-screenshot]](chrome_cFQzshzzoN.png)


This project is an assesment project for GENIOBITS. \
RealtyRise is a real estate web Application to find property listings.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* React
* FireBase & fireStore
* Tailwind CSS
* DaisyUI
* Context API


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Instructions on how to run this project locally

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_to install this project to your local machine._

1. Setup firebase and firestore [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter the initialization code in `firebase.config.js`
```js
   // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "ID",
  appId: "APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Demo

video demo

## Features
* User sign in, signup and logout with proper authentication
* List of property listings with details
* Ability to search for listings using name or Location
* Details page for each property
* Ability to contact the seller of the property
* User dashBoard to view saved listings 
* Context API for state management



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Deployment
_to deploy this project to vercel:_

* Push the repo to github
* 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

 
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Abhishek Sonawane - [@realbrownsaiyan](https://twitter.com/realbrownsaiyan) - abhisheksonwane57@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
