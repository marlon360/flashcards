import React, { useState, useEffect } from 'react';
import useLongPress from '../utils/useLongPress';

const MenuPosition = {
    TOP: 1,
    BOTTOM: 2
}

function ContextMenuComponent(props) {

    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState(MenuPosition.BOTTOM);

    const longPress = useLongPress(() => onEnable());

    const cardRef = React.createRef();

    useEffect(() => {
        setTimeout(() => {
            console.log("VISIBLE");
            setVisible(enabled);
        }, 0);
        return () => {};
    }, [enabled])
    
    const offset = (el) => {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft, bottom: window.innerHeight - (rect.top + scrollTop + rect.height) }
    }

    const onEnable = (ev) => {
        ev && ev.preventDefault(); 
        const elOffset = offset(cardRef.current);
        if (elOffset.top > elOffset.bottom) {
            setMenuPosition(MenuPosition.TOP);
        } else {
            setMenuPosition(MenuPosition.BOTTOM);
        }
        setEnabled(true);
    }

    const onClick = () => {
        if (!enabled) {
            if (props.children.props.onClick) {
                props.children.props.onClick();
            }
        }
    }


    return (
        <React.Fragment>
            <div {...longPress} onClick={() => onClick()} ref={cardRef} onContextMenu={(ev) => onEnable(ev)} className={`${props.className} ${enabled ? 'z-20' : ''} relative`}>
                {props.children}
                    <div className={`absolute ${enabled ? '' : 'hidden'} bg-white-80 left-0 rounded-xl z-50 ${menuPosition === MenuPosition.TOP ? '-top-10 -translate-y-full' : '-bottom-10 translate-y-full'}`}>
                        {props.actions && props.actions.map((action, index) => {
                            return (
                                <div key={index.toString()} onClick={() => action.onClick()} className={`text-gray-900 text-lg px-4 py-4 flex items-center justify-between ${index < props.actions.length ? 'border-b-2 border-gray-10' : ''}`}>
                                    <span className="mr-16">{action.name}</span>
                                    { action.icon ? <span className="">{action.icon}</span> : null }
                                </div>
                            )
                        })}
                    </div>
                
            </div>
            {(enabled) ?
                <div onClick={(e) => setEnabled(false)} className={`fixed transition-all inset-0 bg-gray-10 blurred z-10 cursor-default opacity-0 ${enabled ? '' : 'max-h-0'} ${visible ? 'opacity-100' : ''}`}></div>
            : null
            } 
        </React.Fragment>
    )
}

export default ContextMenuComponent;