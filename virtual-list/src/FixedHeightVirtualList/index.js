import React, { useState, useEffect, useRef, useCallback } from 'react';

const VirtualList = ({ items, itemHeight, renderItem, height }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const containerRef = useRef(null);

    const totalHeight = items.length * itemHeight;
    const visibleItemCount = Math.ceil(height / itemHeight);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(items.length, startIndex + visibleItemCount);

    const handleScroll = useCallback(() => {
        setScrollTop(containerRef.current.scrollTop);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div
            ref={containerRef}
            style={{ overflowY: 'auto', height }}
        >
            <div style={{ height: totalHeight, position: 'relative' }}>
                {items.slice(startIndex, endIndex).map((item, index) => (
                    <div
                        key={startIndex + index}
                        style={{
                            position: 'absolute',
                            top: (startIndex + index) * itemHeight,
                            height: itemHeight,
                            width: '100%'
                        }}
                    >
                        {renderItem(item, startIndex + index)}
                    </div>
                ))}
            </div>
        </div>
    );
};

const index = () => {
    const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);
    const itemHeight = 30;
    const height = 500;

    const renderItem = (item) => (
        <div style={{ padding: '5px', borderBottom: '1px solid #ccc' }}>
            {item}
        </div>
    );

    return (
        <VirtualList
            items={items}
            itemHeight={itemHeight}
            renderItem={renderItem}
            height={height}
        />
    );
};

export default index;