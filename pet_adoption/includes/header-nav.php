<div class="top-bar"></div>

<div class="body-container">
    <header class="header">
      <div class="header-logo">
        <img src="imgs/logo-no-bg.png" alt="Logo for the company">
      </div>

      <nav id="header-nav">
        <i class="fa fa-times nav-close" onclick="hideMenuLinks()"></i>
        <ul>
          <li><a href="#" title="">Home</a></li>
          <li><a href="" title="">Link</a></li>
          <li><a href="" title="">Link</a></li>
          <li><a href="" title="">Link</a></li>
        </ul>
      </nav>

      <div class="header-navigation">
        <i class="fa fa-search" onclick="showSearchBar()"></i>
        <i class="fa fa-times search-close" onclick="hideSearchBar()"></i>
        <input type="search" id="header-search-box" placeholder="What can we assist you with?">

        <i class="fa fa-bars" onclick="showMenuLinks()"></i>
      </div>
    </header>

    <nav class="mobile-nav" id="mobile-nav">
      <i class="fa fa-times nav-close" onclick="hideMenuLinks()"></i>
      <ul>
        <li><a href="/index.php" class="active" aria-label="Go to Home Page">Home</a></li>
        <li><a href="./process.html" aria-label="View the Adoption Process page">Adoption Process</a></li>
        <li><a href="./adoption-form.html" aria-label="View the Adoption Form page">Adoption Form</a></li>
        <li><a href="./contact.html" aria-label="View the Contact Us page">Contact Us</a></li>
      </ul>
    </nav>