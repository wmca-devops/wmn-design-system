function showCode() {
  // for each button we create below
  document.querySelectorAll('.wmnds-js-show-code').forEach(ele => {
    // when clicked
    ele.addEventListener('click', e => {
      const btn = e.target || e.srcElement; // Set btn to the element from which the click came

      // if the btn clicked contains this class, then it must be active, so reset it back to the norm
      if (btn.classList.contains('wmnds-js-show-code--active')) {
        btn.parentElement.querySelector('.hljs').style.maxHeight = '200px';
        btn.classList.remove('wmnds-js-show-code--active');
        btn.innerText = 'Show more code';
      } else {
        // Else expand the code preview to 100%
        btn.parentElement.querySelector('.hljs').style.maxHeight = '100%';
        btn.classList.add('wmnds-js-show-code--active');
        btn.innerText = 'Show less code';
      }
    });
  });
}

export default () => {
  const { hljs } = window; // declare higlightJS as global var
  document.querySelectorAll('pre code').forEach(element => {
    // Run highlightJS for each pre code element found */
    hljs.highlightBlock(element);
    // If the code preview is 192 height (without padding) then we need to display the 'show more code' button
    if (element.clientHeight >= 192) {
      const htmlString = '<span class="wmnds-link wmnds-js-show-code">Show more code</span>';

      element.parentElement.insertAdjacentHTML('afterend', htmlString);
    }
  });

  showCode(); // run show code function above when hljs has init
};