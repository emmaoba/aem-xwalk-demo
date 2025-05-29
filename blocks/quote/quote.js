export default function decorate(block) {
  // 子要素の最初の1つだけを取り出す
  const [quoteWrapper] = block.children;
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  const quoteLinkDiv = document.createElement('div');
  const quoteLink = document.createElement('a');
  quoteLink.href = 'https://www.brainyquote.com/';
  quoteLink.textContent = 'Find More Quotes at BrainyQuote';
  quoteLink.target = '_blank';
  quoteLinkDiv.append(quoteLink);

  const lastQuoteWrapper = block.children[block.children.length - 1];
  lastQuoteWrapper.classList.add('quote-bottom');
  lastQuoteWrapper.append(quoteLinkDiv);
}
