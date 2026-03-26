// 禁用 F12 + 弹窗警告
document.onkeydown = function (e) {
    // 禁止 F12
    if (e.key === 'F12') {
        alert("⚠️ 警告：禁止使用开发者工具！");
        return false;
    }
    
    // 禁止 Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        alert("⚠️ 警告：禁止使用开发者工具！");
        return false;
    }
    
    // 禁止 Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        alert("⚠️ 警告：禁止使用开发者工具！");
        return false;
    }
    
    // 禁止 Ctrl+U 查看源代码
    if (e.ctrlKey && e.key === 'u') {
        alert("⚠️ 警告：禁止查看网页源代码！");
        return false;
    }
};

// 禁止鼠标右键 + 弹窗警告
document.oncontextmenu = function () {
    alert("⚠️ 警告：禁止右键菜单！");
    return false;
};
