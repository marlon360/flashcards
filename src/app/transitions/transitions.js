export const SlideLeft = {
    transition: {
        from: {opacity: 0, transform: 'translate3d(50%, 0, 0)'},
        enter: {opacity: 1, transform: 'translate3d(0%, 0, 0)'},
        leave: {opacity: 0, transform: 'translate3d(-100%, 0, 0)'},
    }
} 

export const SlideRight = {
    transition: {
        from: {opacity: 0, transform: 'translate3d(-50%, 0, 0)'},
        enter: {opacity: 1, transform: 'translate3d(0%, 0, 0)'},
        leave: {opacity: 0, transform: 'translate3d(50%, 0, 0)'},
    }
} 

export const SlideOverFromBottom = {
    transition: {
        from: {opacity: 1, transform: 'translate3d(0, 100%, 0)'},
        enter: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
        leave: {opacity: 0.9, transform: 'translate3d(0, 0, 0)'},
    }
} 

export const SlideDown = {
    transition: {
        from: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
        enter: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
        leave: {opacity: 1, transform: 'translate3d(0, 100%, 0)'},
    }
} 