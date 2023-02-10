# Weather App

Please clone the repository to your local computer to view the weather application using the following commands
```
git clone https://github.com/robgo/weatherapp.git .
```
After cloning the application, you will need to run npm install to install all dependencies such as vuejs etc.
```
npm install
```

After installing all dependencies, make sure you already have an Open Weather APP and Four Square api keys. 
If you don't have them, please create first an open weather app api key via this [link](https://home.openweathermap.org/users/sign_in) and for four square please use this [link](https://home.openweathermap.org/users/sign_in)

After obtaining the keys you will need to edit 2 files in order to add your generated keys. 
Import the codes to your favorite editor e.g **VS Code**

Once imported, navigate to the **src > services** folders and open both of the files

> fourSquareApiService.js

> openWeatherApiService.js

Both of these files contains the api keys for each of the respected third party services. 

Please look for the line with the code
```
const appid = 'YOUR_API_KEY_HERE'
```

Replace the **YOUR_API_KEY_HERE** with your generated api key from both of the third party providers. 

After adding your API KEYS, you are now ready to run the app in dev mode

```
npm run dev
```
