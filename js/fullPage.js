// 스크롤 시 풀페이지로 지정된 앵커로 이동 (메뉴 클릭)

$(function() {
    new fullpage("#fullpage", {
        verticalCentered: false,
        scrollBar: true,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6'],
        menu: '#menu',
        scrollingSpeed: 600
    });
});

