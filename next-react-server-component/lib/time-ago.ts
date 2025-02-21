import ms from 'ms';

const map = {
    s: 'seconds',
    ms: 'milliseconds',
    m: 'minutes',
    h: 'hours',
    d: 'days',
};

export const formatTimeAgo = (date: Date) => {
    if (date) {
        const timeDiff = new Date().getTime() - date.getTime();
        const timeInMs = ms(timeDiff) as keyof typeof map;
        return map[timeInMs] ? ' ' + map[timeInMs] : '';
    }
    return '';
};
