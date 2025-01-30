document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#f4ff33", "#ff33f4"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
