// header.js

document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <section class="nav-bar">
      <div class="nav-container">
        <div class="brand">
          <a href="/index.html"><img src="/assets/icon.png"></a>
        </div>
        <nav>
          <div class="nav-mobile"><a id="nav-toggle"><span></span></a></div>
          <ul class="nav-list">
            <li>
              <a href="/en/index.html">Home</a>
            </li>
            <li>
              <a href="/en/blogs/">Blogs</a>
            </li>
            <li>
              <a>Projects</a>
              <ul class="nav-dropdown">
                <li>
                  <a href="https://iigreenfoxyt.github.io/vortix">Vortix Photo Editing</a>
                </li>
                <li>
                  <a href="Problem1.html">Project #2</a>
                </li>
                <li>
                  <a href="Problem1.html">Project #3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="reading-progress-container">
        <div class="reading-progress-bar" id="reading-progress-bar"></div>
      </div>
    </section>
  `;

  // Insert the header into the document
  document.body.insertAdjacentHTML("afterbegin", header);
  
  // Load jQuery and function.js
  const jqueryScript = document.createElement("script");
  jqueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
  document.head.appendChild(jqueryScript);

  const functionScript = document.createElement("script");
  functionScript.src = "/function.js";
  document.head.appendChild(functionScript);
});
