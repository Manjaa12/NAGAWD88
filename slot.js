const icons = [
  'https://i.ibb.co/zFbK3Gc/slot.png',
  'https://i.ibb.co/t3C9h6F/bola.png',
  'https://i.ibb.co/6gdVvRM/dadu.png'
];

let saldo = localStorage.getItem('saldo');
saldo = saldo ? parseInt(saldo) : 0;
document.getElementById('saldo').textContent = 'Saldo Anda: Rp ' + saldo.toLocaleString();

function updateSaldoBaru(tambah) {
  saldo += tambah;
  localStorage.setItem('saldo', saldo);
  document.getElementById('saldo').textContent = 'Saldo Anda: Rp ' + saldo.toLocaleString();
}

function putarSlot() {
  let hasil = [];
  let waktuStop = [1000, 2000, 3000];

  for (let i = 1; i <= 3; i++) {
    (function(i){
      let reel = document.getElementById('reel' + i);
      let interval = setInterval(() => {
        let idx = Math.floor(Math.random() * icons.length);
        reel.style.backgroundImage = `url('${icons[idx]}')`;
        hasil[i-1] = idx;
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
      }, waktuStop[i-1]);
    })(i);
  }

  setTimeout(() => {
    if (hasil[0] === hasil[1] && hasil[1] === hasil[2]) {
      let menang = Math.floor(Math.random() * 300000 + 50000);
      alert('JACKPOT! Anda MENANG Rp ' + menang.toLocaleString());
      updateSaldoBaru(menang);
      updateRiwayatSlot('MENANG Rp ' + menang.toLocaleString());
    } else {
      alert('Belum beruntung, coba lagi!');
    }
  }, 3500);
}

function updateRiwayatSlot(text) {
  let riwayat = JSON.parse(localStorage.getItem('riwayat')) || [];
  riwayat.unshift('Slot ➔ ' + text);
  if (riwayat.length > 10) riwayat.pop();
  localStorage.setItem('riwayat', JSON.stringify(riwayat));
        }
