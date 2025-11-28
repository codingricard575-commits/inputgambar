// preview gambar
document.getElementById('input-gambar').onchange = function (e) {
  const file = e.target.files[0];
  const preview=document.getElementById('preview')
  preview.innerHTML ='';
  if (file) {
    const img = document.creatElement('img');
    img.src = URL.createObject
