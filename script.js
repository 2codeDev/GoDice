document.addEventListener("DOMContentLoaded", () => {
    const claimButtons = document.querySelectorAll(".claim-button");

    claimButtons.forEach(button => {
        button.addEventListener("click", () => {
            const url = button.dataset.url;

            // Open the URL in a new tab
            window.open(url, "_blank");

            // Update button state to "Claimed"
            button.textContent = "Claimed";
            button.classList.add("claimed");
        });
    });
});
