# Gobarber Backend

## Extensions

### yarn add:

  * express
  * sucrase (dev)
  * nodemon (dev)

### express

  Creates the server inside the `app.js` file and listen to a port inside the `server.js` file

### sucrase 

  Adds latest code style features to node. To use it, create a `nodemon.json` file inside the root folder
  with the following object:

    {
      "execMap": {
        "js": "sucrase-node"
      }
    }
  
  his will make syntax such as `import` and `export default` understandable by node (like babel)

### nodemon

  Will watch your files and detect changes, automatically restarting your local server