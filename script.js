// ==================== 테마 토글 기능 ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// 페이지 로드 시 저장된 테마 불러오기
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    updateThemeIcon();
}

// 테마 토글 이벤트 리스너
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    // 테마 상태를 localStorage에 저장
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    // 아이콘 업데이트
    updateThemeIcon();
});

// 테마 아이콘 업데이트 함수
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ==================== 모바일 메뉴 토글 ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// 햄버거 메뉴 클릭 이벤트
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ==================== 모바일 메뉴 토글 ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// 햄버거 메뉴 클릭
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
