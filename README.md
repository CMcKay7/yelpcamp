# YelpCamp

YelpCamp is a full stack web application based loosely around the standard Yelp application. The premise of the application is to give those with an interest in the outdoors/camping a platform to search, share, and review their go-to camping spots. YelpCamp allows for individuals to sign up, providing access to the full functionality of the app to registered users. These authenticated users are then able to share, edit, or delete campgrounds of their own, as well as leave reviews on others. Individuals that are not registered can still use the app and view any campgrounds and reviews left by other users but cannot add any reviews or campgrounds of their own. Authorization is also implemented to ensure that only the creator of a given campground can edit or delete their contribution.

On the front-end, YelpCamp makes use of frameworks and technologies including JavaScript, EJS, and Bootstrap to create modern, responsive page layouts and simple, cohesive designs. EJS is used primary to allow sharing of a layout template that each page layout can make use of, trimming the length of code and making the code more easily readable.

Express and MongoDB, along with other technologies, carry the load on the back-end side of YelpCamp, working to establish a server and save data. The passwords of registered users are hashed, ensuring that a user's personal information is securely stored and managed.

YelpCamp has been deployed and is available at https://yelpcamp-gbxn.onrender.com/
