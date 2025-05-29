export default function decorate(block) {
    const [headingLevelWrapper] = document.querySelector('.nikon-hero-wrapper').children;
    let headingLevel;

    if(headingLevelWrapper.className.includes('h1')) {
        headingLevel = 'h1';
    }
    else if(headingLevelWrapper.className.includes('h2')) {
        headingLevel = 'h2';
    }
    else if(headingLevelWrapper.className.includes('h3')) {
        headingLevel = 'h3';
    }
    else if(headingLevelWrapper.className.includes('h4')) {
        headingLevel = 'h4';
    }
    appendHeading(block, headingLevel);
}

function appendHeading(block, headingLevel) {
    const [titleWrapper] = block.children;
    // Hタグを作成
    const heading = document.createElement(headingLevel);
    // 整形前のPタグを取得
    const pTag = titleWrapper.querySelector('div > div > p');
    // Hタグにクラスを追加
    heading.className = 'nikon-hero-heading';
    // PタグのテキストをHタグに設定
    heading.textContent = pTag.textContent.trim();
    //既存のPタグをHタグに置き換える
    pTag.replaceWith(heading);
}