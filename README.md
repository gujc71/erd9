ERD9 is a database modeling tool that you use to easily and visually manage your database structure.
It defines tables (Entities), and easily visualize and manage relationships between tables (ERD - Entity Relationship Diagram).

ERD9 is currently only tested in the Chrome and Firefox web browsers on Windows.

[Getting started](https://gujc71.github.io/erd9/)
<br/><br/>

## Main features

ERD9 enables you to easily create and manage entities using the mouse, as shown in the following figure.

![manual1](https://gujc71.github.io/erd9/images/manual_1.gif)

It supports three popular DBMS used in development, such as Oracle, MS-SQL, and MariaDB, and relationships between entities can be configured as One to Many using only PK and AK.

![manual2](https://gujc71.github.io/erd9/images/manual_2.gif)

By default, the created ERD document is stored in the working browser's storage (IndexedDB), but you can also save it on your PC using the 'Export' feature (Be careful when using in public).
It doesn't store any data on the server, and it doesn't log in.
If you encounter any issues while using ERD9, please leave a detailed description in the issue section of the current site (GitHub).

<br/><br/>
## Additional features
- Simple import from DDL: Extract table information from DDL(Data Definition Language) to create an ERD. Only simple and structured SQL statements can be processed.
- Generate DDL: Generate DDL based on the created ERD information. You can copy and use this SQL statement.
- Table Description: Generate a table description based on the ERD information you created.

![manual3](https://gujc71.github.io/erd9/images/manual_3.gif)

<br/><br/>
## Near future
It seems like some aesthetic design enhancements and dynamic functionalities need to be added. I'm considering animation effects where entities shrink and disappear when deleted, or where related relationships are highlighted when an entity is selected.
- One to One Relationship
- ~~Find Entity~~
- ~~Zoom In / Out~~
- Printer output
- ~~Multiple Selection: Select multiple entities to move or delete.~~
- ~~Undo / Redo~~

<br/><br/>
## Far future
These are functions for saving the created ERD on the server or performing operations on the server, so they require a web server and login.
- Forward Engineering: Using the ERD information created in ERD9 to generate a database on the specified database server.
- Reverse Engineering: Extracting entity & relationship information from a specified database server to create an ERD.
- Save to Server: Available for multiple users. In the far far future, it will likely be possible to develop a feature where multiple users can edit together simultaneously.
- Save to GitHub (Manage Work History)
- ERD Sharing: A feature that allows individuals to share the ERD they have created with others and discuss this with others.
- Generate program language code: Generating source code for a program language like JavaScript(Node.js) or Python to perform CRUD (Create, Read, Update, Delete) operations on the selected entity(table).

## Shortcut keys
- Plus(+) : Zoom in
- Minus(-): Zoom out
- Del: Remove Entity or Relationship
- Ctrl + S : Save Document
- Ctrl + C : Copy Entity 
- Ctrl + P : Paste Entity 
- Ctrl + F : Find Entity 
- Ctrl + Z : Undo
- Ctrl + Y : Redo 
  
<br/><br/>
You are free to use it by accessing the current website without any limitations, 

but distributing and using it on other websites or similar platforms is not allowed. 

Please contact me if you need to.

