function startAnalysis() {
    const input = document.getElementById('url-input').value.trim();
    if (!input) return;

    // Hero küçülsün
    document.getElementById('hero').classList.add('active');

    // Dashboard göster
    const dash = document.getElementById('dashboard');
    dash.style.display = 'grid';
    // Küçük gecikme sonra visible class ile animasyon tetikle
    setTimeout(() => dash.classList.add('visible'), 50);

    // Skeleton loader göster
    showSkeletons();

    // Simüle edilmiş analiz (gerçek API bağlantısı buraya gelir)
    setTimeout(() => fillResults(), 2200);
}

function showSkeletons() {
    document.getElementById('specs-list').innerHTML = `
        <div class="skeleton full"></div>
        <div class="skeleton long"></div>
        <div class="skeleton short"></div>
        <div class="skeleton long"></div>
        <div class="skeleton full"></div>
    `;
    document.getElementById('platform-grid').innerHTML = `
        <div class="skeleton full" style="height:70px;border-radius:14px;"></div>
        <div class="skeleton full" style="height:70px;border-radius:14px;"></div>
        <div class="skeleton full" style="height:70px;border-radius:14px;"></div>
        <div class="skeleton full" style="height:70px;border-radius:14px;"></div>
    `;
    document.getElementById('word-tags').innerHTML = `
        <div class="skeleton" style="width:80px;height:28px;border-radius:50px;display:inline-block;margin:4px;"></div>
        <div class="skeleton" style="width:100px;height:28px;border-radius:50px;display:inline-block;margin:4px;"></div>
        <div class="skeleton" style="width:65px;height:28px;border-radius:50px;display:inline-block;margin:4px;"></div>
        <div class="skeleton" style="width:90px;height:28px;border-radius:50px;display:inline-block;margin:4px;"></div>
    `;
    document.getElementById('ai-response').innerHTML = `
        <div class="skeleton full"></div>
        <div class="skeleton long"></div>
        <div class="skeleton full"></div>
        <div class="skeleton short"></div>
        <div class="skeleton full"></div>
        <div class="skeleton long"></div>
    `;
}

function fillResults() {
    // Ürün Özellikleri
    document.getElementById('specs-list').innerHTML = `
        <div class="spec-item"><span class="spec-label">Marka</span><span class="spec-value">Samsung</span></div>
        <div class="spec-item"><span class="spec-label">Model</span><span class="spec-value">Galaxy S24 Ultra</span></div>
        <div class="spec-item"><span class="spec-label">İşlemci</span><span class="spec-value">Snapdragon 8 Gen 3</span></div>
        <div class="spec-item"><span class="spec-label">RAM</span><span class="spec-value">12 GB</span></div>
        <div class="spec-item"><span class="spec-label">Depolama</span><span class="spec-value">256 GB</span></div>
        <div class="spec-item"><span class="spec-label">Kamera</span><span class="spec-value">200 MP</span></div>
    `;

    // Platform Skorları
    document.getElementById('platform-grid').innerHTML = `
        <div class="platform-item">
            <span class="platform-name">Trendyol</span>
            <span class="platform-score">4.7</span>
            <span class="platform-stars">★★★★★</span>
        </div>
        <div class="platform-item">
            <span class="platform-name">Amazon</span>
            <span class="platform-score">4.5</span>
            <span class="platform-stars">★★★★☆</span>
        </div>
        <div class="platform-item">
            <span class="platform-name">Hepsiburada</span>
            <span class="platform-score">4.6</span>
            <span class="platform-stars">★★★★★</span>
        </div>
        <div class="platform-item">
            <span class="platform-name">N11</span>
            <span class="platform-score">4.3</span>
            <span class="platform-stars">★★★★☆</span>
        </div>
    `;

    // Yorum Etiketleri
    document.getElementById('word-tags').innerHTML = `
        <span class="tag pos">Hızlı kargo</span>
        <span class="tag pos">Orijinal ürün</span>
        <span class="tag pos">Harika kamera</span>
        <span class="tag neg">Kutu hasarlı</span>
        <span class="tag neu">Fiyat/performans</span>
        <span class="tag pos">Pil ömrü iyi</span>
        <span class="tag neg">Isınma sorunu</span>
        <span class="tag neu">Beklentileri karşıladı</span>
    `;

    // AI Raporu
    document.getElementById('ai-response').innerHTML = `
        <p style="line-height:1.75;font-size:0.9rem;color:rgba(255,255,255,0.72);">
            Samsung Galaxy S24 Ultra, piyasadaki en güçlü Android deneyimlerinden birini sunuyor.
            Snapdragon 8 Gen 3 işlemcisi ve 12 GB RAM kombinasyonu günlük kullanımda son derece akıcı.
        </p>
        <p style="margin-top:14px;line-height:1.75;font-size:0.9rem;color:rgba(255,255,255,0.72);">
            200 MP kamera sistemi özellikle gündüz koşullarında rakipsiz. Kullanıcı yorumları ağırlıklı olarak
            <span style="color:#4ade80;">olumlu (%78)</span> olmakla birlikte, ısınma sorunu dikkat çekiyor.
        </p>
    `;

    // Fiyat
    document.getElementById('current-price').textContent = '₺52.499';
}
document.querySelectorAll('.view-report-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        // Rapor sayfasına yönlendirme veya modal açma buraya gelir
    });
});