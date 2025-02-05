import React from 'react'
import { useRef } from 'react'
import './style.scss'

const Index = ({ question }) => {
    const btnGroup = useRef()

    const answer1 = Math.floor(Math.random() * 101)
    const answer2 = 100 - answer1

    const animationDuration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);
    const easeOutQuad = (t) => t * (2 - t);

    function countUp(element, countTo, suffix = "") {
        let frame = 0;
        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(countTo * progress);
            if (parseInt(element.dataset.value, 10) !== currentCount) {
                element.innerHTML = `${currentCount}${suffix}`;
                element.dataset.value = currentCount;
            }
            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    }

    function pollClick(e) {
        if (e.target.classList.contains("btn")) {
            e.preventDefault();
            const element = e.target;
            const firstElement = element.nextElementSibling
                ? element
                : element.previousElementSibling;
            const secondElement = element.nextElementSibling
                ? element.nextElementSibling
                : element;

            firstElement.animate([{ width: "50%" }, { width: `${answer1}%` }], {
                duration: 500,
                easing: "ease",
                fill: "forwards"
            });

            secondElement.animate([{ width: "50%" }, { width: `${answer2}%` }], {
                duration: 500,
                easing: "ease",
                fill: "forwards"
            });



            if (answer1 > answer2) {
                firstElement.classList.add("voted", "voted-red");
                secondElement.classList.add("voted", "voted-green");
            } else if (answer1 < answer2) {
                firstElement.classList.add("voted", "voted-red");
                secondElement.classList.add("voted", "voted-green");
            } else {
                firstElement.classList.add("voted");
                secondElement.classList.add("voted");
            }

            btnGroup.removeEventListener("click", pollClick);
        }
    }






    return (
        <>
            <h4>{question}</h4>

            <div class="row poll-container justify-content-center">
                <div class="btn-group" ref={btnGroup} >
                    <button class="btn" onClick={pollClick}>
                        <span class="svg-container">
                            Julian
                        </span>
                        <span class="btn-content"></span>
                    </button>
                    <button class="btn" onClick={pollClick}>
                        <span class="svg-container">
                            Charmaine
                        </span>
                        <span class="btn-content"></span>
                    </button>
                </div>
            </div>

        </>
    )

}

export default Index