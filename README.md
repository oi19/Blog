# Blog Project:
  
  - This App is a blog-like app where you can write blogs(posts) , edit , delete , show details of each blog ,In addition to the flexibility  for future improvements       and new features
  - Adding the abitlity toggle between screens using navigation stucture (StackNavigator)
  - using context for state management 
  
  
  # Project Structure 
  
  ## App.js 
   -this file creates the app structure by creating app Container and the Navigation structure as well as the state managment whether context(Providers) or redux 
  
  
  ## src folder 
   - api folder
       - axios.js 
          - handles the api requests as well as handling the authentication process 
            
   
   - components folder
      - Form.js 
     
   
   - context folder 
      - CreateDataContext.js (responsible for creating Context & blue print for using Context)
      - BlogContext.js(handles the blogs data => posting and fetching requests
   
   - hooks
      - costumeHook1.js
      
    
   - screens 
     - IndexScreen.js
     - AddScreen.js
     - EditScreen.js
     - ShowScreen.js
    
  ## server 
   - jsonserver ( download & install ngrok from here https://ngrok.com/download )
 

# Setup
   ```shell script
- git clone https://github.com/oi19/react-native/tree/blog
- cd Blog
```
Run the following command to run your server in different cmds  inside the jsonserver folder .

```shell script
- cd jsonserver
- npm run dev
```
and
```shell script
- cd jsonserver
- npm run tunnel 
```

or
```shell script
- cd jsonserver
- ngrok http 3000
  ```

Run this following commands to run the app  inside Blog folder.

```shell script
- npm start 
or
- expo start 
```
