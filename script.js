document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.querySelector('.typed-text');
    const header = document.querySelector('header');
    const themeToggle = document.querySelector('#theme-toggle');
    const langToggle = document.querySelector('#lang-toggle');
    const body = document.body;
    const form = document.querySelector('#contact-form');
    const formStatus = document.querySelector('#form-status');
    const backToTop = document.querySelector('#back-to-top');
    const heroPara = document.querySelector('.hero-desc');
    
    // Object dịch thuật chi tiết 100% cho toàn bộ trang web
    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            education: 'Education',
            skills: 'Skills',
            projects: 'Projects',
            softSkills: 'Soft Skills',
            eyebrow: 'Information Technology Engineering • Developer',
            hiName: 'Hi, I\'m Kyl',
            rolesTyping: ['Software Engineer', 'Full-stack Developer', 'Mobile App Dev', 'Network & Security Learner'],
            heroParagraph: 'I build practical digital solutions across web, mobile, and network infrastructure while continually strengthening my technical and professional skills.',
            webMobile: '⚡ Web & Mobile',
            cleanArch: '🧠 Clean Architecture',
            fastLearning: '🚀 Fast Learning',
            exploreBtn: 'Explore My Work',
            
            // Hero Visual Card
            currentBuilding: 'Currently building',
            visualTitle: 'Practical solutions with modern tech',
            visualItems: [
                'Frontend experiences that feel premium',
                'Mobile app ideas with real-world value',
                'Solid foundations in networking and security'
            ],

            // About Section
            aboutTag: 'About me',
            aboutTitle: 'A developer with a growth mindset',
            aboutDesc: 'I am a second-year Software Engineering student at Nguyen Tat Thanh University who enjoys crafting dependable software, learning new technologies, and delivering polished user experiences.',
            proFocus: 'Professional Focus',
            proFocusDesc: 'I am passionate about full-stack development, mobile application engineering, and modern network and security concepts that support real-world systems.',
            learning: 'Learning Approach',
            learningDesc: 'My work is driven by clean code, continuous improvement, teamwork, and the ability to connect technical solutions with practical user needs.',
            
            // Education Section
            eduTag: 'Education',
            eduTitle: 'University journey and academic growth',
            eduSchool: 'Nguyen Tat Thanh University (NTTU)',
            eduMajor: 'Information Technology Engineering (IT) — 2nd Year Student',
            eduDesc: 'Actively mastering Digital Capabilities, Open Educational Resources (OER) for optimized research, and practicing Academic English with IELTS orientation.',
            
            // Skills Section
            skillsTag: 'Technical skills',
            skillsTitle: 'A broad foundation across modern technologies',
            skillCategories: [
                { title: 'Languages & Web Frameworks', items: ['C#', 'Java', 'Dart', 'Python', 'JavaScript (ES6)', 'ASP.NET MVC', 'ASP.NET Core', 'Spring Boot'] },
                { title: 'Mobile Development', items: ['Flutter (Dart)', 'Android SDK'] },
                { title: 'Networking & Security', items: ['Network Architecture', 'Socket / Network Programming', 'Information Security Principles', 'VMware Workstation & Ubuntu Deployment'] },
                { title: 'Data & Enterprise Systems', items: ['Big Data Concepts', 'ERP / MIS Data Flows', 'SQL Server', 'MongoDB'] },
                { title: 'Frontend & Tools', items: ['HTML5', 'CSS3', 'JavaScript DOM / AJAX', 'Responsive UI / UX Design', 'Git & GitHub', 'Android Studio', 'Visual Studio', 'VS Code', 'PyCharm'] }
            ],

            // Projects Section
            projectsTag: 'Projects & achievements',
            projectsTitle: 'Selected work and milestone highlights',
            projectBadges: { awarded: 'Awarded', dev: 'In Development' },
            projectList: [
                {
                    title: 'PersonalFinanceApp',
                    badge: 'awarded',
                    role: 'Role: Lead Developer (Team of 3)',
                    achieve: '<strong>Achievement:</strong> Consolation Prize – Artificial Intelligence Competition (Organized by Faculty of IT).',
                    desc: 'A mobile application supporting smart personal finance management with intelligent decision-making features. It strengthened agile teamwork and Android workflow under pressure.'
                },
                {
                    title: 'SkillArc',
                    badge: 'dev',
                    role: 'Role: Full-Stack Developer',
                    achieve: '',
                    desc: 'An IT student learning path optimization mobile app designed to help tech students advance core technical capabilities efficiently.'
                },
                {
                    title: 'Enterprise Multi-Branch Networking Project',
                    badge: 'dev',
                    role: 'Role: Network Engineer / Infrastructure Deployment',
                    achieve: '',
                    desc: 'Designing and simulating secure corporate network infrastructure to connect the main headquarters with remote branches safely.'
                }
            ],

            // Soft Skills Section
            softTag: 'Soft skills',
            softTitle: 'Strengths beyond code',
            softCategories: [
                { title: 'Digital-age collaboration', items: ['Tech communication', 'Critical thinking', 'Remote collaboration'] },
                { title: 'Project execution', items: ['Team coordination', 'Technical documentation', 'Project presentations'] },
                { title: 'Multimedia creativity', items: ['CapCut', 'AI-powered creative tools', 'Visual content generation'] }
            ],

            // Contact Section
            contactTag: 'Contact',
            contactTitle: 'Let\'s build something meaningful together',
            contactDesc: 'Open for collaboration, internships, and exciting side projects that create real value.',
            getInTouch: 'Get in touch',
            getInTouchDesc: 'Whether it is a creative idea, a startup concept, or a product challenge, I would love to connect and contribute.',
            sendMsg: 'Send Message',
            langButtonText: 'Tiếng Việt',
            footer: '&copy; 2026 Designed by Kyl. All rights reserved.'
        },
        vi: {
            home: 'Trang chủ',
            about: 'Về tôi',
            education: 'Học vấn',
            skills: 'Kỹ năng',
            projects: 'Dự án',
            softSkills: 'Kỹ năng mềm',
            eyebrow: 'Kỹ thuật Công Nghệ Thông Tin • Lập trình viên',
            hiName: 'Xin chào, mình là Trung Kiên',
            rolesTyping: ['Kỹ sư Phần mềm', 'Nhà phát triển Full-stack', 'Lập trình Mobile', 'Nghiên cứu Mạng & Bảo mật'],
            heroParagraph: 'Mình xây dựng các giải pháp kỹ thuật số thực tế trên nền tảng web, ứng dụng di động và hạ tầng mạng, đồng thời liên tục trau dồi các kỹ năng chuyên môn kỹ thuật.',
            webMobile: '⚡ Web & Di động',
            cleanArch: '🧠 Kiến trúc sạch (Clean)',
            fastLearning: '🚀 Học hỏi nhanh',
            exploreBtn: 'Khám phá dự án',
            
            // Hero Visual Card
            currentBuilding: 'Đang triển khai',
            visualTitle: 'Giải pháp thực tế với công nghệ hiện đại',
            visualItems: [
                'Trải nghiệm Frontend cao cấp, mượt mà',
                'Ý tưởng ứng dụng Mobile có giá trị thực tế',
                'Nền tảng vững chắc về Mạng và Bảo mật'
            ],

            // About Section
            aboutTag: 'Về mình',
            aboutTitle: 'Một lập trình viên với tư duy không ngừng phát triển',
            aboutDesc: 'Mình là sinh viên năm 2 chuyên ngành Kỹ thuật Phần mềm tại Trường Đại học Nguyễn Tất Thành. Mình đam mê xây dựng phần mềm đáng tin cậy, học hỏi công nghệ mới và tối ưu hóa UI/UX.',
            proFocus: 'Định hướng Chuyên môn',
            proFocusDesc: 'Mình đặc biệt yêu thích phát triển Full-stack, kỹ nghệ phần mềm di động và các giải pháp hạ tầng mạng, an toàn thông tin hỗ trợ hệ thống thực tế.',
            learning: 'Phương pháp Làm việc',
            learningDesc: 'Công việc của mình được định hướng bởi clean code, cải tiến liên tục, làm việc nhóm hiệu quả và gắn kết giải pháp kỹ thuật với nhu cầu thực tiễn.',
            
            // Education Section
            eduTag: 'Học vấn',
            eduTitle: 'Hành trình đại học và phát triển học thuật',
            eduSchool: 'Trường Đại học Nguyễn Tất Thành (NTTU)',
            eduMajor: 'Kỹ thuật Công Nghệ Thông Tin (CNTT) — Sinh viên Năm 2',
            eduDesc: 'Chủ động trau dồi Năng lực số, Khai thác tài nguyên giáo dục mở (OER) để tối ưu nghiên cứu và rèn luyện Tiếng Anh học thuật theo định hướng IELTS.',
            
            // Skills Section
            skillsTag: 'Kỹ năng chuyên môn',
            skillsTitle: 'Nền tảng công nghệ đa dạng và hiện đại',
            skillCategories: [
                { title: 'Ngôn ngữ & Framework ứng dụng', items: ['C#', 'Java', 'Dart', 'Python', 'JavaScript (ES6)', 'ASP.NET MVC', 'ASP.NET Core', 'Spring Boot'] },
                { title: 'Lập trình Di động', items: ['Flutter (Dart)', 'Android SDK'] },
                { title: 'Hạ tầng, Mạng & Bảo mật', items: ['Kiến trúc mạng máy tính', 'Lập trình mạng / Socket', 'Nguyên lý An toàn thông tin', 'Triển khai ảo hóa VMware & Ubuntu'] },
                { title: 'Dữ liệu & Hệ thống doanh nghiệp', items: ['Tư duy Dữ liệu lớn (Big Data)', 'Hệ thống thông tin doanh nghiệp (ERP/MIS)', 'SQL Server', 'MongoDB'] },
                { title: 'Công cụ phát triển & UI/UX', items: ['HTML5', 'CSS3', 'JavaScript DOM / AJAX', 'Thiết kế giao diện Responsive', 'Git & GitHub', 'Android Studio', 'Visual Studio', 'VS Code', 'PyCharm'] }
            ],

            // Projects Section
            projectsTag: 'Dự án & Thành tựu',
            projectsTitle: 'Các sản phẩm tiêu biểu và cột mốc nổi bật',
            projectBadges: { awarded: 'Đạt giải', dev: 'Đang phát triển' },
            projectList: [
                {
                    title: 'PersonalFinanceApp',
                    badge: 'awarded',
                    role: 'Vai trò: Nhà phát triển chính (Nhóm 3 thành viên)',
                    achieve: '<strong>Thành tích:</strong> Giải Khuyến khích – Cuộc thi Trí tuệ Nhân tạo (Do Khoa CNTT tổ chức).',
                    desc: 'Ứng dụng di động hỗ trợ quản lý tài chính cá nhân thông minh, tích hợp các tính năng hỗ trợ người dùng đưa ra quyết định thu chi hợp lý. Tối ưu kỹ năng agile nhóm dưới áp lực phòng thi.'
                },
                {
                    title: 'SkillArc',
                    badge: 'dev',
                    role: 'Vai trò: Full-Stack Developer',
                    achieve: '',
                    desc: 'Ứng dụng di động tối ưu hóa lộ trình học tập cho sinh viên IT, giúp định hướng và nâng cao năng lực kỹ thuật cốt lõi một cách hiệu quả.'
                },
                {
                    title: 'Dự Án Mạng Doanh Nghiệp Đa Chi Nhánh',
                    badge: 'dev',
                    role: 'Vai trò: Kỹ sư Mạng / Triển khai hạ tầng',
                    achieve: '',
                    desc: 'Thiết kế và mô phỏng giải pháp hạ tầng mạng kết nối an toàn, bảo mật thông tin nội bộ qua mã hóa VPN giữa trụ sở chính và các văn phòng chi nhánh.'
                }
            ],

            // Soft Skills Section
            softTag: 'Kỹ năng mềm',
            softTitle: 'Điểm mạnh ngoài dòng code',
            softCategories: [
                { title: 'Hợp tác trong kỷ nguyên số', items: ['Giao tiếp công nghệ', 'Tư duy phản biện', 'Làm việc từ xa (Remote)'] },
                { title: 'Quản lý & Thực thi dự án', items: ['Phối hợp nhóm', 'Xây dựng tài liệu kỹ thuật', 'Thuyết trình trước hội đồng'] },
                { title: 'Sáng tạo Multimedia', items: ['Sử dụng thành thạo CapCut', 'Ứng dụng AI sáng tạo nội dung', 'Thiết kế hình ảnh trực quan'] }
            ],

            // Contact Section
            contactTag: 'Liên hệ',
            contactTitle: 'Hãy cùng nhau xây dựng những giá trị ý nghĩa',
            contactDesc: 'Luôn sẵn sàng hợp tác dự án, tìm kiếm cơ hội thực tập và thử thách phát triển sản phẩm thực tế.',
            getInTouch: 'Kết nối với mình',
            getInTouchDesc: 'Dù là một ý tưởng sáng tạo, mô hình khởi nghiệp hay một bài toán công nghệ, mình luôn hào hứng được thảo luận và đóng góp.',
            sendMsg: 'Gửi Tin Nhắn',
            langButtonText: 'English',
            footer: '&copy; 2026 Thiết kế bởi Kyl. Mọi quyền được bảo lưu.'
        }
    };

    let currentLang = localStorage.getItem('portfolio-lang') || 'en';

    // ============ Language Toggle ============
    if (langToggle) {
        updateLanguageButton();
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'vi' : 'en';
            localStorage.setItem('portfolio-lang', currentLang);
            applyLanguage(currentLang);
            updateLanguageButton();
        });
    }

    function updateLanguageButton() {
        if (langToggle) {
            const textSpan = langToggle.querySelector('.lang-toggle__text');
            if (textSpan) {
                textSpan.textContent = translations[currentLang].langButtonText;
            }
        }
    }

    function applyLanguage(lang) {
        const t = translations[lang];

        // 1. Menu Nav Links
        document.querySelectorAll('nav ul li a').forEach((link, index) => {
            const keys = ['home', 'about', 'education', 'skills', 'projects', 'softSkills'];
            if (keys[index]) link.textContent = t[keys[index]];
        });

        // 2. Hero Section
        const eyebrow = document.querySelector('.eyebrow');
        if (eyebrow) eyebrow.textContent = t.eyebrow;

        const h1 = document.querySelector('.hero-content h1');
        if (h1) h1.textContent = t.hiName;

        if (heroPara) heroPara.textContent = t.heroParagraph;

        const highlights = document.querySelectorAll('.hero-highlights span');
        if (highlights[0]) highlights[0].textContent = t.webMobile;
        if (highlights[1]) highlights[1].textContent = t.cleanArch;
        if (highlights[2]) highlights[2].textContent = t.fastLearning;

        const exploreBtn = document.querySelector('.hero-content .btn');
        if (exploreBtn) exploreBtn.textContent = t.exploreBtn;

        // 3. Hero Visual Card
        const visualCard = document.querySelector('.hero-card');
        if (visualCard) {
            const label = visualCard.querySelector('.hero-card__label');
            const title = visualCard.querySelector('h3');
            if (label) label.textContent = t.currentBuilding;
            if (title) title.textContent = t.visualTitle;
            
            const lis = visualCard.querySelectorAll('li');
            t.visualItems.forEach((item, idx) => {
                if (lis[idx]) lis[idx].textContent = item;
            });
        }

        // 4. Cập nhật chữ chạy (Typing roles)
        window.translatedRoles = t.rolesTyping;

        // 5. Tiêu đề chung các Section chính
        const sections = {
            about: { tag: t.aboutTag, title: t.aboutTitle, desc: t.aboutDesc },
            education: { tag: t.eduTag, title: t.eduTitle },
            skills: { tag: t.skillsTag, title: t.skillsTitle },
            projects: { tag: t.projectsTag, title: t.projectsTitle },
            'soft-skills': { tag: t.softTag, title: t.softTitle },
            contact: { tag: t.contactTag, title: t.contactTitle, desc: t.contactDesc }
        };

        Object.entries(sections).forEach(([id, content]) => {
            const section = document.getElementById(id);
            if (section) {
                const tag = section.querySelector('.section-tag');
                const title = section.querySelector('.section-title');
                const desc = section.querySelector('.section-heading > p');
                if (tag) tag.textContent = content.tag;
                if (title) title.textContent = content.title;
                if (desc && content.desc) desc.textContent = content.desc;
            }
        });

        // 6. About Section Cards
        const aboutCards = document.querySelectorAll('#about .info-card');
        if (aboutCards[0]) {
            aboutCards[0].querySelector('h3').textContent = t.proFocus;
            aboutCards[0].querySelector('p').textContent = t.proFocusDesc;
        }
        if (aboutCards[1]) {
            aboutCards[1].querySelector('h3').textContent = t.learning;
            aboutCards[1].querySelector('p').textContent = t.learningDesc;
        }

        // 7. Education Card
        const eduCard = document.querySelector('.education-card');
        if (eduCard) {
            const school = eduCard.querySelector('h3');
            const major = eduCard.querySelector('.highlight');
            const desc = eduCard.querySelector('p:not(.highlight)');
            if (school) school.textContent = t.eduSchool;
            if (major) major.textContent = t.eduMajor;
            if (desc) desc.textContent = t.eduDesc;
        }

        // 8. Technical Skills Cards
        const skillCards = document.querySelectorAll('#skills .skill-card');
        t.skillCategories.forEach((cat, index) => {
            if (skillCards[index]) {
                skillCards[index].querySelector('h3').textContent = cat.title;
                const lis = skillCards[index].querySelectorAll('li');
                cat.items.forEach((item, itemIdx) => {
                    if (lis[itemIdx]) lis[itemIdx].textContent = item;
                });
            }
        });

        // 9. Projects Cards
        const projCards = document.querySelectorAll('#projects .project-card');
        t.projectList.forEach((proj, index) => {
            if (projCards[index]) {
                projCards[index].querySelector('h3').textContent = proj.title;
                projCards[index].querySelector('.badge').textContent = t.projectBadges[proj.badge];
                projCards[index].querySelector('.project-role').textContent = proj.role;
                
                const pElements = projCards[index].querySelectorAll('p');
                if (pElements.length > 1 && proj.achieve) {
                    pElements[1].innerHTML = proj.achieve;
                    if (pElements[2]) pElements[2].textContent = proj.desc;
                } else if (pElements[1]) {
                    pElements[1].textContent = proj.desc;
                }
            }
        });

        // 10. Soft Skills Cards
        const softCards = document.querySelectorAll('#soft-skills .soft-card');
        t.softCategories.forEach((cat, index) => {
            if (softCards[index]) {
                softCards[index].querySelector('h3').textContent = cat.title;
                const lis = softCards[index].querySelectorAll('li');
                cat.items.forEach((item, itemIdx) => {
                    if (lis[itemIdx]) lis[itemIdx].textContent = item;
                });
            }
        });

        // 11. Contact Block & Form Elements
        const contactCard = document.querySelector('.contact-card');
        if (contactCard) {
            contactCard.querySelector('h3').textContent = t.getInTouch;
            contactCard.querySelector('p').textContent = t.getInTouchDesc;
        }

        const submitBtn = document.querySelector('.contact-form .btn');
        if (submitBtn) submitBtn.textContent = t.sendMsg;

        const labelName = document.querySelector('.label-name');
        const labelEmail = document.querySelector('.label-email');
        const labelMessage = document.querySelector('.label-message');
        if (labelName) labelName.textContent = lang === 'en' ? 'Name' : 'Tên';
        if (labelEmail) labelEmail.textContent = lang === 'en' ? 'Email' : 'Email';
        if (labelMessage) labelMessage.textContent = lang === 'en' ? 'Message' : 'Tin nhắn';

        const nameInput = document.querySelector('.contact-form input[type="text"]');
        const emailInput = document.querySelector('.contact-form input[type="email"]');
        const messageTextarea = document.querySelector('.contact-form textarea');
        if (nameInput) nameInput.placeholder = lang === 'en' ? 'Your name' : 'Tên của bạn';
        if (emailInput) emailInput.placeholder = lang === 'en' ? 'you@example.com' : 'you@example.com';
        if (messageTextarea) messageTextarea.placeholder = lang === 'en' ? 'Tell me about your idea...' : 'Hãy chia sẻ về ý tưởng của bạn...';

        // 12. Footer
        const footerText = document.querySelector('footer p');
        if (footerText) footerText.innerHTML = t.footer;
    }

    applyLanguage(currentLang);

    // ============ Typing Effect ============
    if (typedText) {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeEffect = () => {
            const roles = window.translatedRoles || translations[currentLang].rolesTyping;
            const currentRole = roles[roleIndex];
            typedText.textContent = isDeleting
                ? currentRole.substring(0, charIndex - 1)
                : currentRole.substring(0, charIndex + 1);

            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                speed = 1800;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 500;
            }

            setTimeout(typeEffect, speed);
        };

        typedText.textContent = '';
        typeEffect();
    }

    // ============ Theme Toggle ============
    if (themeToggle) {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');

        applyTheme(initialTheme);

        themeToggle.addEventListener('click', () => {
            const nextTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
            applyTheme(nextTheme);
        });
    }

    function applyTheme(theme) {
        body.classList.toggle('light-theme', theme === 'light');
        if (themeToggle) {
            const icon = themeToggle.querySelector('.theme-toggle__icon');
            const text = themeToggle.querySelector('.theme-toggle__text');
            if (icon) {
                icon.textContent = theme === 'light' ? '☀️' : '🌙';
            }
            if (text) {
                text.textContent = theme === 'light' ? 'Light' : 'Dark';
            }
            themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
        }
        localStorage.setItem('portfolio-theme', theme);
    }

    // ============ Form Handling (Gửi ngầm qua Formspree API) ============
    if (form && formStatus) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            const url = form.action;
            const formData = new FormData(form);

            formStatus.textContent = currentLang === 'en' ? 'Sending...' : 'Đang gửi tin nhắn...';
            formStatus.style.color = 'var(--main-color)';

            fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    formStatus.textContent = currentLang === 'en' 
                        ? 'Thanks! Your message has been sent successfully.'
                        : 'Cảm ơn anh! Tin nhắn đã được gửi thẳng về Gmail của Kyl rồi nhé.';
                    formStatus.style.color = '#10b981';
                    form.reset(); 
                } else {
                    throw new Error('Gửi mail thất bại');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formStatus.textContent = currentLang === 'en' 
                    ? 'Oops! Something went wrong. Please try again.'
                    : 'Có lỗi xảy ra rồi anh ơi! Hãy kiểm tra lại kết nối mạng.';
                formStatus.style.color = '#ef4444';
            });
        });
    }        

    // ============ Scroll Events ============
    window.addEventListener('scroll', () => {
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }

        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 40);
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============ Mobile Menu Handling (Đóng/Mở Hamburger Menu) ============
    const menuToggle = document.querySelector('#menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            const isOpen = menuToggle.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Tự động đóng menu khi chọn link điều hướng
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});