function mainSlot() {
  let hasil = Math.random();
  if (hasil < 0.5) {
    alert('Anda KALAH 😢 Coba lagi!');
  } else {
    alert('SELAMAT 🎉 Anda MENANG Rp ' + (Math.floor(Math.random() * 500000 + 50000)));
  }
}

function mainBola() {
  let teams = ['Madrid', 'Barca', 'Liverpool', 'Chelsea'];
  let userTeam = prompt('Pilih tim kamu: Madrid / Barca / Liverpool / Chelsea');
  if (teams.includes(userTeam)) {
    let menang = Math.random() > 0.5 ? 'MENANG' : 'KALAH';
    alert('Tim ' + userTeam + ' ' + menang + '!');
  } else {
    alert('Tim tidak terdaftar!');
  }
}

function mainDadu() {
  let angka = Math.floor(Math.random() * 6) + 1;
  alert('Dadu menunjukkan angka: ' + angka);
}
