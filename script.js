const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(categoria => {
        categoria.addEventListener('toggle', () => {
            if (categoria.open) {
                categorias.forEach(otherCategoria => {
                    if (otherCategoria !== categoria && otherCategoria.open) {
                        otherCategoria.open = false;
                    }
                });
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            const offset = 70; 

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    function typeEffect(element, text, delay = 50, callback = null) {
        let i = 0;
        element.style.visibility = 'visible';
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, delay);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    const titleElement = document.querySelector('.my-area h1');
    const subtitleElement = document.querySelector('.my-area p');

    const originalTitle = titleElement.textContent;
    const originalSubtitle = subtitleElement.textContent;

    function startSubtitleTyping() {
        typeEffect(subtitleElement, originalSubtitle, 50);
    }

    typeEffect(titleElement, originalTitle, 75, startSubtitleTyping);

    
