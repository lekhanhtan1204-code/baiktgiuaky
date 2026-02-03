document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Văn A đã load xong!');
    alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');

    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(item => {
        // Hiệu ứng hover
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
            item.style.backgroundColor = '#f0f8ff';
            item.style.transition = 'all 0.3s ease';
            item.style.cursor = 'pointer';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.backgroundColor = 'transparent';
        });

        // Hiệu ứng click
        item.addEventListener('click', () => {
            item.style.backgroundColor = '#cce5ff';
            setTimeout(() => {
                item.style.backgroundColor = '#f0f8ff';
            }, 200);
        });
    });
});
