document.addEventListener("DOMContentLoaded", function () {
    let text = document.querySelector(".ban_chan");

    text.addEventListener("click", function () {
        text.style.animation = "none"; // Tắt animation
        text.style.left = "0"; // Quay về vị trí ban đầu
        // Sau 2 giây, animation chạy lại
        setTimeout(() => {
            text.style.animation = "moveText 4s linear infinite alternate";
        }, 2500); // 2500ms = 2.5 giây
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nhan_hien .trigger").forEach(trigger => {
        trigger.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });
});