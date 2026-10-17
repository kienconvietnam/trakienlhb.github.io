let defaultSpecies=[
{id:'camponotus',name:'Kiến thợ mộc khổng lồ',latin:'Camponotus gigas',region:'Đông Nam Á',habitat:'Rừng nhiệt đới đất thấp',size:'Kiến thợ lớn có thể dài khoảng 2 cm; kiến chúa lớn hơn.',behavior:'Kiếm ăn theo nhóm, hoạt động chủ yếu trên mặt đất và trong tầng lá mục.',diet:'Chất ngọt từ côn trùng, dịch tiết thực vật và nguồn thức ăn động vật nhỏ.',col:['#111b16','#26372a','#d5ae66','#607f58','#9cb879','#e2c477','rgba(193,147,70,.18)'],desc:'Một trong những loài kiến lớn nổi bật ở Đông Nam Á. Kích thước ấn tượng đi cùng tập tính kiếm ăn và tổ chức đàn đặc trưng của chi Camponotus.',fun:'Kích thước lớn khiến loài này trở thành một ví dụ thú vị khi quan sát sự phân công lao động trong đàn.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Camponotus_gigas.jpg/800px-Camponotus_gigas.jpg',imageAlt:'Camponotus gigas',year:'Mô tả khoa học thế kỷ XIX; cần kiểm chứng tài liệu phân loại gốc trước khi trích dẫn năm cụ thể.'},
{id:'atta',name:'Kiến cắt lá',latin:'Atta cephalotes',region:'Trung và Nam Mỹ',habitat:'Rừng nhiệt đới và sinh cảnh có thảm thực vật phong phú',size:'Kích thước thay đổi rõ rệt theo vai trò trong đàn.',behavior:'Cắt lá, vận chuyển vật liệu thực vật về tổ để nuôi nấm cộng sinh.',diet:'Chủ yếu sử dụng nấm được nuôi trong tổ; lá là nguyên liệu trồng nấm.',col:['#142019','#263b2a','#c88b63','#6e8c58','#a9bf7e','#e8c8a2','rgba(174,119,77,.18)'],desc:'Những đoàn kiến cắt lá có thể tạo thành các tuyến vận chuyển rõ rệt. Chúng không đơn giản ăn lá đã cắt mà dùng lá làm giá thể cho vườn nấm của đàn.',fun:'Đàn kiến và nấm cộng sinh phụ thuộc vào nhau — một hình thức nông nghiệp tự nhiên có tổ chức.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Atta_cephalotes_costa_rica.jpg/800px-Atta_cephalotes_costa_rica.jpg',imageAlt:'Atta cephalotes',year:'Được mô tả trong tài liệu phân loại cổ; cần đối chiếu nguồn chuyên ngành cho chi tiết tác giả và năm.'},
{id:'eciton',name:'Kiến quân đội',latin:'Eciton burchellii',region:'Trung và Nam Mỹ',habitat:'Rừng nhiệt đới ẩm',size:'Kiến thợ có nhiều kích thước và hình thái theo nhiệm vụ.',behavior:'Tổ chức các cuộc săn mồi theo đoàn; đàn có thể di chuyển theo chu kỳ.',diet:'Động vật chân khớp và các con mồi nhỏ khác.',col:['#171613','#34251f','#c65d42','#536d49','#819b65','#d98d69','rgba(189,82,54,.2)'],desc:'Kiến quân đội nổi tiếng với các cuộc săn mồi phối hợp quy mô lớn. Khi đàn di chuyển, nhiều sinh vật trong rừng thay đổi hành vi để tránh hoặc tận dụng dòng săn mồi này.',fun:'Một đàn có thể hình thành nơi trú tạm từ chính cơ thể kiến thợ — cấu trúc thường được gọi là bivouac.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eciton_burchellii.jpg/800px-Eciton_burchellii.jpg',imageAlt:'Eciton burchellii',year:'Tên loài gắn với lịch sử nghiên cứu kiến quân đội; xác minh tài liệu gốc trước khi công bố năm.'},
{id:'cephalotes',name:'Kiến rùa',latin:'Cephalotes varians',region:'Vùng Caribe và Florida Keys',habitat:'Cây cối, các hốc gỗ và cành cây',size:'Kiến nhỏ đến trung bình; đầu và thân có hình dạng đặc trưng.',behavior:'Sống trên cây; một số loài Cephalotes có thể lượn điều hướng khi rơi.',diet:'Nguồn thức ăn nhỏ trên cây, dịch tiết và vật chất hữu cơ.',col:['#10201e','#203a36','#9bc5b7','#587b69','#9bb99a','#e5d9b9','rgba(106,171,154,.18)'],desc:'Nhóm kiến sống trên cây với hình thái cơ thể đặc biệt. Ở một số loài trong chi, phần đầu dẹt có thể hỗ trợ chặn lối vào các hốc tổ.',fun:'Các nghiên cứu về kiến Cephalotes cho thấy một số cá thể có thể điều chỉnh hướng rơi để quay lại thân cây.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Cephalotes_varians.jpg/800px-Cephalotes_varians.jpg',imageAlt:'Cephalotes varians',year:'Thông tin phân loại chi tiết cần đối chiếu cơ sở dữ liệu chuyên ngành.'},
{id:'oecophylla',name:'Kiến vàng',latin:'Oecophylla smaragdina',region:'Nam Á, Đông Nam Á và một phần Australia',habitat:'Tán cây trong rừng, vườn và hệ sinh thái nhiệt đới',size:'Kiến thợ màu vàng cam đến đỏ cam, chân dài.',behavior:'Dệt lá thành tổ bằng tơ do ấu trùng tiết ra; phối hợp kéo các mép lá lại gần nhau.',diet:'Côn trùng nhỏ và nguồn đường như dịch tiết của côn trùng khác.',col:['#182219','#34452a','#e1c64d','#698b45','#b7d46d','#f1d86e','rgba(212,191,66,.2)'],desc:'Kiến vàng xây tổ trên cây bằng cách kéo các lá còn sống lại với nhau. Kiến thợ giữ mép lá trong khi sử dụng tơ của ấu trùng để kết dính chúng.',fun:'Trong một số hệ canh tác truyền thống, kiến vàng được biết đến như tác nhân săn mồi giúp hạn chế côn trùng gây hại.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Oecophylla_smaragdina.jpg/800px-Oecophylla_smaragdina.jpg',imageAlt:'Oecophylla smaragdina',year:'Loài được mô tả từ thế kỷ XVIII; nên kiểm chứng tên tác giả và năm từ nguồn phân loại đáng tin cậy.'},
{id:'paraponera',name:'Kiến đạn',latin:'Paraponera clavata',region:'Trung và Nam Mỹ',habitat:'Rừng nhiệt đới ẩm, thường làm tổ ở gốc cây',size:'Kiến lớn, thân màu nâu đen đến đen.',behavior:'Kiếm ăn trên mặt đất và cây; có cơ chế phòng vệ bằng nọc độc gây đau mạnh.',diet:'Động vật chân khớp và nguồn thức ăn thực vật như mật hoa.',col:['#211b17','#3a2c24','#bc7655','#5c7550','#8ba16b','#d6a17d','rgba(177,100,64,.2)'],desc:'Kiến đạn có kích thước lớn và nổi tiếng vì vết đốt gây đau dữ dội. Chúng sống trong rừng nhiệt đới và thường hoạt động đơn lẻ hoặc theo các tuyến kiếm ăn.',fun:'Tên thường gọi tiếng Anh “bullet ant” bắt nguồn từ cảm giác đau mạnh được mô tả sau vết đốt.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Paraponera_clavata.jpg/800px-Paraponera_clavata.jpg',imageAlt:'Paraponera clavata',year:'Lịch sử mô tả và danh pháp cần xác nhận bằng nguồn phân loại gốc.'}
];

let savedSpecies = localStorage.getItem('ant_species_data');
let species = savedSpecies ? JSON.parse(savedSpecies) : defaultSpecies;

let savedStatics = localStorage.getItem('ant_static_texts');
let staticTexts = savedStatics ? JSON.parse(savedStatics) : {
    hero_eyebrow: "Một triển lãm về tự nhiên",
    hero_title: "ANT <span>WORLD</span>",
    hero_copy: "Khám phá thế giới bí ẩn của những sinh vật nhỏ bé — nơi trí tuệ tập thể kiến tạo nên những kỳ quan thầm lặng.",
    hero_meta1: "<b>20.000+</b> loài được mô tả",
    hero_meta2: "<b>01</b> thế giới vô tận",
    hero_meta3: "<b>∞</b> điều kỳ thú",
    intro_label: "01 / Bên dưới tán lá",
    intro_heading: "Một xã hội phi thường, ẩn mình trong <em>thế giới tí hon.</em>",
    intro_desc: "Kiến là những kiến trúc sư của hệ sinh thái. Từ những đoàn quân du mục đến các khu vườn nấm dưới lòng đất, mỗi loài mở ra một cách sống hoàn toàn khác biệt.",
    intro_quote: "“Sức mạnh không nằm ở kích thước, mà ở sự kết nối.”",
    end_eyebrow: "Hành trình vẫn tiếp tục",
    end_heading: "Một thế giới nhỏ bé.<br><em>Một hệ sinh thái phi thường.</em>",
    end_desc: "Quan sát kỹ hơn. Thiên nhiên luôn có điều để kể."
};

const journey=document.getElementById('speciesJourney');
const catalog=document.getElementById('catalogList');

function imageFallback(name){return `<svg viewBox="0 0 500 400" role="img" aria-label="Minh họa kiến ${name}"><defs><radialGradient id="g"><stop stop-color="var(--glow)"/><stop offset="1" stop-color="transparent"/></radialGradient></defs><circle cx="250" cy="200" r="185" fill="url(#g)"/><g fill="#241f19" stroke="#b7a17a" stroke-width="2"><ellipse cx="300" cy="215" rx="64" ry="49" transform="rotate(-15 300 215)"/><ellipse cx="210" cy="203" rx="37" ry="32"/><circle cx="156" cy="183" r="24"/></g><g fill="none" stroke="#241f19" stroke-width="8" stroke-linecap="round"><path d="M205 218 154 275 112 290M228 224 213 292 175 319M251 220 281 275 268 314M190 181 153 140 126 133M166 163 153 131 170 111"/></g><g fill="none" stroke="#b7a17a" stroke-width="2"><path d="M140 169Q104 128 110 110M164 164Q194 117 213 116"/></g></svg>`}

function render(){
    for(let key in staticTexts){
        const el = document.querySelector(`[data-editable="${key}"]`);
        if(el) el.innerHTML = staticTexts[key];
    }

    journey.innerHTML=species.map((s,i)=>`
        <section class="species reveal" id="${s.id}" data-species="${s.id}" data-index="${i}">
            <div class="species-visual">
                <button class="delete-species-btn" data-delete-index="${i}">❌ Xóa loài</button>
                <button class="edit-img-trigger" data-species-index="${i}">📷 Đổi ảnh</button>
                <img loading="lazy" src="${s.image}" alt="${s.imageAlt}" onerror="this.outerHTML='${imageFallback(s.name).replace(/'/g,"\\'")}'">
                <div class="visual-index">0${i+1}</div>
                <div class="visual-caption">FIELD NOTES — ANT WORLD</div>
            </div>
            <div class="species-copy">
                <div class="species-topline"><span>Species / 0${i+1}</span><span>${String(i+1).padStart(2,'0')} — ${String(species.length).padStart(2,'0')}</span></div>
                <h3 data-field="name" data-index="${i}">${s.name}</h3>
                <div class="latin" data-field="latin" data-index="${i}">${s.latin}</div>
                <p class="species-desc" data-field="desc" data-index="${i}">${s.desc}</p>
                <div class="facts">
                    <div><div class="fact-label">Phân bố</div><div class="fact-value" data-field="region" data-index="${i}">${s.region}</div></div>
                    <div><div class="fact-label">Môi trường sống</div><div class="fact-value" data-field="habitat" data-index="${i}">${s.habitat}</div></div>
                    <div><div class="fact-label">Kích thước</div><div class="fact-value" data-field="size" data-index="${i}">${s.size}</div></div>
                    <div><div class="fact-label">Hành vi & thức ăn</div><div class="fact-value" data-field="behavior" data-index="${i}">${s.behavior} ${s.diet}</div></div>
                    <div><div class="fact-label">Lịch sử phân loại</div><div class="fact-value" data-field="year" data-index="${i}">${s.year}</div></div>
                    <div><div class="fact-label">Tổ chức đàn</div><div class="fact-value">Đàn có kiến chúa và kiến thợ; mức độ phân hóa vai trò tùy loài.</div></div>
                </div>
                <div class="funfact" data-field="fun" data-index="${i}">${s.fun}</div>
                <div class="species-nav">
                    <button data-go="${Math.max(0,i-1)}" ${i===0?'disabled':''}>← Trước</button>
                    <button data-go="${Math.min(species.length-1,i+1)}" ${i===species.length-1?'disabled':''}>Tiếp theo →</button>
                </div>
            </div>
        </section>
    `).join('');
    
    catalog.innerHTML=species.map((s,i)=>`<div class="catalog-item" tabindex="0" role="button" data-go="${i}"><div class="catalog-num">0${i+1}</div><div><div class="catalog-name">${s.name}</div><div class="catalog-latin">${s.latin}</div></div><div class="catalog-arrow">↗</div></div>`).join('');
    
    document.querySelectorAll('[data-go]').forEach(el=>{const go=()=>document.getElementById(species[Number(el.dataset.go)].id).scrollIntoView({behavior:reduced?'auto':'smooth'});el.addEventListener('click',go);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}})});
    
    document.querySelectorAll('.edit-img-trigger').forEach(btn=>{
        btn.addEventListener('click', e=>{
            const idx = e.currentTarget.dataset.speciesIndex;
            const currentImg = species[idx].image;
            const newUrl = prompt("Nhập đường dẫn URL hình ảnh mới cho loài này:", currentImg);
            if(newUrl !== null && newUrl.trim() !== ""){
                species[idx].image = newUrl.trim();
                localStorage.setItem('ant_species_data', JSON.stringify(species));
                render();
                if(isAdmin) enableAdminMode(true);
            }
        });
    });

    document.querySelectorAll('.delete-species-btn').forEach(btn=>{
        btn.addEventListener('click', e=>{
            const idx = Number(e.currentTarget.dataset.deleteIndex);
            if(confirm(`Bạn có chắc muốn xóa loài "${species[idx].name}" không?`)){
                species.splice(idx, 1);
                localStorage.setItem('ant_species_data', JSON.stringify(species));
                render();
                if(isAdmin) enableAdminMode(true);
            }
        });
    });

    observeReveals();
}

let reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setTheme(s){document.documentElement.style.setProperty('--bg',s.col[0]);document.documentElement.style.setProperty('--bg2',s.col[1]);document.documentElement.style.setProperty('--accent',s.col[2]);document.documentElement.style.setProperty('--vine',s.col[3]);document.documentElement.style.setProperty('--leaf',s.col[4]);document.documentElement.style.setProperty('--flower',s.col[5]);document.documentElement.style.setProperty('--glow',s.col[6]);document.querySelector('meta[name="theme-color"]').content=s.col[0]}

function observeReveals(){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add('visible');
        }
    }),{threshold:.1});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

render();

const sections=[...document.querySelectorAll('.species')];let active='';let ticking=false;function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;const p=max>0?scrollY/max:0;document.documentElement.style.setProperty('--progress',p.toFixed(4));document.documentElement.style.setProperty('--scrollY',scrollY+'px');document.getElementById('nav').classList.toggle('scrolled',scrollY>30);const center=innerHeight*.48;let nearest=null,dist=Infinity;sections.forEach(sec=>{const r=sec.getBoundingClientRect();const d=Math.abs((r.top+r.height/2)-center);if(d<dist){dist=d;nearest=sec}});if(nearest&&nearest.dataset.species!==active){active=nearest.dataset.species;const s=species.find(x=>x.id===active);if(s)setTheme(s)}ticking=false}window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true}},{passive:true});window.addEventListener('resize',updateScroll);updateScroll();

const overlay=document.getElementById('searchOverlay'),input=document.getElementById('searchInput'),results=document.getElementById('searchResults');function openSearch(){overlay.classList.add('open');input.focus();showResults('')}function closeSearch(){overlay.classList.remove('open')}document.getElementById('openSearch').addEventListener('click',openSearch);document.getElementById('closeSearch').addEventListener('click',closeSearch);overlay.addEventListener('click',e=>{if(e.target===overlay)closeSearch()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}});function showResults(q){const matches=species.filter(s=>(s.name+' '+s.latin+' '+s.region).toLowerCase().includes(q.toLowerCase()));results.innerHTML=matches.map(s=>`<div class="search-result" data-id="${s.id}"><div>${s.name}<small>${s.latin}</small></div><span>↗</span></div>`).join('')||'<p style="color:var(--muted)">Không tìm thấy loài phù hợp.</p>';results.querySelectorAll('[data-id]').forEach(el=>el.addEventListener('click',()=>{closeSearch();document.getElementById(el.dataset.id).scrollIntoView({behavior:reduced?'auto':'smooth'})}))}input.addEventListener('input',()=>showResults(input.value));
document.getElementById('motionToggle').addEventListener('click',e=>{reduced=!reduced;document.body.classList.toggle('reduced',reduced);e.currentTarget.textContent=reduced?'◌ Chuyển động: tắt':'◌ Chuyển động: bật';if(reduced)document.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'));updateScroll()});

const addModal = document.getElementById('addModal');
document.getElementById('openAddModalBtn').addEventListener('click', () => {
    addModal.classList.add('open');
});
document.getElementById('cancelAddBtn').addEventListener('click', () => {
    addModal.classList.remove('open');
});

document.getElementById('saveNewSpeciesBtn').addEventListener('click', () => {
    const name = document.getElementById('newName').value.trim();
    const latin = document.getElementById('newLatin').value.trim();
    const region = document.getElementById('newRegion').value.trim();
    const habitat = document.getElementById('newHabitat').value.trim();
    const size = document.getElementById('newSize').value.trim();
    const desc = document.getElementById('newDesc').value.trim();
    const image = document.getElementById('newImage').value.trim();

    if(!name){
        alert("Vui lòng nhập tên loài kiến!");
        return;
    }

    const newSpeciesObj = {
        id: 'species_' + Date.now(),
        name: name,
        latin: latin || 'Species novus',
        region: region || 'Đang cập nhật',
        habitat: habitat || 'Đang cập nhật',
        size: size || 'Đang cập nhật',
        behavior: 'Kiếm ăn và sinh sống theo đặc trưng loài.',
        diet: 'Thức ăn tự nhiên phù hợp với sinh cảnh.',
        col: ['#121d17', '#1f3326', '#d8b46b', '#789b65', '#a0bd7b', '#e9d6a5', 'rgba(191,151,75,.16)'],
        desc: desc || 'Mô tả chi tiết về loài kiến mới.',
        fun: 'Loài mới được bổ sung vào bộ sưu tập nghiên cứu.',
        image: image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Camponotus_gigas.jpg/800px-Camponotus_gigas.jpg',
        imageAlt: name,
        year: 'Mô tả gần đây.'
    };

    species.push(newSpeciesObj);
    localStorage.setItem('ant_species_data', JSON.stringify(species));
    
    document.getElementById('newName').value = '';
    document.getElementById('newLatin').value = '';
    document.getElementById('newRegion').value = '';
    document.getElementById('newHabitat').value = '';
    document.getElementById('newSize').value = '';
    document.getElementById('newDesc').value = '';
    document.getElementById('newImage').value = '';
    addModal.classList.remove('open');

    render();
    if(isAdmin) enableAdminMode(true);
    alert("✨ Đã thêm thành công loài mới vào cuối trang!");
});

let isAdmin = false;
const authModal = document.getElementById('authModal');
const authInput = document.getElementById('authInput');
const adminToggleBtn = document.getElementById('adminToggleBtn');

adminToggleBtn.addEventListener('click', () => {
    if(isAdmin) {
        if(confirm("Bạn có muốn thoát chế độ quản trị viên?")) {
            isAdmin = false;
            disableAdminMode();
            adminToggleBtn.textContent = "⚙️ Quản trị viên";
        }
    } else {
        authModal.classList.add('open');
        authInput.value = '';
        authInput.focus();
    }
});

document.getElementById('authCancel').addEventListener('click', () => {
    authModal.classList.remove('open');
});

function handleAuth() {
    const val = authInput.value.trim();
    if(val === 'lhb') {
        isAdmin = true;
        authModal.classList.remove('open');
        enableAdminMode(true);
        adminToggleBtn.textContent = "🔒 Thoát Quản Trị";
    } else {
        alert("Từ khóa không chính xác! Chỉ có quản trị viên mới có quyền sửa đổi.");
        authInput.value = '';
        authInput.focus();
    }
}

document.getElementById('authSubmit').addEventListener('click', handleAuth);
authInput.addEventListener('keydown', e => {
    if(e.key === 'Enter') handleAuth();
});

function enableAdminMode(showNotif = false) {
    document.body.classList.add('admin-mode');
    
    document.querySelectorAll('[data-editable]').forEach(el => {
        el.setAttribute('contenteditable', 'true');
        el.oninput = function() {
            const key = this.dataset.editable;
            staticTexts[key] = this.innerHTML;
            localStorage.setItem('ant_static_texts', JSON.stringify(staticTexts));
        };
    });

    document.querySelectorAll('[data-field]').forEach(el => {
        el.setAttribute('contenteditable', 'true');
        el.oninput = function() {
            const field = this.dataset.field;
            const idx = this.dataset.index;
            species[idx][field] = this.innerHTML;
            localStorage.setItem('ant_species_data', JSON.stringify(species));
        };
    });

    if(showNotif) {
        const notif = document.createElement('div');
        notif.style.cssText = "position:fixed;top:80px;left:50%;transform:translateX(-50%);background:var(--accent);color:#172018;padding:10px 20px;border-radius:99px;font-size:12px;font-weight:600;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,.3);transition:opacity .5s;";
        notif.textContent = "✨ Đã kích hoạt chế độ chỉnh sửa! Bấm nút '➕ Thêm loài kiến mới' để mở bảng nhập thông tin.";
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.opacity = '0';
            setTimeout(() => notif.remove(), 500);
        }, 3000);
    }
}

function disableAdminMode() {
    document.body.classList.remove('admin-mode');
    document.querySelectorAll('[contenteditable]').forEach(el => {
        el.removeAttribute('contenteditable');
        el.oninput = null;
    });
}