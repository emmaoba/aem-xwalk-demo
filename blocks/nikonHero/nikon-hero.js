export default function decorate(block) {
    const [titleWrapper, textWrapper, imageWrapper] = block.children;
    console.log('titleWrapper', titleWrapper);
    console.log('textWrapper', textWrapper);
    console.log('imageWrapper', imageWrapper);
}