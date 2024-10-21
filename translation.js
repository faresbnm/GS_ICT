const buttons = {
    button1: document.getElementById('aboutmore1'),
    button2: document.getElementById('aboutmore2'),
    button3: document.getElementById('aboutmore3'),
    button4: document.getElementById('aboutmore4')
};



function loadLanguage(language) {
    fetch(`${language}.json`)
      .then(response => response.json())
      .then(data => {
        //navigation bar: 
        document.getElementById('nave1').textContent = data.navbar.home_nav;
        document.getElementById('nave2').textContent = data.navbar.about_nav;
        document.getElementById('nave3').textContent = data.navbar.services_nav;
        document.getElementById('nave4').textContent = data.navbar.partners_nav;
        document.getElementById('nave5').textContent = data.navbar.contact_nav;
        document.getElementById('darkmodetxt').textContent = data.navbar.darkmodetxt;
        //Home Page:
        document.getElementById('intro1').textContent = data.introbox.intro1;
        document.getElementById('intro2').textContent = data.introbox.intro2;
        document.getElementById('intro3').textContent = data.introbox.intro3;
        //About page:
        document.getElementById('title1').textContent = data.about.title;
        document.getElementById('about1').textContent = data.about.title1;
        document.getElementById('aboutph1').textContent = data.about.title1;
        document.getElementById('par1').textContent = data.about.content1;
        document.getElementById('parph1').textContent = data.about.content1;
        document.getElementById('about2').textContent = data.about.title2;
        document.getElementById('aboutph2').textContent = data.about.title2;
        document.getElementById('par2').textContent = data.about.content2;
        document.getElementById('parph2').textContent = data.about.content2;
        document.getElementById('about3').textContent = data.about.title3;
        document.getElementById('aboutph3').textContent = data.about.title3;
        document.getElementById('par3').textContent = data.about.content3;
        document.getElementById('parph3').textContent = data.about.content3;
        document.getElementById('about4').textContent = data.about.title4;
        document.getElementById('aboutph4').textContent = data.about.title4;
        document.getElementById('par4').textContent = data.about.content4;
        document.getElementById('parph4').textContent = data.about.content4;
        buttons.button1.textContent = data.about.readmore;
        buttons.button2.textContent = data.about.readmore;
        buttons.button3.textContent = data.about.readmore;
        buttons.button4.textContent = data.about.readmore;
        //partners page:
        document.getElementById('title3').textContent = data.partners.title3;
        document.getElementById('partners1').textContent = data.partners.txt1;
        document.getElementById('partners2').textContent = data.partners.txt2;
        document.getElementById('partners3').textContent = data.partners.txt3;
        document.getElementById('partners4').textContent = data.partners.txt4;
        //contact page:
        document.getElementById('local').textContent = data.contact.local;
        document.getElementById('cardtitle').textContent = data.contact.cardtitle;
        document.getElementById('name').textContent = data.contact.name;
        document.getElementById('num').textContent = data.contact.num;
        document.getElementById('sub').textContent = data.contact.sub;
        //Footer:
        document.getElementById('footer').textContent = data.footer.footertxt;
              
          
      

      })
      .catch(error => console.error('Error loading language file:', error));
  }
  document.getElementById('en').addEventListener('click', function () {
    var lang = 'en';
    loadLanguage(lang);
    document.getElementById('dropdownMenuButton1').textContent = 'EN';
});

  document.getElementById('fr').addEventListener('click', function () {
    var lang = 'fr';
    loadLanguage(lang);
    document.getElementById('dropdownMenuButton1').textContent = 'FR';

});


  
  
  loadLanguage('en');
  document.getElementById('dropdownMenuButton1').textContent = 'EN';



  