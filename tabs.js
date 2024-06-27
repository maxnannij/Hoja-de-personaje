document.getElementById('tab1').addEventListener('click', function() {
    switchTab('section1', 'tab1');
});
document.getElementById('tab2').addEventListener('click', function() {
    switchTab('section2', 'tab2');
});
document.getElementById('tab3').addEventListener('click', function() {
    switchTab('section3', 'tab3');
});

function switchTab(sectionId, tabId) {
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.add('hidden');
   document.getElementById('section3').classList.add('hidden'); 
  document.getElementById(sectionId).classList.remove('hidden');

    document.getElementById('tab1').classList.remove('active');
    document.getElementById('tab2').classList.remove('active');  
  document.getElementById('tab3').classList.remove('active');
    document.getElementById(tabId).classList.add('active');
}

