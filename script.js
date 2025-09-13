// 图书数据
const booksData = [
    {
        id: 1,
        title: "红楼梦",
        author: "曹雪芹",
        category: "文学",
        year: 1791,
        description: "中国古典四大名著之一，描写了贾、史、王、薛四大家族的兴衰史。"
    },
    {
        id: 2,
        title: "西游记",
        author: "吴承恩",
        category: "文学",
        year: 1592,
        description: "中国古典四大名著之一，讲述了孙悟空、猪八戒、沙僧保护唐僧西天取经的故事。"
    },
    {
        id: 3,
        title: "水浒传",
        author: "施耐庵",
        category: "文学",
        year: 1400,
        description: "中国古典四大名著之一，描写了108位好汉在梁山聚义的故事。"
    },
    {
        id: 4,
        title: "三国演义",
        author: "罗贯中",
        category: "文学",
        year: 1400,
        description: "中国古典四大名著之一，讲述了三国时期的历史故事。"
    },
    {
        id: 5,
        title: "史记",
        author: "司马迁",
        category: "历史",
        year: -91,
        description: "中国第一部纪传体通史，记录了从黄帝到汉武帝的历史。"
    },
    {
        id: 6,
        title: "资治通鉴",
        author: "司马光",
        category: "历史",
        year: 1084,
        description: "中国第一部编年体通史，记录了从战国到五代的历史。"
    },
    {
        id: 7,
        title: "大学",
        author: "曾参",
        category: "文学",
        year: -500,
        description: "四书之一，阐述修身治国平天下的道理。"
    },
    {
        id: 8,
        title: "中庸",
        author: "子思",
        category: "文学",
        year: -400,
        description: "四书之一，阐述中庸之道的哲学思想。"
    },
    {
        id: 9,
        title: "论语",
        author: "孔子",
        category: "文学",
        year: -500,
        description: "记录孔子及其弟子言行的儒家经典。"
    },
    {
        id: 10,
        title: "孟子",
        author: "孟子",
        category: "文学",
        year: -300,
        description: "四书之一，阐述孟子政治哲学思想。"
    },
    {
        id: 11,
        title: "诗经",
        author: "佚名",
        category: "文学",
        year: -1000,
        description: "中国最早的诗歌总集，收录西周至春秋时期的诗歌。"
    },
    {
        id: 12,
        title: "尚书",
        author: "佚名",
        category: "文学",
        year: -1000,
        description: "五经之一，记录上古历史文献。"
    },
    {
        id: 13,
        title: "周易",
        author: "伏羲",
        category: "文学",
        year: -3000,
        description: "五经之一，阐述阴阳八卦的哲学思想。"
    },
    {
        id: 14,
        title: "老子",
        author: "老子",
        category: "文学",
        year: -500,
        description: "道家经典，阐述道法自然的哲学思想。"
    },
    {
        id: 15,
        title: "庄子",
        author: "庄子",
        category: "文学",
        year: -300,
        description: "道家经典，阐述逍遥游的哲学思想。"
    },
    {
        id: 16,
        title: "孙子兵法",
        author: "孙武",
        category: "文学",
        year: -500,
        description: "古代军事理论经典，阐述战争策略。"
    },
    {
        id: 17,
        title: "楚辞",
        author: "屈原",
        category: "文学",
        year: -300,
        description: "中国浪漫主义诗歌的源头。"
    },
    {
        id: 18,
        title: "古文观止",
        author: "吴楚材",
        category: "文学",
        year: 1695,
        description: "古代散文选集，收录历代优秀散文。"
    },
    {
        id: 19,
        title: "唐诗三百首",
        author: "蘅塘退士",
        category: "文学",
        year: 1763,
        description: "唐诗选集，收录唐代优秀诗歌。"
    },
    {
        id: 20,
        title: "九命奇冤",
        author: "吴研人",
        category: "文学",
        year: 1906,
        description: "晚清谴责小说代表作。"
    },
    {
        id: 21,
        title: "恨海",
        author: "吴趼人",
        category: "文学",
        year: 1906,
        description: "晚清言情小说代表作。"
    },
    {
        id: 22,
        title: "二十年目睹之怪现状",
        author: "吴趼人",
        category: "文学",
        year: 1909,
        description: "晚清谴责小说代表作。"
    },
    {
        id: 23,
        title: "平山冷燕",
        author: "荻岸散人",
        category: "文学",
        year: 1658,
        description: "明末清初才子佳人小说。"
    },
    {
        id: 24,
        title: "三遂平妖传",
        author: "罗贯中",
        category: "文学",
        year: 1400,
        description: "明代神魔小说。"
    },
    {
        id: 25,
        title: "苔藓的秘密世界",
        author: "吴鹏程 施定基",
        category: "科技",
        year: 2024,
        description: "探索苔藓植物的神秘世界。"
    },
    {
        id: 26,
        title: "藏品有话说",
        author: "故宫博物院",
        category: "艺术",
        year: 2024,
        description: "走近100件红色藏品，追寻100个红色故事。"
    },
    {
        id: 27,
        title: "等待周末：双休日的起源与意义",
        author: "威托斯·黎辛",
        category: "教育",
        year: 2024,
        description: "探讨双休日制度的历史和意义。"
    },
    {
        id: 28,
        title: "世界的中国观",
        author: "忻剑飞",
        category: "历史",
        year: 2024,
        description: "近两千年来世界对中国的认识史纲。"
    },
    {
        id: 29,
        title: "人类史前史",
        author: "[法] 马克·",
        category: "历史",
        year: 2024,
        description: "探索人类史前文明的发展历程。"
    },
    {
        id: 30,
        title: "锦绣青衣",
        author: "佚名",
        category: "文学",
        year: 2024,
        description: "现代文学作品。"
    }
];

// 全局变量
let currentBooks = [...booksData];
let currentSearchTerm = '';
let currentCategory = '';
let currentSort = 'title';

// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const bookGrid = document.getElementById('bookGrid');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // 绑定事件监听器
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    searchInput.addEventListener('input', debounce(performSearch, 300));
    
    categoryFilter.addEventListener('change', function() {
        currentCategory = this.value;
        performSearch();
    });
    
    sortFilter.addEventListener('change', function() {
        currentSort = this.value;
        performSearch();
    });
    
    // 分类链接点击事件
    const categoryLinks = document.querySelectorAll('.category-link[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            categoryFilter.value = category;
            currentCategory = category;
            performSearch();
            // 滚动到搜索结果
            document.querySelector('.search-results').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // 经典链接点击事件
    const classicLinks = document.querySelectorAll('.classic-link[data-title]');
    classicLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.dataset.title;
            searchInput.value = title;
            currentSearchTerm = title.toLowerCase();
            performSearch();
            // 滚动到搜索结果
            document.querySelector('.search-results').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // 导航链接点击事件
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // 更新活动状态
            navItems.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 新闻标签页切换
    const newsTabs = document.querySelectorAll('.news-tab');
    newsTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            newsTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 初始显示所有图书
    displayBooks(currentBooks);
}

// 搜索功能
function performSearch() {
    currentSearchTerm = searchInput.value.trim().toLowerCase();
    
    // 过滤图书
    let filteredBooks = booksData.filter(book => {
        const matchesSearch = !currentSearchTerm || 
            book.title.toLowerCase().includes(currentSearchTerm) ||
            book.author.toLowerCase().includes(currentSearchTerm) ||
            book.description.toLowerCase().includes(currentSearchTerm);
        
        const matchesCategory = !currentCategory || book.category === currentCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    // 排序
    filteredBooks = sortBooks(filteredBooks, currentSort);
    
    currentBooks = filteredBooks;
    displayBooks(currentBooks);
    
    // 更新结果标题
    updateResultsTitle();
}

// 排序功能
function sortBooks(books, sortBy) {
    return books.sort((a, b) => {
        switch (sortBy) {
            case 'title':
                return a.title.localeCompare(b.title, 'zh-CN');
            case 'author':
                return a.author.localeCompare(b.author, 'zh-CN');
            case 'year':
                return b.year - a.year; // 降序排列
            default:
                return 0;
        }
    });
}

// 显示图书
function displayBooks(books) {
    if (books.length === 0) {
        bookGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = '0';
        return;
    }
    
    bookGrid.style.display = 'grid';
    noResults.style.display = 'none';
    resultsCount.textContent = books.length;
    
    bookGrid.innerHTML = books.map(book => createBookCard(book)).join('');
    
    // 添加动画效果
    const bookCards = bookGrid.querySelectorAll('.book-card');
    bookCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// 创建图书卡片
function createBookCard(book) {
    return `
        <div class="book-card" onclick="showBookDetails(${book.id})">
            <div class="book-cover">
                <i class="fas fa-book"></i>
            </div>
            <div class="book-info">
                <div class="book-category">${book.category}</div>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">作者：${book.author}</p>
                <p class="book-year">出版年份：${book.year}</p>
            </div>
        </div>
    `;
}

// 显示图书详情
function showBookDetails(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="book-detail">
                <div class="book-detail-cover">
                    <i class="fas fa-book"></i>
                </div>
                <div class="book-detail-info">
                    <h2>${book.title}</h2>
                    <p class="book-detail-author">作者：${book.author}</p>
                    <p class="book-detail-category">分类：${book.category}</p>
                    <p class="book-detail-year">出版年份：${book.year}</p>
                    <div class="book-detail-description">
                        <h4>内容简介</h4>
                        <p>${book.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: flex;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background-color: white;
            margin: auto;
            padding: 2rem;
            border-radius: 15px;
            width: 90%;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease;
        }
        
        .close {
            position: absolute;
            right: 1rem;
            top: 1rem;
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
            color: #999;
        }
        
        .close:hover {
            color: #333;
        }
        
        .book-detail {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
        }
        
        .book-detail-cover {
            width: 150px;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
            border-radius: 10px;
            flex-shrink: 0;
        }
        
        .book-detail-info h2 {
            margin-bottom: 1rem;
            color: #333;
        }
        
        .book-detail-info p {
            margin-bottom: 0.5rem;
            color: #666;
        }
        
        .book-detail-description {
            margin-top: 1rem;
        }
        
        .book-detail-description h4 {
            margin-bottom: 0.5rem;
            color: #333;
        }
        
        .book-detail-description p {
            line-height: 1.6;
            color: #666;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .book-detail {
                flex-direction: column;
                text-align: center;
            }
            
            .book-detail-cover {
                align-self: center;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // 关闭模态框事件
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // 点击背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
}

// 更新结果标题
function updateResultsTitle() {
    let title = '搜索结果';
    if (currentSearchTerm) {
        title = `"${currentSearchTerm}" 的搜索结果`;
    }
    if (currentCategory) {
        title += ` - ${currentCategory}类图书`;
    }
    resultsTitle.textContent = title;
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 滚动时更新导航状态
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// 添加一些交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 为搜索框添加焦点效果
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
    
    // 为图书卡片添加悬停效果
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.book-card')) {
            e.target.closest('.book-card').style.transform = 'translateY(-5px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.book-card')) {
            e.target.closest('.book-card').style.transform = 'translateY(0)';
        }
    });
});
