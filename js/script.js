// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Define separate product card handlers for different page types
    const mainProductCards = document.querySelectorAll('.product-card:not(.product-history .product-card)');
    const accountProductCards = document.querySelectorAll('.product-history .product-card');
    
    // Handle main product cards (with overlays)
    if (mainProductCards.length > 0) {
        // Remove preloader code since we're removing preloaders from all HTML files
    // Price Range Sliders
    const minPriceSlider = document.getElementById('min-price');
    const maxPriceSlider = document.getElementById('max-price');
    const minPriceValue = document.getElementById('min-price-value');
    const maxPriceValue = document.getElementById('max-price-value');
    
    const mobileMinPriceSlider = document.getElementById('mobile-min-price');
    const mobileMaxPriceSlider = document.getElementById('mobile-max-price');
    const mobileMinPriceValue = document.getElementById('mobile-min-price-value');
    const mobileMaxPriceValue = document.getElementById('mobile-max-price-value');
    
    // Initialize desktop price sliders
    if (minPriceSlider && maxPriceSlider) {
        minPriceSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            if (value > parseInt(maxPriceSlider.value)) {
                this.value = maxPriceSlider.value;
                return;
            }
            minPriceValue.textContent = '₹' + value.toLocaleString('en-IN');
        });
        
        maxPriceSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            if (value < parseInt(minPriceSlider.value)) {
                this.value = minPriceSlider.value;
                return;
            }
            maxPriceValue.textContent = '₹' + value.toLocaleString('en-IN');
        });
    }
    
    // Initialize mobile price sliders
    if (mobileMinPriceSlider && mobileMaxPriceSlider) {
        mobileMinPriceSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            if (value > parseInt(mobileMaxPriceSlider.value)) {
                this.value = mobileMaxPriceSlider.value;
                return;
            }
            mobileMinPriceValue.textContent = '₹' + value.toLocaleString('en-IN');
        });
        
        mobileMaxPriceSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            if (value < parseInt(mobileMinPriceSlider.value)) {
                this.value = mobileMinPriceSlider.value;
                return;
            }
            mobileMaxPriceValue.textContent = '₹' + value.toLocaleString('en-IN');
        });
    }
    // Preloader code removed

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
    
    // Explore Page Filter Drawer
    const filterToggleBtn = document.querySelector('.filter-toggle-btn');
    const mobileFilterDrawer = document.querySelector('.mobile-filter-drawer');
    const closeDrawerBtn = document.querySelector('.close-drawer');
    
    if (filterToggleBtn && mobileFilterDrawer && closeDrawerBtn) {
        filterToggleBtn.addEventListener('click', function() {
            mobileFilterDrawer.classList.add('active');
        });
        
        closeDrawerBtn.addEventListener('click', function() {
            mobileFilterDrawer.classList.remove('active');
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Fade-in animation for sections
    const fadeElements = document.querySelectorAll('.section-header, .perfumery-content, .about-content, .product-card');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Product image hover effect
    }
    
    // Handle account page product cards (without overlays)
    if (accountProductCards.length > 0) {
        // No special handling needed for these cards
    }
    
    // Original product card handler (for backward compatibility)
    const productCards = document.querySelectorAll('.product-card:not(.product-history .product-card)');
    
    productCards.forEach(card => {
        const overlay = card.querySelector('.product-overlay');
        
        // Only add event listeners if overlay exists
        if (overlay) {
            card.addEventListener('mouseenter', function() {
                overlay.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', function() {
                overlay.style.opacity = '0';
            });
            
            // Add mobile view button for small screens
            const productInfo = card.querySelector('.product-info');
            const viewLink = overlay.querySelector('a')?.getAttribute('href');
            
            if (viewLink) {
                // Create mobile view button
                const mobileViewBtn = document.createElement('a');
            
                mobileViewBtn.className = 'mobile-view-btn';
                mobileViewBtn.textContent = 'View';
                mobileViewBtn.href = viewLink;
                
                // Append button only on mobile
                if (window.innerWidth <= 767 && productInfo) {
                    productInfo.appendChild(mobileViewBtn);
                }
            }
        }
    });
    
    // Handle resize to add/remove mobile buttons
    window.addEventListener('resize', function() {
        productCards.forEach(card => {
            const productInfo = card.querySelector('.product-info');
            if (productInfo) {
                const existingBtn = productInfo.querySelector('.mobile-view-btn');
                const overlay = card.querySelector('.product-overlay');
                if (overlay && overlay.querySelector('a')) {
                    const viewLink = overlay.querySelector('a').getAttribute('href');
            
                    if (window.innerWidth <= 767) {
                        // Add button if it doesn't exist
                        if (!existingBtn) {
                            const mobileViewBtn = document.createElement('a');
                            mobileViewBtn.className = 'mobile-view-btn';
                            mobileViewBtn.textContent = 'View';
                            mobileViewBtn.href = viewLink;
                            productInfo.appendChild(mobileViewBtn);
                        }
                    } else {
                        // Remove button if it exists
                        if (existingBtn) {
                            productInfo.removeChild(existingBtn);
                        }
                    }
                }
            }
        });
    });

    // Form submission handling
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // For forms using formsubmit.co, we don't need to prevent default
            // This is just for additional validation or feedback
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && !isValidEmail(emailInput.value)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
            } else {
                // Show success message for newsletter form
                if (form.classList.contains('newsletter-form')) {
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Thank you for subscribing!';
                    form.appendChild(successMessage);
                    
                    setTimeout(() => {
                        successMessage.style.opacity = '0';
                        setTimeout(() => {
                            successMessage.remove();
                        }, 500);
                    }, 3000);
                }
            }
        });
    });

    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add texture overlay to body
    const textureOverlay = document.createElement('div');
    textureOverlay.className = 'texture-overlay';
    document.body.appendChild(textureOverlay);

    // Initialize product details page if on that page
    if (window.location.pathname.includes('product-details.html')) {
        initProductDetails();
    }

    // Initialize cart functionality if on cart page
    if (window.location.pathname.includes('cart.html')) {
        initCart();
    }
});

// Product Details Page Initialization
function initProductDetails() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        // In a real application, you would fetch product details from a database
        // For now, we'll simulate with dummy data
        fetchProductDetails(productId);
    }
}

// Simulate fetching product details
function fetchProductDetails(productId) {
    // This would be replaced with an actual API call in a real application
    const productDetails = {
        1: {
            name: 'Midnight Oud',
            category: 'Perfume',
            price: '₹12,500',
            description: 'A captivating blend of rich oud, warm amber, and exotic spices. This luxurious fragrance evokes the mystery and allure of the Orient, perfect for evening wear.',
            images: ['images/perfume-1.jpg', 'images/perfume-1-alt.jpg'],
            rating: 4.8,
            reviews: [
                { name: 'Aryan Sharma', rating: 5, comment: 'Absolutely stunning fragrance that lasts all day. Worth every rupee!' },
                { name: 'Priya Patel', rating: 4, comment: 'Beautiful scent, though a bit strong initially. Settles nicely after 30 minutes.' }
            ]
        },
        // Add more products as needed
    };
    
    const product = productDetails[productId];
    if (product) {
        displayProductDetails(product);
    }
}

// Display product details on the page
function displayProductDetails(product) {
    const detailsContainer = document.querySelector('.product-details-container');
    if (detailsContainer) {
        // Update product information
        document.querySelector('.product-name').textContent = product.name;
        document.querySelector('.product-category').textContent = product.category;
        document.querySelector('.product-price').textContent = product.price;
        document.querySelector('.product-description').textContent = product.description;
        
        // Update main image
        document.querySelector('.product-main-image').src = product.images[0];
        
        // Update rating
        const ratingStars = document.querySelector('.product-rating');
        ratingStars.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('i');
            star.className = i <= product.rating ? 'fas fa-star' : 'far fa-star';
            ratingStars.appendChild(star);
        }
        
        // Update reviews
        const reviewsContainer = document.querySelector('.product-reviews');
        reviewsContainer.innerHTML = '';
        
        product.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            
            const reviewHeader = document.createElement('div');
            reviewHeader.className = 'review-header';
            
            const reviewName = document.createElement('h4');
            reviewName.textContent = review.name;
            
            const reviewRating = document.createElement('div');
            reviewRating.className = 'review-rating';
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('i');
                star.className = i <= review.rating ? 'fas fa-star' : 'far fa-star';
                reviewRating.appendChild(star);
            }
            
            reviewHeader.appendChild(reviewName);
            reviewHeader.appendChild(reviewRating);
            
            const reviewComment = document.createElement('p');
            reviewComment.textContent = review.comment;
            
            reviewElement.appendChild(reviewHeader);
            reviewElement.appendChild(reviewComment);
            
            reviewsContainer.appendChild(reviewElement);
        });
    }
}

// Cart Functionality
function initCart() {
    updateCartTotal();
    
    // Add event listeners to quantity buttons
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateCartTotal);
    });
    
    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            updateCartTotal();
        });
    });
}

// Update cart total
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;
    
    cartItems.forEach(item => {
        const priceText = item.querySelector('.cart-item-price').textContent;
        const price = parseInt(priceText.replace(/[^0-9]/g, ''));
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        
        const itemTotal = price * quantity;
        item.querySelector('.cart-item-total').textContent = '₹' + itemTotal.toLocaleString('en-IN');
        
        subtotal += itemTotal;
    });
    
    // Update subtotal
    document.querySelector('.cart-subtotal').textContent = '₹' + subtotal.toLocaleString('en-IN');
    
    // Calculate tax (assuming 18% GST)
    const tax = subtotal * 0.18;
    document.querySelector('.cart-tax').textContent = '₹' + tax.toLocaleString('en-IN');
    
    // Calculate total
    const total = subtotal + tax;
    document.querySelector('.cart-total').textContent = '₹' + total.toLocaleString('en-IN');
}