document.addEventListener("DOMContentLoaded", function () { // Đảm bảo tất cả các nhánh đều mở khi tải trang
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
document.addEventListener("DOMContentLoaded", function () {
    // Mặc định mở tất cả các nhánh khi tải trang
    document.querySelectorAll(".tree ul").forEach(ul => ul.classList.remove("hidden"));

    document.querySelectorAll(".tree .toggle").forEach(toggle => {
        toggle.addEventListener("click", function (e) {
            e.stopPropagation(); // Ngăn không cho sự kiện lan sang <a>

            let subTree = this.parentElement.querySelector("ul"); // Tìm <ul> con
            if (subTree) {
                if (!subTree.classList.contains("hidden")) {
                    subTree.classList.add("hidden");
                } else {
                    subTree.querySelectorAll("ul").forEach(ul => ul.classList.add("hidden"));
                    subTree.classList.remove("hidden");
                }
            }
        });
    });
});