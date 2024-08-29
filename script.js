document.addEventListener('DOMContentLoaded', function() {
    // 在页面加载时，从localStorage中获取并显示保存的网站
    loadWebsites();

    document.getElementById('addWebsiteForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取用户输入的值
        const siteName = document.getElementById('siteName').value;
        const siteUrl = document.getElementById('siteUrl').value;
        const siteDescription = document.getElementById('siteDescription').value;

        // 创建新的网站对象
        const website = {
            name: siteName,
            url: siteUrl,
            description: siteDescription
        };

        // 保存网站数据到localStorage
        saveWebsite(website);

        // 在页面中显示新添加的卡片
        addCard(website);
        
        // 清空表单
        document.getElementById('addWebsiteForm').reset();
    });
});

function saveWebsite(website) {
    // 获取当前存储的所有网站数据
    let websites = JSON.parse(localStorage.getItem('websites')) || [];
    
    // 添加新的网站数据
    websites.push(website);
    
    // 将更新后的数据保存回localStorage
    localStorage.setItem('websites', JSON.stringify(websites));
}

function loadWebsites() {
    // 从localStorage中获取保存的所有网站数据
    let websites = JSON.parse(localStorage.getItem('websites')) || [];
    
    // 循环遍历每个网站数据并在页面上显示
    websites.forEach(function(website, index) {
        addCard(website, index);
    });
}

function addCard(website, index) {
    // 创建新的卡片元素
    const card = document.createElement('div');
    card.className = 'card';
    
    const h2 = document.createElement('h2');
    h2.textContent = website.name;
    
    const p = document.createElement('p');
    p.textContent = website.description;
    
    const link = document.createElement('a');
    link.href = website.url;
    link.target = '_blank'; // 在新标签页打开链接
    link.textContent = "Visit";
    link.className = 'card-link';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        deleteWebsite(index);
    });

    // 将元素添加到卡片中
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(link);
    card.appendChild(deleteButton);
    
    // 将卡片添加到页面的网格中
    document.getElementById('websiteGrid').appendChild(card);
}

function deleteWebsite(index) {
    // 从localStorage中获取网站数据
    let websites = JSON.parse(localStorage.getItem('websites')) || [];
    
    // 移除特定索引的网站
    websites.splice(index, 1);
    
    // 更新后的数据保存回localStorage
    localStorage.setItem('websites', JSON.stringify(websites));
    
    // 重新加载页面上的卡片
    document.getElementById('websiteGrid').innerHTML = '';
    loadWebsites();
}
