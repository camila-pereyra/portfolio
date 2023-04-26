import React from 'react';
import { useEffect } from 'react';
import "./TextAnimated.css"
import Typed from 'typed.js';

const TextAnimated = () => {
    const el = React.useRef(null);

    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer'],
      typeSpeed: 120,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
      showCursor: true

    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span className='textAnimated' ref={el} />
  )
}

export default TextAnimated