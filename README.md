A beginner nodeJS project to generate a QR code from the user given URL input. 

STEPS: 

1) npm init : to initialize 
2) install inquirer and qr-image npm packages 
3) refer to code from the npm documentation.
4) to use the command 'import x from ....', in package.json set "type: "module"
5) within .prompt set a message and name as "URL" ( name is accepted user input")
6) In the .then block,store user input in object answers under the URL key
7) now convert this to a qr image and save it to qr.png in your root folder.
8)  catch any error, if it's a typewriter error then set your error message, else set an alternate error message

   NOTE: There is a qr.png already from my first test of the code. Scanning that redirects you to google.com 
