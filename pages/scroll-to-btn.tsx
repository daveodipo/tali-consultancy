import { useEffect, useState } from "react"
import { BsArrowUpSquareFill } from "react-icons/bs";

export default function ScrollToTopButton ({displayAfter ,target}) {
const [showScrollButton, setShowScrollButton] = useState(false)

const handleShowScrollButton = () => {
    if(!showScrollButton && window.scrollY > displayAfter) {
        setShowScrollButton(true)
        return;
    }
    if(!showScrollButton && window.scrollY <= displayAfter) {
        setShowScrollButton(false)
        return;
    }
}
window.addEventListener("scroll", handleShowScrollButton)

useEffect(()=> {
    window.removeEventListener("scroll", handleShowScrollButton)
})

const scrollToRef = (target) => {
    window.scrollTo({
        top: target.current.offsetTop,
        behavior: "smooth"
    })
}

if(showScrollButton) {
    return       <button 
    onClick={()=>scrollToRef(target)}
    className="fixed text-5xl bottom-20 right-5 text-teal-700 z-50"
  >
    <BsArrowUpSquareFill />
  </button>
} else {
    return ""
}
}