document.addEventListener("DOMContentLoaded", function () {
    let texts = document.querySelectorAll(".ban_chan"); // Lấy tất cả phần tử có class movingText

    texts.forEach((text, index) => {
        let position = 0;
        let direction = 1;
        const speed = 5;
        
        function moveText() {
            let maxWidth = window.innerWidth - text.offsetWidth; // Tính toán lại khi resize

            position += speed * direction;
            if (position >= maxWidth || position <= 0) {
                direction *= -1; // Đảo chiều khi chạm mép
            }
            text.style.left = position + "px";
        }

        setInterval(moveText, 50);
    });
});