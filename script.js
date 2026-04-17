// --- Data Management (LocalStorage) ---

const STORAGE_KEYS = {
    ART_PIECES: 'localart_pieces',
    IMPACT_PROJECTS: 'localart_impact',
    USER_LIKES: 'localart_user_likes',
    AUTH_STATE: 'localart_auth',
    USER_DATA: 'localart_user_profile'
};

// Initial Data: Marketplace Products
const INITIAL_ART_PIECES = [
    { id: 1, title: "Linh vật Nghê Việt - Digital Art", artist: "Hải Nam", image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800", likes: 124, comments: 18, avatar: "HN", category: "Tranh Digital" },
    { id: 2, title: "Ly Gốm 'Mùa Sen' - Vẽ tay", artist: "Thảo Vy", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800", likes: 89, comments: 12, avatar: "TV", category: "Đồ gia dụng vẽ tay" },
    { id: 3, title: "Móc khóa Cung Đình - Enamel Pin", artist: "Linh Lan", image: "https://images.unsplash.com/photo-1626014303757-636611689443?auto=format&fit=crop&q=80&w=800", likes: 256, comments: 45, avatar: "LL", category: "Móc khóa & Phụ kiện" },
    { id: 4, title: "Túi Tote Thêu Tay 'Phố Cổ'", artist: "Quốc Anh", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", likes: 156, comments: 24, avatar: "QA", category: "Thủ công mỹ nghệ" },
    { id: 5, title: "Bộ Postcard 'Sài Gòn 1990s'", artist: "Phương Nam", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800", likes: 312, comments: 56, avatar: "PN", category: "Móc khóa & Phụ kiện" },
    { id: 6, title: "Cyberpunk Hanoi - Limited Print", artist: "Đức Huy", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", likes: 420, comments: 89, avatar: "DH", category: "Tranh Digital" },
    { id: 7, title: "Sổ tay Giấy Dó 'Họa Sắc'", artist: "Zó Project", image: "https://images.unsplash.com/photo-1589149053231-4ed501d1d991?auto=format&fit=crop&q=80&w=800", likes: 215, comments: 34, avatar: "ZP", category: "Thủ công mỹ nghệ" },
    { id: 8, title: "Bình hoa Sơn Mài 'Đông Hồ'", artist: "Minh Anh", image: "https://images.unsplash.com/photo-1612115539052-e932aa199468?auto=format&fit=crop&q=80&w=800", likes: 178, comments: 21, avatar: "MA", category: "Thủ công mỹ nghệ" }
];

const INITIAL_IMPACT_PROJECTS = [
    { id: 1, title: "Art for Gaza PS", description: "Bán merchandise & prints gây quỹ hỗ trợ nhân đạo cho Palestine.", artists: 24, raised: "45.2M đ", category: "Đang gây quỹ", color: "#b20a2c", icon: "heart", joined: false },
    { id: 2, title: "Xanh Lại Rừng 🌿", description: "Dự án nghệ thuật cộng đồng — vẽ tranh tường & bán prints gây quỹ trồng cây.", artists: 18, raised: "28.7M đ", category: "Môi trường", color: "#27ae60", icon: "leaf", joined: false },
    { id: 3, title: "Sắc Màu Khuyết Tật ♿", description: "Workshop nghệ thuật miễn phí cho trẻ em khuyết tật.", artists: 12, raised: "15.1M đ", category: "Tình nguyện", color: "#2980b9", icon: "users", joined: false }
];

const artistStories = [
    { id: 1, title: "Vẽ ký ức tuổi thơ qua những con hẻm Sài Gòn", excerpt: "Mỗi bức tranh là một mảnh ghép của tuổi thơ tôi...", author: "Minh Tú", tag: "Câu chuyện", readTime: "5 phút đọc", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600", avatar: "https://i.pravatar.cc/150?u=minhtu" },
    { id: 2, title: "Từ bỏ công việc văn phòng để theo đuổi nghệ thuật gốm", excerpt: "Tôi đã dành 5 năm ngồi trong văn phòng máy lạnh...", author: "Hải Đăng", tag: "Trải nghiệm", readTime: "7 phút đọc", image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=600", avatar: "https://i.pravatar.cc/150?u=haidang" },
    { id: 3, title: "Ý nghĩa đằng sau bộ tranh 'Mẹ Việt Nam'", excerpt: "Bộ tranh gồm 12 bức, mỗi bức là chân dung người mẹ Việt...", author: "Lan Phương", tag: "Ý nghĩa tác phẩm", readTime: "6 phút đọc", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600", avatar: "https://i.pravatar.cc/150?u=lanphuong" }
];

const consignmentSpots = [
    { name: "The Craft House (Saigon)", address: "Dong Khoi Street, District 1", city: "TP. Hồ Chí Minh" },
    { name: "Collective Memory (Hanoi)", address: "Nha Chung Street, Old Quarter", city: "Hà Nội" },
    { name: "Zó Project Studio", address: "Yen Hoa, Tay Ho", city: "Hà Nội" },
    { name: "Vụn Art Spaces", address: "Vạn Phúc Silk Village", city: "Hà Nội" },
    { name: "Authentique Home", address: "Le Thanh Ton, District 1", city: "TP. Hồ Chí Minh" },
    { name: "Mekong Quilts Boutique", address: "Mac Thi Buoi, District 1", city: "TP. Hồ Chí Minh" },
    { name: "Manzi Art Space", address: "Phan Huy Ich, Ba Dinh", city: "Hà Nội" },
    { name: "Bảo tàng Mỹ thuật Shop", address: "97A Phó Đức Chính", city: "TP. Hồ Chí Minh" }
];

const events = [
    { id: 1, title: "Hội chợ Nghệ thuật 'Lộc Xuân'", date: "20 Tháng 4, 2026", location: "Bảo tàng Mỹ thuật TP.HCM", tag: "Art Fair", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Workshop Vẽ Màu Nước Indie", date: "25 Tháng 4, 2026", location: "Ohquao Concept Store", tag: "Workshop", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Triển lãm 'Nét Việt'", date: "02 Tháng 5, 2026", location: "Hanoi Creative City", tag: "Exhibition", image: "https://images.unsplash.com/photo-1491243950741-9b35542bb9d7?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Art Community Meetup", date: "10 Tháng 5, 2026", location: "Toong Coworking Space", tag: "Networking", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" }
];

const projectBriefs = [
    { title: "Sáng tạo tranh tường (Mural) Hồ Tây", reward: "15.000.000 VNĐ", status: "Open", deadline: "12 ngày", image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=800" },
    { title: "Thiết kế bộ Postcard 'Ký ức Phố'", reward: "5.000.000 VNĐ", status: "Open", deadline: "10 ngày", image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b93475?auto=format&fit=crop&q=80&w=800" },
    { title: "Minh họa bìa sách 'Hồn Việt'", reward: "8.000.000 VNĐ", status: "Open", deadline: "15 ngày", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" },
    { title: "Workshop Dệt vải Tự nhiên", reward: "20.000.000 VNĐ", status: "Open", deadline: "20 ngày", image: "https://images.unsplash.com/photo-1506806732259-39c2d4468673?auto=format&fit=crop&q=80&w=800" }
];

// CMS Mock Data
const INITIAL_ORDERS = [
    { id: "#LA-9021", user: "Nguyễn Văn A", product: "Ly Gốm 'Mùa Sen'", price: "350.000 đ", date: "15/04", status: "Delivered", class: "badge-delivered" },
    { id: "#LA-9022", user: "Trần Thị B", product: "Cyberpunk Hanoi Print", price: "1.200.000 đ", date: "16/04", status: "Shipped", class: "badge-shipped" },
    { id: "#LA-9023", user: "Lê Minh C", product: "Móc khóa Cung Đình", price: "85.000 đ", date: "17/04", status: "Processing", class: "badge-processing" }
];

const INITIAL_CUSTOMERS = [
    { name: "Nguyễn Văn A", email: "vana@gmail.com", orders: 3, total: "1.050.000 đ", avatar: "NA" },
    { name: "Trần Thị B", email: "ttb@outlook.com", orders: 1, total: "1.200.000 đ", avatar: "TB" },
    { name: "Lê Minh C", email: "minhc@dev.vn", orders: 5, total: "450.000 đ", avatar: "MC" }
];

// App State
let artPieces = JSON.parse(localStorage.getItem(STORAGE_KEYS.ART_PIECES)) || INITIAL_ART_PIECES;
let impactProjects = JSON.parse(localStorage.getItem(STORAGE_KEYS.IMPACT_PROJECTS)) || INITIAL_IMPACT_PROJECTS;
let userLikes = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_LIKES)) || [];
let isLoggedIn = JSON.parse(localStorage.getItem(STORAGE_KEYS.AUTH_STATE)) || false;
let currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DATA)) || null;

let currentCategory = "Tất cả";
let searchQuery = "";
let currentCmsTab = "orders";

// --- Core Initialization ---

function initApp() {
    setupNavigation();
    setupAuth();
    setupDashboardTabs();
    renderAllViews();
    setupSearchAndFilters();
    updateAuthUI();
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function saveData() {
    localStorage.setItem(STORAGE_KEYS.ART_PIECES, JSON.stringify(artPieces));
    localStorage.setItem(STORAGE_KEYS.IMPACT_PROJECTS, JSON.stringify(impactProjects));
    localStorage.setItem(STORAGE_KEYS.USER_LIKES, JSON.stringify(userLikes));
    localStorage.setItem(STORAGE_KEYS.AUTH_STATE, JSON.stringify(isLoggedIn));
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(currentUser));
}

// --- Navigation & Routing ---

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-view]');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.getAttribute('data-view');
            if (targetView === 'dashboard' && !isLoggedIn) {
                openAuthModal('login');
                return;
            }
            switchView(targetView);
        });
    });
}

function switchView(viewId) {
    const navItems = document.querySelectorAll('.nav-item[data-view]');
    const views = document.querySelectorAll('.view');
    const activeView = document.querySelector('.view.active');
    
    if(activeView) activeView.style.opacity = '0';

    setTimeout(() => {
        navItems.forEach(i => i.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[data-view="${viewId}"]`);
        if(activeNav) activeNav.classList.add('active');

        views.forEach(v => {
            v.classList.remove('active');
            v.style.height = '0';
            if (v.id === `view-${viewId}`) {
                v.classList.add('active');
                v.style.height = 'auto';
                setTimeout(() => v.style.opacity = '1', 50);
            }
        });
        
        if (viewId === 'dashboard') renderDashboard();
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.lucide) window.lucide.createIcons();
    }, 300);
}

// --- Dashboard Logic ---

function setupDashboardTabs() {
    const tabBtns = document.querySelectorAll('.db-tab-btn');
    const panels = document.querySelectorAll('.db-tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => {
                p.classList.remove('active');
                p.style.display = 'none';
            });

            btn.classList.add('active');
            const target = btn.getAttribute('data-tab');
            const panel = document.getElementById(`db-${target}`);
            panel.classList.add('active');
            panel.style.display = 'block';

            if (target === 'seller') renderSellerCMS();
        });
    });

    const cmsMiniTabs = document.querySelectorAll('.cms-tab-mini');
    cmsMiniTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            cmsMiniTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCmsTab = tab.getAttribute('data-cms');
            renderSellerCMS();
        });
    });
}

function renderDashboard() {
    if (!isLoggedIn || !currentUser) return;
    document.getElementById('db-user-name').textContent = currentUser.name;
    document.getElementById('db-user-email').textContent = currentUser.email;
    document.getElementById('db-user-avatar').textContent = currentUser.avatar;
    document.getElementById('db-like-count').textContent = userLikes.length;
}

function renderSellerCMS() {
    const viewport = document.getElementById('cms-viewport');
    viewport.innerHTML = '';

    if (currentCmsTab === 'orders') {
        let html = `<div class="cms-table-container"><table class="cms-table"><thead><tr><th>Mã Đơn</th><th>Khách Hàng</th><th>Sản Phẩm</th><th>Giá Trị</th><th>Ngày</th><th>Trạng Thái</th></tr></thead><tbody>`;
        INITIAL_ORDERS.forEach(order => {
            html += `<tr><td><b>${order.id}</b></td><td>${order.user}</td><td>${order.product}</td><td>${order.price}</td><td>${order.date}</td><td><span class="badge ${order.class}">${order.status}</span></td></tr>`;
        });
        html += `</tbody></table></div>`;
        viewport.innerHTML = html;
    } else {
        let html = `<div class="cms-table-container"><table class="cms-table"><thead><tr><th>Khách Hàng</th><th>Email</th><th>Đơn Hàng</th><th>Tổng Chi</th></tr></thead><tbody>`;
        INITIAL_CUSTOMERS.forEach(cust => {
            html += `<tr><td><div class="customer-row"><div class="cust-avatar">${cust.avatar}</div><span>${cust.name}</span></div></td><td>${cust.email}</td><td>${cust.orders}</td><td><b>${cust.total}</b></td></tr>`;
        });
        html += `</tbody></table></div>`;
        viewport.innerHTML = html;
    }
}

// --- Auth Simulation ---

function setupAuth() {
    const modal = document.getElementById('auth-modal');
    const closeBtn = document.querySelector('.modal-close');
    const loginTrigger = document.getElementById('login-trigger');
    
    if(loginTrigger) loginTrigger.addEventListener('click', () => openAuthModal('login'));
    if(closeBtn) closeBtn.addEventListener('click', closeAuthModal);
    
    document.getElementById('show-login').addEventListener('click', (e) => { e.preventDefault(); toggleAuthForm('login'); });
    document.getElementById('show-register').addEventListener('click', (e) => { e.preventDefault(); toggleAuthForm('register'); });

    document.getElementById('reg-submit').addEventListener('click', () => {
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        if (!name || !email) { showNotification('Vui lòng điền đủ thông tin!', 'info'); return; }
        currentUser = { name, email, avatar: name.charAt(0).toUpperCase() };
        isLoggedIn = true;
        saveData(); updateAuthUI(); closeAuthModal();
        showNotification(`Chào mừng ${name}!`, 'success');
        switchView('dashboard');
    });

    document.getElementById('login-submit').addEventListener('click', () => {
        const email = document.getElementById('login-email').value;
        if (!email) return;
        if(!currentUser) currentUser = { name: "Thành viên", email, avatar: "T" };
        isLoggedIn = true;
        saveData(); updateAuthUI(); closeAuthModal();
        showNotification('Đăng nhập thành công!', 'success');
        switchView('dashboard');
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        isLoggedIn = false; currentUser = null;
        saveData(); updateAuthUI(); switchView('discover');
        showNotification('Đã đăng xuất!', 'info');
    });
}

function openAuthModal(mode = 'register') {
    document.getElementById('auth-modal').classList.add('active');
    toggleAuthForm(mode);
}

function closeAuthModal() { document.getElementById('auth-modal').classList.remove('active'); }

function toggleAuthForm(mode) {
    document.getElementById('register-form').style.display = mode === 'register' ? 'block' : 'none';
    document.getElementById('login-form').style.display = mode === 'login' ? 'block' : 'none';
}

function updateAuthUI() {
    const navAvatar = document.getElementById('nav-avatar');
    const authActions = document.getElementById('auth-actions');
    if (isLoggedIn && currentUser) {
        navAvatar.textContent = currentUser.avatar;
        authActions.innerHTML = `<span class="user-greeting">Chào, ${currentUser.name.split(' ')[0]}</span>`;
    } else {
        navAvatar.textContent = '?';
        authActions.innerHTML = `<button class="btn-text" id="login-trigger">Đăng nhập</button>`;
        document.getElementById('login-trigger').addEventListener('click', () => openAuthModal('login'));
    }
}

// --- Search & Filters ---

function setupSearchAndFilters() {
    const searchInput = document.querySelector('.search-container input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderMainFeed();
        });
    }

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
    toast.innerHTML = `<i data-lucide="${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 500); }, 3000);
}

// --- Renderers ---

function renderAllViews() {
    renderDiscovery();
    renderEvents();
    renderConsignment();
    renderCollaborate();
}

function renderDiscovery() {
    const storiesContainer = document.getElementById('stories-container');
    if (storiesContainer) {
        storiesContainer.innerHTML = '';
        artistStories.forEach(story => {
            const card = document.createElement('div');
            card.className = 'story-card';
            card.innerHTML = `
                <div class="story-img-wrapper"><img src="${story.image}" class="story-img" alt="${story.title}"><span class="story-tag">${story.tag}</span></div>
                <div class="story-card-content">
                    <h3>${story.title}</h3><p>${story.excerpt}</p>
                    <div class="story-author"><div class="author-info"><img src="${story.avatar}" class="author-avatar" alt="${story.author}"><span class="author-name">${story.author}</span></div><span class="read-time"><i data-lucide="clock"></i> ${story.readTime}</span></div>
                </div>`;
            storiesContainer.appendChild(card);
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
        const matchesSearch = piece.title.toLowerCase().includes(searchQuery) || piece.artist.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-gray);"><i data-lucide="search-x" style="width: 48px; height: 48px; margin-bottom: 1rem;"></i><p>Không tìm thấy sản phẩm...</p></div>`;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    filtered.forEach((piece, index) => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.dataset.id = piece.id;
        card.innerHTML = `
            <div class="art-image-wrapper">
                <img src="${piece.image}" class="art-image" style="height: ${heights[index % heights.length]}; object-fit: cover;">
                <div class="art-overlay"><button class="btn-buy">Mua ngay</button></div>
            </div>
            <div class="art-info">
                <div class="artist-profile"><div class="artist-avatar">${piece.avatar}</div><span class="artist-name">${piece.artist}</span></div>
                <div class="interactions">
                    <!-- Favorite feature removed from Marketplace as requested -->
                    <span class="interaction-count">${piece.likes} lượt mua</span>
                </div>
            </div>`;
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
            card.dataset.id = project.id;
            card.innerHTML = `
                <div class="impact-header"><div class="impact-icon" style="color: ${project.color};"><i data-lucide="${project.icon}"></i></div><span class="impact-category" style="background: ${project.color}20; color: ${project.color};">${project.category}</span></div>
                <div class="impact-content"><h3>${project.title}</h3><p>${project.description}</p></div>
                <div class="impact-footer">
                    <div class="stats-group"><div class="stat-item"><i data-lucide="users"></i> ${project.artists}</div><div class="stat-item" style="color: #fffbd5;">${project.raised}</div></div>
                    <button class="btn-join ${project.joined ? 'active' : ''}" onclick="toggleJoin(${project.id})">${project.joined ? 'Đã tham gia' : 'Tham gia'} <i data-lucide="arrow-right"></i></button>
                </div>`;
            impactContainer.appendChild(card);
        });
    }

    const container = document.getElementById('events-container');
    if (container) {
        container.innerHTML = '';
        events.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <img src="${event.image}" class="event-img" alt="${event.title}">
                <div class="event-content">
                    <span class="event-tag">${event.tag}</span><h3>${event.title}</h3>
                    <p><i data-lucide="clock"></i> ${event.date}</p><p><i data-lucide="map-pin"></i> ${event.location}</p>
                    <button class="btn-outline" style="margin-top: 1.5rem; width: 100%;">Quan tâm</button>
                </div>`;
            container.appendChild(card);
        });
    }
    if (window.lucide) window.lucide.createIcons();
}

function toggleJoin(id) {
    const project = impactProjects.find(p => p.id === id);
    if (project) { project.joined = !project.joined; saveData(); renderEvents(); showNotification(project.joined ? 'Đã tham gia!' : 'Đã rời khỏi', 'success'); }
}

function renderConsignment() {
    const container = document.getElementById('consignment-container');
    if (!container) return;
    container.innerHTML = '';
    consignmentSpots.forEach((spot, idx) => {
        const card = document.createElement('div');
        card.className = `store-card ${idx === 0 ? 'active' : ''}`;
        card.innerHTML = `<h3>${spot.name}</h3><p>${spot.address}</p><span style="color: #fffbd5; font-size: 0.85rem;">${spot.city}</span>`;
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
            <div class="brief-img-wrapper" style="height: 200px; overflow: hidden; border-radius: 16px; margin-bottom: 1.5rem;">
                <img src="${brief.image}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <span class="brief-status status-open">Đang mở</span>
            <h3>${brief.title}</h3><p>Ngân sách: <b>${brief.reward}</b></p><p>Thời hạn: ${brief.deadline}</p>
            <button class="btn-gradient" style="width: 100%; margin-top: 1rem;">Ứng tuyển ngay</button>`;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initApp);
