document.addEventListener("DOMContentLoaded", function () {
    const premiumDepositTile = document.getElementById("premium-deposit");

    premiumDepositTile.addEventListener("click", () => {
        fetch("/trigger-premium-deposit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ action: "premium_deposit" }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message); // Show response from Python backend
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
