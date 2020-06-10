var socket = io();
var messages = document.getElementById("messages1");

(function() {
  $("form1").submit(function(e) {
    let li = document.createElement("li");
    e.preventDefault(); // prevents page reloading
    socket.emit("chat message", $("#message1").val());

    messages.appendChild(li).append($("#message1").val());
    let span = document.createElement("span");
    messages.appendChild(span).append("by " + "Anonymous" + ": " + "just now");

    $("#message1").val("");
    
    return false;
  });

  socket.on("received", data => {
    let li = document.getElementById("#li");
    let span = document.createElement("#span");
    var messages = document.getElementById("messages1");
    messages.appendChild(li).append(data.message);
    messages.appendChild(span).append("by " + "anonymous" + ": " + "just now");
    console.log("Hello bingo!");
  });
})();


// fetching initial chat messages from the database
// (function() {
//   fetch("/chats")
//     .then(data => {
//       return data.json();
//     })
//     .then(json => {
//       json.map(data => {
//         let li = document.createElement("li");
//         let span = document.createElement("span");
//         messages.appendChild(li).append(data.message);
//         // messages
//         //   .appendChild(span)
//         //   .append("by " + data.sender + ": " + formatTimeAgo(data.createdAt));
//       });
//     });
// })();

//is typing...

// let messageInput = document.getElementById("message");
// let typing = document.getElementById("typing");

// //isTyping event
// messageInput.addEventListener("keypress", () => {
//   socket.emit("typing", { user: "Someone", message: "is typing..." });
// });

// socket.on("notifyTyping", data => {
//   typing.innerText = data.user + " " + data.message;
//   console.log(data.user + data.message);
// });

// //stop typing
// messageInput.addEventListener("keyup", () => {
//   socket.emit("stopTyping", "");
// });

// socket.on("notifyStopTyping", () => {
//   typing.innerText = "";
// });