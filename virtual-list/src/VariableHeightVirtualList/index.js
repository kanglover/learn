import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';

const VariableHeightVirtualList = ({ items, renderItem, height }) => {
    const [scrollTop, setScrollTop] = useState(0);
    // 定义一个预设高度
    const [itemHeights, setItemHeights] = useState(new Array(items.length).fill(0));
    const containerRef = useRef(null);

    // 计算总高度
    const totalHeight = itemHeights.reduce((sum, h) => sum + h, 0);

    // 计算可见区域的开始和结束索引
    // TODO:可以考虑通过二分查找的方式来降低检索次数
    const computeVisibleItems = () => {
        let currentHeight = 0;
        let startIndex = 0;
        for (let i = 0; i < itemHeights.length; i++) {
            if (currentHeight >= scrollTop) {
                startIndex = i;
                break;
            }
            currentHeight += itemHeights[i];
        }

        currentHeight = 0;
        let endIndex = items.length - 1;
        for (let i = startIndex; i < itemHeights.length; i++) {
            currentHeight += itemHeights[i];
            if (currentHeight > height) {
                endIndex = i;
                break;
            }
        }
        return { startIndex, endIndex };
    };

    const { startIndex, endIndex } = computeVisibleItems();

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

    // 更新 item 高度
    const updateItemHeight = useCallback((index, height) => {
        setItemHeights((prevHeights) => {
            const newHeights = [...prevHeights];
            if (newHeights[index] !== height) {
                newHeights[index] = height;
                return newHeights;
            }
            return prevHeights;
        });
    }, []);

    // 计算每个 item 的偏移位置
    const getItemStyle = (index) => {
        const offset = itemHeights.slice(0, index).reduce((sum, h) => sum + h, 0);
        return {
            position: 'absolute',
            top: offset,
            left: 0,
            right: 0,
        };
    };

    return (
        <div ref={containerRef} style={{ overflowY: 'auto', height }}>
            <div style={{ height: totalHeight, position: 'relative' }}>
                {items.slice(startIndex, endIndex + 1).map((item, index) => (
                    <MeasureItem
                        key={startIndex + index}
                        index={startIndex + index}
                        item={item}
                        updateItemHeight={updateItemHeight}
                        renderItem={renderItem}
                        style={getItemStyle(startIndex + index)}
                    />
                ))}
            </div>
        </div>
    );
};
const MeasureItem = ({ index, item, updateItemHeight, renderItem, style }) => {
    const itemRef = useRef(null);

    useLayoutEffect(() => {
        const height = itemRef.current.clientHeight;
        updateItemHeight(index, height);
    }, [index, item, updateItemHeight]);

    return (
        <div ref={itemRef} style={style}>
            {renderItem(item, index)}
        </div>
    );
};

const Index = () => {
    const items = Array.from({ length: 1000 }, (_, index) => ({
        text: `Item ${index + 1}`,
        height: 30 + (index % 10) * 10, // 随机高度
    }));

    const renderItem = (item, index) => (
        <div style={{ padding: '5px', height: item.height, borderBottom: '1px solid #ccc' }}>
            {item.text}
        </div>
    );

    return (
        <VariableHeightVirtualList
            items={items}
            renderItem={renderItem}
            height={500}
        />
    );
};

export default Index;