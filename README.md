First we understand the basic flow of the project

'src'-> Inside the src folder all the actual source code reagarding the project will reside, this will not include any kind of tests.(You might want to make separate tests folder).

Lets take a look inside the 'src' folder

- 'config' -> In this folder anything and everything regarding any configurations of setup of a library or module will be done. For example : setting up 'dotenv' so that we can use the environment variables anywhere 




#### Setup the project
-> Download this template from github and open this it in your favourite text editor.
-> In the root directory create a '.env' file and add the following env variables 
----
        PORT =<port number of your choide>
----
ex:
    PORT =3000
----

-> Inside the 'src/config' folder create a file named as 'config.json' and write the following code:
----
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
-------

-> If you are setting up your development environment, then write the username of your db and password of your db and in dialect mention whatever db you are using for ex:

-> If you are setting up test or prod environment, make sure you also replace the host url with the hosted db url.
