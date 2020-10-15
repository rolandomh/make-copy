# 301d66 : RoMH
## Read: 06 - Node, Express, and APIs


### * [Node,Express,API](https://www.sitepoint.com/an-introduction-to-node-js/)
####What Is Node and When Should I Use It?
Node.js is an event-based,  non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library.
lets break that down,
  Event-driven programming is currently the default paradigm in software engineering. As the name suggests, it uses events as the basis for developing the software. 
  These events can be something the users are doing — clicking on a specific button, picking an option from drop-down, typing text into a field, giving voice commands, 
  or uploading a video — or system-generated events such as a program loading. The central idea of event-driven programming is that the application is designed to react.
  Blocking
Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. 
This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring. 
In Node.js, JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, 
such as I/O, isn't typically referred to as blocking. Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations. 
Native modules may also have blocking methods. All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, 
and accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync.
when comparring code; Blocking methods execute synchronously and non-blocking methods execute asynchronously.
Node comes bundled with a package manager called npm.
