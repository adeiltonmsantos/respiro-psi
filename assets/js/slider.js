/////////////////////////////
// Function to build a slider
/////////////////////////////

// The slider must have the following structure with CSS classes:
// <div class="slider"> => Main slider container
//    <div class="slider-container"> => Slides container
//       <div class="slide"> ... </div> => Each slide
//       <div class="slide"> ... </div> => Each slide
//       ...
//    </div>
//    <div class="slider-controls">
//       <img class="prevBtn" src="..." alt="Previous"> => Previous button
//       <img class="nextBtn" src="..." alt="Next"> => Next button
//    </div>
// </div>

// The parameters are:
// - sliderContainerClass: CSS class of the slides container
// - prevButtonClass: CSS class of the previous button
// - nextButtonClass: CSS class of the next button
// - transitiontime: Time in milliseconds for slide transition
// - autoSlideInterval: Time in milliseconds between slides


function startSlider(
    sliderContainerClass='slider-container',
    prevButtonClass='prevBtn',
    nextButtonClass='nextBtn',
    transitiontime = 1500,
    autoSlideInterval = 10000
){

    // Selecting container with the slides
    const sliderContainer = document.querySelector(`.${sliderContainerClass}`);

    // Selecting navigation buttons
    const prevBtn = document.querySelector(`.${prevButtonClass}`);
    const nextBtn = document.querySelector(`.${nextButtonClass}`);

    // Selecting effective slides
    const slides = sliderContainer.querySelectorAll('.slide');

    // Defining CSS transition to the slider container
    sliderContainer.style.transition = `transform ${transitiontime}ms ease-in-out`;

    // Index of current slide
    let currentIndex = 0;

    // Total of slides
    const totalSlides = slides.length;

    // Function to move the slider to current slide
    function updateSliderPosition(){
        const slideWidth = slides[0].clientWidth;
        sliderContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    // Function to move to next slide
    function nextSlide(){
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition()
    }

    // Function to move to previous slide
    function prevSlide(){
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition()
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => { 
        prevSlide();
        resetAutoSlide();
    });

    // Automatic slideshow
    let slideTimer = setInterval(nextSlide, autoSlideInterval);

    // Function to reset automatic slideshow timer
    function resetAutoSlide(){
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, autoSlideInterval);
    }


}