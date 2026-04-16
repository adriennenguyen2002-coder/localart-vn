// --- Mock Data ---

const artPieces = [
    { id: 1, title: "Nắng Sài Gòn", artist: "Hải Nam", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800", likes: 124, comments: 18, avatar: "HN", category: "Hội họa" },
    { id: 2, title: "Gốm Mộc", artist: "Thảo Vy", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800", likes: 89, comments: 12, avatar: "TV", category: "Thủ công" },
    { id: 3, title: "Trừu tượng Việt", artist: "Linh Lan", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800", likes: 256, comments: 45, avatar: "LL", category: "Hội họa" },
    { id: 4, title: "Nhà cổ Hội An", artist: "Quốc Anh", image: "https://images.unsplash.com/photo-1523554888454-84137e72c3ce?auto=format&fit=crop&q=80&w=800", likes: 156, comments: 24, avatar: "QA", category: "Hội họa" },
    { id: 5, title: "Mùa lúa chín", artist: "Phương Nam", image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80&w=800", likes: 312, comments: 56, avatar: "PN", category: "Hội họa" },
    { id: 6, title: "Cyberpunk Hanoi", artist: "Đức Huy", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", likes: 420, comments: 89, avatar: "DH", category: "Kỹ thuật số" }
];

const artistHighlights = [
    { name: "Sơn Tùng M-TP Art", bio: "Hành trình kết hợp âm nhạc và mỹ thuật đương đại.", followers: "12k", image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=600" },
    { name: "Xèo Chu", bio: "Nghệ sĩ trẻ với phong cách ấn tượng đầy màu sắc.", followers: "45k", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600" },
    { name: "Tô Bửu Yên", bio: "Tái hiện di sản thông qua nét vẽ hiện đại.", followers: "8k", image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80&w=600" }
];

const artistStories = [
    {
        id: 1,
        title: "Vẽ ký ức tuổi thơ qua những con hẻm Sài Gòn",
        excerpt: "Mỗi bức tranh là một mảnh ghép của tuổi thơ tôi — tiếng rao hàng rong lúc chiều tà, ánh đèn vàng hắt qua song cửa...",
        author: "Minh Tú",
        tag: "Câu chuyện",
        readTime: "5 phút đọc",
        image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600",
        avatar: "https://i.pravatar.cc/150?u=minhtu"
    },
    {
        id: 2,
        title: "Từ bỏ công việc văn phòng để theo đuổi nghệ thuật gốm",
        excerpt: "Tôi đã dành 5 năm ngồi trong văn phòng máy lạnh trước khi nhận ra đôi tay mình sinh ra là để nhào nặn đất sét...",
        author: "Hải Đăng",
        tag: "Trải nghiệm",
        readTime: "7 phút đọc",
        image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=600",
        avatar: "https://i.pravatar.cc/150?u=haidang"
    },
    {
        id: 3,
        title: "Ý nghĩa đằng sau bộ tranh 'Mẹ Việt Nam'",
        excerpt: "Bộ tranh gồm 12 bức, mỗi bức là chân dung người mẹ Việt qua các thời kỳ — từ bà mẹ Trưng Trắc cưỡi voi...",
        author: "Lan Phương",
        tag: "Ý nghĩa tác phẩm",
        readTime: "6 phút đọc",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600",
        avatar: "https://i.pravatar.cc/150?u=lanphuong"
    }
];

const impactProjects = [
    { 
        id: 1,
        title: "Art for Gaza PS", 
        description: "Bán merchandise & prints gây quỹ hỗ trợ nhân đạo cho Palestine. Mỗi tác phẩm là một tiếng nói vì hòa bình.", 
        artists: 24, 
        raised: "45.2M đ", 
        category: "Đang gây quỹ", 
        color: "#b20a2c", 
        icon: "heart" 
    },
    { 
        id: 2,
        title: "Xanh Lại Rừng 🌿", 
        description: "Dự án nghệ thuật cộng đồng — vẽ tranh tường & bán prints gây quỹ trồng cây tại Tây Nguyên.", 
        artists: 18, 
        raised: "28.7M đ", 
        category: "Môi trường", 
        color: "#27ae60", 
        icon: "leaf" 
    },
    { 
        id: 3,
        title: "Sắc Màu Khuyết Tật ♿", 
        description: "Workshop nghệ thuật miễn phí cho trẻ em khuyết tật. Tìm kiếm nghệ sĩ tình nguyện đồng hành.", 
        artists: 12, 
        raised: "15.1M đ", 
        category: "Tình nguyện", 
        color: "#2980b9", 
        icon: "users" 
    },
    { 
        id: 4,
        title: "Di Sản Việt 🏛️", 
        description: "Số hoá và tái hiện nghệ thuật truyền thống Việt Nam qua digital art. Bảo tồn văn hoá bằng sáng tạo.", 
        artists: 31, 
        raised: "62.0M đ", 
        category: "Văn hoá", 
        color: "#e67e22", 
        icon: "landmark" 
    }
];

const events = [
    { id: 1, title: "Hội chợ Nghệ thuật 'Lộc Xuân'", date: "20 Tháng 4, 2026", location: "Bảo tàng Mỹ thuật TP.HCM", tag: "Art Fair", image: "https://images.unsplash.com/photo-1531050171652-3d5444ca2899?auto=format&fit=crop&q=80&w=600" },
    { id: 2, title: "Workshop Vẽ Màu Nước Indie", date: "25 Tháng 4, 2026", location: "Ohquao Concept Store", tag: "Workshop", image: "https://images.unsplash.com/photo-1460662136037-372996e386a7?auto=format&fit=crop&q=80&w=600" },
    { id: 3, title: "Triển lãm 'Nét Việt'", date: "02 Tháng 5, 2026", location: "Hanoi Creative City", tag: "Exhibition", image: "https://images.unsplash.com/photo-1491243950741-9b35542bb9d7?auto=format&fit=crop&q=80&w=600" }
];

const consignmentSpots = [
    { name: "Ohquao Concept Store", address: "58 Đặng Dung, Tân Định, Quận 1", city: "TP. Hồ Chí Minh" },
    { name: "Loco Art Market Space", address: "24 Lý Quốc Sư, Hoàn Kiếm", city: "Hà Nội" },
    { name: "Vibe Art Hub", address: "145 Nguyễn Chí Thanh", city: "Đà Nẵng" }
];

const projectBriefs = [
    { title: "Thiết kế bộ Postcard 'Ký ức Phố'", reward: "5.000.000 VNĐ", status: "Open", deadline: "10 ngày" },
    { title: "Minh họa bìa sách 'Hồn Việt'", reward: "8.000.000 VNĐ", status: "Open", deadline: "15 ngày" }
];

// --- Core Logic ---
let currentCategory = "Tất cả";
let searchQuery = "";

function initApp() {
    setupNavigation();
    renderAllViews();
    setupAuthButtons();
    setupSearchAndFilters();
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-view]');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.getAttribute('data-view');

            // View Transition Phase 1: Fade out current
            const activeView = document.querySelector('.view.active');
            if(activeView) activeView.style.opacity = '0';

            setTimeout(() => {
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                views.forEach(v => {
                    v.classList.remove('active');
                    v.style.height = '0'; // Hide others
                    if (v.id === `view-${targetView}`) {
                        v.classList.add('active');
                        v.style.height = 'auto';
                        setTimeout(() => v.style.opacity = '1', 50);
                    }
                });
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (window.lucide) window.lucide.createIcons();
            }, 300);
        });
    });
}

function setupAuthButtons() {
    const actionBtns = [
        { selector: '.btn-text', msg: 'Chức năng Đăng nhập sắp ra mắt!' },
        { selector: '.btn-gradient', msg: 'Chào mừng bạn đến với localart.vn!' },
        { selector: '.view-all', msg: 'Đang chuyển hướng đến danh sách đầy đủ...' }
    ];

    actionBtns.forEach(btn => {
        document.querySelectorAll(btn.selector).forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                showNotification(btn.msg, 'info');
            });
        });
    });

    // Delegated listeners for dynamic elements
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-join') || e.target.closest('.btn-outline')) {
            showNotification('Yêu cầu của bạn đã được gửi thành công!', 'success');
        }
        if (e.target.closest('.heart-btn')) {
            const btn = e.target.closest('.heart-btn');
            const isActive = btn.classList.toggle('active');
            showNotification(isActive ? 'Đã thêm vào mục yêu thích!' : 'Đã xóa khỏi mục yêu thích', 'info');
        }
    });
}

function setupSearchAndFilters() {
    // Search
    const searchInput = document.querySelector('.search-container input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderMainFeed();
        });
    }

    // Filters
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.textContent;
            renderMainFeed();
        });
    });
}

// --- Notification System ---
function showNotification(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? 'check-circle' : 'info';
    
    toast.innerHTML = `
        <i data-lucide="${icon}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// --- Renderers ---

function renderAllViews() {
    renderDiscovery();
    renderEvents();
    renderConsignment();
    renderCollaborate();
}

function renderDiscovery() {
    // Artist Stories
    const storiesContainer = document.getElementById('stories-container');
    if (storiesContainer) {
        storiesContainer.innerHTML = '';
        artistStories.forEach(story => {
            const card = document.createElement('div');
            card.className = 'story-card';
            card.innerHTML = `
                <div class="story-img-wrapper">
                    <img src="${story.image}" class="story-img" alt="${story.title}">
                    <span class="story-tag">${story.tag}</span>
                </div>
                <div class="story-card-content">
                    <h3>${story.title}</h3>
                    <p>${story.excerpt}</p>
                    <div class="story-author">
                        <div class="author-info">
                            <img src="${story.avatar}" class="author-avatar" alt="${story.author}">
                            <span class="author-name">${story.author}</span>
                        </div>
                        <span class="read-time"><i data-lucide="clock"></i> ${story.readTime}</span>
                    </div>
                </div>
            `;
            storiesContainer.appendChild(card);
        });
    }

    // Highlights
    const highlightContainer = document.getElementById('highlights-container');
    if (highlightContainer) {
        highlightContainer.innerHTML = '';
        artistHighlights.forEach(artist => {
            const card = document.createElement('div');
            card.className = 'highlight-card';
            card.innerHTML = `
                <img src="${artist.image}" class="highlight-img" alt="${artist.name}">
                <div class="highlight-info">
                    <h3>${artist.name}</h3>
                    <p>${artist.bio}</p>
                    <span class="followers-count"><i data-lucide="users"></i> ${artist.followers} người theo dõi</span>
                </div>
            `;
            highlightContainer.appendChild(card);
        });
    }

    renderMainFeed();
}

function renderMainFeed() {
    const grid = document.getElementById('masonry-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const heights = ['280px', '400px', '320px', '450px', '300px', '380px'];
    
    const filtered = artPieces.filter(piece => {
        const matchesCategory = currentCategory === "Tất cả" || piece.category === currentCategory;
        const matchesSearch = piece.title.toLowerCase().includes(searchQuery) || 
                              piece.artist.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-gray);">
            <i data-lucide="search-x" style="width: 48px; height: 48px; margin-bottom: 1rem;"></i>
            <p>Không tìm thấy tác phẩm nào phù hợp...</p>
        </div>`;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    filtered.forEach((piece, index) => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
            <div class="art-image-wrapper">
                <img src="${piece.image}" class="art-image" style="height: ${heights[index % heights.length]}; object-fit: cover;">
            </div>
            <div class="art-info">
                <div class="artist-profile">
                    <div class="artist-avatar">${piece.avatar}</div>
                    <span class="artist-name">${piece.artist}</span>
                </div>
                <div class="interactions">
                    <button class="interaction-btn heart-btn">
                        <i data-lucide="heart"></i>
                        <span class="interaction-count">${piece.likes}</span>
                    </button>
                    <span class="interaction-count">${piece.comments} bình luận</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    if (window.lucide) window.lucide.createIcons();
}

function renderEvents() {
    const impactContainer = document.getElementById('impact-container');
    if (impactContainer) {
        impactContainer.innerHTML = '';
        impactProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'impact-card';
            card.innerHTML = `
                <div class="impact-header">
                    <div class="impact-icon" style="color: ${project.color};"><i data-lucide="${project.icon}"></i></div>
                    <span class="impact-category" style="background: ${project.color}20; color: ${project.color};">${project.category}</span>
                </div>
                <div class="impact-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <div class="impact-footer">
                    <div class="stats-group">
                        <div class="stat-item"><i data-lucide="users"></i> ${project.artists} nghệ sĩ</div>
                        <div class="stat-item" style="color: #fffbd5;">${project.raised}</div>
                    </div>
                    <button class="btn-join">Tham gia <i data-lucide="arrow-right"></i></button>
                </div>
            `;
            impactContainer.appendChild(card);
        });
    }

    const container = document.getElementById('events-container');
    if (!container) return;
    container.innerHTML = '';
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <img src="${event.image}" class="event-img" alt="${event.title}">
            <div class="event-content">
                <span class="event-tag">${event.tag}</span>
                <h3>${event.title}</h3>
                <p><i data-lucide="clock"></i> ${event.date}</p>
                <p><i data-lucide="map-pin"></i> ${event.location}</p>
                <button class="btn-outline" style="margin-top: 1.5rem; width: 100%;">Quan tâm</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderConsignment() {
    const container = document.getElementById('consignment-container');
    if (!container) return;
    container.innerHTML = '';
    consignmentSpots.forEach((spot, idx) => {
        const card = document.createElement('div');
        card.className = `store-card ${idx === 0 ? 'active' : ''}`;
        card.innerHTML = `
            <h3>${spot.name}</h3>
            <p>${spot.address}</p>
            <span style="color: #fffbd5; font-size: 0.85rem;">${spot.city}</span>
        `;
        container.appendChild(card);
    });
}

function renderCollaborate() {
    const container = document.getElementById('briefs-container');
    if (!container) return;
    container.innerHTML = '';
    projectBriefs.forEach(brief => {
        const card = document.createElement('div');
        card.className = 'brief-card';
        card.innerHTML = `
            <span class="brief-status status-open">Đang mở</span>
            <h3>${brief.title}</h3>
            <p>Ngân sách: <b>${brief.reward}</b></p>
            <p>Thời hạn: ${brief.deadline}</p>
            <button class="btn-gradient" style="width: 100%;">Ứng tuyển ngay</button>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initApp);
