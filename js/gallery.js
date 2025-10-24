/* ================================
   Gallery & Lightbox Functionality
   ================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ================================
    // Gallery Lightbox
    // ================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentImageIndex = 0;
    const images = [];

    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt || `Gallery image ${index + 1}`
            });
        }
    });

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboard);
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyboard);
    }

    // Update lightbox image
    function updateLightboxImage() {
        if (images[currentImageIndex]) {
            lightboxImage.src = images[currentImageIndex].src;
            lightboxImage.alt = images[currentImageIndex].alt;
            lightboxCaption.textContent = images[currentImageIndex].alt;

            // Add fade-in animation
            lightboxImage.style.opacity = '0';
            setTimeout(() => {
                lightboxImage.style.opacity = '1';
            }, 50);
        }
    }

    // Navigate to previous image
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Navigate to next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Keyboard navigation
    function handleKeyboard(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }

    // Event listeners for gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            openLightbox(index);
        });

        // Keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View image ${index + 1} in gallery`);

        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });

    // Event listeners for lightbox controls
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPreviousImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // ================================
    // Gallery Image Loading Animation
    // ================================
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, index * 50);
                galleryObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    galleryItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        galleryObserver.observe(item);
    });

    // ================================
    // Touch/Swipe Support for Mobile
    // ================================
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - show next image
                showNextImage();
            } else {
                // Swiped right - show previous image
                showPreviousImage();
            }
        }
    }

    // ================================
    // Image Preloading for Better UX
    // ================================
    function preloadImages() {
        images.forEach((image) => {
            const img = new Image();
            img.src = image.src;
        });
    }

    // Preload images after a short delay
    setTimeout(preloadImages, 1000);

    // ================================
    // Gallery Filter Animation (Optional Enhancement)
    // ================================
    function addHoverEffect() {
        galleryItems.forEach(item => {
            const img = item.querySelector('img');

            item.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });

            item.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });
    }

    addHoverEffect();

    // ================================
    // Performance: Throttle resize events
    // ================================
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalculate positions if needed
            if (lightbox.classList.contains('active')) {
                updateLightboxImage();
            }
        }, 250);
    });

    // ================================
    // Accessibility: Focus Management
    // ================================
    let lastFocusedElement;

    function openLightboxAccessible(index) {
        lastFocusedElement = document.activeElement;
        openLightbox(index);
        lightboxClose.focus();
    }

    function closeLightboxAccessible() {
        closeLightbox();
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    // Update close function to use accessible version
    const originalClose = closeLightbox;
    closeLightbox = closeLightboxAccessible;

    // ================================
    // Console Debug Info
    // ================================
    console.log(`🖼️ Gallery initialized with ${images.length} images`);

});
