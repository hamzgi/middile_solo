// Dark Mode Persistence using localStorage
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  
  // 저장된 모드 불러오기
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    darkModeToggle.checked = true;
  }
  
  // 모드 변경 시 localStorage에 저장
  darkModeToggle.addEventListener('change', function() {
    localStorage.setItem('darkMode', this.checked);
  });
});
