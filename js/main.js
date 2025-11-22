/* ===================================
   WirausahaKita - Main JavaScript
   =================================== */

// Data Mentah Konten Modul (untuk Unduh dan Pratinjau)
const rawModuleContent = {
    'modul1': {
        title: 'Panduan Membangun Wirausaha untuk Masyarakat Permukiman',
        fileName: 'Panduan_Wirausaha_Permukiman.docx',
        content: [
            { header: '1. Identifikasi Potensi Lokal di Permukiman', body: 'Potensi lokal seperti keahlian warga, sumber daya, dan kebutuhan harian harus digali untuk menentukan jenis usaha yang tepat.' },
            { header: '2. Bentuk Kelompok Usaha Kecil (UMKM)', body: 'Membangun usaha bersama membantu meringankan modal dan memperkuat manajemen usaha.' },
            { header: '3. Mulai dari Usaha Berbasis Kebutuhan Harian', body: 'Jenis usaha seperti sembako, laundry, air isi ulang, dan katering sangat cocok di lingkungan permukiman.' },
            { header: '4. Kembangkan Produk Lokal atau Olahan Rumah Tangga', body: 'Kerajinan, makanan olahan, dan hidroponik dapat menjadi peluang usaha kreatif.' },
            { header: '5. Manfaatkan Ruang Publik untuk Pelatihan', body: 'Ruang RT/RW dapat digunakan untuk sosialisasi, pelatihan, dan koordinasi usaha.' },
            { header: '6. Pemasaran Murah dan Efektif', body: 'Gunakan WhatsApp Group, Instagram, banner kecil, dan Google Maps untuk memperkenalkan usaha.' },
            { header: '7. Pengelolaan Keuangan Transparan', body: 'Catat pemasukan dan pengeluaran secara rapi, terutama untuk usaha kelompok.' },
            { header: '8. Libatkan Anak Muda', body: 'Anak muda dapat membantu dalam konten digital, desain, dan pemasaran online.' },
            { header: '9. Fokus pada Kualitas dan Kepercayaan', body: 'Jaga kualitas produk dan layanan agar pelanggan loyal.' },
            { header: '10. Evaluasi Bulanan', body: 'Lakukan evaluasi untuk mengetahui produk terlaris dan pengembangan usaha berikutnya.' },
        ]
    },
    'modul2': {
        title: 'Panduan Membangun Daya Juang Masyarakat',
        fileName: 'Panduan_Daya_Juang_Masyarakat.docx',
        content: [
            { header: '1. Bangun Kesadaran Bersama bahwa Perubahan Itu Mungkin', body: 'Masyarakat sering tidak bergerak bukan karena tidak mampu, tetapi karena tidak merasa mampu. Mulai dari diskusi kecil, penyuluhan ringan, atau cerita sukses lokal dapat membuka mata warga bahwa perubahan itu bisa terjadi.' },
            { header: '2. Tingkatkan Gotong Royong sebagai Fondasi Mental', body: 'Daya juang tumbuh ketika masyarakat saling mendukung. Kegiatan sosial seperti kerja bakti, aksi bantuan warga, dan program solidaritas dapat memperkuat ikatan sosial dan sikap pantang menyerah.' },
            { header: '3. Edukasi & Pelatihan: Kunci Kemandirian Mental dan Ekonomi', body: 'Pelatihan keterampilan, workshop kewirausahaan, literasi keuangan, hingga pelatihan problem solving mampu meningkatkan kepercayaan diri dan kemampuan bertahan masyarakat.' },
            { header: '4. Libatkan Seluruh Kelompok Masyarakat', body: 'Daya juang meningkat ketika semua elemen terlibat: anak muda sebagai penggerak digital, ibu rumah tangga sebagai motor produksi, dan lansia sebagai sumber kebijaksanaan.' },
            { header: '5. Tetapkan Target Bersama yang Jelas dan Terukur', body: 'Tujuan membuat masyarakat terarah. Contoh: menciptakan 5 UMKM baru dalam 6 bulan atau mengadakan pelatihan bulanan. Target yang jelas meningkatkan fokus dan semangat kolektif.' },
            { header: '6. Sediakan Ruang untuk Inovasi & Kreativitas', body: 'Forum ide, kotak saran, dan kompetisi inovasi membuat masyarakat merasa dihargai. Lingkungan yang kreatif cenderung lebih tangguh dan adaptif.' },
            { header: '7. Perkuat Kemandirian Ekonomi Lokal', body: 'Dengan membangun UMKM, pasar kecil, dan penjualan online produk warga, masyarakat dapat mengurangi ketergantungan ekonomi luar. Ekonomi kuat = mental kuat.' },
            { header: '8. Bangun Lingkungan yang Positif dan Menginspirasi', body: 'Slogan motivasi, cerita sukses warga, atau kegiatan yang menghidupkan optimisme mampu menyebarkan energi positif yang meningkatkan daya juang.' },
            { header: '9. Hadapi Masalah Secara Kolektif', body: 'Tim respon cepat, layanan konseling relawan, atau musyawarah sehat membantu warga menghadapi masalah bersama. Tekanan yang dibagi menjadi lebih ringan, meningkatkan resiliensi.' },
            { header: '10. Rayakan Kemajuan Sekecil Apa Pun', body: 'Apresiasi adalah bahan bakar semangat. Berikan penghargaan warga inspiratif, sertifikat pelatihan, atau pengumuman prestasi bulanan untuk menjaga momentum positif.' },
        ]
    }
};

/* ===================================
   Download File Function
   =================================== */
async function downloadFile(modulKey) {
    const data = rawModuleContent[modulKey];
    if (!data) return;

    try {
        showNotification('Sedang membuat dokumen...', 'bg-blue-500');

        // Cek apakah docx library tersedia
        if (typeof docx === 'undefined') {
            throw new Error('Library docx tidak tersedia');
        }

        const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = docx;

        // Buat array untuk menampung semua paragraf
        const children = [];

        // Tambahkan judul utama
        children.push(
            new Paragraph({
                text: data.title,
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 }
            })
        );

        // Tambahkan baris kosong setelah judul
        children.push(new Paragraph({ text: "" }));

        // Tambahkan setiap konten
        data.content.forEach((item, index) => {
            // Header/Judul poin
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: item.header,
                            bold: true,
                            size: 28,
                            color: "0066CC"
                        })
                    ],
                    spacing: { before: 240, after: 120 }
                })
            );

            // Body/Isi poin
            children.push(
                new Paragraph({
                    text: item.body,
                    spacing: { after: 240 }
                })
            );
        });

        // Buat dokumen
        const doc = new Document({
            sections: [{
                properties: {},
                children: children
            }]
        });

        // Generate blob
        const blob = await Packer.toBlob(doc);
        
        // Buat link download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = data.fileName;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            showNotification(`${data.title} berhasil diunduh!`, 'bg-green-500');
        }, 100);

    } catch (error) {
        console.error('Error saat membuat dokumen:', error);
        
        // Fallback: Download sebagai file teks jika docx gagal
        let textContent = data.title + '\n\n';
        data.content.forEach(item => {
            textContent += item.header + '\n\n';
            textContent += item.body + '\n\n';
        });
        
        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = data.fileName.replace('.docx', '.txt');
        
        document.body.appendChild(link);
        link.click();
        
        setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }, 100);
        
        showNotification('Dokumen diunduh sebagai file teks (.txt)', 'bg-yellow-500');
    }
}

/* ===================================
   Show Preview Function
   =================================== */
function showPreview(modulKey) {
    const data = rawModuleContent[modulKey];
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const previewModal = document.getElementById('preview-modal');

    if (!data) return;

    // Set Judul Modal
    modalTitle.textContent = data.title;

    // Buat Konten
    let contentHTML = '';
    data.content.forEach((item, index) => {
        const stepNumber = index + 1;
        
        contentHTML += `
            <div class="step-card bg-white p-6 rounded-lg w-full mb-4 animate-scale" style="animation-delay: ${index * 0.1}s">
                <span class="step-number text-4xl font-bold text-teal-600 block mb-2">${stepNumber}</span>
                <h2 class="text-xl font-semibold text-gray-800 mb-3">${item.header}</h2>
                <p class="text-gray-600 leading-relaxed">
                    ${item.body}
                </p>
            </div>
        `;
    });
    
    modalBody.innerHTML = contentHTML;

    // Tampilkan Modal
    previewModal.classList.remove('hidden');
    previewModal.classList.add('flex');
    setTimeout(() => {
        previewModal.classList.add('is-active');
    }, 50); 
}

/* ===================================
   Close Modal Function
   =================================== */
function closeModal() {
    const previewModal = document.getElementById('preview-modal');
    previewModal.classList.remove('is-active');
    
    setTimeout(() => {
        previewModal.classList.remove('flex');
        previewModal.classList.add('hidden');
    }, 400); 
}

/* ===================================
   Notification Function
   =================================== */
function showNotification(message, bgColor) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${bgColor} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

/* ===================================
   Scroll Animations
   =================================== */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('section-main')) {
                    entry.target.classList.add('visible');
                } else if (entry.target.classList.contains('stagger-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, entry.target.dataset.delay || 0);
                } else {
                    entry.target.classList.add('show', 'visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe semua elemen yang perlu dianimasikan
    document.querySelectorAll('.section-main, .section-title, .module-item, .gallery-item, .stagger-item').forEach(item => {
        observer.observe(item);
    });
}

/* ===================================
   Dark Mode Toggle
   =================================== */
function toggleDarkMode() {
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('darkMode', 'disabled');
    }
}

/* ===================================
   Mobile Menu Toggle
   =================================== */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

/* ===================================
   Scroll to Home
   =================================== */
function scrollToHome() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ===================================
   Initialize on DOM Load
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Cek dan set dark mode dari localStorage
    const darkMode = localStorage.getItem('darkMode');
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }

    // Animasi Hero
    ['hero-title', 'hero-subtitle', 'hero-button'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('visible');
        }
    });

    // Inisialisasi animasi scroll
    initScrollAnimations();

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }

    // Close modal when clicking outside atau tombol close
    const previewModal = document.getElementById('preview-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    if (previewModal) {
        previewModal.addEventListener('click', (e) => {
            if (e.target.id === 'preview-modal') {
                closeModal();
            }
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Animasi header saat scroll
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

    // PERBAIKAN: Smooth scroll untuk semua link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Jika link ke home (#)
            if (targetId === '#' || targetId === '') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Link ke section lain
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80; // Tinggi header sticky
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});