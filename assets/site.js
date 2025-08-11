(function(){
  // Smooth anchor for TOC
  document.addEventListener('click', function(e){
    if(e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')){
      const id = e.target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth'});
      }
    }
  });

  // Simple client-side search redirect by query param
  var input = document.getElementById('search-input');
  if(input){
    input.addEventListener('keydown', function(e){
      if(e.key === 'Enter'){
        var q = encodeURIComponent(input.value.trim());
        if(q){ window.location.href = 'search.html?q=' + q; }
      }
    });
  }

  // theme toggle (light/dark)
  var btn = document.getElementById('theme-toggle');
  var current = localStorage.getItem('theme') || 'light';
  if(current === 'dark') document.documentElement.classList.add('dark');
  if(btn){
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', function(){
      document.documentElement.classList.toggle('dark');
      var dark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      btn.textContent = dark ? '☾' : '☀';
    });
    btn.textContent = document.documentElement.classList.contains('dark') ? '☾' : '☀';
  }

  // 子分类展开/收起功能
  document.addEventListener('DOMContentLoaded', function() {
    var categoryItems = document.querySelectorAll('.category-item.has-subcategories');
    
    categoryItems.forEach(function(item) {
      var categoryMain = item.querySelector('.category-main');
      var subcategoryList = item.querySelector('.subcategory-list');
      
      // 点击展开/收起
      categoryMain.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止链接跳转
        item.classList.toggle('expanded');
        subcategoryList.classList.toggle('expanded');
      });
      
      // 为没有子分类的项目添加点击事件，允许正常跳转
      var categoryItemsWithoutSub = document.querySelectorAll('.category-item:not(.has-subcategories)');
      categoryItemsWithoutSub.forEach(function(item) {
        var categoryMain = item.querySelector('.category-main');
        // 没有子分类的项目可以正常跳转，不需要阻止默认行为
      });
      
      // 悬停展开（可选，取消注释即可启用）
      /*
      item.addEventListener('mouseenter', function() {
        if (!item.classList.contains('expanded')) {
          item.classList.add('expanded');
          subcategoryList.classList.add('expanded');
        }
      });
      
      item.addEventListener('mouseleave', function() {
        if (item.classList.contains('expanded')) {
          item.classList.remove('expanded');
          subcategoryList.classList.remove('expanded');
        }
      });
      */
    });
  });
})();


