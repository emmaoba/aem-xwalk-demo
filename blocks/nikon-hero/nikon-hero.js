import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {

    domManulation(block);
    appendHeading(block);
}

function domManulation(block) {
    const [titleWrapper, textWrapper, imageWrapper] = block.children;
    const paragraphs = textWrapper.querySelector('p');
    titleWrapper.querySelector('div').appendChild(paragraphs);
    // Pタグ移動後の空のdivを削除
    textWrapper.remove();
    titleWrapper.className = 'nikon-hero__text';
    imageWrapper.className = 'nikon-hero__image';
    // 不要Divタグの処理
    const picture = imageWrapper.querySelector('div > picture');
    imageWrapper.appendChild(picture);
    imageWrapper.querySelector('div').remove();
}

function appendHeading(block) {
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
