function showNotification({ top = 0, right = 0, html }) {
  let notification = document.createElement("div");
  notification.className = "notification";
  notification.style.top = top + "px";
  notification.style.right = right + "px";
  notification.innerHTML = html;
  document.body.append(notification);
}
showNotification({
  top: 50,
  right: 30,
  html: "Have Fun",
});
